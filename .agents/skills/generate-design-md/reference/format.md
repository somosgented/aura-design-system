# Flavor DESIGN.md format

The DESIGN.md alpha format: YAML frontmatter with design tokens, then markdown sections. Aura adds `extends` and the `aura` block.

## Frontmatter

```yaml
---
version: "alpha"
name: "Flavor Name"
description: "One sentence: the look, then what it is for. Ends with a full stop."
extends: "../../DESIGN.md"
colors:
  primary: "#3139fb"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#fffcec"
  on-surface: "#000000"
  on-surface-variant: "#696969"
  outline: "#dcdefe"
typography:
  headline-display:
    fontFamily: "Gabarito"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: -0.04em
  body-md:
    fontFamily: "Inter"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Space Mono"
    fontSize: 12px
    fontWeight: 700
    letterSpacing: 0.12em
rounded:
  md: 10px
  full: 9999px
spacing:
  unit: 13px
  section: 143px
  max-width: 1280.5px
aura:
  theme:
    light:
      accent: "#3139fb"
      gray: "#696969"
      background: "#ffffff"
    dark:
      accent: "#5b62ff"
      gray: "#6f6f8f"
      background: "#0e0f1f"
  fonts:
    sans: "Inter"
    display: "Gabarito"
    label: "Space Mono"
    href: "https://fonts.googleapis.com/css2?family=Gabarito:wght@700&family=Inter:wght@400;600&family=Space+Mono:wght@700&display=swap"
  hero: "band"
  headingWeight: 700
  radius:
    button: "10px"
    input: "10px"
    surface: "13px"
  tokens:
    light:
      brand-deep: "#2702c2"
    dark:
      brand-deep: "#2a1bb0"
---
```

| Key | Required | Notes |
| --- | --- | --- |
| `extends` | yes | Always `../../DESIGN.md` in the gallery. Resolves against the file's URL |
| `colors`, `typography`, `rounded`, `spacing` | yes | Source values, converted to the 13px grid where they describe spacing |
| `aura.theme.<appearance>.accent` | yes | The brand color. If the source's primary is ink, the accent is ink |
| `aura.theme.<appearance>.gray` | yes | A mid-tone neutral that carries the source's tint. Never the darkest ink |
| `aura.theme.<appearance>.background` | yes | The page canvas |
| `aura.fonts.sans` | yes | Body face. `display` and `label` default to it |
| `aura.fonts.href` | yes | One Google Fonts URL with every face and weight used |
| `aura.hero` | no | `field` (gradient on a dark-scoped surface), `paper`, or `band` (flat accent). Default `field` |
| `aura.headingWeight` | no | Default 400 |
| `aura.radius.*` | yes | CSS lengths. `9999px` for pills, `0px` for square |
| `aura.tokens.<appearance>` | no | Extra colors. Same keys in light and dark |

## Narrative sections

````markdown
# Flavor Name

> One sentence pitch. Built on Aura.

Source flavor: <url>. This file adapts it to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the app uses `next/font`, load <faces> there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import <source>'s sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview
## Colors
### Dark mode
## Typography
## Layout
## Elevation & Depth
## Shapes
## Components
## Do's and Don'ts
## Motion
## Reference
````

Keep each section short and concrete: tables for mappings, bullets for rules, one TSX example in Reference.
