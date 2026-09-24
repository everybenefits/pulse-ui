"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableSkeleton = DataTableSkeleton;
exports.PageHeaderSkeleton = PageHeaderSkeleton;
exports.KpiGridSkeleton = KpiGridSkeleton;
exports.OrgTreeSkeleton = OrgTreeSkeleton;
exports.TablePageSkeleton = TablePageSkeleton;
const jsx_runtime_1 = require("react/jsx-runtime");
function DataTableSkeleton({ columns, rows = 8, }) {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: Array.from({ length: rows }).map((_, rowIdx) => ((0, jsx_runtime_1.jsx)("tr", { children: Array.from({ length: columns }).map((__, colIdx) => ((0, jsx_runtime_1.jsx)("td", { className: "border-b border-glass-border/70 px-3 py-1.5", children: (0, jsx_runtime_1.jsx)("div", { className: "h-3 animate-pulse rounded-md bg-ink/[0.06] dark:bg-white/[0.08]", style: {
                        width: `${50 + ((rowIdx + colIdx) % 5) * 8}%`,
                    } }) }, colIdx))) }, rowIdx))) }));
}
function PageHeaderSkeleton({ withActions = false, }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "space-y-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "h-8 w-48 animate-pulse rounded-lg bg-ink/[0.08] dark:bg-white/[0.08]" }), (0, jsx_runtime_1.jsx)("div", { className: "h-4 w-72 animate-pulse rounded-md bg-ink/[0.05] dark:bg-white/[0.05]" })] }), withActions ? ((0, jsx_runtime_1.jsx)("div", { className: "h-10 w-36 animate-pulse rounded-xl bg-ink/[0.06] dark:bg-white/[0.06]" })) : null] }));
}
function KpiGridSkeleton({ count = 4, columns = 4, }) {
    const gridClass = columns === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
    return ((0, jsx_runtime_1.jsx)("div", { className: `grid gap-3 sm:grid-cols-2 ${gridClass}`, children: Array.from({ length: count }).map((_, i) => ((0, jsx_runtime_1.jsxs)("div", { className: "studio-panel space-y-3 rounded-2xl p-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "h-3 w-20 animate-pulse rounded bg-ink/[0.06] dark:bg-white/[0.06]" }), (0, jsx_runtime_1.jsx)("div", { className: "h-8 w-16 animate-pulse rounded-lg bg-ink/[0.08] dark:bg-white/[0.08]" })] }, i))) }));
}
function OrgTreeSkeleton({ rows = 6 }) {
    return ((0, jsx_runtime_1.jsx)("ul", { className: "studio-panel divide-y divide-glass-border rounded-2xl", children: Array.from({ length: rows }).map((_, i) => ((0, jsx_runtime_1.jsxs)("li", { className: "flex items-center gap-3 px-4 py-3", style: { paddingLeft: `${0.75 + (i % 4) * 1.1}rem` }, children: [(0, jsx_runtime_1.jsx)("div", { className: "h-4 w-4 animate-pulse rounded bg-ink/[0.06] dark:bg-white/[0.06]" }), (0, jsx_runtime_1.jsxs)("div", { className: "min-w-0 flex-1 space-y-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "h-4 w-40 animate-pulse rounded bg-ink/[0.08] dark:bg-white/[0.08]" }), (0, jsx_runtime_1.jsx)("div", { className: "h-3 w-28 animate-pulse rounded bg-ink/[0.05] dark:bg-white/[0.05]" })] })] }, i))) }));
}
function TablePageSkeleton({ columns = 7, withToolbar = true, }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mx-auto max-w-6xl space-y-6 p-4 sm:p-6", children: [(0, jsx_runtime_1.jsx)(PageHeaderSkeleton, { withActions: true }), (0, jsx_runtime_1.jsxs)("div", { className: "studio-panel overflow-hidden rounded-2xl", children: [withToolbar ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap gap-2 border-b border-glass-border px-4 py-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "h-8 min-w-[12rem] flex-1 animate-pulse rounded-lg bg-ink/[0.06] dark:bg-white/[0.06]" }), (0, jsx_runtime_1.jsx)("div", { className: "h-8 w-28 animate-pulse rounded-lg bg-ink/[0.06] dark:bg-white/[0.06]" }), (0, jsx_runtime_1.jsx)("div", { className: "h-8 w-28 animate-pulse rounded-lg bg-ink/[0.06] dark:bg-white/[0.06]" })] })) : null, (0, jsx_runtime_1.jsx)("div", { className: "overflow-x-auto", children: (0, jsx_runtime_1.jsxs)("table", { className: "w-full min-w-[48rem] text-left text-sm", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: Array.from({ length: columns }).map((_, i) => ((0, jsx_runtime_1.jsx)("th", { className: "px-4 py-2.5", children: (0, jsx_runtime_1.jsx)("div", { className: "h-3 w-16 animate-pulse rounded bg-ink/[0.05] dark:bg-white/[0.05]" }) }, i))) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsx)(DataTableSkeleton, { columns: columns, rows: 8 }) })] }) })] })] }));
}
