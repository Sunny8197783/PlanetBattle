/** 튜닝 수치는 전부 src/data/config.json에 있고, 여기서는 타입만 입혀서 내보낸다. */
import raw from '../data/config.json';

export type Quality = 'low' | 'medium' | 'high';
export type SceneId = 'title' | 'workshop' | 'galaxy';
export type GradeId = 'workshop' | 'galaxy';

export interface QualityPreset {
  pixelRatio: number;
  post: boolean;
  bloom: number;
  stars: number;
  nebulaOctaves: number;
}

export interface GradePreset {
  tint: number[];
  nebula: string[];
  vignette: number;
}

export const CONFIG = raw as typeof raw & {
  quality: Record<Quality, QualityPreset>;
  grade: Record<GradeId, GradePreset>;
};

export const QUALITIES: readonly Quality[] = ['low', 'medium', 'high'];

/** 처음 실행할 때의 기본 품질: 터치 기기·저사양은 중간부터. */
export function defaultQuality(): Quality {
  const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
  const cores = typeof navigator !== 'undefined' ? (navigator.hardwareConcurrency ?? 4) : 4;
  if (coarse || cores <= 4) return 'medium';
  return 'high';
}
