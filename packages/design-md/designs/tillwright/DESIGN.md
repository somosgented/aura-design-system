---
version: "alpha"
name: "Tillwright"
description: "Near-black ink rectangles, periwinkle-tinted headlines, a navy feature band and a monospaced label face for eyebrows. A sharp, commerce-forward flavor of Aura for storefront and checkout marketing pages."
extends: "../../DESIGN.md"
colors:
  primary: "#0d0f18"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#f4f4f7"
  on-surface: "#0d0f18"
  on-surface-variant: "#5a5a6e"
  outline: "#dddde8"
  periwinkle: "#b8c0ff"
  aqua: "#00d4c0"
  navy: "#071030"
typography:
  headline-display:
    fontFamily: "Schibsted Grotesk"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.01em
  body-md:
    fontFamily: "Schibsted Grotesk"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Spline Sans Mono"
    fontSize: 12px
    fontWeight: 500
    letterSpacing: 0.1em
rounded:
  md: 13px
  button: 2px
  full: 9999px
spacing:
  unit: 13px
  section: 97.5px
  max-width: 1280.5px
aura:
  theme:
    light:
      accent: "#1836cc"
      gray: "#5a5a6e"
      background: "#ffffff"
    dark:
      accent: "#3d5fe0"
      gray: "#6a6a84"
      background: "#071030"
  fonts:
    sans: "Schibsted Grotesk"
    display: "Schibsted Grotesk"
    label: "Spline Sans Mono"
    href: "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600&family=Spline+Sans+Mono:wght@400;500&display=swap"
  hero: "field"
  headingWeight: 400
  radius:
    button: "2px"
    input: "2px"
    surface: "13px"
  tokens:
    light:
      ink: "#0d0f18"
      canvas: "#ffffff"
      paper: "#f4f4f7"
      night: "#071030"
      night-ink: "#f0f2ff"
      night-muted: "#8890b8"
      periwinkle: "#b8c0ff"
      aqua: "#00d4c0"
      control-line: "#767690"
      lavender-wash: "#eeeffe"
      deep-action: "#0a2070"
      rule: "#dddde8"
      chip-pending: "#fff0c2"
      chip-ink: "#5a4000"
    dark:
      ink: "#f0f2ff"
      canvas: "#071030"
      paper: "#0e1a48"
      night: "#040c22"
      night-ink: "#f0f2ff"
      night-muted: "#8890b8"
      periwinkle: "#b8c0ff"
      aqua: "#00d4c0"
      control-line: "#8890b8"
      lavender-wash: "#111c50"
      deep-action: "#3d5fe0"
      rule: "#1e2a60"
      chip-pending: "#3a2e00"
      chip-ink: "#ffd966"
---

# Tillwright

> Ink-rectangle buttons, periwinkle headline accents, a navy feature band and mono eyebrows — a commerce-platform marketing flavor for storefronts that mean business. Built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). Name, copy, fictional metrics and diagrams are original.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated scale values.
3. If the app uses `next/font`, load `Schibsted Grotesk` (400, 500, 600) and `Spline Sans Mono` (400, 500) there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Tillwright's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Tillwright establishes its own visual language around ink-rectangle buttons, a periwinkle tint on the second line of hero headlines, a deep-navy rounded feature band and a monospaced uppercase label face for all eyebrows and metadata. Controls are square (2px radius), headlines are regular-weight (400) with slight negative tracking, and a cyan-teal accent appears in gradients against dark surfaces. The two-tier header, wide mega-menu panels, alternating feature panels with hairline borders and a full-bleed dark hero are the signature layout pieces. Use it for storefront, checkout, B2B, channels and AI-agent marketing surfaces.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. Map flavor roles to Aura steps:

| Flavor role | Token | Aura step | Use |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `gray-1` | App background |
| Secondary surface, cards | `--paper` | `gray-2`–`gray-3` | Feature panels, form fields |
| Ink / primary fill | `--ink` | `gray-12` | Body text, ink buttons, logo |
| Muted text | `gray-11` | `gray-11` | Secondary prose, placeholder |
| Indigo-blue accent | `accent-9` / `--primary` | `accent-9` | Links, focus ring, hover fill |
| Accent hover | `--deep-action` | `accent-10` | Button and nav hover |
| Hairline border | `--rule` | `gray-6` | Panel borders, table rules |
| Periwinkle headline tint | `--periwinkle` | `accent-4` tinted | Hero second line, stat callouts |
| Lavender wash | `--lavender-wash` | `accent-2` | Feature panel gradient base |
| Aqua gradient accent | `--aqua` | custom | Dark panel gradients, channel highlight |
| Navy band | `--night` | dark `gray-1` | Navy feature band and footer |
| Night text | `--night-ink` | dark `gray-12` | Text inside navy band |
| Night muted | `--night-muted` | dark `gray-11` | Secondary text inside navy band |
| Pending chip fill | `--chip-pending` | custom | Orders table status badge |
| Pending chip text | `--chip-ink` | custom | Orders table status badge text |

