/**
 * 절차 생성 행성. 행성 정의(look) + 변이(variant)만으로 같은 모습을 언제든 다시 그린다.
 * 지형(3D 노이즈 높이) · 바다 · 극지 얼음 · 구름 · 가스 띠 · 용암 발광 · 도시 불빛 · 오로라 · 대기 림 · 고리 · 위성.
 * uReveal(0→1)을 올리면 지형 → 바다 → 구름 → 대기 순으로 '칠해지듯' 드러난다.
 */
import * as THREE from 'three';
import type { PlanetDef } from '../core/data';
import type { Variant } from '../gacha/judge';
import { NOISE_GLSL, OUTPUT_GLSL } from '../vfx/glsl/noise';

const VERT = /* glsl */ `
varying vec3 vObj;
varying vec3 vWorldN;
varying vec3 vWorldPos;
void main() {
  vObj = position;
  vWorldN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const FRAG = /* glsl */ `
#define OCTAVES 5
${NOISE_GLSL}
uniform float uTime;
uniform float uKind;      // 0 지형, 1 가스
uniform vec3 uLow, uHigh, uPeak, uDeep, uShallow, uAtmo;
uniform float uSea, uCloud, uEmissive, uIce, uCity, uAurora;
uniform vec3 uOffset;
uniform vec3 uLight;      // 월드 기준 빛이 오는 방향
uniform float uReveal;
uniform float uSilhouette;
varying vec3 vObj;
varying vec3 vWorldN;
varying vec3 vWorldPos;

