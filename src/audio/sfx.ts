/**
 * 절차 합성 효과음 (Web Audio). 외부 사운드 파일 없이 바로 소리가 나게 한다.
 * 원소별 고유 음색: 작은 원소는 높고 가볍게, 큰 원소는 낮고 묵직하게. 피치 랜덤 ±5%, 콤보마다 반음씩 상승.
 */
import { CONFIG } from '../core/config';
import { Rng } from '../core/prng';

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let volume = 0.7;
const jitter = new Rng('sfx-jitter'); // 소리 흔들림은 게임 결과에 영향이 없지만 규칙대로 시드 PRNG 사용

/** 첫 사용자 입력에서 호출 (브라우저 자동재생 정책) */
export function unlockAudio(): void {
  try {
    if (!ctx) {
      const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = volume;
      const comp = ctx.createDynamicsCompressor();
      master.connect(comp).connect(ctx.destination);
    }
    if (ctx.state === 'suspended') void ctx.resume();
  } catch {
    ctx = null;
  }
}

export function setVolume(v: number): void {
  volume = v;
  if (master) master.gain.value = v;
}

const rand = () => 1 + (jitter.next() - 0.5) * 0.1;

function tone(freq: number, opts: { type?: OscillatorType; dur?: number; gain?: number; attack?: number; slide?: number; delay?: number } = {}): void {
  if (!ctx || !master) return;
  const { type = 'sine', dur = 0.18, gain = 0.25, attack = 0.005, slide = 1, delay = 0 } = opts;
  const t = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (slide !== 1) osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq * slide), t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(master);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

function noise(dur: number, gain: number, freq = 1200, delay = 0): void {
  if (!ctx || !master) return;
  const t = ctx.currentTime + delay;
  const len = Math.floor(ctx.sampleRate * dur);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = (jitter.next() * 2 - 1) * (1 - i / len);
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const f = ctx.createBiquadFilter();
  f.type = 'bandpass';
  f.frequency.value = freq;
  f.Q.value = 0.8;
  const g = ctx.createGain();
  g.gain.value = gain;
  src.connect(f).connect(g).connect(master);
  src.start(t);
}

/** tier 0(먼지) ~ 7(중성자 핵) → 기본 음높이 */
const baseFreq = (tier: number) => 880 * Math.pow(2, -tier * 0.42);

export const sfx = {
  ui(): void {
    tone(1320 * rand(), { type: 'triangle', dur: 0.06, gain: 0.12 });
  },
  select(): void {
    tone(990 * rand(), { type: 'triangle', dur: 0.08, gain: 0.14, slide: 1.2 });
  },
  drop(tier: number): void {
    tone(baseFreq(tier) * 1.5 * rand(), { type: 'sine', dur: 0.14, gain: 0.16, slide: 0.7 });
  },
  land(tier: number, speed: number): void {
    const g = Math.min(0.28, 0.06 + speed * 0.03);
    tone(baseFreq(tier) * 0.5 * rand(), { type: 'sine', dur: 0.12 + tier * 0.02, gain: g, slide: 0.6 });
    noise(0.06, g * 0.5, 600);
  },
  merge(tier: number, combo: number): void {
    const f = baseFreq(tier) * Math.pow(CONFIG.feel.comboPitch, Math.max(0, combo - 1)) * rand();
    tone(f, { type: 'triangle', dur: 0.22, gain: 0.26, slide: 1.5 });
    tone(f * 2, { type: 'sine', dur: 0.3, gain: 0.12, delay: 0.04 });
    tone(f * 3, { type: 'sine', dur: 0.36, gain: 0.06, delay: 0.08 });
  },
  react(first: boolean): void {
    const f = 523 * rand();
    tone(f, { type: 'square', dur: 0.12, gain: 0.08 });
    tone(f * 1.25, { type: 'triangle', dur: 0.2, gain: 0.16, delay: 0.07 });
    tone(f * 1.5, { type: 'triangle', dur: 0.32, gain: 0.16, delay: 0.14 });
    if (first) [2, 2.5, 3].forEach((m, i) => tone(f * m, { type: 'sine', dur: 0.4, gain: 0.1, delay: 0.25 + i * 0.08 }));
  },
  special(effect: string): void {
    if (effect === 'lightning') noise(0.35, 0.35, 2400);
    else if (effect === 'cold') tone(1800 * rand(), { type: 'sine', dur: 0.5, gain: 0.12, slide: 0.5 });
    else if (effect === 'clear') tone(110, { type: 'sawtooth', dur: 0.6, gain: 0.14, slide: 0.3 });
    else tone(660 * rand(), { type: 'triangle', dur: 0.45, gain: 0.15, slide: 1.8 });
  },
  warn(): void {
    tone(220, { type: 'square', dur: 0.12, gain: 0.08 });
    tone(220, { type: 'square', dur: 0.12, gain: 0.08, delay: 0.18 });
  },
  condense(): void {
    tone(80, { type: 'sawtooth', dur: 1.4, gain: 0.12, slide: 4, attack: 0.6 });
    noise(1.4, 0.12, 300);
  },
  birth(rank: number): void {
    noise(0.8, 0.3, 200);
    const chord = [261.6, 329.6, 392, 523.3, 659.3];
    chord.slice(0, 3 + Math.min(2, rank)).forEach((f, i) => tone(f, { type: 'triangle', dur: 1.6, gain: 0.12, delay: 0.1 + i * 0.09, attack: 0.05 }));
  },
};

export function haptic(ms: number | number[]): void {
  if (!CONFIG.feel.haptics) return;
  try {
    navigator.vibrate?.(ms);
  } catch {
    /* 지원 안 함 */
  }
}
