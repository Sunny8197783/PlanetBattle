/**
 * 타입이 있는 EventBus. 모듈끼리는 서로를 직접 호출하지 않고 이 버스로만 통신한다.
 * 이벤트 이름은 `영역:동작` 형식.
 */
import type { Quality, SceneId } from './config';

export interface GameEvents {
  'scene:change': { from: SceneId; to: SceneId };
  'quality:change': { quality: Quality };
  'engine:resize': { width: number; height: number; aspect: number };
  'engine:contextlost': Record<string, never>;
  'run:select': { index: number };
  'run:reroll': Record<string, never>;
  'run:new': Record<string, never>;
  'run:register': { name: string };
  'galaxy:refresh': Record<string, never>;
}

type Handler<T> = (payload: T) => void;

export class EventBus<E extends object> {
  private handlers = new Map<keyof E, Set<Handler<never>>>();

  on<K extends keyof E>(type: K, handler: Handler<E[K]>): () => void {
    let set = this.handlers.get(type);
    if (!set) {
      set = new Set();
      this.handlers.set(type, set);
    }
    set.add(handler as Handler<never>);
    return () => this.off(type, handler);
  }

  once<K extends keyof E>(type: K, handler: Handler<E[K]>): () => void {
    const off = this.on(type, (payload) => {
      off();
      handler(payload);
    });
    return off;
  }

  off<K extends keyof E>(type: K, handler: Handler<E[K]>): void {
    this.handlers.get(type)?.delete(handler as Handler<never>);
  }

  emit<K extends keyof E>(type: K, payload: E[K]): void {
    const set = this.handlers.get(type);
    if (!set) return;
    for (const handler of [...set]) (handler as Handler<E[K]>)(payload);
  }

  clear(): void {
    this.handlers.clear();
  }
}

export const bus = new EventBus<GameEvents>();
