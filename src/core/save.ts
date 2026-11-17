/**
 * localStorage 세이브. 읽기·쓰기 모두 try/catch로 감싸고,
 * 저장소를 못 쓰는 환경(사생활 보호 모드 등)에서는 메모리에만 유지한다.
 */
import { defaultQuality, type Quality } from './config';
import { makeSeed } from './prng';

const KEY = 'planet-workshop/save';
export const SAVE_VERSION = 1;

export interface Settings {
  quality: Quality;
  volume: { master: number; bgm: number; sfx: number };
  shake: boolean;
  flash: boolean;
  speed: number;
}

/** 은하에 등록된 행성 한 개. seed만 있으면 같은 모습으로 다시 그릴 수 있다. */
export interface PlanetRecord {
  id: string;
  seed: string;
  type: string;
  grade: string;
  name: string;
  bornAt: number;
  composition: Record<string, number>;
  favorite: boolean;
}

export interface SaveData {
  version: number;
  /** 세이브 고유 시드. 판 시드는 여기서 파생한다. */
  seed: string;
  settings: Settings;
  collection: PlanetRecord[];
  codex: { elements: string[]; recipes: string[]; planets: string[] };
  stats: { runs: number; merges: number; bestCombo: number };
  pity: number;
  story: { chapter: number; seen: string[] };
  daily: Record<string, number>;
}

export function defaultSave(): SaveData {
  return {
    version: SAVE_VERSION,
    seed: makeSeed(),
    settings: {
      quality: defaultQuality(),
      volume: { master: 0.8, bgm: 0.6, sfx: 0.9 },
      shake: true,
      flash: true,
      speed: 1,
    },
    collection: [],
    codex: { elements: [], recipes: [], planets: [] },
    stats: { runs: 0, merges: 0, bestCombo: 0 },
    pity: 0,
    story: { chapter: 0, seen: [] },
    daily: {},
  };
}

let memory: SaveData | null = null;
let storageOk = true;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/** 저장된 값 위에 기본값을 깔아, 필드가 늘어나도 옛 세이브가 깨지지 않게 한다. */
function mergeDefaults<T>(base: T, incoming: unknown): T {
  if (!isRecord(base) || !isRecord(incoming)) return (incoming === undefined ? base : (incoming as T));
  const out: Record<string, unknown> = { ...base };
  for (const key of Object.keys(base)) {
    const b = (base as Record<string, unknown>)[key];
    const i = incoming[key];
    if (i === undefined) continue;
    out[key] = isRecord(b) ? mergeDefaults(b, i) : typeof i === typeof b ? i : b;
  }
  return out as T;
}

export function loadSave(): SaveData {
  if (memory) return memory;
  let data = defaultSave();
  try {
    const text = localStorage.getItem(KEY);
    if (text) {
      const parsed: unknown = JSON.parse(text);
      if (isRecord(parsed) && typeof parsed.version === 'number' && parsed.version <= SAVE_VERSION) {
        data = mergeDefaults(data, parsed);
        data.version = SAVE_VERSION;
      }
    }
  } catch {
    storageOk = false;
  }
  memory = data;
  return data;
}

export function writeSave(patch?: Partial<SaveData>): SaveData {
  const next = { ...loadSave(), ...patch };
  memory = next;
  if (storageOk) {
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      storageOk = false; // 용량 초과·접근 거부: 이후로는 메모리에만 유지
    }
  }
  return next;
}

export function resetSave(): SaveData {
  memory = defaultSave();
  try {
    localStorage.removeItem(KEY);
  } catch {
    storageOk = false;
  }
  return memory;
}

/** 저장소가 실제로 동작 중인지 (설정 화면 안내용). */
export function isPersistent(): boolean {
  return storageOk;
}
