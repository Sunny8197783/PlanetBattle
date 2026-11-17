# 설치한 스킬과 활용 계획

## 설치 방식

- 기획서의 `npx skills add …` 명령은 이 작업 환경에서 npm 레지스트리가 차단되어 실행할 수 없었다.
- 대신 find-skills 절차(리더보드·인덱스 확인 → 저장소 클론 → SKILL.md 직접 검증)를 그대로 따르고,
  `npx skills add`가 하는 일(프로젝트의 `.agents/skills/<이름>/`에 스킬 폴더 복사)을 `git clone`으로 직접 수행했다.
- 검색: `vercel-labs/skills`(find-skills 원본), `heilcheng/awesome-agent-skills` 인덱스, 웹 검색으로 후보 저장소 14개를 찾고,
  그 안의 SKILL.md 548개를 색인해 27개 키워드를 각각 대조했다(`scripts/skillsearch.py`).
- 검증: 출처·라이선스 확인, 외부 전송·자격 증명 접근·무관한 설정 변경 지시가 있는지 전체 문서를 패턴 검사했다. 문제 항목 없음.
- 로컬 PC에서 동일하게 재현하려면: `npx skills add <owner/repo> --skill <이름>` (아래 표의 출처 사용).

## 설치 목록 (프로젝트 `.agents/skills/`, 42개 폴더)

| 스킬 | 출처 (라이선스) | 이 프로젝트에서 쓰는 곳 | Phase |
|---|---|---|---|
| threejs-fundamentals | cloudai-x/threejs-skills (MIT) | 렌더러·카메라·씬 그래프 기본 구성 | 2 |
| threejs-shaders | 〃 | 원소 구체, 원반, 행성, 성운 커스텀 GLSL | 3, 6 |
| threejs-postprocessing | 〃 | Bloom → 그레이딩 → OutputPass 체인 순서 | 2, 6 |
| threejs-materials | 〃 | ShaderMaterial 블렌딩·투명도 설정 | 3 |
| threejs-geometry | 〃 | 인스턴싱, 포인트 스타필드, 고리 지오메트리 | 2, 9 |
| threejs-textures | 〃 | KTX2/WebP 텍스처 로딩, 색 공간 | 3 |
| threejs-loaders / threejs-asset-pipeline | 〃 | GLB 로딩, gltf-transform 압축 규칙 | 3 |
| threejs-lighting | 〃 | 은하 뷰 항성 조명 | 4 |
| threejs-animation | 〃 | 궤도 운동, 절차 애니메이션 | 4 |
| threejs-interaction | 〃 | 드롭 조준 레이캐스트, 행성 클릭 | 4 |
| threejs-performance | 〃 | LOD·임포스터·셰이더 워밍업 | 9 |
| threejs-react-three-fiber | 〃 | (참고용) R3F 전환 시 사용 | - |
| three-best-practices | emalorenzo/three-agent-skills (MIT) | dispose, 단일 루프, 픽셀 비율 상한, 드로콜 관리 | 전 구간 |
| r3f-best-practices | 〃 | (참고용) R3F 전환 시 사용 | - |
| r3f-fundamentals / r3f-physics / r3f-shaders / r3f-postprocessing / r3f-interaction | EnzeD/r3f-skills (MIT) | (참고용) Rapier·R3F 전환 시 사용 | - |
| gsap-core / gsap-timeline | greensock/gsap-skills (MIT, 공식) | 가챠·행성 탄생 연출 타임라인, UI 전환 | 5~8 |
| gsap-utils / gsap-plugins / gsap-performance | 〃 | 이징·스내핑 유틸, 연출 성능 | 5~9 |
| gsap-greensock | dylantarre/animation-principles (MIT) | 스쿼시 & 스트레치 등 12원칙을 GSAP으로 구현 | 5 |
| animation-game-development | 〃 | 게임 피드백 애니메이션 타이밍 | 5 |
| game-designer | opusgamelabs/game-creator (MIT) | 손맛(주스), 난이도 곡선, 밸런스 점검 | 4, 5 |
| game-architecture | 〃 | EventBus + 중앙 상태 + 설정 분리 + 재시작 안전성 | 2, 4 |
| threejs-game | 〃 | three.js 게임 구조, 모바일 입력 | 2, 4 |
| threejs-perf | 〃 | 인스턴싱 템플릿, 프로파일링 | 9 |
| game-audio | 〃 | Web Audio 절차 사운드 (Strudel은 AGPL이라 쓰지 않음) | 5, 8 |
| game-qa / review-game | 〃 | Playwright 게임 QA 체크리스트 | 9 |
| game-development (game-design, game-audio, web-games, 3d-games 등 하위 10종) | vudovn/antigravity-kit (MIT) | 코어 루프 설계, 사운드 레이어링, 웹 게임 최적화 | 4, 5, 9 |
| theatre-js | noklip-io/agent-skills (MIT) | 컷씬 타임라인 설계 참고 | 7 |
| playwright | openai/skills (스킬별 LICENSE) | 브라우저 자동화 | 9 |
| playwright-best-practices | currents-dev/playwright-best-practices-skill (MIT) | E2E 테스트 작성 규칙 | 9 |
| vite / vitest | antfu/skills (MIT) | Vite 전환과 단위 테스트 | 2, 9 |
| typescript-advanced-types | wshobson/agents (MIT) | strict 타입 설계 (데이터 스키마, 이벤트 맵) | 2, 4 |
| web-design-guidelines | vercel-labs/agent-skills (MIT) | UI 접근성·반응형 점검 | 8 |

세션에 이미 들어 있어 따로 설치하지 않은 스킬: `frontend-design`(UI 디자인), `webapp-testing`(Playwright 실행 검증), `game-engine`(웹 게임 루프·물리·오디오).

## 키워드별 검색 결과

| 키워드 | 채택 |
|---|---|
| threejs, webgl | threejs-* 13종, three-best-practices, threejs-game |
| react-three-fiber, rapier, physics | r3f-* 5종, r3f-best-practices, threejs-react-three-fiber |
| shader, glsl | threejs-shaders, r3f-shaders |
| post-processing, vfx | threejs-postprocessing, r3f-postprocessing |
| game development, game design | game-development 묶음, game-designer, game-architecture |
| animation, gsap | gsap-* 5종, gsap-greensock, animation-game-development, theatre-js |
| audio, web audio | game-audio 2종 |
| performance optimization | threejs-performance, threejs-perf, gsap-performance |
| frontend design, ui ux | frontend-design(세션), web-design-guidelines |
| typescript, vite | typescript-advanced-types, vite, vitest |
| testing, playwright | webapp-testing(세션), playwright, playwright-best-practices, game-qa |
| gltf | threejs-loaders, threejs-asset-pipeline |
| procedural generation, noise, particles, puzzle game | 전용 스킬을 찾지 못함. threejs-shaders·game-designer의 관련 절과 공개 셰이더 코드(CREDITS.md 기록)를 참고해 직접 구현 |

## 사용 규칙

각 Phase를 시작할 때 위 표에서 해당 Phase의 스킬 SKILL.md를 먼저 읽고 작업한다.
R3F·Rapier 계열 스킬은 현재 빌드에서 쓰지 않는 라이브러리용이라 참고용으로만 둔다(이유는 README의 "기술 스택" 절 참고).
