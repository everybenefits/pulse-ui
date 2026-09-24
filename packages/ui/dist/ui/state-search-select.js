"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateSearchSelect = StateSearchSelect;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const us_states_1 = require("../data/us-states");
function StateSearchSelect({ states = us_states_1.US_STATES, value, onChange, placeholder = "Search state…", disabled = false, emptyLabel = "No states available", }) {
    const listId = (0, react_1.useId)();
    const rootRef = (0, react_1.useRef)(null);
    const [open, setOpen] = (0, react_1.useState)(false);
    const [query, setQuery] = (0, react_1.useState)("");
    const selected = states.find((s) => s.code === value) ?? null;
    const filtered = (0, react_1.useMemo)(() => {
        const q = query.trim().toLowerCase();
        if (!q)
            return states;
        return states.filter((s) => s.code.toLowerCase().includes(q) || s.name.toLowerCase().includes(q));
    }, [states, query]);
    (0, react_1.useEffect)(() => {
        function onDocClick(e) {
            if (!rootRef.current?.contains(e.target)) {
                setOpen(false);
                setQuery("");
            }
        }
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: rootRef, className: "relative", children: [(0, jsx_runtime_1.jsxs)("button", { type: "button", disabled: disabled || states.length === 0, className: "mt-1 flex h-8 w-full items-center justify-between rounded-lg border border-glass-border bg-sheet px-2.5 text-left text-xs disabled:opacity-50", "aria-haspopup": "listbox", "aria-expanded": open, "aria-controls": listId, onClick: () => {
                    if (disabled || states.length === 0)
                        return;
                    setOpen((o) => !o);
                    setQuery("");
                }, children: [(0, jsx_runtime_1.jsx)("span", { className: selected ? "" : "text-muted", children: selected
                            ? `${selected.code} — ${selected.name}`
                            : states.length === 0
                                ? emptyLabel
                                : placeholder }), (0, jsx_runtime_1.jsx)("span", { className: "text-muted", "aria-hidden": true, children: "\u25BE" })] }), open ? ((0, jsx_runtime_1.jsxs)("div", { className: "absolute z-20 mt-1 w-full overflow-hidden rounded-lg border border-glass-border bg-sheet shadow-lg", children: [(0, jsx_runtime_1.jsx)("input", { autoFocus: true, className: "w-full border-b border-glass-border bg-transparent px-2.5 py-1.5 text-xs outline-none", placeholder: placeholder, value: query, onChange: (e) => setQuery(e.target.value), onKeyDown: (e) => {
                            if (e.key === "Escape") {
                                setOpen(false);
                                setQuery("");
                            }
                        } }), (0, jsx_runtime_1.jsx)("ul", { id: listId, role: "listbox", className: "max-h-40 overflow-y-auto py-0.5 text-xs", children: filtered.length === 0 ? ((0, jsx_runtime_1.jsx)("li", { className: "px-2.5 py-1.5 text-muted", children: emptyLabel })) : (filtered.map((s) => ((0, jsx_runtime_1.jsx)("li", { role: "option", "aria-selected": s.code === value, children: (0, jsx_runtime_1.jsxs)("button", { type: "button", className: "w-full px-2.5 py-1 text-left hover:bg-black/5", onClick: () => {
                                    onChange(s.code);
                                    setOpen(false);
                                    setQuery("");
                                }, children: [(0, jsx_runtime_1.jsx)("span", { className: "font-medium", children: s.code }), (0, jsx_runtime_1.jsxs)("span", { className: "text-muted", children: [" \u2014 ", s.name] })] }) }, s.code)))) })] })) : null] }));
}
