/**
 * 공방 씬: 판 진행(Run)을 화면에 그리고, 입력·연출·행성 탄생 시퀀스를 담당한다.
 * 게임 판정은 전부 Run이 하고, 여기서는 Run.events를 읽어 손맛 연출만 붙인다.
 */
import * as THREE from 'three';
import { gsap } from 'gsap';
import type { Engine, SceneModule } from '../core/Engine';
import { CONFIG, type SceneId } from '../core/config';
import { el, GRADES, PLANET_BY_ID, RECIPES } from '../core/data';
import { bus } from '../core/events';
import { loadSave, writeSave, type PlanetRecord } from '../core/save';
import { useGame, type RunView } from '../core/store';
import { candidates, roll, type RollResult } from '../gacha/judge';
import { PlanetView } from '../planet/Planet';
import { haptic, sfx } from '../audio/sfx';
import { Disc } from './Disc';
import { elementMaterial, SPHERE, tickElementMaterials } from './ElementMaterial';
import { Run, type Body, type RunEvent } from './Run';
import { Rng } from '../core/prng';

const HALF = CONFIG.disc.dropRadius * 1.12;
/** 원반 셰이더의 중력 우물과 같은 식 → 원소가 우물 표면에 얹혀 보이게 */
const well = (r: number) => -0.9 / (1 + Math.pow((r * 3.2) / HALF, 2));

interface BodyView {
  mesh: THREE.Mesh;
  pop: { s: number };
  squash: { xz: number; y: number };
}

/** 이펙트용 링·파편 풀 */
class FxPool {
  readonly group = new THREE.Group();
  private ringGeo = new THREE.RingGeometry(0.86, 1, 64);
  private dotGeo = new THREE.SphereGeometry(1, 8, 6);
  private rings: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>[] = [];
  private dots: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>[] = [];
  private rng = new Rng('fx');

  private take<T extends THREE.Mesh>(list: T[], make: () => T): T {
    const free = list.find((m) => !m.visible);
    if (free) return free;
    const m = make();
    list.push(m);
    this.group.add(m);
    return m;
  }

  ring(x: number, y: number, z: number, color: THREE.ColorRepresentation, from: number, to: number, dur = 0.5, opacity = 0.9): void {
    const m = this.take(this.rings, () => {
      const mesh = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      mesh.rotation.x = -Math.PI / 2;
      mesh.renderOrder = 5;
      return mesh;
    });
    m.visible = true;
    m.position.set(x, y, z);
    m.material.color.set(color);
    m.material.opacity = opacity;
    m.scale.setScalar(from);
    gsap.killTweensOf([m.scale, m.material]);
    gsap.to(m.scale, { x: to, y: to, z: to, duration: dur, ease: 'power2.out' });
    gsap.to(m.material, { opacity: 0, duration: dur, ease: 'power1.in', onComplete: () => void (m.visible = false) });
  }

