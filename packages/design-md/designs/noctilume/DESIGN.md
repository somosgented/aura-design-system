---
version: "alpha"
name: "Noctilume"
description: "Pure black canvas with an icy chrome gradient on the hero headline, loud gray buttons, luminous glass-orb art, three-plan pricing with a tab switch, full-bleed genre portrait tiles, a large-word genre carousel, a night-blue glowing promo bar and a compact footer. A flavor of Aura for evening streaming demo pages."
extends: "../../DESIGN.md"
colors:
  primary: "#dddddd"
  on-primary: "#000000"
  surface: "#000000"
  surface-container: "#171717"
  on-surface: "#ffffff"
  on-surface-variant: "#cccccc"
  outline: "rgba(255,255,255,0.18)"
typography:
  headline-display:
    fontFamily: "Outfit"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.0em
  body-md:
    fontFamily: "Outfit"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Outfit"
    fontSize: 9.6px
    fontWeight: 600
    letterSpacing: 0.08em
rounded:
  sm: 4px
  md: 8px
  lg: 8px
  full: 9999px
spacing:
  unit: 13px
  section: 143px
  max-width: 1280px
aura:
  theme:
    light:
      accent: "#246298"
      gray: "#8b8b8b"
      background: "#f5f5f7"
    dark:
      accent: "#71b8f2"
      gray: "#8b8b8b"
      background: "#000000"
  fonts:
    sans: "Outfit"
    href: "https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&display=swap"
  hero: "field"
  headingWeight: 700
  radius:
    button: "8px"
    input: "8px"
    surface: "8px"
  tokens:
    light:
      canvas: "#f5f5f7"
      card-bg: "#ffffff"
      card-border: "#e3e3e8"
      hero-title-fb: "#ffffff"
      ink: "#0b0b0c"
      body: "#3a3a40"
      muted: "#6a6a72"
      rule: "rgba(0,0,0,0.15)"
      loud-btn-bg: "#111114"
      loud-btn-fg: "#ffffff"
      loud-btn-hover: "#000000"
      outline-cta-border: "#3c5a8f"
      outline-cta-fg: "#0b0b0c"
      icy-grad-start: "#2b3a5c"
      icy-grad-mid: "#3f66b3"
      icy-grad-end: "#2b3a5c"
      icy-hero-start: "#dce0ee"
      icy-hero-mid: "#dfe9f5"
      icy-hero-end: "#b3c8f1"
      badge-grad-start: "#c8d8f4"
      badge-grad-end: "#b0c6ee"
      badge-fg: "#000000"
      link-blue: "#246298"
      link-blue-hover: "#1b4e7a"
      promo-bg-start: "#e7edf8"
      promo-bg-end: "#d6e2f6"
      promo-fg: "#0b0b0c"
      promo-glow: "rgba(60,90,143,0.22)"
      promo-priceblock: "#0b0b0c"
      header-bg: "rgba(245,245,247,0.75)"
      focus: "#246298"
      tab-active-fg: "#0b0b0c"
      tab-inactive-fg: "#6a6a72"
      tab-line: "rgba(0,0,0,0.45)"
      faq-bg: "#ffffff"
      faq-border: "#e3e3e8"
      faq-chevron: "#3a3a40"
      switch-bg: "#e3e3e8"
      switch-active: "#0b0b0c"
      switch-active-fg: "#ffffff"
      switch-inactive-fg: "#4a4a52"
      pearl-start: "#ffffff"
      pearl-mid: "#c9cbd6"
      pearl-end: "#9ea3b5"
      pearl-start-light: "#4a5568"
      pearl-mid-light: "#2d3a50"
      pearl-end-light: "#1a2744"
      control-line: "#8b8b8b"
      poster-teal: "#1a7050"
      poster-ember: "#a03800"
      poster-crimson: "#a01050"
      poster-cobalt: "#1a3a7a"
      poster-gold: "#a08800"
      poster-lilac: "#6a1888"
      poster-dark: "#0a0a14"
      cw-inactive: "rgba(11,11,12,0.35)"
      hero-eyebrow-fg: "rgba(255,255,255,0.65)"
      hero-link-blue: "#71b8f2"
      hero-link-blue-hover: "#80c6ff"
      hero-sub-fg: "rgba(255,255,255,0.80)"
      hero-fine-fg: "rgba(255,255,255,0.65)"
      price-old-fg: "rgba(255,255,255,0.5)"
      scrim-dark: "rgba(0,0,0,0.92)"
      scrim-mid: "rgba(0,0,0,0.5)"
      scrim-light: "rgba(0,0,0,0.3)"
      scrim-heavy: "rgba(0,0,0,0.85)"
      tile-caption-fg: "rgba(255,255,255,0.8)"
      outline-sheen-hi: "rgba(255,255,255,0.08)"
      outline-hover-hi: "rgba(255,255,255,0.1)"
      outline-hover-lo: "rgba(255,255,255,0.02)"
      orb-sheen-hi: "rgba(255,255,255,0.18)"
      orb-sheen-arc: "rgba(255,255,255,0.1)"
      orb-inner: "rgba(20,30,50,0.9)"
      orb-mid: "rgba(5,10,20,0.95)"
      orb-rim: "rgba(255,255,255,0.35)"
      orb-rim-fade: "rgba(255,255,255,0.06)"
      orb-outer-ring: "rgba(255,255,255,0.08)"
      orb-glow: "rgba(0,0,0,0.0)"
    dark:
      canvas: "#000000"
      card-bg: "#171717"
      card-border: "transparent"
      hero-title-fb: "#ffffff"
      ink: "#ffffff"
      body: "rgba(255,255,255,0.80)"
      muted: "#cccccc"
      rule: "rgba(255,255,255,0.18)"
      loud-btn-bg: "#dddddd"
      loud-btn-fg: "#000000"
      loud-btn-hover: "#ffffff"
      outline-cta-border: "#c9d6f3"
      outline-cta-fg: "#ffffff"
      icy-grad-start: "#dce0ee"
      icy-grad-mid: "#dfe9f5"
      icy-grad-end: "#b3c8f1"
      icy-hero-start: "#dce0ee"
      icy-hero-mid: "#dfe9f5"
      icy-hero-end: "#b3c8f1"
      badge-grad-start: "#dce0ee"
      badge-grad-end: "#b3c8f1"
      badge-fg: "#000000"
      link-blue: "#71b8f2"
      link-blue-hover: "#80c6ff"
      promo-bg-start: "#0c1a2e"
      promo-bg-end: "#16263f"
      promo-fg: "#ffffff"
      promo-glow: "rgba(179,200,241,0.35)"
      promo-priceblock: "#ffffff"
      header-bg: "rgba(0,0,0,0.70)"
      focus: "#71b8f2"
      tab-active-fg: "#ffffff"
      tab-inactive-fg: "rgba(255,255,255,0.55)"
      tab-line: "rgba(255,255,255,0.50)"
      faq-bg: "#171717"
      faq-border: "transparent"
      faq-chevron: "#cccccc"
      switch-bg: "#2a2a2a"
      switch-active: "#dddddd"
      switch-active-fg: "#000000"
      switch-inactive-fg: "#cccccc"
      pearl-start: "#ffffff"
      pearl-mid: "#c9cbd6"
      pearl-end: "#9ea3b5"
      control-line: "#666666"
      poster-teal: "#1a7050"
      poster-ember: "#a03800"
      poster-crimson: "#a01050"
      poster-cobalt: "#1a3a7a"
      poster-gold: "#a08800"
      poster-lilac: "#6a1888"
      poster-dark: "#0a0a14"
      cw-inactive: "rgba(255,255,255,0.45)"
      hero-eyebrow-fg: "rgba(255,255,255,0.5)"
      hero-link-blue: "#71b8f2"
      hero-link-blue-hover: "#80c6ff"
      hero-sub-fg: "rgba(255,255,255,0.80)"
      hero-fine-fg: "rgba(255,255,255,0.65)"
      price-old-fg: "rgba(255,255,255,0.5)"
      scrim-dark: "rgba(0,0,0,0.92)"
      scrim-mid: "rgba(0,0,0,0.5)"
      scrim-light: "rgba(0,0,0,0.3)"
      scrim-heavy: "rgba(0,0,0,0.85)"
      tile-caption-fg: "rgba(255,255,255,0.8)"
      outline-sheen-hi: "rgba(255,255,255,0.1)"
      outline-hover-hi: "rgba(255,255,255,0.14)"
      outline-hover-lo: "rgba(255,255,255,0.04)"
      orb-sheen-hi: "rgba(255,255,255,0.22)"
      orb-sheen-arc: "rgba(255,255,255,0.14)"
      orb-inner: "rgba(30,40,60,0.95)"
      orb-mid: "rgba(10,15,25,0.98)"
      orb-rim: "rgba(255,255,255,0.45)"
      orb-rim-fade: "rgba(255,255,255,0.08)"
      orb-outer-ring: "rgba(255,255,255,0.12)"
      orb-glow: "rgba(0,0,0,0.0)"
