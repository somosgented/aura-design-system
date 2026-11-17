---
version: "alpha"
name: "Ironmere"
description: "Soft off-white and deep ink-indigo surfaces with a periwinkle accent, pill buttons and 12px cards — a flavor of Aura for business-finance workspace marketing pages."
extends: "../../DESIGN.md"
colors:
  primary: "#5467e8"
  on-primary: "#ffffff"
  surface: "#fbfbfc"
  surface-container: "#f4f3ef"
  on-surface: "#1c1c26"
  on-surface-variant: "#5b5b6e"
  outline: "#dddde6"
typography:
  headline-display:
    fontFamily: "Albert Sans"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.02em
  body-md:
    fontFamily: "Albert Sans"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Albert Sans"
    fontSize: 13px
    fontWeight: 500
    letterSpacing: 0.0em
rounded:
  md: 12px
  full: 9999px
spacing:
  unit: 13px
  section: 143px
  max-width: 1280px
aura:
  theme:
    light:
      accent: "#4255d6"
      gray: "#5b5b6e"
      background: "#fbfbfc"
    dark:
      accent: "#8f9cff"
      gray: "#7878a0"
      background: "#15151d"
  fonts:
    sans: "Albert Sans"
    href: "https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600&display=swap"
  hero: "band"
  headingWeight: 500
  radius:
    button: "9999px"
    input: "9999px"
    surface: "12px"
  tokens:
    light:
      canvas: "#fbfbfc"
      stone: "#f4f3ef"
      ink: "#1c1c26"
      body: "#2e2e3a"
      muted: "#5b5b6e"
      band: "#1c1c26"
      band-fg: "#f0f0f8"
      band-muted: "#9898b8"
      rule: "#dddde6"
      control-line: "#7676a0"
      focus: "#5467e8"
      focus-on-band: "#a0aaff"
      card-bg: "#f7f7fa"
      periwinkle: "#4255d6"
      periwinkle-hover: "#3148c0"
      on-periwinkle: "#ffffff"
      pill-glass-bg: "rgba(255,255,255,0.14)"
      pill-glass-border: "rgba(255,255,255,0.32)"
      opaque-btn-border: "color-mix(in srgb,var(--band-fg) 70%,var(--band))"
      chip-bg: "#ebebf2"
      chip-ink: "#2e2e3a"
      hero-sky-a: "#c8b090"
      hero-sky-b: "#b09878"
      hero-sky-c: "#8090a8"
      hero-sky-d: "#607090"
      hero-sky-e: "#405070"
      hero-sky-f: "#283848"
      hero-ridge: "#3a4a5a"
      hero-ridge2: "#4a5868"
      hero-ridge3: "#2a3840"
      hero-ridge4: "#384850"
      hero-ridge5: "#1e2830"
      hero-ridge6: "#2a3840"
      hero-river-a: "#607888"
      hero-river-b: "#8090a0"
      hero-river-c: "#a0b0be"
      hero-clip1: "#3a4555"
      hero-clip2: "#2e3a48"
      hero-clip3: "#1e2a36"
      hero-mist: "color-mix(in srgb,var(--hero-sky-c) 30%,white)"
      hero-horizon-glow: "color-mix(in srgb,var(--hero-sky-a) 60%,white)"
      hero-river-glow: "color-mix(in srgb,var(--hero-river-c) 80%,white)"
      dash-bg: "#1a1a24"
      dash-screen: "#0f0f18"
      dash-deck: "#c8c0b8"
      dash-hinge: "#b8b0a8"
      dash-sidebar: "#161620"
      dash-border: "#2a2a38"
      dash-active: "#20203a"
      dash-active-color: "#a0aaff"
      dash-muted: "#8888a8"
      dash-label: "#6868a0"
      dash-card: "#1e1e2c"
      dash-card-border: "#2a2a3a"
      dash-text: "#d0d0e8"
      dash-chart: "#5467e8"
      dash-ex-bg: "rgba(80,100,232,0.3)"
      dash-ex-color: "#a0aaff"
      dash-ex-border: "rgba(100,120,255,0.3)"
    dark:
      canvas: "#15151d"
      stone: "#1e1e28"
      ink: "#f0f0f8"
      body: "#c8c8e0"
      muted: "#9a9ab8"
      band: "#15151d"
      band-fg: "#f0f0f8"
      band-muted: "#9898b8"
      rule: "#2a2a3a"
      control-line: "#6060a0"
      focus: "#7080f0"
      focus-on-band: "#a0aaff"
      card-bg: "#20202b"
      periwinkle: "#8f9cff"
      periwinkle-hover: "#8898f8"
      on-periwinkle: "#15151d"
      pill-glass-bg: "rgba(255,255,255,0.10)"
      pill-glass-border: "rgba(255,255,255,0.22)"
      opaque-btn-border: "color-mix(in srgb,var(--band-fg) 70%,var(--band))"
      chip-bg: "#25253a"
      chip-ink: "#c8c8e0"
      hero-sky-a: "#0d1520"
      hero-sky-b: "#0a1828"
      hero-sky-c: "#0e2038"
      hero-sky-d: "#0c2240"
      hero-sky-e: "#081830"
      hero-sky-f: "#040d1a"
      hero-ridge: "#1a2a3a"
      hero-ridge2: "#243244"
      hero-ridge3: "#0e1e2e"
      hero-ridge4: "#182838"
      hero-ridge5: "#080e18"
      hero-ridge6: "#0e1e2e"
      hero-river-a: "#1a3048"
      hero-river-b: "#203850"
      hero-river-c: "#2a4860"
      hero-clip1: "#0e1e30"
      hero-clip2: "#091525"
      hero-clip3: "#05101e"
      hero-mist: "color-mix(in srgb,var(--hero-sky-c) 20%,var(--hero-sky-d))"
      hero-horizon-glow: "color-mix(in srgb,#2a4868 60%,transparent)"
      hero-river-glow: "color-mix(in srgb,#1a3858 70%,transparent)"
      dash-bg: "#1a1a24"
      dash-screen: "#0f0f18"
      dash-deck: "#c8c0b8"
      dash-hinge: "#b8b0a8"
      dash-sidebar: "#161620"
      dash-border: "#2a2a38"
      dash-active: "#20203a"
      dash-active-color: "#a0aaff"
      dash-muted: "#8888a8"
      dash-label: "#6868a0"
      dash-card: "#1e1e2c"
      dash-card-border: "#2a2a3a"
      dash-text: "#d0d0e8"
      dash-chart: "#7080f0"
      dash-ex-bg: "rgba(80,100,232,0.3)"
      dash-ex-color: "#a0aaff"
      dash-ex-border: "rgba(100,120,255,0.3)"
