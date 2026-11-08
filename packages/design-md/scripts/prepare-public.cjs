#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const out = path.join(root, "public");
const files = [
  "DESIGN.md",
  "index.html",
  "detail.html",
  "result.html",
  "designs.json",
  "aura-mark.png",
  "favicon.ico",
  "favicon.svg",
  "apple-touch-icon.png",
];

function requireSource(src) {
  if (!fs.existsSync(src)) {
    console.error(`[design-md] Missing required file: ${src}`);
    process.exit(1);
  }
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const name of files) {
  const src = path.join(root, name);
  requireSource(src);
  fs.copyFileSync(src, path.join(out, name));
}

const auraStyles = path.join(root, "..", "registry", "registry", "default", "styles");
fs.mkdirSync(path.join(out, "aura"), { recursive: true });
for (const name of ["main.css", "overlay.css"]) {
  const src = path.join(auraStyles, name);
  requireSource(src);
  fs.copyFileSync(src, path.join(out, "aura", name));
}

const { designs } = JSON.parse(fs.readFileSync(path.join(root, "designs.json"), "utf8"));
for (const design of designs) {
  for (const file of [design.design, design.theme, design.result].filter(Boolean)) {
    const src = path.join(root, file);
    requireSource(src);
    fs.mkdirSync(path.dirname(path.join(out, file)), { recursive: true });
    fs.copyFileSync(src, path.join(out, file));
  }
}
console.log(`[design-md] Prepared public/ with ${designs.length} designs.`);
