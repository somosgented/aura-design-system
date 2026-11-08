# Aura Design System — DESIGN.md

This package publishes the Aura **DESIGN.md** and a gallery of **design flavors**: DESIGN.md files that adapt Aura to a new look (color seeds, type, radius, voice) over the same 13px grid and registry components. Copy a flavor's link, give it to the agent in an Aura project, and the agent applies it.

## Files

| Path | Description |
|------|-------------|
| `DESIGN.md` | Base Aura spec, synced to the registry and repo root by `packages/registry/scripts/sync-design-md.ts` |
| `designs/<slug>/DESIGN.md` | A flavor in the DESIGN.md alpha format: token frontmatter, `extends: ../../DESIGN.md`, and an `aura` block: `theme` seeds (light/dark accent, gray, background), `fonts` (`sans`, optional `display` and `label`, `href`), `radius`, optional `hero` (`field`, `paper` or `band`), `headingWeight` and extra `tokens` per appearance |
| `designs/<slug>/result.html` | Optional showcase for that flavor: an Aura app with the flavor's own composition and signature elements, built from the registry `main.css` plus its `theme.css`. The detail page uses it when present |
| `designs/<slug>/theme.css` | Generated Aura scales (light, dark, `.dark`), fonts and radius for that flavor |
| `designs/order.json` | Gallery order. Every flavor folder must be listed |
| `designs.json` | Generated manifest the gallery reads |
| `index.html` | Gallery: an Aura app preview per flavor, light/dark toggle, Copy link |
| `detail.html` | Flavor page at `/designs/<slug>/`: live result, rendered DESIGN.md, token swatches, Copy link |
| `result.html` | Fallback for flavors without their own showcase: a generic Aura app at `/result.html?design=<slug>&appearance=light\|dark`, built from the registry `main.css` plus the flavor's `theme.css` |

## Add a flavor

1. Create `designs/<slug>/DESIGN.md`. Copy the frontmatter shape and sections from `designs/sharpmint/DESIGN.md`, including **Apply to an Aura project**.
2. Add the slug to `designs/order.json`.
3. Run `pnpm --filter @aura/design-md generate`. It builds `theme.css` and `designs.json` with the registry's Radix scale generator. Commit both.
4. Preview the Cloud Run image: `docker build -f packages/design-md/Dockerfile -t aura-design-md .` from the repo root, then `docker run -p 3080:3000 aura-design-md` and open `http://localhost:3080`.

## How an agent uses a link

The `design-md` rule (`.agents/rules/design-md.mdc`, installed by `@aura/rule-design-md`) tells the agent to save the flavor as `DESIGN.theme.md`, append its `theme.css` to `globals.css`, and restyle with Aura components. The root `DESIGN.md` stays and keeps the grid, accessibility, icons and forms.

## Full documentation for LLMs

- Production: [https://auradesignsystem.com/llms-full.txt](https://auradesignsystem.com/llms-full.txt)
- Registry index: [https://auradesignsystem.com/all.txt](https://auradesignsystem.com/all.txt)

Initialize Aura in consuming apps with:

```bash
pnpm dlx @aura-design/cli@latest init
```
