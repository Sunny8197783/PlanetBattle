/**
 * 렌더러·카메라·후처리·메인 루프를 쥔 오케스트레이터.
 * 씬 모듈(공방, 은하 …)은 SceneModule로 등록되고, 엔진이 진입·이탈·갱신을 호출한다.
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { gsap } from 'gsap';
import { Nebula } from '../vfx/Nebula';
import { Starfield } from '../vfx/Starfield';
import { CONFIG, type GradeId, type Quality, type SceneId } from './config';
import { bus } from './events';
import { Rng } from './prng';

export interface SceneModule {
  readonly id: SceneId;
  readonly root: THREE.Object3D;
  enter(from: SceneId | null): void;
  exit(to: SceneId): void;
  update(dt: number, time: number): void;
  onQuality?(pixelRatio: number): void;
  dispose(): void;
}

/** 색 보정 패스: 틴트(컬러 그레이딩) + 비네트 + 색수차 + 화면 플래시. Bloom 뒤, OutputPass 앞. */
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    uTint: { value: new THREE.Vector3(1, 1, 1) },
    uVignette: { value: 0.5 },
    uAberration: { value: 0.0 },
    uFlash: { value: 0.0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform vec3 uTint;
    uniform float uVignette;
    uniform float uAberration;
    uniform float uFlash;
    varying vec2 vUv;
    void main() {
      vec2 c = vUv - 0.5;
      float d = dot(c, c);
      vec2 off = c * d * uAberration;
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      col *= uTint;
      col *= 1.0 - uVignette * smoothstep(0.06, 0.5, d);
      col = mix(col, vec3(1.0), uFlash);
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

/** 씬별 카메라 자리와 색 톤. */
const SCENE_VIEW: Record<SceneId, { camera: number[]; grade: GradeId }> = {
  title: { camera: CONFIG.camera.title, grade: 'workshop' },
  workshop: { camera: CONFIG.camera.workshop, grade: 'workshop' },
  galaxy: { camera: CONFIG.camera.title, grade: 'galaxy' },
};

export class Engine {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  readonly stars: Starfield;
  readonly nebula: Nebula;
  /** 화면 중앙 기준 -1~1 포인터 위치 (패럴랙스용) */
  readonly pointer = new THREE.Vector2();

  private composer: EffectComposer | null = null;
  private bloom: UnrealBloomPass | null = null;
  private grade: ShaderPass | null = null;
  private modules = new Map<SceneId, SceneModule>();
  private active: SceneModule | null = null;
  private quality: Quality;
  private pixelRatio = 1;
  private camPos = new THREE.Vector3();
  private camLook = new THREE.Vector3(0, 0, 0);
  private smoothPointer = new THREE.Vector2();
  private fit = 1;
  private lastMs = 0;
  private time = 0;
  private fps = 60;
  private frames = 0;
  /** 게임 시간 배속 (히트스톱 0, 연출 빨리감기 >1) */
  timeScale = 1;
  private offs: Array<() => void> = [];

  constructor(private canvas: HTMLCanvasElement, quality: Quality, scene: SceneId) {
    this.quality = quality;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false, // 후처리를 쓰므로 MSAA는 끈다 (three-best-practices: postpro-renderer-config)
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.setClearColor(0x05030c, 1);

    this.camera = new THREE.PerspectiveCamera(CONFIG.camera.fov, 1, 0.1, 1000);
    this.camPos.fromArray(SCENE_VIEW[scene].camera);

    // 배경은 세이브와 무관한 고정 시드: 누구에게나 같은 하늘
    const skyRng = new Rng('planet-workshop/sky');
    const preset = CONFIG.quality[quality];
    this.stars = new Starfield(skyRng, CONFIG.quality.high.stars);
    this.nebula = new Nebula(CONFIG.grade[SCENE_VIEW[scene].grade].nebula, preset.nebulaOctaves);
    this.scene.add(this.nebula.mesh, this.stars.group);

    // GSAP을 자체 RAF 대신 게임 시간으로 구동한다: 히트스톱·연출 배속·빨리감기가 트윈에도 똑같이 걸린다
    gsap.ticker.remove(gsap.updateRoot);

    this.buildComposer();
    this.applyQuality(quality);
    this.applyGrade(SCENE_VIEW[scene].grade, 0);

    const onResize = () => this.resize();
    const onPointer = (e: PointerEvent) => {
      this.pointer.set((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1));
    };
    const onLost = (e: Event) => {
      e.preventDefault();
      bus.emit('engine:contextlost', {});
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointer, { passive: true });
    canvas.addEventListener('webglcontextlost', onLost);
    this.offs.push(
      () => window.removeEventListener('resize', onResize),
      () => window.removeEventListener('pointermove', onPointer),
      () => canvas.removeEventListener('webglcontextlost', onLost),
      bus.on('scene:change', ({ from, to }) => this.switchScene(from, to)),
      bus.on('quality:change', ({ quality: q }) => this.applyQuality(q)),
    );
    this.resize();
  }

  register(module: SceneModule): void {
    this.modules.set(module.id, module);
    module.root.visible = false;
    this.scene.add(module.root);
  }

  /** 첫 씬 진입 + 루프 시작. */
  start(scene: SceneId): void {
    this.enter(scene, null);
    this.renderer.setAnimationLoop((ms: number) => this.frame(ms));
  }

  /** 화면 플래시 (광과민성 옵션은 호출하는 쪽에서 세기를 0으로 준다). */
  flash(strength: number, duration = 0.5): void {
    if (!this.grade) return;
    const u = this.grade.uniforms.uFlash!;
    gsap.killTweensOf(u);
    u.value = strength;
    gsap.to(u, { value: 0, duration, ease: 'power2.out' });
  }

  stats() {
    const info = this.renderer.info;
    return {
      fps: Math.round(this.fps),
      frames: this.frames,
      time: +this.time.toFixed(2),
      calls: info.render.calls,
      triangles: info.render.triangles,
      points: info.render.points,
      programs: info.programs?.length ?? 0,
      quality: this.quality,
      pixelRatio: this.pixelRatio,
      scene: this.active?.id ?? null,
      post: this.usePost(),
    };
  }

  dispose(): void {
    this.renderer.setAnimationLoop(null);
    for (const off of this.offs) off();
    for (const module of this.modules.values()) module.dispose();
    this.stars.dispose();
    this.nebula.dispose();
    this.composer?.dispose();
    this.renderer.dispose();
  }

  // ───────────────────────── 내부 ─────────────────────────

  private usePost(): boolean {
    return CONFIG.quality[this.quality].post && this.composer !== null;
  }

  private buildComposer(): void {
    const composer = new EffectComposer(this.renderer);
    composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.9, 0.75, 0.8);
    composer.addPass(this.bloom);
    this.grade = new ShaderPass(GradeShader);
    composer.addPass(this.grade);
    composer.addPass(new OutputPass()); // 톤매핑·sRGB 변환은 맨 마지막에 한 번만
    this.composer = composer;
  }

  private applyQuality(quality: Quality): void {
    this.quality = quality;
    const preset = CONFIG.quality[quality];
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, preset.pixelRatio);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.composer?.setPixelRatio(this.pixelRatio);
    if (this.bloom) this.bloom.strength = 0.9 * preset.bloom;
    if (this.grade) this.grade.uniforms.uAberration!.value = quality === 'high' ? 0.035 : 0;
    this.stars.setCount(preset.stars);
    this.nebula.setOctaves(preset.nebulaOctaves);
    this.resize();
  }

  private applyGrade(id: GradeId, duration: number): void {
    const g = CONFIG.grade[id];
    if (this.grade) {
      const tint = this.grade.uniforms.uTint!.value as THREE.Vector3;
      gsap.to(tint, { x: g.tint[0], y: g.tint[1], z: g.tint[2], duration, ease: 'sine.inOut' });
      gsap.to(this.grade.uniforms.uVignette!, { value: g.vignette, duration, ease: 'sine.inOut' });
    }
    this.nebula.setPalette(g.nebula, duration);
  }

  private enter(to: SceneId, from: SceneId | null): void {
    // 은하 뷰(Phase 4) 전까지 타이틀은 공방 원반을 멀리서 비춘다
    const module = this.modules.get(to) ?? this.modules.get('workshop') ?? null;
    if (module !== this.active) {
      if (this.active) {
        this.active.exit(to);
        this.active.root.visible = false;
      }
      this.active = module;
      if (module) {
        module.root.visible = true;
        module.enter(from);
      }
    }
  }

  private switchScene(from: SceneId, to: SceneId): void {
    this.enter(to, from);
    const view = SCENE_VIEW[to];
    const [x, y, z] = view.camera;
    gsap.to(this.camPos, { x, y, z, duration: 1.8, ease: 'power3.inOut', overwrite: true });
    if (SCENE_VIEW[from].grade !== view.grade) this.applyGrade(view.grade, 1.6);
  }

  private resize(): void {
    const width = Math.max(1, window.innerWidth);
    const height = Math.max(1, window.innerHeight);
    const aspect = width / height;
    this.renderer.setSize(width, height, false);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.composer?.setSize(width, height);
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
    // 세로 화면에서도 원반 전체가 가로로 들어오도록 카메라를 뒤로 뺀다
    this.fit = Math.max(1, CONFIG.camera.fitAspect / aspect);
    this.stars.setScale(this.pixelRatio, height);
    for (const module of this.modules.values()) module.onQuality?.(this.pixelRatio);
    bus.emit('engine:resize', { width, height, aspect });
  }

  private frame(ms: number): void {
    const dt = Math.min((ms - this.lastMs) / 1000 || 0.016, 0.1); // 탭 복귀 시 폭주 방지
    this.lastMs = ms;
    this.time += dt * this.timeScale;
    this.frames++;
    gsap.updateRoot(this.time);
    this.fps += (1 / Math.max(dt, 1e-3) - this.fps) * 0.05;

    // 카메라: 목표 위치 + 포인터 패럴랙스
    const k = 1 - Math.exp(-dt * 5);
    this.smoothPointer.lerp(this.pointer, k);
    const par = CONFIG.camera.parallax;
    this.camera.position
      .copy(this.camPos)
      .multiplyScalar(this.fit)
      .add(_tmp.set(this.smoothPointer.x * par, this.smoothPointer.y * par * 0.6, 0));
    this.camera.lookAt(this.camLook);

    this.nebula.update(this.renderer, this.time, this.camera.position);
    this.stars.update(dt, this.time, this.smoothPointer);
    this.active?.update(dt, this.time);

    if (this.usePost() && this.composer) this.composer.render(dt);
    else this.renderer.render(this.scene, this.camera);
  }
}

const _tmp = new THREE.Vector3();
