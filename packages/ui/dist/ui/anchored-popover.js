"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchoredPopover = AnchoredPopover;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
function measure(anchor, panel, minWidth) {
    const rect = anchor.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const width = Math.min(Math.max(rect.width, minWidth), Math.max(16, vw - 16));
    let left = rect.left;
    if (left + width > vw - 8)
        left = Math.max(8, vw - 8 - width);
    if (left < 8)
        left = 8;
    const gap = 6;
    const spaceBelow = vh - rect.bottom - gap - 8;
    const spaceAbove = rect.top - gap - 8;
    const desired = panel?.offsetHeight ?? 280;
    const openUp = spaceBelow < Math.min(desired, 240) && spaceAbove > spaceBelow;
    const maxHeight = Math.max(160, openUp ? spaceAbove : spaceBelow);
    const top = openUp
        ? Math.max(8, rect.top - gap - Math.min(desired, maxHeight))
        : rect.bottom + gap;
    return { top, left, width, maxHeight };
}
/**
 * Fixed-position popover on document.body so overflow-hidden ancestors
 * cannot clip search lists (country codes, agencies, address suggestions).
 */
function AnchoredPopover({ open, onClose, anchorRef, children, id, role = "listbox", minWidth = 0, className = "", "aria-label": ariaLabel, }) {
    const panelRef = (0, react_1.useRef)(null);
    const [box, setBox] = (0, react_1.useState)(null);
    const [mounted, setMounted] = (0, react_1.useState)(false);
    (0, react_1.useLayoutEffect)(() => {
        setMounted(true);
    }, []);
    (0, react_1.useLayoutEffect)(() => {
        if (!open) {
            setBox(null);
            return;
        }
        const anchor = anchorRef.current;
        if (!anchor)
            return;
        const update = () => {
            const next = measure(anchor, panelRef.current, minWidth);
            setBox((prev) => prev &&
                prev.top === next.top &&
                prev.left === next.left &&
                prev.width === next.width &&
                prev.maxHeight === next.maxHeight
                ? prev
                : next);
        };
        update();
        const frame = requestAnimationFrame(update);
        const panel = panelRef.current;
        const observer = panel ? new ResizeObserver(update) : null;
        observer?.observe(panel);
        window.addEventListener("resize", update);
        window.addEventListener("scroll", update, true);
        return () => {
            cancelAnimationFrame(frame);
            observer?.disconnect();
            window.removeEventListener("resize", update);
            window.removeEventListener("scroll", update, true);
        };
    }, [open, anchorRef, minWidth]);
    (0, react_1.useLayoutEffect)(() => {
        if (!open)
            return;
        const onDoc = (event) => {
            const target = event.target;
            if (!target)
                return;
            if (anchorRef.current?.contains(target))
                return;
            if (panelRef.current?.contains(target))
                return;
            onClose();
        };
        const onKey = (event) => {
            if (event.key === "Escape")
                onClose();
        };
        document.addEventListener("mousedown", onDoc);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onDoc);
            document.removeEventListener("keydown", onKey);
        };
    }, [open, onClose, anchorRef]);
    if (!mounted || !open)
        return null;
    const style = box
        ? {
            position: "fixed",
            top: box.top,
            left: box.left,
            width: box.width,
            maxHeight: box.maxHeight,
            zIndex: 40000,
        }
        : {
            position: "fixed",
            top: 0,
            left: 0,
            visibility: "hidden",
            zIndex: 40000,
        };
    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)("div", { ref: panelRef, id: id, role: role, "aria-label": ariaLabel, style: style, className: `flex flex-col overflow-hidden rounded-xl border border-glass-border bg-sheet shadow-[0_18px_50px_rgba(0,0,0,0.22)] ${className}`, children: children }), document.body);
}
