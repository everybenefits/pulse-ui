export type ThemeMode = "system" | "light" | "dark";

export type AccentSeed =
  | "green"
  | "amber"
  | "teal"
  | "blue"
  | "violet"
  | "rose";

export const ACCENTS: Record<AccentSeed, string> = {
  green: "#1F6B4A",
  amber: "#F5A524",
  teal: "#0D9488",
  blue: "#2563EB",
  violet: "#7C3AED",
  rose: "#E11D48",
};

export const ACCENT_IDS = new Set<string>(Object.keys(ACCENTS));

export function isThemeMode(
  value: string | null | undefined,
): value is ThemeMode {
  return value === "system" || value === "light" || value === "dark";
}

export function isAccent(
  value: string | null | undefined,
): value is AccentSeed {
  return typeof value === "string" && ACCENT_IDS.has(value);
}
