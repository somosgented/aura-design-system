---
version: "alpha"
name: "Bluefold"
description: "A white, quiet canvas with tight dark headlines, ink pills, a cream panel and a light desktop-app mockup, plus a folded-square mark. An Aura flavor for assistant apps, helper crews and desktop agent products."
extends: "../../DESIGN.md"
colors:
  primary: "#111111"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#f2f2f2"
  on-surface: "#111111"
  on-surface-variant: "#6b6b6b"
  outline: "#e5e5e5"
  cream: "#f4efe4"
  bubble: "#f1f1f1"
typography:
  headline-display:
    fontFamily: "Inter Tight"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: -0.035em
  body-md:
    fontFamily: "Inter"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Inter"
    fontSize: 13px
    fontWeight: 500
    letterSpacing: 0em
rounded:
  md: 13px
  lg: 19.5px
  xl: 26px
  full: 9999px
spacing:
  unit: 13px
  section: 143px
  max-width: 1222px
aura:
  theme:
    light:
      accent: "#111111"
      gray: "#737373"
      background: "#ffffff"
    dark:
      accent: "#ededed"
      gray: "#7a7a7a"
      background: "#0d0d0d"
  fonts:
    sans: "Inter"
    display: "Inter Tight"
    label: "Inter"
    href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600&family=Inter:wght@400;500;600&display=swap"
  hero: "paper"
  headingWeight: 500
  radius:
    button: "9999px"
    input: "13px"
    surface: "19.5px"
  tokens:
    light:
      cream: "#f4efe4"
      cream-ink: "#1a1712"
      bubble: "#f1f1f1"
      window: "#fbfbfb"
      dot-red: "#ff5f57"
      dot-amber: "#febc2e"
      dot-green: "#28c840"
      avatar-teal: "#4fb3a2"
      avatar-orange: "#f5a33b"
      avatar-indigo: "#5b5bd6"
      avatar-violet: "#8e6cf0"
      avatar-blue: "#3b82f6"
      avatar-coral: "#ef6a3a"
      band: "#0f0f0f"
      band-ink: "#f5f5f5"
      alert-ink: "#b42318"
    dark:
      cream: "#221e17"
      cream-ink: "#f2ead9"
      bubble: "#1f1f1f"
      window: "#141414"
      dot-red: "#e0564f"
      dot-amber: "#d9a43a"
      dot-green: "#33a852"
      avatar-teal: "#3f9a8b"
      avatar-orange: "#d98c2b"
      avatar-indigo: "#6e6ee0"
      avatar-violet: "#9a7cf2"
      avatar-blue: "#4b8ef0"
      avatar-coral: "#e0663a"
      band: "#171717"
      band-ink: "#ededed"
      alert-ink: "#ff8a7a"
---

# Bluefold

> A white desk, one ink pill and a crew of helpers that come back with finished work. Built on Aura.

Source flavor: <https://x.ai/bot>. **Source.** (a) *Observed in detail* from a real 1920×1072 desktop screenshot of the page captured on 2026-11-08: the nav, the centered announcement line, the hero headline with an inline symbol, the muted subtitle, the ink and light-gray pill CTAs, and the light desktop-app mockup (window dots, search, avatar list, light and black chat bubbles, a "thinking" line), with measured proportions. (b) *Observed live only at general scale* (a full-page thumbnail): the order and rough rhythm of the later sections (cream panel, 2×2 cards, jobs, dark media band, pricing, download, guides, FAQ, closing, footer). Their details here are approximations. (c) *Bluefold's own interpretation*: fonts, dark mode, motion, exact spacing, every token not measured from the hero, the folded-square mark and all copy. The previous Bluefold version was based only on the page's Open Graph card (a blue field with a white sweep); this version replaces that direction. It is not an exact replica, and no name, logo, mascot, copy, imagery, price or claim of the source is reused. Bluefold and its "crew of desktop helpers" are fictional.

