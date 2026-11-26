---
version: "alpha"
name: "Drovemere"
description: "Airy white and near-black quiet workspaces with 80px light Figtree display type, 1px hairlines, full-pill buttons and rare cobalt-coral-mint halos — a flavor of Aura for developer workbench pages."
extends: "../../DESIGN.md"
colors:
  primary: "#2563eb"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#f5f6f8"
  on-surface: "#121317"
  on-surface-variant: "#4d5058"
  outline: "#e6e7eb"
typography:
  headline-display:
    fontFamily: "Figtree"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.025em
  body-md:
    fontFamily: "Figtree"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "JetBrains Mono"
    fontSize: 12px
    fontWeight: 400
    letterSpacing: 0.0em
rounded:
  md: 20px
  full: 9999px
spacing:
  unit: 13px
  section: 117px
  max-width: 1280px
aura:
  theme:
    light:
      accent: "#2563eb"
      gray: "#6c707a"
      background: "#ffffff"
    dark:
      accent: "#5b93ff"
      gray: "#787d88"
      background: "#0c0d10"
  fonts:
    sans: "Figtree"
    label: "JetBrains Mono"
    href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
  hero: "paper"
  headingWeight: 400
  radius:
    button: "9999px"
    input: "12px"
    surface: "24px"
  tokens:
    light:
      canvas: "#ffffff"
      ink: "#121317"
      body: "#22242a"
      muted: "#4d5058"
      panel: "#f5f6f8"
      panel-hover: "#eaecf0"
      rule: "#e6e7eb"
      control-line: "#6f737d"
      focus: "#1d4ed8"
      cobalt: "#2563eb"
      coral: "#f06553"
      mint: "#22b895"
      dark-stage: "#0b0c10"
      dark-surface: "#15171e"
      on-dark: "#f4f5f7"
      dark-ink: "#f4f5f7"
      dark-muted: "#b2b6c2"
      dark-line: "#6f7585"
      dark-cobalt: "#7cb3ff"
      dark-mint: "#5be0be"
      dark-coral: "#ff9485"
    dark:
      canvas: "#0c0d10"
      ink: "#f3f4f6"
      body: "#dfe2e8"
      muted: "#b4b8c3"
      panel: "#16181d"
      panel-hover: "#21242c"
      rule: "#292c34"
      control-line: "#7d8392"
      focus: "#7cb3ff"
      cobalt: "#5b93ff"
      coral: "#f47a69"
      mint: "#36cfa8"
      dark-stage: "#06070a"
      dark-surface: "#13151b"
      on-dark: "#f4f5f7"
      dark-ink: "#f4f5f7"
      dark-muted: "#b2b6c2"
      dark-line: "#7d8392"
      dark-cobalt: "#7cb3ff"
      dark-mint: "#5be0be"
      dark-coral: "#ff9485"
---

# Drovemere

> Airy white and near-black surfaces, 80px light Figtree display headings, generous whitespace, 1px hairlines and full-pill actions with rare cobalt, coral and mint halos — a calm workbench flavor for developer tool pages. Built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's path (13px grid, accent/gray step roles, Radix icons, forms, accessibility). All copy, data, figures and visuals in the showcase are original and fictional.

## Apply to an Aura project

An agent that receives this file inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same folder, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the app uses `next/font`, load Figtree and JetBrains Mono there instead of the `@import`, and point `--font-sans` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Drovemere's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Drovemere pairs bright pure-white light surfaces and near-black dark surfaces with light-weight display typography, spacious vertical padding, and crisp 1px hairlines. Color stays deliberately scarce: an original cobalt, coral and mint triad appears only in ambient art-card glows, scattered hero dashes, the showcase orb, and a deep cobalt ring inside the dark library card. Primary buttons are solid ink pills that invert cleanly in dark mode; secondary pills use a cool tinted gray surface framed by a high-contrast control hairline.

## Colors

| Role | Token | Light | Dark |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `#ffffff` | `#0c0d10` |
| Ink (headings, primary buttons) | `--ink` | `#121317` | `#f3f4f6` |
| Body text | `--body` | `#22242a` | `#dfe2e8` |
| Muted text, captions | `--muted` | `#4d5058` | `#b4b8c3` |
| Tinted panel surface | `--panel` | `#f5f6f8` | `#16181d` |
| Hover fill | `--panel-hover` | `#eaecf0` | `#21242c` |
| Structural hairline | `--rule` | `#e6e7eb` | `#292c34` |
| Control border | `--control-line` | `#6f737d` | `#7d8392` |
| Focus outline | `--focus` | `#1d4ed8` | `#7cb3ff` |
| Accent halo cobalt | `--cobalt` | `#2563eb` | `#5b93ff` |
| Accent halo coral | `--coral` | `#f06553` | `#f47a69` |
| Accent halo mint | `--mint` | `#22b895` | `#36cfa8` |
| Dark showcase stage | `--dark-stage` | `#0b0c10` | `#06070a` |
| Dark stage raised pane | `--dark-surface` | `#15171e` | `#13151b` |
| Fixed light text on dark surfaces | `--on-dark` | `#f4f5f7` | `#f4f5f7` |
| Dark stage muted | `--dark-muted` | `#b2b6c2` | `#b2b6c2` |
| Dark stage control border | `--dark-line` | `#6f7585` | `#7d8392` |

