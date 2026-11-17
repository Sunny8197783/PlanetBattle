# CREDITS

에셋과 코드의 출처·작가·라이선스 기록. 새로 가져오는 것은 쓰기 전에 여기에 먼저 적는다.

## 라이브러리

| 이름 | 버전 | 작가 | 라이선스 | URL |
|---|---|---|---|---|
| three.js | r187 (0.187.0) | mrdoob 외 | MIT | https://github.com/mrdoob/three.js |
| GSAP | 3.15.1 | GreenSock | GSAP Standard "no charge" License (상업 사용 가능, 조건은 링크 참고) | https://github.com/greensock/GSAP · https://gsap.com/standard-license |
| Howler.js | 2.2.4 | GoldFire Studios | MIT | https://github.com/goldfire/howler.js |
| zustand | 5.1.0 | Poimandres | MIT | https://github.com/pmndrs/zustand |
| React / React DOM | 19.2 | Meta | MIT | https://github.com/facebook/react |
| esbuild (빌드) | 0.28 | Evan Wallace | MIT | https://github.com/evanw/esbuild |
| TypeScript (빌드) | 6.0 | Microsoft | Apache-2.0 | https://github.com/microsoft/TypeScript |
| Playwright (테스트) | 1.63 | Microsoft | Apache-2.0 | https://github.com/microsoft/playwright |

## 참고·개조한 코드

| 위치 | 원본 | 작가 | 라이선스 | 비고 |
|---|---|---|---|---|
| `src/vfx/glsl/noise.ts` (pwHash3, pwNoise) | Gradient Noise 3D | Inigo Quilez | MIT | https://iquilezles.org/articles/gradientnoise/ — 이름 변경, fBm 옥타브 매크로 추가 |
| `src/core/prng.ts` (xmur3, sfc32) | PRNGs | bryc (xmur3), Chris Doty-Humphrey (sfc32) | 퍼블릭 도메인 | https://github.com/bryc/code/blob/master/jshash/PRNGs.md |
| `src/core/Engine.ts` 후처리 체인 | three.js examples (EffectComposer, UnrealBloomPass, OutputPass) | three.js authors | MIT | 패스 구성 순서 참고 |

## 에셋 (텍스처·모델·사운드·폰트)

아직 없음. Phase 3에서 수집하면서 채운다(CC0 > CC-BY > MIT/OFL 우선, 출처별 하위 폴더는 `public/assets/`).

## 에이전트 스킬

개발 과정에서 참고한 스킬 42종의 출처와 라이선스는 `docs/SKILLS.md`에 정리.
