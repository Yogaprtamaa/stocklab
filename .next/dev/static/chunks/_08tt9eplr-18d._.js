(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/room/[code]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sound.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SoundToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SoundToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Lobby$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Lobby.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Game$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Game.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function RoomPage() {
    _s();
    const { code: rawCode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const code = (rawCode ?? '').toUpperCase();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [payload, setPayload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fatal, setFatal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [joinName, setJoinName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [joining, setJoining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const prevRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sendingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RoomPage.useCallback[notify]": (msg, kind = 'err')=>{
            setToast({
                msg,
                kind
            });
            if (kind === 'err') __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].error();
        }
    }["RoomPage.useCallback[notify]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomPage.useEffect": ()=>{
            if (!toast) return;
            const t = setTimeout({
                "RoomPage.useEffect.t": ()=>setToast(null)
            }["RoomPage.useEffect.t"], 3600);
            return ({
                "RoomPage.useEffect": ()=>clearTimeout(t)
            })["RoomPage.useEffect"];
        }
    }["RoomPage.useEffect"], [
        toast
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomPage.useEffect": ()=>{
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSession"])(code);
            setSession(s);
            try {
                setJoinName(localStorage.getItem('stocklab:name') ?? '');
            } catch  {}
            setReady(true);
        }
    }["RoomPage.useEffect"], [
        code
    ]);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RoomPage.useCallback[refresh]": async (s)=>{
            try {
                const p = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].state(s.code, s.token);
                setPayload(p);
                setFatal('');
            } catch (e) {
                const msg = e instanceof Error ? e.message : 'Koneksi gagal.';
                if (/tidak ditemukan|tidak valid/i.test(msg)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSession"])(code);
                    setSession(null);
                    setPayload(null);
                    setFatal(msg);
                }
            }
        }
    }["RoomPage.useCallback[refresh]"], [
        code
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomPage.useEffect": ()=>{
            if (!session) return;
            void refresh(session);
            const t = setInterval({
                "RoomPage.useEffect.t": ()=>void refresh(session)
            }["RoomPage.useEffect.t"], 900);
            return ({
                "RoomPage.useEffect": ()=>clearInterval(t)
            })["RoomPage.useEffect"];
        }
    }["RoomPage.useEffect"], [
        session,
        refresh
    ]);
    // sound feedback dari perubahan state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomPage.useEffect": ()=>{
            const v = payload?.view;
            if (!v || !session) return;
            const me = v.players.find({
                "RoomPage.useEffect.me": (p)=>p.id === session.pid
            }["RoomPage.useEffect.me"]);
            const cur = {
                round: v.round,
                phase: v.phase,
                turn: v.turn,
                coins: me?.coins ?? null,
                ended: v.phase === 'ENDED'
            };
            const prev = prevRef.current;
            prevRef.current = cur;
            if (!prev) return;
            if (cur.ended && !prev.ended) {
                if (v.result?.winner === session.pid) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].win();
                else __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].lose();
            } else if (cur.round !== prev.round && !cur.ended) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].reveal();
            else if (cur.turn === session.pid && prev.turn !== session.pid && !cur.ended) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].turn();
            else if (cur.coins !== null && prev.coins !== null && cur.coins > prev.coins && cur.phase === prev.phase) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].coin();
        }
    }["RoomPage.useEffect"], [
        payload,
        session
    ]);
    const send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RoomPage.useCallback[send]": async (action)=>{
            if (!session || sendingRef.current) return;
            sendingRef.current = true;
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].action(session.code, session.token, action);
                await refresh(session);
            } catch (e) {
                notify(e instanceof Error ? e.message : 'Aksi gagal.');
            } finally{
                sendingRef.current = false;
            }
        }
    }["RoomPage.useCallback[send]"], [
        session,
        refresh,
        notify
    ]);
    const hostCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RoomPage.useCallback[hostCall]": async (fn, extra)=>{
            if (!session) return;
            try {
                if (extra) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].bots(session.code, session.token, extra);
                    await refresh(session);
                    return;
                }
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"][fn](session.code, session.token);
                if (fn === 'leave') {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSession"])(code);
                    router.push('/');
                    return;
                }
                if (fn === 'start' || fn === 'restart') __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].start();
                await refresh(session);
            } catch (e) {
                notify(e instanceof Error ? e.message : 'Gagal.');
            }
        }
    }["RoomPage.useCallback[hostCall]"], [
        session,
        refresh,
        notify,
        code,
        router
    ]);
    const joinHere = async ()=>{
        setJoining(true);
        try {
            const r = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].join(code, joinName);
            const s = {
                code,
                token: r.token,
                pid: r.pid,
                name: r.name
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSession"])(s);
            try {
                localStorage.setItem('stocklab:name', joinName);
            } catch  {}
            setSession(s);
            setFatal('');
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].start();
        } catch (e) {
            notify(e instanceof Error ? e.message : 'Gagal bergabung.');
        } finally{
            setJoining(false);
        }
    };
    if (!ready) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "shell topbar-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "brand",
                            href: "/",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLogo"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/app/room/[code]/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 41
                                }, this),
                                "STOCK",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "LAB"
                                }, void 0, false, {
                                    fileName: "[project]/app/room/[code]/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 68
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/room/[code]/page.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        payload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip chip-gold mono",
                            children: payload.code
                        }, void 0, false, {
                            fileName: "[project]/app/room/[code]/page.tsx",
                            lineNumber: 134,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spacer"
                        }, void 0, false, {
                            fileName: "[project]/app/room/[code]/page.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SoundToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SoundToggle"], {}, void 0, false, {
                            fileName: "[project]/app/room/[code]/page.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "icon-btn",
                            title: "Kembali ke beranda",
                            "aria-label": "Kembali ke beranda",
                            onClick: ()=>router.push('/'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconHome"], {}, void 0, false, {
                                fileName: "[project]/app/room/[code]/page.tsx",
                                lineNumber: 137,
                                columnNumber: 132
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/room/[code]/page.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/room/[code]/page.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/room/[code]/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "shell",
                children: !session ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "join-wrap",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-rim",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "felt",
                            style: {
                                padding: 18
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lamp"
                                }, void 0, false, {
                                    fileName: "[project]/app/room/[code]/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "action-panel paper-scope",
                                    style: {
                                        position: 'relative',
                                        zIndex: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "serif",
                                            style: {
                                                fontSize: 23,
                                                fontWeight: 900,
                                                marginBottom: 6
                                            },
                                            children: [
                                                "Gabung ke Room ",
                                                code
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/room/[code]/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--ink-soft)',
                                                fontSize: 14,
                                                marginBottom: 18
                                            },
                                            children: fatal || 'Masukkan namamu untuk duduk di meja ini.'
                                        }, void 0, false, {
                                            fileName: "[project]/app/room/[code]/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "field",
                                            style: {
                                                marginBottom: 14
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "room-join-name",
                                                    children: "Nama kamu"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/room/[code]/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "room-join-name",
                                                    className: "input",
                                                    value: joinName,
                                                    maxLength: 16,
                                                    placeholder: "Trader",
                                                    onChange: (e)=>setJoinName(e.target.value),
                                                    onKeyDown: (e)=>{
                                                        if (e.key === 'Enter') void joinHere();
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/room/[code]/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/room/[code]/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-primary btn-lg btn-block",
                                            disabled: joining,
                                            onClick: joinHere,
                                            children: joining ? 'Bergabung…' : 'Gabung Sekarang'
                                        }, void 0, false, {
                                            fileName: "[project]/app/room/[code]/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/room/[code]/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/room/[code]/page.tsx",
                            lineNumber: 145,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/room/[code]/page.tsx",
                        lineNumber: 144,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/room/[code]/page.tsx",
                    lineNumber: 143,
                    columnNumber: 11
                }, this) : !payload ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "center-msg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "spin",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLogo"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/app/room/[code]/page.tsx",
                                lineNumber: 166,
                                columnNumber: 62
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/room/[code]/page.tsx",
                            lineNumber: 166,
                            columnNumber: 39
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                marginTop: 12
                            },
                            children: "Menghubungkan ke room…"
                        }, void 0, false, {
                            fileName: "[project]/app/room/[code]/page.tsx",
                            lineNumber: 166,
                            columnNumber: 91
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/room/[code]/page.tsx",
                    lineNumber: 166,
                    columnNumber: 11
                }, this) : !payload.started && !payload.ended ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Lobby$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lobby"], {
                    payload: payload,
                    onHost: hostCall
                }, void 0, false, {
                    fileName: "[project]/app/room/[code]/page.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Game$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Game"], {
                    payload: payload,
                    session: session,
                    onAction: send,
                    onHost: hostCall
                }, void 0, false, {
                    fileName: "[project]/app/room/[code]/page.tsx",
                    lineNumber: 170,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/room/[code]/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `toast ${toast.kind}`,
                role: "alert",
                children: toast.msg
            }, void 0, false, {
                fileName: "[project]/app/room/[code]/page.tsx",
                lineNumber: 174,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/room/[code]/page.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(RoomPage, "pFpwOjT1xXLdjBvXJkR9rXARng8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RoomPage;
var _c;
__turbopack_context__.k.register(_c, "RoomPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ActionDock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionDock",
    ()=>ActionDock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ActionDock({ open, onToggle, label, hint, active, urgent, children }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ActionDock.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const sync = {
                "ActionDock.useEffect.sync": ()=>document.documentElement.style.setProperty('--dock-h', `${el.offsetHeight}px`)
            }["ActionDock.useEffect.sync"];
            sync();
            const ro = new ResizeObserver(sync);
            ro.observe(el);
            window.addEventListener('resize', sync);
            return ({
                "ActionDock.useEffect": ()=>{
                    ro.disconnect();
                    window.removeEventListener('resize', sync);
                    document.documentElement.style.removeProperty('--dock-h');
                }
            })["ActionDock.useEffect"];
        }
    }["ActionDock.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `action-dock ${open ? 'open' : 'closed'} ${active ? 'active' : ''} ${urgent ? 'urgent' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "dock-handle",
                onClick: onToggle,
                "aria-expanded": open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "dock-grip",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/components/ActionDock.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "dock-handle-main",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "dock-label",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/ActionDock.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "dock-hint",
                                children: hint
                            }, void 0, false, {
                                fileName: "[project]/components/ActionDock.tsx",
                                lineNumber: 40,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActionDock.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "dock-toggle",
                        children: [
                            open ? 'Sembunyikan meja' : 'Buka panel',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevron"], {
                                size: 15,
                                dir: open ? 'down' : 'up'
                            }, void 0, false, {
                                fileName: "[project]/components/ActionDock.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActionDock.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActionDock.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dock-body",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ActionDock.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ActionDock.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(ActionDock, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = ActionDock;
var _c;
__turbopack_context__.k.register(_c, "ActionDock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ActionPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionPanel",
    ()=>ActionPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/meta.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sound.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ActionPanel({ view, you, seats, sel, setSel, sellKind, sellIds, setSellKind, setSellIds, onAction }) {
    _s();
    const me = view.players.find((p)=>p.id === you);
    const nameOf = (pid)=>seats.find((s)=>s.pid === pid)?.name ?? '—';
    const myCoins = me.coins ?? 0;
    const [bid, setBid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rumor, setRumor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [infoSecs, setInfoSecs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [target, setTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [quick, setQuick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ActionPanel.useEffect": ()=>{
            setMode(null);
            setRumor([]);
            setInfoSecs([]);
            setTarget(null);
            setQuick([]);
        }
    }["ActionPanel.useEffect"], [
        sel
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ActionPanel.useEffect": ()=>{
            setBid({
                "ActionPanel.useEffect": (b)=>Math.min(b, myCoins)
            }["ActionPanel.useEffect"]);
        }
    }["ActionPanel.useEffect"], [
        myCoins
    ]);
    const card = sel !== null ? view.open.find((c)=>c.id === sel) ?? null : null;
    const isMyAction = view.phase === 'ACTION' && view.turn === you;
    const isMySell = view.phase === 'SELL' && view.turn === you;
    const canBid = view.phase === 'BIDDING' && !me.hasBid;
    const valueOf = (c)=>c.kind === 'FUND' ? view.fundPrice : view.price[c.kind] * (c.split ? 2 : 1);
    const sellGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ActionPanel.useMemo[sellGroups]": ()=>{
            const m = new Map();
            for (const a of me.assets)m.set(a.kind, [
                ...m.get(a.kind) ?? [],
                a
            ]);
            return [
                ...m.entries()
            ];
        }
    }["ActionPanel.useMemo[sellGroups]"], [
        me.assets
    ]);
    const submit = (a, sound)=>{
        sound();
        setSel(null);
        void onAction(a);
    };
    // ── BIDDING ──
    if (view.phase === 'BIDDING') {
        if (!canBid) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel action-panel idle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ap-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                                fileName: "[project]/components/ActionPanel.tsx",
                                lineNumber: 63,
                                columnNumber: 37
                            }, this),
                            "Bid terpasang: ",
                            me.bid ?? 0,
                            " koin"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActionPanel.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "ap-desc",
                        style: {
                            marginBottom: 8
                        },
                        children: "Menunggu pemain lain memasang bid…"
                    }, void 0, false, {
                        fileName: "[project]/components/ActionPanel.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prow-meta",
                        children: view.players.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `chip ${p.hasBid ? 'chip-bull' : ''}`,
                                children: [
                                    nameOf(p.id),
                                    " ",
                                    p.hasBid ? '✓' : '…'
                                ]
                            }, p.id, true, {
                                fileName: "[project]/components/ActionPanel.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ActionPanel.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActionPanel.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this);
        }
        const quickVals = [
            0,
            1,
            2,
            3,
            5
        ].filter((v)=>v <= myCoins);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel action-panel paper-scope",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ap-title",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {}, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 76,
                            columnNumber: 35
                        }, this),
                        "Fase Bidding — pasang bid tertutup"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "ap-desc",
                    children: "Bid tertinggi dapat urutan jalan 1. Bid dibayar ke bank. Seri dimenangkan nomor urutan lama yang lebih kecil."
                }, void 0, false, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bid-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "icon-btn",
                            "aria-label": "Kurangi bid",
                            disabled: bid <= 0,
                            onClick: ()=>{
                                setBid(Math.max(0, bid - 1));
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMinus"], {}, void 0, false, {
                                fileName: "[project]/components/ActionPanel.tsx",
                                lineNumber: 79,
                                columnNumber: 146
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "range",
                            className: "bid-slider",
                            min: 0,
                            max: myCoins,
                            value: bid,
                            style: {
                                '--fill': `${myCoins ? bid / myCoins * 100 : 0}%`
                            },
                            onChange: (e)=>setBid(Number(e.target.value)),
                            "aria-label": "Jumlah bid"
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "icon-btn",
                            "aria-label": "Tambah bid",
                            disabled: bid >= myCoins,
                            onClick: ()=>{
                                setBid(Math.min(myCoins, bid + 1));
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlus"], {}, void 0, false, {
                                fileName: "[project]/components/ActionPanel.tsx",
                                lineNumber: 83,
                                columnNumber: 157
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bid-val",
                            children: bid
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ap-actions",
                    style: {
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "quick-bids",
                            children: quickVals.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: bid === v ? 'on' : '',
                                    onClick: ()=>{
                                        setBid(v);
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                    },
                                    children: v
                                }, v, false, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 88,
                                    columnNumber: 35
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spacer"
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip chip-gold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 91,
                                    columnNumber: 44
                                }, this),
                                myCoins,
                                " koin"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-gold",
                            onClick: ()=>submit({
                                    type: 'BID',
                                    amount: bid
                                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].bid),
                            children: [
                                "Pasang Bid ",
                                bid
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ActionPanel.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this);
    }
    // ── ACTION ──
    if (view.phase === 'ACTION') {
        if (!isMyAction) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel action-panel idle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ap-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pulse-dot"
                            }, void 0, false, {
                                fileName: "[project]/components/ActionPanel.tsx",
                                lineNumber: 103,
                                columnNumber: 37
                            }, this),
                            "Giliran ",
                            nameOf(view.turn)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActionPanel.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "ap-desc",
                        style: {
                            marginBottom: 0
                        },
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHASE_META"].ACTION.desc,
                            " ",
                            view.open.length,
                            " kartu terbuka tersisa."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActionPanel.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActionPanel.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this);
        }
        const openStrip = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dock-cardstrip",
            role: "list",
            "aria-label": "Kartu aksi terbuka",
            children: view.open.map((c)=>{
                const on = sel === c.id;
                const afford = c.fee <= myCoins;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    role: "listitem",
                    className: `dock-mini ${on ? 'on' : ''} ${afford ? '' : 'off'}`,
                    style: {
                        '--kc': __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_META"][c.kind].color
                    },
                    disabled: !afford,
                    "aria-pressed": on,
                    title: afford ? `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_META"][c.kind].label} — ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EFFECT_META"][c.effect].label}` : 'Koin tidak cukup untuk fee kartu ini',
                    onClick: ()=>{
                        setSel(on ? null : c.id);
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].slide();
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "dm-band",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                    kind: c.kind,
                                    size: 11
                                }, void 0, false, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 120,
                                    columnNumber: 41
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_META"][c.kind].label
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 120,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "dm-effect",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EFFECT_META"][c.effect].label
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 121,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "dm-fee",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {
                                    size: 10
                                }, void 0, false, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 122,
                                    columnNumber: 40
                                }, this),
                                c.fee === 0 ? 'gratis' : c.fee
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 122,
                            columnNumber: 15
                        }, this)
                    ]
                }, c.id, true, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 114,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/ActionPanel.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
        if (!card) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel action-panel paper-scope",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ap-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconEye"], {}, void 0, false, {
                                fileName: "[project]/components/ActionPanel.tsx",
                                lineNumber: 131,
                                columnNumber: 37
                            }, this),
                            "Giliranmu — pilih kartu terbuka"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActionPanel.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "ap-desc",
                        children: "Ketuk kartu di meja atau di baris ini. Trading fee dibayar saat kartu diambil."
                    }, void 0, false, {
                        fileName: "[project]/components/ActionPanel.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    openStrip
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActionPanel.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this);
        }
        const eff = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EFFECT_META"][card.effect];
        const affordable = card.fee <= myCoins;
        const others = view.open.filter((c)=>c.id !== card.id);
        const quickNeed = Math.min(2, others.length);
        const quickFee = quick.reduce((t, id)=>t + (view.open.find((c)=>c.id === id)?.fee ?? 0), 0);
        const targets = view.players.filter((p)=>p.id !== you).flatMap((p)=>p.assets.filter((a)=>a.kind !== 'FUND').map((a)=>({
                    owner: p.id,
                    card: a
                })));
        let effectReady = false;
        let effectUI = null;
        if (mode === 'effect') {
            if (card.effect === 'QUICK_BUY') {
                effectReady = quick.length === quickNeed && quickFee <= myCoins - card.fee;
                effectUI = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "ap-desc",
                            children: [
                                "Pilih tepat ",
                                quickNeed,
                                " kartu lain (wajib jadi aset). Fee tambahan: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    className: "mono",
                                    style: {
                                        color: 'var(--gold)'
                                    },
                                    children: quickFee
                                }, void 0, false, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 151,
                                    columnNumber: 104
                                }, this),
                                " koin."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sector-picks",
                            children: others.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `spick ${quick.includes(c.id) ? 'on' : ''}`,
                                    style: {
                                        '--kc': __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_META"][c.kind].color
                                    },
                                    onClick: ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                        setQuick((q)=>q.includes(c.id) ? q.filter((x)=>x !== c.id) : q.length < quickNeed ? [
                                                ...q,
                                                c.id
                                            ] : q);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                            kind: c.kind,
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 156,
                                            columnNumber: 19
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_META"][c.kind].label,
                                        " · fee ",
                                        c.fee
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 150,
                    columnNumber: 11
                }, this);
            } else if (card.effect === 'RUMOR') {
                effectReady = rumor.length >= 1 && rumor.length <= 2;
                effectUI = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "ap-desc",
                            children: "Tambah 1–2 perubahan harga (±1). Klik − atau + pada sektor."
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sector-picks",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTORS"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "spick",
                                    style: {
                                        '--kc': __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTOR_META"][s].color,
                                        cursor: 'default'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                            kind: s,
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTOR_META"][s].label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "icon-btn",
                                            style: {
                                                width: 26,
                                                height: 26
                                            },
                                            "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTOR_META"][s].label} turun 1`,
                                            disabled: rumor.length >= 2,
                                            onClick: ()=>{
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                                setRumor((r)=>[
                                                        ...r,
                                                        {
                                                            sector: s,
                                                            delta: -1
                                                        }
                                                    ]);
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconDown"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActionPanel.tsx",
                                                lineNumber: 172,
                                                columnNumber: 103
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "icon-btn",
                                            style: {
                                                width: 26,
                                                height: 26
                                            },
                                            "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTOR_META"][s].label} naik 1`,
                                            disabled: rumor.length >= 2,
                                            onClick: ()=>{
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                                setRumor((r)=>[
                                                        ...r,
                                                        {
                                                            sector: s,
                                                            delta: 1
                                                        }
                                                    ]);
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUp"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActionPanel.tsx",
                                                lineNumber: 174,
                                                columnNumber: 102
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, s, true, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "move-list",
                            children: rumor.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "move-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTOR_META"][m.sector].color,
                                                fontWeight: 600
                                            },
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTOR_META"][m.sector].label
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 181,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "chip",
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            title: "Balik arah",
                                            onClick: ()=>setRumor((r)=>r.map((x, j)=>j === i ? {
                                                            ...x,
                                                            delta: x.delta === 1 ? -1 : 1
                                                        } : x)),
                                            children: [
                                                m.delta === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUp"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActionPanel.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 38
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconDown"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActionPanel.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 61
                                                }, this),
                                                m.delta > 0 ? '+1' : '−1'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "rm",
                                            "aria-label": "Hapus perubahan",
                                            onClick: ()=>setRumor((r)=>r.filter((_, j)=>j !== i)),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconX"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/components/ActionPanel.tsx",
                                                lineNumber: 185,
                                                columnNumber: 132
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 185,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 180,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this);
            } else if (card.effect === 'INFO') {
                effectReady = infoSecs.length === 2;
                effectUI = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "ap-desc",
                            children: "Pilih 2 sektor berbeda untuk diintip kartu ekonomi teratasnya. Bonus +2 koin, dan kamu jual paling akhir."
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sector-picks",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTORS"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `spick ${infoSecs.includes(s) ? 'on' : ''}`,
                                    style: {
                                        '--kc': __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTOR_META"][s].color
                                    },
                                    onClick: ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                        setInfoSecs((q)=>q.includes(s) ? q.filter((x)=>x !== s) : q.length < 2 ? [
                                                ...q,
                                                s
                                            ] : q);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                            kind: s,
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTOR_META"][s].label
                                    ]
                                }, s, true, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this);
            } else if (card.effect === 'ACQUIRE') {
                effectReady = target !== null;
                effectUI = targets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "ap-desc",
                    children: "Tidak ada saham lawan yang bisa diakuisisi. Simpan kartu ini sebagai aset."
                }, void 0, false, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 209,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "ap-desc",
                            children: "Pilih 1 saham lawan. Biaya = floor(harga ÷ 2), dibayar ke pemiliknya. Split token ikut pindah."
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "target-list",
                            children: targets.map(({ owner, card: t })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `target-row ${target === t.id ? 'on' : ''}`,
                                    onClick: ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                        setTarget(t.id);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                            kind: t.kind,
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontWeight: 600,
                                                fontSize: 13
                                            },
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_META"][t.kind].label,
                                                t.split && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "chip chip-violet",
                                                    style: {
                                                        marginLeft: 6
                                                    },
                                                    children: "×2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActionPanel.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 104
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'var(--faint)',
                                                fontSize: 12
                                            },
                                            children: [
                                                "milik ",
                                                nameOf(owner)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 218,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "cost",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActionPanel.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 42
                                                }, this),
                                                Math.floor(view.price[t.kind] / 2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, t.id, true, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 211,
                    columnNumber: 11
                }, this);
            }
        }
        const confirmEffect = ()=>{
            const params = card.effect === 'QUICK_BUY' ? {
                cardIds: quick
            } : card.effect === 'RUMOR' ? {
                moves: rumor
            } : card.effect === 'INFO' ? {
                sectors: infoSecs
            } : {
                targetCardId: target ?? undefined
            };
            submit({
                type: 'TAKE',
                cardId: card.id,
                mode: 'effect',
                params
            }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].take);
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel action-panel paper-scope",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ap-title",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_META"][card.kind].color,
                                display: 'inline-flex',
                                gap: 7,
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                    kind: card.kind,
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 240,
                                    columnNumber: 117
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_META"][card.kind].label
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: eff.label
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip chip-gold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 242,
                                    columnNumber: 44
                                }, this),
                                "fee ",
                                card.fee
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spacer"
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "icon-btn",
                            style: {
                                width: 30,
                                height: 30
                            },
                            "aria-label": "Batal pilih kartu",
                            onClick: ()=>{
                                setSel(null);
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconX"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/ActionPanel.tsx",
                                lineNumber: 244,
                                columnNumber: 150
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "ap-desc",
                    children: eff.desc
                }, void 0, false, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dock-switch-label",
                    children: "Kartu lain di meja"
                }, void 0, false, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this),
                openStrip,
                !affordable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "ap-desc",
                    style: {
                        color: 'var(--bear)'
                    },
                    children: "Koinmu tidak cukup untuk fee kartu ini. Pilih kartu lain."
                }, void 0, false, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 250,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mode-choice",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `mode-opt ${mode === 'save' ? 'on' : ''}`,
                                    onClick: ()=>{
                                        setMode('save');
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "t",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActionPanel.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 37
                                                }, this),
                                                "Simpan sebagai Aset"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "d",
                                            children: [
                                                "Efek mati. Jual nanti saat harga tinggi",
                                                card.kind === 'FUND' ? ` (harga reksa dana ${view.fundPrice})` : ` (harga ${view.price[card.kind]})`,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `mode-opt ${mode === 'effect' ? 'on' : ''}`,
                                    disabled: card.effect === 'NONE',
                                    onClick: ()=>{
                                        setMode('effect');
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "t",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconEye"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ActionPanel.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 37
                                                }, this),
                                                "Gunakan Efek"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "d",
                                            children: card.effect === 'NONE' ? 'Kartu polos tidak punya efek.' : `${eff.label} — kartu dibuang setelah dipakai.`
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, this),
                        mode === 'effect' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 14
                            },
                            children: effectUI
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 263,
                            columnNumber: 35
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ap-actions",
                            children: [
                                mode === 'save' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary",
                                    onClick: ()=>submit({
                                            type: 'TAKE',
                                            cardId: card.id,
                                            mode: 'save'
                                        }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].take),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this),
                                        "Ambil & Simpan",
                                        card.fee > 0 ? ` (−${card.fee} koin)` : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 266,
                                    columnNumber: 17
                                }, this),
                                mode === 'effect' && card.effect !== 'NONE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary",
                                    disabled: !effectReady,
                                    onClick: confirmEffect,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 272,
                                            columnNumber: 19
                                        }, this),
                                        "Konfirmasi ",
                                        eff.label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 271,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-ghost",
                                    onClick: ()=>{
                                        setSel(null);
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                    },
                                    children: "Batal"
                                }, void 0, false, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 252,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ActionPanel.tsx",
            lineNumber: 238,
            columnNumber: 7
        }, this);
    }
    // ── SELL ──
    if (view.phase === 'SELL') {
        if (!isMySell) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel action-panel idle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ap-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pulse-dot"
                            }, void 0, false, {
                                fileName: "[project]/components/ActionPanel.tsx",
                                lineNumber: 288,
                                columnNumber: 37
                            }, this),
                            "Giliran jual ",
                            nameOf(view.turn)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActionPanel.tsx",
                        lineNumber: 288,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "ap-desc",
                        style: {
                            marginBottom: 0
                        },
                        children: [
                            "Antrean jual: ",
                            view.sellQueue.map(nameOf).join(' → '),
                            ". Pengguna Info Bursa menjual paling akhir."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ActionPanel.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ActionPanel.tsx",
                lineNumber: 287,
                columnNumber: 9
            }, this);
        }
        const chosen = me.assets.filter((a)=>sellIds.includes(a.id));
        const total = chosen.reduce((t, c)=>t + valueOf(c), 0);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel action-panel paper-scope",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ap-title",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {}, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 297,
                            columnNumber: 35
                        }, this),
                        "Giliranmu — jual aset"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "ap-desc",
                    children: "Maksimal 1 jenis aset per ronde, jumlah lembar bebas. Harga saham = harga × (Split ? 2 : 1)."
                }, void 0, false, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this),
                sellGroups.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "ap-desc",
                    children: "Kamu tidak punya aset. Lewati untuk lanjut ke fase Ekonomi."
                }, void 0, false, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 300,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sell-groups",
                            children: sellGroups.map(([kind, cards])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `spick ${sellKind === kind ? 'on' : ''}`,
                                    style: {
                                        '--kc': __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_META"][kind].color
                                    },
                                    onClick: ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                        setSellKind(kind);
                                        setSellIds(cards.map((c)=>c.id));
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                            kind: kind,
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 307,
                                            columnNumber: 19
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_META"][kind].label,
                                        " ×",
                                        cards.length,
                                        " · ",
                                        kind === 'FUND' ? view.fundPrice : view.price[kind],
                                        kind !== 'FUND' && cards.some((c)=>c.split) ? ' (×2 split)' : '',
                                        "/lembar"
                                    ]
                                }, kind, true, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 305,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 303,
                            columnNumber: 13
                        }, this),
                        sellKind && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sector-picks",
                            style: {
                                marginBottom: 12
                            },
                            children: me.assets.filter((a)=>a.kind === sellKind).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `spick ${sellIds.includes(c.id) ? 'on' : ''}`,
                                    style: {
                                        '--kc': __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_META"][c.kind].color
                                    },
                                    onClick: ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                        setSellIds((ids)=>ids.includes(c.id) ? ids.filter((x)=>x !== c.id) : [
                                                ...ids,
                                                c.id
                                            ]);
                                    },
                                    children: [
                                        "#",
                                        c.id,
                                        c.split ? ' ×2' : '',
                                        " · ",
                                        valueOf(c),
                                        "k"
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 314,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 312,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sell-summary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        chosen.length,
                                        " kartu dipilih"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "total",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/ActionPanel.tsx",
                                            lineNumber: 323,
                                            columnNumber: 39
                                        }, this),
                                        "+",
                                        total
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 302,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ap-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary",
                            disabled: chosen.length === 0,
                            onClick: ()=>submit({
                                    type: 'SELL',
                                    cardIds: sellIds
                                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].coin),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {}, void 0, false, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this),
                                "Jual ",
                                chosen.length > 0 ? `(+${total} koin)` : ''
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn",
                            onClick: ()=>submit({
                                    type: 'SELL',
                                    cardIds: []
                                }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSkip"], {}, void 0, false, {
                                    fileName: "[project]/components/ActionPanel.tsx",
                                    lineNumber: 331,
                                    columnNumber: 98
                                }, this),
                                "Lewati"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ActionPanel.tsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ActionPanel.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ActionPanel.tsx",
            lineNumber: 296,
            columnNumber: 7
        }, this);
    }
    return null;
}
_s(ActionPanel, "4qTf7bdiOZJIEFgz19v2Ij2LoM0=");
_c = ActionPanel;
var _c;
__turbopack_context__.k.register(_c, "ActionPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Board.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Board",
    ()=>Board
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/meta.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Board({ view }) {
    _s();
    const prevRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [deltas, setDeltas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [flashKey, setFlashKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Board.useEffect": ()=>{
            const cur = {
                ...view.price,
                FUND: view.fundPrice
            };
            const prev = prevRef.current;
            if (prev) {
                const d = {};
                let changed = false;
                for (const k of Object.keys(cur)){
                    d[k] = cur[k] - (prev[k] ?? cur[k]);
                    if (d[k] !== 0) changed = true;
                }
                if (changed) {
                    setDeltas(d);
                    setFlashKey({
                        "Board.useEffect": (x)=>x + 1
                    }["Board.useEffect"]);
                }
            }
            prevRef.current = cur;
        }
    }["Board.useEffect"], [
        view.price,
        view.fundPrice
    ]);
    const cols = [
        view.board[0],
        view.board[1],
        'FUND',
        view.board[2],
        view.board[3]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "playmat",
        children: cols.map((k)=>{
            const isFund = k === 'FUND';
            const color = isFund ? '#b8860b' : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTOR_META"][k].color;
            const price = isFund ? view.fundPrice : view.price[k];
            const d = deltas[k] ?? 0;
            const stack = isFund ? 0 : view.stackCounts[k];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `lane ${isFund ? 'fund' : ''} ${isFund ? '' : stack === 0 ? 'stack-empty' : ''}`,
                style: {
                    '--sc': color
                },
                children: [
                    !isFund && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `lane-econ ${stack === 0 ? 'empty' : ''}`,
                        title: `${stack} kartu ekonomi tersisa di tumpukan`,
                        "aria-label": `${stack} kartu ekonomi tersisa`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "econ-back b1"
                            }, void 0, false, {
                                fileName: "[project]/components/Board.tsx",
                                lineNumber: 42,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "econ-back b2"
                            }, void 0, false, {
                                fileName: "[project]/components/Board.tsx",
                                lineNumber: 43,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "econ-back b3"
                            }, void 0, false, {
                                fileName: "[project]/components/Board.tsx",
                                lineNumber: 44,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Board.tsx",
                        lineNumber: 41,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lane-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                kind: k,
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/components/Board.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "lane-name",
                                children: isFund ? 'Reksa Dana' : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTOR_META"][k].label
                            }, void 0, false, {
                                fileName: "[project]/components/Board.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this),
                            !isFund && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "econ-count",
                                title: `${stack} kartu ekonomi tersisa`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                        kind: k,
                                        size: 8
                                    }, void 0, false, {
                                        fileName: "[project]/components/Board.tsx",
                                        lineNumber: 52,
                                        columnNumber: 19
                                    }, this),
                                    stack
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Board.tsx",
                                lineNumber: 51,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Board.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lane-price",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `n ${d > 0 ? 'flash-up' : d < 0 ? 'flash-down' : ''}`,
                                children: price
                            }, `${flashKey}-${k}`, false, {
                                fileName: "[project]/components/Board.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this),
                            d !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "delta",
                                style: {
                                    color: d > 0 ? 'var(--bull)' : 'var(--bear)'
                                },
                                children: [
                                    d > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUp"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/components/Board.tsx",
                                        lineNumber: 60,
                                        columnNumber: 28
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconDown"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/components/Board.tsx",
                                        lineNumber: 60,
                                        columnNumber: 51
                                    }, this),
                                    Math.abs(d)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Board.tsx",
                                lineNumber: 59,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Board.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lane-track",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "marker",
                            style: {
                                left: `${price * 10}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/Board.tsx",
                            lineNumber: 65,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Board.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lane-scale",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "0"
                            }, void 0, false, {
                                fileName: "[project]/components/Board.tsx",
                                lineNumber: 67,
                                columnNumber: 41
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "5"
                            }, void 0, false, {
                                fileName: "[project]/components/Board.tsx",
                                lineNumber: 67,
                                columnNumber: 55
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "10"
                            }, void 0, false, {
                                fileName: "[project]/components/Board.tsx",
                                lineNumber: 67,
                                columnNumber: 69
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Board.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lane-foot",
                        children: isFund ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "lane-note",
                            children: [
                                "harga = floor((S2 + S3) ÷ 2)",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/Board.tsx",
                                    lineNumber: 70,
                                    columnNumber: 73
                                }, this),
                                "tanpa kartu ekonomi"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Board.tsx",
                            lineNumber: 70,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "lane-note",
                            children: [
                                "kartu ekonomi",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/Board.tsx",
                                    lineNumber: 72,
                                    columnNumber: 58
                                }, this),
                                "di balik sektor"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Board.tsx",
                            lineNumber: 72,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Board.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this)
                ]
            }, k, true, {
                fileName: "[project]/components/Board.tsx",
                lineNumber: 39,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/Board.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Board, "Hz2p0SZXHwYTeDqmWjcH1sJ19NQ=");
_c = Board;
var _c;
__turbopack_context__.k.register(_c, "Board");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Game.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Game",
    ()=>Game
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/meta.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sound.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Board.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ActionPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ActionPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ActionDock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ActionDock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Results$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Results.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function Game({ payload, session, onAction, onHost }) {
    _s();
    const view = payload.view;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const you = session.pid;
    const isHost = payload.you === payload.hostPid;
    const [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sellKind, setSellKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sellIds, setSellIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [coinPop, setCoinPop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dockOpen, setDockOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [ledgerOpen, setLedgerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [econOpen, setEconOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const prevCoins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const econSeen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const me = view.players.find((p)=>p.id === you);
    const nameOf = (pid)=>payload.seats.find((s)=>s.pid === pid)?.name ?? '—';
    const isMyAction = view.phase === 'ACTION' && view.turn === you;
    const isMySell = view.phase === 'SELL' && view.turn === you;
    const isMyBid = view.phase === 'BIDDING' && !me.hasBid;
    const myTurn = isMyAction || isMySell;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            setSel(null);
            const active = view.phase === 'BIDDING' ? !me.hasBid : (view.phase === 'ACTION' || view.phase === 'SELL') && view.turn === you;
            setDockOpen(active);
        // sengaja: reset hanya saat fase/giliran/ronde berganti
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Game.useEffect"], [
        view.phase,
        view.turn,
        view.round
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            if (view.phase === 'BIDDING' && me.hasBid) setDockOpen(false);
        }
    }["Game.useEffect"], [
        me.hasBid,
        view.phase
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            if (sel !== null) setDockOpen(true);
        }
    }["Game.useEffect"], [
        sel
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            setSellKind(null);
            setSellIds([]);
        }
    }["Game.useEffect"], [
        view.round,
        view.phase
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            const c = me.coins;
            if (prevCoins.current !== null && c !== null && c > prevCoins.current) setCoinPop({
                "Game.useEffect": (k)=>k + 1
            }["Game.useEffect"]);
            prevCoins.current = c;
        }
    }["Game.useEffect"], [
        me.coins
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            if (!view.lastEconomy || view.lastEconomyRound === null) return;
            if (econSeen.current === null) {
                econSeen.current = view.lastEconomyRound;
                return;
            }
            if (view.lastEconomyRound > econSeen.current) {
                econSeen.current = view.lastEconomyRound;
                setEconOpen(true);
            }
        }
    }["Game.useEffect"], [
        view.lastEconomy,
        view.lastEconomyRound
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            if (!econOpen) return;
            const t = setTimeout({
                "Game.useEffect.t": ()=>setEconOpen(false)
            }["Game.useEffect.t"], 8000);
            return ({
                "Game.useEffect": ()=>clearTimeout(t)
            })["Game.useEffect"];
        }
    }["Game.useEffect"], [
        econOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            if (sel === null) return;
            const el = document.querySelector(`[data-card-id="${sel}"]`);
            if (!el) return;
            const dockH = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--dock-h')) || 0;
            const top = 66;
            const bottom = window.innerHeight - dockH - 16;
            const r = el.getBoundingClientRect();
            if (r.bottom > bottom || r.top < top) {
                const free = Math.max(120, bottom - top);
                const target = r.top - top - (free - r.height) / 2;
                window.scrollBy({
                    top: target,
                    behavior: 'smooth'
                });
            }
        }
    }["Game.useEffect"], [
        sel
    ]);
    const groupedAssets = (assets)=>{
        const m = new Map();
        for (const a of assets){
            const g = m.get(a.kind) ?? {
                n: 0,
                split: 0
            };
            g.n++;
            if (a.split) g.split++;
            m.set(a.kind, g);
        }
        return [
            ...m.entries()
        ];
    };
    const valueOf = (c)=>c.kind === 'FUND' ? view.fundPrice : view.price[c.kind] * (c.split ? 2 : 1);
    const toggleSell = (c)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].slide();
        if (sellKind && c.kind !== sellKind) {
            setSellKind(c.kind);
            setSellIds([
                c.id
            ]);
        } else {
            setSellKind(c.kind);
            setSellIds((ids)=>ids.includes(c.id) ? ids.filter((x)=>x !== c.id) : [
                    ...ids,
                    c.id
                ]);
        }
    };
    const opponents = [
        ...view.players
    ].filter((p)=>p.id !== you).sort((a, b)=>a.order - b.order);
    const dockLabel = view.phase === 'BIDDING' ? isMyBid ? 'Pasang bid tertutup' : 'Menunggu bid pemain lain' : view.phase === 'ACTION' ? isMyAction ? sel !== null ? 'Atur kartu pilihanmu' : 'Giliranmu — pilih kartu' : `Giliran ${nameOf(view.turn)}` : view.phase === 'SELL' ? isMySell ? sellIds.length > 0 ? `${sellIds.length} aset dipilih` : 'Giliranmu — jual aset' : `Giliran jual ${nameOf(view.turn)}` : 'Permainan selesai';
    const dockHint = view.phase === 'BIDDING' ? isMyBid ? `${me.coins ?? 0} koin di tangan` : `Bid kamu: ${me.bid ?? 0}` : view.phase === 'ACTION' ? `${view.open.length} kartu terbuka` : view.phase === 'SELL' ? `Antrean: ${view.sellQueue.map(nameOf).join(' → ')}` : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `game-wrap ${myTurn ? 'my-turn' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "game-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "round-pills",
                        title: `Ronde ${view.round} dari ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].rounds}`,
                        children: Array.from({
                            length: __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].rounds
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `round-pill ${i + 1 < view.round || view.phase === 'ENDED' ? 'done' : i + 1 === view.round ? 'now' : ''}`,
                                children: i + 1
                            }, i, false, {
                                fileName: "[project]/components/Game.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Game.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `phase-badge phase-${view.phase}`,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHASE_META"][view.phase].label
                    }, void 0, false, {
                        fileName: "[project]/components/Game.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip hide-sm",
                        children: [
                            view.deckCount,
                            " kartu di deck"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Game.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    myTurn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "turn-chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pulse-dot"
                            }, void 0, false, {
                                fileName: "[project]/components/Game.tsx",
                                lineNumber: 137,
                                columnNumber: 48
                            }, this),
                            "Giliranmu"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Game.tsx",
                        lineNumber: 137,
                        columnNumber: 20
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spacer"
                    }, void 0, false, {
                        fileName: "[project]/components/Game.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip chip-gold mobile-coins",
                        title: "Koinmu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/components/Game.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            me.coins ?? '??'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Game.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    isHost && view.phase !== 'ENDED' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-sm hide-sm",
                        title: "Paksa auto-pass untuk pemegang giliran (kalau pemain macet)",
                        onClick: ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                            void onHost('skip');
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSkip"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/components/Game.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            "Lewati Giliran"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Game.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Game.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "game-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "game-main",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `table-rim ${myTurn ? 'is-my-turn' : ''}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "felt felt-table",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lamp"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Game.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "felt-mark",
                                        "aria-hidden": true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "STOCKLAB"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Game.tsx",
                                                lineNumber: 154,
                                                columnNumber: 54
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "PAPAN BURSA"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Game.tsx",
                                                lineNumber: 154,
                                                columnNumber: 75
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Game.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "far-seats",
                                        children: opponents.map((p)=>{
                                            const seat = payload.seats.find((s)=>s.pid === p.id);
                                            const isTurn = view.turn === p.id && view.phase !== 'ENDED';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `prow tent ${isTurn ? 'turn' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tent-top",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "porder",
                                                                title: "Urutan jalan",
                                                                children: p.order
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "pname",
                                                                children: seat?.name ?? `P${p.id}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 25
                                                            }, this),
                                                            seat?.bot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: 'var(--purple-ink)',
                                                                    display: 'inline-flex',
                                                                    flexShrink: 0
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBot"], {
                                                                    size: 13
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Game.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 123
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 39
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "pcoins",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoinStack"], {
                                                                    coins: p.coins
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Game.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 50
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 23
                                                    }, this),
                                                    p.assets.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tent-assets",
                                                        children: groupedAssets(p.assets).map(([kind, g])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "asset-chip",
                                                                style: {
                                                                    '--kc': __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_META"][kind].color
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                                                        kind: kind,
                                                                        size: 10
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Game.tsx",
                                                                        lineNumber: 173,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    g.n,
                                                                    g.split > 0 ? ` (${g.split}×2)` : ''
                                                                ]
                                                            }, kind, true, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tent-meta",
                                                        children: [
                                                            p.debt > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "debt-stack",
                                                                title: `Kartu utang: ${p.debt} (−7 skor tiap kartu)`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pile"], {
                                                                        count: p.debt,
                                                                        red: true,
                                                                        small: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Game.tsx",
                                                                        lineNumber: 181,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "lbl",
                                                                        children: [
                                                                            "utang ",
                                                                            p.debt
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/Game.tsx",
                                                                        lineNumber: 182,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 27
                                                            }, this),
                                                            view.phase === 'BIDDING' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `bid-card ${p.hasBid ? 'done' : ''}`,
                                                                children: p.hasBid ? '✓ sudah bid' : '… belum bid'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 186,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/components/Game.tsx",
                                                lineNumber: 162,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/Game.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Board"], {
                                        view: view
                                    }, void 0, false, {
                                        fileName: "[project]/components/Game.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    view.phase !== 'ENDED' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "spread-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "deck-zone",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pile"], {
                                                        count: view.deckCount,
                                                        label: "deck"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "deck-label",
                                                        children: "Deck aksi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Game.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "spread",
                                                style: {
                                                    position: 'relative'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "spread-label",
                                                        children: [
                                                            "Kartu terbuka · ",
                                                            view.open.length,
                                                            " lembar",
                                                            isMyAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "hide-sm",
                                                                children: " · ketuk untuk memilih"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 21
                                                    }, this),
                                                    view.open.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: 'var(--cream-faint)',
                                                            fontSize: 13,
                                                            fontStyle: 'italic',
                                                            padding: '18px 2px'
                                                        },
                                                        children: "Tidak ada kartu terbuka di meja."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 23
                                                    }, this) : view.open.map((c, i)=>{
                                                        const clickable = isMyAction && c.fee <= (me.coins ?? 0);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhysicalCard"], {
                                                            card: c,
                                                            clickable: clickable,
                                                            selected: sel === c.id,
                                                            dim: isMyAction && !clickable,
                                                            delay: Math.min(i * 0.05, 0.45),
                                                            onClick: ()=>{
                                                                if (clickable) {
                                                                    setSel(c.id === sel ? null : c.id);
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].slide();
                                                                }
                                                            }
                                                        }, c.id, false, {
                                                            fileName: "[project]/components/Game.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Game.tsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Game.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "near-seat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "near-top",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "order-card",
                                                        title: "Nomor urutan jalanmu",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "n",
                                                                children: me.order
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 77
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "l",
                                                                children: "URUTAN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 114
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `prow me near-tent ${myTurn ? 'turn' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "pname",
                                                                children: nameOf(you)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 21
                                                            }, this),
                                                            payload.seats.find((s)=>s.pid === you)?.bot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBot"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 236,
                                                                columnNumber: 71
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoinStack"], {
                                                                coins: me.coins,
                                                                pop: coinPop
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 19
                                                    }, this),
                                                    me.debt > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "debt-stack",
                                                        title: `Kartu utang: ${me.debt} (−7 skor tiap kartu)`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pile"], {
                                                                count: me.debt,
                                                                red: true,
                                                                small: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "lbl",
                                                                children: [
                                                                    "utang ",
                                                                    me.debt
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "spacer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, this),
                                                    isMySell && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "chip chip-gold",
                                                        children: "Pilih kartu di tanganmu untuk dijual"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Game.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hand",
                                                children: me.assets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hand-empty",
                                                    children: "Tanganmu kosong — ambil kartu terbuka sebagai aset untuk dijual nanti."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Game.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 21
                                                }, this) : me.assets.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhysicalCard"], {
                                                        card: c,
                                                        mini: true,
                                                        clickable: isMySell,
                                                        selected: isMySell && sellIds.includes(c.id),
                                                        foot: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "acard-fee",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                                                    kind: c.kind,
                                                                    size: 9
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Game.tsx",
                                                                    lineNumber: 260,
                                                                    columnNumber: 59
                                                                }, this),
                                                                valueOf(c),
                                                                "k",
                                                                c.split ? ' ×2' : ''
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Game.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 31
                                                        }, this),
                                                        onClick: isMySell ? ()=>toggleSell(c) : undefined
                                                    }, c.id, false, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Game.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this),
                                            me.peeks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "slip",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "slip-title",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconEye"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Game.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 50
                                                            }, this),
                                                            "INFO BURSA — kartu ekonomi teratas (privat)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Game.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 21
                                                    }, this),
                                                    me.peeks.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "peek-row",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                                                    kind: p.sector,
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Game.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTOR_META"][p.sector].color,
                                                                        fontWeight: 600
                                                                    },
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTOR_META"][p.sector].label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Game.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "econ",
                                                                    children: [
                                                                        p.card.type,
                                                                        p.card.delta !== undefined ? ` ${p.card.delta > 0 ? '+' : ''}${p.card.delta}` : '',
                                                                        p.card.coins !== undefined ? ` +${p.card.coins}k` : ''
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Game.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, p.sector, true, {
                                                            fileName: "[project]/components/Game.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Game.tsx",
                                                lineNumber: 268,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Game.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Game.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Game.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Game.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: `game-side ${logOpen ? 'open' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "notepad paper-scope",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "notepad-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "panel-title",
                                            children: "Catatan Bursa"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Game.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "icon-btn notepad-close",
                                            "aria-label": "Tutup catatan",
                                            onClick: ()=>{
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                                setLogOpen(false);
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/components/Game.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Game.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Game.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stamps",
                                    title: `Ronde ${view.round} dari ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].rounds}`,
                                    children: Array.from({
                                        length: __TURBOPACK__imported__module__$5b$project$5d2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].rounds
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `stamp ${i + 1 < view.round || view.phase === 'ENDED' ? 'done' : i + 1 === view.round ? 'now' : ''}`,
                                            children: i + 1
                                        }, i, false, {
                                            fileName: "[project]/components/Game.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Game.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "log-box",
                                    ref: logRef,
                                    children: view.log.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `log-line ${l.startsWith('Ronde') ? 'round' : l.startsWith('Ekonomi') ? 'econ' : l === 'Game selesai' ? 'end' : ''}`,
                                            children: l
                                        }, i, false, {
                                            fileName: "[project]/components/Game.tsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Game.tsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Game.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Game.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Game.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            view.phase !== 'ENDED' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ActionDock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionDock"], {
                open: dockOpen,
                onToggle: ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                    setDockOpen((o)=>!o);
                },
                label: dockLabel,
                hint: dockHint,
                active: isMyBid || isMyAction || isMySell || sel !== null,
                urgent: isMyBid || myTurn,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ActionPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionPanel"], {
                    view: view,
                    you: you,
                    seats: payload.seats,
                    sel: sel,
                    setSel: setSel,
                    sellKind: sellKind,
                    sellIds: sellIds,
                    setSellKind: setSellKind,
                    setSellIds: setSellIds,
                    onAction: onAction
                }, void 0, false, {
                    fileName: "[project]/components/Game.tsx",
                    lineNumber: 315,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Game.tsx",
                lineNumber: 307,
                columnNumber: 9
            }, this),
            view.phase === 'ENDED' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Results$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Results"], {
                view: view,
                seats: payload.seats,
                you: you,
                isHost: isHost,
                onRestart: ()=>void onHost('restart'),
                onHome: ()=>router.push('/')
            }, void 0, false, {
                fileName: "[project]/components/Game.tsx",
                lineNumber: 324,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Game.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(Game, "PtJ5k8nlc2L8om2z3f5FKeAsygk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Game;
var _c;
__turbopack_context__.k.register(_c, "Game");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Lobby.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lobby",
    ()=>Lobby
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sound.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Lobby({ payload, onHost }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isHost = payload.you === payload.hostPid;
    const humans = payload.seats.filter((s)=>!s.bot).length;
    const canStart = payload.seats.length >= 3;
    const copy = async ()=>{
        try {
            await navigator.clipboard.writeText(payload.code);
            setCopied(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
            setTimeout(()=>setCopied(false), 1800);
        } catch  {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lobby-wrap",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "table-rim",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "felt",
                style: {
                    padding: '28px 20px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 18
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lamp"
                    }, void 0, false, {
                        fileName: "[project]/components/Lobby.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "code-display",
                        style: {
                            position: 'relative',
                            zIndex: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "code-tent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lbl",
                                        children: "Kode Room — bagikan ke temanmu"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Lobby.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "code-big",
                                        children: payload.code
                                    }, void 0, false, {
                                        fileName: "[project]/components/Lobby.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Lobby.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "code-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-sm",
                                        onClick: copy,
                                        children: [
                                            copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                                                fileName: "[project]/components/Lobby.tsx",
                                                lineNumber: 40,
                                                columnNumber: 27
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCopy"], {}, void 0, false, {
                                                fileName: "[project]/components/Lobby.tsx",
                                                lineNumber: 40,
                                                columnNumber: 43
                                            }, this),
                                            copied ? 'Tersalin' : 'Salin Kode'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Lobby.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    typeof navigator !== 'undefined' && 'share' in navigator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-sm",
                                        onClick: ()=>{
                                            void navigator.share({
                                                title: 'StockLab',
                                                text: `Ayo main StockLab! Kode room: ${payload.code}`,
                                                url: window.location.href
                                            }).catch(()=>{});
                                        },
                                        children: "Bagikan"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Lobby.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Lobby.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Lobby.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel",
                        style: {
                            position: 'relative',
                            zIndex: 2,
                            background: 'rgba(0,0,0,0.22)',
                            border: '1.5px dashed rgba(244,236,217,0.28)',
                            boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel-head",
                                style: {
                                    borderBottomColor: 'rgba(244,236,217,0.18)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "panel-title",
                                        style: {
                                            color: 'var(--cream-muted)'
                                        },
                                        children: "Meja Permainan"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Lobby.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chip",
                                        children: [
                                            payload.seats.length,
                                            "/5 kursi"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Lobby.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "spacer"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Lobby.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    isHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chip chip-gold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCrown"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/components/Lobby.tsx",
                                                lineNumber: 55,
                                                columnNumber: 59
                                            }, this),
                                            "Host"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Lobby.tsx",
                                        lineNumber: 55,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Lobby.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "seat-list",
                                children: [
                                    payload.seats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "seat-row paper-scope",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "seat-ava",
                                                    style: {
                                                        background: s.bot ? 'rgba(91,74,134,0.12)' : 'rgba(30,111,71,0.12)',
                                                        color: s.bot ? '#5b4a86' : '#1e6f47'
                                                    },
                                                    children: s.bot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBot"], {
                                                        size: 19
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Lobby.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 30
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUser"], {
                                                        size: 19
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Lobby.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 54
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Lobby.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "seat-name",
                                                    children: [
                                                        s.name,
                                                        s.pid === payload.you && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: 'var(--ink-faint)',
                                                                fontWeight: 400
                                                            },
                                                            children: " (kamu)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Lobby.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 81
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Lobby.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "seat-tags",
                                                    children: [
                                                        s.pid === payload.hostPid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "chip chip-gold",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCrown"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Lobby.tsx",
                                                                    lineNumber: 65,
                                                                    columnNumber: 84
                                                                }, this),
                                                                "Host"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Lobby.tsx",
                                                            lineNumber: 65,
                                                            columnNumber: 51
                                                        }, this),
                                                        s.bot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "chip chip-violet",
                                                            children: s.difficulty
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Lobby.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 31
                                                        }, this),
                                                        isHost && s.bot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "icon-btn",
                                                            style: {
                                                                width: 28,
                                                                height: 28
                                                            },
                                                            title: "Keluarkan bot",
                                                            "aria-label": `Keluarkan ${s.name}`,
                                                            onClick: ()=>{
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                                                void onHost('leave', {
                                                                    remove: s.pid
                                                                });
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconX"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Lobby.tsx",
                                                                lineNumber: 70,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Lobby.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Lobby.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, s.pid, true, {
                                            fileName: "[project]/components/Lobby.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)),
                                    Array.from({
                                        length: 5 - payload.seats.length
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "seat-row empty-seat",
                                            children: "Kursi kosong — menunggu pemain…"
                                        }, `empty-${i}`, false, {
                                            fileName: "[project]/components/Lobby.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Lobby.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Lobby.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    isHost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tray",
                        style: {
                            position: 'relative',
                            zIndex: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "action-panel paper-scope",
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 14
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mode-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "lbl",
                                            children: "Isi kursi dengan bot"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Lobby.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-sm",
                                                    disabled: payload.seats.length >= 5,
                                                    onClick: ()=>{
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                                        void onHost('leave', {
                                                            add: 'random'
                                                        });
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlus"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Lobby.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Bot Random"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Lobby.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-sm",
                                                    disabled: payload.seats.length >= 5,
                                                    onClick: ()=>{
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
                                                        void onHost('leave', {
                                                            add: 'smart'
                                                        });
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlus"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Lobby.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Bot Smart"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Lobby.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Lobby.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Lobby.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary btn-lg btn-block",
                                    disabled: !canStart,
                                    onClick: ()=>void onHost('start'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlay"], {}, void 0, false, {
                                            fileName: "[project]/components/Lobby.tsx",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, this),
                                        "Mulai Game (",
                                        payload.seats.length,
                                        " pemain)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Lobby.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this),
                                !canStart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 12.5,
                                        color: 'var(--ink-faint)',
                                        textAlign: 'center'
                                    },
                                    children: "Butuh minimal 3 pemain — undang teman atau tambahkan bot."
                                }, void 0, false, {
                                    fileName: "[project]/components/Lobby.tsx",
                                    lineNumber: 99,
                                    columnNumber: 31
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-ghost btn-sm",
                                    onClick: ()=>void onHost('leave'),
                                    children: "Keluar room"
                                }, void 0, false, {
                                    fileName: "[project]/components/Lobby.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Lobby.tsx",
                            lineNumber: 84,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Lobby.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel",
                        style: {
                            position: 'relative',
                            zIndex: 2,
                            padding: 22,
                            textAlign: 'center',
                            background: 'rgba(0,0,0,0.22)',
                            border: '1.5px dashed rgba(244,236,217,0.28)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 9,
                                    color: 'var(--cream-muted)',
                                    fontSize: 14
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pulse-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Lobby.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    "Menunggu host memulai game…"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Lobby.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 12.5,
                                    color: 'var(--cream-faint)',
                                    marginTop: 6
                                },
                                children: [
                                    humans,
                                    " manusia · ",
                                    payload.seats.length - humans,
                                    " bot di meja"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Lobby.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-ghost btn-sm",
                                style: {
                                    marginTop: 12
                                },
                                onClick: ()=>void onHost('leave'),
                                children: "Keluar room"
                            }, void 0, false, {
                                fileName: "[project]/components/Lobby.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Lobby.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Lobby.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Lobby.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Lobby.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Lobby, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = Lobby;
var _c;
__turbopack_context__.k.register(_c, "Lobby");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Results.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Results",
    ()=>Results
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sound.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function Results({ view, seats, you, isHost, onRestart, onHome }) {
    const r = view.result;
    if (!r) return null;
    const nameOf = (pid)=>seats.find((s)=>s.pid === pid)?.name ?? `P${pid}`;
    const won = r.winner === you;
    const debtOf = (pid)=>view.players.find((p)=>p.id === pid)?.debt ?? 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "results-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel results-card paper-scope",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "results-crown",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCrown"], {
                        size: 30
                    }, void 0, false, {
                        fileName: "[project]/components/Results.tsx",
                        lineNumber: 25,
                        columnNumber: 41
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Results.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "results-title",
                    children: won ? 'Kamu menang!' : `${nameOf(r.winner)} menang!`
                }, void 0, false, {
                    fileName: "[project]/components/Results.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "results-sub",
                    children: won ? 'Bursa berpihak padamu. Koin terbanyak setelah likuidasi.' : ' Likuidasi selesai — begini klasemen akhirnya.'
                }, void 0, false, {
                    fileName: "[project]/components/Results.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "score-list",
                    children: r.scores.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `score-row ${i === 0 ? 'winner' : ''}`,
                            style: {
                                animationDelay: `${0.08 * i}s`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "score-rank",
                                    children: i + 1
                                }, void 0, false, {
                                    fileName: "[project]/components/Results.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "score-name",
                                            children: [
                                                nameOf(s.id),
                                                s.id === you ? ' (kamu)' : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Results.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "score-detail",
                                            children: [
                                                "urutan ",
                                                s.order,
                                                " · ",
                                                debtOf(s.id) > 0 ? `utang ${debtOf(s.id)} × −7 = −${debtOf(s.id) * 7}` : 'tanpa utang'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Results.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Results.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "score-total",
                                    children: s.total
                                }, void 0, false, {
                                    fileName: "[project]/components/Results.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.id, true, {
                            fileName: "[project]/components/Results.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Results.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "results-actions",
                    children: [
                        isHost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary btn-lg",
                            onClick: ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].start();
                                onRestart();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlay"], {}, void 0, false, {
                                    fileName: "[project]/components/Results.tsx",
                                    lineNumber: 44,
                                    columnNumber: 102
                                }, this),
                                "Main Lagi"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Results.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pulse-dot"
                                }, void 0, false, {
                                    fileName: "[project]/components/Results.tsx",
                                    lineNumber: 46,
                                    columnNumber: 36
                                }, this),
                                "Menunggu host memulai ulang…"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Results.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-lg",
                            onClick: onHome,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconHome"], {}, void 0, false, {
                                    fileName: "[project]/components/Results.tsx",
                                    lineNumber: 48,
                                    columnNumber: 59
                                }, this),
                                "Beranda"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Results.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Results.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Results.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Results.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = Results;
var _c;
__turbopack_context__.k.register(_c, "Results");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SoundToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SoundToggle",
    ()=>SoundToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sound.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SoundToggle() {
    _s();
    const [muted, setM] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoundToggle.useEffect": ()=>{
            setM((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMuted"])());
        }
    }["SoundToggle.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `icon-btn ${muted ? '' : 'on'}`,
        title: muted ? 'Nyalakan suara' : 'Matikan suara',
        "aria-label": muted ? 'Nyalakan suara' : 'Matikan suara',
        onClick: ()=>{
            const m = !muted;
            setM(m);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMuted"])(m);
            if (!m) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfx"].tap();
        },
        children: muted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMute"], {}, void 0, false, {
            fileName: "[project]/components/SoundToggle.tsx",
            lineNumber: 16,
            columnNumber: 16
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSound"], {}, void 0, false, {
            fileName: "[project]/components/SoundToggle.tsx",
            lineNumber: 16,
            columnNumber: 31
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/SoundToggle.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(SoundToggle, "ziQIZ88GGsNpN/U0jR2d8DEw5Aw=");
_c = SoundToggle;
var _c;
__turbopack_context__.k.register(_c, "SoundToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconBot",
    ()=>IconBot,
    "IconCards",
    ()=>IconCards,
    "IconCheck",
    ()=>IconCheck,
    "IconChevron",
    ()=>IconChevron,
    "IconClock",
    ()=>IconClock,
    "IconCoin",
    ()=>IconCoin,
    "IconCopy",
    ()=>IconCopy,
    "IconCrown",
    ()=>IconCrown,
    "IconDebt",
    ()=>IconDebt,
    "IconDown",
    ()=>IconDown,
    "IconEye",
    ()=>IconEye,
    "IconHome",
    ()=>IconHome,
    "IconLogo",
    ()=>IconLogo,
    "IconMinus",
    ()=>IconMinus,
    "IconMute",
    ()=>IconMute,
    "IconPlay",
    ()=>IconPlay,
    "IconPlus",
    ()=>IconPlus,
    "IconSkip",
    ()=>IconSkip,
    "IconSound",
    ()=>IconSound,
    "IconUp",
    ()=>IconUp,
    "IconUser",
    ()=>IconUser,
    "IconX",
    ()=>IconX,
    "KindIcon",
    ()=>KindIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const svg = (size, className)=>({
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        className,
        'aria-hidden': true
    });
const IconLogo = ({ size = 24, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 20V10M4 6v2M9 20v-6M9 8v4M14 20V5M14 15v3M19 20v-9M19 7v2",
            strokeWidth: "2.2"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = IconLogo;
const IconCoin = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "8.5"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7.5v9M9.5 9.8c0-1.2 1.1-1.8 2.5-1.8s2.5.6 2.5 1.7c0 2.6-5 1.7-5 4.3 0 1.1 1.1 1.8 2.5 1.8s2.5-.6 2.5-1.8",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 17,
                columnNumber: 39
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = IconCoin;
const IconUp = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 19V5M5 12l7-7 7 7"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 21,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = IconUp;
const IconDown = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5v14M19 12l-7 7-7-7"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 24,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = IconDown;
const IconCopy = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "9",
                y: "9",
                width: "11",
                height: "11",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 27,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 27,
                columnNumber: 84
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = IconCopy;
const IconCheck = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 12.5l5 5L20 6.5"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 30,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = IconCheck;
const IconX = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 6l12 12M18 6L6 18"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 33,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = IconX;
const IconPlus = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5v14M5 12h14"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 36,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = IconPlus;
const IconMinus = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 12h14"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 39,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = IconMinus;
const IconPlay = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7 4.5l13 7.5-13 7.5z",
            fill: "currentColor",
            stroke: "none"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 42,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = IconPlay;
const IconSkip = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 4.5l10 7.5-10 7.5z",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 45,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 5v14",
                strokeWidth: "2.2"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 45,
                columnNumber: 102
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = IconSkip;
const IconHome = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 10.5L12 3l9 7.5M5 9.5V21h14V9.5"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 48,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 48,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = IconHome;
const IconSound = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 9v6h4l5 4V5L8 9H4z"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 51,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 51,
                columnNumber: 68
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c12 = IconSound;
const IconMute = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 9v6h4l5 4V5L8 9H4z"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 54,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 9l5 6M22 9l-5 6"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 54,
                columnNumber: 68
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c13 = IconMute;
const IconBot = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4",
                y: "8",
                width: "16",
                height: "11",
                rx: "2.5"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 57,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8V4.5M12 4.5a1.2 1.2 0 1 0-.01 0"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 57,
                columnNumber: 86
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "13",
                r: "1",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 57,
                columnNumber: 135
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "15",
                cy: "13",
                r: "1",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 57,
                columnNumber: 200
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 16.5h5"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 57,
                columnNumber: 266
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 57,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c14 = IconBot;
const IconUser = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "8",
                r: "3.5"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 60,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.5 20c1.2-3.5 4-5 7.5-5s6.3 1.5 7.5 5"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 60,
                columnNumber: 67
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c15 = IconUser;
const IconCrown = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 8l4.5 4L12 5l4.5 7L21 8l-1.5 11h-15z"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 63,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c16 = IconCrown;
const IconEye = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 66,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "2.8"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 66,
                columnNumber: 106
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c17 = IconEye;
const IconDebt = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "6",
                width: "18",
                height: "13",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 69,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 10h18M7 15h4"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 69,
                columnNumber: 84
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 69,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c18 = IconDebt;
const IconClock = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "8.5"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 72,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7.5V12l3 2"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 72,
                columnNumber: 68
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c19 = IconClock;
const IconChevron = ({ size = 16, className, dir = 'down' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        style: dir === 'up' ? {
            transform: 'rotate(180deg)'
        } : undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 9l6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 75,
            columnNumber: 101
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 75,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c20 = IconChevron;
const IconCards = ({ size = 16, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...svg(size, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "6",
                width: "12",
                height: "16",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 78,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 3h9a2 2 0 0 1 2 2v11"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 78,
                columnNumber: 84
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 78,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c21 = IconCards;
const KindIcon = ({ kind, size = 18, className })=>{
    const p = svg(size, className);
    switch(kind){
        case 'KONSUMER':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...p,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 6h2l2.2 10h9.6L20 8H7"
                    }, void 0, false, {
                        fileName: "[project]/components/icons.tsx",
                        lineNumber: 84,
                        columnNumber: 41
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "9.5",
                        cy: "19",
                        r: "1.4"
                    }, void 0, false, {
                        fileName: "[project]/components/icons.tsx",
                        lineNumber: 84,
                        columnNumber: 78
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "16.5",
                        cy: "19",
                        r: "1.4"
                    }, void 0, false, {
                        fileName: "[project]/components/icons.tsx",
                        lineNumber: 84,
                        columnNumber: 113
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 84,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0));
        case 'KEUANGAN':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 9.5L12 4l9 5.5M4.5 9.5V18M9.5 9.5V18M14.5 9.5V18M19.5 9.5V18M3 20h18"
                }, void 0, false, {
                    fileName: "[project]/components/icons.tsx",
                    lineNumber: 85,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 85,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0));
        case 'AGRIKULTUR':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 21V9M12 9c0-3 2-5 5-5 0 3-2 5-5 5zM12 13c0-3-2-5-5-5 0 3 2 5 5 5zM12 17c0-3 2-5 5-5 0 3-2 5-5 5z"
                }, void 0, false, {
                    fileName: "[project]/components/icons.tsx",
                    lineNumber: 86,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 86,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0));
        case 'TAMBANG':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...p,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 4l6 6M12 6l6 6M13 5l-8.5 8.5a2 2 0 0 0 0 2.8l1.2 1.2a2 2 0 0 0 2.8 0L17 9M3 21l4-4"
                }, void 0, false, {
                    fileName: "[project]/components/icons.tsx",
                    lineNumber: 87,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 87,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0));
        case 'FUND':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ...p,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 3v9h9a9 9 0 1 1-9-9z"
                    }, void 0, false, {
                        fileName: "[project]/components/icons.tsx",
                        lineNumber: 88,
                        columnNumber: 37
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15 3.5A9 9 0 0 1 20.5 9H15z"
                    }, void 0, false, {
                        fileName: "[project]/components/icons.tsx",
                        lineNumber: 88,
                        columnNumber: 74
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 88,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0));
    }
};
_c22 = KindIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22;
__turbopack_context__.k.register(_c, "IconLogo");
__turbopack_context__.k.register(_c1, "IconCoin");
__turbopack_context__.k.register(_c2, "IconUp");
__turbopack_context__.k.register(_c3, "IconDown");
__turbopack_context__.k.register(_c4, "IconCopy");
__turbopack_context__.k.register(_c5, "IconCheck");
__turbopack_context__.k.register(_c6, "IconX");
__turbopack_context__.k.register(_c7, "IconPlus");
__turbopack_context__.k.register(_c8, "IconMinus");
__turbopack_context__.k.register(_c9, "IconPlay");
__turbopack_context__.k.register(_c10, "IconSkip");
__turbopack_context__.k.register(_c11, "IconHome");
__turbopack_context__.k.register(_c12, "IconSound");
__turbopack_context__.k.register(_c13, "IconMute");
__turbopack_context__.k.register(_c14, "IconBot");
__turbopack_context__.k.register(_c15, "IconUser");
__turbopack_context__.k.register(_c16, "IconCrown");
__turbopack_context__.k.register(_c17, "IconEye");
__turbopack_context__.k.register(_c18, "IconDebt");
__turbopack_context__.k.register(_c19, "IconClock");
__turbopack_context__.k.register(_c20, "IconChevron");
__turbopack_context__.k.register(_c21, "IconCards");
__turbopack_context__.k.register(_c22, "KindIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardBack",
    ()=>CardBack,
    "CoinStack",
    ()=>CoinStack,
    "PhysicalCard",
    ()=>PhysicalCard,
    "Pile",
    ()=>Pile,
    "tiltOf",
    ()=>tiltOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/meta.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const tiltOf = (id)=>(id * 37 % 7 - 3) * 0.8;
function PhysicalCard({ card, mini, clickable, selected, dim, disabled, delay = 0, foot, onClick }) {
    const meta = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KIND_META"][card.kind];
    const eff = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EFFECT_META"][card.effect];
    const cls = [
        'acard',
        mini ? 'mini' : '',
        clickable ? 'clickable' : '',
        selected ? 'selected' : '',
        dim ? 'dim' : ''
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: cls,
        "data-card-id": card.id,
        style: {
            '--kc': meta.color,
            '--tilt': `${tiltOf(card.id)}deg`,
            animationDelay: `${delay}s`
        },
        disabled: disabled ?? !clickable,
        onClick: onClick,
        "aria-pressed": selected,
        children: [
            !mini && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "acard-corner tl",
                        children: [
                            card.id,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                kind: card.kind,
                                size: 9
                            }, void 0, false, {
                                fileName: "[project]/components/table.tsx",
                                lineNumber: 45,
                                columnNumber: 54
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/table.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "acard-corner br",
                        children: [
                            card.id,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                                kind: card.kind,
                                size: 9
                            }, void 0, false, {
                                fileName: "[project]/components/table.tsx",
                                lineNumber: 46,
                                columnNumber: 54
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/table.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/table.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "acard-band",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                        kind: card.kind,
                        size: mini ? 10 : 14
                    }, void 0, false, {
                        fileName: "[project]/components/table.tsx",
                        lineNumber: 49,
                        columnNumber: 36
                    }, this),
                    meta.label
                ]
            }, void 0, true, {
                fileName: "[project]/components/table.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "acard-art",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KindIcon"], {
                    kind: card.kind,
                    size: mini ? 22 : 46
                }, void 0, false, {
                    fileName: "[project]/components/table.tsx",
                    lineNumber: 50,
                    columnNumber: 35
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/table.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `acard-effect ${card.effect === 'NONE' ? 'none' : ''}`,
                children: eff.label
            }, void 0, false, {
                fileName: "[project]/components/table.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            foot ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `acard-fee ${card.fee === 0 ? 'free' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {
                        size: mini ? 9 : 12
                    }, void 0, false, {
                        fileName: "[project]/components/table.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    card.fee === 0 ? 'gratis' : `fee ${card.fee}`
                ]
            }, void 0, true, {
                fileName: "[project]/components/table.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            card.split && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "acard-split",
                children: "×2"
            }, void 0, false, {
                fileName: "[project]/components/table.tsx",
                lineNumber: 57,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = PhysicalCard;
function CardBack({ red }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `cback ${red ? 'red' : ''}`
    }, void 0, false, {
        fileName: "[project]/components/table.tsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}
_c1 = CardBack;
function Pile({ count, red, small, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `pile ${small ? 'small' : ''}`,
        children: [
            count > 0 ? Array.from({
                length: Math.min(count, 3)
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardBack, {
                    red: red
                }, i, false, {
                    fileName: "[project]/components/table.tsx",
                    lineNumber: 70,
                    columnNumber: 66
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cback",
                style: {
                    opacity: 0.16,
                    boxShadow: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/table.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pile-count",
                children: [
                    count,
                    label ? ` ${label}` : ''
                ]
            }, void 0, true, {
                fileName: "[project]/components/table.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/table.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c2 = Pile;
function CoinStack({ coins, pop = 0 }) {
    const hidden = coins === null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `coins ${hidden ? 'hidden' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "coin-stack",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "disc"
                    }, void 0, false, {
                        fileName: "[project]/components/table.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    !hidden && (coins ?? 0) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "disc"
                    }, void 0, false, {
                        fileName: "[project]/components/table.tsx",
                        lineNumber: 85,
                        columnNumber: 41
                    }, this),
                    !hidden && (coins ?? 0) > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "disc"
                    }, void 0, false, {
                        fileName: "[project]/components/table.tsx",
                        lineNumber: 86,
                        columnNumber: 41
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/table.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `coin-count ${pop > 0 ? 'pop' : ''}`,
                children: hidden ? '??' : coins
            }, pop, false, {
                fileName: "[project]/components/table.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/table.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c3 = CoinStack;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "PhysicalCard");
__turbopack_context__.k.register(_c1, "CardBack");
__turbopack_context__.k.register(_c2, "Pile");
__turbopack_context__.k.register(_c3, "CoinStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "clearSession",
    ()=>clearSession,
    "loadSession",
    ()=>loadSession,
    "saveSession",
    ()=>saveSession
]);
const key = (code)=>`stocklab:session:${code.toUpperCase()}`;
function loadSession(code) {
    try {
        const raw = localStorage.getItem(key(code));
        return raw ? JSON.parse(raw) : null;
    } catch  {
        return null;
    }
}
function saveSession(s) {
    localStorage.setItem(key(s.code), JSON.stringify(s));
}
function clearSession(code) {
    localStorage.removeItem(key(code));
}
async function req(url, init) {
    const res = await fetch(url, {
        ...init,
        headers: {
            'Content-Type': 'application/json',
            ...init?.headers ?? {}
        },
        cache: 'no-store'
    });
    const data = await res.json().catch(()=>({}));
    if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`);
    return data;
}
const api = {
    create: (name)=>req('/api/rooms', {
            method: 'POST',
            body: JSON.stringify({
                name
            })
        }),
    solo: (name, bots, difficulty)=>req('/api/rooms', {
            method: 'POST',
            body: JSON.stringify({
                name,
                solo: {
                    bots,
                    difficulty
                }
            })
        }),
    join: (code, name)=>req(`/api/rooms/${code}/join`, {
            method: 'POST',
            body: JSON.stringify({
                name
            })
        }),
    state: (code, token)=>req(`/api/rooms/${code}/state?token=${encodeURIComponent(token)}`),
    action: (code, token, action)=>req(`/api/rooms/${code}/action`, {
            method: 'POST',
            body: JSON.stringify({
                token,
                action
            })
        }),
    start: (code, token)=>req(`/api/rooms/${code}/start`, {
            method: 'POST',
            body: JSON.stringify({
                token
            })
        }),
    bots: (code, token, body)=>req(`/api/rooms/${code}/bots`, {
            method: 'POST',
            body: JSON.stringify({
                token,
                ...body
            })
        }),
    restart: (code, token)=>req(`/api/rooms/${code}/restart`, {
            method: 'POST',
            body: JSON.stringify({
                token
            })
        }),
    skip: (code, token)=>req(`/api/rooms/${code}/skip`, {
            method: 'POST',
            body: JSON.stringify({
                token
            })
        }),
    leave: (code, token)=>req(`/api/rooms/${code}/leave`, {
            method: 'POST',
            body: JSON.stringify({
                token
            })
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/meta.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ECON_LABEL",
    ()=>ECON_LABEL,
    "EFFECT_META",
    ()=>EFFECT_META,
    "KIND_META",
    ()=>KIND_META,
    "PHASE_META",
    ()=>PHASE_META,
    "SECTOR_FELT",
    ()=>SECTOR_FELT,
    "SECTOR_META",
    ()=>SECTOR_META,
    "econDetail",
    ()=>econDetail,
    "econTone",
    ()=>econTone,
    "sectorColor",
    ()=>sectorColor,
    "sectorLabel",
    ()=>sectorLabel
]);
function econDetail(card) {
    switch(card.type){
        case 'MOVE':
            return card.delta === 0 ? 'harga tetap' : `harga ${card.delta > 0 ? '+' : '−'}${Math.abs(card.delta ?? 0)}`;
        case 'BOOM':
            return 'harga +3 · split sektor';
        case 'CRASH':
            return 'harga −3';
        case 'SPLIT':
            return 'pemegang dapat Split';
        case 'DIVIDEND':
            return `+${card.coins ?? 1} koin / lembar`;
        case 'RIGHT_ISSUE':
            return 'harga −1 · saham baru + Split';
        case 'EXTRA_FEE':
            return 'bayar 1 koin / kartu aset';
        case 'PAJAK':
            return 'bayar koin = nomor urutan';
        case 'BUYBACK':
            return 'harga +1 · wajib jual';
        case 'RESESI':
            return 'harga >5 turun 1';
        case 'STIMULUS':
            return 'harga <5 naik 1';
        case 'RESTRUCTURE':
            return 'semua harga → 5';
    }
}
function econTone(card) {
    switch(card.type){
        case 'BOOM':
        case 'DIVIDEND':
        case 'STIMULUS':
            return 'bull';
        case 'CRASH':
        case 'RESESI':
        case 'PAJAK':
        case 'EXTRA_FEE':
            return 'bear';
        case 'SPLIT':
        case 'RIGHT_ISSUE':
        case 'BUYBACK':
        case 'RESTRUCTURE':
            return 'violet';
        default:
            return 'neutral';
    }
}
const SECTOR_META = {
    KONSUMER: {
        label: 'Konsumer',
        color: '#c65b3f'
    },
    KEUANGAN: {
        label: 'Keuangan',
        color: '#2e6f8e'
    },
    AGRIKULTUR: {
        label: 'Agrikultur',
        color: '#5f8233'
    },
    TAMBANG: {
        label: 'Tambang',
        color: '#7d5ba6'
    }
};
const KIND_META = {
    ...SECTOR_META,
    FUND: {
        label: 'Reksa Dana',
        color: '#a8801f'
    }
};
const SECTOR_FELT = {
    KONSUMER: '#ff9a7a',
    KEUANGAN: '#7cc4e0',
    AGRIKULTUR: '#a8d06a',
    TAMBANG: '#c0a4ec',
    FUND: '#f0c465'
};
const EFFECT_META = {
    NONE: {
        label: 'Saham Polos',
        desc: 'Tanpa efek. Simpan sebagai aset dan jual saat harga tinggi.'
    },
    QUICK_BUY: {
        label: 'Quick Buy',
        desc: 'Ambil 2 kartu terbuka lagi — wajib jadi aset. Fee tetap dibayar.'
    },
    RUMOR: {
        label: 'Rumor',
        desc: 'Geser harga sektor ±1, hingga 2 perubahan. Batas harga 0–10.'
    },
    INFO: {
        label: 'Info Bursa',
        desc: 'Intip kartu ekonomi teratas dari 2 sektor, dapat 2 koin. Kamu jual paling akhir.'
    },
    ACQUIRE: {
        label: 'Akuisisi',
        desc: 'Rebut 1 saham lawan (bukan Reksa Dana) seharga floor(harga ÷ 2). Split ikut pindah.'
    }
};
const ECON_LABEL = {
    MOVE: 'Pergerakan',
    BOOM: 'Boom',
    CRASH: 'Crash',
    SPLIT: 'Split',
    DIVIDEND: 'Dividen',
    RIGHT_ISSUE: 'Right Issue',
    EXTRA_FEE: 'Extra Fee',
    PAJAK: 'Pajak',
    BUYBACK: 'Buyback',
    RESESI: 'Resesi',
    STIMULUS: 'Stimulus',
    RESTRUCTURE: 'Restrukturisasi'
};
const PHASE_META = {
    BIDDING: {
        label: 'Bidding',
        desc: 'Lelang tertutup — bid tertinggi dapat urutan jalan 1.'
    },
    ACTION: {
        label: 'Aksi',
        desc: 'Draft kartu terbuka: simpan sebagai aset atau gunakan efeknya.'
    },
    SELL: {
        label: 'Jual',
        desc: 'Jual maksimal 1 jenis aset, jumlah lembar bebas.'
    },
    ENDED: {
        label: 'Selesai',
        desc: 'Semua aset dilikuidasi. Koin terbanyak menang.'
    }
};
const sectorColor = (k)=>KIND_META[k].color;
const sectorLabel = (k)=>KIND_META[k].label;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sound.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMuted",
    ()=>isMuted,
    "setMuted",
    ()=>setMuted,
    "sfx",
    ()=>sfx
]);
let ctx = null;
let muted = false;
if ("TURBOPACK compile-time truthy", 1) {
    try {
        muted = localStorage.getItem('stocklab:muted') === '1';
    } catch  {}
}
function ac() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!ctx) {
        const AC = window.AudioContext ?? window.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
    }
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
}
function isMuted() {
    return muted;
}
function setMuted(m) {
    muted = m;
    try {
        localStorage.setItem('stocklab:muted', m ? '1' : '0');
    } catch  {}
}
function tone(freq, at, dur, type = 'sine', vol = 0.12) {
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
function paperNoise(at, dur, vol, freq) {
    const c = ac();
    if (!c || muted) return;
    const t0 = c.currentTime + at;
    const len = Math.max(1, Math.floor(c.sampleRate * dur));
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    for(let i = 0; i < len; i++)d[i] = (Math.random() * 2 - 1) * (1 - i / len);
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
const sfx = {
    tap: ()=>tone(620, 0, 0.07, 'triangle', 0.07),
    slide: ()=>paperNoise(0, 0.16, 0.14, 2400),
    bid: ()=>{
        tone(392, 0, 0.09, 'triangle');
        tone(523, 0.08, 0.12, 'triangle');
    },
    take: ()=>{
        paperNoise(0, 0.13, 0.11, 2000);
        tone(330, 0, 0.08, 'sine');
        tone(494, 0.06, 0.1, 'sine');
        tone(659, 0.12, 0.14, 'sine', 0.1);
    },
    coin: ()=>{
        tone(880, 0, 0.08, 'square', 0.05);
        tone(1175, 0.07, 0.09, 'square', 0.05);
        tone(1568, 0.14, 0.16, 'square', 0.05);
    },
    reveal: ()=>{
        tone(196, 0, 0.3, 'sine', 0.12);
        tone(294, 0.05, 0.3, 'sine', 0.1);
        tone(392, 0.1, 0.35, 'sine', 0.08);
    },
    turn: ()=>{
        tone(740, 0, 0.09, 'sine', 0.09);
        tone(988, 0.09, 0.14, 'sine', 0.09);
    },
    error: ()=>tone(150, 0, 0.18, 'sawtooth', 0.06),
    win: ()=>[
            523,
            659,
            784,
            1047,
            1319
        ].forEach((f, i)=>tone(f, i * 0.11, 0.3, 'triangle', 0.11)),
    lose: ()=>[
            392,
            330,
            262
        ].forEach((f, i)=>tone(f, i * 0.14, 0.28, 'sine', 0.1)),
    start: ()=>[
            262,
            392,
            523
        ].forEach((f, i)=>tone(f, i * 0.09, 0.22, 'triangle', 0.1))
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_08tt9eplr-18d._.js.map