void main() {
  vec3 p = normalize(vObj);
  vec3 q = p * 1.7 + uOffset;
  float h = pwFbm(q) * 1.25 + 0.5;               // 대략 0~1
  h += pwNoise(q * 6.0) * 0.06;

  vec3 col;
  float isSea = 0.0;
  if (uKind < 0.5) {
    col = mix(uLow, uHigh, smoothstep(0.35, 0.68, h));
    col = mix(col, uPeak, smoothstep(0.7, 0.86, h));
    if (uSea > 0.0) {
      isSea = 1.0 - smoothstep(uSea - 0.01, uSea + 0.01, h);
      vec3 sea = mix(uDeep, uShallow, smoothstep(uSea - 0.22, uSea, h));
      col = mix(col, sea, isSea);
    }
    // 극지 얼음
    float lat = abs(p.y) + pwNoise(q * 3.0) * 0.12;
    col = mix(col, vec3(0.94, 0.97, 1.0), smoothstep(1.0 - uIce, 1.05 - uIce * 0.9, lat) * step(0.001, uIce));
  } else {
    // 가스 띠: 위도 + 난류 비틀림
    float turb = pwFbm(vec3(p.x * 2.0, p.y * 7.0, p.z * 2.0) + uOffset + vec3(uTime * 0.03, 0.0, 0.0));
    float band = sin(p.y * 16.0 + turb * 5.0) * 0.5 + 0.5;
    float band2 = sin(p.y * 37.0 + turb * 9.0) * 0.5 + 0.5;
    col = mix(uDeep, uShallow, band);
    col = mix(col, uHigh, band2 * 0.35);
    col = mix(col, uPeak, smoothstep(0.75, 1.0, band * band2) * 0.5);
    // 대적점
    float spot = 1.0 - smoothstep(0.05, 0.16, length(vec2(atan(p.z, p.x) - 1.0, (p.y + 0.28) * 2.2)));
    col = mix(col, uLow, spot * 0.8);
  }

  // 조명
  vec3 n = normalize(vWorldN);
  vec3 L = normalize(uLight);
  float ndl = dot(n, L);
  float diff = smoothstep(-0.15, 0.6, ndl);
  vec3 lit = col * (0.06 + 0.98 * diff);
  // 바다 반사
  vec3 V = normalize(cameraPosition - vWorldPos);
  vec3 H = normalize(L + V);
  lit += vec3(1.0, 0.95, 0.85) * pow(max(dot(n, H), 0.0), 60.0) * isSea * diff * 0.9;

  // 용암·수정 발광 (밤면에서도 보인다)
  float lavaMask = uKind < 0.5 ? (uSea > 0.0 ? isSea : smoothstep(0.45, 0.3, h)) : 0.0;
  float flick = 0.8 + 0.2 * sin(uTime * 3.0 + h * 40.0);
  lit += uShallow * lavaMask * uEmissive * flick * 1.4;

  // 도시 불빛 (밤면, 육지)
  float night = smoothstep(0.1, -0.25, ndl);
  float city = step(0.86, pwNoise(q * 28.0) * 0.5 + 0.5) * (1.0 - isSea) * night * uCity;
  lit += vec3(1.0, 0.78, 0.4) * city * 2.2;

  // 구름
  float cl = pwFbm(p * 2.6 + uOffset * 0.7 + vec3(uTime * 0.02, 0.0, uTime * 0.01));
  float cloud = smoothstep(0.5 - uCloud * 0.55, 0.62, cl + 0.25) * step(0.001, uCloud);
  float cloudReveal = smoothstep(0.55, 0.8, uReveal);
  lit = mix(lit, vec3(1.0) * (0.08 + diff), cloud * 0.85 * cloudReveal);

  // 오로라 (극지 밤면)
  float aur = smoothstep(0.7, 0.85, abs(p.y)) * smoothstep(0.92, 0.82, abs(p.y));
  aur *= 0.6 + 0.4 * sin(atan(p.z, p.x) * 9.0 + uTime * 1.5);
  lit += vec3(0.3, 1.0, 0.7) * aur * uAurora * (0.4 + night) * 0.9;

  // 대기 림
  float fres = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  lit += uAtmo * fres * (0.25 + 1.2 * smoothstep(-0.3, 0.6, ndl)) * smoothstep(0.75, 1.0, uReveal);

  // 칠해지듯 드러나는 연출: 지형 높이 순서로 채워진다
  float paint = smoothstep(h - 0.08, h + 0.08, uReveal * 1.4 - 0.1);
  vec3 core = mix(vec3(1.0, 0.92, 0.75) * 1.6, uAtmo * 0.25, smoothstep(0.0, 0.4, uReveal));
  lit = mix(core, lit, paint);
  lit = mix(lit, vec3(0.0), uSilhouette);

  gl_FragColor = vec4(lit, 1.0);
  ${OUTPUT_GLSL}
}
`;

const ATMO_VERT = /* glsl */ `
varying vec3 vN;
varying vec3 vWorldPos;
void main() {
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;
const ATMO_FRAG = /* glsl */ `
uniform vec3 uAtmo;
uniform vec3 uLight;
uniform float uStrength;
varying vec3 vN;
varying vec3 vWorldPos;
void main() {
  vec3 V = normalize(cameraPosition - vWorldPos);
  float rim = pow(1.0 - abs(dot(normalize(vN), V)), 2.5);
  float day = smoothstep(-0.4, 0.5, dot(normalize(vN), normalize(uLight)));
  float a = rim * (0.25 + 0.9 * day) * uStrength;
  gl_FragColor = vec4(uAtmo * a, a);
  ${OUTPUT_GLSL}
}
`;

const RING_VERT = /* glsl */ `
varying vec2 vUv;
varying vec3 vPos;
void main() { vUv = uv; vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;
const RING_FRAG = /* glsl */ `
${NOISE_GLSL}
uniform vec3 uColor;
uniform float uInner;
uniform float uOuter;
uniform float uReveal;
uniform vec3 uOffset;
varying vec3 vPos;
void main() {
  float r = (length(vPos.xy) - uInner) / (uOuter - uInner);
  float bands = pwNoise(vec3(r * 30.0, uOffset.x, 0.0)) * 0.5 + 0.5;
  bands *= 0.6 + 0.4 * sin(r * 70.0);
  float edge = smoothstep(0.0, 0.08, r) * smoothstep(1.0, 0.85, r);
  float a = bands * edge * 0.75 * smoothstep(0.85, 1.0, uReveal);
  gl_FragColor = vec4(uColor * (0.6 + bands), a);
  ${OUTPUT_GLSL}
}
`;

function shift(hex: string, hue: number): THREE.Color {
  const c = new THREE.Color(hex);
  c.offsetHSL(hue, 0, 0);
  return c;
}

const SPHERE_HI = new THREE.SphereGeometry(1, 96, 64);
const SPHERE_LO = new THREE.SphereGeometry(1, 40, 28);

export class PlanetView {
  readonly group = new THREE.Group();
  readonly body: THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial>;
  private atmo: THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial>;
  private ring: THREE.Mesh<THREE.RingGeometry, THREE.ShaderMaterial> | null = null;
  private moons: { mesh: THREE.Mesh; r: number; speed: number; phase: number; tilt: number }[] = [];
  private twin: THREE.Mesh | null = null;
  readonly radius: number;
  private spin: number;

  constructor(planet: PlanetDef, variant: Variant, opts: { radius?: number; detail?: 'hi' | 'lo' } = {}) {
    const look = planet.look;
    const hue = variant.hue;
    this.radius = (opts.radius ?? 1) * variant.size;
    this.spin = variant.spin;
    const sea = look.sea > 0 ? Math.min(0.85, look.sea + variant.sea) : -1;
    const geo = opts.detail === 'lo' ? SPHERE_LO : SPHERE_HI;

    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uKind: { value: look.kind === 'gas' ? 1 : 0 },
        uLow: { value: shift(look.low, hue) },
        uHigh: { value: shift(look.high, hue) },
        uPeak: { value: shift(look.peak, hue) },
        uDeep: { value: shift(look.deep, hue) },
        uShallow: { value: shift(look.shallow, hue) },
        uAtmo: { value: shift(look.atmo, hue) },
        uSea: { value: sea },
        uCloud: { value: look.cloud * variant.cloud },
        uEmissive: { value: look.emissive },
        uIce: { value: look.ice },
        uCity: { value: planet.cityLights ? 1 : 0 },
        uAurora: { value: look.aurora ?? 0 },
        uOffset: { value: new THREE.Vector3(...variant.offset) },
        uLight: { value: new THREE.Vector3(-0.6, 0.45, 0.65) },
        uReveal: { value: 1 },
        uSilhouette: { value: 0 },
      },
    });
    this.body = new THREE.Mesh(geo, mat);
    this.body.scale.setScalar(this.radius);
    this.body.rotation.z = 0.35;
    this.group.add(this.body);

    this.atmo = new THREE.Mesh(
      geo,
      new THREE.ShaderMaterial({
        vertexShader: ATMO_VERT,
        fragmentShader: ATMO_FRAG,
        uniforms: { uAtmo: mat.uniforms.uAtmo!, uLight: mat.uniforms.uLight!, uStrength: { value: 1 } },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      }),
    );
    this.atmo.scale.setScalar(this.radius * 1.14);
    this.group.add(this.atmo);

    if (variant.ring) {
      const inner = this.radius * 1.45;
      const outer = this.radius * 2.35;
      this.ring = new THREE.Mesh(
        new THREE.RingGeometry(inner, outer, 128, 1),
        new THREE.ShaderMaterial({
          vertexShader: RING_VERT,
          fragmentShader: RING_FRAG,
          uniforms: {
            uColor: { value: shift(look.high, hue + 0.04) },
            uInner: { value: inner },
            uOuter: { value: outer },
            uReveal: mat.uniforms.uReveal!,
            uOffset: mat.uniforms.uOffset!,
          },
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        }),
      );
      this.ring.rotation.x = -Math.PI / 2 + 0.35 + variant.ringTilt * 0.4;
      this.group.add(this.ring);
    }

    const moonMat = new THREE.MeshBasicMaterial({ color: shift(look.peak, hue).multiplyScalar(0.8) });
    for (let i = 0; i < variant.moons; i++) {
      const mesh = new THREE.Mesh(SPHERE_LO, moonMat);
      mesh.scale.setScalar(this.radius * (0.1 + 0.05 * i));
      this.group.add(mesh);
      this.moons.push({ mesh, r: this.radius * (2.0 + i * 0.55), speed: 0.6 / (1 + i * 0.6), phase: i * 2.1 + variant.offset[0], tilt: 0.3 * (i % 2 ? -1 : 1) });
    }

    if (planet.twin) {
      const t = new THREE.Mesh(geo, mat.clone());
      (t.material as THREE.ShaderMaterial).uniforms.uOffset!.value = new THREE.Vector3(...variant.offset).multiplyScalar(-1);
      t.scale.setScalar(this.radius * 0.72);
      this.twin = t;
      this.group.add(t);
    }
  }

  get material(): THREE.ShaderMaterial {
    return this.body.material;
  }

  setReveal(v: number): void {
    this.material.uniforms.uReveal!.value = v;
    (this.atmo.material.uniforms.uStrength!.value as number) = Math.max(0, (v - 0.7) / 0.3);
    if (this.twin) (this.twin.material as THREE.ShaderMaterial).uniforms.uReveal!.value = v;
  }

  setLight(dir: THREE.Vector3): void {
    (this.material.uniforms.uLight!.value as THREE.Vector3).copy(dir);
  }

  update(dt: number, time: number): void {
    this.body.rotation.y += this.spin * dt;
    this.material.uniforms.uTime!.value = time;
    for (const m of this.moons) {
      const a = m.phase + time * m.speed;
      m.mesh.position.set(Math.cos(a) * m.r, Math.sin(a) * m.r * m.tilt, Math.sin(a) * m.r);
    }
    if (this.twin) {
      const a = time * 0.35;
      const d = this.radius * 2.6;
      this.twin.position.set(Math.cos(a) * d, 0, Math.sin(a) * d);
      this.twin.rotation.y += this.spin * dt;
      (this.twin.material as THREE.ShaderMaterial).uniforms.uTime!.value = time;
    }
  }

  dispose(): void {
    this.material.dispose();
    this.atmo.material.dispose();
    this.ring?.geometry.dispose();
    this.ring?.material.dispose();
    if (this.moons[0]) (this.moons[0].mesh.material as THREE.Material).dispose();
    if (this.twin) (this.twin.material as THREE.Material).dispose();
  }
}
