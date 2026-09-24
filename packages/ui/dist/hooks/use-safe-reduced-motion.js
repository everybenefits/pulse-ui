"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSafeReducedMotion = useSafeReducedMotion;
const react_1 = require("react");
const QUERY = "(prefers-reduced-motion: reduce)";
function subscribe(onChange) {
    const media = window.matchMedia(QUERY);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
}
/**
 * Motion's `useReducedMotion` resolves to `null` during SSR, so branching on it
 * makes the first client render diverge from the server HTML. Reading it
 * through an external store keeps hydration in sync.
 */
function useSafeReducedMotion() {
    return (0, react_1.useSyncExternalStore)(subscribe, () => window.matchMedia(QUERY).matches, () => false);
}
