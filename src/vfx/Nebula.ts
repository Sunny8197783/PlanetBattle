/**
 * 움직이는 성운 배경.
 * 도메인 워핑 fBm은 화면 전체에 매 프레임 그리기엔 비싸서, 등장방형(equirect) 텍스처에 가끔씩만 구워 두고
 * 하늘 구는 그 텍스처를 읽기만 한다. 성운은 아주 천천히 움직이므로 굽는 주기가 길어도 티가 나지 않는다.
 */
import * as THREE from 'three';
import { gsap } from 'gsap';
import { NOISE_GLSL, OUTPUT_GLSL } from './glsl/noise';

const BAKE_VERT = /* glsl */ `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const BAKE_FRAG = /* glsl */ `
${NOISE_GLSL}
uniform float uTime;
uniform vec3 uDeep;
uniform vec3 uMid;
uniform vec3 uHot;
varying vec2 vUv;

void main() {
  float lon = (vUv.x * 2.0 - 1.0) * 3.14159265;
  float lat = (vUv.y - 0.5) * 3.14159265;
  vec3 d = vec3(cos(lat) * cos(lon), sin(lat), cos(lat) * sin(lon));

  float t = uTime * 0.012;
  // 도메인 워핑: 노이즈로 좌표를 한 번 비튼 뒤 다시 노이즈를 읽는다
  vec3 q = d * 1.6 + vec3(0.0, t, -t * 0.6);
  vec3 warp = vec3(pwFbm(q + 3.1), pwFbm(q + vec3(7.7, 1.3, 4.2)), pwFbm(q - 5.4));
  float n = pwFbm(d * 2.3 + warp * 1.7 + vec3(t * 0.8, 0.0, t));
  float cloud = smoothstep(-0.14, 0.42, n);
  float wisps = smoothstep(0.1, 0.5, pwFbm(d * 5.2 - warp * 2.2));

  // 은하 띠: 기울어진 한 평면 근처가 더 짙다
  float tilt = d.y * 0.92 + d.z * 0.38;
  float band = exp(-pow(tilt * 1.7 + 0.3 * warp.x, 2.0) * 2.4);

  vec3 col = uDeep * (0.25 + 0.75 * cloud);
  col = mix(col, uMid, cloud * cloud * (0.25 + 0.6 * band));
  col += uHot * wisps * cloud * band * 0.5;
  gl_FragColor = vec4(col, 1.0);
}
`;

const SKY_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const SKY_FRAG = /* glsl */ `
uniform sampler2D uMap;
uniform float uIntensity;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  vec2 uv = vec2(atan(d.z, d.x) / 6.2831853 + 0.5, asin(clamp(d.y, -1.0, 1.0)) / 3.14159265 + 0.5);
  gl_FragColor = vec4(texture2D(uMap, uv).rgb * uIntensity, 1.0);
  ${OUTPUT_GLSL}
}
`;

/** 옥타브 수(품질)별 굽는 해상도와 주기(초). interval 0 = 한 번만 굽는다. */
const BAKE_PRESET: Record<number, { width: number; interval: number }> = {
  3: { width: 512, interval: 0 },
  4: { width: 1024, interval: 0.5 },
  5: { width: 1536, interval: 0.25 },
};

export class Nebula {
  readonly mesh: THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial>;
  private target: THREE.WebGLRenderTarget;
  private bakeScene = new THREE.Scene();
  private bakeCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private bakeMaterial: THREE.ShaderMaterial;
  private bakeQuad: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private interval = 0.5;
  private nextBake = 0;
  /** 이 시각까지는 매 프레임 굽는다 (팔레트 전환 중) */
  private urgentUntil = 0;
  private time = 0;

  constructor(palette: readonly string[], octaves: number) {
    const [deep, mid, hot] = palette;
    this.bakeMaterial = new THREE.ShaderMaterial({
      vertexShader: BAKE_VERT,
      fragmentShader: BAKE_FRAG,
      defines: { OCTAVES: octaves },
      uniforms: {
        uTime: { value: 0 },
        uDeep: { value: new THREE.Color(deep) },
        uMid: { value: new THREE.Color(mid) },
        uHot: { value: new THREE.Color(hot) },
      },
      depthTest: false,
      depthWrite: false,
    });
    this.bakeQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.bakeMaterial);
    this.bakeQuad.frustumCulled = false;
    this.bakeScene.add(this.bakeQuad);
    this.target = this.makeTarget(octaves);

    this.mesh = new THREE.Mesh(
      new THREE.SphereGeometry(400, 32, 20),
      new THREE.ShaderMaterial({
        vertexShader: SKY_VERT,
        fragmentShader: SKY_FRAG,
        uniforms: { uMap: { value: this.target.texture }, uIntensity: { value: 1.0 } },
        side: THREE.BackSide,
        depthWrite: false,
        depthTest: false,
      }),
    );
    this.mesh.renderOrder = -10;
    this.mesh.frustumCulled = false;
  }

  private makeTarget(octaves: number): THREE.WebGLRenderTarget {
    const preset = BAKE_PRESET[octaves] ?? { width: 1024, interval: 0.5 };
    this.interval = preset.interval;
    const target = new THREE.WebGLRenderTarget(preset.width, preset.width / 2, {
      type: THREE.HalfFloatType, // 어두운 그라데이션의 밴딩 방지
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      wrapS: THREE.RepeatWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
      depthBuffer: false,
      generateMipmaps: false,
    });
    return target;
  }

  setOctaves(octaves: number): void {
    if (this.bakeMaterial.defines?.OCTAVES === octaves) return;
    this.bakeMaterial.defines = { ...this.bakeMaterial.defines, OCTAVES: octaves };
    this.bakeMaterial.needsUpdate = true;
    this.target.dispose();
    this.target = this.makeTarget(octaves);
    this.mesh.material.uniforms.uMap!.value = this.target.texture;
    this.nextBake = 0;
  }

  /** 씬 톤 전환 (공방의 따뜻한 보라·주황 ↔ 은하의 차가운 남색). */
  setPalette(palette: readonly string[], duration = 1.6): void {
    const u = this.bakeMaterial.uniforms;
    const targets = [u.uDeep, u.uMid, u.uHot];
    palette.slice(0, 3).forEach((hex, i) => {
      const to = new THREE.Color(hex);
      const uniform = targets[i];
      if (!uniform) return;
      gsap.to(uniform.value as THREE.Color, { r: to.r, g: to.g, b: to.b, duration, ease: 'sine.inOut' });
    });
    this.urgentUntil = this.time + duration + 0.1;
  }

  /** 메인 렌더 전에 호출. 필요할 때만 텍스처를 다시 굽는다. */
  update(renderer: THREE.WebGLRenderer, time: number, cameraPosition: THREE.Vector3): void {
    this.time = time;
    this.mesh.position.copy(cameraPosition); // 배경은 항상 카메라 중심
    const urgent = time < this.urgentUntil;
    if (!urgent && time < this.nextBake) return;
    this.nextBake = this.interval > 0 ? time + this.interval : Number.POSITIVE_INFINITY;
    this.bakeMaterial.uniforms.uTime!.value = time;
    const prev = renderer.getRenderTarget();
    renderer.setRenderTarget(this.target);
    renderer.render(this.bakeScene, this.bakeCamera);
    renderer.setRenderTarget(prev);
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
    this.bakeQuad.geometry.dispose();
    this.bakeMaterial.dispose();
    this.target.dispose();
  }
}
