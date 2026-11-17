// 프로덕션 빌드: src/main.tsx → dist/assets/main.js (+ main.css), index.html·public 복사
import { build } from 'esbuild';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const outdir = path.join(root, 'dist');

/** dev.mjs와 공유하는 esbuild 옵션 */
export function buildOptions({ dev = false } = {}) {
  return {
    absWorkingDir: root,
    entryPoints: { main: 'src/main.tsx' },
    outdir: path.join(outdir, 'assets'),
    bundle: true,
    format: 'esm',
    target: ['es2022'],
    sourcemap: dev ? 'inline' : false,
    minify: !dev,
    legalComments: 'linked',
    jsx: 'automatic',
    loader: { '.woff2': 'file', '.png': 'file', '.webp': 'file', '.ogg': 'file', '.mp3': 'file' },
    assetNames: '[name]-[hash]',
    define: {
      'process.env.NODE_ENV': JSON.stringify(dev ? 'development' : 'production'),
      'import.meta.env': JSON.stringify({ MODE: dev ? 'development' : 'production', DEV: dev }),
      __DEV__: String(dev),
    },
    logLevel: 'info',
  };
}

/** index.html과 public/ 정적 파일을 dist로 복사 */
export async function copyStatic({ dev = false } = {}) {
  await mkdir(outdir, { recursive: true });
  let html = await readFile(path.join(root, 'index.html'), 'utf8');
  if (dev) {
    // esbuild serve의 라이브 리로드 이벤트 스트림
    html = html.replace(
      '</body>',
      `<script>new EventSource('/esbuild').addEventListener('change', () => location.reload());</script></body>`,
    );
  }
  await writeFile(path.join(outdir, 'index.html'), html);
  if (existsSync(path.join(root, 'public'))) {
    await cp(path.join(root, 'public'), outdir, { recursive: true });
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await rm(outdir, { recursive: true, force: true });
  await copyStatic();
  const result = await build({ ...buildOptions(), metafile: true });
  const outputs = Object.entries(result.metafile.outputs)
    .map(([file, o]) => `${path.relative(root, path.join(root, file))}  ${(o.bytes / 1024).toFixed(1)} kB`)
    .join('\n  ');
  console.log(`\n빌드 완료 → dist/\n  ${outputs}`);
}
