/**
 * 원시 행성 원반(중력 우물). 게임 평면은 XZ(y=0)이고, 원반은 그 위에 그려지는 셰이더 메시다.
 * uMass(0~1)로 질량이 늘수록 일렁임과 중심 밝기가 커지고, uWarn으로 한계 경고 맥동을 낸다.
 */
import * as THREE from 'three';
import { CONFIG } from '../core/config';
import type { Rng } from '../core/prng';
import { NOISE_GLSL, OUTPUT_GLSL } from '../vfx/glsl/noise';

const DISC_VERT = /* glsl */ `
uniform float uTime;
uniform float uMass;
uniform float uHalf;
varying vec2 vPos;
void main() {
  vec3 p = position;
  vPos = p.xy / uHalf;
  float r = length(vPos);
  // 중력 우물: 중심으로 갈수록 살짝 꺼진다 (PlaneGeometry의 z가 회전 후 월드 y)
  float well = -0.9 / (1.0 + pow(r * 3.2, 2.0));
  float ripple = sin(r * 14.0 - uTime * 1.6) * 0.035 * uMass * smoothstep(1.1, 0.2, r);
  p.z += well + ripple;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`;

const DISC_FRAG = /* glsl */ `
#define OCTAVES 4
${NOISE_GLSL}
uniform float uTime;
uniform float uMass;
uniform float uWarn;
uniform float uRim;
uniform float uDrop;
uniform vec3 uCore;
uniform vec3 uMid;
uniform vec3 uOuter;
varying vec2 vPos;

void main() {
  float r = length(vPos) / uRim;            // 1.0 = 원반 가장자리(질량 한계 반경)
  float ang = atan(vPos.y, vPos.x);

  // 케플러식 차등 회전: 안쪽이 더 빨리 돈다
  float swirl = ang + 2.6 * log(r + 0.08) - uTime * 0.22 / (0.35 + r);
  vec3 sp = vec3(cos(swirl) * r * 2.4, sin(swirl) * r * 2.4, uTime * 0.03);
  float arms = pwFbm(sp * 1.6) * 0.9 + pwFbm(sp * 4.3 + 9.0) * 0.45;
  arms = smoothstep(-0.25, 0.55, arms);

  float body = smoothstep(1.04, 0.86, r) * smoothstep(0.0, 0.16, r);
  float density = body * (0.22 + 0.78 * arms) * (0.55 + 0.45 * smoothstep(1.0, 0.1, r));

  // 등고선: 중력 우물의 깊이를 읽게 해 주는 동심원
  float rings = 1.0 - smoothstep(0.0, 0.035, abs(fract(pow(r, 0.7) * 6.0 - uTime * 0.02) - 0.5));
  rings *= body * 0.1;

  vec3 col = mix(uOuter, uMid, smoothstep(0.95, 0.35, r));
  col = mix(col, uCore, smoothstep(0.5, 0.0, r));
  vec3 outc = col * density * (0.75 + 0.6 * uMass);
  outc += col * rings;

  // 중심의 원시 핵 발광: 질량이 늘수록 밝아진다
  float core = exp(-r * 9.0) * (0.9 + 2.2 * uMass) + exp(-r * 30.0) * 1.6;
  outc += uCore * core;

  // 가장자리 한계선: 평소엔 은은하고, 경고 때 맥동한다
  float pulse = 0.5 + 0.5 * sin(uTime * 7.0);
  float rim = 1.0 - smoothstep(0.0, 0.012, abs(r - 1.0));
  vec3 rimCol = mix(uMid, vec3(1.0, 0.25, 0.2), uWarn);
  outc += rimCol * rim * (0.35 + uWarn * (0.6 + 1.2 * pulse));

  // 드롭 궤도: 플레이어가 원소를 놓는 바깥 고리 (점선)
  float rd = length(vPos) / uDrop;
  float dash = step(0.5, fract(ang * 18.0 / 6.2831853 + uTime * 0.03));
  float drop = (1.0 - smoothstep(0.0, 0.006, abs(rd - 1.0))) * dash;
  outc += uMid * drop * 0.5;

  float alpha = clamp(density * 0.9 + core + rim * 0.5 + drop * 0.4 + rings, 0.0, 1.0);
  gl_FragColor = vec4(outc, alpha);
  ${OUTPUT_GLSL}
}
`;

