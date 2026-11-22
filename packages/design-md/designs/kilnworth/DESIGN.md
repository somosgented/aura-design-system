---
version: "alpha"
name: "Kilnworth"
description: "A warm off-white page broken by near-black ink bands and one electric-indigo band, with calm 4px-radius controls, light tight headings and mono labels, for developer workbench marketing pages."
extends: "../../DESIGN.md"
colors:
  primary: "#4b58ee"
  on-primary: "#ffffff"
  surface: "#fffcf7"
  surface-container: "#f2eee6"
  on-surface: "#121212"
  on-surface-variant: "#565a66"
  outline: "#e3ded4"
typography:
  headline-display:
    fontFamily: "Instrument Sans"
    fontWeight: 400
    fontSize: 64px
    lineHeight: 1.1
    letterSpacing: -0.03em
  body-md:
    fontFamily: "Instrument Sans"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
  label-md:
    fontFamily: "IBM Plex Mono"
    fontSize: 11px
    fontWeight: 400
    letterSpacing: 0.06em
rounded:
  sm: 4px
  md: 12px
  xl: 48px
spacing:
  unit: 13px
  section: 143px
  max-width: 1200px
aura:
  theme:
    light:
      accent: "#4b58ee"
      gray: "#7a7770"
      background: "#fffcf7"
    dark:
      accent: "#4b58ee"
      gray: "#85858f"
      background: "#0f0f11"
  fonts:
    sans: "Instrument Sans"
    label: "IBM Plex Mono"
    href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
  hero: "band"
  headingWeight: 400
  radius:
    button: "4px"
    input: "4px"
    surface: "12px"
  tokens:
    light:
      canvas: "#fffcf7"
      ink: "#121212"
      body: "#565a66"
      muted: "#5f636e"
      rule: "#e3ded4"
      stone: "#f2eee6"
      card-bg: "#ffffff"
      control-line: "#7d786e"
      focus: "#2f3bd0"
      link: "#3d49d6"
      ink-band: "#121212"
      ink-card: "#1e1e1e"
      panel: "#1f1f1f"
      on-ink: "#f5f3ee"
      on-ink-muted: "#b9b9b6"
      hero-dim: "#9a9a98"
      ink-control: "#8e8e96"
      band: "#4350de"
      on-band: "#ffffff"
      on-band-muted: "#f4f5ff"
      chart: "#5b64f2"
      orange: "#ff8a3d"
      green: "#4ade80"
      mint: "#a9e8c6"
      mint-ink: "#0f4a2b"
      peri: "#c6caff"
      peri-ink: "#232a94"
      coral: "#ff7a6b"
      peach: "#ffb38a"
      cream: "#fff0d6"
      violet: "#7b61ff"
      sky: "#6cc7ff"
      navy: "#1a1f4d"
      peri-deep: "#8f9bff"
    dark:
      canvas: "#0f0f11"
      ink: "#f4f2ed"
      body: "#b8bac3"
      muted: "#a3a6b1"
      rule: "#2a2a2e"
      stone: "#18171a"
      card-bg: "#1c1c20"
      control-line: "#7a7c88"
      focus: "#aab2ff"
      link: "#a5adff"
      ink-band: "#08080a"
      ink-card: "#0c0c0e"
      panel: "#131316"
      on-ink: "#f5f3ee"
      on-ink-muted: "#b9b9b6"
      hero-dim: "#9a9a98"
      ink-control: "#8e8e96"
      band: "#3f4bd8"
      on-band: "#ffffff"
      on-band-muted: "#f4f5ff"
      chart: "#7b86ff"
      orange: "#ff8a3d"
      green: "#4ade80"
      mint: "#a9e8c6"
      mint-ink: "#0f4a2b"
      peri: "#c6caff"
      peri-ink: "#232a94"
      coral: "#ff7a6b"
      peach: "#ffb38a"
      cream: "#fff0d6"
      violet: "#7b61ff"
      sky: "#6cc7ff"
      navy: "#1a1f4d"
      peri-deep: "#8f9bff"
---

# Kilnworth

> A warm off-white page, near-black ink bands with rounded bottoms and one saturated indigo band, with light tight headings and mono labels, for developer workbench marketing pages. Built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius, shape and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). Kilnworth is a fictional workbench: every name, figure, quote and badge in the showcase is example data, and nothing can be installed or bought.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the app uses `next/font`, load Instrument Sans and IBM Plex Mono there instead of the `@import`, and point `--font-sans` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Kilnworth's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Kilnworth is developer-calm with bold color moments. The page is a warm off-white. Full-bleed ink bands interrupt it, one warm stone section softens it, and a single electric-indigo band carries the proof. Headings are light (weight 400) and tight, with the second line of the hero muted. Labels, chips, counters and mono links use IBM Plex Mono. Controls have a 4px radius, never pills.

The showcase has two first-class appearances, light and dark. Light is warm paper with ink bands. Dark is a near-black page where the ink bands separate from it with a hairline and the indigo band deepens a step.