---

# Noctilume

> A pure black evening-streaming page with an icy chrome headline, a glass-orb hero, loud gray buttons and a night-blue glowing promo bar. Built on Aura.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the app uses `next/font`, load Outfit there instead of the `@import`, and point `--font-sans` at the font variable.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Noctilume's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Noctilume is an evening streaming demo with a single dramatic visual language: pure black canvas, one icy chrome gradient for display headlines and badges, loud gray fill buttons, and a night-blue panel with an outer glow for bottom-of-page conversion. The light appearance flips to a cool off-white canvas while keeping the same structural hierarchy.

The page has ten sections in fixed order: fixed header, glass-orb hero, three-plan picker with a tab switch, full-bleed genre portrait wall, new-arrivals poster grid, large-word genre carousel, brand moment, FAQ with a notification form, night-blue promo bar, and footer with an appearance switch.

## Colors

| Role | Light token | Dark token |
| --- | --- | --- |
| Page canvas | `--canvas` `#f5f5f7` | `--canvas` `#000000` |
| Card / surface | `--card-bg` `#ffffff` | `--card-bg` `#171717` |
| Card border | `--card-border` `#e3e3e8` | `--card-border` transparent |
| Primary ink | `--ink` `#0b0b0c` | `--ink` `#ffffff` |
| Secondary ink | `--body` `#3a3a40` | `--body` white 80% |
| Muted ink | `--muted` `#6a6a72` | `--muted` `#cccccc` |
| Hairline divider | `--rule` black 15% | `--rule` white 18% |
| Loud button fill | `--loud-btn-bg` `#111114` | `--loud-btn-bg` `#dddddd` |
| Loud button text | `--loud-btn-fg` `#ffffff` | `--loud-btn-fg` `#000000` |
| Outline CTA border | `--outline-cta-border` `#3c5a8f` | `--outline-cta-border` `#c9d6f3` |
| Outline CTA text | `--outline-cta-fg` `#0b0b0c` | `--outline-cta-fg` `#ffffff` |
| Icy gradient | `--icy-grad-*` blue-navy range | `--icy-grad-*` `#dce0ee`→`#b3c8f1` |
| Badge gradient | `--badge-grad-*` pale blue | `--badge-grad-*` icy chrome |
| Badge text | `--badge-fg` `#000000` | `--badge-fg` `#000000` |
| Link blue | `--link-blue` `#246298` | `--link-blue` `#71b8f2` |
| Promo bar bg | `--promo-bg-*` pale icy | `--promo-bg-*` night blue |
| Promo text | `--promo-fg` `#0b0b0c` | `--promo-fg` `#ffffff` |
| Header bg | `--header-bg` white 75% + blur | `--header-bg` black 70% + blur |
| Focus ring | `--focus` `#246298` | `--focus` `#71b8f2` |

