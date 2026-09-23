"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  ACCENTS,
  isAccent,
  isThemeMode,
  type AccentSeed,
  type ThemeMode,
} from "./accents";

const THEME_KEY = "pulse-theme";
const ACCENT_KEY = "pulse-accent";

export type RemoteAppearance = {
  theme?: string | null;
  accent?: string | null;
} | null;

type ThemeContextValue = {
  mode: ThemeMode;
  accent: AccentSeed;
  setMode: (mode: ThemeMode) => void;
  setAccent: (accent: AccentSeed) => void;
  resolvedDark: boolean;
  /** Sync remote profile appearance into the root ThemeProvider. */
  applyRemoteAppearance: (appearance: RemoteAppearance) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredMode(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  const raw = window.localStorage.getItem(THEME_KEY);
  return isThemeMode(raw) ? raw : "dark";
}

function readStoredAccent(): AccentSeed {
  if (typeof window === "undefined") return "green";
  const raw = window.localStorage.getItem(ACCENT_KEY);
  return isAccent(raw) ? raw : "green";
}

function resolveDark(mode: ThemeMode): boolean {
  if (mode === "dark") return true;
  if (mode === "light") return false;
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/** Apply theme to <html> immediately (do not wait for React effects). */
export function applyDocumentTheme(
  mode: ThemeMode,
  accent: AccentSeed,
): boolean {
  if (typeof document === "undefined") return mode !== "light";
  const dark = resolveDark(mode);
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.setProperty("--brand", ACCENTS[accent]);
  return dark;
}

export type ThemeProviderProps = {
  children: ReactNode;
  /**
   * Optional persistence hook (e.g. Firestore). Called after local mode/accent
   * changes. Keep Firebase and app paths out of this package.
   */
  onAppearanceChange?: (mode: ThemeMode, accent: AccentSeed) => void;
};

export function ThemeProvider({
  children,
  onAppearanceChange,
}: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(() =>
    typeof window === "undefined" ? "dark" : readStoredMode(),
  );
  const [accent, setAccentState] = useState<AccentSeed>(() =>
    typeof window === "undefined" ? "green" : readStoredAccent(),
  );
  const [resolvedDark, setResolvedDark] = useState(() => resolveDark(mode));
  const [remoteAppearance, setRemoteAppearance] =
    useState<RemoteAppearance>(null);
  /** Ignore stale remote snapshots briefly after a local change. */
  const ignoreRemoteUntil = useRef(0);
  const modeRef = useRef(mode);
  const accentRef = useRef(accent);
  modeRef.current = mode;
  accentRef.current = accent;
  const onAppearanceChangeRef = useRef(onAppearanceChange);
  onAppearanceChangeRef.current = onAppearanceChange;
  const remoteTheme = remoteAppearance?.theme;
  const remoteAccent = remoteAppearance?.accent;

  const applyRemoteAppearance = useCallback((appearance: RemoteAppearance) => {
    setRemoteAppearance(appearance);
  }, []);

  useEffect(() => {
    // Re-sync from storage once on mount (covers SSR → client).
    startTransition(() => {
      const nextMode = readStoredMode();
      const nextAccent = readStoredAccent();
      setModeState(nextMode);
      setAccentState(nextAccent);
      setResolvedDark(applyDocumentTheme(nextMode, nextAccent));
    });
  }, []);

  useEffect(() => {
    if (remoteTheme == null && remoteAccent == null) return;
    if (Date.now() < ignoreRemoteUntil.current) return;

    const currentMode = modeRef.current;
    const currentAccent = accentRef.current;
    let nextMode = currentMode;
    let nextAccent = currentAccent;
    let changed = false;

    if (isThemeMode(remoteTheme) && remoteTheme !== currentMode) {
      nextMode = remoteTheme;
      window.localStorage.setItem(THEME_KEY, remoteTheme);
      changed = true;
    }
    if (isAccent(remoteAccent) && remoteAccent !== currentAccent) {
      nextAccent = remoteAccent;
      window.localStorage.setItem(ACCENT_KEY, remoteAccent);
      changed = true;
    }
    if (!changed) return;

    startTransition(() => {
      setModeState(nextMode);
      setAccentState(nextAccent);
      setResolvedDark(applyDocumentTheme(nextMode, nextAccent));
    });
  }, [remoteTheme, remoteAccent]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (mode !== "system") return;
      setResolvedDark(applyDocumentTheme(mode, accent));
    };
    setResolvedDark(applyDocumentTheme(mode, accent));
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [mode, accent]);

  const setMode = useCallback(
    (next: ThemeMode) => {
      ignoreRemoteUntil.current = Date.now() + 2500;
      setModeState(next);
      window.localStorage.setItem(THEME_KEY, next);
      setResolvedDark(applyDocumentTheme(next, accent));
      onAppearanceChangeRef.current?.(next, accent);
    },
    [accent],
  );

  const setAccent = useCallback(
    (next: AccentSeed) => {
      ignoreRemoteUntil.current = Date.now() + 2500;
      setAccentState(next);
      window.localStorage.setItem(ACCENT_KEY, next);
      setResolvedDark(applyDocumentTheme(mode, next));
      onAppearanceChangeRef.current?.(mode, next);
    },
    [mode],
  );

  const value = useMemo(
    () => ({
      mode,
      accent,
      setMode,
      setAccent,
      resolvedDark,
      applyRemoteAppearance,
    }),
    [mode, accent, setMode, setAccent, resolvedDark, applyRemoteAppearance],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeSettings() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeSettings requires ThemeProvider");
  return ctx;
}
