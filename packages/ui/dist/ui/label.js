"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = Label;
const jsx_runtime_1 = require("react/jsx-runtime");
function Label({ children }) {
    return ((0, jsx_runtime_1.jsx)("label", { className: "mb-1 block text-xs font-medium tracking-wide text-muted", children: children }));
}
