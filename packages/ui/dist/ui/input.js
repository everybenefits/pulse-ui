"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../lib/utils");
const inputSize = {
    md: "h-10 rounded-xl px-3.5 text-sm",
    sm: "h-8 rounded-lg px-2.5 text-xs",
};
exports.Input = (0, react_1.forwardRef)(function Input({ className = "", size = "md", ...props }, ref) {
    return ((0, jsx_runtime_1.jsx)("input", { ref: ref, className: (0, utils_1.cn)("w-full border border-glass-border bg-sheet text-ink outline-none placeholder:text-muted focus:border-brand", inputSize[size], className), ...props }));
});
