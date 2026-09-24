"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = Avatar;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("../lib/utils");
function Avatar({ name, photoUrl, size = 36, className = "", }) {
    const initial = (name.trim() || "U").charAt(0).toUpperCase();
    // Native <img>: Storage emulator URLs use LAN IPs that next/image rejects
    // unless every host is listed in next.config.
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("relative shrink-0 overflow-hidden rounded-full bg-brand/14 text-brand", className), style: { width: size, height: size }, children: photoUrl ? ((0, jsx_runtime_1.jsx)("img", { src: photoUrl, alt: "", width: size, height: size, decoding: "async", referrerPolicy: "no-referrer", className: "h-full w-full object-cover" })) : ((0, jsx_runtime_1.jsx)("span", { className: "flex h-full w-full items-center justify-center font-display font-semibold", style: { fontSize: size * 0.36 }, children: initial })) }));
}