### Dark mode

Dark mode is the primary appearance. It uses a pure black canvas (`#000000`), dark `#171717` cards with no border, icy chrome gradient (`#dce0ee` → `#dfe9f5` → `#b3c8f1`) on the hero headline and promo bar headline, and a night-blue panel (`#0c1a2e` → `#16263f`) with a soft outer glow (`rgba(179,200,241,0.35)` at 24px blur) for the promo bar. The semantic variables switch in one `.dark` block; individual element colors are never re-declared.

Accent seeds: dark `#71b8f2` (link blue), gray seed `#8b8b8b` (no violet tint).

## Typography

One family, **Outfit**, loaded at weights 200/300/400/500/600/700.

| Role | Size | Weight | Transform | Tracking |
| --- | --- | --- | --- | --- |
| Hero eyebrow | 28px (24px at 360) | 700 | uppercase | 0.11em |
| Hero h1 | clamp(72px,8vw,88px) | 700 | uppercase | 0 |
| Hero sub | 15px | 400 | uppercase | 0.08em |
| Price old | 40px | 400 | — | 0 |
| Price current | 64px | 700 | — | 0 |
| Section h2 | clamp(24px,3vw,35px) | 600 | uppercase | 0 |
| Plan card title | 26px | 700 | — | 0 |
| Plan card price | 20px | 700 | — | 0 |
| Body / features | 15.4px | 400 | — | 0 |
| Badge | 9.6px | 600 | uppercase | 0.08em |
| Tile caption | 9.6px | 300 | uppercase | 0.08em |
| Tile genre label | 20px | 600 | uppercase | 0 |
| Carousel word | 56px (32px at 360) | 200 | — | 0 |
| FAQ question | 16px | 500 | — | 0 |
| Footer link | 15px | 600 | — | 0 |
| Legal / fine print | 11.7px | 400 | — | 0 |
| New-arrivals h2 | clamp(24px,3vw,35px) | 600 | uppercase | 0 |

