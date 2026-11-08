---
version: "alpha"
name: "Slipstream"
description: "A flowing mesh gradient over white, deep navy ink, quiet guide lines, slanted bands and layered product cards. A precise, technical flavor of Aura for payments, developer platforms and financial infrastructure."
extends: "../../DESIGN.md"
colors:
  primary: "#5b4cf0"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#f6f9fc"
  on-surface: "#0b2340"
  on-surface-variant: "#4f5b76"
  outline: "#e3e8ee"
  navy: "#0b2340"
  wave-pink: "#ff7ab2"
  wave-orange: "#ffb35c"
  wave-violet: "#7a6dff"
  wave-cyan: "#4fd1ff"
typography:
  headline-display:
    fontFamily: "Instrument Sans"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: -0.035em
  body-md:
    fontFamily: "Instrument Sans"
    fontWeight: 400
    lineHeight: 1.55
  label-mono:
    fontFamily: "IBM Plex Mono"
    fontSize: 13px
    fontWeight: 500
rounded:
  sm: 6.5px
  md: 13px
  full: 9999px
spacing:
  unit: 13px
  section: 130px
  max-width: 1176.5px
aura:
  theme:
    light:
      accent: "#5b4cf0"
      gray: "#5d6b82"
      background: "#ffffff"
    dark:
      accent: "#7a6dff"
      gray: "#5d6b82"
      background: "#071426"
  fonts:
    sans: "Instrument Sans"
    display: "Instrument Sans"
    label: "IBM Plex Mono"
    href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
  hero: "paper"
  headingWeight: 500
  radius:
    button: "9999px"
    input: "6.5px"
    surface: "13px"
  tokens:
    light:
      navy: "#0b2340"
      navy-fg: "#f6f9fc"
      wave-pink: "#ff7ab2"
      wave-orange: "#ffb35c"
      wave-violet: "#7a6dff"
      wave-cyan: "#4fd1ff"
    dark:
      navy: "#030c18"
      navy-fg: "#f6f9fc"
      wave-pink: "#d9669a"
      wave-orange: "#d8984f"
      wave-violet: "#6a5ee0"
      wave-cyan: "#3fb0d8"
---

# Slipstream

> Money moving like weather: a soft gradient front sweeping across white paper, navy type, thin guide lines and product cards stacked like glass panes. Built on Aura.

Source flavor: an interpretation of the visual language of large payments and developer-platform marketing sites, reduced to principles. No brand, copy, imagery or assets are reused. This file adapts it to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`, so they override the default Aura scales. Do not hand-edit the generated values.
3. If the app uses `next/font`, load `Instrument Sans` and `IBM Plex Mono` there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Slipstream's sample payments copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Slipstream is technical calm with one moment of color. A **mesh gradient** (pink, orange, violet, cyan) flows across the top of the page and then never appears at full strength again. Everything else is white paper, navy ink, blue-gray secondary text and hairline **guide lines** that run vertically through the grid like a drafting sheet. One **slanted navy band** carries the numbers. Product moments are layered cards: a payment form, a phone, a chart, a code panel, stacked with soft blue-tinted shadows. Use it for payments, developer tools, billing and financial dashboards. It is not playful, not neon, and never a flat gray SaaS template.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. The accent is indigo; navy is a custom token for ink-heavy sections.

| Flavor role | Value | Aura token | Use |
| --- | --- | --- | --- |
| Paper | `#ffffff` | `gray-1` | Default sections |
| Paper raised | `#f6f9fc` | `gray-2` | Alternating sections, card wells |
| Ink | `#0b2340` | `gray-12` / `--navy` | Headlines and body |
| Secondary ink | `#4f5b76` | `gray-11` | Subheads, captions |
| Hairline | `#e3e8ee` | `gray-6` | Card borders, table rules, guide lines |
| Indigo | `#5b4cf0` | `accent-9` / `--primary` | Primary pill, links, active states |
| Navy band | `#0b2340` | `--navy` | The slanted numbers section, code panels |
| Text on navy | `#f6f9fc` | `--navy-fg` | Type inside navy |
| Gradient | pink, orange, violet, cyan | `--wave-*` | The hero mesh and one gradient stat, nowhere else |

- The gradient is the signature; spend it once in the hero and once on a single number.
- Links and secondary actions are indigo text with a `›` chevron that slides on hover.
- Code panels use navy with syntax colors drawn from `--wave-*` and `accent-8`.

### Dark mode

