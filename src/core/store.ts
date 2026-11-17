/** 전역 게임 상태 (zustand). UI는 여기를 구독하고, 3D 쪽은 EventBus로 요청을 받는다. */
import { create } from 'zustand';
import type { Grade } from './data';
import type { Quality, SceneId } from './config';
import { bus } from './events';
import { loadSave, writeSave, type PlanetRecord, type Settings } from './save';
import { setVolume, sfx, unlockAudio } from '../audio/sfx';

export interface ChoiceView {
  el: string;
  count: number;
}

export interface OddsView {
  id: string;
  name: string;
  grade: Grade;
  p: number;
}

export interface RunView {
  turn: number;
  turns: number;
  choices: ChoiceView[];
  selected: number;
  rerolls: number;
  mass: number;
  massLimit: number;
  combo: number;
  maxCombo: number;
  phase: 'aim' | 'falling' | 'birth' | 'result';
  odds: OddsView[];
  unstable: boolean;
}

export interface ResultView {
  planetId: string;
  name: string;
  grade: Grade;
  desc: string;
  seed: string;
  composition: Record<string, number>;
  recipes: string[];
  maxCombo: number;
  merges: number;
  pityHit: boolean;
  firstPlanet: boolean;
}

export interface Pop {
  id: number;
  text: string;
  sub?: string;
  x: number;
  y: number;
  kind: 'combo' | 'new' | 'react' | 'warn' | 'info';
  scale?: number;
}

interface GameStore {
  scene: SceneId;
  settings: Settings;
  collectionCount: number;
  ready: boolean;
  run: RunView | null;
  result: ResultView | null;
  cinematic: boolean;
  pops: Pop[];
  galaxySel: PlanetRecord | null;
  setReady(): void;
  goto(scene: SceneId): void;
  setQuality(quality: Quality): void;
  toggle(key: 'shake' | 'flash'): void;
  setVolume(v: number): void;
  select(index: number): void;
  reroll(): void;
  newRun(): void;
  register(name: string): void;
  pop(p: Omit<Pop, 'id'>, ms?: number): void;
}

const save = loadSave();
setVolume(save.settings.volume.master * save.settings.volume.sfx);
let popId = 1;

export const useGame = create<GameStore>((set, get) => ({
  scene: 'title',
  settings: save.settings,
  collectionCount: save.collection.length,
  ready: false,
  run: null,
  result: null,
  cinematic: false,
  pops: [],
  galaxySel: null,

  setReady: () => set({ ready: true }),

  goto: (scene) => {
    unlockAudio();
    sfx.ui();
    const from = get().scene;
    if (from === scene) return;
    set({ scene, galaxySel: null });
    bus.emit('scene:change', { from, to: scene });
  },

  setQuality: (quality) => {
    const settings = { ...get().settings, quality };
    set({ settings });
    writeSave({ settings });
    bus.emit('quality:change', { quality });
  },

  toggle: (key) => {
    const settings = { ...get().settings, [key]: !get().settings[key] };
    set({ settings });
    writeSave({ settings });
  },

  setVolume: (v) => {
    const settings = { ...get().settings, volume: { ...get().settings.volume, master: v } };
    set({ settings });
    writeSave({ settings });
    setVolume(v * settings.volume.sfx);
  },

  select: (index) => {
    unlockAudio();
    sfx.select();
    bus.emit('run:select', { index });
  },
  reroll: () => {
    unlockAudio();
    bus.emit('run:reroll', {});
  },
  newRun: () => {
    unlockAudio();
    sfx.ui();
    set({ result: null });
    bus.emit('run:new', {});
  },
  register: (name) => {
    unlockAudio();
    bus.emit('run:register', { name });
  },

  pop: (p, ms = 1100) => {
    const id = popId++;
    set({ pops: [...get().pops.slice(-8), { ...p, id }] });
    setTimeout(() => set({ pops: get().pops.filter((x) => x.id !== id) }), ms);
  },
}));
