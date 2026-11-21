import type { Sector, Kind, Effect, EconType } from '@/config';
import type { Phase } from '@/engine';

export function econDetail(card: { type: EconType; delta?: number; coins?: number }): string {
  switch (card.type) {
    case 'MOVE': return card.delta === 0 ? 'harga tetap' : `harga ${card.delta! > 0 ? '+' : '−'}${Math.abs(card.delta ?? 0)}`;
    case 'BOOM': return 'harga +3 · split sektor';
    case 'CRASH': return 'harga −3';
    case 'SPLIT': return 'pemegang dapat Split (×2)';
    case 'DIVIDEND': return `+${card.coins ?? 1} koin / lembar`;
    case 'RIGHT_ISSUE': return 'harga −1 · saham baru + Split';
    case 'EXTRA_FEE': return 'bayar 1 koin / kartu aset';
    case 'PAJAK': return 'bayar koin = nomor urutan';
    case 'BUYBACK': return 'harga +1 · wajib jual';
    case 'RESESI': return 'harga >5 turun 1';
    case 'STIMULUS': return 'harga <5 naik 1';
    case 'RESTRUCTURE': return 'semua harga → 5';
  }
}

export function econTone(card: { type: EconType }): 'bull' | 'bear' | 'violet' | 'neutral' {
  switch (card.type) {
    case 'BOOM': case 'DIVIDEND': case 'STIMULUS': return 'bull';
    case 'CRASH': case 'RESESI': case 'PAJAK': case 'EXTRA_FEE': return 'bear';
    case 'SPLIT': case 'RIGHT_ISSUE': case 'BUYBACK': case 'RESTRUCTURE': return 'violet';
    default: return 'neutral';
  }
}

export const SECTOR_META: Record<Sector, { label: string; color: string }> = {
  KONSUMER: { label: 'Konsumer', color: '#2f80d6' },
  KEUANGAN: { label: 'Keuangan', color: '#e89a1c' },
  AGRIKULTUR: { label: 'Agrikultur', color: '#6aa53a' },
  TAMBANG: { label: 'Tambang', color: '#cf3a34' },
};
export const KIND_META: Record<Kind, { label: string; color: string }> = {
  ...SECTOR_META,
  FUND: { label: 'Reksa Dana', color: '#129e8a' },
};

/* varian terang untuk teks di atas felt/kayu gelap */
export const SECTOR_FELT: Record<Kind, string> = {
  KONSUMER: '#79bdf5',
  KEUANGAN: '#f8c56a',
  AGRIKULTUR: '#a6d46e',
  TAMBANG: '#ff958b',
  FUND: '#5fd6c0',
};

export const EFFECT_META: Record<Effect, { label: string; desc: string }> = {
  NONE: { label: 'Saham Polos', desc: 'Tanpa efek. Simpan sebagai aset dan jual saat harga tinggi.' },
  QUICK_BUY: { label: 'Quick Buy', desc: 'Ambil 2 kartu terbuka lagi — wajib jadi aset. Fee tetap dibayar.' },
  RUMOR: { label: 'Rumor', desc: 'Geser harga ±1 ke 1–2 sektor, atau ±2 ke satu sektor. Rumor tidak memicu Crash/Split.' },
  INFO: { label: 'Info Bursa', desc: 'Intip kartu ekonomi teratas dari 2 sektor, dapat 2 koin. Kamu jual paling akhir.' },
  ACQUIRE: { label: 'Akuisisi', desc: 'Ambil 1 saham lawan (bukan Reksa Dana) dan bayar floor(harga ÷ 2) ke Bank. Syarat: sahammu di sektor itu ≥ milik target. Split ikut pindah.' },
};

export const ECON_LABEL: Record<EconType, string> = {
  MOVE: 'Pergerakan', BOOM: 'Boom', CRASH: 'Crash', SPLIT: 'Split', DIVIDEND: 'Dividen',
  RIGHT_ISSUE: 'Right Issue', EXTRA_FEE: 'Extra Fee', PAJAK: 'Pajak', BUYBACK: 'Buyback',
  RESESI: 'Resesi', STIMULUS: 'Stimulus', RESTRUCTURE: 'Restrukturisasi',
};

export const PHASE_META: Record<Phase, { label: string; desc: string }> = {
  BIDDING: { label: 'Bidding', desc: 'Lelang tertutup — bid tertinggi dapat urutan jalan 1.' },
  ACTION: { label: 'Aksi', desc: 'Draft kartu terbuka: simpan sebagai aset atau gunakan efeknya.' },
  SELL: { label: 'Jual', desc: 'Jual maksimal 1 jenis aset, jumlah lembar bebas. Reksa Dana baru dicairkan di akhir permainan.' },
  ENDED: { label: 'Selesai', desc: 'Semua aset dilikuidasi. Koin terbanyak menang.' },
};

export const sectorColor = (k: Kind) => KIND_META[k].color;
export const sectorLabel = (k: Kind) => KIND_META[k].label;