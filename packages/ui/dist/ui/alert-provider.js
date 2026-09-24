"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertProvider = AlertProvider;
exports.useAlerts = useAlerts;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const alert_host_1 = require("./alert-host");
const AlertContext = (0, react_1.createContext)(null);
const DEFAULT_DURATION = {
    success: 4000,
    info: 4500,
    warning: 5500,
    error: 7000,
};
function nextId(prefix) {
    return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}
function AlertProvider({ children, labels }) {
    const [toasts, setToasts] = (0, react_1.useState)([]);
    const [confirmState, setConfirmState] = (0, react_1.useState)(null);
    const confirmResolver = (0, react_1.useRef)(null);
    const timers = (0, react_1.useRef)(new Map());
    const dismiss = (0, react_1.useCallback)((id) => {
        const timer = timers.current.get(id);
        if (timer) {
            clearTimeout(timer);
            timers.current.delete(id);
        }
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);
    const show = (0, react_1.useCallback)((input) => {
        const kind = input.kind ?? "info";
        const id = nextId("toast");
        const durationMs = input.durationMs ?? DEFAULT_DURATION[kind];
        const toast = {
            id,
            kind,
            title: input.title,
            description: input.description,
            durationMs,
        };
        setToasts((prev) => [...prev.slice(-4), toast]);
        if (durationMs > 0) {
            const timer = setTimeout(() => dismiss(id), durationMs);
            timers.current.set(id, timer);
        }
        return id;
    }, [dismiss]);
    const resolveConfirm = (0, react_1.useCallback)((value) => {
        confirmResolver.current?.(value);
        confirmResolver.current = null;
        setConfirmState(null);
    }, []);
    const confirm = (0, react_1.useCallback)((input) => {
        return new Promise((resolve) => {
            if (confirmResolver.current) {
                confirmResolver.current(false);
            }
            const request = {
                id: nextId("confirm"),
                ...input,
                resolve,
            };
            confirmResolver.current = request.resolve;
            setConfirmState({
                id: request.id,
                title: request.title,
                description: request.description,
                confirmLabel: request.confirmLabel,
                cancelLabel: request.cancelLabel,
                danger: request.danger,
            });
        });
    }, []);
    const api = (0, react_1.useMemo)(() => ({
        show,
        dismiss,
        confirm,
        success: (title, description) => show({ kind: "success", title, description }),
        error: (title, description) => show({ kind: "error", title, description }),
        info: (title, description) => show({ kind: "info", title, description }),
        warning: (title, description) => show({ kind: "warning", title, description }),
    }), [show, dismiss, confirm]);
    return ((0, jsx_runtime_1.jsxs)(AlertContext.Provider, { value: api, children: [children, (0, jsx_runtime_1.jsx)(alert_host_1.AlertHost, { toasts: toasts, onDismiss: dismiss, confirm: confirmState, onConfirm: () => resolveConfirm(true), onCancel: () => resolveConfirm(false), labels: labels })] }));
}
function useAlerts() {
    const ctx = (0, react_1.useContext)(AlertContext);
    if (!ctx) {
        throw new Error("useAlerts must be used within AlertProvider");
    }
    return ctx;
}
