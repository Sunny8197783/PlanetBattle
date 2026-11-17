/** 다층 스타필드. 층마다 회전 속도와 패럴랙스 양이 달라 깊이감이 생긴다. */
import * as THREE from 'three';
import type { Rng } from '../core/prng';
import { OUTPUT_GLSL } from './glsl/noise';

const VERT = /* glsl */ `
attribute float aSize;
attribute vec3 aColor;
attribute float aPhase;
uniform float uTime;
uniform float uScale;
varying vec3 vColor;
varying float vBig;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float twinkle = 0.72 + 0.28 * sin(uTime * (0.5 + aPhase * 1.9) + aPhase * 43.0);
  vColor = aColor * twinkle;
  vBig = smoothstep(3.2, 5.5, aSize);
  gl_PointSize = aSize * uScale * (0.85 + 0.15 * twinkle);
}
`;

const FRAG = /* glsl */ `
varying vec3 vColor;
varying float vBig;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  float d = length(p);
  float core = pow(smoothstep(0.5, 0.0, d), 2.4);
  // 큰 별에만 십자 광채
  float cross = (1.0 - smoothstep(0.0, 0.035, abs(p.x))) + (1.0 - smoothstep(0.0, 0.035, abs(p.y)));
  cross *= smoothstep(0.5, 0.05, d) * 0.35 * vBig;
  float a = core + cross;
  gl_FragColor = vec4(vColor * a * 2.2, a);
  ${OUTPUT_GLSL}
}
`;

interface Layer {
  points: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
  spin: number;
  parallax: number;
  share: number;
  max: number;
}

/** 별의 색온도 팔레트 (푸른 별 ~ 주황 별). */
const STAR_TINTS = ['#9db8ff', '#cfd8ff', '#ffffff', '#fff1d6', '#ffd2a1', '#ffb0a0', '#d9b8ff'];

export class Starfield {
  readonly group = new THREE.Group();
  private layers: Layer[] = [];

  constructor(rng: Rng, maxStars: number) {
    const specs = [
      { share: 0.62, radius: 150, size: [1.0, 2.6], spin: 0.004, parallax: 0.6 },
      { share: 0.28, radius: 110, size: [1.5, 3.8], spin: 0.007, parallax: 1.4 },
      { share: 0.1, radius: 80, size: [2.6, 6.5], spin: 0.011, parallax: 2.6 },
    ] as const;
    const tints = STAR_TINTS.map((c) => new THREE.Color(c));

    for (const [index, spec] of specs.entries()) {
      const r = rng.fork(`stars-${index}`);
      const count = Math.floor(maxStars * spec.share);
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      const size = new Float32Array(count);
      const phase = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        // 구면 균등 분포
        const u = r.range(-1, 1);
        const th = r.range(0, Math.PI * 2);
        const s = Math.sqrt(1 - u * u);
        const rad = spec.radius * r.range(0.9, 1.1);
        pos[i * 3] = s * Math.cos(th) * rad;
        pos[i * 3 + 1] = u * rad;
        pos[i * 3 + 2] = s * Math.sin(th) * rad;
        const tint = r.pick(tints);
        const lum = r.range(0.55, 1.0);
        col[i * 3] = tint.r * lum;
        col[i * 3 + 1] = tint.g * lum;
        col[i * 3 + 2] = tint.b * lum;
        // 작은 별이 훨씬 많도록 거듭제곱 분포
        size[i] = spec.size[0] + (spec.size[1] - spec.size[0]) * Math.pow(r.next(), 3);
        phase[i] = r.next();
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
      geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
      geo.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
      const mat = new THREE.ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms: { uTime: { value: 0 }, uScale: { value: 1 } },
        transparent: true,
        depthWrite: false,
        depthTest: false,
        blending: THREE.AdditiveBlending,
      });
      const points = new THREE.Points(geo, mat);
      points.frustumCulled = false;
      points.renderOrder = -9;
      points.rotation.set(r.range(0, 6.28), r.range(0, 6.28), 0);
      this.group.add(points);
      this.layers.push({ points, spin: spec.spin, parallax: spec.parallax, share: spec.share, max: count });
    }
  }

  /** 품질 단계에 따라 그리는 별 개수를 줄인다(버퍼는 그대로, drawRange만 조절). */
  setCount(total: number): void {
    for (const layer of this.layers) {
      layer.points.geometry.setDrawRange(0, Math.min(layer.max, Math.floor(total * layer.share)));
    }
  }

  /** 포인트 크기는 화면 픽셀 단위라 픽셀 비율·화면 높이에 맞춰 보정한다. */
  setScale(pixelRatio: number, height: number): void {
    const scale = pixelRatio * Math.max(0.75, Math.min(1.5, height / 800));
    for (const layer of this.layers) layer.points.material.uniforms.uScale!.value = scale;
  }

  update(dt: number, time: number, pointer: THREE.Vector2): void {
    for (const layer of this.layers) {
      layer.points.rotation.y += layer.spin * dt;
      layer.points.position.set(-pointer.x * layer.parallax, -pointer.y * layer.parallax, 0);
      layer.points.material.uniforms.uTime!.value = time;
    }
  }

  dispose(): void {
    for (const layer of this.layers) {
      layer.points.geometry.dispose();
      layer.points.material.dispose();
    }
    this.layers = [];
  }
}
