/**
 * 3D 그래디언트 노이즈 + fBm (GLSL).
 * Inigo Quilez의 gradient noise 구현(MIT)을 바탕으로 이름과 옥타브 처리를 맞췄다. 출처는 CREDITS.md.
 * 사용하는 셰이더에서 `#define OCTAVES n`을 먼저 선언한다(없으면 4).
 */
export const NOISE_GLSL = /* glsl */ `
#ifndef OCTAVES
#define OCTAVES 4
#endif

vec3 pwHash3(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float pwNoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(dot(pwHash3(i + vec3(0.0, 0.0, 0.0)), f - vec3(0.0, 0.0, 0.0)),
                     dot(pwHash3(i + vec3(1.0, 0.0, 0.0)), f - vec3(1.0, 0.0, 0.0)), u.x),
                 mix(dot(pwHash3(i + vec3(0.0, 1.0, 0.0)), f - vec3(0.0, 1.0, 0.0)),
                     dot(pwHash3(i + vec3(1.0, 1.0, 0.0)), f - vec3(1.0, 1.0, 0.0)), u.x), u.y),
             mix(mix(dot(pwHash3(i + vec3(0.0, 0.0, 1.0)), f - vec3(0.0, 0.0, 1.0)),
                     dot(pwHash3(i + vec3(1.0, 0.0, 1.0)), f - vec3(1.0, 0.0, 1.0)), u.x),
                 mix(dot(pwHash3(i + vec3(0.0, 1.0, 1.0)), f - vec3(0.0, 1.0, 1.0)),
                     dot(pwHash3(i + vec3(1.0, 1.0, 1.0)), f - vec3(1.0, 1.0, 1.0)), u.x), u.y), u.z);
}

/** 대략 [-0.6, 0.6] 범위. */
float pwFbm(vec3 p) {
  float amp = 0.5;
  float sum = 0.0;
  for (int i = 0; i < OCTAVES; i++) {
    sum += amp * pwNoise(p);
    p = p * 2.02 + vec3(17.1, 3.7, 9.2);
    amp *= 0.5;
  }
  return sum;
}
`;

/** 커스텀 프래그먼트 셰이더 끝에 붙이는 공통 출력 처리 (톤매핑·색 공간). */
export const OUTPUT_GLSL = /* glsl */ `
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`;
