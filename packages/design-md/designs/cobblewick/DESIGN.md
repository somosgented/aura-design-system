---
version: "alpha"
name: "Cobblewick"
description: "Sunny yellow header, forest-green promo field, round pill controls and generous product cards, a friendly flat-color flavor of Aura for shops that sell snap-together building sets."
extends: "../../DESIGN.md"
colors:
  primary: "#f27a1a"
  on-primary: "#1a1a1a"
  surface: "#ffffff"
  surface-container: "#f1f1f1"
  on-surface: "#1a1a1a"
  on-surface-variant: "#5c5c5c"
  outline: "#d9d9d9"
typography:
  headline-display:
    fontFamily: "Outfit"
    fontWeight: 700
    fontSize: 40px
    lineHeight: 1.25
    letterSpacing: -0.01em
  body-md:
    fontFamily: "Nunito Sans"
    fontWeight: 400
    fontSize: 16px
    lineHeight: 1.5
  label-md:
    fontFamily: "Outfit"
    fontSize: 15px
    fontWeight: 600
    letterSpacing: 0em
rounded:
  md: 8px
  full: 9999px
spacing:
  unit: 13px
  section: 65px
  max-width: 1232px
aura:
  theme:
    light:
      accent: "#f27a1a"
      gray: "#767676"
      background: "#ffffff"
    dark:
      accent: "#f27a1a"
      gray: "#8c8c8c"
      background: "#121212"
  fonts:
    sans: "Nunito Sans"
    display: "Outfit"
    label: "Outfit"
    href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Outfit:wght@500;600;700&display=swap"
  hero: "band"
  headingWeight: 700
  radius:
    button: "9999px"
    input: "9999px"
    surface: "8px"
  tokens:
    light:
      canvas: "#ffffff"
      ink: "#1a1a1a"
      muted: "#5c5c5c"
      rule: "#d9d9d9"
      panel: "#f1f1f1"
      card: "#ffffff"
      control-line: "#767676"
      focus: "#1a1a1a"
      link: "#0a56c9"
      yellow: "#ffcf1a"
      yellow-ink: "#1a1a1a"
      forest: "#0c6a38"
      forest-light: "#5cc47f"
      forest-mid: "#2fa95b"
      forest-tile: "#0a5a30"
      charcoal: "#262626"
      void: "#0a0a0a"
      orange: "#f27a1a"
      orange-ink: "#1a1a1a"
      blue: "#0a56c9"
      badge-green: "#0c6a38"
      badge-yellow: "#ffcf1a"
      foot: "#151515"
      foot-ink: "#f5f5f5"
      foot-muted: "#d0d0d0"
      foot-line: "#9a9a9a"
      toy-red: "#e0392b"
      toy-blue: "#1f6fe0"
      toy-sky: "#7cc4f2"
      toy-plum: "#7a3fb0"
      toy-teal: "#14a3a0"
      toy-sand: "#e8c48a"
      toy-slate: "#5b6770"
    dark:
      canvas: "#121212"
      ink: "#f5f5f5"
      muted: "#b3b3b3"
      rule: "#303030"
      panel: "#1a1a1a"
      card: "#1e1e1e"
      control-line: "#8c8c8c"
      focus: "#ffffff"
      link: "#8ab4ff"
      yellow: "#ffcf1a"
      yellow-ink: "#1a1a1a"
      forest: "#0a4f2a"
      forest-light: "#4aa86b"
      forest-mid: "#22854a"
      forest-tile: "#083f22"
      charcoal: "#1c1c1c"
      void: "#000000"
      orange: "#f27a1a"
      orange-ink: "#1a1a1a"
      blue: "#0a56c9"
      badge-green: "#0c6a38"
      badge-yellow: "#ffcf1a"
      foot: "#0a0a0a"
      foot-ink: "#f5f5f5"
      foot-muted: "#d0d0d0"
      foot-line: "#9a9a9a"
      toy-red: "#d2442f"
      toy-blue: "#3b82e8"
      toy-sky: "#5fa8d8"
      toy-plum: "#8a55c0"
      toy-teal: "#20b0ac"
      toy-sand: "#d8b074"
      toy-slate: "#7b8790"
---

# Cobblewick

