"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneMock = PhoneMock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
/** The mock UI is authored at this size and scaled to whatever width it gets. */
const DESIGN_WIDTH = 282;
const DESIGN_HEIGHT = 596;
function IconHome({ filled, ...props }) {
    return ((0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", ...props, children: filled ? ((0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M12 3.2 3.8 10.2c-.4.3-.3.9.2 1V20c0 .6.4 1 1 1h5v-6h4v6h5c.6 0 1-.4 1-1v-8.8c.5-.1.6-.7.2-1L12 3.2Z" })) : ((0, jsx_runtime_1.jsx)("path", { stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round", d: "M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" })) }));
}
function IconChat({ filled, ...props }) {
    return ((0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", ...props, children: filled ? ((0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v9a2.5 2.5 0 0 1-2.5 2.5H9.2L5.4 20.4c-.5.4-1.2 0-1.2-.6V5.5Z" })) : ((0, jsx_runtime_1.jsx)("path", { stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round", d: "M6.5 4h11A2.5 2.5 0 0 1 20 6.5v8A2.5 2.5 0 0 1 17.5 17H9l-3.8 2.8c-.5.4-1.2 0-1.2-.6V6.5A2.5 2.5 0 0 1 6.5 4Z" })) }));
}
function IconSchool({ filled, ...props }) {
    return ((0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", ...props, children: filled ? ((0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M12 3 2.5 8.2 12 13.4l8-4.4V16h1.5V8.2L12 3Zm-6 9.2v3.3c0 1.7 2.7 3 6 3s6-1.3 6-3v-3.3l-6 3.3-6-3.3Z" })) : ((0, jsx_runtime_1.jsx)("path", { stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round", d: "M12 4 3 9l9 5 7.2-4V16H21V9L12 4Zm-5.5 8.6v2.9c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-2.9" })) }));
}
function IconPerson({ filled, ...props }) {
    return ((0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", ...props, children: filled ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "8", r: "3.5", fill: "currentColor" }), (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M5.5 19.2c.4-3.2 3-5.2 6.5-5.2s6.1 2 6.5 5.2c.1.5-.4 1-1 1H6.5c-.6 0-1.1-.5-1-1Z" })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "8", r: "3.2", stroke: "currentColor", strokeWidth: "1.8" }), (0, jsx_runtime_1.jsx)("path", { stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", d: "M6.2 18.5c.6-2.8 2.9-4.3 5.8-4.3s5.2 1.5 5.8 4.3" })] })) }));
}
const TABS = [
    { id: "home", Icon: IconHome },
    { id: "chats", Icon: IconChat },
    { id: "academy", Icon: IconSchool },
    { id: "profile", Icon: IconPerson },
];
function StatusBar() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex shrink-0 items-center justify-between px-5 pb-1 pt-3 text-[10px] font-semibold text-ink/70", children: [(0, jsx_runtime_1.jsx)("span", { className: "tabular-nums", children: "9:41" }), (0, jsx_runtime_1.jsxs)("span", { className: "flex items-center gap-[3px]", children: [(0, jsx_runtime_1.jsx)("i", { className: "block h-[7px] w-[2px] rounded-sm bg-current opacity-50" }), (0, jsx_runtime_1.jsx)("i", { className: "block h-[9px] w-[2px] rounded-sm bg-current opacity-70" }), (0, jsx_runtime_1.jsx)("i", { className: "block h-[11px] w-[2px] rounded-sm bg-current" }), (0, jsx_runtime_1.jsx)("i", { className: "ml-1 block h-[9px] w-[16px] rounded-[3px] border border-current opacity-70" })] })] }));
}
function TabBar({ active, labels, }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "shrink-0 px-2 pb-2.5 pt-1.5", children: (0, jsx_runtime_1.jsx)("div", { className: "pulse-tab-pill mx-auto flex items-center px-0.5 py-0.5", children: TABS.map(({ id, Icon }) => {
                const isActive = id === active;
                return ((0, jsx_runtime_1.jsxs)("span", { className: `flex h-10 flex-1 items-center justify-center gap-1 rounded-xl transition ${isActive
                        ? "max-w-[7rem] flex-[1.2] bg-brand/10 text-ink"
                        : "text-muted"}`, children: [(0, jsx_runtime_1.jsx)(Icon, { filled: isActive, className: isActive ? "text-brand" : "text-muted", width: 18, height: 18 }), isActive && ((0, jsx_runtime_1.jsx)("span", { className: "truncate text-[10px] font-semibold tracking-tight", children: labels[id] }))] }, id));
            }) }) }));
}
function PhoneMock({ children, activeTab = "home", className = "", tabLabels, }) {
    const screenRef = (0, react_1.useRef)(null);
    const [scale, setScale] = (0, react_1.useState)(1);
    (0, react_1.useEffect)(() => {
        const screen = screenRef.current;
        if (!screen)
            return;
        const observer = new ResizeObserver(([entry]) => {
            setScale(entry.contentRect.width / DESIGN_WIDTH);
        });
        observer.observe(screen);
        return () => observer.disconnect();
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { "aria-hidden": true, className: `phone-frame relative w-full ${className}`, children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-1/2 top-[2.1%] z-10 h-[2.6%] w-[25%] -translate-x-1/2 rounded-full bg-black/85" }), (0, jsx_runtime_1.jsx)("div", { ref: screenRef, className: "phone-screen mesh-bg relative w-full", style: { aspectRatio: `${DESIGN_WIDTH} / ${DESIGN_HEIGHT}` }, children: (0, jsx_runtime_1.jsxs)("div", { className: "absolute left-0 top-0 flex origin-top-left flex-col", style: {
                        width: DESIGN_WIDTH,
                        height: DESIGN_HEIGHT,
                        transform: `scale(${scale})`,
                    }, children: [(0, jsx_runtime_1.jsx)(StatusBar, {}), (0, jsx_runtime_1.jsx)("div", { className: "relative min-h-0 flex-1 overflow-hidden pointer-events-none", children: children }), (0, jsx_runtime_1.jsx)(TabBar, { active: activeTab, labels: tabLabels })] }) })] }));
}
