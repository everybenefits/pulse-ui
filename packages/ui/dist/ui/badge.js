"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = Badge;
const jsx_runtime_1 = require("react/jsx-runtime");
function Badge({ children }) {
    return ((0, jsx_runtime_1.jsx)("span", { className: "inline-flex rounded-md bg-brand/14 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand", children: children }));
}