This file adapts that visual language to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values. After those blocks, set `--aura-text-primary-inverse: var(--accent-contrast)` in `:root` so filled buttons keep their inverse label (see **Upstream limitation** below).
3. If the app uses `next/font`, load `Inter Tight` (500, 600) and `Inter` (400, 500, 600) there instead of the `@import`, and point `--font-display` at Inter Tight and `--font-sans` and `--font-label` at Inter.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Bluefold's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Bluefold is a white, neutral, generous page. The hero is paper: a small centered announcement, a very large tight headline with the **folded-square mark set inline at cap height**, a muted two-line subtitle and two pills (ink primary, light-gray secondary). Below sits the signature object: a **light desktop-app mockup** about half the page wide, with window dots, a list of helpers on colored avatar circles, a light incoming bubble, a black outgoing bubble and a quiet "Thinking" line. Color lives only in avatars and window dots; everything else is ink on white, one warm cream panel and one dark media band. Use it for assistant apps, agent crews and desktop tools.

## Colors

The accent is **ink**: the source's primary action is a black pill, so the accent seed is near-black and `accent-9` is the pill fill. Gray is a true mid neutral, never the ink. Read exact generated steps from `theme.css`; do not restate them by hand.

| Role | Token | Use |
| --- | --- | --- |
| Canvas | `--gray-1` | Page background (white seed) |
| Ink pill | `--accent-9`, hover `--accent-10` | Primary buttons, outgoing chat bubble |
| Text on ink | `--accent-contrast` | Pill labels, outgoing bubble text |
| Soft pill | `--gray-3`, hover `--gray-4` | Secondary buttons, segmented tracks, selected list row |
| Card surface | `--gray-2` | Feature cards, form panel, featured plan |
| Hairline | `--gray-5`–`--gray-6` | Mockup frame, dividers, table rules |
| Field border | `--gray-9` | Input, select and textarea borders |
| Ink text | `--gray-12` | Headings, body, nav links |
| Muted text | `--gray-11` | Subtitle, previews, timestamps, helper text |
| Warm panel | `--cream` / `--cream-ink` | The teammates panel and its text and mark |
| Chat bubble | `--bubble` | Incoming message |
| Mockup surface | `--window` | App window and sidebar |
| Window dots | `--dot-red`, `--dot-amber`, `--dot-green` | Decorative only |
| Avatars | `--avatar-teal`, `-orange`, `-indigo`, `-violet`, `-blue`, `-coral` | Helper identity circles; never the only label |
| Media band | `--band` / `--band-ink` | Full-bleed dark demo band |
| Errors | `--alert-ink` | Inline form errors, invalid borders |

Measured in Chrome on the gallery showcase from computed colors (alpha composited over the real backgrounds), light / dark: ink pill label on `--accent-9` 18.88:1 / 13.89:1; `--gray-11` on `--gray-1` 5.86:1 / 9.37:1; `--alert-ink` on the form panel (`--gray-2`) 6.24:1 / 7.75:1 and on the canvas 6.41:1 / 8.49:1; `--cream-ink` on `--cream` 15.58:1 / 13.86:1; field border `--gray-9` against the form panel 3.19:1 / 3.48:1. These are computed-color checks in one browser, not a full audit. In dark, `--accent-contrast` is a generated near-black with a faint warm tint; keep it, do not hand-edit it.

- Focus ring is `--gray-12` at 2px with a 2px offset (`--aura-outline: var(--gray-12) solid 2px`). It must hold ≥3:1 against `--gray-1`, `--gray-3` and `--cream` in both appearances; the lowest measured value is 14.37:1 light / 12.54:1 dark. Inside the band the ring switches to `--band-ink`.
- `--alert-ink` must keep ≥4.5:1 on the canvas in both appearances.
- Avatars and window dots carry no text and no meaning on their own.

> **Upstream limitation — `--gray-contrast: undefined`:** The shared generator interpolates `scales.grayContrast`, which `generateRadixColors` does not return, so every generated flavor `theme.css` (this one included) declares `--gray-contrast: undefined`. The gallery showcase does not read it. Aura projects do: `globals.css` maps `--aura-text-primary-inverse` and the `gray-contrast` utility to `var(--gray-contrast)`, and `.button-fill` uses `--aura-text-primary-inverse` for its label, so filled button labels fall back to inherited body ink. With this flavor that is ink on an ink pill: measured in Chrome with Aura `main.css`, a consumer `:root` and this `theme.css`, the label is `#1f1f1f` on `#111111` (1.15:1) in light and `#eeeeee` on `#ededed` (1.01:1) in dark, so it disappears. Step 2 of **Apply** sets `--aura-text-primary-inverse: var(--accent-contrast)`, which restores the inverse label (18.88:1 light / 13.89:1 dark). The mitigation is required, not optional, for this flavor. Utilities that read `--gray-contrast` directly stay invalid until the shared generator is fixed; that fix is outside this flavor and generated files are not patched by hand.

