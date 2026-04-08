(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/vane-data-web/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4$2b$26a211c426f3f87c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@radix-ui+react-slot@1.2.4+26a211c426f3f87c/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4$2b$26a211c426f3f87c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/finance/stock-search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StockSearch",
    ()=>StockSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const PRESET_STOCKS = [
    {
        symbol: 'sh600519',
        name: '贵州茅台'
    },
    {
        symbol: 'sz000001',
        name: '平安银行'
    },
    {
        symbol: 'sz300750',
        name: '宁德时代'
    },
    {
        symbol: 'sz002594',
        name: '比亚迪'
    },
    {
        symbol: 'sh601318',
        name: '中国平安'
    }
];
const HISTORY_KEY = 'vane-search-history';
const MAX_HISTORY = 8;
function getHistory() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(HISTORY_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch  {
        return [];
    }
}
function saveHistory(item) {
    try {
        let history = getHistory();
        // Remove duplicate
        history = history.filter((h)=>h.symbol !== item.symbol);
        // Add to front
        history.unshift(item);
        // Limit
        history = history.slice(0, MAX_HISTORY);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch  {
    // ignore
    }
}
function clearHistory() {
    try {
        localStorage.removeItem(HISTORY_KEY);
    } catch  {
    // ignore
    }
}
function StockSearch({ currentSymbol, onSymbolChange }) {
    _s();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "StockSearch.useState": ()=>getHistory()
    }["StockSearch.useState"]);
    const [showHistory, setShowHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nameMap, setNameMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StockSearch.useCallback[handleSearch]": ()=>{
            const raw = inputValue.trim();
            if (!raw) return;
            // Auto-detect market prefix
            let symbol = raw.toLowerCase();
            if (!symbol.startsWith('sh') && !symbol.startsWith('sz')) {
                if (symbol.startsWith('6') || symbol.startsWith('5')) {
                    symbol = 'sh' + symbol;
                } else {
                    symbol = 'sz' + symbol;
                }
            }
            // Save to history
            const name = nameMap[symbol] || raw;
            saveHistory({
                symbol,
                name,
                timestamp: Date.now()
            });
            setHistory(getHistory());
            onSymbolChange(symbol);
            setInputValue('');
            setShowHistory(false);
        }
    }["StockSearch.useCallback[handleSearch]"], [
        inputValue,
        onSymbolChange,
        nameMap
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StockSearch.useCallback[handleKeyDown]": (e)=>{
            if (e.key === 'Enter') handleSearch();
        }
    }["StockSearch.useCallback[handleKeyDown]"], [
        handleSearch
    ]);
    const handlePreset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StockSearch.useCallback[handlePreset]": (symbol, name)=>{
            saveHistory({
                symbol,
                name,
                timestamp: Date.now()
            });
            setHistory(getHistory());
            onSymbolChange(symbol);
            setInputValue('');
            setShowHistory(false);
        }
    }["StockSearch.useCallback[handlePreset]"], [
        onSymbolChange
    ]);
    const handleHistoryClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StockSearch.useCallback[handleHistoryClick]": (item)=>{
            onSymbolChange(item.symbol);
            setInputValue('');
            setShowHistory(false);
        }
    }["StockSearch.useCallback[handleHistoryClick]"], [
        onSymbolChange
    ]);
    const handleClearHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StockSearch.useCallback[handleClearHistory]": ()=>{
            clearHistory();
            setHistory([]);
        }
    }["StockSearch.useCallback[handleClearHistory]"], []);
    const activePreset = PRESET_STOCKS.find((s)=>s.symbol === currentSymbol);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "输入股票代码，如 600519 或 sh600519",
                                value: inputValue,
                                onChange: (e)=>setInputValue(e.target.value),
                                onKeyDown: handleKeyDown,
                                onFocus: ()=>setShowHistory(true),
                                onBlur: ()=>setTimeout(()=>setShowHistory(false), 200),
                                className: "pl-9 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-blue-500/50 dark:focus:border-blue-400/50 focus:ring-blue-500/20 h-8"
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            inputValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setInputValue(''),
                                className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "size-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            showHistory && history.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-3 py-1.5 bg-gray-50 dark:bg-gray-750 border-b border-gray-100 dark:border-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "size-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "搜索历史"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleClearHistory,
                                                className: "flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 hover:text-red-500 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "size-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "清除"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    history.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>handleHistoryClick(item),
                                            className: "flex items-center justify-between px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-900 dark:text-gray-100",
                                                            children: item.name || item.symbol
                                                        }, void 0, false, {
                                                            fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-400 dark:text-gray-500 font-mono",
                                                            children: item.symbol
                                                        }, void 0, false, {
                                                            fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "size-3 text-gray-300 dark:text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.symbol, true, {
                                            fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleSearch,
                        className: "bg-blue-500 hover:bg-blue-600 text-white h-8 px-3 text-xs",
                        children: "查询"
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-gray-400 dark:text-gray-500",
                        children: "热门:"
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    PRESET_STOCKS.map((stock)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>handlePreset(stock.symbol, stock.name),
                            className: `h-6 text-[11px] px-2 transition-all ${activePreset?.symbol === stock.symbol ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-500/30 text-blue-600 dark:text-blue-400' : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/30'}`,
                            children: stock.name
                        }, stock.symbol, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/finance/stock-search.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_s(StockSearch, "o6+PwYaYII4QDmCZOhZ7BwPxqKs=");
_c = StockSearch;
var _c;
__turbopack_context__.k.register(_c, "StockSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/ui/skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-accent animate-pulse rounded-md", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/skeleton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/ui/toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toggle",
    ()=>Toggle,
    "toggleVariants",
    ()=>toggleVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$toggle$40$1$2e$1$2e$10$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@radix-ui+react-toggle@1.1.10+243b16c7711ca280/node_modules/@radix-ui/react-toggle/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const toggleVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap", {
    variants: {
        variant: {
            default: "bg-transparent",
            outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
        },
        size: {
            default: "h-9 px-2 min-w-9",
            sm: "h-8 px-1.5 min-w-8",
            lg: "h-10 px-2.5 min-w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Toggle({ className, variant, size, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$toggle$40$1$2e$1$2e$10$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "toggle",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toggleVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/toggle.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = Toggle;
;
var _c;
__turbopack_context__.k.register(_c, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/ui/toggle-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToggleGroup",
    ()=>ToggleGroup,
    "ToggleGroupItem",
    ()=>ToggleGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$toggle$2d$group$40$1$2e$1$2e$11$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@radix-ui+react-toggle-group@1.1.11+243b16c7711ca280/node_modules/@radix-ui/react-toggle-group/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/toggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ToggleGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    size: "default",
    variant: "default"
});
function ToggleGroup({ className, variant, size, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$toggle$2d$group$40$1$2e$1$2e$11$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "toggle-group",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleGroupContext.Provider, {
            value: {
                variant,
                size
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/vane-data-web/src/components/ui/toggle-group.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/toggle-group.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = ToggleGroup;
function ToggleGroupItem({ className, children, variant, size, ...props }) {
    _s();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ToggleGroupContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$toggle$2d$group$40$1$2e$1$2e$11$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "toggle-group-item",
        "data-variant": context.variant || variant,
        "data-size": context.size || size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleVariants"])({
            variant: context.variant || variant,
            size: context.size || size
        }), "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/toggle-group.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(ToggleGroupItem, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c1 = ToggleGroupItem;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ToggleGroup");
__turbopack_context__.k.register(_c1, "ToggleGroupItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-0 rounded-xl border py-0 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 px-0 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-0 [.border-t]:pt-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/finance/kline-chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KLineChart,
    "getDateRange",
    ()=>getDateRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@2.15.4+bf16f8eded5e12ee/node_modules/recharts/es6/chart/ComposedChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@2.15.4+bf16f8eded5e12ee/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@2.15.4+bf16f8eded5e12ee/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@2.15.4+bf16f8eded5e12ee/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@2.15.4+bf16f8eded5e12ee/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@2.15.4+bf16f8eded5e12ee/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@2.15.4+bf16f8eded5e12ee/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@2.15.4+bf16f8eded5e12ee/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Customized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@2.15.4+bf16f8eded5e12ee/node_modules/recharts/es6/component/Customized.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@2.15.4+bf16f8eded5e12ee/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/toggle-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$themes$40$0$2e$4$2e$6$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next-themes@0.4.6+bf16f8eded5e12ee/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function formatVolume(vol) {
    if (vol >= 1e8) return (vol / 1e8).toFixed(2) + '亿';
    if (vol >= 1e4) return (vol / 1e4).toFixed(2) + '万';
    return vol.toLocaleString();
}
function formatAmount(amt) {
    if (amt >= 1e8) return (amt / 1e8).toFixed(2) + '亿';
    if (amt >= 1e4) return (amt / 1e4).toFixed(2) + '万';
    return amt.toLocaleString();
}
// Volume bar shape
function VolumeBar(props) {
    const { x, y, width, height, payload } = props;
    if (!height || height <= 0 || !width || width <= 0) return null;
    const isUp = payload.close >= payload.open;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
        x: x,
        y: y,
        width: width,
        height: height,
        fill: isUp ? 'rgba(239,68,68,0.5)' : 'rgba(34,197,94,0.5)'
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c = VolumeBar;
// MACD histogram bar shape
function MACDBar(props) {
    const { x, y, width, height, payload } = props;
    if (!height || !width) return null;
    const val = payload.macdHist ?? 0;
    const color = val >= 0 ? 'rgba(239,68,68,0.7)' : 'rgba(34,197,94,0.7)';
    // SVG rect cannot have negative height — when MACD is negative,
    // recharts gives y=zeroLine and height=negative. Fix by adjusting y and abs-ing height.
    const rectY = height < 0 ? y + height : y;
    const rectH = Math.abs(height);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
        x: x,
        y: rectY,
        width: width,
        height: rectH,
        fill: color
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_c1 = MACDBar;
// Candlestick + MA line renderer using Customized component
function CandlestickRenderer(props) {
    const { xAxisMap, yAxisMap, bars, showMA: shouldShowMA, showBOLL: shouldShowBOLL, isDark } = props;
    if (!xAxisMap || !yAxisMap || !bars || bars.length === 0) return null;
    const xAxes = Object.values(xAxisMap);
    const yAxes = Object.values(yAxisMap);
    const xAxis = xAxes[0];
    const yAxis = yAxes[0];
    if (!xAxis || !yAxis) return null;
    // Try to get band width - may vary by recharts version
    const bandWidth = xAxis.bandSize || (xAxis.bandwidth ? xAxis.bandwidth() : 8);
    // Build MA line paths using SVG path data
    const maColors = {
        ma5: '#f59e0b',
        ma10: '#3b82f6',
        ma20: '#a855f7',
        ma60: '#22c55e'
    };
    const maPaths = [];
    if (shouldShowMA) {
        for (const maKey of [
            'ma5',
            'ma10',
            'ma20',
            'ma60'
        ]){
            const points = [];
            bars.forEach((d)=>{
                const val = d[maKey];
                if (val == null || isNaN(val)) return;
                const x = xAxis.scale(d.date) + bandWidth / 2;
                const y = yAxis.scale(val);
                if (x != null && y != null) {
                    points.push(`${x},${y}`);
                }
            });
            if (points.length >= 2) {
                maPaths.push({
                    key: maKey,
                    d: `M${points.join('L')}`,
                    color: maColors[maKey]
                });
            }
        }
    }
    // Build Bollinger Bands paths
    const bollPaths = [];
    if (shouldShowBOLL) {
        for (const bKey of [
            'bollUpper',
            'bollMiddle',
            'bollLower'
        ]){
            const points = [];
            bars.forEach((d)=>{
                const val = d[bKey];
                if (val == null || isNaN(val)) return;
                const x = xAxis.scale(d.date) + bandWidth / 2;
                const y = yAxis.scale(val);
                if (x != null && y != null) {
                    points.push(`${x},${y}`);
                }
            });
            if (points.length >= 2) {
                bollPaths.push({
                    key: bKey,
                    d: `M${points.join('L')}`,
                    color: bKey === 'bollMiddle' ? isDark ? '#6b7280' : '#94a3b8' : 'rgba(148,163,184,0.5)',
                    dash: bKey === 'bollMiddle' ? '4 2' : 'none'
                });
            }
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        className: "recharts-candlestick-layer",
        children: [
            maPaths.map(({ key, d, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: d,
                    fill: "none",
                    stroke: color,
                    strokeWidth: 1,
                    className: `ma-line-${key}`
                }, key, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)),
            bollPaths.map(({ key, d, color, dash })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: d,
                    fill: "none",
                    stroke: color,
                    strokeWidth: 0.8,
                    strokeDasharray: dash,
                    className: `boll-line-${key}`
                }, key, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)),
            bars.map((d, i)=>{
                const isUp = d.close >= d.open;
                const color = isUp ? '#ef4444' : '#22c55e';
                // X position: center of the band
                const cx = xAxis.scale(d.date) + bandWidth / 2;
                // Y positions from the price axis scale
                const openY = yAxis.scale(d.open);
                const closeY = yAxis.scale(d.close);
                const highY = yAxis.scale(d.high);
                const lowY = yAxis.scale(d.low);
                if (openY == null || closeY == null || highY == null || lowY == null) return null;
                // Body
                const bodyTop = Math.min(openY, closeY);
                const bodyHeight = Math.max(Math.abs(closeY - openY), 1);
                const bodyWidth = Math.max(bandWidth * 0.7, 2);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: cx,
                            y1: highY,
                            x2: cx,
                            y2: lowY,
                            stroke: color,
                            strokeWidth: 1
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: cx - bodyWidth / 2,
                            y: bodyTop,
                            width: bodyWidth,
                            height: bodyHeight,
                            fill: color,
                            stroke: color,
                            strokeWidth: 0.5
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 268,
                            columnNumber: 13
                        }, this)
                    ]
                }, d.date || i, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                    lineNumber: 257,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_c2 = CandlestickRenderer;
function getDateRange(days) {
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - days);
    const fmt = (d)=>`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    return {
        start: fmt(start),
        end: fmt(end)
    };
}
function KLineChart({ symbol, period, setPeriod, adjust, setAdjust, dayRange, setDayRange, isFullscreen = false }) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showMA, setShowMA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showMACD, setShowMACD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showBOLL, setShowBOLL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRSI, setShowRSI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showKDJ, setShowKDJ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$themes$40$0$2e$4$2e$6$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = resolvedTheme === 'dark';
    // Keyboard shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KLineChart.useEffect": ()=>{
            const handleKeyDown = {
                "KLineChart.useEffect.handleKeyDown": (e)=>{
                    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
                    switch(e.key){
                        case '1':
                            setPeriod('day');
                            break;
                        case '2':
                            setPeriod('week');
                            break;
                        case '3':
                            setPeriod('month');
                            break;
                        case 'm':
                        case 'M':
                            setShowMA({
                                "KLineChart.useEffect.handleKeyDown": (p)=>!p
                            }["KLineChart.useEffect.handleKeyDown"]);
                            break;
                        case 'n':
                        case 'N':
                            setShowMACD({
                                "KLineChart.useEffect.handleKeyDown": (p)=>!p
                            }["KLineChart.useEffect.handleKeyDown"]);
                            break;
                    }
                }
            }["KLineChart.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "KLineChart.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["KLineChart.useEffect"];
        }
    }["KLineChart.useEffect"], [
        setPeriod
    ]);
    const dateRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "KLineChart.useMemo[dateRange]": ()=>getDateRange(dayRange)
    }["KLineChart.useMemo[dateRange]"], [
        dayRange
    ]);
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "KLineChart.useCallback[fetchData]": async ()=>{
            if (!symbol) return;
            setLoading(true);
            setError(null);
            try {
                const params = new URLSearchParams({
                    symbol,
                    period,
                    adjust,
                    count: '500',
                    start_date: dateRange.start,
                    end_date: dateRange.end
                });
                const res = await fetch(`/api/finance/kline?${params}`);
                const json = await res.json();
                if (json.code === 200 && json.data) {
                    setData(json.data);
                } else {
                    setError(json.msg || '获取K线数据失败');
                }
            } catch  {
                setError('网络请求失败，请重试');
            } finally{
                setLoading(false);
            }
        }
    }["KLineChart.useCallback[fetchData]"], [
        symbol,
        period,
        adjust,
        dateRange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KLineChart.useEffect": ()=>{
            fetchData();
        }
    }["KLineChart.useEffect"], [
        fetchData
    ]);
    // Process bars with MA and MACD indicators
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "KLineChart.useMemo[chartData]": ()=>{
            if (!data?.bars) return [];
            const bars = data.bars.map({
                "KLineChart.useMemo[chartData].bars": (bar)=>({
                        ...bar,
                        isUp: bar.close >= bar.open
                    })
            }["KLineChart.useMemo[chartData].bars"]);
            const closes = bars.map({
                "KLineChart.useMemo[chartData].closes": (b)=>b.close
            }["KLineChart.useMemo[chartData].closes"]);
            const n = bars.length;
            if (n === 0) return bars;
            // Compute Moving Averages using running sum (O(n) each)
            // MA5
            if (n >= 5) {
                let sum = 0;
                for(let j = 0; j < 5; j++)sum += closes[j];
                bars[4].ma5 = sum / 5;
                for(let i = 5; i < n; i++){
                    sum += closes[i] - closes[i - 5];
                    bars[i].ma5 = sum / 5;
                }
            }
            // MA10
            if (n >= 10) {
                let sum = 0;
                for(let j = 0; j < 10; j++)sum += closes[j];
                bars[9].ma10 = sum / 10;
                for(let i = 10; i < n; i++){
                    sum += closes[i] - closes[i - 10];
                    bars[i].ma10 = sum / 10;
                }
            }
            // MA20
            if (n >= 20) {
                let sum = 0;
                for(let j = 0; j < 20; j++)sum += closes[j];
                bars[19].ma20 = sum / 20;
                for(let i = 20; i < n; i++){
                    sum += closes[i] - closes[i - 20];
                    bars[i].ma20 = sum / 20;
                }
            }
            // MA60
            if (n >= 60) {
                let sum = 0;
                for(let j = 0; j < 60; j++)sum += closes[j];
                bars[59].ma60 = sum / 60;
                for(let i = 60; i < n; i++){
                    sum += closes[i] - closes[i - 60];
                    bars[i].ma60 = sum / 60;
                }
            }
            // Compute MACD: DIF = EMA12 - EMA26, DEA = EMA9(DIF), Histogram = 2*(DIF-DEA)
            let ema12 = closes[0];
            let ema26 = closes[0];
            let dea = 0;
            for(let i = 0; i < n; i++){
                const c = closes[i];
                if (i === 0) {
                    ema12 = c;
                    ema26 = c;
                } else {
                    ema12 = c * (2 / 13) + ema12 * (11 / 13);
                    ema26 = c * (2 / 27) + ema26 * (25 / 27);
                }
                const dif = ema12 - ema26;
                if (i === 0) {
                    dea = dif;
                } else {
                    dea = dif * (2 / 10) + dea * (8 / 10);
                }
                bars[i].dif = dif;
                bars[i].dea = dea;
                bars[i].macdHist = 2 * (dif - dea);
            }
            // Compute Bollinger Bands (20-period SMA ± 2 standard deviations)
            if (n >= 20) {
                for(let i = 19; i < n; i++){
                    let sum = 0;
                    for(let j = i - 19; j <= i; j++)sum += closes[j];
                    const sma = sum / 20;
                    let sqSum = 0;
                    for(let j = i - 19; j <= i; j++)sqSum += Math.pow(closes[j] - sma, 2);
                    const stdDev = Math.sqrt(sqSum / 20);
                    bars[i].bollMiddle = sma;
                    bars[i].bollUpper = sma + 2 * stdDev;
                    bars[i].bollLower = sma - 2 * stdDev;
                }
            }
            // Compute RSI (Relative Strength Index) - 6, 12, 24 period
            function computeRSI(period) {
                if (n < period + 1) return;
                let avgGain = 0;
                let avgLoss = 0;
                // Initial average gain/loss
                for(let j = 1; j <= period; j++){
                    const change = closes[j] - closes[j - 1];
                    if (change >= 0) avgGain += change;
                    else avgLoss += Math.abs(change);
                }
                avgGain /= period;
                avgLoss /= period;
                bars[period].rsi6 = 0;
                bars[period].rsi12 = 0;
                bars[period].rsi24 = 0;
                // Use smoothed RSI (Wilder's method)
                for(let i = period; i < n; i++){
                    const change = closes[i] - closes[i - 1];
                    const gain = change >= 0 ? change : 0;
                    const loss = change < 0 ? Math.abs(change) : 0;
                    avgGain = (avgGain * (period - 1) + gain) / period;
                    avgLoss = (avgLoss * (period - 1) + loss) / period;
                    const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
                    const rsi = 100 - 100 / (1 + rs);
                    if (period === 6) bars[i].rsi6 = rsi;
                    else if (period === 12) bars[i].rsi12 = rsi;
                    else if (period === 24) bars[i].rsi24 = rsi;
                }
            }
            computeRSI(6);
            computeRSI(12);
            computeRSI(24);
            // Compute KDJ (Stochastic Oscillator) - period N = 9
            const kdjN = 9;
            if (n >= kdjN) {
                let prevK = 50;
                let prevD = 50;
                for(let i = 0; i < n; i++){
                    const startIdx = Math.max(0, i - kdjN + 1);
                    let highN = -Infinity;
                    let lowN = Infinity;
                    for(let j = startIdx; j <= i; j++){
                        if (bars[j].high > highN) highN = bars[j].high;
                        if (bars[j].low < lowN) lowN = bars[j].low;
                    }
                    const rsv = highN === lowN ? 50 : (bars[i].close - lowN) / (highN - lowN) * 100;
                    const k = 2 / 3 * prevK + 1 / 3 * rsv;
                    const d = 2 / 3 * prevD + 1 / 3 * k;
                    const j = 3 * k - 2 * d;
                    bars[i].k = k;
                    bars[i].d = d;
                    bars[i].j = j;
                    prevK = k;
                    prevD = d;
                }
            }
            return bars;
        }
    }["KLineChart.useMemo[chartData]"], [
        data
    ]);
    // Price range for YAxis
    const priceRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "KLineChart.useMemo[priceRange]": ()=>{
            if (chartData.length === 0) return {
                min: 0,
                max: 100
            };
            const highs = chartData.map({
                "KLineChart.useMemo[priceRange].highs": (d)=>d.high
            }["KLineChart.useMemo[priceRange].highs"]);
            const lows = chartData.map({
                "KLineChart.useMemo[priceRange].lows": (d)=>d.low
            }["KLineChart.useMemo[priceRange].lows"]);
            const min = Math.min(...lows);
            const max = Math.max(...highs);
            const padding = (max - min) * 0.1 || 1;
            return {
                min: Math.floor((min - padding) * 100) / 100,
                max: Math.ceil((max + padding) * 100) / 100
            };
        }
    }["KLineChart.useMemo[priceRange]"], [
        chartData
    ]);
    const volRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "KLineChart.useMemo[volRange]": ()=>{
            if (chartData.length === 0) return {
                max: 1
            };
            return {
                max: Math.max(...chartData.map({
                    "KLineChart.useMemo[volRange]": (d)=>d.volume
                }["KLineChart.useMemo[volRange]"])) * 1.2 || 1
            };
        }
    }["KLineChart.useMemo[volRange]"], [
        chartData
    ]);
    // MACD YAxis range
    const macdRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "KLineChart.useMemo[macdRange]": ()=>{
            if (chartData.length === 0) return {
                min: -1,
                max: 1
            };
            let min = 0;
            let max = 0;
            for (const d of chartData){
                if (d.dif != null) {
                    min = Math.min(min, d.dif);
                    max = Math.max(max, d.dif);
                }
                if (d.dea != null) {
                    min = Math.min(min, d.dea);
                    max = Math.max(max, d.dea);
                }
                if (d.macdHist != null) {
                    min = Math.min(min, d.macdHist);
                    max = Math.max(max, d.macdHist);
                }
            }
            const padding = (max - min) * 0.15 || 0.01;
            return {
                min: min - padding,
                max: max + padding
            };
        }
    }["KLineChart.useMemo[macdRange]"], [
        chartData
    ]);
    // Determine visible ticks based on data length
    const tickInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "KLineChart.useMemo[tickInterval]": ()=>{
            const len = chartData.length;
            if (len <= 30) return 4;
            if (len <= 90) return 10;
            if (len <= 180) return 20;
            return 30;
        }
    }["KLineChart.useMemo[tickInterval]"], [
        chartData.length
    ]);
    const xTicks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "KLineChart.useMemo[xTicks]": ()=>{
            return chartData.filter({
                "KLineChart.useMemo[xTicks]": (_, i)=>i % tickInterval === 0 || i === chartData.length - 1
            }["KLineChart.useMemo[xTicks]"]).map({
                "KLineChart.useMemo[xTicks]": (d)=>d.date
            }["KLineChart.useMemo[xTicks]"]);
        }
    }["KLineChart.useMemo[xTicks]"], [
        chartData,
        tickInterval
    ]);
    // Dynamic right margin for MA YAxis alignment
    const rightMargin = showMA ? 55 : 10;
    const lastBar = chartData.length > 0 ? chartData[chartData.length - 1] : null;
    const prevClose = lastBar ? chartData.length > 1 ? chartData[chartData.length - 2].close : lastBar.open : 0;
    // Indicator toggle values for multi-select ToggleGroup
    const indicatorValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "KLineChart.useMemo[indicatorValues]": ()=>{
            const v = [];
            if (showMA) v.push('ma');
            if (showMACD) v.push('macd');
            if (showBOLL) v.push('boll');
            if (showRSI) v.push('rsi');
            if (showKDJ) v.push('kdj');
            return v;
        }
    }["KLineChart.useMemo[indicatorValues]"], [
        showMA,
        showMACD,
        showBOLL,
        showRSI,
        showKDJ
    ]);
    // Dynamic chart heights based on fullscreen
    const mainChartH = isFullscreen ? 500 : 300;
    const volChartH = isFullscreen ? 80 : 60;
    const subChartH = isFullscreen ? 100 : 70;
    // Dark-aware chart colors
    const gridColor = isDark ? '#374151' : '#e5e7eb';
    const tickColor = isDark ? '#6b7280' : '#9ca3af';
    const axisLineColor = isDark ? '#374151' : '#e5e7eb';
    const tooltipBg = isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
    const tooltipTextColor = isDark ? 'text-gray-400' : 'text-gray-500';
    const tooltipValueColor = isDark ? 'text-gray-200' : 'text-gray-700';
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center justify-center ${isFullscreen ? 'h-[500px]' : 'h-[400px]'} text-gray-500 dark:text-gray-400`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "加载失败"
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                lineNumber: 620,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 dark:text-gray-500 mt-1",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                lineNumber: 621,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                        lineNumber: 619,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                    lineNumber: 618,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                lineNumber: 617,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
            lineNumber: 616,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-2 space-y-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-400 dark:text-gray-500",
                                    children: "周期:"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                    lineNumber: 635,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroup"], {
                                    type: "single",
                                    value: period,
                                    onValueChange: (v)=>v && setPeriod(v),
                                    className: "bg-gray-100 dark:bg-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "day",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "日K"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 642,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "week",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "周K"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 648,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "month",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "月K"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 654,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                    lineNumber: 636,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 634,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-400 dark:text-gray-500",
                                    children: "复权:"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                    lineNumber: 663,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroup"], {
                                    type: "single",
                                    value: adjust,
                                    onValueChange: (v)=>v && setAdjust(v),
                                    className: "bg-gray-100 dark:bg-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "qfq",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "前复权"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 670,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "hfq",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "后复权"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 676,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "none",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "不复权"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 682,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                    lineNumber: 664,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 662,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-400 dark:text-gray-500",
                                    children: "范围:"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                    lineNumber: 691,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroup"], {
                                    type: "single",
                                    value: String(dayRange),
                                    onValueChange: (v)=>v && setDayRange(Number(v)),
                                    className: "bg-gray-100 dark:bg-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "30",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "30天"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 698,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "90",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "90天"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 704,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "180",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "半年"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 710,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "365",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "1年"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 716,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                    lineNumber: 692,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 690,
                            columnNumber: 11
                        }, this),
                        data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto text-xs text-gray-400 dark:text-gray-500",
                            children: [
                                data.name,
                                " · ",
                                data.count,
                                "条"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 725,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                    lineNumber: 633,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-400 dark:text-gray-500",
                                    children: "指标:"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                    lineNumber: 734,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroup"], {
                                    type: "multiple",
                                    value: indicatorValues,
                                    onValueChange: (v)=>{
                                        setShowMA(v.includes('ma'));
                                        setShowMACD(v.includes('macd'));
                                        setShowBOLL(v.includes('boll'));
                                        setShowRSI(v.includes('rsi'));
                                        setShowKDJ(v.includes('kdj'));
                                    },
                                    className: "bg-gray-100 dark:bg-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "ma",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "MA"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 747,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "macd",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "MACD"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 753,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "boll",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "BOLL"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 759,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "rsi",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "RSI"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 765,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                            value: "kdj",
                                            className: "data-[state=on]:bg-blue-50 data-[state=on]:dark:bg-blue-900/30 data-[state=on]:text-blue-600 data-[state=on]:dark:text-blue-400 text-xs h-7 px-2.5",
                                            children: "KDJ"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 771,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                    lineNumber: 735,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 733,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-gray-300 dark:text-gray-600 hidden lg:inline ml-2",
                            children: "快捷键: 1/2/3切换周期 M/MA N/MACD"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 779,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                    lineNumber: 732,
                    columnNumber: 9
                }, this),
                (showMA || showBOLL || showRSI || showKDJ) && lastBar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px]",
                    children: [
                        showMA && lastBar.ma5 != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-amber-400 font-medium",
                            children: [
                                "MA5: ",
                                lastBar.ma5.toFixed(2)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 786,
                            columnNumber: 15
                        }, this),
                        showMA && lastBar.ma10 != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-400 font-medium",
                            children: [
                                "MA10: ",
                                lastBar.ma10.toFixed(2)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 789,
                            columnNumber: 15
                        }, this),
                        showMA && lastBar.ma20 != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-purple-400 font-medium",
                            children: [
                                "MA20: ",
                                lastBar.ma20.toFixed(2)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 792,
                            columnNumber: 15
                        }, this),
                        showMA && lastBar.ma60 != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-green-400 font-medium",
                            children: [
                                "MA60: ",
                                lastBar.ma60.toFixed(2)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 795,
                            columnNumber: 15
                        }, this),
                        showBOLL && lastBar.bollUpper != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-400 dark:text-gray-500 font-medium",
                            children: [
                                "BOLL上: ",
                                lastBar.bollUpper.toFixed(2)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 798,
                            columnNumber: 15
                        }, this),
                        showBOLL && lastBar.bollLower != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-400 dark:text-gray-500 font-medium",
                            children: [
                                "BOLL下: ",
                                lastBar.bollLower.toFixed(2)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 801,
                            columnNumber: 15
                        }, this),
                        showRSI && lastBar.rsi6 != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-cyan-500 font-medium",
                            children: [
                                "RSI6: ",
                                lastBar.rsi6.toFixed(1)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 804,
                            columnNumber: 15
                        }, this),
                        showRSI && lastBar.rsi12 != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-orange-400 font-medium",
                            children: [
                                "RSI12: ",
                                lastBar.rsi12.toFixed(1)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 807,
                            columnNumber: 15
                        }, this),
                        showRSI && lastBar.rsi24 != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-emerald-400 font-medium",
                            children: [
                                "RSI24: ",
                                lastBar.rsi24.toFixed(1)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 810,
                            columnNumber: 15
                        }, this),
                        showKDJ && lastBar.k != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-500 font-medium",
                            children: [
                                "K: ",
                                lastBar.k.toFixed(1)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 813,
                            columnNumber: 15
                        }, this),
                        showKDJ && lastBar.d != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-orange-500 font-medium",
                            children: [
                                "D: ",
                                lastBar.d.toFixed(1)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 816,
                            columnNumber: 15
                        }, this),
                        showKDJ && lastBar.j != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-purple-500 font-medium",
                            children: [
                                "J: ",
                                lastBar.j.toFixed(1)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 819,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                    lineNumber: 784,
                    columnNumber: 11
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: `w-full bg-gray-200 dark:bg-gray-700`,
                            style: {
                                height: mainChartH
                            }
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 827,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: `w-full bg-gray-200 dark:bg-gray-700`,
                            style: {
                                height: volChartH
                            }
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 828,
                            columnNumber: 13
                        }, this),
                        (showMACD || showRSI || showKDJ) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: `w-full bg-gray-200 dark:bg-gray-700`,
                            style: {
                                height: subChartH
                            }
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 829,
                            columnNumber: 50
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                    lineNumber: 826,
                    columnNumber: 11
                }, this) : chartData.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: mainChartH,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                data: chartData,
                                margin: {
                                    top: 10,
                                    right: rightMargin,
                                    left: 0,
                                    bottom: 0
                                },
                                // @ts-ignore recharts cursor type mismatch
                                cursor: {
                                    strokeDasharray: '3 3',
                                    stroke: isDark ? '#6b7280' : '#94a3b8',
                                    strokeWidth: 0.5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                        strokeDasharray: "3 3",
                                        stroke: gridColor,
                                        strokeOpacity: isDark ? 0.3 : 0.5
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 841,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "date",
                                        type: "category",
                                        ticks: xTicks,
                                        tick: {
                                            fill: tickColor,
                                            fontSize: 10
                                        },
                                        axisLine: {
                                            stroke: axisLineColor
                                        },
                                        tickLine: {
                                            stroke: axisLineColor
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 842,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        yAxisId: "price",
                                        domain: [
                                            priceRange.min,
                                            priceRange.max
                                        ],
                                        tick: {
                                            fill: tickColor,
                                            fontSize: 10
                                        },
                                        axisLine: {
                                            stroke: axisLineColor
                                        },
                                        tickLine: {
                                            stroke: axisLineColor
                                        },
                                        tickFormatter: (v)=>v.toFixed(2),
                                        width: 50
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 850,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: ({ active, payload })=>{
                                            if (!active || !payload || payload.length === 0) return null;
                                            const d = payload[0].payload;
                                            const isUp = d.close >= d.open;
                                            const color = isUp ? 'text-red-500' : 'text-green-500';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${tooltipBg} border rounded-lg p-3 shadow-lg text-xs min-w-[180px]`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${tooltipTextColor} mb-2 font-medium`,
                                                        children: d.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 868,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-x-4 gap-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipTextColor,
                                                                        children: "开盘"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 871,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: color,
                                                                        children: d.open.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 872,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 870,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipTextColor,
                                                                        children: "收盘"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 875,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `font-semibold ${color}`,
                                                                        children: d.close.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 876,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 874,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipTextColor,
                                                                        children: "最高"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 879,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: d.high.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 880,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 878,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipTextColor,
                                                                        children: "最低"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 883,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-green-500",
                                                                        children: d.low.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 884,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 882,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipTextColor,
                                                                        children: "成交量"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 887,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipValueColor,
                                                                        children: formatVolume(d.volume)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 888,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 886,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipTextColor,
                                                                        children: "成交额"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 891,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipValueColor,
                                                                        children: formatAmount(d.amount)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 892,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 890,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 869,
                                                        columnNumber: 25
                                                    }, this),
                                                    showMA && (d.ma5 != null || d.ma10 != null) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `border-t border-gray-100 dark:border-gray-700 mt-1.5 pt-1 grid grid-cols-2 gap-x-3 gap-y-0.5`,
                                                        children: [
                                                            d.ma5 != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-amber-500",
                                                                        children: "MA5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 899,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-amber-500",
                                                                        children: d.ma5.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 900,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 898,
                                                                columnNumber: 31
                                                            }, this),
                                                            d.ma10 != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-500",
                                                                        children: "MA10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 905,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-500",
                                                                        children: d.ma10.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 906,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 904,
                                                                columnNumber: 31
                                                            }, this),
                                                            d.ma20 != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-purple-500",
                                                                        children: "MA20"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 911,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-purple-500",
                                                                        children: d.ma20.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 912,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 910,
                                                                columnNumber: 31
                                                            }, this),
                                                            d.ma60 != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-green-500",
                                                                        children: "MA60"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 917,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-green-500",
                                                                        children: d.ma60.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 918,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 916,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 896,
                                                        columnNumber: 27
                                                    }, this),
                                                    showBOLL && d.bollUpper != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `border-t border-gray-100 dark:border-gray-700 mt-1.5 pt-1 grid grid-cols-2 gap-x-3 gap-y-0.5`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipTextColor,
                                                                        children: "BOLL上"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 926,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipValueColor,
                                                                        children: d.bollUpper.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 927,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 925,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipTextColor,
                                                                        children: "BOLL中"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 930,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipValueColor,
                                                                        children: d.bollMiddle.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 931,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 929,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipTextColor,
                                                                        children: "BOLL下"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 934,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: tooltipValueColor,
                                                                        children: d.bollLower.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 935,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 933,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 27
                                                    }, this),
                                                    showMACD && (d.dif != null || d.dea != null) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `border-t border-gray-100 dark:border-gray-700 mt-1.5 pt-1 grid grid-cols-3 gap-x-3 gap-y-0.5`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-amber-500",
                                                                        children: "DIF"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 942,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-amber-500",
                                                                        children: (d.dif ?? 0).toFixed(3)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 943,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 941,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-500",
                                                                        children: "DEA"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 946,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-500",
                                                                        children: (d.dea ?? 0).toFixed(3)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 947,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 945,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: d.macdHist != null && d.macdHist >= 0 ? 'text-red-500' : 'text-green-500',
                                                                        children: "MACD"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 950,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: d.macdHist != null && d.macdHist >= 0 ? 'text-red-500' : 'text-green-500',
                                                                        children: (d.macdHist ?? 0).toFixed(3)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 951,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 949,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 940,
                                                        columnNumber: 27
                                                    }, this),
                                                    showRSI && d.rsi6 != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `border-t border-gray-100 dark:border-gray-700 mt-1.5 pt-1 grid grid-cols-3 gap-x-3 gap-y-0.5`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-cyan-500",
                                                                        children: "RSI6"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 958,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-cyan-500",
                                                                        children: d.rsi6.toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 959,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 957,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-orange-500",
                                                                        children: "RSI12"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 962,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-orange-500",
                                                                        children: (d.rsi12 ?? 0).toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 963,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 961,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-emerald-500",
                                                                        children: "RSI24"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 966,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-emerald-500",
                                                                        children: (d.rsi24 ?? 0).toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 967,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 965,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 956,
                                                        columnNumber: 27
                                                    }, this),
                                                    showKDJ && d.k != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `border-t border-gray-100 dark:border-gray-700 mt-1.5 pt-1 grid grid-cols-3 gap-x-3 gap-y-0.5`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-500",
                                                                        children: "K"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 974,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-500",
                                                                        children: d.k.toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 975,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 973,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-orange-500",
                                                                        children: "D"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 978,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-orange-500",
                                                                        children: (d.d ?? 0).toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 979,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 977,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-purple-500",
                                                                        children: "J"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 982,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-purple-500",
                                                                        children: (d.j ?? 0).toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 983,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 981,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 972,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                lineNumber: 867,
                                                columnNumber: 23
                                            }, this);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 859,
                                        columnNumber: 17
                                    }, this),
                                    prevClose > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                        yAxisId: "price",
                                        y: prevClose,
                                        stroke: "#3b82f6",
                                        strokeDasharray: "4 4",
                                        strokeOpacity: 0.5
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 992,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Customized$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Customized"], {
                                        component: (cp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CandlestickRenderer, {
                                                ...cp,
                                                bars: chartData,
                                                showMA: showMA,
                                                showBOLL: showBOLL,
                                                isDark: isDark
                                            }, void 0, false, {
                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                lineNumber: 1002,
                                                columnNumber: 63
                                            }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1001,
                                        columnNumber: 17
                                    }, this),
                                    showMA && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        yAxisId: "ma",
                                        domain: [
                                            priceRange.min,
                                            priceRange.max
                                        ],
                                        orientation: "right",
                                        tick: {
                                            fill: tickColor,
                                            fontSize: 10
                                        },
                                        axisLine: {
                                            stroke: axisLineColor
                                        },
                                        tickLine: {
                                            stroke: axisLineColor
                                        },
                                        tickFormatter: (v)=>v.toFixed(2),
                                        width: 45
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1006,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        yAxisId: "price",
                                        dataKey: "close",
                                        fill: "transparent",
                                        stroke: "none",
                                        isAnimationActive: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1018,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                lineNumber: 835,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 834,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: volChartH,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                data: chartData,
                                margin: {
                                    top: 0,
                                    right: rightMargin,
                                    left: 0,
                                    bottom: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "date",
                                        type: "category",
                                        ticks: xTicks,
                                        tick: {
                                            fill: tickColor,
                                            fontSize: 10
                                        },
                                        axisLine: {
                                            stroke: axisLineColor
                                        },
                                        tickLine: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1034,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        domain: [
                                            0,
                                            volRange.max
                                        ],
                                        tick: false,
                                        axisLine: false,
                                        tickLine: false,
                                        width: 50
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1042,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: ({ active, payload })=>{
                                            if (!active || !payload || payload.length === 0) return null;
                                            const d = payload[0].payload;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${tooltipBg} border rounded-lg p-2 shadow-lg text-xs`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: tooltipTextColor,
                                                        children: d.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 1055,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: tooltipValueColor,
                                                        children: [
                                                            "成交量: ",
                                                            formatVolume(d.volume)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 1056,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                lineNumber: 1054,
                                                columnNumber: 23
                                            }, this);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1049,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "volume",
                                        shape: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VolumeBar, {}, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 1063,
                                            columnNumber: 26
                                        }, this),
                                        isAnimationActive: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1061,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                lineNumber: 1030,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 1029,
                            columnNumber: 13
                        }, this),
                        showMACD && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: subChartH,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                data: chartData,
                                margin: {
                                    top: 0,
                                    right: rightMargin,
                                    left: 0,
                                    bottom: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "date",
                                        type: "category",
                                        ticks: xTicks,
                                        tick: {
                                            fill: tickColor,
                                            fontSize: 10
                                        },
                                        axisLine: {
                                            stroke: axisLineColor
                                        },
                                        tickLine: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1076,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        domain: [
                                            macdRange.min,
                                            macdRange.max
                                        ],
                                        tick: {
                                            fill: tickColor,
                                            fontSize: 9
                                        },
                                        axisLine: false,
                                        tickLine: false,
                                        tickFormatter: (v)=>v.toFixed(2),
                                        width: 50
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1084,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: ({ active, payload })=>{
                                            if (!active || !payload || payload.length === 0) return null;
                                            const d = payload[0].payload;
                                            const dif = d.dif ?? 0;
                                            const dea = d.dea ?? 0;
                                            const hist = d.macdHist ?? 0;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${tooltipBg} border rounded-lg p-2 shadow-lg text-xs min-w-[140px]`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${tooltipTextColor} mb-1`,
                                                        children: d.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 1101,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-amber-500",
                                                                        children: "DIF"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1104,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-amber-500",
                                                                        children: dif.toFixed(3)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1105,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 1103,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-500",
                                                                        children: "DEA"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1108,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-500",
                                                                        children: dea.toFixed(3)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1109,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 1107,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: hist >= 0 ? 'text-red-500' : 'text-green-500',
                                                                        children: "MACD"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1112,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: hist >= 0 ? 'text-red-500' : 'text-green-500',
                                                                        children: hist.toFixed(3)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1113,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 1111,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 1102,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                lineNumber: 1100,
                                                columnNumber: 25
                                            }, this);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1092,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "macdHist",
                                        shape: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MACDBar, {}, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                            lineNumber: 1121,
                                            columnNumber: 21
                                        }, this),
                                        isAnimationActive: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1120,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        type: "monotone",
                                        dataKey: "dif",
                                        stroke: "#f59e0b",
                                        dot: false,
                                        strokeWidth: 1,
                                        isAnimationActive: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1123,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        type: "monotone",
                                        dataKey: "dea",
                                        stroke: "#3b82f6",
                                        dot: false,
                                        strokeWidth: 1,
                                        isAnimationActive: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1131,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                lineNumber: 1072,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 1071,
                            columnNumber: 15
                        }, this),
                        showRSI && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: subChartH,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                data: chartData,
                                margin: {
                                    top: 0,
                                    right: rightMargin,
                                    left: 0,
                                    bottom: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "date",
                                        type: "category",
                                        ticks: xTicks,
                                        tick: {
                                            fill: tickColor,
                                            fontSize: 10
                                        },
                                        axisLine: {
                                            stroke: axisLineColor
                                        },
                                        tickLine: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1150,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        domain: [
                                            0,
                                            100
                                        ],
                                        tick: {
                                            fill: tickColor,
                                            fontSize: 9
                                        },
                                        axisLine: false,
                                        tickLine: false,
                                        tickFormatter: (v)=>v.toFixed(0),
                                        width: 50
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1158,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: ({ active, payload })=>{
                                            if (!active || !payload || payload.length === 0) return null;
                                            const d = payload[0].payload;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${tooltipBg} border rounded-lg p-2 shadow-lg text-xs min-w-[140px]`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${tooltipTextColor} mb-1`,
                                                        children: d.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 1172,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-cyan-500",
                                                                        children: "RSI6"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1175,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-cyan-500",
                                                                        children: (d.rsi6 ?? 0).toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1176,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 1174,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-orange-500",
                                                                        children: "RSI12"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1179,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-orange-500",
                                                                        children: (d.rsi12 ?? 0).toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1180,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 1178,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-emerald-500",
                                                                        children: "RSI24"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1183,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-emerald-500",
                                                                        children: (d.rsi24 ?? 0).toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1184,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 1182,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 1173,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                lineNumber: 1171,
                                                columnNumber: 25
                                            }, this);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1166,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                        y: 80,
                                        stroke: "#ef4444",
                                        strokeDasharray: "2 2",
                                        strokeOpacity: 0.4
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1191,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                        y: 20,
                                        stroke: "#22c55e",
                                        strokeDasharray: "2 2",
                                        strokeOpacity: 0.4
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1192,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                        y: 50,
                                        stroke: gridColor,
                                        strokeDasharray: "2 2",
                                        strokeOpacity: 0.3
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1193,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        type: "monotone",
                                        dataKey: "rsi6",
                                        stroke: "#06b6d4",
                                        dot: false,
                                        strokeWidth: 1,
                                        isAnimationActive: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1194,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        type: "monotone",
                                        dataKey: "rsi12",
                                        stroke: "#f97316",
                                        dot: false,
                                        strokeWidth: 1,
                                        isAnimationActive: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1202,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        type: "monotone",
                                        dataKey: "rsi24",
                                        stroke: "#10b981",
                                        dot: false,
                                        strokeWidth: 1,
                                        isAnimationActive: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1210,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                lineNumber: 1146,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 1145,
                            columnNumber: 15
                        }, this),
                        showKDJ && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: subChartH,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                data: chartData,
                                margin: {
                                    top: 0,
                                    right: rightMargin,
                                    left: 0,
                                    bottom: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "date",
                                        type: "category",
                                        ticks: xTicks,
                                        tick: {
                                            fill: tickColor,
                                            fontSize: 10
                                        },
                                        axisLine: {
                                            stroke: axisLineColor
                                        },
                                        tickLine: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1229,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        domain: [
                                            0,
                                            100
                                        ],
                                        tick: {
                                            fill: tickColor,
                                            fontSize: 9
                                        },
                                        axisLine: false,
                                        tickLine: false,
                                        tickFormatter: (v)=>v.toFixed(0),
                                        width: 50
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1237,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        content: ({ active, payload })=>{
                                            if (!active || !payload || payload.length === 0) return null;
                                            const d = payload[0].payload;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${tooltipBg} border rounded-lg p-2 shadow-lg text-xs min-w-[140px]`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${tooltipTextColor} mb-1`,
                                                        children: d.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 1251,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-500",
                                                                        children: "K"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1254,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-500",
                                                                        children: (d.k ?? 0).toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1255,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 1253,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-orange-500",
                                                                        children: "D"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1258,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-orange-500",
                                                                        children: (d.d ?? 0).toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1259,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 1257,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-purple-500",
                                                                        children: "J"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1262,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-purple-500",
                                                                        children: (d.j ?? 0).toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                        lineNumber: 1263,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                                lineNumber: 1261,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                        lineNumber: 1252,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                                lineNumber: 1250,
                                                columnNumber: 25
                                            }, this);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1245,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                        y: 80,
                                        stroke: "#ef4444",
                                        strokeDasharray: "2 2",
                                        strokeOpacity: 0.4
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1270,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                        y: 20,
                                        stroke: "#22c55e",
                                        strokeDasharray: "2 2",
                                        strokeOpacity: 0.4
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1271,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                        y: 50,
                                        stroke: gridColor,
                                        strokeDasharray: "2 2",
                                        strokeOpacity: 0.3
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1272,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        type: "monotone",
                                        dataKey: "k",
                                        stroke: "#3b82f6",
                                        dot: false,
                                        strokeWidth: 1,
                                        isAnimationActive: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1273,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        type: "monotone",
                                        dataKey: "d",
                                        stroke: "#f97316",
                                        dot: false,
                                        strokeWidth: 1,
                                        isAnimationActive: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1281,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$2$2e$15$2e$4$2b$bf16f8eded5e12ee$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        type: "monotone",
                                        dataKey: "j",
                                        stroke: "#a855f7",
                                        dot: false,
                                        strokeWidth: 1,
                                        isAnimationActive: false
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                        lineNumber: 1289,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                                lineNumber: 1225,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                            lineNumber: 1224,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                    lineNumber: 832,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center justify-center ${isFullscreen ? 'h-[500px]' : 'h-[400px]'} text-gray-400 dark:text-gray-500`,
                    children: "暂无K线数据"
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
                    lineNumber: 1302,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
            lineNumber: 631,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/kline-chart.tsx",
        lineNumber: 630,
        columnNumber: 5
    }, this);
}
_s(KLineChart, "39VjVWfJ7OFy23acTsnlcdPp8Tc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$themes$40$0$2e$4$2e$6$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c3 = KLineChart;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "VolumeBar");
__turbopack_context__.k.register(_c1, "MACDBar");
__turbopack_context__.k.register(_c2, "CandlestickRenderer");
__turbopack_context__.k.register(_c3, "KLineChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/lib/watchlist-storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared localStorage utility for watchlist persistence.
 * Storage key: "vane-watchlist"
 * Format: { symbol: string; name: string }[]
 */ __turbopack_context__.s([
    "DEFAULT_WATCHLIST",
    ()=>DEFAULT_WATCHLIST,
    "STORAGE_KEY",
    ()=>STORAGE_KEY,
    "addToWatchlistStorage",
    ()=>addToWatchlistStorage,
    "getWatchlist",
    ()=>getWatchlist,
    "isInWatchlist",
    ()=>isInWatchlist,
    "moveDown",
    ()=>moveDown,
    "moveUp",
    ()=>moveUp,
    "removeFromWatchlistStorage",
    ()=>removeFromWatchlistStorage,
    "saveWatchlist",
    ()=>saveWatchlist
]);
const STORAGE_KEY = 'vane-watchlist';
const DEFAULT_WATCHLIST = [
    {
        symbol: 'sh600519',
        name: '贵州茅台'
    },
    {
        symbol: 'sz000001',
        name: '平安银行'
    },
    {
        symbol: 'sz300750',
        name: '宁德时代'
    },
    {
        symbol: 'sh601318',
        name: '中国平安'
    },
    {
        symbol: 'sz002594',
        name: '比亚迪'
    }
];
function isWatchlistItemArray(arr) {
    return arr.every((item)=>item !== null && typeof item === 'object' && typeof item.symbol === 'string' && typeof item.name === 'string');
}
/** Migrate legacy string[] format to new {symbol, name}[] format */ function migrateLegacyFormat(stored) {
    if (Array.isArray(stored) && stored.every((s)=>typeof s === 'string')) {
        // Legacy format: string[]
        const defaultMap = new Map(DEFAULT_WATCHLIST.map((d)=>[
                d.symbol,
                d.name
            ]));
        return stored.map((s)=>({
                symbol: s,
                name: defaultMap.get(s) || s
            }));
    }
    return [];
}
function getWatchlist() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) {
                if (isWatchlistItemArray(parsed)) return parsed;
                // Try migration from legacy format
                const migrated = migrateLegacyFormat(parsed);
                if (migrated.length > 0) {
                    saveWatchlist(migrated);
                    return migrated;
                }
            }
        }
    } catch  {
    // Corrupted data, fall through to default
    }
    // First time: save defaults to localStorage
    saveWatchlist(DEFAULT_WATCHLIST);
    return DEFAULT_WATCHLIST;
}
function saveWatchlist(items) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
function isInWatchlist(symbol) {
    return getWatchlist().some((item)=>item.symbol === symbol);
}
function addToWatchlistStorage(symbol, name) {
    const list = getWatchlist();
    if (list.some((item)=>item.symbol === symbol)) return false;
    list.push({
        symbol,
        name
    });
    saveWatchlist(list);
    return true;
}
function removeFromWatchlistStorage(symbol) {
    const list = getWatchlist();
    const filtered = list.filter((item)=>item.symbol !== symbol);
    if (filtered.length === list.length) return false;
    saveWatchlist(filtered);
    return true;
}
function moveUp(items, index) {
    if (index <= 0 || index >= items.length) return items;
    const result = [
        ...items
    ];
    [result[index - 1], result[index]] = [
        result[index],
        result[index - 1]
    ];
    return result;
}
function moveDown(items, index) {
    if (index < 0 || index >= items.length - 1) return items;
    const result = [
        ...items
    ];
    [result[index], result[index + 1]] = [
        result[index + 1],
        result[index]
    ];
    return result;
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/finance/quote-cards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuoteCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$socket$2e$io$2d$client$40$4$2e$8$2e$3$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/socket.io-client@4.8.3/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$watchlist$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/lib/watchlist-storage.ts [app-client] (ecmascript)");
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
function formatVolume(vol) {
    if (vol >= 1e8) return (vol / 1e8).toFixed(2) + '亿';
    if (vol >= 1e4) return (vol / 1e4).toFixed(2) + '万';
    return vol.toLocaleString();
}
function MetricCard({ label, value, suffix, colorClass }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-400 dark:text-gray-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-sm font-medium tabular-nums ${colorClass || 'text-gray-900 dark:text-gray-100'}`,
                children: [
                    value,
                    suffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-400 dark:text-gray-500 ml-0.5",
                        children: suffix
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                        lineNumber: 74,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = MetricCard;
function QuoteCardsSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-10 w-32 bg-gray-200 dark:bg-gray-700"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-8 w-24 bg-gray-200 dark:bg-gray-700"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-4 gap-4",
                    children: Array.from({
                        length: 12
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"
                        }, i, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c1 = QuoteCardsSkeleton;
function QuoteCards({ symbol, onDataChange }) {
    _s();
    const [quote, setQuote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [wsConnected, setWsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [flash, setFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inWatchlist, setInWatchlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flashTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastPriceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    // ── Fetch initial quote via REST API ──
    const fetchQuote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuoteCards.useCallback[fetchQuote]": async ()=>{
            if (!symbol) return;
            try {
                const res = await fetch(`/api/finance/quote?symbols=${symbol}`);
                const json = await res.json();
                if (json.code === 200 && json.data?.quotes?.length > 0) {
                    const q = json.data.quotes[0];
                    setQuote(q);
                    lastPriceRef.current = q.price;
                    onDataChange?.(q);
                }
            } catch  {
            // Silently fail for quote refresh
            } finally{
                setLoading(false);
            }
        }
    }["QuoteCards.useCallback[fetchQuote]"], [
        symbol,
        onDataChange
    ]);
    // ── Check watchlist status on symbol change ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuoteCards.useEffect": ()=>{
            setInWatchlist((0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$watchlist$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInWatchlist"])(symbol));
        }
    }["QuoteCards.useEffect"], [
        symbol
    ]);
    // ── Initial fetch on symbol change ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuoteCards.useEffect": ()=>{
            setLoading(true);
            setQuote(null);
            lastPriceRef.current = null;
            fetchQuote();
        }
    }["QuoteCards.useEffect"], [
        fetchQuote
    ]);
    // ── WebSocket connection ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuoteCards.useEffect": ()=>{
            if (!symbol) return;
            // Connect to the ws-finance mini-service via gateway proxy
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$socket$2e$io$2d$client$40$4$2e$8$2e$3$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])('/?XTransformPort=3003', {
                transports: [
                    'websocket',
                    'polling'
                ],
                forceNew: true,
                reconnection: true,
                reconnectionAttempts: 10,
                reconnectionDelay: 2000,
                reconnectionDelayMax: 10000,
                timeout: 10000
            });
            socketRef.current = socket;
            socket.on('connect', {
                "QuoteCards.useEffect": ()=>{
                    setWsConnected(true);
                    // Subscribe to the current symbol
                    socket.emit('subscribe', symbol);
                }
            }["QuoteCards.useEffect"]);
            socket.on('disconnect', {
                "QuoteCards.useEffect": ()=>{
                    setWsConnected(false);
                }
            }["QuoteCards.useEffect"]);
            socket.on('connect_error', {
                "QuoteCards.useEffect": ()=>{
                    setWsConnected(false);
                }
            }["QuoteCards.useEffect"]);
            socket.on('quote', {
                "QuoteCards.useEffect": (msg)=>{
                    if (msg.type !== 'quote' || !msg.data) return;
                    const wsQuote = msg.data;
                    // Only process updates for the current symbol
                    if (wsQuote.symbol !== symbol) return;
                    // Trigger flash animation based on price direction
                    const prevPrice = lastPriceRef.current;
                    if (prevPrice !== null && wsQuote.price !== prevPrice) {
                        const direction = wsQuote.price > prevPrice ? 'up' : 'down';
                        setFlash(direction);
                        // Clear previous timeout
                        if (flashTimeoutRef.current) {
                            clearTimeout(flashTimeoutRef.current);
                        }
                        // Remove flash after 800ms
                        flashTimeoutRef.current = setTimeout({
                            "QuoteCards.useEffect": ()=>{
                                setFlash(null);
                                flashTimeoutRef.current = null;
                            }
                        }["QuoteCards.useEffect"], 800);
                    }
                    lastPriceRef.current = wsQuote.price;
                    // Merge WebSocket data into existing quote state
                    setQuote({
                        "QuoteCards.useEffect": (prev)=>{
                            if (!prev) return prev;
                            const updated = {
                                ...prev,
                                price: wsQuote.price,
                                change_percent: wsQuote.change_percent,
                                change_amount: wsQuote.change_amount,
                                volume: wsQuote.volume,
                                timestamp: wsQuote.timestamp
                            };
                            onDataChange?.(updated);
                            return updated;
                        }
                    }["QuoteCards.useEffect"]);
                }
            }["QuoteCards.useEffect"]);
            // Re-subscribe on symbol change
            const handleSymbolChange = {
                "QuoteCards.useEffect.handleSymbolChange": ()=>{
                    if (socket.connected) {
                        socket.emit('unsubscribe', symbol);
                        socket.emit('subscribe', symbol);
                    }
                }
            }["QuoteCards.useEffect.handleSymbolChange"];
            // Clean up on unmount
            return ({
                "QuoteCards.useEffect": ()=>{
                    if (socket.connected) {
                        socket.emit('unsubscribe', symbol);
                    }
                    socket.disconnect();
                    socketRef.current = null;
                    if (flashTimeoutRef.current) {
                        clearTimeout(flashTimeoutRef.current);
                    }
                }
            })["QuoteCards.useEffect"];
        }
    }["QuoteCards.useEffect"], [
        symbol,
        onDataChange
    ]);
    // ── Add to watchlist handler (must be declared before early returns for rules-of-hooks) ──
    const handleAddToWatchlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuoteCards.useCallback[handleAddToWatchlist]": ()=>{
            if (!quote) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$watchlist$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInWatchlist"])(symbol)) {
                toast({
                    title: '已在自选中',
                    description: `${quote.name} 已在自选列表中`
                });
                return;
            }
            const added = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$watchlist$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToWatchlistStorage"])(quote.symbol, quote.name);
            if (added) {
                setInWatchlist(true);
                toast({
                    title: '已添加到自选',
                    description: `${quote.name} 已加入自选列表`
                });
            }
        }
    }["QuoteCards.useCallback[handleAddToWatchlist]"], [
        quote,
        symbol,
        __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$watchlist$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInWatchlist"],
        toast
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuoteCardsSkeleton, {}, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
        lineNumber: 250,
        columnNumber: 23
    }, this);
    if (!quote) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-gray-400 dark:text-gray-500 text-sm py-3",
                    children: "暂无行情数据"
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                    lineNumber: 256,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                lineNumber: 255,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
            lineNumber: 254,
            columnNumber: 7
        }, this);
    }
    const isUp = quote.change_percent >= 0;
    const priceColor = isUp ? 'text-red-500' : 'text-green-500';
    const ArrowIcon = isUp ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"];
    // Flash animation classes (A-share convention: red=up, green=down)
    const flashTextClass = flash === 'up' ? 'text-red-600 dark:text-red-400' : flash === 'down' ? 'text-green-600 dark:text-green-400' : priceColor;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-2 space-y-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                                        children: quote.name
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 dark:text-gray-500 font-mono",
                                        children: quote.symbol
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            handleAddToWatchlist();
                                        },
                                        className: `inline-flex items-center gap-0.5 text-xs px-1.5 py-0.5 rounded transition-colors duration-150 ${inWatchlist ? 'text-blue-500 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-500/10'}`,
                                        title: inWatchlist ? '已在自选中' : '添加到自选',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: `size-3 ${inWatchlist ? 'fill-blue-500 dark:fill-blue-400' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: inWatchlist ? '已自选' : '＋自选'
                                            }, void 0, false, {
                                                fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-baseline gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xl font-bold tabular-nums transition-all duration-300 ${flash ? flashTextClass : priceColor}`,
                                    children: quote.price.toFixed(2)
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center gap-1 transition-colors duration-300 ${flash ? flashTextClass : priceColor}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                            lineNumber: 307,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium tabular-nums",
                                            children: [
                                                isUp ? '+' : '',
                                                quote.change_amount.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm font-medium tabular-nums px-1.5 py-0.5 rounded transition-colors duration-300 ${flash === 'up' ? 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400' : flash === 'down' ? 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400' : isUp ? 'bg-red-50 dark:bg-red-500/10' : 'bg-green-50 dark:bg-green-500/10'}`,
                                            children: [
                                                isUp ? '+' : '',
                                                quote.change_percent.toFixed(2),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    title: wsConnected ? 'WebSocket 已连接' : 'WebSocket 未连接',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-1.5 h-1.5 rounded-full transition-colors duration-300 ${wsConnected ? 'bg-emerald-500 live-pulse' : 'bg-gray-300 dark:bg-gray-600'}`
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-gray-400 dark:text-gray-500 hidden sm:inline",
                                            children: "WS"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                            className: "size-3"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                            lineNumber: 342,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "实时行情"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this),
                flash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `h-0.5 rounded-full transition-opacity duration-300 ${flash === 'up' ? 'bg-gradient-to-r from-transparent via-red-400 to-transparent' : 'bg-gradient-to-r from-transparent via-green-400 to-transparent'}`
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                    lineNumber: 350,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-3 gap-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                            label: "今开",
                            value: quote.open.toFixed(2)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                            label: "最高",
                            value: quote.high.toFixed(2),
                            colorClass: "text-red-400"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                            label: "最低",
                            value: quote.low.toFixed(2),
                            colorClass: "text-green-400"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 363,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                            label: "昨收",
                            value: quote.pre_close.toFixed(2)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                            label: "成交量",
                            value: formatVolume(quote.volume),
                            suffix: "手"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                            label: "成交额",
                            value: quote.amount_display || formatVolume(quote.amount)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                            label: "换手率",
                            value: quote.turnover_rate.toFixed(2),
                            suffix: "%"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                            label: "市盈率",
                            value: quote.pe_ratio > 0 ? quote.pe_ratio.toFixed(2) : '-'
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 368,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                            label: "市净率",
                            value: quote.pb_ratio > 0 ? quote.pb_ratio.toFixed(2) : '-'
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 369,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                            label: "总市值",
                            value: quote.market_cap_display || formatVolume(quote.market_cap)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
                    lineNumber: 360,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
            lineNumber: 276,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/quote-cards.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, this);
}
_s(QuoteCards, "4M4VMayKlBKZHCyF+oahhz0xyF0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c2 = QuoteCards;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MetricCard");
__turbopack_context__.k.register(_c1, "QuoteCardsSkeleton");
__turbopack_context__.k.register(_c2, "QuoteCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$13$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@radix-ui+react-tabs@1.1.13+243b16c7711ca280/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$13$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$13$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$13$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$1$2e$13$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4$2b$26a211c426f3f87c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@radix-ui+react-slot@1.2.4+26a211c426f3f87c/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4$2b$26a211c426f3f87c$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/finance/limit-pool.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LimitPool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js [app-client] (ecmascript) <export default as ArrowUpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/circle-arrow-down.js [app-client] (ecmascript) <export default as ArrowDownCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function formatAmount(amt) {
    if (amt >= 1e8) return (amt / 1e8).toFixed(2) + '亿';
    if (amt >= 1e4) return (amt / 1e4).toFixed(2) + '万';
    return amt.toLocaleString();
}
function StockRow({ stock, onStockClick }) {
    const isUp = stock.change_percent > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 px-2.5 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-150 cursor-pointer group active:scale-[0.98]",
        onClick: ()=>onStockClick?.(stock.symbol),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-gray-900 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                        children: stock.name
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-400 dark:text-gray-500 font-mono",
                        children: stock.symbol
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-sm font-semibold tabular-nums ${isUp ? 'text-red-500' : 'text-green-500'}`,
                        children: stock.price.toFixed(2)
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-400 dark:text-gray-500",
                        children: formatAmount(stock.amount)
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "outline",
                className: `text-[11px] font-semibold px-1.5 py-0 min-w-[58px] justify-center ${isUp ? 'text-red-500 border-red-500/30 bg-red-500/5' : 'text-green-500 border-green-500/30 bg-green-500/5'}`,
                children: [
                    isUp ? '+' : '',
                    stock.change_percent.toFixed(2),
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = StockRow;
function PoolSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 p-1",
        children: Array.from({
            length: 8
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"
            }, i, false, {
                fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c1 = PoolSkeleton;
function LimitPool({ onStockClick }) {
    _s();
    const [limitUp, setLimitUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [limitDown, setLimitDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingUp, setLoadingUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingDown, setLoadingDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchPool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LimitPool.useCallback[fetchPool]": async (type, setter, setLoad)=>{
            try {
                setLoad(true);
                const res = await fetch(`/api/finance/limit-pool?type=${type}`);
                const json = await res.json();
                if (json.code === 200 && json.data) {
                    setter(json.data);
                }
            } catch  {
            // Silently fail
            } finally{
                setLoad(false);
            }
        }
    }["LimitPool.useCallback[fetchPool]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LimitPool.useEffect": ()=>{
            fetchPool('limit_up', setLimitUp, setLoadingUp);
            fetchPool('limit_down', setLimitDown, setLoadingDown);
        }
    }["LimitPool.useEffect"], [
        fetchPool
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-1 px-2.5 pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-xs font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                            className: "size-3.5 text-blue-500"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-3 w-[3px] rounded-full bg-blue-400"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        "涨跌停股票池"
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "px-2 pb-1.5 pt-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                    defaultValue: "limit_up",
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                            className: "w-full bg-gray-100 dark:bg-gray-700 h-7 mb-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "limit_up",
                                    className: "text-xs data-[state=active]:bg-red-500/15 data-[state=active]:text-red-400 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpCircle$3e$__["ArrowUpCircle"], {
                                            className: "size-3 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        "涨停 ",
                                        limitUp ? `(${limitUp.count})` : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "limit_down",
                                    className: "text-xs data-[state=active]:bg-green-500/15 data-[state=active]:text-green-400 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownCircle$3e$__["ArrowDownCircle"], {
                                            className: "size-3 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        "跌停 ",
                                        limitDown ? `(${limitDown.count})` : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "limit_up",
                            className: "mt-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-[180px] overflow-y-auto custom-scrollbar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-0.5",
                                    children: loadingUp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PoolSkeleton, {}, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this) : limitUp?.stocks && limitUp.stocks.length > 0 ? limitUp.stocks.map((stock)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StockRow, {
                                            stock: stock,
                                            onStockClick: onStockClick
                                        }, stock.symbol, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                            lineNumber: 141,
                                            columnNumber: 21
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-gray-400 dark:text-gray-500 text-sm py-8",
                                        children: "暂无涨停股票"
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                        lineNumber: 144,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "limit_down",
                            className: "mt-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-[180px] overflow-y-auto custom-scrollbar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-0.5",
                                    children: loadingDown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PoolSkeleton, {}, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                        lineNumber: 153,
                                        columnNumber: 19
                                    }, this) : limitDown?.stocks && limitDown.stocks.length > 0 ? limitDown.stocks.map((stock)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StockRow, {
                                            stock: stock,
                                            onStockClick: onStockClick
                                        }, stock.symbol, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                            lineNumber: 156,
                                            columnNumber: 21
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-gray-400 dark:text-gray-500 text-sm py-8",
                                        children: "暂无跌停股票"
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                        lineNumber: 159,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/finance/limit-pool.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(LimitPool, "AHkE3/L9L+OM+pGFCkN/vs7pvR0=");
_c2 = LimitPool;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StockRow");
__turbopack_context__.k.register(_c1, "PoolSkeleton");
__turbopack_context__.k.register(_c2, "LimitPool");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$10$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@radix-ui+react-scroll-area@1.2.10+243b16c7711ca280/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$10$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$10$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$10$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/ui/scroll-area.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/ui/scroll-area.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ScrollArea;
function ScrollBar({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$10$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$scroll$2d$area$40$1$2e$2$2e$10$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/vane-data-web/src/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/scroll-area.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = ScrollBar;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea");
__turbopack_context__.k.register(_c1, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@radix-ui+react-dialog@1.1.15+243b16c7711ca280/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$15$2b$243b16c7711ca280$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/finance/sector-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectorPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
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
function SectorCard({ sector, onClick }) {
    const isUp = sector.change_percent >= 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-150 cursor-pointer group active:scale-[0.98]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate",
                        children: sector.name
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mt-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-400 dark:text-gray-500",
                                children: [
                                    sector.stock_count,
                                    "只"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            sector.limit_up_count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-red-500/80",
                                children: [
                                    "涨停",
                                    sector.limit_up_count,
                                    "只"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            sector.lead_stock_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-300 dark:text-gray-600 truncate max-w-[140px]",
                                children: [
                                    "领涨: ",
                                    sector.lead_stock_name,
                                    " (",
                                    sector.lead_stock_change > 0 ? '+' : '',
                                    sector.lead_stock_change.toFixed(2),
                                    "%)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "outline",
                        className: `text-[11px] font-semibold px-1.5 py-0 min-w-[52px] justify-center ${isUp ? 'text-red-500 border-red-500/30 bg-red-500/5' : 'text-green-500 border-green-500/30 bg-green-500/5'}`,
                        children: [
                            isUp ? '+' : '',
                            sector.change_percent.toFixed(2),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "size-3.5 text-gray-400 dark:text-gray-500 group-hover:text-gray-300 dark:group-hover:text-gray-400 transition-colors"
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c = SectorCard;
function SectorGridSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2",
        children: Array.from({
            length: 12
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-16 bg-gray-200 dark:bg-gray-700 rounded-lg"
            }, i, false, {
                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_c1 = SectorGridSkeleton;
function SectorPanel({ onStockClick }) {
    _s();
    const [industryData, setIndustryData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [conceptData, setConceptData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingIndustry, setLoadingIndustry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingConcept, setLoadingConcept] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Dialog state
    const [dialogOpen, setDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedSector, setSelectedSector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sectorStocks, setSectorStocks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingStocks, setLoadingStocks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchSectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SectorPanel.useCallback[fetchSectors]": async (type, setter, setLoad)=>{
            try {
                setLoad(true);
                const res = await fetch(`/api/finance/sectors?type=${type}`);
                const json = await res.json();
                if (json.code === 200 && json.data) {
                    setter(json.data);
                }
            } catch  {
            // Silently fail
            } finally{
                setLoad(false);
            }
        }
    }["SectorPanel.useCallback[fetchSectors]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SectorPanel.useEffect": ()=>{
            fetchSectors('industry', setIndustryData, setLoadingIndustry);
            fetchSectors('concept', setConceptData, setLoadingConcept);
        }
    }["SectorPanel.useEffect"], [
        fetchSectors
    ]);
    const handleSectorClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SectorPanel.useCallback[handleSectorClick]": async (sector)=>{
            setSelectedSector(sector);
            setDialogOpen(true);
            setLoadingStocks(true);
            setSectorStocks([]);
            try {
                const res = await fetch(`/api/finance/sector-stocks?code=${sector.code}`);
                const json = await res.json();
                if (json.code === 200 && json.data?.stocks) {
                    setSectorStocks(json.data.stocks);
                }
            } catch  {
            // Silently fail
            } finally{
                setLoadingStocks(false);
            }
        }
    }["SectorPanel.useCallback[handleSectorClick]"], []);
    const handleStockClickInDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SectorPanel.useCallback[handleStockClickInDialog]": (symbol)=>{
            setDialogOpen(false);
            onStockClick?.(symbol);
        }
    }["SectorPanel.useCallback[handleStockClickInDialog]"], [
        onStockClick
    ]);
    const renderSectorList = (sectors, loading)=>{
        if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectorGridSkeleton, {}, void 0, false, {
            fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
            lineNumber: 168,
            columnNumber: 25
        }, this);
        if (!sectors || sectors.length === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-gray-400 dark:text-gray-500 text-sm py-8",
                children: "暂无板块数据"
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2",
            children: sectors.map((sector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectorCard, {
                    sector: sector,
                    onClick: ()=>handleSectorClick(sector)
                }, sector.code, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
            lineNumber: 176,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-1 px-2.5 pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xs font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                    className: "size-3.5 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-3 w-[3px] rounded-full bg-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                "板块分析"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-2 pt-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                            defaultValue: "industry",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                    className: "bg-gray-100 dark:bg-gray-700 h-7 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "industry",
                                            className: "text-xs data-[state=active]:bg-blue-50 data-[state=active]:dark:bg-blue-900/30 data-[state=active]:text-blue-600 data-[state=active]:dark:text-blue-400 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "size-3 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this),
                                                "行业板块"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "concept",
                                            className: "text-xs data-[state=active]:bg-blue-50 data-[state=active]:dark:bg-blue-900/30 data-[state=active]:text-blue-600 data-[state=active]:dark:text-blue-400 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                    className: "size-3 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this),
                                                "概念板块"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "industry",
                                    className: "mt-0",
                                    children: renderSectorList(industryData?.sectors, loadingIndustry)
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "concept",
                                    className: "mt-0",
                                    children: renderSectorList(conceptData?.sectors, loadingConcept)
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: dialogOpen,
                onOpenChange: setDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 max-w-lg max-h-[80vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-gray-900 dark:text-gray-100",
                                    children: selectedSector?.name || '板块成分股'
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    className: "text-gray-400 dark:text-gray-500",
                                    children: selectedSector ? `共 ${selectedSector.stock_count} 只股票 · 涨跌幅 ${selectedSector.change_percent >= 0 ? '+' : ''}${selectedSector.change_percent.toFixed(2)}%` : ''
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                            className: "h-[400px] custom-scrollbar -mx-2 px-2",
                            children: loadingStocks ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: Array.from({
                                    length: 8
                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"
                                    }, i, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                        lineNumber: 243,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this) : sectorStocks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-2 px-3 py-1.5 text-xs text-gray-400 dark:text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "股票名称"
                                            }, void 0, false, {
                                                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-right",
                                                children: "最新价"
                                            }, void 0, false, {
                                                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-right",
                                                children: "涨跌幅"
                                            }, void 0, false, {
                                                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                                lineNumber: 252,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this),
                                    sectorStocks.map((stock)=>{
                                        const isUp = stock.change_percent >= 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>handleStockClickInDialog(stock.symbol),
                                            className: "grid grid-cols-3 gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-150 cursor-pointer group active:scale-[0.98]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate",
                                                            children: stock.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-400 dark:text-gray-500 font-mono",
                                                            children: stock.symbol
                                                        }, void 0, false, {
                                                            fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-sm text-gray-700 dark:text-gray-300 tabular-nums self-center",
                                                    children: stock.price.toFixed(2)
                                                }, void 0, false, {
                                                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right self-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "outline",
                                                        className: `text-xs font-semibold px-2 py-0.5 ${isUp ? 'text-red-500 border-red-500/30 bg-red-500/5' : 'text-green-500 border-green-500/30 bg-green-500/5'}`,
                                                        children: [
                                                            isUp ? '+' : '',
                                                            stock.change_percent.toFixed(2),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, stock.symbol, true, {
                                            fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                            lineNumber: 257,
                                            columnNumber: 21
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                lineNumber: 247,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-gray-400 dark:text-gray-500 text-sm py-8",
                                children: "暂无成分股数据"
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/sector-panel.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SectorPanel, "K8llQ3flfoaApTXIkO21XJ1RMTQ=");
_c2 = SectorPanel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SectorCard");
__turbopack_context__.k.register(_c1, "SectorGridSkeleton");
__turbopack_context__.k.register(_c2, "SectorPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/finance/news-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinanceNews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-client] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function timeAgo(timeStr) {
    if (!timeStr) return '';
    const now = new Date();
    const time = new Date(timeStr.replace(/-/g, '/'));
    if (isNaN(time.getTime())) return timeStr;
    const diffMs = now.getTime() - time.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    // Check if it's yesterday
    const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const timeDate = new Date(time.getFullYear(), time.getMonth(), time.getDate());
    const dayDiff = Math.floor((nowDate.getTime() - timeDate.getTime()) / (1000 * 60 * 60 * 24));
    if (diffMinutes < 1) return '刚刚';
    if (diffMinutes < 60) return `${diffMinutes}分钟前`;
    if (diffHours < 24) return `${diffHours}小时前`;
    if (dayDiff === 1) return '昨天';
    if (dayDiff === 2) return '前天';
    if (dayDiff < 7) return `${dayDiff}天前`;
    // Fall back to date format
    const month = String(time.getMonth() + 1).padStart(2, '0');
    const day = String(time.getDate()).padStart(2, '0');
    return `${month}-${day}`;
}
function NewsRow({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-sm border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-150 group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-relaxed line-clamp-2",
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        item.digest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400 dark:text-gray-500 mt-1 line-clamp-2 leading-relaxed",
                            children: item.digest
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mt-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-400 dark:text-gray-500",
                                    children: item.source
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1",
                                    title: item.time,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "size-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        timeAgo(item.time)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                    className: "size-3.5 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors mt-1 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c = NewsRow;
function NewsSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-0.5",
        children: Array.from({
            length: 8
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-4 w-full bg-gray-200 dark:bg-gray-700 mb-2"
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-3 w-3/4 bg-gray-200 dark:bg-gray-700 mb-1"
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-3 w-1/4 bg-gray-200 dark:bg-gray-700"
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c1 = NewsSkeleton;
function FinanceNews() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchNews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FinanceNews.useCallback[fetchNews]": async ()=>{
            try {
                setLoading(true);
                setError(null);
                const res = await fetch('/api/finance/news?page=1&count=15');
                const json = await res.json();
                if (json.code === 200 && json.data) {
                    setData(json.data);
                } else {
                    setError(json.msg || '获取新闻失败');
                }
            } catch  {
                setError('网络请求失败');
            } finally{
                setLoading(false);
            }
        }
    }["FinanceNews.useCallback[fetchNews]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FinanceNews.useEffect": ()=>{
            fetchNews();
        }
    }["FinanceNews.useEffect"], [
        fetchNews
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 flex-1 min-h-0 flex flex-col transition-all duration-150 hover:shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-1 px-2.5 pt-2 shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xs font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"], {
                                    className: "size-3.5 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-3 w-[3px] rounded-full bg-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                "财经快讯"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "text-[11px] text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-700",
                            children: "东方财富"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-0 px-2 pb-1.5 flex-1 min-h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full overflow-y-auto custom-scrollbar",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsSkeleton, {}, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                        lineNumber: 146,
                        columnNumber: 13
                    }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-gray-400 dark:text-gray-500 text-sm py-8",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                        lineNumber: 148,
                        columnNumber: 13
                    }, this) : data?.news && data.news.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0.5 px-1",
                        children: data.news.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsRow, {
                                item: item
                            }, item.id, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                                lineNumber: 152,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                        lineNumber: 150,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-gray-400 dark:text-gray-500 text-sm py-8",
                        children: "暂无新闻数据"
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/finance/news-panel.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(FinanceNews, "58CAFXf+eiNyvmVBu+vS5NvQoVc=");
_c2 = FinanceNews;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NewsRow");
__turbopack_context__.k.register(_c1, "NewsSkeleton");
__turbopack_context__.k.register(_c2, "FinanceNews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/finance/market-index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarketIndexPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const INDEX_LIST = [
    {
        symbol: 'sh000001',
        name: '上证指数'
    },
    {
        symbol: 'sz399001',
        name: '深证成指'
    },
    {
        symbol: 'sz399006',
        name: '创业板指'
    },
    {
        symbol: 'sh000688',
        name: '科创50'
    },
    {
        symbol: 'sz399303',
        name: '国证2000'
    }
];
function formatAmount(val) {
    const num = parseFloat(val);
    if (isNaN(num)) return val;
    if (num >= 1e12) return (num / 1e12).toFixed(2) + '万亿';
    if (num >= 1e8) return (num / 1e8).toFixed(2) + '亿';
    if (num >= 1e4) return (num / 1e4).toFixed(2) + '万';
    return num.toFixed(2);
}
function IndexCardSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1.5 p-3 rounded-xl bg-gray-100 dark:bg-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-3 w-16 bg-gray-200 dark:bg-gray-600"
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-5 w-24 bg-gray-200 dark:bg-gray-600"
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-3 w-20 bg-gray-200 dark:bg-gray-600"
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = IndexCardSkeleton;
function MarketIndexPanel({ onIndexClick }) {
    _s();
    const [indices, setIndices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastUpdate, setLastUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const fetchIndices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MarketIndexPanel.useCallback[fetchIndices]": async ()=>{
            try {
                const symbols = INDEX_LIST.map({
                    "MarketIndexPanel.useCallback[fetchIndices].symbols": (i)=>i.symbol
                }["MarketIndexPanel.useCallback[fetchIndices].symbols"]).join(',');
                const res = await fetch(`/api/finance/quote?symbols=${symbols}`);
                const json = await res.json();
                if (json.code === 200 && json.data?.quotes?.length > 0) {
                    const quotes = json.data.quotes;
                    setIndices(quotes.map({
                        "MarketIndexPanel.useCallback[fetchIndices]": (q)=>({
                                symbol: q.symbol,
                                name: q.name,
                                price: q.price,
                                change_percent: q.change_percent,
                                change_amount: q.change_amount,
                                volume: q.volume?.toLocaleString() || '-',
                                amount: formatAmount(String(q.amount_display || q.amount || ''))
                            })
                    }["MarketIndexPanel.useCallback[fetchIndices]"]));
                    setLastUpdate(new Date().toLocaleTimeString('zh-CN', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    }));
                }
            } catch  {
            // silent
            } finally{
                setLoading(false);
            }
        }
    }["MarketIndexPanel.useCallback[fetchIndices]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketIndexPanel.useEffect": ()=>{
            fetchIndices();
            const interval = setInterval(fetchIndices, 30000);
            return ({
                "MarketIndexPanel.useEffect": ()=>clearInterval(interval)
            })["MarketIndexPanel.useEffect"];
        }
    }["MarketIndexPanel.useEffect"], [
        fetchIndices
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-150 hover:shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-2 pt-1.5 pb-0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                    className: "size-3 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-3 w-[3px] rounded-full bg-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold text-gray-900 dark:text-gray-100",
                                    children: "大盘指数"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                    className: "size-3"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: lastUpdate
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-5 gap-px bg-gray-100 dark:bg-gray-700",
                    children: loading ? Array.from({
                        length: 5
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IndexCardSkeleton, {}, i, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                            lineNumber: 107,
                            columnNumber: 17
                        }, this)) : indices.map((idx)=>{
                        const isUp = idx.change_percent >= 0;
                        const colorClass = isUp ? 'text-red-500' : 'text-green-500';
                        const ArrowIcon = isUp ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>onIndexClick?.(idx.symbol),
                            className: "flex flex-col gap-0.5 px-2 py-1 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-all duration-150 cursor-pointer group active:scale-[0.98]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-400 dark:group-hover:text-gray-300 transition-colors truncate",
                                    children: idx.name
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                                    lineNumber: 120,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-[13px] font-bold tabular-nums ${colorClass}`,
                                    children: idx.price.toFixed(2)
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                                    lineNumber: 123,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center gap-0.5 ${colorClass}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                            className: "size-3"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                                            lineNumber: 127,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium tabular-nums",
                                            children: [
                                                isUp ? '+' : '',
                                                idx.change_amount.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                                            lineNumber: 128,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs font-semibold tabular-nums px-1 py-0.5 rounded ${isUp ? 'bg-red-50 dark:bg-red-500/10' : 'bg-green-50 dark:bg-green-500/10'}`,
                                            children: [
                                                isUp ? '+' : '',
                                                idx.change_percent.toFixed(2),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                                            lineNumber: 132,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                                    lineNumber: 126,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-gray-400 dark:text-gray-500 tabular-nums",
                                    children: [
                                        "成交 ",
                                        idx.amount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                                    lineNumber: 141,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, idx.symbol, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                            lineNumber: 115,
                            columnNumber: 19
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/market-index.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(MarketIndexPanel, "MCuyON/K7D3rhpzeE0ak5S250R8=");
_c1 = MarketIndexPanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "IndexCardSkeleton");
__turbopack_context__.k.register(_c1, "MarketIndexPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/finance/watchlist.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Watchlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$watchlist$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/lib/watchlist-storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Watchlist({ onStockClick }) {
    _s();
    const [watchItems, setWatchItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load watchlist from localStorage and subscribe to storage changes (client-only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Watchlist.useEffect": ()=>{
            const load = {
                "Watchlist.useEffect.load": ()=>setWatchItems((0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$watchlist$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWatchlist"])())
            }["Watchlist.useEffect.load"];
            load();
            const handler = {
                "Watchlist.useEffect.handler": (e)=>{
                    if (e.key === 'watchlist') load();
                }
            }["Watchlist.useEffect.handler"];
            window.addEventListener('storage', handler);
            return ({
                "Watchlist.useEffect": ()=>window.removeEventListener('storage', handler)
            })["Watchlist.useEffect"];
        }
    }["Watchlist.useEffect"], []);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const handleRemove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Watchlist.useCallback[handleRemove]": (symbol, name)=>{
            const newItems = watchItems.filter({
                "Watchlist.useCallback[handleRemove].newItems": (item)=>item.symbol !== symbol
            }["Watchlist.useCallback[handleRemove].newItems"]);
            setWatchItems(newItems);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$watchlist$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveWatchlist"])(newItems);
            toast({
                title: '已从自选移除',
                description: name || symbol
            });
        }
    }["Watchlist.useCallback[handleRemove]"], [
        watchItems,
        toast
    ]);
    const handleMoveUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Watchlist.useCallback[handleMoveUp]": (index)=>{
            const newItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$watchlist$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveUp"])(watchItems, index);
            setWatchItems(newItems);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$watchlist$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveWatchlist"])(newItems);
        }
    }["Watchlist.useCallback[handleMoveUp]"], [
        watchItems
    ]);
    const handleMoveDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Watchlist.useCallback[handleMoveDown]": (index)=>{
            const newItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$watchlist$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveDown"])(watchItems, index);
            setWatchItems(newItems);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$watchlist$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveWatchlist"])(newItems);
        }
    }["Watchlist.useCallback[handleMoveDown]"], [
        watchItems
    ]);
    const handleClearAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Watchlist.useCallback[handleClearAll]": ()=>{
            setWatchItems([]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$lib$2f$watchlist$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveWatchlist"])([]);
            toast({
                title: '已清空',
                description: '自选列表已清空'
            });
        }
    }["Watchlist.useCallback[handleClearAll]"], [
        toast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-1 px-2.5 pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xs font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    className: "size-3.5 text-blue-500 fill-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-3 w-[3px] rounded-full bg-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                "我的自选",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] text-gray-400 dark:text-gray-500 font-normal",
                                    children: [
                                        "(",
                                        watchItems.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: watchItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: handleClearAll,
                                className: "h-6 text-xs text-gray-400 dark:text-gray-500 hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 px-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "size-3"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-0 px-2 pb-1.5",
                children: watchItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-0.5 px-1",
                    children: watchItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 px-1.5 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-150 cursor-pointer group active:scale-[0.98]",
                            onClick: ()=>onStockClick?.(item.symbol),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-0 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleMoveUp(index);
                                            },
                                            disabled: index === 0,
                                            className: "p-0 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed",
                                            title: "上移",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                className: "size-3"
                                            }, void 0, false, {
                                                fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                                lineNumber: 116,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleMoveDown(index);
                                            },
                                            disabled: index === watchItems.length - 1,
                                            className: "p-0 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed",
                                            title: "下移",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "size-3"
                                            }, void 0, false, {
                                                fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-400 dark:text-gray-500 font-mono",
                                            children: item.symbol
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-gray-300 dark:text-gray-600 tabular-nums font-medium",
                                    children: [
                                        "#",
                                        index + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        handleRemove(item.symbol, item.name);
                                    },
                                    className: "opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 dark:text-gray-500 hover:text-red-400",
                                    title: "移除",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                        lineNumber: 153,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                                    lineNumber: 145,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.symbol, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                            lineNumber: 100,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-gray-400 dark:text-gray-500 text-sm py-8",
                    children: "暂无自选股，点击行情卡片上的 ＋自选 添加"
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/finance/watchlist.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(Watchlist, "FJ+kvTKMDbfZHT3RkgQYeaKhIQw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Watchlist;
var _c;
__turbopack_context__.k.register(_c, "Watchlist");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StockDetailPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/arrow-down-right.js [app-client] (ecmascript) <export default as ArrowDownRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function DetailSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2",
                children: Array.from({
                    length: 8
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-10 bg-gray-100 dark:bg-gray-700 rounded"
                    }, i, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c = DetailSkeleton;
function DetailItem({ label, value, sub, colorClass }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-md bg-gray-50 dark:bg-gray-750 px-2 py-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[11px] text-gray-400 dark:text-gray-500 mb-0.5",
                children: label
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-sm font-semibold tabular-nums ${colorClass || 'text-gray-800 dark:text-gray-200'}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] text-gray-400 dark:text-gray-500",
                children: sub
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                lineNumber: 92,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_c1 = DetailItem;
/** Format yuan values to readable Chinese units */ function formatMoney(val) {
    const abs = Math.abs(val);
    const sign = val >= 0 ? '+' : '';
    if (abs >= 1e8) return `${sign}${(val / 1e8).toFixed(2)}亿`;
    if (abs >= 1e4) return `${sign}${(val / 1e4).toFixed(2)}万`;
    return `${sign}${val.toFixed(2)}`;
}
/** Capital flow section with detailed breakdown */ function CapitalFlowSection({ flows, loading }) {
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-1.5 pt-1.5 border-t border-gray-100 dark:border-gray-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5 mb-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "size-3 rounded-sm bg-gray-200 dark:bg-gray-700"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-8 w-full bg-gray-100 dark:bg-gray-700 rounded"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-16 w-full bg-gray-100 dark:bg-gray-700 rounded"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this);
    }
    if (flows.length === 0) return null;
    const today = flows[flows.length - 1];
    const mainNetWan = today.main_net / 1e4 // → 万元
    ;
    const isNetIn = mainNetWan >= 0;
    // Sub-categories in 万元
    const categories = [
        {
            label: '特大单',
            value: today.super_large_net / 1e4,
            colorIn: '#dc2626',
            colorOut: '#16a34a'
        },
        {
            label: '大单',
            value: today.large_net / 1e4,
            colorIn: '#ef4444',
            colorOut: '#22c55e'
        },
        {
            label: '中单',
            value: today.mid_net / 1e4,
            colorIn: '#f87171',
            colorOut: '#4ade80'
        },
        {
            label: '小单',
            value: today.small_net / 1e4,
            colorIn: '#fca5a5',
            colorOut: '#86efac'
        }
    ];
    const maxAbs = Math.max(...categories.map((c)=>Math.abs(c.value)), 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-1.5 pt-1.5 border-t border-gray-100 dark:border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 mb-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                        className: "size-3 text-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-semibold text-gray-700 dark:text-gray-300",
                        children: "资金流向"
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-gray-400 dark:text-gray-500 ml-0.5",
                        children: "今日"
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-2 py-1.5 rounded-md bg-gray-50 dark:bg-gray-750 mb-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-gray-500 dark:text-gray-400",
                        children: "主力净流入"
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            isNetIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                className: "size-3.5 text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__["ArrowDownRight"], {
                                className: "size-3.5 text-green-500"
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-sm font-bold tabular-nums ${isNetIn ? 'text-red-500' : 'text-green-500'}`,
                                children: formatMoney(today.main_net)
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1 px-1",
                children: categories.map((cat)=>{
                    const isPos = cat.value >= 0;
                    const pct = Math.min(100, Math.abs(cat.value) / maxAbs * 100);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-gray-400 dark:text-gray-500 w-6 shrink-0 text-right",
                                children: cat.label
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 h-3 bg-gray-100 dark:bg-gray-700 rounded-sm overflow-hidden relative",
                                children: isPos ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-0 top-0 h-full rounded-sm",
                                    style: {
                                        width: `${pct}%`,
                                        backgroundColor: cat.colorIn,
                                        opacity: 0.75
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                    lineNumber: 173,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute left-0 top-0 h-full rounded-sm",
                                    style: {
                                        width: `${pct}%`,
                                        backgroundColor: cat.colorOut,
                                        opacity: 0.75
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                    lineNumber: 182,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                lineNumber: 171,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[10px] tabular-nums font-medium w-16 text-right shrink-0 ${isPos ? 'text-red-500' : 'text-green-500'}`,
                                children: formatMoney(cat.value * 1e4)
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this)
                        ]
                    }, cat.label, true, {
                        fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                        lineNumber: 169,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            flows.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1.5 pt-1 border-t border-gray-100 dark:border-gray-700/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end gap-0.5 h-6",
                    children: flows.slice(-10).map((flow, i)=>{
                        const val = flow.main_net / 1e4;
                        const isP = val >= 0;
                        const absMax = Math.max(...flows.slice(-10).map((f)=>Math.abs(f.main_net / 1e4)), 1);
                        const h = Math.min(100, Math.abs(val) / absMax * 100);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col items-center gap-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-5 flex items-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-full rounded-sm ${isP ? 'bg-red-400/60' : 'bg-green-400/60'}`,
                                        style: {
                                            height: `${Math.max(4, h)}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                        lineNumber: 212,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                    lineNumber: 211,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[8px] text-gray-400 dark:text-gray-600",
                                    children: flow.date.slice(5)
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                    lineNumber: 217,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 210,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                    lineNumber: 203,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[9px] text-gray-300 dark:text-gray-600 mt-1.5 text-right",
                children: "东方财富 · 单位：元"
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_c2 = CapitalFlowSection;
function StockDetailPanel({ symbol }) {
    _s();
    const [detail, setDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [capitalFlows, setCapitalFlows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [capitalLoading, setCapitalLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StockDetailPanel.useCallback[fetchDetail]": async ()=>{
            if (!symbol) return;
            setLoading(true);
            try {
                const res = await fetch(`/api/finance/stock-detail?symbol=${symbol}`);
                const json = await res.json();
                if (json.code === 200 && json.data) {
                    setDetail(json.data);
                }
            } catch  {
            // silent
            } finally{
                setLoading(false);
            }
        }
    }["StockDetailPanel.useCallback[fetchDetail]"], [
        symbol
    ]);
    const fetchCapitalFlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StockDetailPanel.useCallback[fetchCapitalFlow]": async ()=>{
            if (!symbol) return;
            setCapitalLoading(true);
            try {
                const res = await fetch(`/api/finance/capital-flow?symbol=${symbol}&days=10`);
                const json = await res.json();
                if (json.code === 200 && json.data) {
                    const data = json.data;
                    setCapitalFlows(data.flows || []);
                }
            } catch  {
            // silent
            } finally{
                setCapitalLoading(false);
            }
        }
    }["StockDetailPanel.useCallback[fetchCapitalFlow]"], [
        symbol
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StockDetailPanel.useEffect": ()=>{
            fetchDetail();
        }
    }["StockDetailPanel.useEffect"], [
        fetchDetail
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StockDetailPanel.useEffect": ()=>{
            fetchCapitalFlow();
        }
    }["StockDetailPanel.useEffect"], [
        fetchCapitalFlow
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailSkeleton, {}, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
        lineNumber: 280,
        columnNumber: 23
    }, this);
    if (!detail) return null;
    const isUp = detail.change_percent >= 0;
    // 52-week range progress
    const range52 = detail.high_52w - detail.low_52w;
    const rangePos = range52 > 0 ? (detail.price - detail.low_52w) / range52 * 100 : 50;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-2 space-y-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                            className: "size-3 text-blue-500"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-3 w-[3px] rounded-full bg-blue-400"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-semibold text-gray-700 dark:text-gray-300",
                            children: "个股详情"
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] text-gray-400 dark:text-gray-500 ml-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                    className: "size-2.5 inline -mt-0.5 mr-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this),
                                "东方财富数据"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                    lineNumber: 293,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                            label: "总市值",
                            value: detail.total_market_cap_display
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                            label: "流通市值",
                            value: detail.float_market_cap_display
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                            label: "市盈率(TTM)",
                            value: detail.pe_ttm > 0 ? detail.pe_ttm.toFixed(2) : '-'
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                            label: "市净率",
                            value: detail.pb > 0 ? detail.pb.toFixed(2) : '-'
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                            label: "振幅",
                            value: `${detail.amplitude.toFixed(2)}%`
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                            label: "换手率",
                            value: `${detail.turnover_rate.toFixed(2)}%`
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                            label: "量比",
                            value: detail.volume_ratio.toFixed(2),
                            colorClass: detail.volume_ratio > 1 ? 'text-red-500' : detail.volume_ratio < 1 ? 'text-green-500' : ''
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                            label: "成交额",
                            value: detail.amount_display
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-[11px] mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400 dark:text-gray-500",
                                    children: "52周范围"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500 dark:text-gray-400",
                                            children: detail.low_52w.toFixed(2)
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: `size-3 ${isUp ? 'text-red-500' : 'text-green-500'}`
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                            lineNumber: 346,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500 dark:text-gray-400",
                                            children: detail.high_52w.toFixed(2)
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-green-300 via-gray-300 to-red-300",
                                    style: {
                                        width: '100%'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1/2 -translate-y-1/2 w-2 h-2.5 rounded-full border-2 border-white dark:border-gray-800 shadow-sm",
                                    style: {
                                        left: `calc(${Math.max(0, Math.min(100, rangePos))}% - 4px)`,
                                        backgroundColor: isUp ? '#dc2626' : '#16a34a'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                                    lineNumber: 355,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] text-gray-400 dark:text-gray-500 text-right mt-0.5",
                            children: [
                                "距高点 ",
                                (100 - Math.abs(detail.change_52w)).toFixed(1),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                            lineNumber: 363,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CapitalFlowSection, {
                    flows: capitalFlows,
                    loading: capitalLoading
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
            lineNumber: 291,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
}
_s(StockDetailPanel, "AT+JrD8UjS3OKnpbBUnY8SFvONw=");
_c3 = StockDetailPanel;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "DetailSkeleton");
__turbopack_context__.k.register(_c1, "DetailItem");
__turbopack_context__.k.register(_c2, "CapitalFlowSection");
__turbopack_context__.k.register(_c3, "StockDetailPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/finance/market-heatmap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarketHeatmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3X3>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function MarketHeatmap({ onSectorClick }) {
    _s();
    const [sectors, setSectors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('change');
    const fetchSectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MarketHeatmap.useCallback[fetchSectors]": async ()=>{
            try {
                setLoading(true);
                const res = await fetch('/api/finance/sectors?type=industry');
                const json = await res.json();
                if (json.code === 200 && json.data?.sectors) {
                    // Take top 24 sectors for the grid
                    const sorted = [
                        ...json.data.sectors
                    ].sort({
                        "MarketHeatmap.useCallback[fetchSectors].sorted": (a, b)=>sortBy === 'change' ? b.change_percent - a.change_percent : b.stock_count - a.stock_count
                    }["MarketHeatmap.useCallback[fetchSectors].sorted"]).slice(0, 24);
                    setSectors(sorted);
                }
            } catch  {
            // silent
            } finally{
                setLoading(false);
            }
        }
    }["MarketHeatmap.useCallback[fetchSectors]"], [
        sortBy
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketHeatmap.useEffect": ()=>{
            fetchSectors();
        }
    }["MarketHeatmap.useEffect"], [
        fetchSectors
    ]);
    // Calculate cell size based on change magnitude
    function getHeatColor(pct) {
        if (pct >= 3) return 'bg-red-500 text-white';
        if (pct >= 2) return 'bg-red-400 text-white';
        if (pct >= 1) return 'bg-red-300 text-red-900 dark:text-red-100';
        if (pct >= 0) return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
        if (pct >= -1) return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
        if (pct >= -2) return 'bg-green-300 text-green-900 dark:text-green-100';
        if (pct >= -3) return 'bg-green-400 text-white';
        return 'bg-green-500 text-white';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-1 px-2.5 pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xs font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"], {
                                    className: "size-3 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-3 w-[3px] rounded-full bg-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                "行业热力图"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-0.5 bg-gray-100 dark:bg-gray-700 rounded-md p-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `text-[10px] px-1.5 py-0.5 rounded-sm transition-colors ${sortBy === 'change' ? 'bg-white dark:bg-gray-600 shadow-sm text-gray-900 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`,
                                    onClick: ()=>setSortBy('change'),
                                    children: "涨幅"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `text-[10px] px-1.5 py-0.5 rounded-sm transition-colors ${sortBy === 'stocks' ? 'bg-white dark:bg-gray-600 shadow-sm text-gray-900 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`,
                                    onClick: ()=>setSortBy('stocks'),
                                    children: "个股数"
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-2 pt-0",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-6 gap-0.5",
                    children: Array.from({
                        length: 24
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-14 bg-gray-100 dark:bg-gray-700 rounded-sm"
                        }, i, false, {
                            fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                            lineNumber: 88,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-6 gap-0.5",
                    children: sectors.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>onSectorClick?.(s.code),
                            className: `rounded-sm p-1 cursor-pointer transition-all duration-150 hover:scale-105 hover:shadow-sm ${getHeatColor(s.change_percent)}`,
                            title: `${s.name} ${s.change_percent >= 0 ? '+' : ''}${s.change_percent.toFixed(2)}% (${s.stock_count}只)`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] font-medium truncate leading-tight",
                                    children: s.name
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs font-bold tabular-nums leading-tight mt-0.5",
                                    children: [
                                        s.change_percent >= 0 ? '+' : '',
                                        s.change_percent.toFixed(2),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[9px] opacity-70 leading-tight",
                                    children: [
                                        s.stock_count,
                                        "只"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, s.code, true, {
                            fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                            lineNumber: 94,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/components/finance/market-heatmap.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(MarketHeatmap, "P8BoU4zGKerpHCJ+IkPKfm7QIdg=");
_c = MarketHeatmap;
var _c;
__turbopack_context__.k.register(_c, "MarketHeatmap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/components/finance/scroll-to-top.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ScrollToTop() {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            const handleScroll = {
                "ScrollToTop.useEffect.handleScroll": ()=>{
                    setVisible(window.scrollY > 300);
                }
            }["ScrollToTop.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "ScrollToTop.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["ScrollToTop.useEffect"];
        }
    }["ScrollToTop.useEffect"], []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: scrollToTop,
        "aria-label": "回到顶部",
        className: `fixed bottom-6 right-6 z-50 w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-xl ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/vane-data-web/src/components/finance/scroll-to-top.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vane-data-web/src/components/finance/scroll-to-top.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(ScrollToTop, "cz/DzCD06IMMsoBJ0A1IgCy1P5M=");
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vane-data-web/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.2.2+bf16f8eded5e12ee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.525.0+b1ab299f0a400331/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$themes$40$0$2e$4$2e$6$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next-themes@0.4.6+bf16f8eded5e12ee/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$stock$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/finance/stock-search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$kline$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/finance/kline-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$quote$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/finance/quote-cards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$limit$2d$pool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/finance/limit-pool.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$sector$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/finance/sector-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$news$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/finance/news-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$market$2d$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/finance/market-index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$watchlist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/finance/watchlist.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$stock$2d$detail$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/finance/stock-detail-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$market$2d$heatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/finance/market-heatmap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$scroll$2d$to$2d$top$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vane-data-web/src/components/finance/scroll-to-top.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
const DEFAULT_SYMBOL = 'sh600519';
function getMarketTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    return `${dateStr} ${hours}:${minutes}:${seconds}`;
}
function getMarketStatus() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const t = hours * 60 + minutes;
    // Weekend
    if (day === 0 || day === 6) {
        return {
            label: '休市',
            color: 'text-gray-400',
            dotColor: 'bg-gray-400'
        };
    }
    // Morning session: 9:30-11:30
    if (t >= 570 && t <= 690) {
        return {
            label: '交易中',
            color: 'text-green-500',
            dotColor: 'bg-green-500 animate-pulse'
        };
    }
    // Lunch break: 11:30-13:00
    if (t > 690 && t < 780) {
        return {
            label: '午休',
            color: 'text-amber-500',
            dotColor: 'bg-amber-500'
        };
    }
    // Afternoon session: 13:00-15:00
    if (t >= 780 && t <= 900) {
        return {
            label: '交易中',
            color: 'text-green-500',
            dotColor: 'bg-green-500 animate-pulse'
        };
    }
    // Before open: before 9:30
    if (t < 570) {
        return {
            label: '盘前',
            color: 'text-blue-500',
            dotColor: 'bg-blue-500'
        };
    }
    // After close
    return {
        label: '已收盘',
        color: 'text-gray-400',
        dotColor: 'bg-gray-400'
    };
}
function Home() {
    _s();
    const [symbol, setSymbol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_SYMBOL);
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('day');
    const [adjust, setAdjust] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('qfq');
    const [dayRange, setDayRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(90);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('--');
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const quoteDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$themes$40$0$2e$4$2e$6$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    // Clock timer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const interval = setInterval({
                "Home.useEffect.interval": ()=>{
                    setCurrentTime(getMarketTime());
                }
            }["Home.useEffect.interval"], 1000);
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // Auto-refresh quote data every 30 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const interval = setInterval({
                "Home.useEffect.interval": ()=>{
                    setRefreshKey({
                        "Home.useEffect.interval": (k)=>k + 1
                    }["Home.useEffect.interval"]);
                }
            }["Home.useEffect.interval"], 30000);
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const handleSymbolChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleSymbolChange]": (newSymbol)=>{
            setSymbol(newSymbol);
            toast({
                title: '切换股票',
                description: `正在查看 ${newSymbol}`
            });
        }
    }["Home.useCallback[handleSymbolChange]"], [
        toast
    ]);
    const handleQuoteDataChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleQuoteDataChange]": (data)=>{
            quoteDataRef.current = data;
        }
    }["Home.useCallback[handleQuoteDataChange]"], []);
    const handleManualRefresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleManualRefresh]": ()=>{
            setIsRefreshing(true);
            setRefreshKey({
                "Home.useCallback[handleManualRefresh]": (k)=>k + 1
            }["Home.useCallback[handleManualRefresh]"]);
            setTimeout({
                "Home.useCallback[handleManualRefresh]": ()=>setIsRefreshing(false)
            }["Home.useCallback[handleManualRefresh]"], 1000);
            toast({
                title: '刷新成功',
                description: '数据已更新'
            });
        }
    }["Home.useCallback[handleManualRefresh]"], [
        toast
    ]);
    const handleStockClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleStockClick]": (stockSymbol)=>{
            setSymbol(stockSymbol);
            toast({
                title: '切换股票',
                description: `正在查看 ${stockSymbol}`
            });
        }
    }["Home.useCallback[handleStockClick]"], [
        toast
    ]);
    const [marketStatus, setMarketStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        label: '--',
        color: 'text-gray-400',
        dotColor: 'bg-gray-300'
    });
    // Market status (client-only to avoid hydration mismatch from timezone difference)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const update = {
                "Home.useEffect.update": ()=>setMarketStatus(getMarketStatus())
            }["Home.useEffect.update"];
            update();
            const interval = setInterval(update, 60000);
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const toggleFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[toggleFullscreen]": ()=>{
            setIsFullscreen({
                "Home.useCallback[toggleFullscreen]": (prev)=>!prev
            }["Home.useCallback[toggleFullscreen]"]);
        }
    }["Home.useCallback[toggleFullscreen]"], []);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[toggleTheme]": ()=>{
            setTheme(theme === 'dark' ? 'light' : 'dark');
        }
    }["Home.useCallback[toggleTheme]"], [
        theme,
        setTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col ${isFullscreen ? 'overflow-hidden' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1600px] mx-auto px-4 py-2 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                className: "size-4 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/vane-data-web/src/app/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-base font-bold text-gray-900 dark:text-gray-100 tracking-tight",
                                            children: "Vane Data"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/app/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:flex items-center gap-1.5 ml-4 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-1.5 h-1.5 rounded-full ${currentTime.includes(':') ? 'bg-blue-500 live-pulse' : 'bg-gray-300'}`
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-400 dark:text-gray-500",
                                            children: "实时"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/app/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono tabular-nums",
                                            suppressHydrationWarning: true,
                                            children: currentTime
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/app/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-1.5 h-1.5 rounded-full ${marketStatus.dotColor}`
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${marketStatus.color}`,
                                            suppressHydrationWarning: true,
                                            children: marketStatus.label
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/app/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: toggleTheme,
                                    className: "h-8 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                                    title: theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式',
                                    children: theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 35
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 66
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/app/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: toggleFullscreen,
                                    className: "h-8 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                                    title: isFullscreen ? '退出全屏图表' : '全屏图表',
                                    children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 31
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 68
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/vane-data-web/src/app/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: handleManualRefresh,
                                    className: "h-8 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$525$2e$0$2b$b1ab299f0a400331$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: `size-3.5 mr-1.5 ${isRefreshing ? 'animate-spin' : 'transition-transform hover:rotate-180'}`
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            children: "刷新"
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vane-data-web/src/app/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vane-data-web/src/app/page.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vane-data-web/src/app/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `${isFullscreen ? '' : 'max-w-[1600px] mx-auto px-4'} py-1.5 space-y-1.5 flex-1 ${isFullscreen ? 'px-4 max-w-[1800px] mx-auto' : ''} animate-fade-in`,
                children: [
                    !isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-slide-up",
                        style: {
                            animationDelay: '0.05s'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$market$2d$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onIndexClick: handleStockClick
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    !isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-slide-up",
                        style: {
                            animationDelay: '0.1s'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$stock$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StockSearch"], {
                            currentSymbol: symbol,
                            onSymbolChange: handleSymbolChange
                        }, void 0, false, {
                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    !isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-slide-up card-hover-lift",
                                        style: {
                                            animationDelay: '0.15s'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$quote$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            symbol: symbol,
                                            onDataChange: handleQuoteDataChange
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    }, `${symbol}-${refreshKey}`, false, {
                                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    !isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-slide-up card-hover-lift",
                                        style: {
                                            animationDelay: '0.2s'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$market$2d$heatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            onSectorClick: (code)=>{}
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-slide-up",
                                        style: {
                                            animationDelay: '0.25s'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$kline$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            symbol: symbol,
                                            period: period,
                                            setPeriod: setPeriod,
                                            adjust: adjust,
                                            setAdjust: setAdjust,
                                            dayRange: dayRange,
                                            setDayRange: setDayRange,
                                            isFullscreen: isFullscreen
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this),
                                    !isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-slide-up card-hover-lift",
                                        style: {
                                            animationDelay: '0.3s'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$stock$2d$detail$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            symbol: symbol
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    !isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-slide-up card-hover-lift",
                                        style: {
                                            animationDelay: '0.35s'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$sector$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            onStockClick: handleStockClick
                                        }, void 0, false, {
                                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this),
                                    !isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:hidden space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$watchlist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                onStockClick: handleStockClick
                                            }, void 0, false, {
                                                fileName: "[project]/vane-data-web/src/app/page.tsx",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$limit$2d$pool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                onStockClick: handleStockClick
                                            }, void 0, false, {
                                                fileName: "[project]/vane-data-web/src/app/page.tsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vane-data-web/src/app/page.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            !isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex flex-col gap-1 flex-1 min-h-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$watchlist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onStockClick: handleStockClick
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$limit$2d$pool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onStockClick: handleStockClick
                                    }, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$news$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vane-data-web/src/app/page.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    !isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$news$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/vane-data-web/src/app/page.tsx",
                            lineNumber: 282,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                        lineNumber: 281,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/app/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            !isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "mt-auto bg-white dark:bg-gray-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[1600px] mx-auto px-4 py-1.5 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-gray-400",
                                children: "数据来源：腾讯财经 / 新浪财经 / 东方财富"
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/app/page.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-gray-400",
                                children: "仅供参考，不构成投资建议"
                            }, void 0, false, {
                                fileName: "[project]/vane-data-web/src/app/page.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vane-data-web/src/app/page.tsx",
                        lineNumber: 291,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vane-data-web/src/app/page.tsx",
                lineNumber: 289,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$2$2e$2$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$components$2f$finance$2f$scroll$2d$to$2d$top$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/vane-data-web/src/app/page.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vane-data-web/src/app/page.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s(Home, "SL3+xo/Pg10hFO4nB/AbsqC/3o8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vane$2d$data$2d$web$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$themes$40$0$2e$4$2e$6$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=vane-data-web_src_0srn1tx._.js.map