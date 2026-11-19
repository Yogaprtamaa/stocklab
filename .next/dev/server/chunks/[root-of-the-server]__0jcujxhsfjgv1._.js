module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/app/api/rooms/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rooms$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rooms.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-route] (ecmascript)");
;
;
const dynamic = 'force-dynamic';
async function POST(req) {
    try {
        const b = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["body"])(req);
        const { room, seat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rooms$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createRoom"])(String(b.name ?? ''));
        const solo = b.solo;
        if (solo) {
            const n = Math.max(2, Math.min(4, Number(solo.bots) || 3));
            const d = solo.difficulty === 'random' ? 'random' : 'smart';
            for(let i = 0; i < n; i++)(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rooms$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addBot"])(room, d);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rooms$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startGame"])(room, seat.token);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ok"])({
            code: room.code,
            token: seat.token,
            pid: seat.pid
        });
    } catch (e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fail"])(e);
    }
}
}),
"[project]/config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONFIG",
    ()=>CONFIG,
    "ECONOMY_DECK",
    ()=>ECONOMY_DECK,
    "PURPLE",
    ()=>PURPLE,
    "SECTORS",
    ()=>SECTORS
]);
const SECTORS = [
    'KONSUMER',
    'KEUANGAN',
    'AGRIKULTUR',
    'TAMBANG'
];
const PURPLE = new Set([
    'EXTRA_FEE',
    'PAJAK',
    'BUYBACK',
    'RESESI',
    'STIMULUS',
    'RESTRUCTURE'
]);
const CONFIG = {
    // ---- OFFICIAL (dari rulebook) ----
    rounds: 6,
    startCoins: 15,
    startPrice: 5,
    minPrice: 0,
    maxPrice: 10,
    minPlayers: 3,
    maxPlayers: 5,
    stocksPerSector: 12,
    fundCards: 12,
    /** Rulebook tulis "~"; totalnya harus 60. */ effectCounts: {
        NONE: 24,
        QUICK_BUY: 12,
        RUMOR: 10,
        INFO: 8,
        ACQUIRE: 6
    },
    openLimit: {
        sameKind: 3,
        quickBuy: 3
    },
    economyPerSector: 6,
    quickBuyTake: 2,
    rumorMoves: 2,
    infoBonus: 2,
    loan: 5,
    debtPenalty: 7,
    // ---- ASSUMPTION (rulebook tidak menyebut angka pastinya) ----
    /** fee -> jumlah kartu. Total harus 60. */ fees: {
        0: 36,
        1: 16,
        2: 8
    },
    /** Maks percobaan kocok ulang saat filter buka kartu gagal, lalu terima apa adanya. */ openRetryCap: 100
};
const ECONOMY_DECK = [
    {
        type: 'MOVE',
        delta: 1,
        n: 3
    },
    {
        type: 'MOVE',
        delta: 2,
        n: 3
    },
    {
        type: 'MOVE',
        delta: -1,
        n: 3
    },
    {
        type: 'MOVE',
        delta: -2,
        n: 3
    },
    {
        type: 'MOVE',
        delta: 0,
        n: 2
    },
    {
        type: 'BOOM',
        n: 2
    },
    {
        type: 'CRASH',
        n: 2
    },
    {
        type: 'SPLIT',
        n: 3
    },
    {
        type: 'DIVIDEND',
        coins: 1,
        n: 2
    },
    {
        type: 'DIVIDEND',
        coins: 2,
        n: 2
    },
    {
        type: 'RIGHT_ISSUE',
        n: 2
    },
    {
        type: 'EXTRA_FEE',
        n: 1
    },
    {
        type: 'PAJAK',
        n: 1
    },
    {
        type: 'BUYBACK',
        n: 2
    },
    {
        type: 'RESESI',
        n: 1
    },
    {
        type: 'STIMULUS',
        n: 1
    },
    {
        type: 'RESTRUCTURE',
        n: 1
    }
];
}),
"[project]/engine.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameError",
    ()=>GameError,
    "applyAction",
    ()=>applyAction,
    "currentActors",
    ()=>currentActors,
    "fundPrice",
    ()=>fundPrice,
    "newGame",
    ()=>newGame,
    "pay",
    ()=>pay,
    "resolveEconomy",
    ()=>resolveEconomy,
    "viewFor",
    ()=>viewFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.ts [app-route] (ecmascript)");
