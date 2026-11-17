/**
 * 시드 기반 결정론 PRNG.
 * 게임 안의 모든 랜덤은 이 모듈을 거친다(Math.random 직접 호출 금지).
 * 같은 시드 → 같은 수열 → 같은 판·같은 행성을 언제든 재현할 수 있다.
 */

/** 문자열 → 32비트 해시 (xmur3). */
export function hashString(str: string): number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  h = Math.imul(h ^ (h >>> 16), 2246822507);
  h = Math.imul(h ^ (h >>> 13), 3266489909);
  return (h ^ (h >>> 16)) >>> 0;
}

/** sfc32 기반 난수 생성기. */
export class Rng {
  private a: number;
  private b: number;
  private c: number;
  private d: number;
  readonly seed: string;

  constructor(seed: string | number) {
    this.seed = String(seed);
    const h = hashString(this.seed);
    this.a = h;
    this.b = hashString(`${this.seed}/b`);
    this.c = hashString(`${this.seed}/c`);
    this.d = 1;
    for (let i = 0; i < 12; i++) this.next(); // 초기 상태 섞기
  }

  /** [0, 1) */
  next(): number {
    this.a |= 0; this.b |= 0; this.c |= 0; this.d |= 0;
    const t = (((this.a + this.b) | 0) + this.d) | 0;
    this.d = (this.d + 1) | 0;
    this.a = this.b ^ (this.b >>> 9);
    this.b = (this.c + (this.c << 3)) | 0;
    this.c = (this.c << 21) | (this.c >>> 11);
    this.c = (this.c + t) | 0;
    return (t >>> 0) / 4294967296;
  }

  /** [min, max) */
  range(min: number, max: number): number {
    return min + (max - min) * this.next();
  }

  /** [min, max] 정수 */
  int(min: number, max: number): number {
    return Math.floor(this.range(min, max + 1));
  }

  chance(p: number): boolean {
    return this.next() < p;
  }

  /** 평균 0, 표준편차 1 근사 (합 12개). */
  gaussian(): number {
    let s = 0;
    for (let i = 0; i < 6; i++) s += this.next();
    return (s - 3) / Math.sqrt(0.5);
  }

  pick<T>(items: readonly T[]): T {
    if (items.length === 0) throw new Error('Rng.pick: 빈 배열');
    return items[Math.floor(this.next() * items.length)] as T;
  }

  /** 가중 추첨. 가중치 합이 0이면 균등 추첨. */
  weighted<T>(items: readonly T[], weight: (item: T) => number): T {
    if (items.length === 0) throw new Error('Rng.weighted: 빈 배열');
    const weights = items.map((it) => Math.max(0, weight(it)));
    const total = weights.reduce((s, w) => s + w, 0);
    if (total <= 0) return this.pick(items);
    let r = this.next() * total;
    for (let i = 0; i < items.length; i++) {
      r -= weights[i] as number;
      if (r < 0) return items[i] as T;
    }
    return items[items.length - 1] as T;
  }

  shuffle<T>(items: readonly T[]): T[] {
    const out = items.slice();
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      const tmp = out[i] as T;
      out[i] = out[j] as T;
      out[j] = tmp;
    }
    return out;
  }

  /** 용도별 하위 스트림. 한쪽의 호출 횟수가 다른 쪽 결과를 흔들지 않게 한다. */
  fork(label: string): Rng {
    return new Rng(`${this.seed}:${label}`);
  }
}

/**
 * 새 판·새 세이브용 시드 생성. 비결정적 입력을 쓰는 유일한 지점이며,
 * 만든 시드는 반드시 저장해서 재현 가능하게 한다.
 */
export function makeSeed(prefix = 'pw'): string {
  const buf = new Uint32Array(2);
  try {
    crypto.getRandomValues(buf);
  } catch {
    buf[0] = Date.now() >>> 0;
    buf[1] = (performance.now() * 1000) >>> 0;
  }
  return `${prefix}-${(buf[0] as number).toString(36)}${(buf[1] as number).toString(36)}`;
}

/** 데일리 챌린지용 고정 시드 (UTC 날짜 기준). */
export function dailySeed(date = new Date()): string {
  return `daily-${date.toISOString().slice(0, 10)}`;
}