- Ink buttons use `bg-(--ink) text-(--canvas)`, turning `bg-(--deep-action)` on hover in light mode. Blue lives in hover and focus only.
- Text on accent fill uses `accent-contrast`. Never `gray-11` on a dark surface.
- Contrast rule: `--ink` on `--canvas` ≥ 15:1 light, `--night-ink` on `--night` ≥ 15:1 dark. All normal text ≥ 4.5:1; large text, control borders and icons ≥ 3:1 in both appearances.

### Dark mode

Tillwright's dark mode is an adaptation of its own light palette: the canvas becomes the deep night-navy (`--night`), cards step up to `--paper` (a lighter navy), and a small set of semantic variables switches in a `.dark` block. Nothing is simply inverted.

| Variable | Light | Dark |
| --- | --- | --- |
| `--canvas` | white | night-navy |
| `--paper` | soft gray | lighter navy |
| `--ink` | near-black | near-white |
| `--rule` | light lavender-gray | dark navy border |
| `--lavender-wash` | pale lavender | deep lavender-navy |
| `--chip-pending` | amber fill | dark amber fill |
| `--chip-ink` | dark amber text | gold text |
| Accent seed | electric blue | lighter electric blue |
| Native select border | `--control-line` | explicit `--control-line` + visible chevron |

Inside the navy band use `--night-ink` and `--night-muted`; never raw white or black.

**Interaction states**

- Light: ink buttons hover to `--deep-action` (canvas text); nav triggers, mega links and blurb links hover to `--deep-action`; the white CTA hovers to `--lavender-wash` with `--night` text.
- Dark: nav trigger hover and open (`aria-expanded`) state, mega/mobile menu links and blurb links hover to `--periwinkle`; ink and plan buttons hover to a `--periwinkle` fill with `--night` text; the white CTA hovers to a white/periwinkle mix with `--night` text.
- Focus ring: 2px solid, accent-9 in light, `--periwinkle` in dark; on night surfaces (hero, navy band, resources, story play button) `--night-ink` in light and white in dark; on the featured plan card `--night-ink` (light) / white (dark). Every ring is at least 3:1 against its surroundings.
- Form: field errors use `--deep-action` (light) / `--periwinkle` (dark); the success message uses an aqua/night mix in light and `--aqua` in dark; all at least 4.5:1.
- Disabled rail buttons: `--control-line` icon with a dashed `--control-line` border, no opacity.
- Services timeline: below 768 px the three columns stack into one, the empty slots are hidden and labels never break inside a word.

## Typography

| Element | Size / weight | Aura class |
| --- | --- | --- |
| Display headline `h1` | 72px / 400 / -0.01em | `font-display text-[72px] leading-[1.02] tracking-[-0.01em]` |
| Section headline `h2` | 48px / 400 / -0.01em | `text-[48px] leading-[1.05] tracking-[-0.01em]` |
| Sub-headline `h3` | 32px / 400 | `text-[32px] leading-[1.1]` |
| Body | 17px / 400 / 1.5 | `text-[17px] leading-[1.5]` |
| Mono eyebrow label | 11px / 500 / 0.1em uppercase | `font-label text-[11px] uppercase tracking-[0.1em]` |
| Button label | 15px / 500 | `text-[15px] font-medium` |
| Table cell | 14px / 400 | `text-sm` |
| Stat value | 48px / 400 / -0.02em | `text-[48px] leading-none tracking-[-0.02em]` |

Headlines end with a full stop in marketing copy. Weights above 500 are limited to button labels and bold feature list terms.

## Layout

Tillwright's spacing maps onto the 13px grid:

| Source px | Aura step | px | Use |
| --- | --- | --- | --- |
| 12 / 20 button padding | `px-1 py-1` → `px-1.5` | 13 / 19.5 | Ink and outline buttons |
| 24 gutter | `px-2` | 26 | Content columns |
| 40 section gap | `gap-3` | 39 | Feature panel columns |
| 48 stat gap | `gap-3.5` | 45.5 | Stats row |
| 80 section padding | `py-6` | 78 | Standard sections |
| 96 hero padding | `py-7.5` | 97.5 | Hero stage |
| 112 band padding | `py-8.5` | 110.5 | Navy band |
| 1280 max content | `max-w-98.5` | 1280 | Container |

