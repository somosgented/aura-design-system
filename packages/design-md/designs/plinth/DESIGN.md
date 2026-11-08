---
version: "alpha"
name: "Plinth"
description: "A pristine white canvas with oversized grotesk headlines, ink pill buttons, soft gray bands, bento product vignettes and airy navigation. An Aura flavor for workspace SaaS marketing, team tools and productivity platforms."
extends: "../../DESIGN.md"
colors:
  primary: "#191919"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#f7f7f5"
  surface-muted: "#f0efed"
  on-surface: "#191919"
  on-surface-variant: "#5c5c5c"
  muted: "#9a9a9a"
  outline: "#e5e5e3"
  brand-orange: "#f2994a"
  brand-blue: "#2f80ed"
  brand-green: "#27ae60"
  brand-purple: "#9b51e0"
  brand-pink: "#eb5757"
typography:
  headline-display:
    fontFamily: "Inter"
    fontSize: 96px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -0.04em
  headline-section:
    fontFamily: "Inter"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.03em
  headline-card:
    fontFamily: "Inter"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.02em
  body-md:
    fontFamily: "Inter"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: -0.01em
  body-sm:
    fontFamily: "Inter"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 500
    letterSpacing: 0em
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  unit: 13px
  section: 130px
  max-width: 1280px
aura:
  theme:
    light:
      accent: "#191919"
      gray: "#787774"
      background: "#ffffff"
    dark:
      accent: "#ffffff"
      gray: "#9a9996"
      background: "#121212"
  fonts:
    sans: "Inter"
    display: "Inter"
    label: "Inter"
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  hero: "paper"
  headingWeight: 600
  radius:
    button: "9999px"
    input: "10px"
    surface: "16px"
  tokens:
    light:
      band: "#f7f7f5"
      band-alt: "#f0efed"
      vignette-bg: "#fafafa"
      vignette-border: "#e8e8e6"
      pill-soft: "#f7f7f5"
      pill-soft-hover: "#ededeb"
      orange: "#f2994a"
      orange-pale: "#fdf4eb"
      blue: "#2f80ed"
      blue-pale: "#e8f1fc"
      green: "#27ae60"
      green-pale: "#e6f5ec"
      purple: "#9b51e0"
      purple-pale: "#f4ecfb"
      pink: "#eb5757"
      pink-pale: "#fdeaea"
      ui-sidebar: "#fbfbfa"
      ui-row-hover: "#f5f5f3"
      ui-accent-orange: "#ff9500"
      ui-accent-blue: "#0099ff"
      ui-accent-red: "#ff4d4d"
      ui-accent-green: "#00c853"
    dark:
      band: "#1e1e1e"
      band-alt: "#252525"
      vignette-bg: "#1a1a1a"
      vignette-border: "#333333"
      pill-soft: "#2a2a2a"
      pill-soft-hover: "#353535"
      orange: "#f5a962"
      orange-pale: "#2a2118"
      blue: "#5a9cf0"
      blue-pale: "#1a2433"
      green: "#4cc077"
      green-pale: "#182a1e"
      purple: "#b072e8"
      purple-pale: "#261a33"
      pink: "#f07272"
      pink-pale: "#331a1a"
      ui-sidebar: "#181818"
      ui-row-hover: "#252525"
      ui-accent-orange: "#ffaa33"
      ui-accent-blue: "#33aaff"
      ui-accent-red: "#ff6666"
      ui-accent-green: "#33d970"
---

# Plinth

> A pristine white page with oversized bold headlines, ink pill buttons, airy nav and bento product vignettes on soft gray bands. Built on Aura.

Source flavor: https://www.notion.com (observed 2026-11-08). This file adapts its visual language to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius, shape, motion and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). Plinth is a fictional workspace platform demo; no name, logo, wordmark, mascot, copy, testimonial, person, blog post or platform mark of the source is reused, and every product vignette is an original drawing.

