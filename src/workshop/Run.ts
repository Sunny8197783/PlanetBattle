/**
 * 한 판의 순수 로직: 원형 중력 물리, 드롭, 머지, 레시피 반응, 턴 진행.
 * three.js에 의존하지 않으므로 Node에서도 그대로 돌릴 수 있다(확률 검증 시뮬레이션용).
 * 렌더러는 events 큐를 읽어 연출만 한다.
 */
import { CONFIG } from '../core/config';
import { catalystsOf, el, ELEMENTS, nextInLine, RECIPES, type RecipeDef } from '../core/data';
import { Rng } from '../core/prng';
import type { RunSummary } from '../gacha/judge';

export interface Body {
  id: number;
  el: string;
  x: number;
  z: number;
  vx: number;
  vz: number;
  r: number;
  /** 충돌 계산용 관성 (반지름²) */
  inertia: number;
  age: number;
  /** 합체 애니메이션 중이면 상대 id */
  mergeWith: number | null;
  mergeT: number;
  mergeOut: string | null;
  mergeRecipe: string | null;
  dead: boolean;
  /** 아직 아무것과도 닿지 않음 (착지 판정용) */
  airborne: boolean;
  /** 특수 원소: 효과 발동 여부 */
  fired: boolean;
}

export interface Choice {
  el: string;
  count: number;
}

export type RunEvent =
  | { type: 'spawn'; body: Body; cause: 'drop' | 'merge' | 'react' | 'comet' }
  | { type: 'land'; body: Body; speed: number }
  | { type: 'merge'; a: Body; b: Body; out: Body; combo: number }
  | { type: 'react'; recipe: RecipeDef; inputs: Body[]; out: Body; first: boolean; combo: number }
  | { type: 'morph'; body: Body; from: string; recipe: RecipeDef; first: boolean }
  | { type: 'special'; body: Body; effect: string; affected: number }
  | { type: 'remove'; body: Body; cause: 'merge' | 'react' | 'special' | 'clear' }
  | { type: 'unstable' };

type Phase = 'aim' | 'falling' | 'done';

const P = CONFIG.physics;

export class Run {
  readonly seed: string;
  readonly rng: Rng;
  private choiceRng: Rng;
  bodies: Body[] = [];
  events: RunEvent[] = [];
  phase: Phase = 'aim';
  turn = 0;
  readonly turns: number;
  choices: Choice[] = [];
  rerolls: number;
  combo = 0;
  maxCombo = 0;
  merges = 0;
  unstable = false;
  /** 이번 판에서 일어난 레시피 */
  recipes = new Set<string>();
  /** 세이브에 이미 있던 레시피 (첫 발견 판정용) */
  private known: Set<string>;
  private nextId = 1;
  private sinceDrop = 0;

  constructor(seed: string, known: Iterable<string> = []) {
    this.seed = seed;
    this.rng = new Rng(seed);
    this.choiceRng = this.rng.fork('choices');
    this.turns = CONFIG.run.turns;
    this.rerolls = CONFIG.run.rerolls;
    this.known = new Set(known);
    this.drawChoices();
  }

  get turnsLeft(): number {
    return this.turns - this.turn;
  }

  /** 현재 원반 질량 (특수 원소 제외) */
  get mass(): number {
    let m = 0;
    for (const b of this.bodies) if (!b.dead && el(b.el).kind !== 'special') m += el(b.el).mass;
    return m;
  }

  // ───────────────────────── 턴 ─────────────────────────

  drawChoices(): void {
    const r = this.choiceRng;
    const pool = Object.entries(CONFIG.run.pool) as [string, number][];
    const specials = Object.entries(CONFIG.run.specialPool) as [string, number][];
    const out: Choice[] = [];
    let guard = 0;
    while (out.length < CONFIG.run.choices && guard++ < 50) {
      const special = out.every((c) => el(c.el).kind !== 'special') && r.chance(CONFIG.run.specialChance);
      const [id] = r.weighted(special ? specials : pool, ([, w]) => w);
      if (out.some((c) => c.el === id)) continue;
      const count = (CONFIG.run.counts as Record<string, number>)[id] ?? 1;
      out.push({ el: id, count });
    }
    this.choices = out;
  }

  reroll(): boolean {
    if (this.rerolls <= 0 || this.phase !== 'aim') return false;
    this.rerolls--;
    this.drawChoices();
    return true;
  }

