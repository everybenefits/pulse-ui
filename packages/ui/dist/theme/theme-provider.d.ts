import { type ReactNode } from "react";
import { type AccentSeed, type ThemeMode } from "./accents";
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
/** Apply theme to <html> immediately (do not wait for React effects). */
export declare function applyDocumentTheme(mode: ThemeMode, accent: AccentSeed): boolean;
export type ThemeProviderProps = {
    children: ReactNode;
    /**
     * Optional persistence hook (e.g. Firestore). Called after local mode/accent
     * changes. Keep Firebase and app paths out of this package.
     */
    onAppearanceChange?: (mode: ThemeMode, accent: AccentSeed) => void;
};
export declare function ThemeProvider({ children, onAppearanceChange, }: ThemeProviderProps): import("react").JSX.Element;
export declare function useThemeSettings(): ThemeContextValue;
export {};
//# sourceMappingURL=theme-provider.d.ts.map