"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchInput = SearchInput;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("../lib/utils");
const searchInputSize = {
    md: "h-10 rounded-xl py-2 pr-3.5 pl-10 text-sm",
    sm: "h-8 rounded-lg py-1.5 pr-3 pl-9 text-xs",
};
function SearchInput({ className = "", size = "md", ...props }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("relative w-full", className), children: [(0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, className: (0, utils_1.cn)("pointer-events-none absolute top-1/2 -translate-y-1/2 text-muted", size === "sm" ? "left-2.5 h-3.5 w-3.5" : "left-3 h-4 w-4"), children: (0, jsx_runtime_1.jsx)("path", { stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" }) }), (0, jsx_runtime_1.jsx)("input", { type: "search", className: (0, utils_1.cn)("w-full border border-glass-border bg-transparent text-ink outline-none placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/15", searchInputSize[size]), ...props })] }));
}