  /** angle: 드롭 궤도 위 각도(라디안), XZ 평면 기준 atan2(z, x) */
  drop(choiceIndex: number, angle: number): boolean {
    const choice = this.choices[choiceIndex];
    if (!choice || this.phase !== 'aim') return false;
    const R = CONFIG.disc.dropRadius;
    for (let i = 0; i < choice.count; i++) {
      const a = angle + (i - (choice.count - 1) / 2) * P.spread;
      const b = this.spawn(choice.el, Math.cos(a) * R, Math.sin(a) * R);
      b.vx = -Math.cos(a) * P.dropSpeed;
      b.vz = -Math.sin(a) * P.dropSpeed;
      b.airborne = true;
      this.events.push({ type: 'spawn', body: b, cause: 'drop' });
    }
    this.turn++;
    this.combo = 0;
    this.sinceDrop = 0;
    this.phase = 'falling';
    return true;
  }

  isSettled(): boolean {
    if (this.sinceDrop < CONFIG.run.settleMinTime) return false;
    if (this.sinceDrop > CONFIG.run.settleMaxTime) return true;
    const s2 = CONFIG.run.settleSpeed ** 2;
    return this.bodies.every(
      (b) => b.dead || (b.mergeWith === null && (el(b.el).kind !== 'special' || b.fired) && b.vx * b.vx + b.vz * b.vz < s2),
    );
  }

  // ───────────────────────── 시뮬레이션 ─────────────────────────

  step(dt: number): void {
    if (this.phase === 'done') return;
    this.sinceDrop += dt;
    const n = P.substeps;
    const h = dt / n;
    for (let s = 0; s < n; s++) this.substep(h);
    this.updateMerges(dt);
    this.updateSpecials(dt);
    this.findContacts();
    this.bodies = this.bodies.filter((b) => !b.dead);

    if (!this.unstable && (this.mass > CONFIG.disc.massLimit || this.bodies.length > CONFIG.disc.maxBodies)) {
      this.unstable = true;
      this.events.push({ type: 'unstable' });
    }

    if (this.phase === 'falling' && this.isSettled()) {
      if (this.turn >= this.turns) this.phase = 'done';
      else {
        this.phase = 'aim';
        this.drawChoices();
      }
    }
  }

  private substep(h: number): void {
    const damp = Math.exp(-P.damping * h);
    for (const b of this.bodies) {
      if (b.dead || b.mergeWith !== null) continue;
      b.age += h;
      const d = Math.hypot(b.x, b.z) || 1e-6;
      // 원형 중력: 중심 근처에선 약해져서 덜덜 떨지 않는다
      const g = P.gravity * Math.min(1, d / 1.2);
      b.vx += (-b.x / d) * g * h;
      b.vz += (-b.z / d) * g * h;
      b.vx *= damp;
      b.vz *= damp;
      b.x += b.vx * h;
      b.z += b.vz * h;
    }
    // 원끼리 충돌
    const list = this.bodies;
    for (let i = 0; i < list.length; i++) {
      const a = list[i]!;
      if (a.dead || a.mergeWith !== null) continue;
      for (let j = i + 1; j < list.length; j++) {
        const b = list[j]!;
        if (b.dead || b.mergeWith !== null) continue;
        const dx = b.x - a.x;
        const dz = b.z - a.z;
        const rr = a.r + b.r;
        const d2 = dx * dx + dz * dz;
        if (d2 >= rr * rr) continue;
        const d = Math.sqrt(d2) || 1e-4;
        const nx = dx / d;
        const nz = dz / d;
        const overlap = rr - d;
        const wa = b.inertia / (a.inertia + b.inertia);
        const wb = 1 - wa;
        a.x -= nx * overlap * wa;
        a.z -= nz * overlap * wa;
        b.x += nx * overlap * wb;
        b.z += nz * overlap * wb;
        const rv = (b.vx - a.vx) * nx + (b.vz - a.vz) * nz;
        if (rv < 0) {
          const jImp = -(1 + P.restitution) * rv;
          a.vx -= nx * jImp * wa;
          a.vz -= nz * jImp * wa;
          b.vx += nx * jImp * wb;
          b.vz += nz * jImp * wb;
          for (const body of [a, b]) {
            if (body.airborne) {
              body.airborne = false;
              this.events.push({ type: 'land', body, speed: -rv });
            }
          }
        }
      }
    }
    // 중심 근처에 처음 도달해도 착지로 친다
    for (const b of this.bodies) {
      if (b.airborne && Math.hypot(b.x, b.z) < b.r + 0.3) {
        b.airborne = false;
        this.events.push({ type: 'land', body: b, speed: Math.hypot(b.vx, b.vz) });
      }
    }
  }

