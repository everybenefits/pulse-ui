"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyDocumentTheme = applyDocumentTheme;
exports.ThemeProvider = ThemeProvider;
exports.useThemeSettings = useThemeSettings;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const accents_1 = require("./accents");
const THEME_KEY = "pulse-theme";
const ACCENT_KEY = "pulse-accent";
const ThemeContext = (0, react_1.createContext)(null);
function readStoredMode() {
    if (typeof window === "undefined")
        return "dark";
    const raw = window.localStorage.getItem(THEME_KEY);
    return (0, accents_1.isThemeMode)(raw) ? raw : "dark";
}
function readStoredAccent() {
    if (typeof window === "undefined")
        return "green";
    const raw = window.localStorage.getItem(ACCENT_KEY);
    return (0, accents_1.isAccent)(raw) ? raw : "green";
}
function resolveDark(mode) {
    if (mode === "dark")
        return true;
    if (mode === "light")
        return false;
    if (typeof window === "undefined")
        return true;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
/** Apply theme to <html> immediately (do not wait for React effects). */
function applyDocumentTheme(mode, accent) {
    if (typeof document === "undefined")
        return mode !== "light";
    const dark = resolveDark(mode);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.setProperty("--brand", accents_1.ACCENTS[accent]);
    return dark;
}
function ThemeProvider({ children, onAppearanceChange, }) {
    const [mode, setModeState] = (0, react_1.useState)(() => typeof window === "undefined" ? "dark" : readStoredMode());
    const [accent, setAccentState] = (0, react_1.useState)(() => typeof window === "undefined" ? "green" : readStoredAccent());
    const [resolvedDark, setResolvedDark] = (0, react_1.useState)(() => resolveDark(mode));
    const [remoteAppearance, setRemoteAppearance] = (0, react_1.useState)(null);
    /** Ignore stale remote snapshots briefly after a local change. */
    const ignoreRemoteUntil = (0, react_1.useRef)(0);
    const modeRef = (0, react_1.useRef)(mode);
    const accentRef = (0, react_1.useRef)(accent);
    modeRef.current = mode;
    accentRef.current = accent;
    const onAppearanceChangeRef = (0, react_1.useRef)(onAppearanceChange);
    onAppearanceChangeRef.current = onAppearanceChange;
    const remoteTheme = remoteAppearance?.theme;
    const remoteAccent = remoteAppearance?.accent;
    const applyRemoteAppearance = (0, react_1.useCallback)((appearance) => {
        setRemoteAppearance(appearance);
    }, []);
    (0, react_1.useEffect)(() => {
        // Re-sync from storage once on mount (covers SSR → client).
        (0, react_1.startTransition)(() => {
            const nextMode = readStoredMode();
            const nextAccent = readStoredAccent();
            setModeState(nextMode);
            setAccentState(nextAccent);
            setResolvedDark(applyDocumentTheme(nextMode, nextAccent));
        });
    }, []);
    (0, react_1.useEffect)(() => {
        if (remoteTheme == null && remoteAccent == null)
            return;
        if (Date.now() < ignoreRemoteUntil.current)
            return;
        const currentMode = modeRef.current;
        const currentAccent = accentRef.current;
        let nextMode = currentMode;
        let nextAccent = currentAccent;
        let changed = false;
        if ((0, accents_1.isThemeMode)(remoteTheme) && remoteTheme !== currentMode) {
            nextMode = remoteTheme;
            window.localStorage.setItem(THEME_KEY, remoteTheme);
            changed = true;
        }
        if ((0, accents_1.isAccent)(remoteAccent) && remoteAccent !== currentAccent) {
            nextAccent = remoteAccent;
            window.localStorage.setItem(ACCENT_KEY, remoteAccent);
            changed = true;
        }
        if (!changed)
            return;
        (0, react_1.startTransition)(() => {
            setModeState(nextMode);
            setAccentState(nextAccent);
            setResolvedDark(applyDocumentTheme(nextMode, nextAccent));
        });
    }, [remoteTheme, remoteAccent]);
    (0, react_1.useEffect)(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const onChange = () => {
            if (mode !== "system")
                return;
            setResolvedDark(applyDocumentTheme(mode, accent));
        };
        setResolvedDark(applyDocumentTheme(mode, accent));
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, [mode, accent]);
    const setMode = (0, react_1.useCallback)((next) => {
        ignoreRemoteUntil.current = Date.now() + 2500;
        setModeState(next);
        window.localStorage.setItem(THEME_KEY, next);
        setResolvedDark(applyDocumentTheme(next, accent));
        onAppearanceChangeRef.current?.(next, accent);
    }, [accent]);
    const setAccent = (0, react_1.useCallback)((next) => {
        ignoreRemoteUntil.current = Date.now() + 2500;
        setAccentState(next);
        window.localStorage.setItem(ACCENT_KEY, next);
        setResolvedDark(applyDocumentTheme(mode, next));
        onAppearanceChangeRef.current?.(mode, next);
    }, [mode]);
    const value = (0, react_1.useMemo)(() => ({
        mode,
        accent,
        setMode,
        setAccent,
        resolvedDark,
        applyRemoteAppearance,
    }), [mode, accent, setMode, setAccent, resolvedDark, applyRemoteAppearance]);
    return ((0, jsx_runtime_1.jsx)(ThemeContext.Provider, { value: value, children: children }));
}
function useThemeSettings() {
    const ctx = (0, react_1.useContext)(ThemeContext);
    if (!ctx)
        throw new Error("useThemeSettings requires ThemeProvider");
    return ctx;
}
