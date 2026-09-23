import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ACCENTS,
  useThemeSettings,
  type AccentSeed,
  type ThemeMode,
} from "../src/theme";
import { Button, Panel } from "../src";

function ThemePlayground() {
  const { mode, accent, setMode, setAccent, resolvedDark } = useThemeSettings();
  const modes: ThemeMode[] = ["light", "dark", "system"];
  const accents = Object.keys(ACCENTS) as AccentSeed[];

  return (
    <Panel className="max-w-lg space-y-4">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink">
          Theme playground
        </h2>
        <p className="mt-1 text-sm text-muted">
          Mode: <span className="text-ink">{mode}</span> · Resolved:{" "}
          <span className="text-ink">{resolvedDark ? "dark" : "light"}</span> ·
          Accent: <span className="text-brand font-semibold">{accent}</span>
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          Mode
        </p>
        <div className="flex flex-wrap gap-2">
          {modes.map((value) => (
            <Button
              key={value}
              size="sm"
              variant={mode === value ? "primary" : "secondary"}
              onClick={() => setMode(value)}
            >
              {value}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          Accent
        </p>
        <div className="flex flex-wrap gap-2">
          {accents.map((value) => (
            <Button
              key={value}
              size="sm"
              variant={accent === value ? "primary" : "secondary"}
              onClick={() => setAccent(value)}
              style={
                accent === value
                  ? undefined
                  : { borderColor: ACCENTS[value], borderWidth: 1 }
              }
            >
              {value}
            </Button>
          ))}
        </div>
      </div>
    </Panel>
  );
}

const meta = {
  title: "Theme/Playground",
  component: ThemePlayground,
} satisfies Meta<typeof ThemePlayground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
