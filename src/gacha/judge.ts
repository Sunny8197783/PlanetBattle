/**
 * 가챠 판정: 판 요약(구성비·콤보·발견 레시피) → 행성 타입별 가중치 → 시드 PRNG 추첨 → 변이 생성.
 * 수치는 planets.json과 rates.json에서 온다.
 */
import { GRADES, PLANETS, RATES, type Grade, type PlanetDef } from '../core/data';
import { Rng } from '../core/prng';

export interface RunSummary {
  share: Record<string, number>;
  mass: Record<string, number>;
  total: number;
  has: Set<string>;
  recipes: Set<string>;
  merges: number;
  maxCombo: number;
  unstable: boolean;
}

export interface Candidate {
  planet: PlanetDef;
  weight: number;
}

export interface Variant {
  hue: number;
  ring: boolean;
  ringTilt: number;
  moons: number;
  size: number;
  cloud: number;
  sea: number;
  spin: number;
  offset: [number, number, number];
}

export interface RollResult {
  planet: PlanetDef;
  grade: Grade;
  seed: string;
  variant: Variant;
  odds: Candidate[];
  pityHit: boolean;
}

const gradeRank = (g: Grade) => GRADES.indexOf(g);

export function meets(planet: PlanetDef, s: RunSummary): boolean {
  const req = planet.requires;
  if (!req) return true;
  for (const [k, min] of Object.entries(req.share ?? {})) if ((s.share[k] ?? 0) < min) return false;
  for (const k of req.has ?? []) if (!s.has.has(k)) return false;
  for (const k of req.recipes ?? []) if (!s.recipes.has(k)) return false;
  if (req.merges !== undefined && s.merges < req.merges) return false;
  if (req.maxCombo !== undefined && s.maxCombo < req.maxCombo) return false;
  if (req.unstable !== undefined && s.unstable !== req.unstable) return false;
  if (req.balance) {
    const [a, b] = req.balance.of as [string, string];
    if (Math.abs((s.share[a] ?? 0) - (s.share[b] ?? 0)) > req.balance.tolerance) return false;
  }
  return true;
}

export function pityMultiplier(pity: number): number {
  const p = RATES.pity;
  return pity >= p.softStart ? 1 + (pity - p.softStart + 1) * p.softStep : 1;
}

/** 조건을 채운 후보와 가중치. 아무것도 없으면 먼지 왜성. */
export function candidates(s: RunSummary, pity = 0): Candidate[] {
  const pityRank = gradeRank(RATES.pity.grade);
  const pm = pityMultiplier(pity);
  let out: Candidate[] = [];
  for (const planet of PLANETS) {
    if (!meets(planet, s)) continue;
    let w = planet.base;
    for (const [k, per] of Object.entries(planet.per)) w += (s.share[k] ?? 0) * per;
    w *= RATES.gradeMultiplier[planet.grade];
    if (gradeRank(planet.grade) >= pityRank) w *= pm;
    if (w > 0) out.push({ planet, weight: w });
  }
  // 천장: hardAt판째에 SSR 이상 후보가 있으면 확정
  if (pity >= RATES.pity.hardAt - 1) {
    const top = out.filter((c) => gradeRank(c.planet.grade) >= pityRank);
    if (top.length) out = top;
  }
  if (!out.length) out = [{ planet: PLANETS.find((p) => p.id === 'dustdwarf') ?? PLANETS[0]!, weight: 1 }];
  const total = out.reduce((a, c) => a + c.weight, 0);
  return out.map((c) => ({ ...c, weight: c.weight / total })).sort((a, b) => b.weight - a.weight);
}

export function makeVariant(planet: PlanetDef, seed: string): Variant {
  const r = new Rng(`${seed}:variant`);
  const v = RATES.variation;
  let moons = 0;
  const roll = r.next();
  let acc = 0;
  for (let i = 0; i < v.moons.length; i++) {
    acc += v.moons[i]!;
    if (roll < acc) {
      moons = i;
      break;
    }
  }
  return {
    hue: r.range(-v.paletteShift, v.paletteShift),
    ring: planet.forceRing === true || r.chance(v.ringChance),
    ringTilt: r.range(-0.6, 0.6),
    moons,
    size: r.range(v.sizeRange[0], v.sizeRange[1]),
    cloud: r.range(0.75, 1.25),
    sea: r.range(-0.06, 0.06),
    spin: r.range(0.08, 0.22) * (r.chance(0.15) ? -1 : 1),
    offset: [r.range(-50, 50), r.range(-50, 50), r.range(-50, 50)],
  };
}

export function roll(s: RunSummary, seed: string, pity = 0): RollResult {
  const odds = candidates(s, pity);
  const r = new Rng(`${seed}:roll`);
  const pick = r.weighted(odds, (c) => c.weight);
  const planetSeed = `${seed}:planet`;
  return {
    planet: pick.planet,
    grade: pick.planet.grade,
    seed: planetSeed,
    variant: makeVariant(pick.planet, planetSeed),
    odds,
    pityHit: pity >= RATES.pity.softStart && gradeRank(pick.planet.grade) >= gradeRank(RATES.pity.grade),
  };
}
