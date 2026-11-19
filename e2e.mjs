// E2E: jalankan server dulu (npm start), lalu: node e2e.mjs [baseUrl]
const BASE = process.argv[2] ?? 'http://localhost:3000';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function req(method, path, body) {
  const res = await fetch(BASE + path, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`${method} ${path} → ${res.status}: ${data.error}`);
  return data;
}
const assert = (cond, msg) => { if (!cond) throw new Error('ASSERT GAGAL: ' + msg); };

// ── 1. Room multiplayer: buat, join via kode, bot, start, hidden info ──
{
  const host = await req('POST', '/api/rooms', { name: 'Host' });
  assert(/^[A-Z2-9]{6}$/.test(host.code), 'kode room 6 karakter');
  const friend = await req('POST', `/api/rooms/${host.code}/join`, { name: 'Teman' });
  await req('POST', `/api/rooms/${host.code}/bots`, { token: host.token, add: 'smart' });
  const lobby = await req('GET', `/api/rooms/${host.code}/state?token=${host.token}`);
  assert(lobby.seats.length === 3, 'lobby 3 kursi');
  assert(!lobby.started, 'belum mulai');
  await req('POST', `/api/rooms/${host.code}/start`, { token: host.token });
  const vh = await req('GET', `/api/rooms/${host.code}/state?token=${host.token}`);
  const vf = await req('GET', `/api/rooms/${host.code}/state?token=${friend.token}`);
  assert(vh.started && vh.view, 'game mulai');
  assert(vh.view.players[0].coins !== null && vh.view.players[1].coins === null, 'hidden info: koin lawan null (host)');
  assert(vf.view.players[1].coins !== null && vf.view.players[0].coins === null, 'hidden info: koin lawan null (teman)');
  // aksi ilegal ditolak
  let rejected = false;
  try { await req('POST', `/api/rooms/${host.code}/action`, { token: host.token, action: { type: 'BID', amount: 999 } }); } catch { rejected = true; }
  assert(rejected, 'bid ilegal ditolak');
  // spoof pid: token teman tidak bisa bid atas nama host — engine pakai pid dari sesi
  await req('POST', `/api/rooms/${host.code}/action`, { token: friend.token, action: { type: 'BID', amount: 1 } });
  const after = await req('GET', `/api/rooms/${host.code}/state?token=${host.token}`);
  assert(after.view.players[1].hasBid && !after.view.players[0].hasBid, 'pid dari sesi, bukan payload');
  console.log('✓ multiplayer: kode unik, join, bot, start, hidden info, validasi aksi');
}

// ── 2. Solo vs 4 bot: mainkan game penuh sampai ENDED, lalu restart ──
{
  const solo = await req('POST', '/api/rooms', { name: 'E2E', solo: { bots: 4, difficulty: 'smart' } });
  const { code, token, pid } = solo;
  const t0 = Date.now();
  let actions = 0, lastPhase = '', roundsSeen = new Set();
  for (;;) {
    if (Date.now() - t0 > 180000) throw new Error('timeout: game tidak selesai');
    const p = await req('GET', `/api/rooms/${code}/state?token=${token}`);
    const v = p.view;
    assert(v, 'view ada');
    roundsSeen.add(v.round);
    if (v.phase !== lastPhase) { lastPhase = v.phase; }
    if (v.phase === 'ENDED') {
      assert(v.result && v.result.scores.length === 5, 'hasil 5 pemain');
      assert(v.result.scores[0].total >= v.result.scores[4].total, 'skor terurut');
      console.log(`✓ solo selesai: ${actions} aksi manusia, ${Math.round((Date.now() - t0) / 1000)}s, ronde ${[...roundsSeen].join(',')}`);
      console.log('  skor:', v.result.scores.map((s) => `P${s.id}=${s.total}`).join(' '), '| winner P' + v.result.winner);
      break;
    }
    const me = v.players.find((x) => x.id === pid);
    if (v.phase === 'BIDDING' && !me.hasBid) {
      await req('POST', `/api/rooms/${code}/action`, { token, action: { type: 'BID', amount: Math.min(1, me.coins) } });
      actions++;
    } else if (v.phase === 'ACTION' && v.turn === pid) {
      const aff = v.open.filter((c) => c.fee <= me.coins).sort((a, b) => a.fee - b.fee);
      assert(aff.length > 0, 'selalu ada kartu mampu bayar saat giliran');
      await req('POST', `/api/rooms/${code}/action`, { token, action: { type: 'TAKE', cardId: aff[0].id, mode: 'save' } });
      actions++;
    } else if (v.phase === 'SELL' && v.turn === pid) {
      await req('POST', `/api/rooms/${code}/action`, { token, action: { type: 'SELL', cardIds: [] } });
      actions++;
    }
    await sleep(350);
  }
  // restart
  await req('POST', `/api/rooms/${code}/restart`, { token });
  const p2 = await req('GET', `/api/rooms/${code}/state?token=${token}`);
  assert(p2.view.round === 1 && p2.view.phase === 'BIDDING', 'restart kembali ke ronde 1');
  assert(p2.gamesPlayed === 2, 'gamesPlayed bertambah');
  console.log('✓ restart: game baru ronde 1, gamesPlayed=2');
}

// ── 3. Error handling: room tak ada, join room penuh/started ──
{
  let notFound = false;
  try { await req('GET', '/api/rooms/ZZZZZZ/state?token=x'); } catch (e) { notFound = /tidak ditemukan/i.test(e.message); }
  assert(notFound, 'room tak ditemukan → pesan jelas');
  console.log('✓ error handling: pesan API jelas');
}

console.log('\nSEMUA E2E LOLOS');