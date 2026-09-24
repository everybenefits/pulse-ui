"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandingTopicOrbit = LandingTopicOrbit;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("motion/react");
const use_safe_reduced_motion_1 = require("../hooks/use-safe-reduced-motion");
/** Polar placement: angle deg, radius % of container. */
const ORBITS = [
    { angle: 0, radius: 38, size: "lg" },
    { angle: 45, radius: 42, size: "md" },
    { angle: 90, radius: 36, size: "sm" },
    { angle: 135, radius: 44, size: "md" },
    { angle: 180, radius: 40, size: "lg" },
    { angle: 225, radius: 46, size: "sm" },
    { angle: 270, radius: 34, size: "md" },
    { angle: 315, radius: 42, size: "sm" },
];
const SIZE_CLASS = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-3.5 py-2",
    lg: "text-base px-4 py-2.5",
};
function LandingTopicOrbit({ kicker, title, subtitle, coreLabel, brandShort, topics, }) {
    const reduced = (0, use_safe_reduced_motion_1.useSafeReducedMotion)();
    const items = topics.slice(0, ORBITS.length);
    return ((0, jsx_runtime_1.jsx)("section", { className: "relative overflow-hidden border-t border-glass-border bg-sheet/50 px-6 py-20 md:py-28", children: (0, jsx_runtime_1.jsxs)("div", { className: "mx-auto max-w-7xl", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mx-auto max-w-2xl text-center", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-xs font-semibold uppercase tracking-[0.28em] text-brand", children: kicker }), (0, jsx_runtime_1.jsx)("h2", { className: "mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "mt-3 text-muted md:text-lg", children: subtitle })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative mx-auto mt-14 aspect-square w-full max-w-lg md:mt-20 md:max-w-xl", children: [(0, jsx_runtime_1.jsx)("div", { "aria-hidden": true, className: "absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/15" }), (0, jsx_runtime_1.jsx)("div", { "aria-hidden": true, className: "absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand/20" }), (0, jsx_runtime_1.jsx)("div", { "aria-hidden": true, className: "absolute left-1/2 top-1/2 h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/25" }), (0, jsx_runtime_1.jsx)(react_1.motion.div, { className: "absolute inset-0", animate: reduced ? undefined : { rotate: 360 }, transition: {
                                duration: 120,
                                repeat: Infinity,
                                ease: "linear",
                            }, children: items.map((topic, i) => {
                                const orbit = ORBITS[i];
                                const rad = (orbit.angle * Math.PI) / 180;
                                const x = 50 + Math.cos(rad) * orbit.radius;
                                const y = 50 + Math.sin(rad) * orbit.radius;
                                return ((0, jsx_runtime_1.jsxs)(react_1.motion.span, { className: `topic-orbit-chip absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center whitespace-nowrap rounded-full border border-glass-border bg-sheet font-semibold text-ink shadow-sm ${SIZE_CLASS[orbit.size]}`, style: { left: `${x}%`, top: `${y}%` }, animate: reduced ? undefined : { rotate: -360 }, transition: {
                                        duration: 120,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }, children: [(0, jsx_runtime_1.jsx)("span", { className: "font-mono text-[9px] font-semibold text-brand/60", children: topic.freq }), (0, jsx_runtime_1.jsx)("span", { children: topic.label })] }, `${topic.label}-${i}`));
                            }) }), (0, jsx_runtime_1.jsxs)("div", { className: "absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center md:h-28 md:w-28", children: [(0, jsx_runtime_1.jsxs)("div", { "aria-hidden": true, className: "tune-dial pointer-events-none absolute inset-0 rounded-full", children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute inset-1 rounded-full border border-brand/25" }), (0, jsx_runtime_1.jsx)("span", { className: "absolute left-1/2 top-2 h-2 w-0.5 -translate-x-1/2 rounded-full bg-brand/60" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative flex h-[calc(100%-8px)] w-[calc(100%-8px)] flex-col items-center justify-center rounded-full bg-brand text-center text-on-brand shadow-[0_0_40px_12px_rgba(31,107,74,0.25)]", children: [(0, jsx_runtime_1.jsx)("span", { className: "font-display text-xs font-bold uppercase tracking-[0.18em] opacity-80", children: coreLabel }), (0, jsx_runtime_1.jsx)("span", { className: "font-display text-lg font-extrabold tracking-tight md:text-xl", children: brandShort })] })] })] })] }) }));
}