> Sunny yellow chrome, a forest-green promo field, round pills and roomy product cards: a friendly, flat-color flavor for family shops that sell snap-together sets. Built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius, shape and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). Cobblewick is a fictional shop. All copy, prices, ratings, counts and offer codes in the showcase are example data and are labeled "(sample)".

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the project uses `next/font`, load Outfit and Nunito Sans there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Cobblewick's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Cobblewick is toy-store energy kept clean. Large flat fields carry the personality: a yellow header bar, a deep forest-green promo hero with stud-edged diamond stripes, a charcoal category band with a slanted bottom edge and a near-black feature band. Everything you touch is a round pill. Text stays dark on light surfaces and light on every colored band. Illustrations are simple geometry: blocks, studs (small circles on top of blocks) and abstract figures, never photographs. People appear as round initials avatars.

The orange primary button deliberately carries dark text. Do not switch it to white text.

## Colors

| Role | Token | Light | Dark |
| --- | --- | --- | --- |
| Page | `--canvas` | `#ffffff` | `#121212` |
| Ink | `--ink` | `#1a1a1a` | `#f5f5f5` |
| Muted text | `--muted` | `#5c5c5c` | `#b3b3b3` |
| Card hairline | `--rule` | `#d9d9d9` | `#303030` |
| Gray panel | `--panel` | `#f1f1f1` | `#1a1a1a` |
| Card surface | `--card` | `#ffffff` | `#1e1e1e` |
| Control border | `--control-line` | `#767676` | `#8c8c8c` |
| Focus ring | `--focus` | `#1a1a1a` | `#ffffff` |
| Link | `--link` | `#0a56c9` | `#8ab4ff` |
| Header bar | `--yellow` / `--yellow-ink` | `#ffcf1a` / `#1a1a1a` | same |
| Promo field | `--forest` | `#0c6a38` | `#0a4f2a` |
| Stripe greens | `--forest-light`, `--forest-mid` | `#5cc47f`, `#2fa95b` | `#4aa86b`, `#22854a` |
| Tile ground | `--forest-tile` | `#0a5a30` | `#083f22` |
| Category band | `--charcoal` | `#262626` | `#1c1c1c` |
| Feature band | `--void` | `#0a0a0a` | `#000000` |
| Primary button | `--orange` / `--orange-ink` | `#f27a1a` / `#1a1a1a` | same |
| Subscribe button | `--blue` | `#0a56c9` | same |
| Footer | `--foot`, `--foot-ink`, `--foot-muted`, `--foot-line` | `#151515`, `#f5f5f5`, `#d0d0d0`, `#9a9a9a` | `#0a0a0a`, same, same, same |
| Badges | `--badge-green`, `--badge-yellow` | `#0c6a38`, `#ffcf1a` | same |
| Illustration palette | `--toy-red`, `--toy-blue`, `--toy-sky`, `--toy-plum`, `--toy-teal`, `--toy-sand`, `--toy-slate` | see header block | lifted or deepened in header block |

Contrast computed from these values: ink on canvas 17.4:1; muted on canvas 6.69:1 and on the gray panel 5.92:1; dark ink on the yellow bar 11.76:1; dark ink on orange 6.28:1; white on forest 6.7:1; white on the subscribe blue 6.59:1; link on canvas 6.59:1 and on the gray panel 5.83:1; light control border on canvas 4.54:1 and on the gray panel 4.02:1.

Colored bands override `--focus` locally so the ring stays at least 3:1: white on the forest, charcoal, near-black and footer bands, ink on the yellow bar.

### Dark mode

Dark is its own scheme, not an inversion. The page is `#121212` with near-white ink. The yellow bar stays yellow with dark text. The hero field deepens to `#0a4f2a`, the charcoal band becomes a slightly lighter surface (`#1c1c1c` mixed with 12% near-white) with a 1px top hairline so it reads as a band, the feature band goes to `#000000`, cards are `#1e1e1e` with a 1px `--rule` hairline, and the gray panel is `#1a1a1a`. The orange button keeps its dark text. Links lift to `#8ab4ff` (8.97:1 on the dark page). Dark control border `#8c8c8c` is 5.57:1 on the page and 4.96:1 on cards. Illustration colors are lifted or deepened per appearance so scenes keep their contrast.

