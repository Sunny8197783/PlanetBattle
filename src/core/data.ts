/** src/data/*.json에 타입을 입혀 내보낸다. 게임 수치는 전부 여기를 거친다. */
import elementsRaw from '../data/elements.json';
import planetsRaw from '../data/planets.json';
import ratesRaw from '../data/rates.json';
import recipesRaw from '../data/recipes.json';

export type ElementKind = 'base' | 'compound' | 'special';
export type Grade = 'N' | 'R' | 'SR' | 'SSR' | 'UR';
export const GRADES: readonly Grade[] = ['N', 'R', 'SR', 'SSR', 'UR'];

export interface ElementDef {
  id: string;
  name: string;
  kind: ElementKind;
  tier?: number;
  radius: number;
  mass: number;
  color: string;
  glow: string;
  face: string;
  hint: string;
  rare?: boolean;
  effect?: string;
}

export interface RecipeDef {
  id: string;
  inputs: string[];
  catalyst?: string;
  output: string;
  bulk?: number;
  rare?: boolean;
  fx: string;
  hint: string;
}

export interface PlanetLook {
  kind: 'terrain' | 'gas';
  low: string;
  high: string;
  peak: string;
  sea: number;
  deep: string;
  shallow: string;
  cloud: number;
  atmo: string;
  emissive: number;
  ice: number;
  aurora?: number;
}

export interface PlanetRequires {
  share?: Record<string, number>;
  has?: string[];
  recipes?: string[];
  merges?: number;
  maxCombo?: number;
  unstable?: boolean;
  balance?: { of: string[]; tolerance: number };
}

export interface PlanetDef {
  id: string;
  name: string;
  grade: Grade;
  hidden?: boolean;
  shader: string;
  base: number;
  per: Record<string, number>;
  requires?: PlanetRequires;
  forceRing?: boolean;
  twin?: boolean;
  cityLights?: boolean;
  look: PlanetLook;
  desc?: string;
}

export interface Rates {
  gradeMultiplier: Record<Grade, number>;
  pity: { grade: Grade; softStart: number; softStep: number; hardAt: number; note: string };
  variation: { ringChance: number; moons: number[]; sizeRange: [number, number]; paletteShift: number };
}

export const ELEMENT_LIST = elementsRaw.elements as ElementDef[];
export const ELEMENTS: Record<string, ElementDef> = Object.fromEntries(ELEMENT_LIST.map((e) => [e.id, e]));
export const MERGE_LINE: readonly string[] = elementsRaw.mergeLine;
export const RECIPES = recipesRaw.recipes as RecipeDef[];
export const CATALYSTS = recipesRaw.catalysts as Record<string, { name: string; source: string }>;
export const PLANETS = planetsRaw.planets as unknown as PlanetDef[];
export const PLANET_BY_ID: Record<string, PlanetDef> = Object.fromEntries(PLANETS.map((p) => [p.id, p]));
export const RATES = ratesRaw as unknown as Rates;

export function el(id: string): ElementDef {
  const def = ELEMENTS[id];
  if (!def) throw new Error(`알 수 없는 원소: ${id}`);
  return def;
}

/** 머지 진화 라인에서 다음 원소 (최상위면 null) */
export function nextInLine(id: string): string | null {
  const i = MERGE_LINE.indexOf(id);
  if (i < 0 || i >= MERGE_LINE.length - 1) return null;
  return MERGE_LINE[i + 1] ?? null;
}

/** 이 특수 원소가 내는 촉매 목록 (예: flare → starlight, heat) */
export function catalystsOf(elementId: string): string[] {
  return Object.entries(CATALYSTS)
    .filter(([, c]) => c.source === elementId)
    .map(([key]) => key);
}
