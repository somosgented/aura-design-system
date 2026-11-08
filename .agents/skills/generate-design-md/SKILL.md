---
name: generate-design-md
description: >-
  Generates an Aura DESIGN.md flavor: a theme over Aura that changes color seeds, type,
  radius, shape, motion and voice while keeping the 13px grid, components, icons, forms
  and accessibility. Use when the user pastes a DESIGN.md (flavors.design, Google Stitch
  or similar), a site URL, a screenshot or a brand brief and asks to "make a design md",
  "adapt this design to Aura", "create a flavor", or "add it to the design-md gallery".
  Not for applying an existing flavor link to a project; the design-md rule covers that.
---

# Generate a DESIGN.md flavor

A flavor is a `DESIGN.md` in the DESIGN.md alpha format whose frontmatter has `extends` (the Aura base spec) and an `aura` block. A generator turns the `aura` block into `theme.css` (12-step accent and gray scales for light and dark, fonts, radius, extra tokens). The narrative tells an agent how to express the source's personality with Aura components and tokens.

The goal is the source's **personality on Aura's structure**, not a copy of the source. Keep its signature moves; express each one through Aura tokens, classes and components.

## Detect scenario first

| Signal | Scenario |
| --- | --- |
| Repo has `packages/design-md/designs/` and `packages/design-md/scripts/generate-designs.ts` (the Aura monorepo) | **A — Gallery flavor** |
| Otherwise (an app with `components.json` and the `@aura` registry) | **B — Project flavor** |

If unclear, ask once: "Should this flavor go to the Aura DESIGN.md gallery, or only to this project?"

## 1. Read the source

Collect, from the pasted DESIGN.md, the site, the screenshot or the brief:

1. **Palette with roles**: background, surface, ink, muted ink, accent, accent text, border, and every extra brand color with where it is allowed.
2. **Type**: display, body and label faces, weights, tracking, case rules, the Google Fonts URL.
3. **Grid**: base unit, section rhythm, max width, gutters.
4. **Shape and depth**: radii, borders, shadows or their absence, textures (grain, grids, gradients).
5. **Signature elements**: the three to six things that make it recognisable (scalloped bands, split-cell buttons, floating tiles, ink-gutter grids).
6. **Voice and motion**: tone of copy, what animates and what never does.
7. **Don'ts**.

If the source gives no dark scheme, plan one in step 3. Never ship a flavor without dark mode.

## 2. Write the frontmatter

Follow [reference/format.md](./reference/format.md) exactly. The `aura` block is what the generator reads:

- `theme.light` / `theme.dark`: `accent`, `gray` (a mid-tone seed, never the darkest ink) and `background` hex seeds.
- `fonts`: `sans`, optional `display` and `label`, and one `href` loading all of them.
- `hero`: `field`, `paper` or `band`. `headingWeight`: the display weight.
- `radius`: `button`, `input`, `surface`.
- `tokens.light` / `tokens.dark`: extra colors as kebab-case names (`candy-coral`, `pigment-sage`, `cobalt`). Same names in both appearances.

## 3. Map the source onto Aura

Use [reference/mapping.md](./reference/mapping.md):

- Convert every spacing value to the 13px grid in half steps and write the table.
- Map every color role to an Aura step or a custom token.
- Map every element to an Aura registry component plus token classes.
- Reinterpret dark mode through semantic variables instead of inverting.

## 4. Write the narrative

Sections in this order: title and one-line pitch, `Source flavor` link, **Apply to an Aura project** (the six numbered steps from the template), Overview, Colors (with a **Dark mode** subsection), Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts, Motion, Reference (one short TSX example).

Rules for the narrative:

- Every value is a token, a class on the 13px grid, or a custom token from frontmatter. No new hex in Components or Reference.
- Name real Aura components (`Button`, `ButtonGroup`, `Card`, `Stat`, `Table`, `Accordion`, `Badge`, `Input`, `Empty`, `Marquee`, `NavigationMenu`).
- Say what the flavor deliberately overrides in Aura (for example 0px radius) so the agent does not "fix" it.
- Do not copy the source's full HTML, its brand names into product copy, or its fictional product claims.

## 5A. Gallery flavor (monorepo)

1. Create `packages/design-md/designs/<slug>/DESIGN.md`.
2. Add the slug to `packages/design-md/designs/order.json`.
3. Run `pnpm --filter @aura/design-md generate`. Commit the generated `theme.css` and `designs.json`; never hand-edit them.
4. Build `packages/design-md/designs/<slug>/result.html`, the showcase. Follow **Showcase page** in [reference/mapping.md](./reference/mapping.md): `/aura/main.css` plus `theme.css`, Aura classes, the shared section skeleton, the flavor's signature elements, and a `.dark` block for its semantic variables.
5. Preview the Cloud Run image from the repo root: `docker build -f packages/design-md/Dockerfile -t aura-design-md .` then `docker run -p 3080:3000 aura-design-md`. Check `/`, `/designs/<slug>/` and the result in light, dark, at 360px and with reduced motion.
6. At PR time, run skill `update-feature-map` for the Design-MD note.

## 5B. Project flavor (consumer app)

1. Write the flavor to `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md`.
2. Generate the scales with Aura's generator. If `utils/custom-color-functions.ts` is missing, add it: `pnpm dlx shadcn@latest add @aura/custom-color-functions`. Call `generateRadixColors({ appearance, accent, gray, background })` once per appearance from a throwaway script outside the repo, and write the `:root`, `@media (prefers-color-scheme: dark) { :root:not(.light) }` and `.dark` blocks after the existing ones in `globals.css`. Include the frontmatter `tokens`, `--aura-button-radius`, `--aura-input-radius`, `--aura-radius`, `--aura-font-stack`, `--aura-font-display` and `--aura-font-label`.
3. Load the fonts with `next/font` when the app uses it.
4. Restyle with Aura components following the flavor's Components section.
5. Run skill `verify-aura-ui`.

## Checklist

- [ ] Frontmatter parses and has `extends`, `aura.theme.light`, `aura.theme.dark`, `fonts`, `radius`.
- [ ] Gray seeds are mid-tones; accent seeds are the brand color, not the ink.
- [ ] Spacing table converts every source value to the 13px grid.
- [ ] Every color role maps to a step or a custom token, and the dark column exists.
- [ ] Components name real Aura components with token classes only.
- [ ] Do's and Don'ts keep the source's limits.
- [ ] Gallery only: `theme.css`, `designs.json` and `result.html` exist and render in light and dark.