const MOTE_VERT = /* glsl */ `
attribute vec3 aOrbit; // (반지름, 초기 각, 높이 흔들림 위상)
attribute float aSize;
uniform float uTime;
uniform float uScale;
varying float vFade;
void main() {
  float r = aOrbit.x;
  float a = aOrbit.y + uTime * 0.55 / pow(max(r, 0.4), 1.5);
  float well = -0.9 / (1.0 + pow(r * 3.2 / ${(CONFIG.disc.dropRadius * 1.12).toFixed(3)}, 2.0));
  vec3 p = vec3(cos(a) * r, well + 0.05 + sin(uTime * 0.7 + aOrbit.z) * 0.06, sin(a) * r);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vFade = 0.6 + 0.4 * sin(uTime * 1.3 + aOrbit.z * 5.0);
  gl_PointSize = aSize * uScale * (18.0 / -mv.z);
}
`;

const MOTE_FRAG = /* glsl */ `
uniform vec3 uColor;
varying float vFade;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = pow(smoothstep(0.5, 0.0, d), 2.0) * vFade;
  gl_FragColor = vec4(uColor * a * 1.4, a);
  ${OUTPUT_GLSL}
}
`;

const MOTE_COUNT = 520;

export class Disc {
  readonly group = new THREE.Group();
  private disc: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private motes: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
  /** 0~1: 현재 질량 / 질량 한계 */
  mass = 0;
  /** 0~1: 한계 경고 강도 */
  warn = 0;

  constructor(rng: Rng) {
    const { radius, dropRadius } = CONFIG.disc;
    const half = dropRadius * 1.12;

    this.disc = new THREE.Mesh(
      new THREE.PlaneGeometry(half * 2, half * 2, 72, 72),
      new THREE.ShaderMaterial({
        vertexShader: DISC_VERT,
        fragmentShader: DISC_FRAG,
        uniforms: {
          uTime: { value: 0 },
          uMass: { value: 0 },
          uWarn: { value: 0 },
          uHalf: { value: half },
          uRim: { value: radius / half },
          uDrop: { value: dropRadius / half },
          uCore: { value: new THREE.Color('#ffd9a0') },
          uMid: { value: new THREE.Color('#b06bff') },
          uOuter: { value: new THREE.Color('#3b2f9a') },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      }),
    );
    this.disc.rotation.x = -Math.PI / 2;
    this.disc.renderOrder = 1;
    this.group.add(this.disc);

    // 원반을 따라 도는 먼지 알갱이
    const r = rng.fork('motes');
    const orbit = new Float32Array(MOTE_COUNT * 3);
    const size = new Float32Array(MOTE_COUNT);
    for (let i = 0; i < MOTE_COUNT; i++) {
      orbit[i * 3] = radius * (0.12 + 0.9 * Math.sqrt(r.next()));
      orbit[i * 3 + 1] = r.range(0, Math.PI * 2);
      orbit[i * 3 + 2] = r.range(0, Math.PI * 2);
      size[i] = r.range(0.6, 2.2);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(MOTE_COUNT * 3), 3));
    geo.setAttribute('aOrbit', new THREE.BufferAttribute(orbit, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), radius * 1.2);
    this.motes = new THREE.Points(
      geo,
      new THREE.ShaderMaterial({
        vertexShader: MOTE_VERT,
        fragmentShader: MOTE_FRAG,
        uniforms: { uTime: { value: 0 }, uScale: { value: 1 }, uColor: { value: new THREE.Color('#ffd7b8') } },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    this.motes.renderOrder = 2;
    this.group.add(this.motes);
  }

  setScale(pixelRatio: number): void {
    this.motes.material.uniforms.uScale!.value = pixelRatio;
  }

  update(dt: number, time: number): void {
    const u = this.disc.material.uniforms;
    u.uTime!.value = time;
    // 값이 튀지 않게 부드럽게 따라간다
    const k = 1 - Math.exp(-dt * 4);
    u.uMass!.value += (this.mass - (u.uMass!.value as number)) * k;
    u.uWarn!.value += (this.warn - (u.uWarn!.value as number)) * k;
    this.motes.material.uniforms.uTime!.value = time;
  }

  dispose(): void {
    this.disc.geometry.dispose();
    this.disc.material.dispose();
    this.motes.geometry.dispose();
    this.motes.material.dispose();
  }
}
