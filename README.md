# 행성 공방

웹 기반 3D 조합 퍼즐 + 행성 수집 게임. 현재 **Phase 2 완료**(우주 배경 + 빈 원반, 코어 모듈) 상태.

## 실행

```bash
npm install
npm run dev        # http://localhost:5173 (라이브 리로드)
npm run build      # 타입 검사 후 dist/ 생성
npm run preview    # 빌드 결과 서빙
npm run shot -- --click "공방 열기"   # 헤드리스 브라우저 스크린샷 + 콘솔 오류 수집 (shots/)
npx tsx scripts/check-prng.ts          # PRNG 결정론 검증
```

## 기술 스택 (기획서와 달라진 점)

이 프로젝트를 만든 작업 환경은 npm 레지스트리 접근이 막혀 있고 GitHub만 열려 있었다.
그래서 GitHub 릴리스 태그에서 받을 수 있는 라이브러리로 구성했고, 못 쓴 것은 아래처럼 대체했다.

| 기획서 | 현재 | 이유 / 되돌리는 방법 |
|---|---|---|
| Vite | **esbuild** (`scripts/build.mjs`, `scripts/dev.mjs`) | Vite를 설치할 수 없었음. 소스는 표준 ESM·TSX라 `vite` + `@vitejs/plugin-react`를 추가하고 index.html의 스크립트 경로만 `/src/main.tsx`로 바꾸면 전환됨 |
| @react-three/fiber, drei | **three.js r187 직접 사용** + React 19(UI 레이어) | R3F는 빌드된 패키지가 필요함. 3D는 `core/Engine.ts`가 관리하고 React는 DOM UI만 담당 |
| @react-three/rapier | **자체 2D 원형 물리**(Phase 4에서 구현) | Rapier WASM 빌드를 받을 수 없었음. 원소가 한 평면의 원이라 자체 구현으로 충분하고, 완전 결정론이라 1만 판 시뮬레이션(Phase 9)을 Node에서 그대로 돌릴 수 있음 |
| @react-three/postprocessing | three.js 내장 `EffectComposer` (Bloom → 그레이딩 → OutputPass) | 같은 효과를 내장 패스와 커스텀 패스로 구현 |
| Theatre.js | **GSAP 타임라인** + 데이터 기반 컷씬 스크립트(Phase 7) | Theatre.js는 받을 수 없었음 |
| three.quarks | 커스텀 셰이더 파티클(Phase 5~6) | 소스 빌드 가능 여부를 Phase 5에서 다시 확인 |
| GSAP, Howler.js, zustand | 그대로 사용 | GitHub 릴리스 태그에서 받음 |

네트워크 설정에서 패키지 설치를 허용하면 기획서의 스택 그대로 진행할 수 있다.

## 구조

```
src/
  core/      Engine(렌더러·루프·후처리), EventBus, 저장, PRNG, 설정, 전역 상태
  workshop/  공방 씬: 원반(Disc), 이후 드롭·머지·반응·턴
  vfx/       스타필드, 성운, 공용 GLSL
  ui/        React UI 레이어
  data/      elements / recipes / planets / rates / config (.json) — 모든 수치는 여기
  gacha/ planet/ galaxy/ codex/ story/ audio/   이후 Phase에서 채움
docs/SKILLS.md     설치한 스킬과 활용 계획
CREDITS.md         라이브러리·코드 출처와 라이선스
.agents/skills/    프로젝트에 설치한 에이전트 스킬 42종
```

## 규칙

- 랜덤은 전부 `core/prng.ts`의 시드 PRNG를 거친다(`Math.random` 금지).
- 모듈 간 통신은 `core/events.ts`의 EventBus로만 한다.
- 수치는 `src/data/*.json`에 두고 코드에 하드코딩하지 않는다.
- GSAP은 게임 시간으로 구동된다(`Engine.timeScale`로 히트스톱·배속 제어).
