import { createRoot } from 'react-dom/client';
import { Engine } from './core/Engine';
import { useGame } from './core/store';
import { GalaxyScene } from './galaxy/GalaxyScene';
import { App } from './ui/App';
import './ui/styles.css';
import { WorkshopScene } from './workshop/WorkshopScene';

declare global {
  // 테스트·디버깅용 훅 (scripts/shot.mjs, Playwright E2E에서 사용)
  var __PW_DEBUG__:
    | {
        stats(): ReturnType<Engine['stats']>;
        camera(): number[];
        flash(strength: number): void;
        setShake(on: boolean): void;
        state(): ReturnType<typeof useGame.getState>;
      }
    | undefined;
}

function boot(): void {
  const canvas = document.getElementById('stage');
  const uiRoot = document.getElementById('ui');
  if (!(canvas instanceof HTMLCanvasElement) || !uiRoot) throw new Error('index.html에 #stage 또는 #ui가 없습니다');

  const { scene, settings } = useGame.getState();
  const engine = new Engine(canvas, settings.quality, scene);
  engine.shakeEnabled = settings.shake;
  engine.register(new WorkshopScene(engine));
  engine.register(new GalaxyScene(engine));
  engine.start(scene);

  globalThis.__PW_DEBUG__ = {
    stats: () => engine.stats(),
    camera: () => engine.camera.position.toArray().map((v) => +v.toFixed(2)),
    flash: (strength) => engine.flash(useGame.getState().settings.flash ? strength : 0),
    setShake: (on) => (engine.shakeEnabled = on),
    state: () => useGame.getState(),
  };

  createRoot(uiRoot).render(<App />);
  useGame.getState().setReady();
}

boot();
