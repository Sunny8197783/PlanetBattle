/** UI 루트. 3D 캔버스 위에 얹히는 DOM 레이어. */
import { useEffect, useRef, useState } from 'react';
import { QUALITIES, type Quality } from '../core/config';
import { el, ELEMENT_LIST, PLANET_BY_ID, PLANETS, RATES, RECIPES } from '../core/data';
import { loadSave } from '../core/save';
import { useGame, type Pop } from '../core/store';
import { GRADE_COLOR } from '../workshop/WorkshopScene';

const QUALITY_LABEL: Record<Quality, string> = { low: '낮음', medium: '중간', high: '높음' };

function Orb({ id, size = 44 }: { id: string; size?: number }) {
  const d = el(id);
  return (
    <span
      className={`orb ${d.kind === 'special' ? 'orb--special' : ''}`}
      style={{ width: size, height: size, background: `radial-gradient(circle at 35% 30%, #fff8 0, ${d.color} 32%, ${d.glow} 100%)`, boxShadow: `0 0 ${size / 2.5}px ${d.glow}` }}
      aria-hidden
    >
      <i className="orb__eyes" />
    </span>
  );
}

// ───────────────────────── 타이틀 ─────────────────────────

function Title() {
  const goto = useGame((s) => s.goto);
  const count = useGame((s) => s.collectionCount);
  const [modal, setModal] = useState<'rates' | 'codex' | 'settings' | null>(null);
  return (
    <section className="title">
      <p className="title__eyebrow">은하 변두리의 작은 공방</p>
      <h1 className="title__logo">행성 공방</h1>
      <p className="title__sub">{count > 0 ? `내 은하의 행성 ${count}개` : '이 은하는 이제 네가 채우는 거다.'}</p>
      <div className="title__actions">
        <button type="button" className="btn btn--primary" onClick={() => goto('workshop')}>
          공방 열기
        </button>
        <div className="title__row">
          {count > 0 && (
            <button type="button" className="btn" onClick={() => goto('galaxy')}>
              내 은하
            </button>
          )}
          <button type="button" className="btn" onClick={() => setModal('codex')}>
            도감
          </button>
          <button type="button" className="btn" onClick={() => setModal('rates')}>
            확률 정보
          </button>
          <button type="button" className="btn" onClick={() => setModal('settings')}>
            설정
          </button>
        </div>
      </div>
      {modal === 'rates' && <RatesModal onClose={() => setModal(null)} />}
      {modal === 'codex' && <CodexModal onClose={() => setModal(null)} />}
      {modal === 'settings' && <SettingsModal onClose={() => setModal(null)} />}
    </section>
  );
}

