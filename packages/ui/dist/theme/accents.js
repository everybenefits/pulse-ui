"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCENT_IDS = exports.ACCENTS = void 0;
exports.isThemeMode = isThemeMode;
exports.isAccent = isAccent;
exports.ACCENTS = {
    green: "#1F6B4A",
    amber: "#F5A524",
    teal: "#0D9488",
    blue: "#2563EB",
    violet: "#7C3AED",
    rose: "#E11D48",
};
exports.ACCENT_IDS = new Set(Object.keys(exports.ACCENTS));
function isThemeMode(value) {
    return value === "system" || value === "light" || value === "dark";
}
function isAccent(value) {
    return typeof value === "string" && exports.ACCENT_IDS.has(value);
}
