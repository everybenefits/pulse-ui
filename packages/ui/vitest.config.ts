import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const STORYBOOK_OPTIMIZE_DEPS = [
  "storybook/test",
  "storybook/preview-api",
  "react",
  "react/jsx-dev-runtime",
  "react/jsx-runtime",
  "react-dom",
  "react-dom/client",
  "motion/react",
  "@tanstack/react-table",
] as const;

export default defineConfig({
  resolve: {
    alias: {
      "@pulse/ui": path.resolve(dirname, "src/index.ts"),
    },
  },
  optimizeDeps: {
    include: [...STORYBOOK_OPTIMIZE_DEPS],
  },
  test: {
    projects: [
      {
        extends: true,
        optimizeDeps: {
          include: [...STORYBOOK_OPTIMIZE_DEPS],
        },
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
            storybookScript: "pnpm storybook --no-open",
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
