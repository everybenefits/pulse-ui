#!/usr/bin/env node
/**
 * Copy Pulse registry UI items into an app (shadcn-style ownership).
 *
 * Reads built registry items from packages/ui/public/r/*.json (embedded content).
 *
 * Usage:
 *   node tooling/scripts/ui-add.mjs --app <name> [--all | button input ...]
 *   node tooling/scripts/ui-add.mjs --app all --all
 *
 * Env:
 *   PULSE_UI_APPS=comma,separated   (default: web,admin,payments,studio)
 *   PULSE_UI_REGISTRY_DIR=path      (default: packages/ui/public/r)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const APPS = (process.env.PULSE_UI_APPS || "web,admin,payments,studio")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const registryDir =
  process.env.PULSE_UI_REGISTRY_DIR ||
  path.join(root, "packages/ui/public/r");

function parseArgs(argv) {
  const out = { app: null, items: [], all: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--app") out.app = argv[++i];
    else if (a === "--all") out.all = true;
    else if (!a.startsWith("-")) out.items.push(a);
  }
  return out;
}

function rewriteImport(content) {
  return content
    .replaceAll('from "../lib/utils"', 'from "@/lib/utils"')
    .replaceAll("from '../lib/utils'", "from '@/lib/utils'");
}

function listRegistryNames() {
  const indexPath = path.join(registryDir, "registry.json");
  if (fs.existsSync(indexPath)) {
    const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
    if (Array.isArray(index.items)) {
      return index.items.map((i) => i.name);
    }
  }
  return fs
    .readdirSync(registryDir)
    .filter((f) => f.endsWith(".json") && f !== "registry.json")
    .map((f) => f.replace(/\.json$/, ""));
}

function loadItem(name) {
  const file = path.join(registryDir, `${name}.json`);
  if (!fs.existsSync(file)) {
    throw new Error(`Missing registry item: ${file}`);
  }
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function copyItem(item, appName) {
  const appRoot = path.join(root, "apps", appName);
  for (const file of item.files || []) {
    if (!file.content || !file.target) {
      console.warn(`  ! skip ${file.path || "?"} (no content/target)`);
      continue;
    }
    const dest = path.join(appRoot, file.target);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    let content = file.content;
    if (file.target.startsWith("components/ui/")) {
      content = rewriteImport(content);
    }
    fs.writeFileSync(dest, content);
    console.log(`  + ${appName}/${file.target}`);
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.app) {
    console.error(
      `Usage: ui-add.mjs --app <${APPS.join("|")}|all> [--all | item...]`,
    );
    process.exit(1);
  }
  if (!fs.existsSync(registryDir)) {
    console.error(`Registry dir not found: ${registryDir}`);
    process.exit(1);
  }
  const available = listRegistryNames();
  const names = args.all ? available : args.items;
  if (!names.length) {
    console.error("Pass --all or one or more item names.");
    process.exit(1);
  }
  for (const name of names) {
    if (!available.includes(name)) {
      console.error(`Unknown registry item: ${name}`);
      process.exit(1);
    }
  }
  const apps = args.app === "all" ? APPS : [args.app];
  for (const app of apps) {
    if (!APPS.includes(app)) {
      console.error(`Unknown app: ${app}`);
      process.exit(1);
    }
    console.log(`\n→ ${app}`);
    for (const name of names) {
      copyItem(loadItem(name), app);
    }
  }
  console.log("\nDone.");
}

main();