| Kind | What |
| --- | --- |
| Observed (measured) | Inter body (18px/1.55, 15px nav, 14px labels); display headings 96px weight 600 with tight tracking `-0.04em`, section heads 48px/1.1 weight 600; pill buttons with full radius (ink primary, soft gray secondary); warm off-white section bands (`#f7f7f5`, `#f0efed`); bento-style product screenshot grids with soft borders; logo wall marquee; minimal nav with dropdowns; FAQ accordion; closing CTA band; footer columns; content max-width about 1280px; section padding about 120–140px |
| Adapted by Plinth | All type set in Inter (source uses proprietary NotionInter); every spacing value rounded to the 13px grid; dark mode; original product vignettes with fictional UI; original brand hue set (orange, blue, green, purple, pink) for UI accents in vignettes; all copy; the shared Aura skeleton placed into the source's visual rhythm |
| Not legible | Exact animation keyframes for hero pill carousel, dropdown menu contents, any authenticated flows |

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values. After those blocks, set `--aura-text-primary-inverse: var(--accent-contrast)` in `:root` (required, see **Upstream limitation**).
3. If the app uses `next/font`, load `Inter` (400, 500, 600, 700) there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the Inter variable.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Plinth's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Plinth is a bright, confident page with generous whitespace. Just above the hero, a horizontal row of overlapping circular sketch avatars hints at community. The hero is paper: a massive centered headline (two or three lines), a short muted subline and two pill buttons (blue primary, soft gray secondary). Below, content alternates between full-white and soft gray bands. Feature sections use bento-style grids of product vignettes—rounded rectangles with subtle borders showing fictional UI. A logo wall with marquee motion sits below the hero. Section headlines are large and bold, left-aligned or centered. Cards have generous padding. The closing band restates the call to action over a soft background. Color is restrained: ink and gray carry the page, with small accent hues appearing only inside product vignettes.

## Colors

The accent is **ink**: the source's primary action is a black pill, so `accent-9` fills primary buttons and the nav mark. Brand hues are custom tokens for UI accents only. Exact steps come from `theme.css`.

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| Canvas | `--gray-1` | `--gray-1` (near-black) | Page |
| Ink pill | `--accent-9`, hover `--accent-10`, label `--accent-contrast` | same steps (white pill, dark label) | Primary buttons |
| Soft pill | `--pill-soft`, hover `--pill-soft-hover` | `--gray-3`, hover `--gray-4` | Secondary buttons, nav hover |
| Band | `--band` | `--band` | Alternating section backgrounds |
| Vignette | `--vignette-bg`, 1px `--vignette-border` | `--vignette-bg`, 1px `--vignette-border` | Product screenshots, bento cards |
| Hairline | `--gray-5` | `--gray-6` | Dividers, table rows, FAQ |
| Field border | `--gray-7` | `--gray-7` | Inputs, select |
| Headline / body | `--gray-12` / `--gray-11` | same steps | Text |
| Muted text | `--gray-9` | `--gray-9` | Captions, metadata |
| UI accents | `--ui-accent-orange`, `--ui-accent-blue`, `--ui-accent-green`, `--ui-accent-red` | tinted variants | Decorative in vignettes only |
| Badge tints | `--orange-pale`, `--blue-pale`, `--green-pale`, `--purple-pale`, `--pink-pale` with matching hue text | darker variants | Tags in vignettes |

- Focus ring: `--aura-outline: var(--gray-12) solid 2px` with 2px offset.
- Logo wall items use `--gray-11` for monochrome treatment.
- Mobile nav: the menu toggle sits before the list in the DOM; Escape closes and returns focus; open menu is `--gray-1` surface.

> **Upstream limitation, `--gray-contrast: undefined`:** the shared generator writes `--gray-contrast: undefined` and Aura `main.css`/`globals.css` map `--aura-text-primary-inverse` to it, so `.button-fill` labels fall back to inherited ink, which vanishes on an ink pill. Setting `--aura-text-primary-inverse: var(--accent-contrast)` in `:root` is **required** for this flavor. The generator is not fixed by this flavor and generated files are never patched by hand.

### Dark mode

Reinterpret, do not invert, through semantic variables in one `.dark` block.

| Variable | Light | Dark |
| --- | --- | --- |
| `--band` | `#f7f7f5` | `#1e1e1e` |
| `--vignette-bg` | `#fafafa` | `#1a1a1a` |
| `--vignette-border` | `#e8e8e6` | `#333333` |
| `--pill-soft` | `#f7f7f5` | `#2a2a2a` |
| Accent | ink | white |
| UI accent hues | full saturation | slightly muted |

In dark mode, product vignettes gain a subtle 1px border ring to maintain definition. Headlines stay full `--gray-12`.

## Typography