## Typography

| Role | Face | Weight | Size 1280 / 360 | Notes |
| --- | --- | --- | --- | --- |
| Hero h1 | Outfit | 700 | 40px / 28px | line-height 1.25, left aligned |
| Section h2 | Outfit | 700 | 32px / 24px | centered, with a 16px Nunito Sans second line |
| Card title | Outfit | 600 | 20px | two lines at most |
| Buttons, tabs, prices | Outfit | 600 | 15px | no uppercase |
| Body | Nunito Sans | 400 | 16px | line-height 1.5 |
| Small | Nunito Sans | 400–600 | 14px (13px for notes) | muted token |
| Footer headings | Outfit | 700 | 16px | uppercase |
| logotype | Outfit | 700 | 20px | lowercase, -0.02em tracking |

There is no mono face.

## Layout

- Content width 1232px at 1280, with 24px side padding at 360.
- Section rhythm 64px at 1280 and 48px at 360. The hero, quick-link band and info strip are full-bleed bands; every section sits in normal flow.
- Header is 64px tall at 1280. Below 1024px a hamburger replaces the three drop panel triggers and the search pill takes its own full-width row.
- Hero: a full-bleed forest band with a 1232px inner width. At 1280 the text column sits on the left (5/12) and the diamond-ring art on the right (7/12), minimum height 320px, bleeding to the right edge of the band and clipped by its own `overflow: hidden`. At 360 the art is a 200px full-bleed band above the text.
- Quick links: eight equal tiles at 1280, each with the label at the top and a centered 56px line glyph (44px at 360) inside a lighter green diamond; the Trending and Themes panels each hold eight tiles with different labels and glyphs. The strip scrolls at 360 (scroll-snap, about 3.3 tiles visible). The band ends in a slanted clip-path edge with enough bottom padding.
- Product track: five cards visible at 1280, 1.15 at 360, scroll-snap, in a keyboard-reachable region. Every card has the same structure and height: a note row ("Example set (sample)"), a badges row, a 170px scene, a meta row, a two-line title block, a price block with a reserved flag row, and a button row pinned to the bottom.
- Spotlight: a near-black full-bleed band; at 1280 the text column is on the left and the scene art on the right, bleeding to the right edge; the three segmented tabs (Points, Early access, Monthly build) use 13px labels on small screens so all three fit at 360 without scrolling; the small label sits bottom-left.
- Footer: the gray info strip touches the footer. A "Country / region" button opens three sample regions (Region A, Region B, Region C), four round "Sample channel 1" to "Sample channel 4" buttons, a legal links row with its own spacing, and the appearance switch.
- Gallery: one large 2x2 tile at left and four small tiles at right at 1280; one column of 4:3 tiles at 360.
- Discover: three equal cards, one column at 360.

Spacing table (design px to the 13px grid):

| Design px | Step | px |
| --- | --- | --- |
| 8 | 0.5 | 6.5 |
| 16 | 1 | 13 |
| 24 | 2 | 26 |
| 32 | 2.5 | 32.5 |
| 40 | 3 | 39 |
| 48 | 3.5 | 45.5 |
| 64 | 5 | 65 |

Button heights (40px and 44px) and the 1232px width are kept literal.

## Elevation & Depth

Flat. Cards use a 1px `--rule` hairline and no shadow. Only the drop panel panels and the gallery popover carry a soft ambient shadow made with `color-mix(in srgb, var(--ink) 14%, transparent)`. The hero and tile patterns are flat color fields with dotted stud edges built from `radial-gradient`.

## Shapes

- Pills: `9999px` on every button, the search field, the email field, badges and tabs of the segmented control.
- Round icon buttons: 40px circles with a 1.5px `--control-line` border.
- Cards, tiles and the gallery popover: 8px radius.
- drop panel panels: 8px radius, exactly 520px wide.
- Mark: a 26px rounded square (6px radius) in the ink color holding a 2x2 grid of four small circles (inline SVG), followed by the lowercase logotype "cobblewick".
- Slanted band edge: `clip-path: polygon(...)` a few degrees on the quick-link band's own box.

## Components

Cobblewick overrides these Aura defaults. Flavor controls live under the `cw` class on `<body>` so `/aura/main.css` cannot override them.

