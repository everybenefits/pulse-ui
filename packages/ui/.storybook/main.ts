// ESM-only Storybook 10 config (design system only).
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { defineMain } from "@storybook/react-vite/node";
import { mergeConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

export default defineMain({
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@storybook/addon-mcp"),
  ],
  docs: {
    defaultName: "Docs",
  },
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tailwindcss()],
      optimizeDeps: {
        include: [
          "storybook/test",
          "storybook/preview-api",
          "react",
          "react/jsx-dev-runtime",
          "react/jsx-runtime",
          "react-dom",
          "react-dom/client",
          "motion/react",
          "@tanstack/react-table",
        ],
      },
      resolve: {
        alias: {
          "@pulse/ui": resolve(__dirname, "../src/index.ts"),
        },
      },
    });
  },
});