---

# Ironmere

> Calm ink-indigo nights and stone-warmed days, periwinkle actions, pill forms and CSS landscape art — a business-finance workspace flavor for small-company marketing pages. Built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). All copy, data, figures and visuals in the showcase are original and fictional; any resemblance to a real product is coincidental.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the app uses `next/font`, load Albert Sans there instead of the `@import`, and point `--font-sans` at the font variable.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Ironmere's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Ironmere is a calm, premium workspace theme for small-company finance products. It alternates three surface tones: soft off-white (`--canvas`), warm stone (`--stone`) and deep ink-indigo (`--band`). Buttons and forms are fully rounded pills. Cards are 12px radius with hairline borders and no heavy shadows. The periwinkle accent (`--periwinkle`) appears on primary buttons, active dots and a handful of chart strokes; it stays out of text and hairlines. The single typeface is Albert Sans 400/500/600 with tabular figures for all amounts.

## Colors

| Role | Token | Light | Dark |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `#fbfbfc` | `#15151d` |
| Warm stone sections | `--stone` | `#f4f3ef` | `#1e1e28` |
| Deep ink band | `--band` | `#1c1c26` | `#15151d` |
| Band foreground | `--band-fg` | `#f0f0f8` | `#f0f0f8` |
| Band muted text | `--band-muted` | `#9898b8` | `#9898b8` |
| Primary ink | `--ink` | `#1c1c26` | `#f0f0f8` |
| Body text | `--body` | `#2e2e3a` | `#c8c8e0` |
| Muted text | `--muted` | `#5b5b6e` | `#9a9ab8` |
| Hairline borders | `--rule` | `#dddde6` | `#2a2a3a` |
| Control borders | `--control-line` | `#7676a0` | `#6060a0` |
| Card surface | `--card-bg` | `#f7f7fa` | `#20202b` |
| Periwinkle fill | `--periwinkle` | `#4255d6` | `#8f9cff` |
| Periwinkle hover | `--periwinkle-hover` | `#3148c0` | `#9aaafe` |
| Text on periwinkle | `--on-periwinkle` | `#ffffff` | `#15151d` |
| Glass pill surface | `--pill-glass-bg` | `rgba(255,255,255,0.14)` | `rgba(255,255,255,0.10)` |
| Glass pill border | `--pill-glass-border` | `rgba(255,255,255,0.32)` | `rgba(255,255,255,0.22)` |
| Chip surface | `--chip-bg` | `#ebebf2` | `#25253a` |
| Chip text | `--chip-ink` | `#2e2e3a` | `#c8c8e0` |
| Focus ring | `--focus` | `#5467e8` | `#7080f0` |
| Focus on band | `--focus-on-band` | `#a0aaff` | `#a0aaff` |

