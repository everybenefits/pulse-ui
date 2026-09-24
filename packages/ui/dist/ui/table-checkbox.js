"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCheckbox = TableCheckbox;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
/** Custom selection checkbox for DataTable bulk select. */
function TableCheckbox({ indeterminate = false, checked, disabled, ...props }) {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            ref.current.indeterminate = indeterminate && !checked;
        }
    }, [indeterminate, checked]);
    const isIndeterminate = indeterminate && !checked;
    const isOn = Boolean(checked) || isIndeterminate;
    return ((0, jsx_runtime_1.jsxs)("label", { className: `relative inline-flex h-8 w-8 items-center justify-center ${disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`, children: [(0, jsx_runtime_1.jsx)("input", { ref: ref, type: "checkbox", className: "peer sr-only", checked: Boolean(checked), disabled: disabled, ...props }), (0, jsx_runtime_1.jsx)("span", { "aria-hidden": true, className: `flex h-[1.125rem] w-[1.125rem] items-center justify-center rounded-[6px] border transition ${isOn
                    ? "border-brand bg-brand text-on-brand shadow-sm shadow-brand/25"
                    : "border-glass-border bg-sheet text-transparent shadow-sm peer-hover:border-brand/45 peer-hover:bg-brand/[0.06]"} peer-focus-visible:ring-2 peer-focus-visible:ring-brand/30 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-sheet`, children: isIndeterminate ? ((0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 16 16", className: "h-3 w-3", fill: "none", children: (0, jsx_runtime_1.jsx)("path", { d: "M4 8h8", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round" }) })) : ((0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 16 16", className: "h-3 w-3", fill: "none", children: (0, jsx_runtime_1.jsx)("path", { d: "M3.5 8.2 6.4 11l6.1-6.5", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }) })) })] }));
}
