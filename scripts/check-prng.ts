// PRNG 결정론·분포 간이 검증: npx tsx scripts/check-prng.ts
import { Rng } from '../src/core/prng';
const a = new Rng('pw-test'), b = new Rng('pw-test'), c = new Rng('pw-test2');
const sa = Array.from({ length: 5 }, () => a.next()), sb = Array.from({ length: 5 }, () => b.next()), sc = Array.from({ length: 5 }, () => c.next());
const same = sa.every((v, i) => v === sb[i]); const diff = sa.some((v, i) => v !== sc[i]);
const r = new Rng('dist'); const N = 200000; let sum = 0; const buckets = new Array<number>(10).fill(0);
for (let i = 0; i < N; i++) { const v = r.next(); sum += v; buckets[Math.floor(v * 10)]!++; }
const w = new Rng('w'); const hits = { a: 0, b: 0, c: 0 };
for (let i = 0; i < 60000; i++) hits[w.weighted(['a', 'b', 'c'] as const, (k) => ({ a: 1, b: 2, c: 3 })[k])]++;
console.log(JSON.stringify({ sameSeedSame: same, otherSeedDiffers: diff, mean: +(sum / N).toFixed(4),
  bucketSpread: +((Math.max(...buckets) - Math.min(...buckets)) / (N / 10)).toFixed(4), weighted: hits, first: sa.map((v) => +v.toFixed(6)) }));
if (!same || !diff || Math.abs(sum / N - 0.5) > 0.005) process.exit(1);