Control borders use `--control-line` (`#7676a0` light ≈ 4.2:1 on `--canvas`, `#6060a0` dark ≈ 3.1:1 on `--canvas`), meeting the 3:1 threshold for all input, select, textarea and outline button borders. Round icon buttons and translucent pills on band sections use `color-mix(in srgb, var(--band-fg) 70%, var(--band))` as an opaque border, computed above 3:1 against the band surface.

The dark `--muted` is raised to `#9a9ab8` (≈ 4.5:1 on `--canvas` `#15151d` and `--card-bg` `#20202b`) to pass WCAG AA for small text.

### Hero and dashboard tokens

The hero landscape art and CSS laptop dashboard use dedicated named tokens so no hex literals appear in component CSS. They are listed in `aura.tokens.light` and `aura.tokens.dark` in the front matter and emitted into `theme.css` as CSS custom properties.

Hero sky gradient stops (`--hero-sky-a` … `--hero-sky-f`): light values depict a warm dusk haze fading through dusty blue to deep ink; dark values use deep midnight blue shades for a painted nocturnal valley. Ridge layers (`--hero-ridge` … `--hero-ridge6`) define the layered silhouette colors; river glow bands (`--hero-river-a/b/c`) give the lower glow. Dashboard chrome tokens (`--dash-bg`, `--dash-screen`, `--dash-deck`, `--dash-hinge`, `--dash-sidebar`, `--dash-border`, `--dash-active`, `--dash-active-color`, `--dash-muted`, `--dash-label`, `--dash-card`, `--dash-card-border`, `--dash-text`, `--dash-chart`, `--dash-ex-bg`, `--dash-ex-color`, `--dash-ex-border`) paint the CSS laptop frame and its dashboard mock. The keyboard deck (`.ir-laptop-deck`) is a thin metallic trapezoid (16–20px tall, slightly wider than the lid) with a cool-gray gradient built from `color-mix(in srgb, var(--dash-border) N%, white)` — light top edge, darker bottom — plus a small centered notch; it reads as cool gray in both light and dark, never beige.

### Dark mode

The dark appearance is not an inversion: the whole page sits on deep ink-indigo (`#15151d`), cards on `#20202b`, and warm stone sections shift to `#1e1e28`. The periwinkle accent brightens to `#8f9cff` on dark surfaces, with its label switching to the dark ink (`#15151d`) for a 4.5:1 text ratio against the lighter pill. Band sections remain structurally identical; their muted text (`--band-muted`) is the same in both appearances. Focus rings on bands use `--focus-on-band` (`#a0aaff`) against the ink surface. The dark hero sky uses deep midnight-blue stops to paint a nocturnal dusk valley.

## Typography