Showcase order: floating header, ink hero, one-line fiction note, Why (three-column box), Workflow (stone, disclosure list plus switching ink panel), Proof (indigo bento, marquee, ticker), Runtime (ink), Journal (card track), features, plan table, walkthrough form, pricing, FAQ, closing, giant wordmark band and footer.

## Colors

| Role | Token | Light | Dark |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `#fffcf7` | `#0f0f11` |
| Ink text | `--ink` | `#121212` | `#f4f2ed` |
| Body text | `--body` | `#565a66` | `#b8bac3` |
| Muted text | `--muted` | `#5f636e` | `#a3a6b1` |
| Card hairline | `--rule` | `#e3ded4` | `#2a2a2e` |
| Stone section | `--stone` | `#f2eee6` | `#18171a` |
| Card surface | `--card-bg` | `#ffffff` | `#1c1c20` |
| Control border | `--control-line` | `#7d786e` | `#7a7c88` |
| Focus ring | `--focus` | `#2f3bd0` | `#aab2ff` |
| Link text | `--link` | `#3d49d6` | `#a5adff` |
| Ink band | `--ink-band` | `#121212` | `#08080a` |
| Ink card | `--ink-card` | `#1e1e1e` | `#0c0c0e` |
| Footer panel | `--panel` | `#1f1f1f` | `#131316` |
| Indigo band | `--band` | `#4350de` | `#3f4bd8` |
| Chart line | `--chart` | `#5b64f2` | `#7b86ff` |

Accent buttons use `accent-9` (`#4b58ee`) with white text in both appearances. Text-size links use `--link`, a deeper or lighter step, so they hold their legibility on each canvas. On ink and indigo bands text uses `--on-ink`, `--on-ink-muted`, `--on-band` and `--on-band-muted`, and focus rings switch to `--on-ink`.

Art tokens (`--coral`, `--peach`, `--cream`, `--violet`, `--sky`, `--navy`, `--peri-deep`) fill CSS-only gradients and the closing wordmark. Status chips use `--mint` with `--mint-ink` and `--peri` with `--peri-ink`. `--orange` is only the small "New" tag, and `--green` only the up-arrow dot in the chart callout.

### Dark mode

Dark is not an inversion. The page, the stone section and the cards move to near-black neutrals with a faint cool tint, hairlines become about 12% white, and ink bands go darker than the page so a 1px hairline (`--rule`) separates them. The indigo band deepens one step (`--band`), cards inside it stay 10% white, and accent buttons keep `accent-9`. Control borders, chart line and focus ring lift so they stay visible on the dark surfaces.

## Typography

| Role | Face | Size | Weight | Tracking | Line height |
| --- | --- | --- | --- | --- | --- |
| h1 | Instrument Sans | 64px (40px at 360) | 400 | -0.03em | 1.1 |
| Section h2 | Instrument Sans | 46px (32px at 360) | 400 | -0.03em | 1.15 |
| Card title | Instrument Sans | 30px (26px at 360) | 400 | -0.02em | 1.2 |
| Body | Instrument Sans | 17px | 400 | 0 | 1.7 |
| Small | Instrument Sans | 14px | 400 to 500 | 0 | 1.5 |
| Quote | Instrument Sans | 32px (24px at 360) | 400 | -0.02em | 1.2 |
| Eyebrow chip | IBM Plex Mono | 11px, uppercase | 400 | 0.06em | 1.2 |
| Mono link | IBM Plex Mono | 12px, uppercase, right arrow | 500 | 0.04em | 1.2 |

The second line of the hero h1 is `--hero-dim`. The closing wordmark is a gradient-filled, `aria-hidden`, decorative element, and no readable text depends on gradient fill.

## Layout

Content width is 1200px (`max-w-92.5`) with 39px side margins at 1280 and 16px at 360. Spacing follows the 13px grid.

| Source px | Aura step | px | Use |
| --- | --- | --- | --- |
| 4 to 8 | `0.5` | 6.5 | chip gap, icon gap |
| 16 | `1` | 13 | control padding |
| 24 | `2` | 26 | bento gap, card padding |
| 32 | `2.5` | 32.5 | column padding |
| 40 | `3` | 39 | page margin |
| 44 | `3.5` | 45.5 | button height |
| 96 | `7.5` | 97.5 | heading to content |
| 120 | `9` | 117 | section padding at 360 |
| 140 | `11` | 143 | section padding at 1280 |

- Header: floating and sticky, 12px from the top, 1200px wide, 55px tall (48px at 360).
- Hero: ink band from the top, about 620px tall, bottom radius 48px (40px at 360).
- Why: one bordered box of three equal columns split by vertical hairlines; one column at 360.
- Workflow: list column about 487px, gap about 95px, panel column about 618px.
- Proof bento: 24px gaps. Row one is a tall quote card beside a stat card above a quote card. Row two is stat, art, stat. Row three is a check trio plus three badge cards.
- Journal: cards are 588px wide with 24px gaps, so about 2.2 cards show at 1280. Art is 2:1.
- Every section sits in normal flow. The header is the only floating element.