**Two-tier header:** a thin utility bar (small `font-label` links, `gray-2` background) above a white main bar with wordmark, four `NavigationMenu` triggers and two CTA buttons. The mega-menu panel is positioned against the header element, spans `max-w-98.5`, and is never anchored to the trigger `<li>`.

**Mega-menu:** full content-width panel below the main bar, divided into four to five columns of links. On mobile (≤ 1023px) a burger button replaces the desktop nav; tapping it opens a full-width, full-remaining-height fixed panel that is internally scrollable and covers the page below the header, closing with Escape (focus returns to the burger) or by selecting a link. `aria-expanded` is kept in sync on the burger and mobile sub-triggers.

**Feature panels:** `13px` radius, `lavender-wash`-to-white gradient, hairline `--rule` border, visual on one side and text on the other, alternating. Inside the navy band, panels use `--paper` (dark navy) with the same radius.

**Navy band:** deep `--night` background, `26px` top radius, centered headline, outline-on-navy button, then interior feature panels. The band is full-bleed horizontally (edge-to-edge) and sits flush with the viewport sides at all breakpoints; only the top corners are rounded.

**Hero:** dark stage (`--night` with a faint perspective grid drawn in SVG), centered headline with the second line in `--periwinkle`, centered paragraph, one white ink button. Below: a product-dashboard mockup (orders table with dates, customer names and `Badge` status chips) with a floating Channels dropdown card. The hero bottom edge has a `lavender-wash` gradient fade. The hero bounding box never intersects the next section.

## Elevation & Depth

- **Page:** flat `--canvas`; no ambient shadow.
- **Feature panels:** hairline `border-(--rule)`, no shadow.
- **Navy band panels:** `border-(--rule)` at reduced opacity, no shadow.
- **Floating dashboard card:** `shadow-md` only on the Channels dropdown overlay inside the hero.
- **Mega-menu panel:** `shadow-lg border-(--rule)` to separate from page content.
- Override Aura `Card` default shadow with `shadow-none` and add `border border-(--rule)` for feature panels.

## Shapes

- Radius is `2px` for all buttons and inputs; `13px` for surface panels and cards; `26px` for the navy band top corners.
- No pill buttons. The outline button is a restyled `Button variant="pill"` with `rounded-[2px]`.
- Status chips are `Badge` with `rounded-[2px]`.
- The hero grid texture is an inline SVG perspective grid, never a raster image.
- Tillwright wordmark: a `2px`-radius square filled with `accent-9`, containing the letters "TW" in `accent-contrast`, followed by the name in `font-display font-medium`.

## Components

Map each flavor element to Aura registry components:

| Flavor element | Aura component | Notes |
| --- | --- | --- |
| Ink fill button | `Button variant="fill"` | `bg-(--ink) text-(--canvas) rounded-[2px] hover:bg-(--deep-action)` |
| Outline button | `Button variant="pill"` restyled | `bg-transparent border border-(--ink) text-(--ink) rounded-[2px]`; on navy band: `border-(--night-ink) text-(--night-ink)` |
| Navigation + mega-menu | `NavigationMenu` | Full-width panel positioned against header; `aria-expanded` in sync |
| Feature panels | `Card` | `rounded-[13px] shadow-none border border-(--rule) bg-gradient-to-br from-(--lavender-wash) to-(--canvas)` |
| Navy band feature panels | `Card` | `rounded-[13px] shadow-none border border-(--rule) bg-(--paper)` |
| Stats row | `Stat`, `StatValue`, `StatLabel` | Values in `text-[48px] tracking-[-0.02em]`, labels in `font-label uppercase` |
| Orders data table | `Table` | `text-sm` cells, `font-label uppercase` headers, `border-b border-(--rule)` rows |
| Status chips (Pending, etc.) | `Badge` | `rounded-[2px] bg-(--chip-pending) text-(--chip-ink) font-label uppercase text-[11px]` |
| Solutions scroller | `Marquee` / scroll list | Horizontal scroll on mobile, `overflow-x-auto snap-x`; items have `min-width: 0 overflow-wrap: break-word` |
| Book-a-demo form | `Input`, `NativeSelect` | Local only; `preventDefault`, shows inline confirmation; `NativeSelect` has explicit `border border-(--control-line)` and visible chevron in dark |
| Pricing plans | `Card` | Three plans; recommended one `bg-(--ink) text-(--canvas)`; `rounded-[13px]` |
| FAQ accordion | `Accordion` | `border-t border-(--rule)`, sans-serif triggers (matches body font), first item open |
| Metric strip | `Stat` in `flex` | Cyan-to-periwinkle gradient band; fictional sample figures; no third-party citation |
| Footer column groups (mobile) | `Accordion` | Collapses to accordions below 768px |
| Mono eyebrows | `span` | `font-label text-[11px] uppercase tracking-[0.1em] text-gray-11` |