;
class GameError extends Error {
}
const fail = (m)=>{
    throw new GameError(m);
};
// ───────────────────────── RNG (seeded, deterministik) ─────────────────────────
function rand(s) {
    s.rng = s.rng + 0x6d2b79f5 | 0;
    let t = Math.imul(s.rng ^ s.rng >>> 15, 1 | s.rng);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function shuffle(s, a) {
    for(let i = a.length - 1; i > 0; i--){
        const j = Math.floor(rand(s) * (i + 1));
        [a[i], a[j]] = [
            a[j],
            a[i]
        ];
    }
    return a;
}
function newGame(playerCount, seed = 1) {
    if (playerCount < __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].minPlayers || playerCount > __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].maxPlayers) fail('jumlah pemain harus 3-5');
    const s = {
        rng: seed | 0,
        round: 1,
        phase: 'BIDDING',
        board: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTORS"]
        ],
        price: {},
        stacks: {},
        deck: [],
        open: [],
        discard: [],
        players: [],
        turn: null,
        sellQueue: [],
        nextId: 1,
        log: []
    };
    shuffle(s, s.board);
    for (const sec of __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTORS"])s.price[sec] = __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].startPrice;
    const econ = [];
    for (const e of __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ECONOMY_DECK"]){
        for(let i = 0; i < e.n; i++)econ.push({
            id: s.nextId++,
            type: e.type,
            delta: e.delta,
            coins: e.coins
        });
    }
    shuffle(s, econ);
    for (const sec of s.board)s.stacks[sec] = econ.splice(0, __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].economyPerSector);
    const kinds = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTORS"].flatMap((sec)=>Array(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].stocksPerSector).fill(sec)),
        ...Array(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].fundCards).fill('FUND')
    ];
    const effects = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].effectCounts).flatMap(([e, n])=>Array(n).fill(e));
    const fees = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].fees).flatMap(([f, n])=>Array(n).fill(Number(f)));
    if (effects.length !== kinds.length || fees.length !== kinds.length) throw new Error('config deck tidak konsisten');
    shuffle(s, effects);
    shuffle(s, fees);
    s.deck = shuffle(s, kinds.map((kind, i)=>({
            id: s.nextId++,
            kind,
            effect: effects[i],
            fee: fees[i],
            split: false
        })));
    const orders = shuffle(s, Array.from({
        length: playerCount
    }, (_, i)=>i + 1));
    s.players = orders.map((order, id)=>({
            id,
            coins: __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].startCoins,
            assets: [],
            debt: 0,
            order,
            bid: null,
            peeks: [],
            usedInfo: false
        }));
    startRound(s);
    return s;
}
// ───────────────────────── Helpers ─────────────────────────
const byOrder = (s)=>[
        ...s.players
    ].sort((a, b)=>a.order - b.order);
