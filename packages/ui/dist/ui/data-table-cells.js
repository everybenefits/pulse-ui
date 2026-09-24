"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCell = UserCell;
exports.RoleBadge = RoleBadge;
exports.StatusBadge = StatusBadge;
exports.RowActions = RowActions;
exports.RowActionButton = RowActionButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const avatar_1 = require("./avatar");
const button_1 = require("./button");
function UserCell({ name, email, photoUrl, }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex min-w-0 items-center gap-2.5", children: [(0, jsx_runtime_1.jsx)(avatar_1.Avatar, { name: name, photoUrl: photoUrl, size: 32 }), (0, jsx_runtime_1.jsxs)("div", { className: "min-w-0", children: [(0, jsx_runtime_1.jsx)("p", { className: "truncate text-sm font-semibold leading-tight text-ink", children: name }), email ? ((0, jsx_runtime_1.jsx)("p", { className: "truncate text-xs leading-tight text-muted", children: email })) : null] })] }));
}
function RoleBadge({ children }) {
    return ((0, jsx_runtime_1.jsx)("span", { className: "inline-flex rounded-md bg-ink/[0.06] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink dark:bg-white/[0.08]", children: children }));
}
function StatusBadge({ tone = "neutral", children, }) {
    const styles = {
        neutral: "bg-ink/[0.06] text-muted dark:bg-white/[0.08]",
        success: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
        warning: "bg-amber-500/15 text-amber-800 dark:text-amber-200",
        danger: "bg-[#B42318]/12 text-[#B42318] dark:text-[#F97066]",
    }[tone];
    return ((0, jsx_runtime_1.jsx)("span", { className: `inline-flex rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${styles}`, children: children }));
}
function RowActions({ children }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap items-center justify-end gap-1", children: children }));
}
function RowActionButton({ variant = "ghost", size = "sm", className, ...props }) {
    return ((0, jsx_runtime_1.jsx)(button_1.Button, { variant: variant, size: size, className: className, ...props }));
}
