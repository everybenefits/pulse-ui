"use client";

import {
  Badge,
  Button,
  DataTable,
  Input,
  Panel,
  SearchInput,
  StatusBadge,
} from "@pulse/ui";
import { ACCENTS, useThemeSettings, type AccentSeed } from "@pulse/ui/theme";
import { motion } from "motion/react";
import { useMemo, useState, type ReactNode } from "react";
import type { ColumnDef } from "@tanstack/react-table";

const NPM = "pnpm add @pulse/ui";
const REGISTRY_URL =
  typeof window !== "undefined"
    ? `${window.location.origin}/r/{name}.json`
    : "https://ui.pulse.app/r/{name}.json";

const DOCS =
  process.env.NEXT_PUBLIC_STORYBOOK_URL ?? "https://ui.pulse.app/storybook";
const GITHUB =
  process.env.NEXT_PUBLIC_GITHUB_URL ??
  "https://github.com/everybenefits/pulse-ui";
const NPM_URL = "https://www.npmjs.com/package/@pulse/ui";

type DemoRow = {
  id: string;
  name: string;
  role: string;
  status: "active" | "pending" | "paused";
};

const DEMO_ROWS: DemoRow[] = [
  { id: "1", name: "Maya Chen", role: "Admin", status: "active" },
  { id: "2", name: "Jordan Lee", role: "Editor", status: "pending" },
  { id: "3", name: "Sam Ortiz", role: "Viewer", status: "paused" },
];

function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-10">
      <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
        Pulse UI
      </a>
      <nav className="flex items-center gap-2 sm:gap-3">
        <a
          href={DOCS}
          className="hidden text-sm font-medium text-muted hover:text-ink sm:inline"
        >
          Docs
        </a>
        <a
          href={GITHUB}
          className="hidden text-sm font-medium text-muted hover:text-ink sm:inline"
        >
          GitHub
        </a>
        <a href="#install">
          <Button size="sm">Get started</Button>
        </a>
      </nav>
    </header>
  );
}

function HeroCanvas() {
  const columns = useMemo<ColumnDef<DemoRow, unknown>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
          <span className="font-medium text-ink">{row.original.name}</span>
        ),
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => (
          <span className="text-muted">{row.original.role}</span>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
          <StatusBadge
            tone={
              row.original.status === "active"
                ? "success"
                : row.original.status === "pending"
                  ? "warning"
                  : "neutral"
            }
          >
            {row.original.status}
          </StatusBadge>
        ),
      },
    ],
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-8 top-28 w-[min(92vw,520px)] animate-float opacity-95 md:right-8 md:top-24 lg:right-16">
        <div className="relative">
          <div className="animate-pulse-ring absolute -inset-6 rounded-[28px] border border-brand/30" />
          <Panel className="pointer-events-auto shadow-[0_24px_60px_rgba(12,13,16,0.12)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Live canvas
                </p>
                <p className="font-display text-base font-semibold text-ink">
                  Components on tokens
                </p>
              </div>
              <Badge>@pulse/ui</Badge>
            </div>
            <div className="mb-3 flex flex-wrap gap-2">
              <Button size="sm">Primary</Button>
              <Button size="sm" variant="secondary">
                Secondary
              </Button>
              <Button size="sm" variant="ghost">
                Ghost
              </Button>
            </div>
            <SearchInput
              placeholder="Search members…"
              className="mb-3"
              readOnly
              defaultValue=""
            />
            <DataTable
              columns={columns}
              data={DEMO_ROWS}
              pageSize={3}
              emptyMessage="No members"
            />
          </Panel>
        </div>
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  lead,
  children,
}: {
  id: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted md:text-lg">{lead}</p>
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-[var(--glass-border)] bg-[var(--mesh-deep)] p-4 text-sm leading-relaxed text-ink">
      <code>{children}</code>
    </pre>
  );
}

function ThemeDemo() {
  const { mode, setMode, accent, setAccent } = useThemeSettings();
  const accents = Object.keys(ACCENTS) as AccentSeed[];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {(["light", "dark", "system"] as const).map((m) => (
          <Button
            key={m}
            size="sm"
            variant={mode === m ? "primary" : "secondary"}
            onClick={() => setMode(m)}
          >
            {m}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {accents.map((id) => (
          <button
            key={id}
            type="button"
            aria-label={`Accent ${id}`}
            onClick={() => setAccent(id)}
            className={`h-10 w-10 rounded-full border-2 transition ${
              accent === id
                ? "border-ink scale-110"
                : "border-transparent opacity-80 hover:opacity-100"
            }`}
            style={{ background: ACCENTS[id] }}
          />
        ))}
      </div>
      <Panel className="max-w-md">
        <p className="text-sm text-muted">Preview</p>
        <p className="mt-1 font-display text-xl font-semibold text-ink">
          Brand accent drives --brand
        </p>
        <div className="mt-4 flex gap-2">
          <Button size="sm">Save</Button>
          <Button size="sm" variant="secondary">
            Cancel
          </Button>
        </div>
      </Panel>
    </div>
  );
}

function CatalogGrid() {
  const [q, setQ] = useState("");
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Panel>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
          Button
        </p>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">Primary</Button>
          <Button size="sm" variant="danger">
            Danger
          </Button>
        </div>
      </Panel>
      <Panel>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
          Input
        </p>
        <Input placeholder="Email" defaultValue="" />
      </Panel>
      <Panel>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
          Search
        </p>
        <SearchInput
          placeholder="Filter…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {q ? (
          <p className="mt-2 text-xs text-muted">Filtering “{q}”</p>
        ) : null}
      </Panel>
      <Panel>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
          Badges
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <StatusBadge tone="success">Live</StatusBadge>
          <StatusBadge tone="warning">Review</StatusBadge>
        </div>
      </Panel>
      <Panel className="sm:col-span-2">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
          Panel + actions
        </p>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-display font-semibold text-ink">Workspace sheet</p>
            <p className="text-sm text-muted">
              Matte surfaces from tokens — no frosted blur.
            </p>
          </div>
          <Button size="sm" variant="secondary">
            Open
          </Button>
        </div>
      </Panel>
    </div>
  );
}

