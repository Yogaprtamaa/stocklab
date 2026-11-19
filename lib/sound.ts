let ctx: AudioContext | null = null;
let muted = false;
if (typeof window !== 'undefined') {
  try { muted = localStorage.getItem('stocklab:muted') === '1'; } catch {}
}

function ac(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

export function isMuted() { return muted; }
export function setMuted(m: boolean) {
  muted = m;
  try { localStorage.setItem('stocklab:muted', m ? '1' : '0'); } catch {}
}

function tone(freq: number, at: number, dur: number, type: OscillatorType = 'sine', vol = 0.12) {
  const c = ac();
  if (!c || muted) return;
  const t0 = c.currentTime + at;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(vol, t0 + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g).connect(c.destination);
  o.start(t0);
  o.stop(t0 + dur + 0.05);
}

function paperNoise(at: number, dur: number, vol: number, freq: number) {
  const c = ac();
  if (!c || muted) return;
  const t0 = c.currentTime + at;
  const len = Math.max(1, Math.floor(c.sampleRate * dur));
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const src = c.createBufferSource();
  src.buffer = buf;
  const f = c.createBiquadFilter();
  f.type = 'bandpass';
  f.frequency.value = freq;
  f.Q.value = 0.7;
  const g = c.createGain();
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  src.connect(f).connect(g).connect(c.destination);
  src.start(t0);
}

export const sfx = {
  tap: () => tone(620, 0, 0.07, 'triangle', 0.07),
  slide: () => paperNoise(0, 0.16, 0.14, 2400),
  bid: () => { tone(392, 0, 0.09, 'triangle'); tone(523, 0.08, 0.12, 'triangle'); },
  take: () => { paperNoise(0, 0.13, 0.11, 2000); tone(330, 0, 0.08, 'sine'); tone(494, 0.06, 0.1, 'sine'); tone(659, 0.12, 0.14, 'sine', 0.1); },
  coin: () => { tone(880, 0, 0.08, 'square', 0.05); tone(1175, 0.07, 0.09, 'square', 0.05); tone(1568, 0.14, 0.16, 'square', 0.05); },
  reveal: () => { tone(196, 0, 0.3, 'sine', 0.12); tone(294, 0.05, 0.3, 'sine', 0.1); tone(392, 0.1, 0.35, 'sine', 0.08); },
  turn: () => { tone(740, 0, 0.09, 'sine', 0.09); tone(988, 0.09, 0.14, 'sine', 0.09); },
  error: () => tone(150, 0, 0.18, 'sawtooth', 0.06),
  win: () => [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * 0.11, 0.3, 'triangle', 0.11)),
  lose: () => [392, 330, 262].forEach((f, i) => tone(f, i * 0.14, 0.28, 'sine', 0.1)),
  start: () => [262, 392, 523].forEach((f, i) => tone(f, i * 0.09, 0.22, 'triangle', 0.1)),
};