"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkActionButton = exports.BulkSelect = void 0;
exports.BulkBarShell = BulkBarShell;
exports.BulkField = BulkField;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const button_1 = require("./button");
function BulkBarShell({ selectedCount, selectedLabel, maxHint, busy, busyLabel, clearLabel, onClear, children, }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex w-full flex-wrap items-center gap-x-3 gap-y-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "inline-flex h-7 shrink-0 items-center rounded-full bg-brand px-2.5 text-[11px] font-bold tracking-wide text-on-brand tabular-nums shadow-sm shadow-brand/20", children: selectedCount }), (0, jsx_runtime_1.jsxs)("div", { className: "min-w-0", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm font-semibold leading-tight text-ink", children: selectedLabel }), maxHint ? ((0, jsx_runtime_1.jsx)("p", { className: "text-[10px] leading-tight text-muted", children: maxHint })) : null] })] }), (0, jsx_runtime_1.jsx)("div", { className: "hidden h-6 w-px shrink-0 bg-glass-border sm:block" }), (0, jsx_runtime_1.jsx)("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-2", children: children }), (0, jsx_runtime_1.jsxs)("div", { className: "ml-auto flex items-center gap-2", children: [busy ? ((0, jsx_runtime_1.jsxs)("span", { className: "inline-flex items-center gap-1.5 text-xs font-medium text-muted", children: [(0, jsx_runtime_1.jsx)("span", { className: "h-3.5 w-3.5 animate-spin rounded-full border-2 border-brand/25 border-t-brand", "aria-hidden": true }), busyLabel] })) : null, (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "ghost", size: "sm", className: "text-muted hover:text-ink", disabled: busy, onClick: onClear, children: clearLabel })] })] }));
}
function BulkField({ label, children, }) {
    return ((0, jsx_runtime_1.jsxs)("label", { className: "group flex min-w-[8.5rem] flex-col gap-1", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-[9px] font-bold uppercase tracking-[0.14em] text-muted", children: label }), children] }));
}
exports.BulkSelect = (0, react_1.forwardRef)(function BulkSelect({ className = "", ...props }, ref) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("select", { ref: ref, className: `h-8 w-full min-w-[9.5rem] appearance-none rounded-lg border border-glass-border bg-sheet py-1.5 pr-8 pl-2.5 text-xs font-medium text-ink shadow-sm outline-none transition hover:border-brand/40 focus:border-brand focus:ring-2 focus:ring-brand/15 disabled:opacity-50 ${className}`, ...props }), (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": true, className: "pointer-events-none absolute top-1/2 right-2 h-3.5 w-3.5 -translate-y-1/2 text-muted", children: (0, jsx_runtime_1.jsx)("path", { d: "M5.5 7.5 10 12l4.5-4.5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) })] }));
});
exports.BulkActionButton = (0, react_1.forwardRef)(function BulkActionButton({ variant = "secondary", className = "", ...props }, ref) {
    const styles = {
        primary: "bg-brand text-on-brand hover:brightness-110 shadow-sm shadow-brand/20",
        secondary: "border border-glass-border bg-sheet text-ink hover:border-brand/35 hover:bg-brand/[0.06]",
        danger: "border border-[#B42318]/25 bg-[#B42318]/10 text-[#B42318] hover:bg-[#B42318]/16",
    }[variant];
    return ((0, jsx_runtime_1.jsx)("button", { ref: ref, className: `inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${styles} ${className}`, ...props }));
});