| Variable | Light | Dark |
| --- | --- | --- |
| Page | white | `gray-1` (deep navy) |
| `--navy` band | `#0b2340` | `#030c18`, darker than the page so the slant still reads |
| Mesh | full strength | muted `--wave-*` at 70% opacity |
| Card shadow | `0 30px 60px -12px rgba(11,35,64,.25)` | a `1px` `gray-a5` ring plus a black shadow |
| Guide lines | `gray-6` dashed | `gray-a4` dashed |

## Typography

- `Instrument Sans` for display and body through `font-display` and `--aura-font-stack`. Headlines weight 500 (never bold), tracking `-0.035em`, `leading-[1.04]`, sentence case.
- Hero `.h1` at `text-[clamp(2.75rem,6vw,5.25rem)]`, max about 14 words.
- Section eyebrow: indigo `text-sm font-semibold`, then a `.h2` headline, then a `gray-11` lead.
- `IBM Plex Mono` through `font-label` for code, IDs and amounts in tables.
- Stats: `.h1` weight 500; the featured one uses the gradient as text fill.

## Layout

| Source | Aura |
| --- | --- |
| 1180px content width | `max-w-90.5` container |
| Vertical guide lines | four `1px` dashed `gray-6` lines at the column edges, behind content |
| 128px section rhythm | `py-10` (130px) |
| 24px card padding | `p-2` (26px) |
| 32px grid gaps | `gap-2.5` (32.5px) |

- Sections align to a four-column grid whose edges are drawn as guide lines.
- The numbers section is a navy band skewed by `-6deg` (`skew-y-[-6deg]` on the background layer only; content stays straight).
- Feature grids are four columns of icon, colored headline, text and a chevron link, with no card chrome.

## Elevation & Depth

- Layered cards: `bg-gray-1 rounded-[13px] shadow-[0_30px_60px_-12px_rgba(11,35,64,0.25),0_18px_36px_-18px_rgba(0,0,0,0.3)]`.
- Stacked cards overlap by about 20% and offset vertically; the front card has the strongest shadow.
- Everything else is flat with `gray-6` hairlines.

## Shapes

- `theme.css` sets buttons to pills, inputs to `6.5px` and surfaces to `13px`.
- The hero mesh is four blurred radial blobs inside a skewed clip; it bleeds off the top and right edges.
- Icons are small line icons in indigo inside a `26px` rounded square tinted `accent-3`.

## Components

- **Primary pill** → `Button variant="fill"` with a trailing chevron `›` that moves `translate-x-[3px]` on hover.
- **Secondary action** → `Button variant="link"` in indigo with the same chevron.
- **Nav** → `NavigationMenu` over the mesh, white text where it overlaps, a text sign-in and a translucent pill.
- **Payment card** → `Card` holding `Input`, `NativeSelect` and a full-width indigo `Button`.
- **Code panel** → `CodeBlock` on `--navy` with a tab row and line numbers in `gray-9`.
- **Stats** → `Stat` cells in the navy band; `StatValue` `.h1`, `StatLabel` `text-sm`.
- **Payments table** → `Table` with `font-label` amounts, `tabular-nums`, and `Badge` statuses (`Succeeded` green, `Pending` neutral, `Refunded` violet).
- **Plans** → two or three `Card`s with hairline borders; the recommended one gets an indigo top border.
- **FAQ** → `Accordion` with `gray-6` rules and a chevron that rotates.

## Do's and Don'ts

- Do keep the page white and navy; let the gradient happen once.
- Do draw the grid with thin guide lines and align everything to it.
- Do layer product cards with soft, blue-tinted shadows.
- Do write precise copy with real units: milliseconds, percentages, currencies.

- Don't put the gradient behind body text or on buttons.
- Don't use bold display weights; 500 is the ceiling for headlines.
- Don't use heavy borders or pastel card fills.
- Don't use real brand names, logos or borrowed copy.

## Motion

The hero mesh drifts slowly (20s loop, transform only). Chevrons slide 3px on hover; cards lift 2px. Everything stops under `prefers-reduced-motion: reduce`. Numbers and code never animate.

## Reference

```tsx
<section className="relative overflow-hidden bg-gray-1">
  <div className="mx-auto max-w-90.5 px-2 py-10">
    <p className="text-sm font-semibold text-primary">Payments infrastructure</p>
    <h1 className="h1 font-display font-medium leading-[1.04] tracking-[-0.035em] text-gray-12">
      Move money with the confidence of a ledger.
    </h1>
    <div className="mt-3 flex flex-wrap gap-1.5">
      <Button variant="fill">Start building ›</Button>
      <Button variant="link">Talk to an engineer ›</Button>
    </div>
  </div>
</section>
```
