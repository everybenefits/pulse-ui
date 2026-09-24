"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = TextArea;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("../lib/utils");
function TextArea({ className = "", ...props }) {
    return ((0, jsx_runtime_1.jsx)("textarea", { className: (0, utils_1.cn)("min-h-24 w-full rounded-xl border border-glass-border bg-sheet px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus:border-brand", className), ...props }));
}
