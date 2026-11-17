/** UI 루트. 3D 캔버스 위에 얹히는 DOM 레이어이며, Phase 8에서 본격적으로 다듬는다. */
import { CONFIG, QUALITIES, type Quality } from '../core/config';
import { useGame } from '../core/store';

const QUALITY_LABEL: Record<Quality, string> = { low: '낮음', medium: '중간', high: '높음' };

function QualityToggle() {
  const quality = useGame((s) => s.settings.quality);
  const setQuality = useGame((s) => s.setQuality);
  return (
    <div className="seg" role="group" aria-label="그래픽 품질">
      {QUALITIES.map((q) => (
        <button key={q} type="button" className={q === quality ? 'seg__btn is-on' : 'seg__btn'} aria-pressed={q === quality} onClick={() => setQuality(q)}>
          {QUALITY_LABEL[q]}
        </button>
      ))}
    </div>
  );
}

function Title() {
  const goto = useGame((s) => s.goto);
  const count = useGame((s) => s.collectionCount);
  return (
    <section className="title">
      <p className="title__eyebrow">은하 변두리의 작은 공방</p>
      <h1 className="title__logo">행성 공방</h1>
      <p className="title__sub">{count > 0 ? `내 은하의 행성 ${count}개` : '이 은하는 이제 네가 채우는 거다.'}</p>
      <button type="button" className="btn btn--primary" onClick={() => goto('workshop')}>
        공방 열기
      </button>
    </section>
  );
}

function WorkshopHud() {
  const goto = useGame((s) => s.goto);
  return (
    <section className="hud">
      <header className="hud__top">
        <button type="button" className="btn btn--ghost" onClick={() => goto('title')}>
          ← 타이틀
        </button>
        <div className="hud__stat">
          <span className="hud__label">남은 턴</span>
          <span className="hud__value">{CONFIG.run.turns}</span>
        </div>
        <div className="hud__stat">
          <span className="hud__label">원반 질량</span>
          <span className="hud__value">
            0<small> / {CONFIG.disc.massLimit}</small>
          </span>
        </div>
      </header>
      <footer className="hud__bottom">
        <p className="hud__note">빈 원반 · 원소 드롭은 다음 단계에서 연결됩니다</p>
      </footer>
    </section>
  );
}

export function App() {
  const scene = useGame((s) => s.scene);
  return (
    <div className={`ui ui--${scene}`}>
      {scene === 'title' && <Title />}
      {scene === 'workshop' && <WorkshopHud />}
      <aside className="corner">
        <QualityToggle />
      </aside>
    </div>
  );
}