In light mode, `--ink` on `--canvas` reaches 18.4:1, `--muted` on `--canvas` reaches 8.06:1 (7.50:1 on `--panel`), and `--control-line` reaches 4.75:1 on `--canvas` (4.42:1 on `--panel`). In dark mode, `--ink` on `--canvas` reaches 17.8:1, `--muted` reaches 9.85:1 on `--canvas` (8.97:1 on `--panel`), and `--control-line` reaches 5.15:1 on `--canvas` (4.69:1 on `--panel`). On always-dark surfaces (`--dark-stage` and `--dark-surface`), `--on-dark` stays fixed at `#f4f5f7` in both appearances (18.1:1 on `#0b0c10`, 16.5:1 on `#15171e`), and light pills invert cleanly with `--on-dark` fill and `--dark-stage` text.

### Dark mode

Dark mode uses a neutral near-black canvas (`#0c0d10`, never navy) with `#16181d` raised panels and ~12% white hairlines (`#292c34`). Primary pills invert to `#f3f4f6` fill with `#0c0d10` text. Art cards that are dark in light mode deepen to `--dark-stage` (`#06070a`) framed by a 1px `--rule` border so they stay distinct from the page canvas. Glow opacity drops modestly in dark mode to avoid harsh bloom.

## Typography

| Role | Face | Weight | Desktop size | 360px size | Line height | Tracking |
| --- | --- | --- | --- | --- | --- | --- |
| Hero h1 | Figtree | 400 | 80px | 36px | 1.1 | −0.025em |
| Section h2 | Figtree | 400 | 42px | 28px | 1.05 | −0.02em |
| Tool title h3 | Figtree | 400 | 32px | 26px | 1.12 | −0.02em |
| Lead / subhead | Figtree | 500 | 24px | 20px | 1.25 | −0.015em |
| Body | Figtree | 400 | 15px | 15px | 1.5 | 0 |
| Muted copy | Figtree | 400 | 14.5px | 14.5px | 1.5 | 0 |
| Code / tiny labels | JetBrains Mono | 400–500 | 12–13px | 11–12px | 1.45 | 0 |

Both Figtree (400, 500, 600) and JetBrains Mono (400, 500) load through the single font stylesheet href in frontmatter. Display headings stay light (400) rather than bold; UI emphasis relies on size and whitespace.

## Layout

- Max content width: `1280px`, centered with `calc(var(--aura) * 2)` horizontal gutters (`26px`, tightening to `16px` on narrow screens).
- Sticky header: `64px` tall, `85%` canvas translucency with backdrop blur and a 1px bottom hairline.
- Section rhythm: `120px` vertical padding (`calc(var(--aura) * 9)` ≈ `117px`, tightening to `calc(var(--aura) * 5)` at 360px) separated by single full-width 1px hairlines.
- Section order: sticky header, dismissible notice bar, centered hero (~640px tall at 1280px, 80px h1 with 24px gap to the hero pills), 680x400 dark showcase frame, broad wavy errand ribbon (`180px` tall at `1280px`, `140px` tall at `360px`, dual soft-gray and cobalt-tinted inline SVG bands with 12 vertically staggered round icon tiles), statement (`max-width: 720px`, left-aligned on desktop and centered at `< 768px`), four two-column tool rows (320px copy + 440x440 art card with soft cobalt/coral/mint glow halos on light cards), audience carousel (600x360 dark role card cycling 4 sample roles with fixed `--on-dark` overlay type), two-column Solo/Teams split, Aura gallery skeleton block (4 stats, 3 features, scrollable plan table, 3 pricing cards, walkthrough request form, 4-item FAQ accordion, pull quote), scrollable 5-card field notes strip, newsletter panel, full-width inset dark download banner (~520px tall with `--on-dark` headline and inverted pill), and footer with 4 link columns, container-scaled `aria-hidden` giant wordmark (`clamp(62px, 20.4cqi, 258px)` with `vw` fallback), appearance switch, and legal row.

Spacing table (design px to 13px grid):

| Design px | Aura step | px |
| --- | --- | --- |
| 6 | 0.5 | 6.5 |
| 13 | 1 | 13 |
| 20 | 1.5 | 19.5 |
| 26 | 2 | 26 |
| 32 | 2.5 | 32.5 |
| 40 | 3 | 39 |
| 48 | 3.5 | 45.5 |
| 52 | 4 | 52 |
| 64 | 5 | 65 |
| 96 | 7.5 | 97.5 |
| 117 | 9 | 117 |
| 1280 | 98.5 | 1280.5 |

## Elevation & Depth

Surfaces rely on 1px `--rule` hairlines and subtle `--panel` contrast rather than drop shadows. Only header flyout panels and the language disclosure popover carry an ambient shadow (`color-mix(in srgb, var(--ink) 10%, transparent)`). Sticky header translucency uses `color-mix(in srgb, var(--canvas) 85%, transparent)` with `backdrop-filter: blur(12px)`.