| Component | Aura base | Cobblewick treatment |
| --- | --- | --- |
| Primary button "Add to bag" | `Button variant="fill"` | `pill pill-orange`: `--orange` fill, `--orange-ink` text, bag glyph, 44px |
| Light pill "Join the club" | `Button variant="pill"` | `pill pill-light`: near-white fill, dark text, trailing chevron |
| Outline pill "See how it works" | `Button variant="pill"` | `pill pill-line`: 1.5px border in the surface's text color, trailing chevron |
| Subscribe "Subscribe" | `Button variant="fill"` | `pill pill-blue`: `--blue` fill, white text, inside the white email pill |
| Header link "Weekend deal" | `Button variant="pill"` | `pill pill-white`: white fill, dark text, 40px |
| Icon buttons | `Button size="icon-md"` | `round`: 40px circle, 1.5px `--control-line` border (heart toggle, previous, next, plus hotspot) |
| Search | `InputGroup` | `search` wrapper with `role="search"`, magnifier glyph, pill input "Search the shop" |
| drop panels "Shop", "Discover", "Help" | `NavigationMenu` | `button[data-dropdown]` with `aria-expanded` and `aria-controls`; white panel, two columns of six items |
| Tabs | `Tabs` | `tablist` with underline on the selected tab; arrow keys move focus |
| Segmented control | `ToggleGroup` | pill track with three tabs; selected is a filled near-white pill |
| Product card | `Card` | `set-card`: hairline, 8px radius, 16px padding, note row, badges row, 170px SVG scene, meta row (age, pieces, rating), two-line title block, price block, button row pinned to the bottom |
| Badges | `Badge` | `badge-green` ("Triple points (sample)", "Member price") and `badge-yellow` ("New", "Online only") |
| Appearance switch | `ToggleGroup` | `radiogroup` of System, Light, Dark with `aria-checked`; System follows `prefers-color-scheme`, Light and Dark set the `html` class |
| Country button "Country / region" | `Button variant="pill"` | `pill pill-white pill-sm` with `aria-expanded`; discloses Region A, Region B and Region C |
| Channel buttons | `Button size="icon-md"` | `round` buttons labeled "Sample channel 1" to "Sample channel 4" |

The literal measurements the page implements:

```
menu-overlay-width: 100vw
dropdown-width: 520px
```

drop panel panels are `min(520px, 100vw - 32px)` wide and sit under their trigger. The menu overlay is `position: fixed` with `left: 0`, `width: 100vw`, `height: 100vh`, `role="dialog"`, `aria-modal="true"`, a focus trap and a locked body scroll while open.

The page uses no quote block.

## Do's and Don'ts

**Do:**
- Keep dark text on yellow, orange and light-pill buttons.
- Build every illustration from rectangles, circles and studs in the `--toy-*` tokens.
- Mark every price, rating, count, date, code and badge as "(sample)" or "example" near where it appears.
- Keep decorative art `aria-hidden` and clipped inside its own `overflow: hidden` box.
- Give every control a 1.5px border or fill that reads at least 3:1 against what is behind it.

**Don't:**
- Do not use photographs or external images.
- Do not use white text on the orange button.
- Do not put separators or pipes between inline items that can wrap.
- Do not hide content below 480px; only the desktop drop panel triggers are replaced by the hamburger.
- Do not use gradient text; any gradient label must be decorative and `aria-hidden`.

## Motion

All transitions sit behind `html.motion`, which the head script sets only when the user has no reduced-motion preference. Transitions are short one-shot fades and transforms (0.15s) on hover, drop panels and the chevron. Nothing loops, so no pause control is needed. With `prefers-reduced-motion: reduce` nothing animates.

## Usage example

```tsx
import { Button } from "@aura/ui";

export function CobblewickPromo() {
  return (
    <section className="cw" style={{ background: "var(--forest)", color: "var(--paper)" }}>
      <h1 className="h1" style={{ fontFamily: "var(--aura-font-display)", fontSize: 40, lineHeight: 1.25 }}>
        Members save on weekend builds
      </h1>
      <Button variant="pill" className="pill pill-light">Join the club</Button>
      <Button variant="pill" className="pill pill-line">See how it works</Button>
    </section>
  );
}
```