  /** 닿아 있는 쌍을 찾아 머지·반응을 시작한다 */
  private findContacts(): void {
    const list = this.bodies;
    for (let i = 0; i < list.length; i++) {
      const a = list[i]!;
      if (a.dead || a.mergeWith !== null) continue;
      for (let j = i + 1; j < list.length; j++) {
        const b = list[j]!;
        if (b.dead || b.mergeWith !== null || a.mergeWith !== null) continue;
        if (!this.touching(a, b)) continue;
        // 같은 원소 → 진화
        if (a.el === b.el) {
          const next = nextInLine(a.el);
          if (next) this.beginMerge(a, b, next, null);
          continue;
        }
        // 촉매 없는 레시피
        const recipe = this.recipeFor(a, b);
        if (recipe) this.beginMerge(a, b, recipe.output, recipe.id);
      }
    }
  }

  private touching(a: Body, b: Body, slop = P.contactSlop): boolean {
    const rr = a.r + b.r + slop;
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    return dx * dx + dz * dz <= rr * rr;
  }

  private recipeFor(a: Body, b: Body): RecipeDef | null {
    for (const r of RECIPES) {
      if (r.catalyst || r.inputs.length !== 2) continue;
      const [i0, i1] = r.inputs as [string, string];
      if (!((a.el === i0 && b.el === i1) || (a.el === i1 && b.el === i0))) continue;
      if (r.bulk) {
        // 대량 조건: 이 쌍에 닿아 있는 같은 재료가 더 있어야 한다
        const extra = this.bodies.filter(
          (c) => c !== a && c !== b && !c.dead && r.inputs.includes(c.el) && (this.touching(c, a, 0.15) || this.touching(c, b, 0.15)),
        ).length;
        if (2 + extra < r.bulk) continue;
      }
      return r;
    }
    return null;
  }

  private beginMerge(a: Body, b: Body, out: string, recipe: string | null): void {
    a.mergeWith = b.id;
    b.mergeWith = a.id;
    a.mergeT = b.mergeT = 0;
    a.mergeOut = b.mergeOut = out;
    a.mergeRecipe = b.mergeRecipe = recipe;
  }

  private updateMerges(dt: number): void {
    for (const a of this.bodies) {
      if (a.dead || a.mergeWith === null || a.id > a.mergeWith) continue;
      const b = this.bodies.find((x) => x.id === a.mergeWith);
      if (!b || b.dead) {
        a.mergeWith = null;
        continue;
      }
      a.mergeT += dt;
      // 서로를 향해 빨려 들어간다
      const mx = (a.x * a.inertia + b.x * b.inertia) / (a.inertia + b.inertia);
      const mz = (a.z * a.inertia + b.z * b.inertia) / (a.inertia + b.inertia);
      const k = Math.min(1, a.mergeT / P.mergeTime);
      a.x += (mx - a.x) * k;
      a.z += (mz - a.z) * k;
      b.x += (mx - b.x) * k;
      b.z += (mz - b.z) * k;
      if (a.mergeT < P.mergeTime) continue;

      const out = this.spawn(a.mergeOut!, mx, mz);
      out.vx = (a.vx + b.vx) / 2;
      out.vz = (a.vz + b.vz) / 2;
      a.dead = b.dead = true;
      this.combo++;
      this.maxCombo = Math.max(this.maxCombo, this.combo);
      if (a.mergeRecipe) {
        const recipe = RECIPES.find((r) => r.id === a.mergeRecipe)!;
        const first = this.discover(recipe.id);
        this.events.push({ type: 'remove', body: a, cause: 'react' }, { type: 'remove', body: b, cause: 'react' });
        this.events.push({ type: 'react', recipe, inputs: [a, b], out, first, combo: this.combo });
      } else {
        this.merges++;
        this.events.push({ type: 'remove', body: a, cause: 'merge' }, { type: 'remove', body: b, cause: 'merge' });
        this.events.push({ type: 'merge', a, b, out, combo: this.combo });
      }
      this.events.push({ type: 'spawn', body: out, cause: a.mergeRecipe ? 'react' : 'merge' });
    }
  }