| Role | Face | Weight | Size | Tracking |
| --- | --- | --- | --- | --- |
| Display h1 | Albert Sans | 500 | 56px (40px at 360) | −0.02 em |
| Section h2 | Albert Sans | 500 | 32–40px (32px at 360) | −0.02 em |
| Statement h2 (bands) | Albert Sans | 500 | 44px via `.ir-band-h2-statement` (32px at ≤ 767px) | −0.02 em |
| Body | Albert Sans | 400 | 16px | 0 |
| List rows, labels | Albert Sans | 500 | 15px | 0 |
| Nav / button labels | Albert Sans | 500 | 15px | 0 |
| Muted secondary | Albert Sans | 400 | 15–16px | 0 |
| Fine print, captions | Albert Sans | 400 | 13px | 0 |
| Monogram wordmark | Albert Sans | 600 | 15px | 0.18 em |
| Amounts | Albert Sans | 400/500 | varies | tabular-nums |

Albert Sans loads at weights 400, 500 and 600 from the flavor's Google Fonts href. All amounts use `font-variant-numeric: tabular-nums`.

## Layout

- Max content width: 880px for most sections; 1280px for the header.
- Section vertical rhythm: `calc(var(--aura) * 11)` (≈ 143px top and bottom padding) at 1280px.
- Header height: `calc(var(--aura) * 4.5)` (≈ 59px, displayed at 60px).
- Hero: full-width painted band, ≈ 640px tall at 1280px. Hero content max-width is 860px so the h1 fits on one line at 1280px.
- Content sections are centered with `width: min(100% - calc(var(--aura)*4), 880px)`.
- Two-column layouts split at 1024px; cards grid at 768px.
- At 360px: 1-column stacking, h1 ≤ 40px (`text-wrap: balance`, `max-width: 280px` for two-line break; 36px at ≤ 399px), h2 ≤ 32px, no overflow. Hero submit button is `position: static`, full-width, 48px tall, below the input field at < 768px.

Spacing table (design px to 13px grid):

| Design px | Step | px |
| --- | --- | --- |
| 6 | 0.5 | 6.5 |
| 12 | 1 | 13 |
| 20 | 1.5 | 19.5 |
| 24 | 2 | 26 |
| 32 | 2.5 | 32.5 |
| 40 | 3 | 39 |
| 48 | 3.5 | 45.5 |
| 60 | 4.5 | 58.5 |
| 80 | 6 | 78 |
| 120 | 9 | 117 |
| 143 | 11 | 143 |
| 160 | 12.5 | 162.5 |

## Elevation & Depth

Sections separate by surface color, not shadows. Cards use a 1px `--rule` hairline and no elevation shadow. Flyout panels carry a soft ambient shadow: `0 8px 32px color-mix(in srgb, var(--ink) 10%, transparent)`. Mock UI panels inside cards use `0 2px 8px color-mix(in srgb, var(--ink) 8%, transparent)`. No blur-background effects.

## Shapes

- Pills: `border-radius: 9999px` on all CTAs, the email-capture form, and the mobile menu items.
- Cards and flyout panels: `border-radius: 12px`.
- Art boxes (feature cards): `border-radius: 12px`.
- Monogram: a small 22×22 rounded square (`rx="5"`) split by a single diagonal notch path in SVG, periwinkle fill.
- Input radius: `border-radius: 9999px` (pill input in the hero email-capture row).

## Components

Ironmere overrides these Aura defaults under the `.ir` root wrapper class:

