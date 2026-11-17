// 무작위 플레이 시뮬레이션: npx tsx scripts/sim.ts [판 수]
import { Run } from '../src/workshop/Run';
import { roll } from '../src/gacha/judge';
import { Rng } from '../src/core/prng';
const N = Number(process.argv[2] ?? 200);
const grades: Record<string, number> = {}, planets: Record<string, number> = {}, recipes: Record<string, number> = {};
let steps = 0, combo = 0, merges = 0, unstable = 0, bodies = 0, t0 = Date.now();
for (let i = 0; i < N; i++) {
  const run = new Run(`sim-${i}`); const ai = new Rng(`ai-${i}`);
  let guard = 0;
  while (run.phase !== 'done' && guard++ < 20000) {
    if (run.phase === 'aim') run.drop(ai.int(0, run.choices.length - 1), ai.range(0, Math.PI * 2));
    run.step(1 / 60); run.events.length = 0; steps++;
  }
  const s = run.summary(); const r = roll(s, run.seed, 0);
  grades[r.grade] = (grades[r.grade] ?? 0) + 1; planets[r.planet.id] = (planets[r.planet.id] ?? 0) + 1;
  for (const k of s.recipes) recipes[k] = (recipes[k] ?? 0) + 1;
  combo += s.maxCombo; merges += s.merges; unstable += +s.unstable; bodies += run.bodies.length;
}
console.log(JSON.stringify({ runs: N, ms: Date.now() - t0, avgSimSeconds: +(steps / N / 60).toFixed(1), avgMaxCombo: +(combo / N).toFixed(2), avgMerges: +(merges / N).toFixed(1), unstable, avgBodies: +(bodies / N).toFixed(1), grades, planets, recipes }, null, 1));
