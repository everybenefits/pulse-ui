import { useEffect, type ReactNode } from "react";
import type { Decorator, Preview } from "@storybook/react-vite";
import {
  ThemeProvider,
  useThemeSettings,
  type AccentSeed,
  type ThemeMode,
} from "../src/index";
import "./preview.css";

const ACCENT_OPTIONS: AccentSeed[] = [
  "green",
  "amber",
  "teal",
  "blue",
  "violet",
  "rose",
];

function ThemeGlobalsSync({
  mode,
  accent,
  children,
}: {
  mode: ThemeMode;
  accent: AccentSeed;
  children: ReactNode;
}) {
  const { setMode, setAccent, mode: currentMode, accent: currentAccent } =
    useThemeSettings();

  useEffect(() => {
    if (currentMode !== mode) setMode(mode);
    if (currentAccent !== accent) setAccent(accent);
  }, [mode, accent, currentMode, currentAccent, setMode, setAccent]);

  return children;
}

const withTheme: Decorator = (Story, context) => {
  const mode = (context.globals.themeMode as ThemeMode) || "dark";
  const accent = (context.globals.accent as AccentSeed) || "green";

  return (
    <ThemeProvider>
      <ThemeGlobalsSync mode={mode} accent={accent}>
        <div className="mesh-bg min-h-[40vh] p-6">
          <Story />
        </div>
      </ThemeGlobalsSync>
    </ThemeProvider>
  );
};

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
      expanded: true,
      sort: "requiredFirst",
    },
    a11y: {
      // Surface violations in the panel without failing every story by default.
      test: "todo",
    },
    layout: "padded",
  },
  globalTypes: {
    themeMode: {
      name: "Theme",
      description: "Color mode",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
          { value: "system", title: "System" },
        ],
        dynamicTitle: true,
      },
    },
    accent: {
      name: "Accent",
      description: "Brand accent",
      toolbar: {
        icon: "paintbrush",
        items: ACCENT_OPTIONS.map((value) => ({
          value,
          title: value.charAt(0).toUpperCase() + value.slice(1),
        })),
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    themeMode: "dark",
    accent: "green",
  },
  decorators: [withTheme],
};

export default preview;