Hero h1 uses the bright icy chrome gradient via `background-clip:text` and the `--icy-hero-*` tokens (same values in both appearances, because the hero stays a dark band). The promo-bar headline uses `--icy-grad-*` (bright in dark, darkened navy in light for contrast on the pale panel). Every uppercase label is Outfit; no second family is introduced.

## Layout

| Medida | 13-grid step | Approx px |
| --- | --- | --- |
| Header height 60px | 4.5 | 58.5 |
| Section padding 24px | 2 | 26 |
| Card gap 16px | 1 | 13→16 |
| Plan card width 346px | 26.5 | 344.5 |
| Poster grid width 1110px | 85.5 | 1111.5 |
| Promo bar width 888px | 68.5 | 890.5 |
| FAQ card width 736px | 56.5 | 734.5 |
| Ancho total 1280px | 98.5 | 1280.5 |

Sections stack in normal flow. The header is `position:fixed`; the hero adds 60px top padding to clear it. The genre wall sits outside the centered wrapper in a `width:100%` block so it spans edge to edge. The promo bar is centered at max-width 888px inside its own section. All grid children carry `min-width:0`.

## Elevation & Depth

No shadows on cards; `#171717` on black provides low-contrast distinction. The promo bar uses `box-shadow: 0 0 24px 0 var(--promo-glow)` as the only shadow. The glass orb uses layered radial-gradients with no box-shadow. The header blurs the content behind it via `backdrop-filter:blur(16px)`.

## Shapes

All interactive surfaces use `border-radius:8px`. Full-pill buttons are not used. The orb is a pure circle. Plan card badges have `border-radius:0 0 4px 4px` (attached to the top-left card edge). The footer appearance-switch pills use `border-radius:9999px` as an exception.

## Components

The showcase uses these Aura patterns, overridden with Noctilume tokens and the `.nl` root class:

- **Button (loud)**: `background:var(--loud-btn-bg); color:var(--loud-btn-fg); border-radius:8px; border:none; height:52px` for hero/plan CTA; `height:44px` for secondary CTAs.
- **Button (outline CTA)**: `background:linear-gradient(180deg,var(--outline-sheen-hi) 0%,transparent 60%); border:1.5px solid var(--outline-cta-border); color:var(--outline-cta-fg); border-radius:8px; text-transform:uppercase`. Transparent fill with icy-tinted border and faint inner sheen.
- **Card (plan)**: `background:var(--card-bg); border:1px solid var(--card-border); border-radius:8px; padding:24px`. Equal heights via `display:flex;flex-direction:column`.
- **Badge**: `background:linear-gradient(90deg,var(--badge-grad-start),var(--badge-grad-end)); color:var(--badge-fg); font-size:9.6px; font-weight:600; border-radius:0 0 4px 4px; padding:4px 10px`.
- **Tab switch**: `role=tablist`; active tab has `font-weight:700; border-bottom:2px solid currentColor`; inactive has `font-weight:400`. The tab-row baseline rule uses `--tab-line` at ≥50% white opacity (dark) / 45% black (light) for ≥3:1 contrast. `switchPeriod()` updates both `aria-selected` and `aria-labelledby` on the tabpanel.
- **Input / Select**: `border:1.5px solid var(--control-line); border-radius:8px` with explicit SVG-data-URI chevron on select (≥3:1).
- **Accordion (FAQ)**: `aria-expanded` / `aria-controls`; `background:var(--faq-bg); border-radius:8px`; chevron rotates 180deg on open.
- **Carousel**: prev/next buttons `border:1.5px solid var(--outline-cta-border); border-radius:9999px`; track mask-gradient on edges; `aria-live` status region.
- **Disclosure (plan table)**: native `<details>` with styled `<summary>`.
- **Form (notification)**: `name + email + NativeSelect + submit`; `preventDefault`; `aria-live` confirmation.
- **Appearance switch**: `role=radiogroup`; three `button[aria-checked]` pills; sets `html` class and `colorScheme`. Border: `1.5px solid var(--outline-cta-border)` to meet the ≥3:1 boundary contrast requirement.