### Dark mode

Not observed on the source; this is Bluefold's adaptation. Reinterpret, do not invert, through a few semantic variables switched in one `.dark` block.

| Variable | Light | Dark |
| --- | --- | --- |
| Ink pill | `--accent-9` near-black, `--accent-contrast` light | `--accent-9` near-white, `--accent-contrast` dark |
| `--soft-pill` | `--gray-3` | `--gray-4` |
| `--panel` | `--cream` | `--cream` (warm dark) with a 1px `--cream-ink` ring at 14% |
| `--frame-shadow` | faint `--gray-a3` drop | 1px `--gray-a3` ring, no drop |
| `--band-bg` | `--band` (dark on white) | `--band` (raised over the canvas) with `--gray-a5` hairlines |
| `--ghost-mark` | `--gray-a4` | `--gray-a5` |

## Typography

Fonts were not inspected on the source; Inter Tight and Inter approximate the neutral, tight grotesk seen in the screenshot.

- Display: `Inter Tight` via `font-display`, weight 500, `tracking-[-0.035em]`, `leading-[1.02]`.
- Hero `.h1`: `text-[clamp(2.25rem,7vw,4rem)]` (the screenshot's ~47px cap height at 1920 maps to about 4rem).
- Section headings: `text-[clamp(1.75rem,4vw,3rem)]`, same weight and tracking.
- Body: `Inter` 400, `text-gray-11` for subtitles, `leading-normal`.
- UI text: nav links `Inter` 400 `text-sm`; list names 500 `text-sm`; timestamps `text-xs`. No uppercase kickers, no mono.
- Hero subtitle: `text-xl` (`1.25rem`), `leading-[1.45]`, two lines.

## Layout

| Source px | Aura step | px | Use |
| --- | --- | --- | --- |
| ≈1220 nav width | `max-w-94` | 1222 | Content width |
| ≈975 mockup width | `max-w-75` | 975 | App mockup |
| ≈650 subtitle measure | `max-w-50` | 650 | Hero subtitle |
| ≈100 nav → announcement | `pt-7.5` | 97.5 | Hero top |
| ≈46 pill height | `h-3.5` | 45.5 | Hero CTAs |
| ≈34 nav pill | `h-2.5` | 32.5 | Nav Contact and Download pills |
| ≈64 CTAs → mockup | `mt-5` | 65 | Mockup offset |
| ≈140 section rhythm | `py-11` | 143 | Sections |
| ≈26 card gap | `gap-2` | 26 | Grids |
| ≈260 sidebar | `w-20` | 260 | Mockup sidebar |

- Everything in the hero is centered; later sections alternate centered heads and left/right splits (cream panel, form, FAQ).
- Below 760px: nav becomes mark + Menu + Download, grids go to one column, the mockup stacks inside its own clipped frame, footer goes to two columns.

## Elevation & Depth

- Flat by default: cards are `--gray-2` fills, plans use a `--gray-6` hairline, no shadows.
- One shadow on the page: the mockup's faint `--frame-shadow` (a `--gray-a3` drop) plus a 1px `--gray-5` border, `rounded-[19.5px]`. The border defines the window; the shadow stays barely visible.
- Depth in dark comes from steps and hairlines, never glow.

## Shapes

- Buttons and segmented controls are `9999px` pills. Inputs `13px`. Surfaces `19.5px`; the cream panel `26px`.
- Avatars are full circles; window dots are 12px circles.
- The **folded square**: an ink square whose top-right corner is folded along a diagonal, the flap shown at half opacity. It is the logo, the inline hero mark, the cream-panel hero object and, as a stroked outline at `--ghost-mark`, the closing backdrop. Always `currentColor`.

## Components

- **Primary** → `Button variant="fill"`, `h-3.5 px-1.5 font-medium`, optional leading `DownloadIcon className="icon"`.
- **Secondary** → `Button variant="pill"` with `border-0 bg-gray-3 text-gray-12 hover:bg-gray-4`.
- **Download split** → `ButtonGroup`: a fill `Button` and an icon fill `Button size="icon-md"` with `ChevronDownIcon`, separated by a 1px `--accent-contrast` hairline at 25%.
- **Nav** → `NavigationMenu`, `text-sm font-medium text-gray-12`; disclosure toggle before the list below 760px (`aria-expanded`, `aria-controls`, Escape closes and returns focus).
- **Announcement** → bold label, `·`, `text-gray-11` link and a small `--gray-3` circular arrow chip.
- **Mockup** → `Card` on `--window` with window dots, `Input` look-alike, helper rows (`Avatar` circle on an avatar token, name, `text-xs text-gray-11` time, truncated preview; selected row `bg-gray-3`), incoming bubble on `--bubble`, outgoing bubble on `--accent-9`, system line, `StatusDot`-style thinking avatar. Label it as a fictional preview.
- **Stats** → `Stat`, `StatValue className="font-display font-medium"`, `StatLabel className="text-gray-11"`, marked as examples.
- **Jobs** → `ToggleGroup` filter (pressed item `bg-gray-1` on a `bg-gray-3` track) above a `Table` with `text-sm` cells, `bg-gray-2` header and `Badge` states.
- **Plans** → three `Card`s, segmented `ToggleGroup` for period, fill `Button` in each; prices marked as examples.
- **Request form** → `Input type="email"`, `NativeSelect`, `Textarea`, fill `Button`; errors in `--alert-ink` via `aria-describedby`, a `role="status"` line after a local check.
- **FAQ** → `Accordion` with a plus icon that turns 45°.

## Do's and Don'ts

- Do keep the canvas white and let the hero breathe.
- Do keep exactly one ink primary per view and gray pills for the rest.
- Do label every helper by name, not by avatar color.
- Do mark mockups, metrics, prices and demos as fictional examples.
- Don't use gradients, blue fields or dark cards on the light page.
- Don't draw round mascots, eyes or circle logos; the mark is the folded square.
- Don't reuse the source's names, copy, prices, logo or video.
- Don't autoplay anything in the media band.

## Motion

Not observed on the source; Aura interpretation. `transform` and `opacity` only, inside `@media (prefers-reduced-motion: no-preference)`.

- Buttons: `scale(1.03)` on hover, `scale(0.97)` on press, 200ms `cubic-bezier(0.4, 0, 0.6, 1)`.
- Mockup: one looping "thinking" pulse on the thinking avatar (opacity 0.45→1, scale 0.92→1, 1.6s).
- Under `reduce` nothing animates or transitions.

## Reference

```tsx
<section className="mx-auto max-w-94 pt-7.5 text-center">
  <h1 className="flex flex-wrap items-center justify-center gap-[0.2em] font-display text-[clamp(2.25rem,7vw,4rem)] font-medium tracking-[-0.035em] text-gray-12">
    Work with <FoldedSquare className="size-[0.8em]" aria-hidden /> Bluefold
  </h1>
  <p className="mx-auto mt-1.5 max-w-50 text-gray-11">Helpers that open your tools and bring back finished work.</p>
  <div className="mt-2.5 flex flex-wrap justify-center gap-1">
    <Button variant="fill" className="h-3.5 px-1.5 font-medium">
      <DownloadIcon className="icon" /> Download for desktop
    </Button>
    <Button variant="pill" className="h-3.5 border-0 bg-gray-3 px-1.5 text-gray-12 hover:bg-gray-4">See plans</Button>
  </div>
  <Card className="mx-auto mt-6 max-w-75 overflow-hidden rounded-[19.5px] border-gray-5 bg-(--window) shadow-none" aria-label="Fictional app preview">
    <div className="ml-auto max-w-[75%] rounded-[13px] bg-accent-9 px-1 py-0.5 text-sm text-(--accent-contrast)">Draft the weekly lead list.</div>
  </Card>
</section>
```
