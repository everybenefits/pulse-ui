"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandingManifesto = LandingManifesto;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("motion/react");
const react_2 = require("react");
const use_safe_reduced_motion_1 = require("../hooks/use-safe-reduced-motion");
function parseWords(source) {
    return source.split(/\s+/).map((raw) => {
        const highlighted = raw.startsWith("*");
        return { text: raw.replace(/\*/g, ""), highlighted };
    });
}
function LandingManifesto({ kicker, manifesto, dialValue = "88.0", dialUnit = "MHz", }) {
    const reduced = (0, use_safe_reduced_motion_1.useSafeReducedMotion)();
    const sectionRef = (0, react_2.useRef)(null);
    const [progress, setProgress] = (0, react_2.useState)(0);
    const { scrollYProgress } = (0, react_1.useScroll)({
        target: sectionRef,
        offset: ["start 0.85", "end 0.4"],
    });
    (0, react_1.useMotionValueEvent)(scrollYProgress, "change", (value) => {
        setProgress(value);
    });
    const words = (0, react_2.useMemo)(() => parseWords(manifesto), [manifesto]);
    const visible = reduced
        ? words.length
        : Math.floor(progress * (words.length + 4));
    return ((0, jsx_runtime_1.jsxs)("section", { ref: sectionRef, className: "relative overflow-hidden border-t border-glass-border px-6 py-24 md:py-40", children: [(0, jsx_runtime_1.jsx)("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" }), (0, jsx_runtime_1.jsx)("div", { "aria-hidden": true, className: "text-outline pointer-events-none absolute right-0 top-8 select-none font-display text-[18vw] font-extrabold uppercase leading-none tracking-[-0.06em] opacity-20 md:top-12", children: kicker }), (0, jsx_runtime_1.jsxs)("div", { className: "relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(8rem,10rem)_1fr] lg:gap-14", children: [(0, jsx_runtime_1.jsxs)("aside", { className: "hidden lg:block", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[9px] font-extrabold uppercase tracking-[0.24em] text-muted", children: kicker }), (0, jsx_runtime_1.jsxs)("p", { className: "mt-2 font-display text-3xl font-extrabold tabular-nums tracking-tight text-brand", children: [dialValue, (0, jsx_runtime_1.jsx)("span", { className: "ml-1 text-sm font-semibold text-muted", children: dialUnit })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "relative min-w-0 pt-4 lg:pt-0", children: (0, jsx_runtime_1.jsx)("p", { className: "font-display text-[clamp(1.75rem,4.5vw,3.25rem)] font-extrabold leading-[1.18] tracking-tight", children: words.map((word, index) => ((0, jsx_runtime_1.jsxs)("span", { className: `transition-colors duration-300 ${index < visible
                                    ? word.highlighted
                                        ? "text-brand"
                                        : "text-ink"
                                    : "text-ink/12"}`, children: [word.text, " "] }, `${word.text}-${index}`))) }) })] })] }));
}
