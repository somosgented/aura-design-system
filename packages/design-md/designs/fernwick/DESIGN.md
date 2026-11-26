---
version: "alpha"
name: "Fernwick"
description: "Crisp white and charcoal cloud surfaces, saturated cobalt pill actions, soft sky and mist panels, a near-black model band, and calm Outfit-plus-Figtree typography, a flavor of Aura for cloud-platform marketing pages."
extends: "../../DESIGN.md"
colors:
  primary: "#0b5bd3"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#f6f8fb"
  on-surface: "#1f2024"
  on-surface-variant: "#555961"
  outline: "#e2e4e8"
  sky: "#dcebfd"
  band: "#1b1c1f"
  hl-blue: "#1668d8"
  hl-saffron: "#a87000"
  hl-green: "#188038"
typography:
  headline-display:
    fontFamily: "Outfit"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.01em
  body-md:
    fontFamily: "Figtree"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Roboto Mono"
    fontSize: 12px
    fontWeight: 500
    letterSpacing: 0.04em
rounded:
  md: 16px
  lg: 24px
  full: 9999px
spacing:
  unit: 13px
  section: 97.5px
  max-width: 1232px
aura:
  theme:
    light:
      accent: "#0b5bd3"
      gray: "#555961"
      background: "#ffffff"
    dark:
      accent: "#9fc3ff"
      gray: "#828896"
      background: "#121316"
  fonts:
    sans: "Figtree"
    display: "Outfit"
    label: "Roboto Mono"
    href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Outfit:wght@400;500&family=Roboto+Mono:wght@400;500&display=swap"
  hero: "paper"
  headingWeight: 500
  radius:
    button: "9999px"
    input: "12px"
    surface: "16px"
  tokens:
    light:
      canvas: "#ffffff"
      panel: "#f6f8fb"
      panel-hover: "#ebeef4"
      sky: "#dcebfd"
      ink: "#1f2024"
      body: "#3c4046"
      muted: "#555961"
      rule: "#e2e4e8"
      control-line: "#70757e"
      primary: "#0b5bd3"
      primary-hover: "#0849ad"
      on-primary: "#ffffff"
      link: "#1d52cf"
      focus: "#0b5bd3"
      hl-blue: "#1668d8"
      hl-saffron: "#a87000"
      hl-green: "#188038"
      art-saffron: "#f2b600"
      art-magenta: "#c83b84"
      art-cyan: "#38a1f3"
      art-dark: "#101218"
      band: "#1b1c1f"
      band-card: "#282a2f"
      band-active: "#2b3648"
      band-rule: "#3c3f47"
      on-dark: "#f3f4f6"
      on-dark-muted: "#c2c6ce"
      on-dark-link: "#9cc2ff"
      on-dark-saffron: "#f6c433"
      on-dark-line: "#8a909e"
      on-dark-btn-bg: "#ffffff"
      on-dark-btn-ink: "#1b1c1f"
    dark:
      canvas: "#121316"
      panel: "#1b1d21"
      panel-hover: "#24272c"
      sky: "#182940"
      ink: "#e8eaed"
      body: "#d2d6dc"
      muted: "#b4b8bf"
      rule: "#33363d"
      control-line: "#828896"
      primary: "#9fc3ff"
      primary-hover: "#b8d3ff"
      on-primary: "#121316"
      link: "#a8c7fa"
      focus: "#9fc3ff"
      hl-blue: "#8ab4f8"
      hl-saffron: "#fdd663"
      hl-green: "#81c995"
      art-saffron: "#f2b600"
      art-magenta: "#d45598"
      art-cyan: "#5eb8ff"
      art-dark: "#101218"
      band: "#1e2024"
      band-card: "#2a2c32"
      band-active: "#2b3648"
      band-rule: "#3c3f47"
      on-dark: "#f3f4f6"
      on-dark-muted: "#c2c6ce"
      on-dark-link: "#9cc2ff"
      on-dark-saffron: "#f6c433"
      on-dark-line: "#8a909e"
      on-dark-btn-bg: "#ffffff"
      on-dark-btn-ink: "#1b1c1f"
---

# Fernwick

> Calm white and charcoal cloud surfaces, saturated cobalt pill actions, mist and sky panels, and a high-contrast dark model band — a cloud-platform marketing theme built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius, and voice. Everything it does not mention follows the base Aura spec at `extends` (13px grid, accent/gray step roles, Radix icons, forms, accessibility). All copy, metrics, stories, and visuals in the showcase are original and fictional.