## Do's and Don'ts

- Do use ink (`--ink`) for primary button fill and near-black body text; keep electric blue for hover and focus only.
- Do end marketing headlines with a full stop.
- Do apply `font-label uppercase tracking-[0.1em]` to all section eyebrows and table headers.
- Do keep feature panels on the `lavender-wash`-to-white gradient with a hairline `--rule` border.
- Do give `NativeSelect` an explicit visible `border border-(--control-line)` and a CSS chevron in dark mode.
- Do position the mega-menu panel against the header, spanning full content width.
- Do write fictional sample figures; never cite a real study, analyst firm or third-party report.

- Don't use pill or fully-rounded buttons; radius is `2px` throughout.
- Don't put electric-blue text on a white or light surface for body copy.
- Don't allow the hero stage to visually bleed into the section below it.
- Don't add real brand logos, payment-provider marks or customer trademarks.
- Don't autoplay any carousel or scroller.
- Don't use hex literals inside component styles; reference tokens only.
- Don't animate numbers, prices or the hero grid texture.

## Motion

All motion sits behind `@media (prefers-reduced-motion: no-preference)`. With `prefers-reduced-motion: reduce` everything appears in its final state with no transition.

| Element | Animation | Timing |
| --- | --- | --- |
| Section content entrance | `fade-up`: `opacity 0→1`, `translateY 20px→0` | 400ms `cubic-bezier(0.4, 0, 0.2, 1)` |
| Feature panel entrance | `fade-left`: `opacity 0→1`, `translateX -16px→0` | 350ms `cubic-bezier(0.4, 0, 0.2, 1)` |
| Ink button fill | `background-color` transition | 180ms linear |

Fade-up and fade-left use `IntersectionObserver` with the `.motion` class (applied only under `prefers-reduced-motion: no-preference`); elements start hidden and transition to visible on entry. A small number of elements use a `transition-delay` for sequential appearance. Hover transitions on buttons and links are always active regardless of motion preference.

Fade-up and fade-left use `IntersectionObserver`; elements start hidden (`opacity: 0`) and transition to visible on entry.

## Reference

```tsx
<section className="mx-auto max-w-[1280px] px-[26px] py-[97.5px] grid gap-[39px] lg:grid-cols-2 items-center">
  <div className="grid gap-[26px]">
    <span className="font-label text-[11px] uppercase tracking-[0.1em] text-gray-11">
      Platform
    </span>
    <h2 className="font-display text-[48px] leading-[1.05] tracking-[-0.01em] text-(--ink)">
      Build your storefront visually.
    </h2>
    <ul className="grid gap-[13px]">
      {["Drag-and-drop sections that ship production CSS.", "Theme tokens synced to your brand in one click.", "Live preview across device widths as you edit."].map((item) => (
        <li key={item} className="flex gap-[13px] items-start text-[17px] text-gray-11">
          <span className="mt-[6px] w-[2px] self-stretch bg-(--deep-action) shrink-0" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
    <div className="flex gap-[13px] flex-wrap">
      <Button
        variant="fill"
        className="rounded-[2px] bg-(--ink) text-(--canvas) text-[15px] font-medium px-[19.5px] py-[13px] hover:bg-(--deep-action) transition-colors duration-180"
      >
        See a live demo
      </Button>
      <Button
        variant="pill"
        className="rounded-[2px] bg-transparent border border-(--ink) text-(--ink) text-[15px] font-medium px-[19.5px] py-[13px] hover:bg-(--paper) transition-colors duration-180"
      >
        Start for free
      </Button>
    </div>
  </div>
  <Card className="rounded-[13px] shadow-none border border-(--rule) bg-gradient-to-br from-(--lavender-wash) to-(--canvas) p-[32.5px] flex items-center justify-center min-h-[320px]">
    <span className="font-label text-[11px] uppercase tracking-[0.1em] text-(--night-muted)">
      Visual editor mockup
    </span>
  </Card>
</section>
```