function Modal({ title, onClose, children }: { title: string; onClose(): void; children: React.ReactNode }) {
  return (
    <div className="modal" role="dialog" aria-modal aria-label={title} onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <header className="modal__head">
          <h2>{title}</h2>
          <button type="button" className="btn btn--ghost" onClick={onClose} aria-label="닫기">
            ✕
          </button>
        </header>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}

function RatesModal({ onClose }: { onClose(): void }) {
  const pity = loadSave().pity;
  return (
    <Modal title="확률 정보" onClose={onClose}>
      <p className="muted">행성은 판이 끝날 때 원반의 구성비로 정해집니다. 조건을 채운 행성만 후보가 되고, 아래 등급 배율이 가중치에 곱해집니다.</p>
      <table className="table">
        <thead>
          <tr>
            <th>등급</th>
            <th>배율</th>
            <th>행성</th>
          </tr>
        </thead>
        <tbody>
          {(['N', 'R', 'SR', 'SSR', 'UR'] as const).map((g) => (
            <tr key={g}>
              <td style={{ color: GRADE_COLOR[g] }}>{g}</td>
              <td>×{RATES.gradeMultiplier[g]}</td>
              <td>{PLANETS.filter((p) => p.grade === g).map((p) => (p.hidden ? '???' : p.name)).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="muted">
        천장: SSR 이상이 {RATES.pity.softStart}판 동안 안 나오면 판마다 SSR 이상 가중치가 {Math.round(RATES.pity.softStep * 100)}%씩 오르고, {RATES.pity.hardAt}판째에는 조건을 채운 SSR 후보가 있으면 확정입니다. 현재 {pity}판째.
      </p>
    </Modal>
  );
}

function CodexModal({ onClose }: { onClose(): void }) {
  const save = loadSave();
  const known = new Set(save.codex.recipes);
  const planets = new Set(save.codex.planets);
  return (
    <Modal title="도감" onClose={onClose}>
      <h3>레시피 {known.size}/{RECIPES.length}</h3>
      <ul className="codex">
        {RECIPES.map((r) => (
          <li key={r.id} className={known.has(r.id) ? '' : 'is-locked'}>
            {known.has(r.id) ? <Orb id={r.output} size={28} /> : <span className="orb orb--locked" style={{ width: 28, height: 28 }} />}
            <span>
              <b>{known.has(r.id) ? el(r.output).name : '???'}</b>
              <small>{r.hint}</small>
            </span>
          </li>
        ))}
      </ul>
      <h3>행성 {planets.size}/{PLANETS.length}</h3>
      <ul className="codex">
        {PLANETS.map((p) => (
          <li key={p.id} className={planets.has(p.id) ? '' : 'is-locked'}>
            <span className="grade-chip" style={{ color: GRADE_COLOR[p.grade], borderColor: GRADE_COLOR[p.grade] }}>
              {p.grade}
            </span>
            <span>
              <b>{planets.has(p.id) ? p.name : p.hidden ? '???' : `${p.name} (미발견)`}</b>
              <small>{planets.has(p.id) ? p.desc : p.hidden ? '숨겨진 행성' : '아직 만들지 못했어요'}</small>
            </span>
          </li>
        ))}
      </ul>
      <h3>원소</h3>
      <div className="orbs">
        {ELEMENT_LIST.map((e) => (
          <span key={e.id} className="orbs__item" title={e.hint}>
            <Orb id={e.id} size={26} />
            <small>{e.name}</small>
          </span>
        ))}
      </div>
    </Modal>
  );
}

function SettingsModal({ onClose }: { onClose(): void }) {
  const s = useGame((x) => x.settings);
  const toggle = useGame((x) => x.toggle);
  const setVolume = useGame((x) => x.setVolume);
  return (
    <Modal title="설정" onClose={onClose}>
      <label className="row">
        <span>효과음</span>
        <input type="range" min={0} max={1} step={0.05} value={s.volume.master} onChange={(e) => setVolume(Number(e.target.value))} />
      </label>
      <label className="row">
        <span>화면 흔들림</span>
        <input type="checkbox" checked={s.shake} onChange={() => toggle('shake')} />
      </label>
      <label className="row">
        <span>화면 번쩍임 (광과민성 주의)</span>
        <input type="checkbox" checked={s.flash} onChange={() => toggle('flash')} />
      </label>
      <div className="row">
        <span>그래픽 품질</span>
        <QualityToggle />
      </div>
    </Modal>
  );
}

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

// ───────────────────────── 공방 HUD ─────────────────────────

function WorkshopHud() {
  const goto = useGame((s) => s.goto);
  const run = useGame((s) => s.run);
  const select = useGame((s) => s.select);
  const reroll = useGame((s) => s.reroll);
  const result = useGame((s) => s.result);
  if (!run) return null;
  const massP = Math.min(1, run.mass / run.massLimit);
  const left = run.turns - run.turn;
  const playing = run.phase === 'aim' || run.phase === 'falling';
  return (
    <section className="hud">
      <header className="hud__top">
        <button type="button" className="btn btn--ghost" onClick={() => goto('title')}>
          ← 타이틀
        </button>
        <div className="hud__stat">
          <span className="hud__label">남은 턴</span>
          <span className="hud__value">{left}</span>
        </div>
        <div className={`hud__stat hud__mass ${massP > 0.8 || run.unstable ? 'is-warn' : ''}`}>
          <span className="hud__label">{run.unstable ? '불안정!' : '원반 질량'}</span>
          <span className="hud__value">
            {run.mass}
            <small> / {run.massLimit}</small>
          </span>
          <span className="bar">
            <i style={{ width: `${massP * 100}%` }} />
          </span>
        </div>
      </header>

      {playing && (
        <aside className="gauge" aria-label="예상 결과">
          <p className="gauge__title">예상 결과</p>
          {run.odds.map((o) => (
            <div key={o.id} className="gauge__row">
              <span className="gauge__grade" style={{ color: GRADE_COLOR[o.grade] }}>
                {o.grade}
              </span>
              <span className="gauge__name">{o.name}</span>
              <span className="gauge__bar">
                <i style={{ width: `${Math.max(3, o.p * 100)}%`, background: GRADE_COLOR[o.grade] }} />
              </span>
              <span className="gauge__p">{Math.round(o.p * 100)}%</span>
            </div>
          ))}
        </aside>
      )}

      {playing && (
        <footer className="hud__bottom">
          <p className="hud__hint">{run.phase === 'aim' ? '원반 둘레를 눌러 떨어뜨리세요' : '원소가 자리 잡는 중…'}</p>
          <div className="choices" role="radiogroup" aria-label="다음 원소">
            {run.choices.map((c, i) => {
              const d = el(c.el);
              return (
                <button
                  key={`${c.el}-${i}`}
                  type="button"
                  role="radio"
                  aria-checked={i === run.selected}
                  className={`choice ${i === run.selected ? 'is-on' : ''} ${d.kind === 'special' ? 'choice--special' : ''}`}
                  disabled={run.phase !== 'aim'}
                  onClick={() => select(i)}
                  title={d.hint}
                >
                  <Orb id={c.el} size={i === run.selected ? 46 : 38} />
                  <span className="choice__name">
                    {d.name}
                    {c.count > 1 && <b> ×{c.count}</b>}
                  </span>
                </button>
              );
            })}
            <button type="button" className="choice choice--reroll" disabled={run.rerolls <= 0 || run.phase !== 'aim'} onClick={reroll} aria-label={`리롤 ${run.rerolls}회 남음`}>
              <span className="reroll">↻</span>
              <span className="choice__name">리롤 {run.rerolls}</span>
            </button>
          </div>
        </footer>
      )}
      {result && <ResultCard />}
    </section>
  );
}

function ResultCard() {
  const result = useGame((s) => s.result)!;
  const register = useGame((s) => s.register);
  const newRun = useGame((s) => s.newRun);
  const [name, setName] = useState(result.name);
  const color = GRADE_COLOR[result.grade];
  const comp = Object.entries(result.composition).sort((a, b) => b[1] - a[1]).slice(0, 5);
  return (
    <div className={`result grade-${result.grade}`} style={{ '--grade': color } as React.CSSProperties}>
      <div className="result__card">
        <div className="result__grade">{result.grade}</div>
        <p className="result__type">
          {PLANET_BY_ID[result.planetId]?.name}
          {result.firstPlanet && <span className="tag">NEW</span>}
          {result.pityHit && <span className="tag">천장</span>}
        </p>
        <input className="result__name" value={name} maxLength={16} onChange={(e) => setName(e.target.value)} aria-label="행성 이름" />
        <p className="result__desc">{result.desc}</p>
        <div className="result__comp">
          {comp.map(([k, v]) => (
            <span key={k} className="comp">
              <Orb id={k} size={18} />
              {el(k).name} {Math.round(v * 100)}%
            </span>
          ))}
        </div>
        <p className="result__stats">
          합체 {result.merges}회 · 최대 콤보 {result.maxCombo} · 반응 {result.recipes.length}종
        </p>
        <div className="result__actions">
          <button type="button" className="btn btn--primary" onClick={() => register(name)}>
            은하에 등록
          </button>
          <button type="button" className="btn" onClick={newRun}>
            버리고 한 판 더
          </button>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── 은하 ─────────────────────────

function GalaxyHud() {
  const goto = useGame((s) => s.goto);
  const count = useGame((s) => s.collectionCount);
  const sel = useGame((s) => s.galaxySel);
  return (
    <section className="hud">
      <header className="hud__top">
        <button type="button" className="btn btn--ghost" onClick={() => goto('title')}>
          ← 타이틀
        </button>
        <div className="hud__stat">
          <span className="hud__label">내 은하</span>
          <span className="hud__value">{count}</span>
        </div>
      </header>
      {sel ? (
        <div className="planet-info" style={{ '--grade': GRADE_COLOR[sel.grade] } as React.CSSProperties}>
          <span className="grade-chip">{sel.grade}</span>
          <h2>{sel.name}</h2>
          <p className="muted">
            {PLANET_BY_ID[sel.type]?.name} · {new Date(sel.bornAt).toLocaleDateString('ko-KR')} 탄생
          </p>
          <div className="result__comp">
            {Object.entries(sel.composition)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 4)
              .map(([k, v]) => (
                <span key={k} className="comp">
                  <Orb id={k} size={16} />
                  {el(k).name} {Math.round(v * 100)}%
                </span>
              ))}
          </div>
        </div>
      ) : (
        <p className="hud__hint hud__hint--top">행성을 누르면 가까이 볼 수 있어요</p>
      )}
      <footer className="hud__bottom">
        <button type="button" className="btn btn--primary" onClick={() => goto('workshop')}>
          새 행성 만들기
        </button>
      </footer>
    </section>
  );
}

// ───────────────────────── 떠오르는 텍스트 ─────────────────────────

function Pops() {
  const pops = useGame((s) => s.pops);
  return (
    <div className="pops" aria-live="polite">
      {pops.map((p: Pop) => (
        <div key={p.id} className={`pop pop--${p.kind}`} style={{ left: p.x, top: p.y, '--s': p.scale ?? 1 } as React.CSSProperties}>
          <b>{p.text}</b>
          {p.sub && <small>{p.sub}</small>}
        </div>
      ))}
    </div>
  );
}

export function App() {
  const scene = useGame((s) => s.scene);
  const cinematic = useGame((s) => s.cinematic);
  const shake = useGame((s) => s.settings.shake);
  const ref = useRef(shake);
  useEffect(() => {
    ref.current = shake;
    const dbg = globalThis.__PW_DEBUG__;
    dbg?.setShake?.(shake);
  }, [shake]);
  return (
    <div className={`ui ui--${scene} ${cinematic ? 'is-cinematic' : ''}`}>
      {scene === 'title' && <Title />}
      {scene === 'workshop' && <WorkshopHud />}
      {scene === 'galaxy' && <GalaxyHud />}
      <Pops />
      <div className="letterbox letterbox--top" />
      <div className="letterbox letterbox--bottom" />
    </div>
  );
}
