# `@pulse/ui`

Pulse UI design system — **shadcn-style registry source**, shared theme runtime, and CSS tokens.

## Install

```bash
pnpm add @pulse/ui
```

```css
@import "tailwindcss";
@import "@pulse/ui/tokens.css";
```

```tsx
import { ThemeProvider } from "@pulse/ui/theme";
```

Apps typically **own copies** of primitives under `components/ui` synced from the registry; keep `tokens.css` and `theme` as package imports.

## Scripts

- `pnpm build` — compile to `dist/`
- `pnpm registry:build` — build `public/r/*.json`
- `pnpm storybook` — local docs on port 6006
