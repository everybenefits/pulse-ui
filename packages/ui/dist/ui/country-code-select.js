"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCodeSelect = CountryCodeSelect;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const phone_countries_1 = require("../data/phone-countries");
const anchored_popover_1 = require("./anchored-popover");
const triggerSize = {
    md: "h-10 rounded-xl px-3 text-sm",
    sm: "h-8 rounded-lg px-2.5 text-xs",
};
function CountryCodeSelect({ value, iso2, onChange, disabled, size = "md", locale = "en", labels, }) {
    const listId = (0, react_1.useId)();
    const triggerRef = (0, react_1.useRef)(null);
    const [open, setOpen] = (0, react_1.useState)(false);
    const [query, setQuery] = (0, react_1.useState)("");
    const selected = (0, react_1.useMemo)(() => (0, phone_countries_1.resolvePhoneCountry)({ iso2, dialCode: value }), [iso2, value]);
    const options = (0, react_1.useMemo)(() => (0, phone_countries_1.filterPhoneCountries)(query, locale), [query, locale]);
    const close = () => {
        setOpen(false);
        setQuery("");
    };
    const pick = (country) => {
        onChange(country.dialCode, country.iso2);
        close();
    };
    const labelFor = (country) => locale.startsWith("es") ? country.nameEs : country.name;
    const title = labels?.title ?? "Country code";
    const searchPlaceholder = labels?.search ?? "Search country…";
    const emptyLabel = labels?.empty ?? "No countries found";
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsxs)("button", { ref: triggerRef, type: "button", disabled: disabled, "aria-haspopup": "listbox", "aria-expanded": open, "aria-controls": listId, onClick: () => setOpen((prev) => !prev), className: `flex w-full items-center justify-between gap-2 border border-glass-border bg-sheet text-ink outline-none transition hover:border-brand/40 focus:border-brand disabled:opacity-50 ${triggerSize[size]}`, children: [(0, jsx_runtime_1.jsxs)("span", { className: "flex min-w-0 items-center gap-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-base leading-none", "aria-hidden": true, children: selected.flag }), (0, jsx_runtime_1.jsx)("span", { className: "font-semibold tabular-nums", children: selected.dialCode })] }), (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 20 20", className: `h-4 w-4 shrink-0 text-muted transition ${open ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", strokeWidth: "1.8", "aria-hidden": true, children: (0, jsx_runtime_1.jsx)("path", { d: "M5 7.5 10 12.5 15 7.5", strokeLinecap: "round", strokeLinejoin: "round" }) })] }), (0, jsx_runtime_1.jsxs)(anchored_popover_1.AnchoredPopover, { open: open, onClose: close, anchorRef: triggerRef, id: listId, minWidth: 288, "aria-label": title, children: [(0, jsx_runtime_1.jsx)("div", { className: "border-b border-glass-border p-2", children: (0, jsx_runtime_1.jsx)("input", { autoFocus: true, value: query, onChange: (e) => setQuery(e.target.value), placeholder: searchPlaceholder, className: "h-9 w-full rounded-lg border border-glass-border bg-transparent px-2.5 text-sm outline-none placeholder:text-muted focus:border-brand" }) }), (0, jsx_runtime_1.jsx)("ul", { className: "min-h-0 flex-1 overflow-y-auto py-1", children: options.length === 0 ? ((0, jsx_runtime_1.jsx)("li", { className: "px-3 py-2 text-sm text-muted", children: emptyLabel })) : (options.map((country) => {
                            const active = country.iso2 === selected.iso2;
                            return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("button", { type: "button", role: "option", "aria-selected": active, className: `flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition ${active
                                        ? "bg-brand/12 text-brand"
                                        : "text-ink hover:bg-ink/[0.04] dark:hover:bg-white/[0.05]"}`, onClick: () => pick(country), children: [(0, jsx_runtime_1.jsx)("span", { className: "text-base leading-none", "aria-hidden": true, children: country.flag }), (0, jsx_runtime_1.jsx)("span", { className: "min-w-0 flex-1 truncate", children: labelFor(country) }), (0, jsx_runtime_1.jsx)("span", { className: "shrink-0 tabular-nums text-muted", children: country.dialCode })] }) }, country.iso2));
                        })) })] })] }));
}
