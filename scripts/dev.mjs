// 개발 서버: esbuild watch + serve (라이브 리로드). `--preview`는 이미 빌드된 dist만 서빙.
import { context } from 'esbuild';
import { rm } from 'node:fs/promises';
import { buildOptions, copyStatic, outdir } from './build.mjs';

const preview = process.argv.includes('--preview');
const port = Number(process.env.PORT ?? 5173);

if (!preview) {
  await rm(outdir, { recursive: true, force: true });
  await copyStatic({ dev: true });
}
const ctx = await context(buildOptions({ dev: !preview }));
if (!preview) await ctx.watch();
const server = await ctx.serve({ servedir: outdir, port, host: '127.0.0.1' });
console.log(`\n  행성 공방 ${preview ? '프리뷰' : '개발 서버'}:  http://localhost:${server.port ?? port}/\n`);