## Elevation & Depth

Cards carry a hairline and no shadow. Only the header bar (soft shadow with backdrop blur), the flyout panels and the workflow ink panel carry shadows. Art uses a faint dot grid and grain made of CSS gradients, at about half strength in dark.

## Shapes

| Element | Radius |
| --- | --- |
| Buttons, chips, inputs, mono links | 4px |
| Header bar | 8px |
| Art, bento cards, flyouts | 12px |
| Ink panel in Workflow | 16px |
| Hero and wordmark band bottoms | 48px (40px at 360) |
| Runtime band top | 16px |
| Why box | 0px |

## Components

Kilnworth overrides these Aura defaults and everything below sits under a `.kw` wrapper on the body, with enough specificity to beat `/aura/main.css`.

- `Button variant="fill"`: 4px radius, `accent-9` fill, white text, 14px weight 500, 36px tall in the header and 44px elsewhere.
- `Button variant="pill"` (secondary): transparent, 1px `--control-line` border on light bands, `--ink-control` on ink and white at 70% on indigo, 4px radius.
- `NavigationMenu`: three flyout triggers ("Platform", "Use cases", "Help") and a search trigger, each a `button` with `data-dropdown`, `aria-expanded` and `aria-controls`, plus three plain links. Flyouts list six items in two columns with a 16px glyph, a 15px title and a 13px one-line description. Escape closes and returns focus, an outside click closes, and opening one closes another.
- Below 1024px the nav collapses to a menu button that opens a `role="dialog"` overlay with `aria-modal="true"`, a close button, a focus trap and a locked body scroll.
- `Card`: 1px `--rule` hairline, `shadow-none`, 12px radius on art.
- `Input`, `NativeSelect`, `Textarea`: 4px radius, 1px `--control-line` border, explicit chevron in a `background-image` data URI on selects.
- `ToggleGroup` (`role="radiogroup"`): the runtime segmented control and the System / Light / Dark switch, both with a `--control-line` or `--ink-control` border. The active segment is a solid `--on-ink` fill with `--ink-band` text, so its edge passes 3:1.
- `Accordion`: real buttons with `aria-expanded`, used for the FAQ and the Workflow list.
- `Marquee`: giant uppercase text that only scrolls when `html` has class `motion`, with a visible pause and play button.
- `Badge`: mono chips; "Sample" labels mark every quote, badge and journal entry.
- `Stat`: 96px weight 300 figure with an 11px uppercase mono label and "(example)".

The literal tokens the showcase measures:

```
menu-overlay-width: 100vw
dropdown-width: 520px
quote-font: Instrument Sans
quote-size: 32px
```

Flyout panels are `min(520px, 100vw - 32px)` wide and anchored under their trigger, right-aligned to the bar when they would overflow. The mobile overlay is `position: fixed`, `left: 0`, `top: 0`, `width: 100vw` and `height: 100vh`.

Blockquote override: `.kw blockquote` and `.kw blockquote p` reset Aura's uppercase, 600 weight and quotes font, rendering in Instrument Sans 400, `text-transform: none`, 32px at 1280 (24px at 360) with -0.02em tracking. The opening quote mark hangs outside the text indent.

## Do's and Don'ts

**Do:**
- Keep headings at weight 400 with -0.03em tracking, and keep the second hero line muted.
- Use 4px radius on every control, never pills.
- Use `--control-line` (or the band variants) for every control border and `--rule` only for decorative card borders.
- Keep indigo to one band, plus buttons and links.
- Mark every figure, quote, badge and date as example data.
- Keep decorative art `aria-hidden` and clipped inside its own box.

**Don't:**
- Do not put readable text inside gradient fills.
- Do not use shadows on cards.
- Do not hide page overflow with `overflow-x` on `html` or `body`.
- Do not use photographs, animal marks or external images.
- Do not mix in a second display face.

## Motion

Every transition and animation sits behind `html.motion`, which the head script sets only when the user has no reduced-motion preference. The marquee is the only looping animation, and its pause and play button stops it. With `prefers-reduced-motion: reduce`, nothing runs, including after scrolling.

## Reference

```tsx
import { Button } from "@aura/ui";

export function KilnworthRuntimeActions() {
  return (
    <section className="bg-[var(--ink-band)] text-[var(--on-ink)]">
      <h2 className="h2 font-normal tracking-[-0.03em]">Try a cell on the machine you have.</h2>
      <div className="mt-6 flex flex-wrap gap-2">
        <Button variant="fill" className="h-11 rounded-[4px]">Get it for laptop</Button>
        <Button variant="pill" className="h-11 rounded-[4px] border-[var(--ink-control)]">What&rsquo;s inside</Button>
      </div>
    </section>
  );
}
```
