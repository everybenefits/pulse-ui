"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = Drawer;
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = require("./button");
function Drawer({ open, title, subtitle, onClose, children, footer, closeLabel = "Close", }) {
    if (!open)
        return null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "fixed inset-0 z-50 flex justify-end", children: [(0, jsx_runtime_1.jsx)("button", { type: "button", "aria-label": closeLabel, className: "absolute inset-0 bg-black/40", onClick: onClose }), (0, jsx_runtime_1.jsxs)("aside", { className: "relative flex h-full w-full max-w-md flex-col border-l border-glass-border bg-sheet shadow-xl", children: [(0, jsx_runtime_1.jsxs)("header", { className: "flex items-start justify-between gap-3 border-b border-glass-border px-5 py-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { className: "font-display text-xl font-bold tracking-tight", children: title }), subtitle ? ((0, jsx_runtime_1.jsx)("p", { className: "mt-1 text-sm text-muted", children: subtitle })) : null] }), (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "ghost", className: "h-9 px-3 text-xs", onClick: onClose, children: closeLabel })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex-1 overflow-y-auto px-5 py-4", children: children }), footer ? ((0, jsx_runtime_1.jsx)("footer", { className: "border-t border-glass-border px-5 py-4", children: footer })) : null] })] }));
}