const clamp = (n)=>Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].minPrice, Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].maxPrice, n));
const movePrice = (s, sec, d)=>{
    s.price[sec] = clamp(s.price[sec] + d);
};
function fundPrice(s) {
    return Math.floor((s.price[s.board[1]] + s.price[s.board[2]]) / 2);
}
function value(s, c) {
    return c.kind === 'FUND' ? fundPrice(s) : s.price[c.kind] * (c.split ? 2 : 1);
}
function pay(s, payer, amount, payee) {
    if (amount <= 0) return;
    if (payer.coins < amount) {
        const n = Math.ceil((amount - payer.coins) / __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].loan);
        payer.debt += n;
        payer.coins += n * __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].loan;
        s.log.push(`P${payer.id} ambil ${n} Kartu Utang`);
    }
    payer.coins -= amount;
    if (payee) payee.coins += amount;
}
function currentActors(s) {
    if (s.phase === 'BIDDING') return s.players.filter((p)=>p.bid === null).map((p)=>p.id);
    return s.turn === null ? [] : [
        s.turn
    ];
}
// ───────────────────────── Round flow ─────────────────────────
function drawOpen(s) {
    const n = Math.min(2 * s.players.length, s.deck.length);
    const ok = (h)=>{
        const per = {};
        for (const c of h)per[c.kind] = (per[c.kind] ?? 0) + 1;
        return Math.max(0, ...Object.values(per)) <= __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].openLimit.sameKind && h.filter((c)=>c.effect === 'QUICK_BUY').length <= __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].openLimit.quickBuy;
    };
    for(let t = 0; t < __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].openRetryCap; t++){
        const hand = s.deck.splice(0, n);
        if (ok(hand)) return hand;
        s.deck.push(...hand);
        shuffle(s, s.deck);
    }
    s.log.push('filter buka kartu gagal, dipakai apa adanya');
    return s.deck.splice(0, n);
}
function startRound(s) {
    s.phase = 'BIDDING';
    s.turn = null;
    s.sellQueue = [];
    s.players.forEach((p)=>{
        p.bid = null;
    });
    s.open = drawOpen(s);
    s.log.push(`Ronde ${s.round}: ${s.open.length} kartu aksi dibuka`);
}
function resolveBids(s) {
    const ranked = [
        ...s.players
    ].sort((a, b)=>b.bid - a.bid || a.order - b.order);
    s.log.push('Bid: ' + ranked.map((p)=>`P${p.id}=${p.bid}`).join(' '));
    ranked.forEach((p, i)=>{
        p.coins -= p.bid;
        p.order = i + 1;
        p.bid = null;
    });
    s.phase = 'ACTION';
    s.turn = byOrder(s).at(-1).id; // nextTurn akan mulai dari order 1
    nextTurn(s);
}
function nextTurn(s) {
    if (s.open.length === 0) return startSell(s);
    const ord = byOrder(s);
    const idx = ord.findIndex((p)=>p.id === s.turn);
    for(let i = 1; i <= ord.length; i++){
        const q = ord[(idx + i) % ord.length];
        if (s.open.some((c)=>c.fee <= q.coins)) {
            s.turn = q.id;
            return;
        }
    }
    s.discard.push(...s.open); // tidak ada yang mampu bayar fee -> sisa dibuang
    s.open = [];
    startSell(s);
}
function startSell(s) {
    s.phase = 'SELL';
    const ord = byOrder(s);
    s.sellQueue = [
        ...ord.filter((p)=>!p.usedInfo),
        ...ord.filter((p)=>p.usedInfo)
    ].map((p)=>p.id);
    s.turn = s.sellQueue[0];
}
function applyAction(prev, pid, a) {
    const s = structuredClone(prev); // atomic: error -> state lama tidak berubah
    const p = s.players[pid] ?? fail('pemain tidak ada');
    if (s.phase === 'ENDED') fail('game sudah selesai');
    if (a.type === 'BID') bid(s, p, a.amount);
    else if (a.type === 'TAKE') take(s, p, a);
    else if (a.type === 'SELL') sell(s, p, a.cardIds);
    else fail('aksi tidak dikenal');
    return s;
}
function bid(s, p, amount) {
    if (s.phase !== 'BIDDING') fail('bukan fase bidding');
    if (p.bid !== null) fail('sudah bid');
    if (!Number.isInteger(amount) || amount < 0 || amount > p.coins) fail('bid tidak valid');
    p.bid = amount;
    if (s.players.every((q)=>q.bid !== null)) resolveBids(s);
}
function take(s, p, a) {
    if (s.phase !== 'ACTION' || s.turn !== p.id) fail('bukan giliranmu');
    const card = s.open.find((c)=>c.id === a.cardId) ?? fail('kartu tidak terbuka');
    if (card.fee > p.coins) fail('koin kurang untuk trading fee');
    if (a.mode === 'effect' && card.effect === 'NONE') fail('kartu polos tidak punya efek');
    p.coins -= card.fee;
    s.open = s.open.filter((c)=>c !== card);
    if (a.mode === 'save') p.assets.push(card);
    else {
        runEffect(s, p, card, a.params ?? {});
        s.discard.push(card);
    }
    nextTurn(s);
}
function runEffect(s, p, card, x) {
    switch(card.effect){
        case 'QUICK_BUY':
            {
                const ids = x.cardIds ?? [];
                const need = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].quickBuyTake, s.open.length);
                if (ids.length !== need || new Set(ids).size !== need) fail(`Quick Buy: pilih tepat ${need} kartu`);
                const picks = ids.map((id)=>s.open.find((c)=>c.id === id) ?? fail('kartu tidak terbuka'));
                const fee = picks.reduce((t, c)=>t + c.fee, 0);
                if (fee > p.coins) fail('koin kurang untuk fee Quick Buy');
                p.coins -= fee;
                p.assets.push(...picks); // wajib disimpan sebagai aset
                s.open = s.open.filter((c)=>!picks.includes(c));
                return;
            }
        case 'RUMOR':
            {
                const m = x.moves ?? [];
                if (m.length < 1 || m.length > __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].rumorMoves) fail('Rumor: 1-2 perubahan');
                for (const { sector, delta } of m){
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTORS"].includes(sector) || delta !== 1 && delta !== -1) fail('Rumor: parameter tidak valid');
                    movePrice(s, sector, delta);
                }
                return;
            }
        case 'INFO':
            {
                const secs = x.sectors ?? [];
                if (secs.length !== 2 || secs[0] === secs[1] || secs.some((c)=>!__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTORS"].includes(c))) fail('Info Bursa: pilih 2 sektor berbeda');
                p.peeks = secs.map((sector)=>({
                        sector,
                        card: s.stacks[sector][0] ?? fail('tumpukan kosong')
                    }));
                p.coins += __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].infoBonus;
                p.usedInfo = true;
                return;
            }
        case 'ACQUIRE':
            {
                const owner = s.players.find((q)=>q.id !== p.id && q.assets.some((c)=>c.id === x.targetCardId)) ?? fail('target tidak valid');
                const target = owner.assets.find((c)=>c.id === x.targetCardId);
                if (target.kind === 'FUND') fail('Reksa Dana tidak bisa diakuisisi');
                pay(s, p, Math.floor(s.price[target.kind] / 2), owner);
                owner.assets = owner.assets.filter((c)=>c !== target);
                p.assets.push(target); // Split token ikut pindah
                return;
            }
        default:
            fail('kartu tanpa efek');
    }
}
function sell(s, p, ids) {
    if (s.phase !== 'SELL' || s.turn !== p.id) fail('bukan giliranmu');
    if (ids.length) {
        if (new Set(ids).size !== ids.length) fail('kartu duplikat');
        const cards = ids.map((id)=>p.assets.find((c)=>c.id === id) ?? fail('bukan kartu milikmu'));
        if (new Set(cards.map((c)=>c.kind)).size !== 1) fail('hanya boleh jual 1 jenis aset');
        p.coins += cards.reduce((t, c)=>t + value(s, c), 0);
        p.assets = p.assets.filter((c)=>!cards.includes(c));
        s.discard.push(...cards);
    }
    s.sellQueue.shift();
    if (s.sellQueue.length) s.turn = s.sellQueue[0];
    else resolveEconomy(s);
}
function resolveEconomy(s) {
    const revealed = s.board.map((sector)=>({
            sector,
            card: s.stacks[sector].shift() ?? fail('tumpukan ekonomi kosong')
        }));
    s.lastEconomy = revealed;
    s.lastEconomyRound = s.round;
    s.log.push('Ekonomi: ' + revealed.map((r)=>`${r.sector}:${r.card.type}`).join(' '));
    if (revealed.some((r)=>r.card.type === 'RESTRUCTURE')) {
        for (const sec of __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTORS"])s.price[sec] = __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].startPrice; // membatalkan SEMUA efek lain
    } else {
        const ordered = [
            ...revealed.filter((r)=>__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PURPLE"].has(r.card.type)),
            ...revealed.filter((r)=>!__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PURPLE"].has(r.card.type))
        ];
        for (const r of ordered)applyEcon(s, r.sector, r.card);
    }
    s.players.forEach((p)=>{
        p.peeks = [];
        p.usedInfo = false;
    });
    s.round++;
    if (s.round > __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].rounds) endGame(s);
    else startRound(s);
}
function stocksOf(p, sec) {
    return p.assets.filter((c)=>c.kind === sec);
}
function split(s, sec) {
    s.players.forEach((p)=>stocksOf(p, sec).forEach((c)=>{
            c.split = true;
        })); // maks 1 token / kartu
}
function applyEcon(s, sec, c) {
    switch(c.type){
        case 'MOVE':
            movePrice(s, sec, c.delta ?? 0);
            break;
        case 'BOOM':
            movePrice(s, sec, 3);
            split(s, sec);
            break;
        case 'CRASH':
            movePrice(s, sec, -3);
            break;
        case 'SPLIT':
            split(s, sec);
            break;
        case 'DIVIDEND':
            s.players.forEach((p)=>{
                p.coins += stocksOf(p, sec).length * (c.coins ?? 0);
            });
            break;
        case 'RIGHT_ISSUE':
            movePrice(s, sec, -1);
            s.players.forEach((p)=>{
                if (stocksOf(p, sec).length) p.assets.push({
                    id: s.nextId++,
                    kind: sec,
                    effect: 'NONE',
                    fee: 0,
                    split: true
                });
            });
            break;
        case 'EXTRA_FEE':
            s.players.forEach((p)=>pay(s, p, p.assets.length));
            break;
        case 'PAJAK':
            s.players.forEach((p)=>pay(s, p, p.order));
            break;
        case 'BUYBACK':
            movePrice(s, sec, 1);
            s.players.forEach((p)=>{
                const sold = stocksOf(p, sec);
                p.coins += sold.reduce((t, k)=>t + value(s, k), 0);
                p.assets = p.assets.filter((k)=>!sold.includes(k));
                s.discard.push(...sold);
            });
            break;
        case 'RESESI':
            for (const k of __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTORS"])if (s.price[k] > __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].startPrice) movePrice(s, k, -1);
            break;
        case 'STIMULUS':
            for (const k of __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTORS"])if (s.price[k] < __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].startPrice) movePrice(s, k, 1);
            break;
        case 'RESTRUCTURE':
            break; // ditangani di resolveEconomy
    }
}
function endGame(s) {
    s.phase = 'ENDED';
    s.turn = null;
    s.sellQueue = [];
    const scores = s.players.map((p)=>{
        p.coins += p.assets.reduce((t, c)=>t + value(s, c), 0); // likuidasi akhir
        s.discard.push(...p.assets);
        p.assets = [];
        return {
            id: p.id,
            total: p.coins - p.debt * __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].debtPenalty,
            order: p.order
        };
    });
    scores.sort((a, b)=>b.total - a.total || a.order - b.order);
    s.result = {
        scores,
        winner: scores[0].id
    };
    s.log.push('Game selesai');
}
function viewFor(s, pid) {
    return {
        round: s.round,
        phase: s.phase,
        board: s.board,
        price: s.price,
        fundPrice: fundPrice(s),
        open: s.open,
        turn: s.turn,
        sellQueue: s.sellQueue,
        deckCount: s.deck.length,
        stackCounts: Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTORS"].map((k)=>[
                k,
                s.stacks[k].length
            ])),
        lastEconomy: s.lastEconomy ?? null,
        lastEconomyRound: s.lastEconomyRound ?? null,
        players: s.players.map((p)=>({
                id: p.id,
                order: p.order,
                assets: p.assets,
                debt: p.debt,
                hasBid: p.bid !== null,
                coins: p.id === pid ? p.coins : null,
                bid: p.id === pid ? p.bid : null,
                peeks: p.id === pid ? p.peeks : []
            })),
        result: s.result,
        log: s.log
    };
}
}),
"[project]/lib/api.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "body",
    ()=>body,
    "fail",
    ()=>fail,
    "ok",
    ()=>ok
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rooms$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rooms.ts [app-route] (ecmascript)");
;
;
function ok(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
}
function fail(e) {
    if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rooms$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApiError"]) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: e.message
    }, {
        status: e.status
    });
    console.error(e);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Terjadi kesalahan server.'
    }, {
        status: 500
    });
}
async function body(req) {
    try {
        return await req.json();
    } catch  {
        return {};
    }
}
}),
"[project]/lib/bot.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "autoAction",
    ()=>autoAction,
    "botCandidates",
    ()=>botCandidates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engine.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.ts [app-route] (ecmascript)");