- `Button variant="fill"` (`.btn-pill-solid`): `border-radius: 9999px`, `--periwinkle` fill, `--on-periwinkle` text, 36px header height, 44px hero height.
- `Button variant="pill"` (`.btn-pill-glass`): `border-radius: 9999px`, `--pill-glass-bg` fill, `--pill-glass-border` 1px border, band/near-white text; for use on ink bands.
- `Button variant="outline"` (`.btn-pill-outline`): `border-radius: 9999px`, `--canvas` fill, 1px `--control-line` border, `--ink` text; meets 3:1.
- `NavigationMenu` triggers (`button[data-dropdown]`): `aria-expanded`, `aria-controls`, hairline chevron; flyout panels are 12px radius, 1px `--rule` border, soft shadow.
- `Card`: `--card-bg` surface, 1px `--rule` border, 12px radius, `shadow-none`.
- `Input`, `NativeSelect` (`select.inputer`): `border-radius: 9999px`, 1px `--control-line` border, `--canvas` fill, CSS gradient chevron for select (two `linear-gradient` triangles at `right 18px center`, `right 14px center`).
- `Accordion`: disclosure pattern, `aria-expanded` buttons, `--rule` hairline separators.
- `Badge` / chips: pill, `--chip-bg` fill, `--chip-ink` text, 13px.
- Press cards (S-09): each card wraps the outlet name in a `.ir-press-outlet-tile` inner div — `color-mix(in srgb, var(--band-fg) 6%, var(--band))` background, `border-radius: 8px`, 96px tall, name centered. The headline and read-more button sit below the tile in the same card surface.
- Appearance switch (footer): `role="radiogroup"` containing three `role="radio"` buttons. Outer container border: `color-mix(in srgb, var(--band-fg) 55%, var(--band))` — opaque, ≥ 3:1 against the band surface. Unselected option text: `var(--band-fg)` (≥ 4.5:1 on band). Selected option: filled `color-mix(in srgb, var(--band-fg) 30%, var(--band))` surface with an opaque 2px border.
- Disclosure list rows (S-04, S-08): `button[aria-expanded]`, open state shows a 6px `--periwinkle` dot and the description block below the title on a new line (`display:block` with `margin-top:4px`); hairline `--rule` separators are on the `<li>` as `border-top`, the button itself has `border:none; background:transparent`; each row wraps in a `<li>` inside a `<ul>`, no `role="listitem"` on the button itself.

The flyout and overlay token block (checked by the test suite):

```
menu-overlay-width: 100vw
dropdown-width: 520px
quote-font: Albert Sans
quote-size: 32px
```

Flyout panels are `min(520px, 100vw - 32px)` wide, anchored under their trigger, left-aligned, `z-index: 200`.

The mobile menu overlay is `position: fixed`, `left: 0`, `top: 0`, `width: 100vw`, `height: 100vh`, `role="dialog"`, `aria-modal="true"`, focus-trapped, with body scroll locked while open.

Blockquote override: `.ir blockquote` and `.ir blockquote p` reset Aura's default uppercase and quote font, rendering in Albert Sans 500, `text-transform: none`, 32px at 1280px and 24px at 360px, tracking −0.02 em, centered.

## Do's and Don'ts

**Do:**
- Use `--periwinkle` only for primary buttons, active dots, and chart strokes.
- Keep surface alternation: canvas → stone → band → canvas.
- Use pill radius (9999px) for all CTAs and the email-capture input.
- Keep all amounts in `font-variant-numeric: tabular-nums`.
- Label every mock figure as example data near the value.

**Don't:**
- Do not use `--periwinkle` for text, hairlines or card surfaces.
- Do not add heavy shadows to cards; shadow only flyout panels and mock UI panels.
- Do not set heading weight above 500.
- Do not use hard-coded hex values in components; use tokens only.
- Do not omit the disclaimer bar or footer fine-print on any page using this flavor.

## Motion

All transitions are behind `html.motion`. Hover transitions on buttons and nav triggers use `transition: 0.15s ease` (opacity or background). Flyout panels enter with `transform: translateY(6px)` to `translateY(0)` over 0.18s. No looping animations. With `prefers-reduced-motion: reduce` (no `.motion` class on `<html>`), no animations run.

## Usage example

```tsx
import { Button, Card } from "@aura/ui";

export function IronmereHero() {
  return (
    <section style={{ background: "var(--band)", padding: "calc(var(--aura)*11) 0" }}>
      <h1 style={{ color: "var(--band-fg)", fontSize: 56, fontWeight: 500, letterSpacing: "-0.02em", textAlign: "center" }}>
        Your team's money, made clear
      </h1>
      <div style={{ display: "flex", gap: "calc(var(--aura)*1)", justifyContent: "center", marginTop: "calc(var(--aura)*3)" }}>
        <Button style={{ borderRadius: 9999, background: "var(--periwinkle)", color: "var(--on-periwinkle)", height: 44 }}>
          Get started
        </Button>
        <Button style={{ borderRadius: 9999, background: "var(--pill-glass-bg)", border: "1px solid var(--pill-glass-border)", color: "var(--band-fg)", height: 44 }}>
          Try the sample
        </Button>
      </div>
    </section>
  );
}
```