  burst(x: number, y: number, z: number, color: THREE.ColorRepresentation, count: number, speed: number, size = 0.08, dur = 0.6): void {
    for (let i = 0; i < count; i++) {
      const m = this.take(this.dots, () => {
        const mesh = new THREE.Mesh(this.dotGeo, new THREE.MeshBasicMaterial({ transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
        mesh.renderOrder = 6;
        return mesh;
      });
      const a = this.rng.range(0, Math.PI * 2);
      const v = speed * this.rng.range(0.5, 1.1);
      m.visible = true;
      m.position.set(x, y, z);
      m.material.color.set(color);
      m.material.opacity = 1;
      m.scale.setScalar(size * this.rng.range(0.6, 1.4));
      gsap.killTweensOf([m.position, m.material, m.scale]);
      gsap.to(m.position, { x: x + Math.cos(a) * v, z: z + Math.sin(a) * v, y: y + this.rng.range(0.1, 0.6), duration: dur, ease: 'power2.out' });
      gsap.to(m.scale, { x: 0.01, y: 0.01, z: 0.01, duration: dur, ease: 'power1.in' });
      gsap.to(m.material, { opacity: 0, duration: dur, onComplete: () => void (m.visible = false) });
    }
  }

  dispose(): void {
    this.ringGeo.dispose();
    this.dotGeo.dispose();
    for (const m of [...this.rings, ...this.dots]) m.material.dispose();
  }
}

const FX_COLOR: Record<string, string> = {
  splash: '#6fb7ff', freeze: '#d8f4ff', spark: '#e9d8ff', bloom: '#9dffb8', crunch: '#e0a070', puff: '#ffd0a8', melt: '#ff7a2a',
  lightning: '#c9a8ff', starlight: '#ffe08a', heat: '#ff8a3a', cold: '#bfefff', comet: '#bfe9ff', clear: '#a06bff',
};

export class WorkshopScene implements SceneModule {
  readonly id: SceneId = 'workshop';
  readonly root = new THREE.Group();
  readonly disc: Disc;
  private engine: Engine;
  private run: Run | null = null;
  private views = new Map<number, BodyView>();
  private bodyGroup = new THREE.Group();
  private fx = new FxPool();
  private ghost: THREE.Mesh;
  private aimLine: THREE.Line<THREE.BufferGeometry, THREE.LineDashedMaterial>;
  private aimAngle = Math.PI / 2;
  private selected = 0;
  private aiming = false;
  private planet: PlanetView | null = null;
  private roll: RollResult | null = null;
  private stage: 'play' | 'birth' | 'result' = 'play';
  private active = false;
  private syncTimer = 0;
  private lastWarn = 0;
  private raycaster = new THREE.Raycaster();
  private plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  private hit = new THREE.Vector3();
  private offs: Array<() => void> = [];


  constructor(engine: Engine) {
    this.engine = engine;
    this.disc = new Disc(new Rng('planet-workshop/disc'));
    this.root.add(this.disc.group, this.bodyGroup, this.fx.group);

    this.ghost = new THREE.Mesh(SPHERE, elementMaterial('dust'));
    this.ghost.renderOrder = 4;
    this.root.add(this.ghost);

    const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    this.aimLine = new THREE.Line(lineGeo, new THREE.LineDashedMaterial({ color: '#ffe2c0', dashSize: 0.25, gapSize: 0.18, transparent: true, opacity: 0.55 }));
    this.root.add(this.aimLine);

    this.offs.push(
      bus.on('run:select', ({ index }) => {
        this.selected = index;
        this.refreshGhost();
        this.pushRun();
      }),
      bus.on('run:reroll', () => {
        if (this.run?.reroll()) {
          sfx.select();
          this.selected = 0;
          this.refreshGhost();
          this.pushRun();
        }
      }),
      bus.on('run:new', () => this.newRun()),
      bus.on('run:register', ({ name }) => this.register(name)),
    );
  }

  // ───────────────────────── 씬 수명 ─────────────────────────

  enter(): void {
    this.active = true;
    if (!this.run) this.newRun();
    else this.pushRun();
    const c = this.engine.dom;
    const move = (e: PointerEvent) => this.onPointerMove(e);
    const down = (e: PointerEvent) => {
      if (!this.here) return;
      this.aiming = true;
      this.onPointerMove(e);
    };
    const up = (e: PointerEvent) => {
      if (!this.aiming) return;
      this.aiming = false;
      this.onPointerMove(e);
      this.tryDrop();
    };
    const key = (e: KeyboardEvent) => {
      if (useGame.getState().scene !== 'workshop' || this.stage !== 'play') return;
      if (e.key === 'ArrowLeft') this.aimAngle += 0.08;
      else if (e.key === 'ArrowRight') this.aimAngle -= 0.08;
      else if (e.key === ' ' || e.key === 'Enter') this.tryDrop();
      else if (['1', '2', '3'].includes(e.key)) useGame.getState().select(Number(e.key) - 1);
      else return;
      this.placeAim();
    };
    c.addEventListener('pointermove', move);
    c.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    window.addEventListener('keydown', key);
    this.offs.push(
      () => c.removeEventListener('pointermove', move),
      () => c.removeEventListener('pointerdown', down),
      () => window.removeEventListener('pointerup', up),
      () => window.removeEventListener('keydown', key),
    );
    if (this.stage === 'play' && this.here) this.engine.cameraTo(CONFIG.camera.workshop);
    if (this.stage === 'result' && this.here) this.engine.cameraTo([0, 3, 15.5], [0, -1.2, 0], 1.6);
  }

  refocus(): void {
    if (this.stage === 'result') this.engine.cameraTo([0, 3, 15.5], [0, -1.2, 0], 1.6);
    else if (this.stage === 'birth') this.engine.cameraTo([0, 8.5, 10.5], [0, 1.2, 0], 1.6);
    else this.refreshGhost();
  }

  /** 타이틀에서도 이 씬이 배경으로 깔리므로, 입력·카메라는 공방 화면일 때만 */
  private get here(): boolean {
    return useGame.getState().scene === 'workshop';
  }

  exit(): void {
    this.active = false;
    // 입력 리스너만 떼고(버스 구독 4개는 유지) 판 상태는 그대로 둔다
    const input = this.offs.splice(4);
    for (const off of input) off();
  }

  // ───────────────────────── 판 시작·끝 ─────────────────────────

  private newRun(): void {
    const save = loadSave();
    for (const v of this.views.values()) this.bodyGroup.remove(v.mesh);
    this.views.clear();
    this.planet?.dispose();
    if (this.planet) this.root.remove(this.planet.group);
    this.planet = null;
    this.roll = null;
    this.stage = 'play';
    this.disc.group.visible = true;
    this.disc.group.scale.setScalar(1);
    this.selected = 0;
    this.run = new Run(`${save.seed}-${save.stats.runs}`, save.codex.recipes);
    useGame.setState({ result: null, cinematic: false });
    this.refreshGhost();
    this.pushRun();
    if (this.active && this.here) this.engine.cameraTo(CONFIG.camera.workshop, [0, 0, 0], 1.2);
  }

  private register(name: string): void {
    const run = this.run;
    const r = this.roll;
    if (!run || !r || this.stage !== 'result') return;
    const save = loadSave();
    const s = run.summary();
    const rec: PlanetRecord = {
      id: `${r.seed}`,
      seed: r.seed,
      type: r.planet.id,
      grade: r.grade,
      name: name.trim() || r.planet.name,
      bornAt: Date.now(),
      composition: Object.fromEntries(Object.entries(s.share).map(([k, v]) => [k, Math.round(v * 1000) / 1000])),
      favorite: false,
    };
    const top = GRADES.indexOf(r.grade) >= GRADES.indexOf('SSR');
    writeSave({
      collection: [...save.collection, rec],
      codex: { ...save.codex, planets: [...new Set([...save.codex.planets, r.planet.id])] },
      stats: { runs: save.stats.runs + 1, merges: save.stats.merges + s.merges, bestCombo: Math.max(save.stats.bestCombo, s.maxCombo) },
      pity: top ? 0 : save.pity + 1,
    });
    useGame.setState({ collectionCount: save.collection.length + 1, result: null });
    this.run = null; // 다음 진입 때 새 판
    bus.emit('galaxy:refresh', {});
    useGame.getState().goto('galaxy');
  }

  // ───────────────────────── 입력 ─────────────────────────

  private onPointerMove(e: PointerEvent): void {
    if (this.stage !== 'play' || !this.here) return;
    this.engine.ray(e.clientX, e.clientY, this.raycaster);
    if (!this.raycaster.ray.intersectPlane(this.plane, this.hit)) return;
    this.aimAngle = Math.atan2(this.hit.z, this.hit.x);
    this.placeAim(); // 0프레임 지연: 이벤트 즉시 위치 갱신
  }

  private placeAim(): void {
    const R = CONFIG.disc.dropRadius;
    const x = Math.cos(this.aimAngle) * R;
    const z = Math.sin(this.aimAngle) * R;
    this.ghost.position.set(x, 0.5, z);
    const pos = this.aimLine.geometry.attributes.position as THREE.BufferAttribute;
    pos.setXYZ(0, x, 0.05, z);
    pos.setXYZ(1, x * 0.08, well(0.5) + 0.05, z * 0.08);
    pos.needsUpdate = true;
    this.aimLine.computeLineDistances();
  }

  private refreshGhost(): void {
    const choice = this.run?.choices[this.selected] ?? this.run?.choices[0];
    if (!choice) return;
    if (!this.run!.choices[this.selected]) this.selected = 0;
    this.ghost.material = elementMaterial(choice.el);
    this.ghost.scale.setScalar(el(choice.el).radius);
    this.placeAim();
  }

  private tryDrop(): void {
    const run = this.run;
    if (!run || this.stage !== 'play' || run.phase !== 'aim' || !this.here) return;
    const choice = run.choices[this.selected];
    if (!choice) return;
    if (run.drop(this.selected, this.aimAngle)) {
      sfx.drop(el(choice.el).tier ?? 1);
      haptic(8);
      this.selected = 0;
      this.pushRun();
    }
  }

  // ───────────────────────── 갱신 ─────────────────────────

  update(dt: number, time: number): void {

    this.disc.update(dt, time);
    tickElementMaterials(time);
    const run = this.run;
    if (run && this.stage === 'play') {
      run.step(dt);
      this.consume(run.events.splice(0));
      if (run.phase === 'done') this.startBirth();
      this.syncTimer -= dt;
      if (this.syncTimer <= 0) {
        this.syncTimer = 0.15;
        this.pushRun();
      }
    }
    this.syncBodies();
    const aimable = this.stage === 'play' && run?.phase === 'aim' && useGame.getState().scene === 'workshop';
    this.ghost.visible = aimable;
    this.aimLine.visible = aimable;
    if (aimable) this.ghost.position.y = 0.5 + Math.sin(time * 4) * 0.08;
    this.planet?.update(dt, time);
  }

  private syncBodies(): void {
    if (!this.run) return;
    for (const b of this.run.bodies) {
      const v = this.views.get(b.id);
      if (!v) continue;
      const r = Math.hypot(b.x, b.z);
      v.mesh.position.set(b.x, well(r) + b.r * 0.8, b.z);
      const s = b.r * v.pop.s;
      v.mesh.scale.set(s * v.squash.xz, s * v.squash.y, s * v.squash.xz);
    }
    if (this.run) {
      const mass = this.run.mass / CONFIG.disc.massLimit;
      this.disc.mass = Math.min(1.2, mass);
      this.disc.warn = mass > CONFIG.disc.warnAt || this.run.unstable ? 1 : 0;
    }
  }

  private addView(b: Body, from = 1): BodyView {
    const mesh = new THREE.Mesh(SPHERE, elementMaterial(b.el));
    mesh.renderOrder = 3;
    const v: BodyView = { mesh, pop: { s: from }, squash: { xz: 1, y: 1 } };
    this.views.set(b.id, v);
    this.bodyGroup.add(mesh);
    return v;
  }

  private removeView(b: Body): void {
    const v = this.views.get(b.id);
    if (!v) return;
    this.views.delete(b.id);
    gsap.killTweensOf([v.pop, v.squash]);
    this.bodyGroup.remove(v.mesh);
  }

  private worldOf(b: Body): THREE.Vector3 {
    return new THREE.Vector3(b.x, well(Math.hypot(b.x, b.z)) + b.r, b.z);
  }

  private consume(events: RunEvent[]): void {
    const st = useGame.getState();
    const feel = CONFIG.feel;
    for (const e of events) {
      switch (e.type) {
        case 'spawn': {
          const v = this.addView(e.body, e.cause === 'drop' ? 0.6 : 0.25);
          if (e.cause === 'drop') {
            // 스쿼시 & 스트레치: 눌렸다가 튀어나옴
            v.squash.xz = 1.3;
            v.squash.y = 0.7;
            gsap.to(v.pop, { s: 1, duration: 0.35, ease: 'back.out(3)' });
            gsap.to(v.squash, { xz: 1, y: 1, duration: 0.5, ease: 'elastic.out(1.2, 0.4)' });
          } else {
            gsap.to(v.pop, { s: 1, duration: 0.45, ease: 'elastic.out(1.1, 0.45)' });
          }
          break;
        }
        case 'land': {
          const v = this.views.get(e.body.id);
          const k = Math.min(1, e.speed / 6) * feel.squash;
          if (v && k > 0.1) {
            v.squash.xz = 1 + 0.35 * k;
            v.squash.y = 1 - 0.3 * k;
            gsap.to(v.squash, { xz: 1, y: 1, duration: 0.45, ease: 'elastic.out(1.3, 0.35)' });
          }
          const p = this.worldOf(e.body);
          this.fx.burst(p.x, p.y - e.body.r * 0.7, p.z, '#ffd9c0', 5, 0.8 + k, 0.05, 0.45);
          sfx.land(el(e.body.el).tier ?? 1, e.speed);
          break;
        }
        case 'merge':
        case 'react': {
          const out = e.out;
          const p = this.worldOf(out);
          const def = el(out.el);
          const combo = e.combo;
          const isReact = e.type === 'react';
          const color = isReact ? FX_COLOR[e.recipe.fx] ?? def.glow : def.glow;
          this.fx.ring(p.x, p.y - out.r * 0.5, p.z, color, out.r * 0.6, out.r * (2.6 + combo * 0.4), 0.55);
          this.fx.burst(p.x, p.y, p.z, color, isReact ? 14 : 8 + combo * 2, 1.4 + combo * 0.25, 0.07, 0.7);
          const v = this.views.get(out.id);
          if (v) {
            const m = v.mesh.material as THREE.ShaderMaterial;
            m.uniforms.uFlash!.value = 0.6;
            gsap.to(m.uniforms.uFlash!, { value: 0, duration: 0.3 });
          }
          this.engine.hitstop(feel.hitstop * (isReact ? 1.6 : 1) * Math.min(2, 0.7 + combo * 0.3));
          this.engine.shake(0.04 + combo * 0.03);
          haptic(isReact ? [10, 30, 10] : 12 + combo * 4);
          const screen = this.engine.project(p);
          if (isReact) {
            sfx.react(e.first);
            if (e.first) this.discover(e.recipe.id, out.el, screen);
            else st.pop({ text: def.name, x: screen.x, y: screen.y - 30, kind: 'react' }, 900);
          } else {
            sfx.merge(def.tier ?? 1, combo);
          }
          if (combo >= 2) st.pop({ text: `${combo} 콤보!`, x: screen.x, y: screen.y - 60, kind: 'combo', scale: Math.min(2.2, 1 + combo * 0.18) }, 1000);
          break;
        }
        case 'morph': {
          const v = this.views.get(e.body.id);
          if (v) {
            v.mesh.material = elementMaterial(e.body.el);
            v.pop.s = 0.5;
            gsap.to(v.pop, { s: 1, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
          }
          const p = this.worldOf(e.body);
          this.fx.burst(p.x, p.y, p.z, FX_COLOR[e.recipe.fx] ?? '#fff', 8, 1.2, 0.06);
          sfx.react(e.first);
          const screen = this.engine.project(p);
          if (e.first) this.discover(e.recipe.id, e.body.el, screen);
          break;
        }
        case 'special': {
          const p = this.worldOf(e.body);
          const color = FX_COLOR[e.effect] ?? el(e.body.el).glow;
          this.fx.ring(p.x, p.y - 0.3, p.z, color, 0.4, CONFIG.physics.catalystRadius * 1.1, 0.7, 1);
          this.fx.ring(p.x, p.y - 0.3, p.z, '#ffffff', 0.2, CONFIG.physics.catalystRadius * 0.7, 0.45, 0.8);
          this.fx.burst(p.x, p.y, p.z, color, 18, 2.6, 0.08, 0.8);
          sfx.special(e.effect);
          this.engine.shake(0.12);
          haptic(20);
          const screen = this.engine.project(p);
          st.pop({ text: el(e.body.el).name, sub: e.affected ? `${e.affected}개에 효과` : '효과 없음', x: screen.x, y: screen.y - 40, kind: 'info' }, 1100);
          break;
        }
        case 'remove':
          this.removeView(e.body);
          break;
        case 'unstable': {
          sfx.warn();
          haptic([30, 40, 30]);
          this.engine.shake(0.2);
          st.pop({ text: '원반 불안정!', sub: '질량 한계를 넘었어요', x: window.innerWidth / 2, y: window.innerHeight * 0.3, kind: 'warn' }, 1800);
          break;
        }
      }
    }
    // 한계 근처 경고음 (턴마다 한 번)
    if (this.run && this.run.mass / CONFIG.disc.massLimit > CONFIG.disc.warnAt && this.run.turn !== this.lastWarn) {
      this.lastWarn = this.run.turn;
      sfx.warn();
    }
  }

  /** 첫 발견: 화면이 잠깐 멈추고 NEW! 도감 카드가 날아든다 */
  private discover(recipeId: string, outEl: string, screen: { x: number; y: number }): void {
    const save = loadSave();
    if (!save.codex.recipes.includes(recipeId)) {
      writeSave({
        codex: {
          ...save.codex,
          recipes: [...save.codex.recipes, recipeId],
          elements: [...new Set([...save.codex.elements, outEl])],
        },
      });
    }
    const recipe = RECIPES.find((r) => r.id === recipeId);
    this.engine.hitstop(0.35);
    if (useGame.getState().settings.flash) this.engine.flash(0.25, 0.4);
    useGame.getState().pop({ text: `NEW! ${el(outEl).name}`, sub: recipe?.hint, x: screen.x, y: screen.y, kind: 'new' }, 2200);
  }

  // ───────────────────────── 행성 탄생 시퀀스 ─────────────────────────

  private startBirth(): void {
    const run = this.run;
    if (!run || this.stage !== 'play') return;
    this.stage = 'birth';
    const save = loadSave();
    const summary = run.summary();
    const r = roll(summary, run.seed, save.pity);
    this.roll = r;
    const rank = GRADES.indexOf(r.grade);
    const gold = rank >= 2;
    const speed = useGame.getState().settings.speed || 1;
    this.pushRun();
    useGame.setState({ cinematic: rank >= 3 });

    const views = [...run.bodies].map((b) => ({ b, v: this.views.get(b.id) })).filter((x) => x.v);
    const tl = gsap.timeline({ timeScale: speed });
    this.engine.cameraTo([0, 8.5, 10.5], [0, 1.2, 0], 2.2);
    sfx.condense();

    // 1) 남은 원소가 소용돌이치며 중심으로
    const spin = { t: 0 };
    const start = views.map(({ b }) => ({ r: Math.hypot(b.x, b.z), a: Math.atan2(b.z, b.x) }));
    tl.to(spin, {
      t: 1,
      duration: 1.5,
      ease: 'power2.in',
      onUpdate: () => {
        views.forEach(({ b, v }, i) => {
          const s0 = start[i]!;
          const rr = s0.r * (1 - spin.t);
          const a = s0.a + spin.t * 5;
          b.x = Math.cos(a) * rr;
          b.z = Math.sin(a) * rr;
          v!.pop.s = 1 - spin.t * 0.85;
        });
        this.disc.mass = 0.6 + spin.t * 0.8;
      },
    });
    // SSR 이상: 응축 직전 화면이 멈추는 예고
    if (rank >= 3) tl.to({}, { duration: 0.6, onStart: () => this.engine.shake(0.05) });
    // 2) 응축 → 흰 플래시 + 충격파
    tl.add(() => {
      for (const { b } of views) this.removeView(b);
      const flash = useGame.getState().settings.flash ? 1 : 0.15;
      this.engine.flash(0.95 * flash, 0.9);
      this.engine.shake(0.35);
      haptic([40, 30, 60]);
      const c = gold ? '#ffd36a' : '#ffffff';
      this.fx.ring(0, 0.2, 0, c, 0.5, 14, 1.1, 1);
      this.fx.ring(0, 0.25, 0, gold ? '#ff9a3a' : '#c9a8ff', 0.3, 9, 0.9, 0.9);
      this.fx.burst(0, 0.6, 0, c, 40, 7, 0.1, 1.2);
      sfx.birth(rank);
      gsap.to(this.disc.group.scale, { x: 0.01, y: 0.01, z: 0.01, duration: 0.6, ease: 'power3.in', onComplete: () => void (this.disc.group.visible = false) });

      // 3) 행성 실루엣 등장
      const planet = new PlanetView(r.planet, r.variant, { radius: 2.2 });
      planet.group.position.set(0, 1.4, 0);
      planet.group.scale.setScalar(0.01);
      planet.setLight(new THREE.Vector3(-0.7, 0.5, 0.8));
      planet.setReveal(0);
      this.planet = planet;
      this.root.add(planet.group);
      const rv = { v: 0 };
      gsap.timeline({ timeScale: speed })
        .to(planet.group.scale, { x: 1, y: 1, z: 1, duration: 0.9, ease: 'back.out(1.6)' })
        // 4) 지형 → 바다 → 구름 → 대기 순으로 칠해지듯
        .to(rv, { v: 1, duration: 2.6, ease: 'sine.inOut', onUpdate: () => planet.setReveal(rv.v) }, 0.2)
        .add(() => this.showResult(), '-=0.3');
    });
  }

  private showResult(): void {
    const run = this.run;
    const r = this.roll;
    if (!run || !r) return;
    this.stage = 'result';
    const s = run.summary();
    const save = loadSave();
    useGame.setState({
      cinematic: false,
      result: {
        planetId: r.planet.id,
        name: r.planet.name,
        grade: r.grade,
        desc: r.planet.desc ?? '',
        seed: r.seed,
        composition: s.share,
        recipes: [...s.recipes],
        maxCombo: s.maxCombo,
        merges: s.merges,
        pityHit: r.pityHit,
        firstPlanet: !save.codex.planets.includes(r.planet.id),
      },
    });
    this.pushRun();
    this.engine.cameraTo([0, 3, 15.5], [0, -1.2, 0], 1.6);
  }

  /** UI용 상태 반영 */
  private pushRun(): void {
    const run = this.run;
    if (!run) return;
    const save = loadSave();
    const odds = candidates(run.summary(), save.pity)
      .slice(0, 4)
      .map((c) => ({ id: c.planet.id, name: c.planet.hidden && !save.codex.planets.includes(c.planet.id) ? '???' : c.planet.name, grade: c.planet.grade, p: c.weight }));
    const view: RunView = {
      turn: run.turn,
      turns: run.turns,
      choices: run.choices.map((c) => ({ ...c })),
      selected: this.selected,
      rerolls: run.rerolls,
      mass: run.mass,
      massLimit: CONFIG.disc.massLimit,
      combo: run.combo,
      maxCombo: run.maxCombo,
      phase: this.stage === 'play' ? (run.phase === 'aim' ? 'aim' : 'falling') : this.stage,
      odds,
      unstable: run.unstable,
    };
    const prev = useGame.getState().run;
    if (prev && JSON.stringify(prev) === JSON.stringify(view)) return;
    useGame.setState({ run: view });
    if (view.phase === 'aim' && prev?.phase === 'falling') this.refreshGhost();
  }

  onQuality(pixelRatio: number): void {
    this.disc.setScale(pixelRatio);
  }

  dispose(): void {
    for (const off of this.offs) off();
    this.disc.dispose();
    this.fx.dispose();
    this.planet?.dispose();
    this.aimLine.geometry.dispose();
    this.aimLine.material.dispose();
  }
}

/** 등급별 테두리 색 (UI 공용) */
export const GRADE_COLOR: Record<string, string> = { N: '#a9a3c0', R: '#6fc3ff', SR: '#ffd36a', SSR: '#ff8ad8', UR: '#b9ff6a' };
export { PLANET_BY_ID };