;
;
const mulberry = (a)=>()=>{
        a = a + 0x6d2b79f5 | 0;
        let t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
function botCandidates(s, pid, st) {
    const r = mulberry(s.rng ^ Math.imul(pid + 1, 2654435761) ^ Math.imul(s.round, 40503) | 0);
    const p = s.players[pid];
    const pick = (a)=>a[Math.floor(r() * a.length)];
    const val = (k)=>k === 'FUND' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fundPrice"])(s) : s.price[k];
    if (s.phase === 'BIDDING') {
        const cap = Math.min(p.coins, st === 'smart' ? 2 : 3);
        return [
            {
                type: 'BID',
                amount: Math.floor(r() * (cap + 1))
            }
        ];
    }
    if (s.phase === 'ACTION') {
        const aff = s.open.filter((c)=>c.fee <= p.coins);
        if (!aff.length) return [
            {
                type: 'SELL',
                cardIds: []
            }
        ];
        const c = st === 'smart' ? [
            ...aff
        ].sort((a, b)=>val(b.kind) - b.fee - (val(a.kind) - a.fee))[0] : pick(aff);
        const out = [];
        if (c.effect !== 'NONE' && (st === 'smart' || r() < 0.6)) {
            const base = {
                type: 'TAKE',
                cardId: c.id,
                mode: 'effect'
            };
            if (c.effect === 'RUMOR') {
                const held = __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTORS"].filter((k)=>p.assets.some((a)=>a.kind === k));
                const mv = ()=>({
                        sector: pick(held.length ? held : [
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTORS"]
                        ]),
                        delta: 1
                    });
                out.push({
                    ...base,
                    params: {
                        moves: st === 'smart' ? [
                            mv(),
                            mv()
                        ] : [
                            {
                                sector: pick([
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTORS"]
                                ]),
                                delta: r() < 0.5 ? 1 : -1
                            }
                        ]
                    }
                });
            } else if (c.effect === 'INFO') {
                const secs = [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTORS"]
                ].sort(()=>r() - 0.5).slice(0, 2);
                out.push({
                    ...base,
                    params: {
                        sectors: secs
                    }
                });
            } else if (c.effect === 'ACQUIRE') {
                const targets = s.players.filter((q)=>q.id !== pid).flatMap((q)=>q.assets).filter((a)=>a.kind !== 'FUND');
                if (targets.length) out.push({
                    ...base,
                    params: {
                        targetCardId: pick(targets).id
                    }
                });
            } else if (c.effect === 'QUICK_BUY') {
                const others = s.open.filter((o)=>o.id !== c.id).sort((a, b)=>a.fee - b.fee);
                out.push({
                    ...base,
                    params: {
                        cardIds: others.slice(0, Math.min(2, others.length)).map((o)=>o.id)
                    }
                });
            }
        }
        out.push({
            type: 'TAKE',
            cardId: c.id,
            mode: 'save'
        });
        return out;
    }
    const kinds = [
        ...new Set(p.assets.map((a)=>a.kind))
    ];
    const total = (k)=>p.assets.filter((a)=>a.kind === k).reduce((t, a)=>t + (k === 'FUND' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fundPrice"])(s) : s.price[k] * (a.split ? 2 : 1)), 0);
    const final = s.round >= __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].rounds;
    const eligible = st === 'smart' ? kinds.filter((k)=>final || val(k) >= 6) : kinds.filter(()=>r() < 0.4);
    if (!eligible.length) return [
        {
            type: 'SELL',
            cardIds: []
        }
    ];
    const k = st === 'smart' ? [
        ...eligible
    ].sort((a, b)=>total(b) - total(a))[0] : pick(eligible);
    return [
        {
            type: 'SELL',
            cardIds: p.assets.filter((a)=>a.kind === k).map((a)=>a.id)
        },
        {
            type: 'SELL',
            cardIds: []
        }
    ];
}
function autoAction(s, pid) {
    if (s.phase === 'BIDDING') return {
        type: 'BID',
        amount: 0
    };
    if (s.phase === 'ACTION') {
        const p = s.players[pid];
        const aff = s.open.filter((c)=>c.fee <= p.coins).sort((a, b)=>a.fee - b.fee);
        if (aff.length) return {
            type: 'TAKE',
            cardId: aff[0].id,
            mode: 'save'
        };
    }
    return {
        type: 'SELL',
        cardIds: []
    };
}
}),
"[project]/lib/rooms.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "addBot",
    ()=>addBot,
    "cleanName",
    ()=>cleanName,
    "createRoom",
    ()=>createRoom,
    "doAction",
    ()=>doAction,
    "getRoom",
    ()=>getRoom,
    "joinRoom",
    ()=>joinRoom,
    "leaveRoom",
    ()=>leaveRoom,
    "lobbyPayload",
    ()=>lobbyPayload,
    "requireHost",
    ()=>requireHost,
    "rooms",
    ()=>rooms,
    "scheduleBots",
    ()=>scheduleBots,
    "skipTurn",
    ()=>skipTurn,
    "startGame",
    ()=>startGame,
    "statePayload",
    ()=>statePayload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engine.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bot$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/bot.ts [app-route] (ecmascript)");