## Shapes

- Buttons, chips, email pill, and language switch: `9999px` full pill radius.
- Showcase frame: `20px` radius.
- Tool art cards, newsletter panel, pricing cards, role card, and download banner: `24px` radius.
- Inputs, selects, textareas, and header flyout panels: `12px` radius (`16px` on flyout panels).
- Brand mark: three small rounded dots set along a gentle diagonal line (inline SVG circles) paired with the word `Drovemere`.

## Components

Drovemere overrides the following Aura defaults under the `.dv` body scope:

- `Button variant="fill"`: full pill (`9999px`), `--ink` fill, `--canvas` text, `36px` tall in the header and `48px` tall in hero/banner CTAs.
- `Button variant="pill"`: full pill (`9999px`), `--panel` fill, `--ink` text, `1px solid var(--control-line)` border (`>= 4.4:1` in both appearances).
- `NavigationMenu`: desktop triggers (`Tools`, `Who it serves`, `Learn`) use `<button data-dropdown>` with `aria-expanded` and `aria-controls`; each opens a two-column flyout panel anchored under its trigger. The language picker (`EN`) is a plain `200px` disclosure without `data-dropdown`. Below `1024px`, a round ink trigger opens a full-viewport modal dialog menu (`role="dialog"`, `aria-modal="true"`, focus-trapped, Escape closes, body scroll locked).
- `Card`: `24px` radius, `1px solid var(--rule)` border, `shadow-none`.
- `Stat`: 4-up grid with `42px` weight-400 Figtree figures and `14.5px` `--muted` labels.
- `Table`: semantic `<table>` with `<caption>` inside a keyboard-focusable `overflow-x: auto` region (`role="region"`, `tabindex="0"`).
- `Input`, `NativeSelect` (`select.inputer`), `Textarea`: `12px` radius (`9999px` on newsletter email pill), `--canvas` fill, `1px solid var(--control-line)` border; `select.inputer` renders a dual-gradient chevron in `--control-line` across both appearances.
- `Accordion`: real `<button aria-expanded>` disclosure triggers separated by 1px `--rule` borders.
- `ToggleGroup` / radiogroups: newsletter topic chips (5 options) and footer appearance switch (`System`, `Light`, `Dark`) use `role="radiogroup"` and `role="radio"` with `aria-checked`, arrow-key navigation, and `1px solid var(--control-line)` borders.
- `Badge`: pill chips using `--ink`/`--canvas` for the notice bar `NEW` badge and `--panel`/`--ink` with `--control-line` for metadata chips.

Measured structural contracts:

```
menu-overlay-width: 100vw
dropdown-width: 560px
quote-font: Figtree
quote-size: 32px
```

Header flyout panels are `min(560px, calc(100vw - 32px))` wide, anchored below their trigger.

Blockquote override: `.dv blockquote` and `.dv blockquote p` override Aura's uppercase quote style so pull quotes render in Figtree, `text-transform: none`, weight `400`, `32px` at `>= 1000px` (`24px` at `360px`), line-height `1.25`, and tracking `-0.02em`.

## Do's and Don'ts

**Do:**
- Keep display headings light (`400`) in Figtree with tight negative tracking.
- Reserve cobalt, coral and mint for glow accents, hero dashes, and art cards.
- Give every interactive control (`input`, `select`, `textarea`, checkbox, secondary pill, chip, round button) a `1px solid var(--control-line)` boundary (`>= 3:1`).
- Keep dark mode neutral near-black (`#0c0d10`), never blue-tinted navy.
- Keep decorative art clipped inside its own `overflow: hidden` wrapper.

**Don't:**
- Do not use heavy bold weights (`700+`) on display headlines.
- Do not fill entire page bands with saturated cobalt, coral or mint.
- Do not use JetBrains Mono for long body paragraphs.
- Do not add looping animations or run transitions without `html.motion`.
- Do not put `overflow-x: hidden` on `html` or `body` to mask layout bugs.

## Motion

All hover and state transitions sit behind `html.motion`, which the head script adds only when `prefers-reduced-motion: no-preference` matches. One-shot transitions (button fill, chevron rotation, focus states) use `0.15s ease`. There are no looping animations, so `document.getAnimations()` remains empty under reduced motion.

## Usage example

```tsx
import { Button } from "@aura/ui";

export function DrovemereHero() {
  return (
    <section style={{ background: "var(--canvas)", paddingBlock: "calc(var(--aura) * 9)" }}>
      <h1 className="h1" style={{ fontFamily: "var(--aura-font-stack)", fontSize: 80, fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
        Guide a quiet crew
        <br />
        of coding drovers
      </h1>
      <div style={{ display: "flex", gap: "calc(var(--aura) * 1)", marginTop: "calc(var(--aura) * 3)" }}>
        <Button variant="pill" style={{ borderRadius: 9999, height: 48, border: "1px solid var(--control-line)" }}>
          Try in browser
        </Button>
        <Button variant="fill" style={{ borderRadius: 9999, height: 48 }}>
          Get Drovemere
        </Button>
      </div>
    </section>
  );
}
```