## Apply to an Aura project

An agent that receives this file inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion, and voice; the base wins on grid, accessibility, icons, and forms.
2. Fetch the sibling `theme.css` (same folder, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block, and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the app uses `next/font`, load Outfit (400;500), Figtree (400;500;600), and Roboto Mono (400;500) there instead of the `@import`, and point `--font-display`, `--font-sans`, and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Fernwick's sample copy into an unrelated product.
6. Verify at 360px, 768px, and 1280px, in light and dark mode, and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Fernwick pairs an open pure-white light canvas and a neutral charcoal dark canvas with generous section breathing room, full-pill cobalt actions, cool mist (`--panel`) and sky (`--sky`) containers, and one full-bleed near-black model band (`--band`). Display headlines use Outfit at weight 500 with selective single-accent highlight phrases (cobalt blue, warm saffron, leaf green). Body and UI text stay crisp in Figtree; tiny uppercase metadata labels use Roboto Mono. Decorative cards use subtle 1px hairlines (`--rule`), while every interactive control uses a stronger boundary (`--control-line`) that holds at least 3:1 contrast against every surface behind it.

## Colors

| Role | Token | Light | Dark |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `#ffffff` | `#121316` |
| Tinted panel surface | `--panel` | `#f6f8fb` | `#1b1d21` |
| Panel hover / raised fill | `--panel-hover` | `#ebeef4` | `#24272c` |
| Sky CTA / active chip fill | `--sky` | `#dcebfd` | `#182940` |
| Primary ink | `--ink` | `#1f2024` | `#e8eaed` |
| Body text | `--body` | `#3c4046` | `#d2d6dc` |
| Muted body and captions | `--muted` | `#555961` | `#b4b8bf` |
| Decorative hairline | `--rule` | `#e2e4e8` | `#33363d` |
| Interactive control border | `--control-line` | `#70757e` | `#828896` |
| Primary button fill | `--primary` | `#0b5bd3` | `#9fc3ff` |
| Primary button hover | `--primary-hover` | `#0849ad` | `#b8d3ff` |
| Primary button label | `--on-primary` | `#ffffff` | `#121316` |
| Interactive link blue | `--link` | `#1d52cf` | `#a8c7fa` |
| Focus ring | `--focus` | `#0b5bd3` | `#9fc3ff` |
| Heading highlight (blue) | `--hl-blue` | `#1668d8` | `#8ab4f8` |
| Heading highlight (saffron) | `--hl-saffron` | `#a87000` | `#fdd663` |
| Heading highlight (green) | `--hl-green` | `#188038` | `#81c995` |
| Abstract art accents | `--art-saffron`, `--art-magenta`, `--art-cyan` | `#f2b600`, `#c83b84`, `#38a1f3` | `#f2b600`, `#d45598`, `#5eb8ff` |
| Always-dark art canvas | `--art-dark` | `#101218` | `#101218` |
| Dark band surface | `--band` | `#1b1c1f` | `#1e2024` |
| Dark band raised card | `--band-card` | `#282a2f` | `#2a2c32` |
| Dark band active pill | `--band-active` | `#2b3648` | `#2b3648` |
| Dark band hairline | `--band-rule` | `#3c3f47` | `#3c3f47` |
| Fixed ink on dark | `--on-dark` | `#f3f4f6` | `#f3f4f6` |
| Fixed muted text on dark | `--on-dark-muted` | `#c2c6ce` | `#c2c6ce` |
| Fixed link on dark | `--on-dark-link` | `#9cc2ff` | `#9cc2ff` |
| Fixed saffron on dark | `--on-dark-saffron` | `#f6c433` | `#f6c433` |
| Fixed control border on dark | `--on-dark-line` | `#8a909e` | `#8a909e` |
| Fixed light pill on dark | `--on-dark-btn-bg` / `--on-dark-btn-ink` | `#ffffff` / `#1b1c1f` | `#ffffff` / `#1b1c1f` |

Computed contrast highlights:
- Light mode: `--ink` on `--canvas` is `16.3:1`; `--muted` is `7.01:1` on `--canvas` and `6.61:1` on `--panel`; `--on-primary` on `--primary` is `6.09:1`; `--link` is `6.65:1` on `--canvas` and `5.49:1` on `--sky`; `--hl-saffron` on `--canvas` is `4.17:1` (large heading text); `--hl-green` on `--canvas` is `5.02:1`; `--control-line` is `4.63:1` on `--canvas`, `4.37:1` on `--panel`, and `3.82:1` on `--sky`.
- Dark mode: `--ink` on `--canvas` is `15.4:1`; `--muted` is `9.34:1` on `--canvas` and `8.51:1` on `--panel`; `--on-primary` on `--primary` is `10.4:1`; `--link` is `11.1:1` on `--canvas` and `8.82:1` on `--sky`; `--control-line` is `5.20:1` on `--canvas`, `4.74:1` on `--panel`, and `4.14:1` on `--sky`.
- Always-dark surfaces (`--band`, `--band-card`, `--band-active`, `--art-dark`): `--on-dark` stays `11.1:1` to `15.6:1`; `--on-dark-muted` stays `7.10:1` to `10.0:1`; `--on-dark-link` stays `6.72:1` to `9.48:1`; `--on-dark-saffron` stays `10.1:1` to `10.6:1`; `--on-dark-line` stays `4.32:1` to `5.38:1`.

### Dark mode

Dark mode uses a calm neutral charcoal canvas (`#121316`) with lifted `#1b1d21` panels, `#24272c` hover fills, `#182940` midnight-sky panels, and ~14% white structural hairlines (`#33363d`). Primary actions lift to pale cobalt (`#9fc3ff`) with near-black ink (`#121316`), and heading accents lighten (`#8ab4f8`, `#fdd663`, `#81c995`). The dark model band lifts slightly to `#1e2024` framed by top and bottom `--band-rule` hairlines, while every always-dark art card and video stage keeps its fixed `--on-dark*` token family across both appearances.

## Typography

| Role | Face | Weight | 1280px size | 360px size | Line height | Tracking |
| --- | --- | --- | --- | --- | --- | --- |
| Display h1 | Outfit | 500 | 46px (40px at 768px) | 34px | 1.15 | −0.01em |
| Section h2 | Outfit | 500 | 44px | 30px | 1.18 | −0.01em |
| Sub-section h2 / h3 | Outfit | 500 | 36px | 26px | 1.2 | −0.01em |
| Pull quote | Outfit | 400 | 32px | 24px | 1.25 | −0.02em |
| Card title | Outfit | 500 | 20px | 18px | 1.4 | 0 |
| Wordmark | Outfit | 500 | 22px | 22px | 1.0 | −0.01em |
| Body copy | Figtree | 400 | 16px | 16px | 1.5 | 0 |
| Buttons / nav / tabs | Figtree | 500 | 15px | 15px | 1.2 | 0 |
| Footer / compact copy | Figtree | 400 | 14px | 14px | 1.45 | 0 |
| Uppercase micro labels | Roboto Mono | 500 | 12px | 12px | 1.35 | 0.04em |

All three faces load through the single font stylesheet href in frontmatter. Display headings stay composed at weight 500 rather than heavy bold; emphasis comes from scale and single-accent phrases.

## Layout

- Max content container width: `1232px`, centered with `24px` side padding at `1280px` and `16px` at `360px`.
- Sticky header: `64px` tall, `--canvas` background, persistent 1px bottom `--rule` hairline.
- Section vertical padding: `96px` (`calc(var(--aura) * 7.5)` ≈ `97.5px`) at `1280px`, tightening to `64px` (`calc(var(--aura) * 5)` ≈ `65px`) at `360px`.
- Section order (12 sections):
  1. Sticky header (`64px` tall) with 22px 5-stroke fern frond mark and 22px Outfit wordmark, 5 muted 15px desktop nav links (3 dropdown triggers opening `560px` two-column flyouts; `--ink` on hover/expanded), transparent borderless search icon button opening a `320px` disclosure, muted `Guides` and `Help`, link-blue `Log in`, and `< 1024px` full-viewport dialog menu.
  2. Centered hero with 64px frond mark, 46px h1 (`40px` at 768px, `34px` at 360px), `16px` gap to a centered single-paragraph lead (`max-width: 600px`, two lines at 1280px with inline bold sample credit sentence), and `32px` gap to two 48px hero pills.
  3. Full-bleed clipped story carousel (`448px` × `300px` dark cards with `20px` gaps at `>= 1024px`, `300px` tall at `768px`, `min(100vw - 48px, 448px)` × `280px` below `768px`, active card centered with previous/next cards peeking from both edges), segmented prev/next pill with `aria-live`, and bottom-right `Ask Fernwick` floating pill kept `hidden` until scroll exceeds `480px`, hidden again while any footer link or text would sit under it, and always `hidden` below `600px`; at `>= 600px` the footer reserves `76px` of extra bottom padding so the pill rests below the legal line at the end of the page.
  4. Inset `24px`-radius mist spotlight panel (`16px` viewport inset) with 3-tab list (`Builders`, `Leaders`, `Programs`) and 3 horizontal cards with right-side CSS/SVG thumbnails.
  5. Two-column platform overview with blue-highlighted h2 and an 8-family disclosure accordion covering Security, Networking, Models and training, Build tools, Compute, Analytics, Object storage, and Databases (each opening to 4 sample services in 2 columns).
  6. Full-width always-dark model band with saffron-highlighted h2, interactive 4-item vertical list paired with a responsive `16:9` CSS preview stage (`width: 100%`, `min-width: 0`, stacking to `minmax(0, 1fr)` below `1024px`) + play toggle, and 3 raised dark cards.
  7. Customer stories carousel with leaf-green-highlighted h2, 4 tall split cards (3 visible at `1280px`, 1 per snap view at `360px`) with tinted top story and abstract dark bottom scene + play button, progress bar, and segmented prev/next controls.
  8. Industries showcase with saffron-highlighted h2, 12-industry vertical tablist (horizontal scrollable chip strip below `900px`), and a 3-tile panel mosaic (wide art tile, dark 40px stat tile, light story tile).
  9. Customer wordmarks strip of 8 fictional typographic marks (gentle marquee only under `html.motion` at `>= 900px` with a pause/play button that freezes the strip in place and resumes from the same position; static 2-column grid at `360px`) plus centered primary pill.
  10. Aura overview skeleton block: 4 stats, 3 mono-labeled feature cards, keyboard-scrollable plan comparison `<table>`, 3 pricing cards, sample walkthrough `<form>`, 4-item FAQ accordion, and a pull quote `<blockquote>`.
  11. Sky-blue `24px`-radius CTA panel (`1232px` max width) with cobalt-accented three-line h2, two action pills, and a clipped three-color overlapping arc/frond illustration bleeding off the right edge.
  12. Five-column footer directory (6–10 links per column), legal links + sustainability pledge + sample newsletter subscribe button + language `<select class="inputer">` pill with a globe glyph, vertically aligned with the subscribe button, appearance `radiogroup` (`System`, `Light`, `Dark`), and legal line.

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
| 1232 | 95 | 1235 |

## Elevation & Depth

Surfaces separate through canvas contrast (`--canvas` vs `--panel` vs `--sky` vs `--band`) and 1px hairlines (`--rule` for decorative cards, `--control-line` for interactive controls). Ambient shadows are reserved strictly for floating popovers: header flyout panels, the search disclosure, and the floating `Ask Fernwick` pill/panel (`0 12px 32px color-mix(in srgb, var(--ink) 12%, transparent)`). Static cards never carry heavy drop shadows.

## Shapes

- Buttons, segmented controls, chips, language select, and appearance switch: `9999px` full pill radius.
- Cards, story frames, video stage, and mosaic tiles: `16px` radius.
- Large spotlight panel, walkthrough panel, and sky CTA panel: `24px` radius.
- Form inputs, textareas, and form selects: `12px` radius; header flyouts and disclosure popovers: `16px` radius.
- Brand mark: five stacked rounded fern frond strokes (inline SVG paths) in a `--primary` to `--hl-green` gradient, paired with `Fernwick` in Outfit 500 at 22px (64px standalone frond in the hero).
- CTA panel graphic: three overlapping thick rounded arcs/fronds in cobalt, leaf green, and saffron clipped inside the sky panel.

## Components

Fernwick overrides Aura defaults under the `.fw` body scope:

- `Button variant="fill"`: full pill (`9999px`), `--primary` fill, `--on-primary` label, `40px` standard height (`48px` in hero), `15px` Figtree weight 500.
- `Button variant="pill"` (secondary): full pill (`9999px`), `--canvas` fill, `--ink` label, `1px solid var(--control-line)` border (`>= 3.8:1` on every surface).
- `NavigationMenu`: desktop dropdown triggers (`Use cases`, `Services`, `Learn`) use `<button data-dropdown>` with `aria-expanded`, `aria-controls`, and a trailing chevron. The header search icon button is transparent and borderless (retaining a visible `:focus-visible` ring) and opens a plain `min(320px, calc(100vw - 32px))` disclosure without `data-dropdown`. Below `1024px`, the menu button opens a full-viewport modal dialog (`role="dialog"`, `aria-modal="true"`, focus-trapped, Escape closes, body scroll locked).
- `Card`: `16px` radius, `1px solid var(--rule)` border, `shadow-none`.
- `Tabs`: underline tablist in the spotlight panel, vertical list in the dark model band, and vertical pill tablist (horizontal scrollable row `< 900px`) in the industries section, all supporting arrow-key navigation. Inactive list/tab items stay `background: transparent` with no border; active pills use their filled surface (`--band-active` or `--sky`) framed by a `1px` `--on-dark-line` or `--control-line` border.
- `Accordion`: real `<button aria-expanded>` disclosures in the 8-family platform list and 4-item FAQ section.
- `Stat`: 4-up grid with 44px Outfit 500 figures and `--muted` labels.
- `Table`: semantic `<table>` with `<caption>` inside an `overflow-x: auto` keyboard-focusable region (`role="region"`, `tabindex="0"`).
- `Input`, `NativeSelect` (`select.inputer`), `Textarea`: `12px` radius (`9999px` on footer language select), `--canvas` fill, `1px solid var(--control-line)` border, `position:static` and `margin:0` (overriding the base input margin); `select.inputer` renders a dual-gradient chevron in `--control-line` across both appearances.
- `ToggleGroup` / radiogroup: footer appearance switch (`System`, `Light`, `Dark`) using `role="radiogroup"` and `role="radio"` with `aria-checked`, an outer `1px solid var(--control-line)` capsule, transparent borderless inactive buttons, and a bordered `--canvas` active pill.

Measured structural contracts:

```
menu-overlay-width: 100vw
dropdown-width: 560px
quote-font: Outfit
quote-size: 32px
```

Header flyout panels are `min(560px, calc(100vw - 32px))` wide, anchored under their trigger.

Blockquote override: `.fw blockquote` and `.fw blockquote p` override Aura's uppercase quote style so pull quotes render in Outfit, `text-transform: none`, weight `400`, `32px` at `>= 1000px` (`24px` below `1000px`), `line-height: 1.25`, and `letter-spacing: -0.02em`.

## Do's and Don'ts

**Do:**
- Keep display headings at weight 500 in Outfit with at most one highlight accent per headline.
- Use `--control-line` (`>= 3:1`) on every interactive control border and `--rule` only on decorative dividers and static cards.
- Use fixed `--on-dark*` tokens on every always-dark surface (`--band`, story cards, customer scenes, dark stat tiles) in both light and dark modes.
- Clip full-bleed carousels and bleeding panel graphics inside their own `overflow: hidden` wrapper rather than hiding overflow on `html` or `body`.
- Guard every transition and the desktop wordmark marquee behind `html.motion`.

**Don't:**
- Do not use bright yellow saffron (`--art-saffron`) for text on light backgrounds; use `--hl-saffron` (`#a87000`) on white.
- Do not apply dark `--ink` text onto always-dark cards or scenes.
- Do not lock text-bearing cards to rigid heights that clip lines at `360px`.
- Do not hide sections behind scroll-reveal opacity transitions.
- Do not add external images or four-color cloud marks.

## Motion

All transitions, the one-shot reveal fade of the `Ask Fernwick` pill after `480px` of scroll, and the optional desktop customer-wordmark marquee sit strictly behind `html.motion`, which the head script adds only when `prefers-reduced-motion: no-preference` matches. Interactive hover, chevron, and carousel track transitions use `0.2s ease`. The customer-wordmark marquee includes a visible pause/play button (`aria-pressed`); under `prefers-reduced-motion: reduce`, the marquee stays static, the pause button is hidden, and `document.getAnimations()` contains no running animations.

## Usage example

```tsx
import { Button, Card } from "@aura/ui";

export function FernwickHero() {
  return (
    <section style={{ background: "var(--canvas)", paddingBlock: "calc(var(--aura) * 5)" }}>
      <h1
        className="h1"
        style={{
          fontFamily: "var(--aura-font-display)",
          fontSize: 46,
          fontWeight: 500,
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
          color: "var(--ink)",
        }}
      >
        One calm cloud for apps and models
      </h1>
      <div style={{ display: "flex", gap: "calc(var(--aura) * 1)", justifyContent: "center", marginTop: 32 }}>
        <Button variant="fill" style={{ borderRadius: 9999, height: 48, background: "var(--primary)", color: "var(--on-primary)" }}>
          Start building
        </Button>
        <Button variant="pill" style={{ borderRadius: 9999, height: 48, background: "var(--canvas)", color: "var(--ink)", border: "1px solid var(--control-line)" }}>
          Talk to an expert
        </Button>
      </div>
    </section>
  );
}
```
