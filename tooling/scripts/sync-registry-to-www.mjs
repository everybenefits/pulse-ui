#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const src = path.join(root, "packages/ui/public/r");
const dest = path.join(root, "apps/www/public/r");

if (!fs.existsSync(src)) {
  console.error(`Missing ${src} — run registry:build first`);
  process.exit(1);
}

fs.mkdirSync(dest, { recursive: true });
for (const name of fs.readdirSync(src)) {
  fs.copyFileSync(path.join(src, name), path.join(dest, name));
}
console.log(`Synced registry → apps/www/public/r (${fs.readdirSync(dest).length} files)`);
