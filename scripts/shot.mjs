// 빌드 결과를 헤드리스 Chromium(WebGL 소프트웨어 렌더링)으로 띄워 스크린샷과 콘솔 오류를 수집한다.
// 사용: node scripts/shot.mjs [--out shots] [--click "공방 열기"] [--wait 2500] [--mobile]
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { outdir, root } from './build.mjs';

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : fallback;
};
const out = path.resolve(root, arg('out', 'shots'));
const waitMs = Number(arg('wait', '2500'));
const clickText = arg('click', '');
const mobile = process.argv.includes('--mobile');
const tag = arg('tag', mobile ? 'mobile' : 'desktop');

const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.woff2': 'font/woff2', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml' };
const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', 'http://x');
  const file = path.join(outdir, url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname));
  if (!file.startsWith(outdir)) { res.writeHead(403).end(); return; }
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': mime[path.extname(file)] ?? 'application/octet-stream' }).end(body);
  } catch { res.writeHead(404).end('not found'); }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const { port } = server.address();

const browser = await chromium.launch({
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const page = await browser.newPage({
  viewport: mobile ? { width: 390, height: 844 } : { width: 1280, height: 800 },
  deviceScaleFactor: mobile ? 2 : 1,
  hasTouch: mobile,
});
const logs = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));

await mkdir(out, { recursive: true });
await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'load' });
await page.waitForTimeout(waitMs);
await page.screenshot({ path: path.join(out, `${tag}-1.png`) });
if (clickText) {
  await page.getByText(clickText, { exact: false }).first().click();
  await page.waitForTimeout(waitMs + 1500);
  await page.screenshot({ path: path.join(out, `${tag}-2.png`) });
}
const stats = await page.evaluate(() => globalThis.__PW_DEBUG__?.stats?.() ?? null);
console.log(JSON.stringify({ port, stats, logs }, null, 2));
await browser.close();
server.close();
process.exit(logs.some((l) => l.startsWith('[pageerror]') || l.startsWith('[error]')) ? 1 : 0);
