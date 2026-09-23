# Pulse UI

Design system + shadcn-compatible registry for product teams.

## Packages

| Package | Description |
|---------|-------------|
| [`@pulse/ui`](./packages/ui) | Tokens, theme, React primitives, and registry JSON |
| [`@pulse/www`](./apps/www) | Commercial landing (Next.js) |

## Quick start

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

Sync owned components into your app:

```bash
npx shadcn@latest add @pulse/button
```

Point `components.json` at the hosted registry (`/r/{name}.json`) or use JSON under `node_modules/@pulse/ui/public/r`.

## Develop

```bash
pnpm install
pnpm dev              # landing on :3100
pnpm storybook        # design system docs
pnpm typecheck
pnpm ui:build         # rebuild registry → packages/ui/public/r
```

## Publish

Tag a release to publish `@pulse/ui` to npm:

```bash
git tag v1.0.0
git push origin v1.0.0
```

## License

MIT
