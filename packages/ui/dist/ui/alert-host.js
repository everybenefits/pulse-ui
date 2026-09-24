"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertHost = AlertHost;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("motion/react");
const button_1 = require("./button");
const KIND_STYLES = {
    success: {
        bar: "bg-ok",
        icon: "text-ok",
    },
    error: {
        bar: "bg-danger",
        icon: "text-danger",
    },
    warning: {
        bar: "bg-warn",
        icon: "text-warn",
    },
    info: {
        bar: "bg-brand",
        icon: "text-brand",
    },
};
const DEFAULT_LABELS = {
    dismiss: "Dismiss",
    cancel: "Cancel",
    confirm: "Confirm",
};
function KindIcon({ kind }) {
    const className = `mt-0.5 h-4 w-4 shrink-0 ${KIND_STYLES[kind].icon}`;
    if (kind === "success") {
        return ((0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, className: className, children: (0, jsx_runtime_1.jsx)("path", { d: "M20 6 9 17l-5-5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
    }
    if (kind === "error") {
        return ((0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, className: className, children: (0, jsx_runtime_1.jsx)("path", { d: "M18 6 6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }));
    }
    if (kind === "warning") {
        return ((0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, className: className, children: (0, jsx_runtime_1.jsx)("path", { d: "M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, className: className, children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "1.8" }), (0, jsx_runtime_1.jsx)("path", { d: "M12 8h.01M11 12h1v4h1", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })] }));
}
function ToastCard({ toast, onDismiss, dismissLabel, }) {
    const styles = KIND_STYLES[toast.kind];
    return ((0, jsx_runtime_1.jsxs)(react_2.motion.div, { layout: true, role: "status", "aria-live": toast.kind === "error" ? "assertive" : "polite", initial: { opacity: 0, y: -12, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: -8, scale: 0.98 }, transition: { type: "spring", stiffness: 420, damping: 32 }, className: "pointer-events-auto relative overflow-hidden rounded-xl border border-glass-border bg-sheet shadow-lg", children: [(0, jsx_runtime_1.jsx)("div", { className: `absolute inset-y-0 left-0 w-1 ${styles.bar}` }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-start gap-3 py-3 pr-3 pl-4", children: [(0, jsx_runtime_1.jsx)(KindIcon, { kind: toast.kind }), (0, jsx_runtime_1.jsxs)("div", { className: "min-w-0 flex-1 pt-0.5", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm font-semibold text-ink", children: toast.title }), toast.description ? ((0, jsx_runtime_1.jsx)("p", { className: "mt-0.5 text-xs leading-relaxed text-muted", children: toast.description })) : null] }), (0, jsx_runtime_1.jsx)("button", { type: "button", "aria-label": dismissLabel, onClick: () => onDismiss(toast.id), className: "rounded-lg p-1.5 text-muted transition hover:bg-ink/[0.05] hover:text-ink dark:hover:bg-white/[0.06]", children: (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, className: "h-3.5 w-3.5", children: (0, jsx_runtime_1.jsx)("path", { d: "M18 6 6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })] })] }));
}
function ConfirmDialog({ confirm, onConfirm, onCancel, labels, }) {
    const titleId = (0, react_1.useId)();
    const descId = (0, react_1.useId)();
    const confirmRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        confirmRef.current?.focus();
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                onCancel();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [onCancel]);
    return ((0, jsx_runtime_1.jsxs)(react_2.motion.div, { className: "fixed inset-0 z-[70] flex items-center justify-center p-4", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: [(0, jsx_runtime_1.jsx)("button", { type: "button", "aria-label": labels.cancel, className: "absolute inset-0 bg-black/45", onClick: onCancel }), (0, jsx_runtime_1.jsxs)(react_2.motion.div, { role: "alertdialog", "aria-modal": "true", "aria-labelledby": titleId, "aria-describedby": confirm.description ? descId : undefined, initial: { opacity: 0, y: 10, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: 8, scale: 0.98 }, transition: { type: "spring", stiffness: 420, damping: 32 }, className: "relative w-full max-w-md rounded-2xl border border-glass-border bg-sheet p-5 shadow-xl", children: [(0, jsx_runtime_1.jsx)("h2", { id: titleId, className: "font-display text-xl font-bold tracking-tight", children: confirm.title }), confirm.description ? ((0, jsx_runtime_1.jsx)("p", { id: descId, className: "mt-2 text-sm leading-relaxed text-muted", children: confirm.description })) : null, (0, jsx_runtime_1.jsxs)("div", { className: "mt-5 flex justify-end gap-2", children: [(0, jsx_runtime_1.jsx)(button_1.Button, { variant: "ghost", onClick: onCancel, children: confirm.cancelLabel ?? labels.cancel }), (0, jsx_runtime_1.jsx)(button_1.Button, { ref: confirmRef, variant: confirm.danger ? "danger" : "primary", onClick: onConfirm, children: confirm.confirmLabel ?? labels.confirm })] })] })] }));
}
function AlertHost({ toasts, onDismiss, confirm, onConfirm, onCancel, labels, }) {
    const resolved = { ...DEFAULT_LABELS, ...labels };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "pointer-events-none fixed inset-x-0 top-0 z-[60] flex flex-col items-end gap-2 p-4 sm:p-5", "aria-live": "polite", children: (0, jsx_runtime_1.jsx)(react_2.AnimatePresence, { mode: "popLayout", children: toasts.map((toast) => ((0, jsx_runtime_1.jsx)("div", { className: "w-full max-w-sm", children: (0, jsx_runtime_1.jsx)(ToastCard, { toast: toast, onDismiss: onDismiss, dismissLabel: resolved.dismiss }) }, toast.id))) }) }), (0, jsx_runtime_1.jsx)(react_2.AnimatePresence, { children: confirm ? ((0, jsx_runtime_1.jsx)(ConfirmDialog, { confirm: confirm, onConfirm: onConfirm, onCancel: onCancel, labels: resolved }, confirm.id)) : null })] }));
}