Poster tiles are CSS-only art: `background` with named gradient tokens or `color-mix` of them; large Outfit text for invented titles inside. The glass orb is four layered `radial-gradient` stops on a circle element: a cold blue-gray inner fill, a bright rim ring at ~57% radius (white 45%), a fainter outer concentric ring, and an upper-left sheen arc — no box-shadow on the orb itself.

## Do's and Don'ts

## Gradient text technique

Three elements use CSS gradient text clipping:

1. **Hero h1** ("NOCHE LARGA") — horizontal icy chrome: `background-image:linear-gradient(90deg,var(--icy-grad-start) 0%,var(--icy-grad-mid) 30%,var(--icy-grad-end) 70%); -webkit-background-clip:text; background-clip:text; color:transparent`. Works in both dark and light: the hero is always a dark band, so it uses `--icy-hero-*` (`#dce0ee` → `#dfe9f5` → `#b3c8f1`) in both appearances. A `@supports not (background-clip:text)` rule provides `color:var(--icy-grad-end)` as a solid fallback.

2. **Promo-bar headline** ("NOCHE LARGA") — same horizontal icy gradient and clip technique. In light mode the promo bar uses the darker icy tokens (`--icy-grad-start:#2b3a5c`, `--icy-grad-mid:#3f66b3`, `--icy-grad-end:#2b3a5c`) which already provide sufficient contrast on the pale icy panel background.

3. **Brand moment wordmark** — vertical pearl chrome: `background-image:linear-gradient(180deg,var(--pearl-start) 0%,var(--pearl-mid) 50%,var(--pearl-end) 100%); -webkit-background-clip:text; background-clip:text; color:transparent`. In light mode, a darker steel variant is applied via local overrides (`--pearl-start-light:#4a5568; --pearl-mid-light:#2d3a50; --pearl-end-light:#1a2744`). Solid fallback via `@supports not (background-clip:text)`.

Never set `color` to any value other than `transparent` (or the fallback) on these elements while the gradient clip is active.

**Do:**
- Apply gradient text with `background-image` + `background-clip:text` + `color:transparent` exactly as described above. Use badges with the icy gradient background.
- Keep the page canvas pure black (`#000000`) in dark, `#f5f5f7` in light; never introduce a tertiary surface color.
- Use Outfit weight 200 only for carousel genre words.
- Keep loud buttons gray-fill (`#dddddd` dark / `#111114` light) with no border.
- Full-bleed the genre portrait wall and the promo bar; clip their internal art to their own elements.

**Don't:**
- Do not use violet, purple or warm-tinted grays anywhere on the page.
- Do not add images, icons from an icon library or external SVGs.
- Do not place text or interactive elements over poster art without a dark scrim.
- Do not add a border to plan cards in dark mode.
- Do not use `overflow:hidden` on `html` or `body`.

## Motion

Transitions run only when the `html` element has class `motion` (set by the head script when `prefers-reduced-motion` is not set). The head script adds `motion` before paint. Carousel word transitions are `opacity 0.2s ease`. FAQ chevron rotation is `transform 0.2s ease`. No looping animation runs at any time.

## Dimensions

```tsx
const dimensions = {
  "header-height": "60px",
  "plan-card-width": "346px",
  "poster-grid-width": "1110px",
  "promo-bar-width": "888px",
  "faq-width": "736px",
};

function NoctilumePlanCard({ name, price, oldPrice, features, badge }: PlanCardProps) {
  return (
    <article className="nl-plan-card" style={{ background: "var(--card-bg)", borderRadius: "8px" }}>
      <span className="nl-badge">{badge}</span>
      <h3 style={{ fontSize: "26px", fontWeight: 700 }}>{name}</h3>
      <p>
        <s style={{ color: "var(--muted)" }}>{oldPrice}</s>
        <strong style={{ fontSize: "20px", fontWeight: 700 }}>{price}</strong>
        <span style={{ fontSize: "15px" }}>/mes</span>
      </p>
      <ul>{features.map(f => <li key={f}>{f}</li>)}</ul>
      <button
        style={{ background: "var(--loud-btn-bg)", color: "var(--loud-btn-fg)", borderRadius: "8px", border: "none", height: "52px" }}
      >
        Quiero este plan
      </button>
    </article>
  );
}
```
