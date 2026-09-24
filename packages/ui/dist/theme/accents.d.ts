export type ThemeMode = "system" | "light" | "dark";
export type AccentSeed = "green" | "amber" | "teal" | "blue" | "violet" | "rose";
export declare const ACCENTS: Record<AccentSeed, string>;
export declare const ACCENT_IDS: Set<string>;
export declare function isThemeMode(value: string | null | undefined): value is ThemeMode;
export declare function isAccent(value: string | null | undefined): value is AccentSeed;
//# sourceMappingURL=accents.d.ts.map