;
;
;
const g = globalThis;
const rooms = g.__stocklabRooms ??= new Map();
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const token = ()=>crypto.randomUUID();
function makeCode() {
    for(;;){
        let c = '';
        for(let i = 0; i < 6; i++)c += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        if (!rooms.has(c)) return c;
    }
}
class ApiError extends Error {
    status;
    constructor(status, message){
        super(message), this.status = status;
    }
}
function err(status, m) {
    throw new ApiError(status, m);
}
function cleanName(raw) {
    const n = String(raw ?? '').trim().slice(0, 16);
    return n || 'Trader';
}
function sweep() {
    const cutoff = Date.now() - 24 * 3600 * 1000;
    for (const [code, r] of rooms)if (r.createdAt < cutoff) {
        if (r.botTimer) clearTimeout(r.botTimer);
        rooms.delete(code);
    }
}
function seatOf(room, tok) {
    const s = room.seats.find((x)=>x.token === tok);
    if (!s) err(403, 'Sesi tidak valid. Gabung ulang ke room.');
    s.lastSeen = Date.now();
    return s;
}
function requireHost(room, tok) {
    const s = seatOf(room, tok);
    if (s.pid !== room.hostPid) err(403, 'Hanya host yang bisa melakukan ini.');
    return s;
}
function getRoom(code) {
    sweep();
    const r = rooms.get(code.toUpperCase());
    if (!r) err(404, 'Room tidak ditemukan. Cek lagi kodenya.');
    return r;
}
function createRoom(name) {
    const room = {
        code: makeCode(),
        hostPid: 0,
        seats: [],
        state: null,
        createdAt: Date.now(),
        botTimer: null,
        gamesPlayed: 0
    };
    const seat = {
        pid: 0,
        name: cleanName(name),
        token: token(),
        bot: false,
        difficulty: 'smart',
        lastSeen: Date.now()
    };
    room.seats.push(seat);
    rooms.set(room.code, room);
    return {
        room,
        seat
    };
}
function addBot(room, difficulty) {
    if (room.state) err(400, 'Game sudah dimulai.');
    if (room.seats.length >= __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].maxPlayers) err(400, 'Room penuh (maks 5 pemain).');
    const pid = room.seats.length;
    const seat = {
        pid,
        name: `Bot ${difficulty === 'smart' ? 'Smart' : 'Random'} ${pid}`,
        token: token(),
        bot: true,
        difficulty,
        lastSeen: Date.now()
    };
    room.seats.push(seat);
    return seat;
}
function joinRoom(code, name) {
    const room = getRoom(code);
    if (room.state) err(400, 'Game di room ini sudah dimulai.');
    if (room.seats.length >= __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].maxPlayers) err(400, 'Room penuh (maks 5 pemain).');
    const seat = {
        pid: room.seats.length,
        name: cleanName(name),
        token: token(),
        bot: false,
        difficulty: 'smart',
        lastSeen: Date.now()
    };
    room.seats.push(seat);
    return {
        room,
        seat
    };
}
function startGame(room, tok) {
    const seat = seatOf(room, tok);
    if (seat.pid !== room.hostPid) err(403, 'Hanya host yang bisa memulai game.');
    if (room.state && room.state.phase !== 'ENDED') err(400, 'Game sedang berjalan.');
    if (room.seats.length < __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG"].minPlayers) err(400, 'Butuh minimal 3 pemain. Tambahkan bot atau undang teman.');
    room.state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["newGame"])(room.seats.length, Date.now() ^ Math.floor(Math.random() * 0x7fffffff) | 0);
    room.gamesPlayed++;
    scheduleBots(room);
}
function doAction(room, tok, action) {
    const seat = seatOf(room, tok);
    if (!room.state) err(400, 'Game belum dimulai.');
    if (seat.bot) err(403, 'Bot tidak dikendalikan manusia.');
    try {
        room.state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyAction"])(room.state, seat.pid, action);
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GameError"]) err(400, e.message);
        throw e;
    }
    scheduleBots(room);
}
function skipTurn(room, tok) {
    const seat = seatOf(room, tok);
    if (seat.pid !== room.hostPid) err(403, 'Hanya host yang bisa melewati giliran.');
    const s = room.state;
    if (!s || s.phase === 'ENDED') err(400, 'Tidak ada giliran aktif.');
    const actor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["currentActors"])(s)[0];
    if (actor === undefined) err(400, 'Tidak ada giliran aktif.');
    room.state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyAction"])(s, actor, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bot$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["autoAction"])(s, actor));
    scheduleBots(room);
}
function leaveRoom(room, tok) {
    const seat = seatOf(room, tok);
    if (room.state && room.state.phase !== 'ENDED') err(400, 'Tidak bisa keluar saat game berjalan.');
    const wasHost = seat.pid === room.hostPid;
    room.seats = room.seats.filter((s)=>s.pid !== seat.pid);
    if (!room.seats.some((s)=>!s.bot)) {
        if (room.botTimer) clearTimeout(room.botTimer);
        rooms.delete(room.code);
        return;
    }
    room.seats.forEach((s, i)=>{
        s.pid = i;
    });
    if (wasHost) room.hostPid = room.seats.find((s)=>!s.bot).pid;
    room.state = null;
}
function scheduleBots(room) {
    if (room.botTimer) return; // timer pending sudah membaca state terbaru saat fired
    const s = room.state;
    if (!s || s.phase === 'ENDED') return;
    const actor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["currentActors"])(s)[0];
    if (actor === undefined) return;
    const seat = room.seats.find((x)=>x.pid === actor);
    if (!seat?.bot) return;
    room.botTimer = setTimeout(()=>{
        room.botTimer = null;
        const st = room.state;
        if (!st || st.phase === 'ENDED') return;
        const pid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["currentActors"])(st)[0];
        const botSeat = room.seats.find((x)=>x.pid === pid && x.bot);
        if (!botSeat) return;
        for (const a of (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bot$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["botCandidates"])(st, pid, botSeat.difficulty)){
            try {
                room.state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyAction"])(st, pid, a);
                break;
            } catch (e) {
                if (!(e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GameError"])) throw e;
            }
        }
        scheduleBots(room);
    }, 850 + Math.random() * 700);
}
function lobbyPayload(room, youPid) {
    return {
        code: room.code,
        started: !!room.state && room.state.phase !== 'ENDED',
        ended: room.state?.phase === 'ENDED',
        you: youPid,
        hostPid: room.hostPid,
        gamesPlayed: room.gamesPlayed,
        seats: room.seats.map((s)=>({
                pid: s.pid,
                name: s.name,
                bot: s.bot,
                difficulty: s.difficulty
            }))
    };
}
function statePayload(room, tok) {
    const seat = seatOf(room, tok);
    scheduleBots(room); // safety net: timer hilang setelah restart server / HMR
    const base = lobbyPayload(room, seat.pid);
    if (!room.state) return {
        ...base,
        view: null
    };
    return {
        ...base,
        view: (0, __TURBOPACK__imported__module__$5b$project$5d2f$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["viewFor"])(room.state, seat.pid)
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0jcujxhsfjgv1._.js.map