- Display: Inter 600 throughout; no secondary display face.
- Hero `h1`: `--min: 2.5rem; --val: 7.5vw; --max: 6rem` (96px at desktop), line-height 1.0, `-0.04em`.
- Section `h2`: `--min: 1.75rem; --val: 4vw; --max: 3rem` (48px), line-height 1.1, `-0.03em`.
- Card titles `h3`: `--max: 1.5rem` (24px), weight 600, line-height 1.25, `-0.02em`.
- Body: Inter 400 18px/1.55; card descriptions 15px `text-sm`; nav links 15px 500.
- Labels: Inter 500 14px. Eyebrows: Inter 500 12px uppercase `tracking-wide` in `--gray-9`.
- Tabular data uses `font-variant-numeric: tabular-nums`.

## Layout

| Source px | Aura step | px | Use |
| --- | --- | --- | --- |
| 1280 content | `max-w-98.5` | 1280.5 | Main wrap |
| 1080 narrow | `max-w-83` | 1079 | Text sections |
| 120–140 section | `py-10` | 130 | Section rhythm |
| 80 large gap | `gap-6` | 78 | Bento grids |
| 48 medium gap | `gap-3.5` | 45.5 | Card grids |
| 32 small gap | `gap-2.5` | 32.5 | Internal card spacing |
| 24 padding | `p-2` | 26 | Card padding |
| 16 tight | `gap-1` / `p-1` | 13 | Tight elements |
| 8 micro | `gap-0.5` | 6.5 | Icon gaps |

- Hero: centered column, headline max-width about 1000px, buttons inline with 13px gap.
- Bento grids: 2–3 columns with mixed span sizes; collapse to single column below 768px.
- Logo wall: single row, marquee animation, fade masks at edges.
- FAQ: two-column grid at desktop, single column mobile.

## Elevation & Depth

Minimal. Primary surfaces are flat with tone differentiation (`--band` vs `--gray-1`). Vignettes have a 1px `--vignette-border`. Dropdown menus get a subtle `shadow-md` (`0 4px 12px rgba(0,0,0,0.08)`). No other shadows.

| Layer | Treatment |
| --- | --- |
| Page | `--gray-1` |
| Band sections | `--band` |
| Vignettes | `--vignette-bg`, 1px `--vignette-border`, `rounded-lg` |
| Cards | `--gray-1` or `--band`, 1px `--gray-5`, `rounded-lg` |
| Dropdowns | `--gray-1`, `shadow-md`, `rounded-md` |
| Modals | `--gray-1`, `shadow-lg`, `rounded-xl` |

## Shapes

- Buttons: `rounded-full` (9999px) for all buttons; pill shape is signature.
- Inputs: `rounded-md` (10px).
- Cards and vignettes: `rounded-lg` (16px).
- Large panels: `rounded-xl` (24px).
- Icons: 20px default, 16px in compact contexts; Radix icons with `className="icon"`.

Buttons are tall pills: primary `h-3` (39px) with `px-2` (26px), secondary same or `h-2.5` (32.5px) for compact nav.

## Components

| Element | Aura | Class overrides |
| --- | --- | --- |
| Primary button | `Button variant="fill"` | `rounded-full` |
| Secondary button | `Button variant="outline"` | `rounded-full bg-[--pill-soft] border-transparent hover:bg-[--pill-soft-hover]` |
| Ghost button | `Button variant="ghost"` | `rounded-full` |
| Nav | `NavigationMenu` | Links 15px 500, logo left, CTAs right |
| Bento card | `Card` | `rounded-lg border border-[--vignette-border] bg-[--vignette-bg] p-2` |
| Logo wall | `Marquee` | Monochrome `--gray-11` logos, fade masks |
| Stats | `Stat`, `StatValue`, `StatLabel` | `StatValue` in display weight |
| FAQ | `Accordion` | Hairline borders, `ChevronDown` indicator |
| Feature grid | CSS Grid | `grid-cols-2 lg:grid-cols-3 gap-6` |
| Pricing cards | `Card` | `rounded-xl p-3` with stacked features |
| Badges | `Badge` | `bg-[--blue-pale] text-[--blue]` pattern |
| Input | `Input` | `rounded-md` |
| Select | `NativeSelect` | `rounded-md` |
| Table | `Table` | `text-sm`, hairline row borders |
| Empty | `Empty` | Centered, muted illustration |
| Icons | Radix | `className="icon"` |

### Band sections

Wrap alternating sections in `bg-[--band]` with `py-10` to create rhythm. White sections remain default.

```tsx
<section className="bg-[--band] py-10">
  <div className="mx-auto max-w-98.5 px-2">
    {/* content */}
  </div>
</section>
```

