# Design md

**Agent- and human-readable design specification** for Aura: one narrative `DESIGN.md`, static previews, and a small build step for deployable HTML.

## Path / npm name

- **Folder:** `packages/design-md`
- **Package:** `@aura/design-md` (`packages/design-md/package.json`)

## What it does

`DESIGN.md` encodes tokens, typography, spacing (13px grid), color roles, motion, and product principles so tools and contributors stay aligned. **Previews** (`preview.html`, `preview-dark.html`) show scales and UI patterns in the browser. The registry and CLI distribute this content as the **`@aura/design-md`** registry item; see `packages/design-md/README.md`. Cloud Run serves the prepared `public/` directory with the same `/dark` rewrite and markdown content type as `vercel.json`. See [[Cloud Run]].

## Key commands or entrypoints

- **`pnpm build`** (in `packages/design-md`) — `node scripts/prepare-public.cjs` prepares static public output (used for deployment / previews).

## Important paths

- `packages/design-md/DESIGN.md` — Canonical spec body.
- `packages/design-md/preview.html`, `preview-dark.html` — Light/dark galleries.
- `packages/design-md/scripts/prepare-public.cjs` — Build script.
- `packages/design-md/Dockerfile` — Cloud Run image; nginx listens on port 3000.
- `packages/design-md/public/` — Prepared static assets (gitignored; produced at build time).

## Related

- [[Registry]] — `sync:design-md` copies this into the registry bundle.
- [[CLI]] — `aura init` installs `@aura/design-md` into consumer apps.
- [[Site and docs app]] — Public `llms-full.txt` and handbook complement this file for LLMs.
- [[Packages and docs app]]
- [[Local development]]