  private discover(recipeId: string): boolean {
    this.recipes.add(recipeId);
    if (this.known.has(recipeId)) return false;
    this.known.add(recipeId);
    return true;
  }

  /** 특수 원소: 닿거나 일정 시간이 지나면 주변에 효과를 퍼뜨리고 사라진다 */
  private updateSpecials(_dt: number): void {
    for (const s of this.bodies) {
      if (s.dead || s.fired || el(s.el).kind !== 'special') continue;
      if (s.airborne && s.age < P.catalystDelay * 3) continue;
      if (s.age < P.catalystDelay) continue;
      s.fired = true;
      const effect = el(s.el).effect ?? '';
      const R = P.catalystRadius;
      const near = this.bodies.filter((b) => b !== s && !b.dead && b.mergeWith === null && Math.hypot(b.x - s.x, b.z - s.z) < R + b.r);
      let affected = 0;

      if (effect === 'clear') {
        for (const b of near) {
          const tier = el(b.el).tier ?? 9;
          if (el(b.el).kind === 'special' || tier > 1) continue;
          b.dead = true;
          affected++;
          this.events.push({ type: 'remove', body: b, cause: 'clear' });
        }
      } else if (effect === 'comet') {
        for (let i = 0; i < 2; i++) {
          const a = this.rng.range(0, Math.PI * 2);
          const w = this.spawn('water', s.x + Math.cos(a) * 0.9, s.z + Math.sin(a) * 0.9);
          this.events.push({ type: 'spawn', body: w, cause: 'comet' });
          affected++;
        }
      }

      // 촉매 레시피 (번개, 항성빛, 열, 저온)
      const cats = catalystsOf(s.el);
      for (const recipe of RECIPES) {
        if (!recipe.catalyst || !cats.includes(recipe.catalyst)) continue;
        if (recipe.inputs.length === 1) {
          for (const b of near) {
            if (b.dead || b.el !== recipe.inputs[0]) continue;
            const from = b.el;
            this.morph(b, recipe.output);
            affected++;
            this.events.push({ type: 'morph', body: b, from, recipe, first: this.discover(recipe.id) });
          }
        } else {
          const [i0, i1] = recipe.inputs as [string, string];
          for (const a of near) {
            if (a.dead || a.mergeWith !== null || a.el !== i0) continue;
            const partner = near.find((b) => !b.dead && b.mergeWith === null && b !== a && b.el === i1 && this.touching(a, b, 0.25));
            if (!partner) continue;
            this.beginMerge(a, partner, recipe.output, recipe.id);
            affected++;
          }
        }
      }
      s.dead = true;
      this.events.push({ type: 'special', body: s, effect: cats[0] ?? effect, affected });
      this.events.push({ type: 'remove', body: s, cause: 'special' });
    }
  }

  private morph(b: Body, to: string): void {
    const def = el(to);
    b.el = to;
    b.r = def.radius;
    b.inertia = def.radius * def.radius;
  }

  private spawn(id: string, x: number, z: number): Body {
    const def = el(id);
    const body: Body = {
      id: this.nextId++,
      el: id,
      x,
      z,
      vx: 0,
      vz: 0,
      r: def.radius,
      inertia: def.radius * def.radius,
      age: 0,
      mergeWith: null,
      mergeT: 0,
      mergeOut: null,
      mergeRecipe: null,
      dead: false,
      airborne: false,
      fired: false,
    };
    this.bodies.push(body);
    return body;
  }

  // ───────────────────────── 결과 ─────────────────────────

  summary(): RunSummary {
    const mass: Record<string, number> = {};
    let total = 0;
    const has = new Set<string>();
    for (const b of this.bodies) {
      if (b.dead) continue;
      const def = ELEMENTS[b.el];
      if (!def || def.kind === 'special') continue;
      mass[b.el] = (mass[b.el] ?? 0) + def.mass;
      total += def.mass;
      has.add(b.el);
    }
    const share: Record<string, number> = {};
    for (const [k, v] of Object.entries(mass)) share[k] = total > 0 ? v / total : 0;
    return { share, mass, total, has, recipes: new Set(this.recipes), merges: this.merges, maxCombo: this.maxCombo, unstable: this.unstable };
  }
}