export function LandingPage() {
  const registrySnippet = `npx shadcn@latest add @pulse/button
# registry: ${REGISTRY_URL.replace("{name}", "button")}`;

  return (
    <div id="top" className="min-h-screen bg-[var(--mesh-base)] text-ink">
      {/* Hero — one composition */}
      <section className="relative min-h-[100svh] mesh-bg overflow-hidden">
        <SiteNav />
        <HeroCanvas />
        <div className="relative z-10 flex min-h-[100svh] max-w-xl flex-col justify-center px-6 pb-24 pt-28 md:px-10 lg:max-w-2xl">
          <p className="animate-fade-up font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
            Pulse UI
          </p>
          <h1 className="animate-fade-up-delay mt-5 max-w-lg font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
            Design system + shadcn registry for product teams
          </h1>
          <p className="animate-fade-up-delay-2 mt-4 max-w-md text-base text-muted sm:text-lg">
            Tokens, theme, and owned component copies — ship consistent React
            surfaces without fighting a remote UI kit.
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <a href="#install">
              <Button>pnpm add @pulse/ui</Button>
            </a>
            <a href={DOCS} target="_blank" rel="noreferrer">
              <Button variant="secondary">Open docs</Button>
            </a>
            <a href={DOCS} target="_blank" rel="noreferrer">
              <Button variant="ghost">View Storybook</Button>
            </a>
          </div>
        </div>
      </section>

      <Section
        id="install"
        title="Install"
        lead="Add the package for theme and tokens. Sync primitives into your app with the registry."
      >
        <CodeBlock>{`${NPM}

# globals.css
@import "tailwindcss";
@import "@pulse/ui/tokens.css";

# layout
import { ThemeProvider } from "@pulse/ui/theme";`}</CodeBlock>
      </Section>

      <div className="border-y border-[var(--glass-border)] bg-[var(--mesh-deep)]/40">
        <Section
          id="registry"
          title="Registry"
          lead="Pull Button, DataTable, Panel, and more as local copies — you own the source."
        >
          <CodeBlock>{registrySnippet}</CodeBlock>
          <p className="mt-4 text-sm text-muted">
            Point{" "}
            <code className="rounded bg-[var(--mesh-deep)] px-1.5 py-0.5 text-ink">
              components.json
            </code>{" "}
            registries at{" "}
            <code className="rounded bg-[var(--mesh-deep)] px-1.5 py-0.5 text-ink">
              /r/&#123;name&#125;.json
            </code>{" "}
            on this site, or consume JSON shipped in the npm package under{" "}
            <code className="rounded bg-[var(--mesh-deep)] px-1.5 py-0.5 text-ink">
              public/r
            </code>
            .
          </p>
        </Section>
      </div>

      <Section
        id="theming"
        title="Theming"
        lead="Light, dark, and system mode with interactive accent seeds that rewrite --brand."
      >
        <ThemeDemo />
      </Section>

      <div className="border-y border-[var(--glass-border)] bg-[var(--mesh-deep)]/40">
        <Section
          id="catalog"
          title="Component catalog"
          lead="Primitives built for dense product UI — tables, drawers, alerts, and chrome-ready sheets."
        >
          <CatalogGrid />
        </Section>
      </div>

      <Section
        id="production"
        title="Used in production"
        lead="Built for Pulse — the Every Benefits suite runs on these tokens across web, admin, studio, and payments."
      >
        <Panel className="max-w-2xl">
          <p className="font-display text-xl font-semibold text-ink">Pulse</p>
          <p className="mt-2 text-muted">
            One design language across member and operator apps. Pulse UI is the
            extracted design system behind that stack — now available as{" "}
            <code className="text-ink">@pulse/ui</code>.
          </p>
        </Panel>
      </Section>

      <footer className="mesh-bg border-t border-[var(--glass-border)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Pulse UI
          </p>
          <p className="mt-3 max-w-md text-muted">
            Ship product UI with tokens, theme, and a shadcn registry your team
            can own.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={NPM_URL} target="_blank" rel="noreferrer">
              <Button>npm</Button>
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              <Button variant="secondary">GitHub</Button>
            </a>
            <a href={DOCS} target="_blank" rel="noreferrer">
              <Button variant="ghost">Storybook</Button>
            </a>
          </div>
          <p className="mt-12 text-xs text-muted">
            © {new Date().getFullYear()} Pulse UI · MIT
          </p>
        </div>
      </footer>
    </div>
  );
}
