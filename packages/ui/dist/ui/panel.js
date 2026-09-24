"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = Panel;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("../lib/utils");
function Panel({ children, className = "", }) {
    return (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("pulse-sheet p-4", className), children: children });
}
