/** 원소 구체: 젤리처럼 말랑한 발광 구 (프레넬 발광 + 내부 노이즈 소용돌이 + 얼굴). 원소별로 머티리얼 하나를 공유한다. */
import * as THREE from 'three';
import { el, ELEMENTS } from '../core/data';
import { NOISE_GLSL, OUTPUT_GLSL } from '../vfx/glsl/noise';

const VERT = /* glsl */ `
varying vec3 vN;
varying vec3 vViewN;
varying vec3 vPos;
varying vec3 vView;
void main() {
  vN = normal;
  vPos = position;
  vViewN = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = -mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`;

const FRAG = /* glsl */ `
#define OCTAVES 3
${NOISE_GLSL}
uniform float uTime;
uniform vec3 uColor;
uniform vec3 uGlow;
uniform float uSpecial;
uniform float uFace;
uniform float uFlash;
varying vec3 vN;
varying vec3 vViewN;
varying vec3 vPos;
varying vec3 vView;

float ellipse(vec2 p, vec2 c, vec2 r) { return 1.0 - smoothstep(0.85, 1.0, length((p - c) / r)); }

void main() {
  vec3 n = normalize(vViewN);
  vec3 v = normalize(vView);
  float ndv = clamp(dot(n, v), 0.0, 1.0);
  float fres = pow(1.0 - ndv, 2.2);

  // 내부 소용돌이
  vec3 p = normalize(vPos);
  float a = uTime * 0.6;
  mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a));
  p.xz = rot * p.xz;
  float swirl = pwFbm(p * 2.4 + vec3(0.0, uTime * 0.25, 0.0)) * 0.5 + 0.5;

  vec3 col = mix(uColor * 0.55, uColor * 1.15, swirl);
  col = mix(col, uGlow, smoothstep(0.55, 0.9, swirl) * 0.45);
  // 젤리 하이라이트
  float spec = pow(max(dot(n, normalize(vec3(-0.35, 0.6, 0.75))), 0.0), 28.0);
  col += vec3(1.0) * spec * 0.9;
  col += uGlow * fres * (1.4 + uSpecial * (0.9 + 0.6 * sin(uTime * 6.0)));
  col += uGlow * 0.35 * (1.0 - ndv) * uSpecial;

  // 얼굴: 화면을 보는 쪽에 눈 두 개와 입
  vec2 f = n.xy;
  float blink = step(0.06, fract(uTime * 0.23 + uFace * 0.37));
  float eyes = ellipse(f, vec2(-0.26, 0.12), vec2(0.075, 0.11 * blink + 0.012))
             + ellipse(f, vec2( 0.26, 0.12), vec2(0.075, 0.11 * blink + 0.012));
  float mouthY = f.y + 0.13 - 0.55 * f.x * f.x;
  float mouth = (1.0 - smoothstep(0.012, 0.03, abs(mouthY))) * step(abs(f.x), 0.13);
  float cheek = ellipse(f, vec2(-0.42, -0.06), vec2(0.1, 0.06)) + ellipse(f, vec2(0.42, -0.06), vec2(0.1, 0.06));
  float face = step(0.0, n.z) * uFace;
  col = mix(col, vec3(0.08, 0.04, 0.12), clamp(eyes + mouth, 0.0, 1.0) * face);
  col += vec3(1.0, 0.45, 0.55) * cheek * face * 0.25;

  col = mix(col, vec3(1.0), uFlash);
  gl_FragColor = vec4(col, 1.0);
  ${OUTPUT_GLSL}
}
`;

const cache = new Map<string, THREE.ShaderMaterial>();
export const SPHERE = new THREE.SphereGeometry(1, 40, 28);

export function elementMaterial(id: string): THREE.ShaderMaterial {
  let m = cache.get(id);
  if (m) return m;
  const def = el(id);
  m = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(def.color) },
      uGlow: { value: new THREE.Color(def.glow) },
      uSpecial: { value: def.kind === 'special' ? 1 : 0 },
      uFace: { value: def.face === 'none' ? 0 : 1 },
      uFlash: { value: 0 },
    },
  });
  cache.set(id, m);
  return m;
}

export function tickElementMaterials(time: number): void {
  for (const m of cache.values()) m.uniforms.uTime!.value = time;
}

/** 셰이더 컴파일 사전 워밍업용: 모든 원소 머티리얼을 미리 만든다 */
export function allElementMaterials(): THREE.ShaderMaterial[] {
  return Object.keys(ELEMENTS).map(elementMaterial);
}