### Bento vignettes

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="col-span-2 rounded-lg border border-[--vignette-border] bg-[--vignette-bg] p-2">
    <div className="aspect-video rounded-md bg-[--ui-sidebar] mb-1.5">
      {/* product UI illustration */}
    </div>
    <h3 className="h5 mb-0.5">Feature headline</h3>
    <p className="text-sm text-[--gray-11]">Description text.</p>
  </div>
  <div className="rounded-lg border border-[--vignette-border] bg-[--vignette-bg] p-2">
    {/* smaller card */}
  </div>
</div>
```

## Do's and Don'ts

### Do

- Use ink (`--accent-9`) for primary actions; it is the brand.
- Use soft gray (`--pill-soft`) for secondary actions, not outline.
- Keep product vignettes clean with minimal internal detail.
- Use generous whitespace; let content breathe.
- Keep headlines bold and tight-tracked.
- Use band sections to break up long pages.
- Apply monochrome treatment to partner logos.
- Use the oversized hero headline as the focal point.

### Don't

- Don't use colored backgrounds for primary buttons.
- Don't add shadows to cards; use borders.
- Don't use colored text for headlines; keep them ink.
- Don't underline links in body text; use `--accent-9` color only.
- Don't use more than two levels of gray bands.
- Don't place UI accents (orange, blue, etc.) outside of vignettes.
- Don't use rounded corners smaller than 6px.
- Don't mix pill and squared buttons.
- Don't copy source's trademarked content.

## Motion

All motion respects `prefers-reduced-motion`. Standard transitions:

| Element | Property | Duration | Easing |
| --- | --- | --- | --- |
| Button hover | background-color | 150ms | ease-out |
| Link hover | color | 100ms | ease |
| Dropdown open | opacity, transform | 150ms | ease-out |
| Accordion | height | 200ms | ease-in-out |
| Marquee | transform | 30s | linear infinite |
| Focus ring | box-shadow | 100ms | ease |

Logo marquee pauses on hover. Reduced motion: marquee stops, accordion uses opacity instead of height, dropdowns appear instantly.

## Reference

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function HeroSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-98.5 px-2 text-center">
        <h1 className="h1 mx-auto max-w-[800px] mb-2">
          Where teams build together.
        </h1>
        <p className="text-lg text-[--gray-11] mb-3 max-w-[500px] mx-auto">
          Capture ideas, coordinate work, and ship faster with Plinth.
        </p>
        <div className="flex items-center justify-center gap-1">
          <Button variant="fill" className="rounded-full h-3 px-2">
            Get started free
          </Button>
          <Button
            variant="outline"
            className="rounded-full h-3 px-2 bg-[--pill-soft] border-transparent hover:bg-[--pill-soft-hover]"
          >
            Request a demo
          </Button>
        </div>
      </div>
    </section>
  );
}

export function BentoSection() {
  return (
    <section className="bg-[--band] py-10">
      <div className="mx-auto max-w-98.5 px-2">
        <p className="text-xs uppercase tracking-wide text-[--gray-9] mb-0.5">
          Features
        </p>
        <h2 className="h2 mb-5">Built for modern teams.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="col-span-1 lg:col-span-2 rounded-lg border-[--vignette-border] bg-[--vignette-bg] p-2">
            <div className="aspect-[16/9] rounded-md bg-[--ui-sidebar] mb-1.5 flex items-center justify-center">
              <span className="text-sm text-[--gray-9]">Product vignette</span>
            </div>
            <h3 className="h5 mb-0.5">Unified workspace</h3>
            <p className="text-sm text-[--gray-11]">
              Docs, tasks, and data in one connected space.
            </p>
          </Card>
          <Card className="rounded-lg border-[--vignette-border] bg-[--vignette-bg] p-2">
            <div className="aspect-square rounded-md bg-[--ui-sidebar] mb-1.5" />
            <h3 className="h5 mb-0.5">AI assistance</h3>
            <p className="text-sm text-[--gray-11]">
              Get answers and automate tasks.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="bg-[--band] py-10">
      <div className="mx-auto max-w-98.5 px-2 text-center">
        <h2 className="h2 mb-2">Get started today.</h2>
        <div className="flex items-center justify-center gap-1">
          <Button variant="fill" className="rounded-full h-3 px-2">
            Start for free
            <ArrowRightIcon className="icon ml-0.5" />
          </Button>
          <Button
            variant="outline"
            className="rounded-full h-3 px-2 bg-[--pill-soft] border-transparent hover:bg-[--pill-soft-hover]"
          >
            Contact sales
          </Button>
        </div>
      </div>
    </section>
  );
}
```