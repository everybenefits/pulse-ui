"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../lib/utils");
const buttonSize = {
    md: "h-10 rounded-xl px-4 text-sm",
    sm: "h-8 rounded-lg px-2.5 text-xs",
};
exports.Button = (0, react_1.forwardRef)(function Button({ variant = "primary", size = "md", className = "", ...props }, ref) {
    const styles = {
        primary: "bg-brand text-on-brand hover:brightness-110 disabled:opacity-50",
        secondary: "pulse-sheet text-ink hover:bg-white/[0.04] dark:hover:bg-white/[0.04] disabled:opacity-50",
        ghost: "text-ink hover:bg-white/[0.04] disabled:opacity-50",
        danger: "bg-[#B42318] text-white hover:brightness-110 disabled:opacity-50",
    }[variant];
    return ((0, jsx_runtime_1.jsx)("button", { ref: ref, className: (0, utils_1.cn)("inline-flex cursor-pointer items-center justify-center gap-1.5 font-semibold transition disabled:cursor-not-allowed", buttonSize[size], styles, className), ...props }));
});
