// 헤드리스 브라우저로 한 판을 끝까지 자동 플레이: 타이틀 → 공방 → 12턴 → 행성 탄생 → 은하 등록
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
const mobile = process.argv.includes('--mobile');
const port = 5200 + (mobile ? 1 : 0);
const srv = spawn('node', ['scripts/dev.mjs', '--preview'], { env: { ...process.env, PORT: String(port) }, stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 1500));
await mkdir('shots', { recursive: true });
const tag = mobile ? 'm' : 'd';
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage(mobile ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, hasTouch: true } : { viewport: { width: 1280, height: 800 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto(`http://127.0.0.1:${port}/`);
await p.waitForTimeout(1200);
await p.evaluate(() => globalThis.__PW_DEBUG__.state().setQuality('low'));
await p.getByText('공방 열기').click();
await p.waitForTimeout(2500);
const st = () => p.evaluate(() => { const s = globalThis.__PW_DEBUG__.state(); return { run: s.run && { turn: s.run.turn, phase: s.run.phase, mass: s.run.mass, odds: s.run.odds.map((o) => `${o.grade}:${o.name}:${Math.round(o.p * 100)}`) , choices: s.run.choices.map(c=>c.el+'x'+c.count)}, result: s.result, scene: s.scene, pops: s.pops.map((x) => x.text) }; });
const vw = mobile ? 390 : 1280, vh = mobile ? 844 : 800;
let shotMid = false, t0 = Date.now(), seenPops = new Set();
while (Date.now() - t0 < 240000) {
  const s = await st();
  s.pops.forEach((x) => seenPops.add(x));
  if (s.result) break;
  if (s.run?.phase === 'aim') {
    const i = s.run.turn;
    // 원반 위쪽 둘레 여기저기를 눌러 떨어뜨린다
    const ang = -Math.PI / 2 + Math.sin(i * 1.7) * 1.1;
    const x = vw / 2 + Math.cos(ang) * vw * (mobile ? 0.45 : 0.25), y = vh / 2 + Math.sin(ang) * vh * 0.32;
    if (i % 4 === 1) await p.locator('.choice').nth(1).click();
    await p.mouse.move(x, y); await p.mouse.down(); await p.mouse.up();
    if (i === 7 && !shotMid) { await p.waitForTimeout(700); await p.screenshot({ path: `shots/${tag}-play.png` }); shotMid = true; console.log('mid', JSON.stringify(s.run)); }
  }
  await p.waitForTimeout(250);
}
const fin = await st();
console.log('result', JSON.stringify(fin.result), 'seconds', ((Date.now() - t0) / 1000).toFixed(0));
console.log('pops seen', [...seenPops].join(' | '));
await p.waitForTimeout(1500);
await p.screenshot({ path: `shots/${tag}-result.png` });
await p.getByText('은하에 등록').click();
await p.waitForTimeout(3500);
await p.screenshot({ path: `shots/${tag}-galaxy.png` });
const g = await st();
console.log('scene', g.scene, 'saved', await p.evaluate(() => JSON.parse(localStorage.getItem('planet-workshop/save')).collection.length));
// 저장·불러오기: 새로고침 후에도 컬렉션 유지
await p.reload(); await p.waitForTimeout(1500);
console.log('after reload title text:', await p.locator('.title__sub').textContent());
console.log('errors', errs);
await b.close(); srv.kill();
