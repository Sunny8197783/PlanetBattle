/** 전역 게임 상태 (zustand). UI는 여기를 구독하고, 3D 쪽은 EventBus로 변화를 통지받는다. */
import { create } from 'zustand';
import type { Quality, SceneId } from './config';
import { bus } from './events';
import { loadSave, writeSave, type Settings } from './save';

interface GameStore {
  scene: SceneId;
  settings: Settings;
  collectionCount: number;
  ready: boolean;
  setReady(): void;
  goto(scene: SceneId): void;
  setQuality(quality: Quality): void;
}

const save = loadSave();

export const useGame = create<GameStore>((set, get) => ({
  scene: 'title',
  settings: save.settings,
  collectionCount: save.collection.length,
  ready: false,

  setReady: () => set({ ready: true }),

  goto: (scene) => {
    const from = get().scene;
    if (from === scene) return;
    set({ scene });
    bus.emit('scene:change', { from, to: scene });
  },

  setQuality: (quality) => {
    const settings = { ...get().settings, quality };
    set({ settings });
    writeSave({ settings });
    bus.emit('quality:change', { quality });
  },
}));
