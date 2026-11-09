---
version: "alpha"
name: "Hushtone"
description: "A night-black, monochrome sound-wellness home with thin white line drawings, glowing ink controls, device scenes and quiet gray prose. An Aura flavor for audio, wellbeing and focus products that need calm density."
extends: "../../DESIGN.md"
colors:
  primary: "#262626"
  on-primary: "#ffffff"
  surface: "#000000"
  surface-container: "#191919"
  surface-control: "#262626"
  on-surface: "#ffffff"
  on-surface-variant: "#bfbfbf"
  outline: "#808080"
  hairline: "#e0e0e0"
  fade-start: "#181818"
  signal-warn: "#ff7a00"
  signal-ok: "#82d133"
typography:
  headline-display:
    fontFamily: "Figtree"
    fontSize: 60px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.35px
  headline-section:
    fontFamily: "Figtree"
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.27
    letterSpacing: 0.35px
  headline-card:
    fontFamily: "Figtree"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.17
    letterSpacing: 0.35px
  stat:
    fontFamily: "Figtree"
    fontSize: 96px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.01em
  body-lg:
    fontFamily: "Figtree"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.27
  body-md:
    fontFamily: "Figtree"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.33
  label-md:
    fontFamily: "Figtree"
    fontSize: 16px
    fontWeight: 500
    letterSpacing: 0em
  label-sm:
    fontFamily: "Figtree"
    fontSize: 12px
    fontWeight: 400
    letterSpacing: 0.02em
rounded:
  sm: 8px
  md: 12px
  lg: 20px
  xl: 24px
  full: 9999px
spacing:
  unit: 13px
  section: 130px
  gutter: 65px
  max-width: 1150.5px
aura:
  theme:
    light:
      accent: "#262626"
      gray: "#808080"
      background: "#fafaf8"
    dark:
      accent: "#e0e0e0"
      gray: "#808080"
      background: "#000000"
  fonts:
    sans: "Figtree"
    display: "Figtree"
    label: "Figtree"
    href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
  hero: "field"
  headingWeight: 400
  radius:
    button: "12px"
    input: "12px"
    surface: "12px"
  tokens:
    light:
      night: "#000000"
      night-raised: "#191919"
      night-control: "#262626"
      night-ink: "#ffffff"
      night-muted: "#bfbfbf"
      night-line: "#808080"
      fade-start: "#e6e6e2"
      panel: "#ececea"
      control: "#262626"
      control-ink: "#ffffff"
      control-edge: "#262626"
      soft-control: "#e1e1de"
      soft-control-ink: "#191919"
      field-edge: "#808080"
      glow: "#26262659"
      line-art: "#262626"
      signal-warn: "#a84300"
      signal-ok: "#3b6e12"
      cover-dusk: "#3d4ed8"
      cover-ember: "#e2611a"
      cover-moss: "#2f8f4e"
      cover-orchid: "#a33fc0"
      cover-sand: "#e8c35a"
      cover-tide: "#139c8a"
    dark:
      night: "#000000"
      night-raised: "#191919"
      night-control: "#262626"
      night-ink: "#ffffff"
      night-muted: "#bfbfbf"
      night-line: "#808080"
      fade-start: "#181818"
      panel: "#191919"
      control: "#262626"
      control-ink: "#ffffff"
      control-edge: "#ffffff"
      soft-control: "#262626"
      soft-control-ink: "#ffffff"
      field-edge: "#808080"
      glow: "#ffffff"
      line-art: "#ffffff"
      signal-warn: "#ff7a00"
      signal-ok: "#82d133"
      cover-dusk: "#3d4ed8"
      cover-ember: "#e2611a"
      cover-moss: "#2f8f4e"
      cover-orchid: "#a33fc0"
      cover-sand: "#e8c35a"
      cover-tide: "#139c8a"
---

# Hushtone

> Night-black calm: thin white line drawings, softly glowing ink controls and gray prose that let sound be the loudest thing on the page. Built on Aura.

Source flavor: https://endel.io (public logged-out home, observed 2026-11-09, dark only). This file adapts its visual language to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius, shape, motion and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). Hushtone is a fictional adaptive-sound product; no name, logo, wordmark, illustration, video, cover art, copy, review, award, press mark, device brand or platform mark of the source is reused, and every device scene is an original drawing.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values. After those blocks, set `--aura-text-primary-inverse: var(--control-ink)` in `:root`, because the generator leaves `--gray-contrast` undefined and Aura maps the inverse text to it.
3. If the app uses `next/font`, load Figtree (400, 500, 600, 700) and Instrument Serif (400, regular and italic) there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the Figtree variable. Instrument Serif is only for fictional publication marks.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Hushtone's sample copy, modes, stats or reviews into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Hushtone is a long, dark, centered page where each block is a short two-line headline, a gray paragraph and a pair of tall cards whose top half is a line drawing and whose bottom half is text on a fade. Nothing is loud: headings are regular weight, the only fills are near-black controls, and depth comes from glow and fades instead of shadows.

Signature moves, each expressed with Aura tokens:

- **Night field hero**: the product name as the `h1`, one gray line, one outlined control, then a wide scene of generic devices over a generative horizon of rays and drifting ridges, with a pause control.
- **Line-art scenes**: phones, a wrist device, a speaker puck, a screen and a laptop drawn as 1.5px `--line-art` strokes on `--night`, never photos.
- **Glowing ink control**: the header call to action is a `--control` fill with a `--glow` halo; the hero and section actions are `--control` fills with a 2px `--control-edge` ring.
- **Fade cards**: `--fade-start` to transparent gradients with 8–20px radii, holding a title, a gray paragraph and a text link with a ↗ arrow.
- **Big stat row**: four oversized bold figures with curved arrows and a footnote with a ↗ link.
- **Typographic press wall and laurel awards**: fictional publication names in mixed faces in `currentColor`, and award lines framed by drawn laurels.
- **Review waterfall**: masonry review cards with five stars that fade out into a "load more" control.

The reference is only dark. Dark follows it; light is a designed daylight adaptation without a reference (see **Dark mode**).

## Colors

The source is monochrome. The accent is therefore ink: `#262626` in light and the source's light gray `#e0e0e0` in dark, used for the brand square, focus rings and selection only. Gray seeds are the source's mid gray `#808080` in both modes. Exact steps come from `theme.css`.

Observed values (from the served stylesheets' `:root` variables and computed styles):

| Source value | Where observed | Hushtone role |
| --- | --- | --- |
| `#000` (`--color-black`) | `body` background | `--night`, dark `--gray-1` |
| `#191919` (`--color-gray-1`) | FAQ accordion buttons | `--panel` (dark), `--night-raised` |
| `#262626` (`--color-gray-2`) | every button fill | `--control`, `--night-control` |
| `gray` = `#808080` (`--color-gray-3`) | e-mail input border | gray seed, `--field-edge` |
| `#bfbfbf` (`--color-gray-4`) | paragraphs | `--night-muted`; page prose uses `--gray-11` |
| `#e0e0e0` (`--color-gray-5`) | variable only | dark accent seed |
| `#fff` (`--color-white`) | headings, links, button ring | `--gray-12` in dark, `--control-edge` |
| `#ff7a00` (`--color-orange`) | input error border and label | `--signal-warn` |
| `#82d133` (`--color-green`) | success notification | `--signal-ok` |
| `linear-gradient(180deg,#181818 0%,#0000 100%)` (`--color-gradient-1`) | cards, menus | `--fade-start` to transparent |

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| Canvas | `--gray-1` | `--gray-1` (black) | Page |
| Ink / muted ink | `--gray-12` / `--gray-11` | `--gray-12` / `--gray-11` | Headings / prose |
| Primary control | `--control` fill, `--control-ink` label, 2px `--control-edge` | same tokens | Hero and section actions |
| Header control | `--control` fill, `--glow` halo | same tokens | Header call to action |
| Soft control | `--soft-control`, `--soft-control-ink`, 2px `--gray-9` edge | `--soft-control`, `--soft-control-ink`, 2px `--gray-8` edge | Log in, Menu, Subscribe |
| Panel | `--panel` | `--panel` | Accordion rows |
| Fade card | `--fade-start` → transparent | same | Feature, mode and review cards |
| Field | transparent, 2px `--field-edge`, placeholder `--gray-11` | transparent, 2px `--field-edge`, placeholder `--gray-10` | E-mail input |
| Night island | `--night`, `--night-ink`, `--night-muted`, `--night-line` | same values | Hero field, screen scene, covers |
| Signals | `--signal-warn`, `--signal-ok` | same tokens | Form error and success only |
| Covers | `--cover-*` | same values | Abstract release covers only |

- Focus ring: `--aura-outline: var(--accent-9) solid 2px` with 3px offset; on night islands the ring is `--night-ink`.
- The light signal values are darkened so error and success text keep 4.5:1 on the light canvas.
- Placeholders are text: they must reach 4.5:1 on their field in both modes.

### Dark mode

Dark is the reference. Light is a daylight adaptation designed for Hushtone, not an inversion: the page becomes warm paper, line art turns ink, and the scenes that carry sound (hero field, screen scene, release covers) stay as night islands so the product still feels like evening.

| Variable | Light | Dark |
| --- | --- | --- |
| `--line-art` | ink strokes on paper cards | white strokes on black |
| `--fade-start` | warm light gray fade | the source's `#181818` fade |
| `--panel` | warm light gray | source gray 1 |
| `--control-edge` | ink (ring merges with the fill) | white ring |
| `--glow` | soft ink halo | white halo |
| `--soft-control` | light gray pill with ink label | source gray 2 with white label |
| Night islands | stay black with white ink | page itself |

## Typography

- One family: **Figtree** (OFL 1.1, https://github.com/erikdkennedy/figtree), replacing the source's commercial grotesque. Weights 400 for headings and prose, 500 for labels, 700 for stat figures.
- **Instrument Serif** (OFL 1.1, https://github.com/Instrument/instrument-serif) appears only inside fictional publication marks.
- Headings are regular weight with `letter-spacing: 0.35px`, sentence case, two short lines split with `<br>` at the period.
- Responsive scale (observed): `h1` 36/48/60px, `h2` 28/32/38/44px, card titles 24–36px, lead 16–22px, card prose 14–18px, small labels 12–16px.

| Role | Aura | Size |
| --- | --- | --- |
| Hero `h1` | `.h1` with `--min: 2.25rem; --val: 5vw; --max: 3.75rem` | 36–60px, line-height 1.2 |
| Section `h2` | `.h2` with `--min: 1.75rem; --val: 3.6vw; --max: 2.75rem` | 28–44px |
| Card title | `.h3` with `--min: 1.5rem; --val: 2.8vw; --max: 2.25rem` | 24–36px |
| Stat figure | display, 700 | 56–96px |
| Lead | body | 16–22px, `--gray-11` |
| Card prose | body | 14–18px, `--gray-11` |
| Label / eyebrow | label 400 | 12px, `--gray-11` |

## Layout

| Source px | Aura step | px | Use |
| --- | --- | --- | --- |
| 1152 content | `max-w-88.5` | 1150.5 | Main wrap |
| 760 prose | `max-w-58.5` | 760.5 | Section intro |
| 64 side gutter | `px-5` | 65 | Desktop gutter |
| 16–20 side gutter | `px-1.5` | 19.5 | Mobile gutter |
| 120–140 section gap | `py-10` | 130 | Section rhythm |
| 24 card gap | `gap-2` | 26 | Card pairs and grids |
| 24 card padding | `p-2` | 26 | Card text block |
| 12 control padding | `px-1` | 13 | Header controls |
| 72 header | `h-5.5` | 71.5 | Desktop header |
| 56 header | `h-4.5` | 58.5 | Mobile header |
| 56 control | `h-4.5` | 58.5 | Hero, section and form controls |
| 44 control | `h-3.5` | 45.5 | Header and mobile controls |

Every block is centered: intro heading and lead at `max-w-58.5`, then a two-column card pair at `max-w-88.5`; four columns for mode cards and stats, five for the press wall. Below 768px every grid is one column except the press wall (three columns) and stats (two columns).

## Elevation & Depth

- No drop shadows. Depth is a fade (`--fade-start` → transparent), a glow (`--glow`) on the header control, or a black vignette over a scene edge.
- The header is fixed and fades from `--gray-1` to transparent so content dissolves under it.
- Mosaics and the review waterfall fade into the canvas at their edges with a `--gray-1` gradient mask.
- Night islands keep their own black; they never take a border in dark mode and take a 1px `--gray-6` hairline in light mode.

## Shapes

- Controls: 12px radius (`--aura-button-radius`), 2px border, 45.5–58.5px tall. The round play and pause controls are full pills.
- Inputs: 12px radius, 2px `--field-edge`, 58.5px tall on desktop and 45.5px on mobile, with text at 17px or more.
- Cards: 12px (mode cards), 8px (feature pairs), 20px (reviews) and 8px (cover tiles). The generator maps every `rounded-*` step to 12px, so 8px and 20px are written as arbitrary radii.
- Device drawings: rounded rectangles with 1.5px strokes; screens are `--night`.
- Laurels and arrows are drawn strokes in `currentColor`.

## Components

| Element | Aura | Tokens |
| --- | --- | --- |
| Header | `NavigationMenu` with a disclosure "More" item; mobile `Button` "Menu" opens a sheet | fixed, `--gray-1` fade, links `--gray-12` |
| Header action | `Button` | `--control`, `--control-ink`, `--glow` halo, `rounded-[var(--aura-button-radius)]` |
| Primary action | `Button variant="fill"` restyled | `--control` fill, 2px `--control-edge` |
| Soft action | `Button` | `--soft-control`, `--soft-control-ink`, 2px `--gray-9` border in light and `--gray-8` in dark so the edge keeps 3:1 |
| Arrow link | `Button variant="link"` with `ArrowTopRightIcon` | `--gray-12`, no underline, underline on hover |
| Round play / pause | `Button size="icon-md"` with `PlayIcon` / `PauseIcon`, `aria-pressed` | `--control`, full pill |
| Mode and feature cards | `Card` with `shadow-none border-0` | `--fade-start` gradient, `rounded-md` (mode, 12px) or `rounded-[8px]` (feature pairs) |
| Stats | `Stat`, `StatValue`, `StatLabel` | display 700, `--gray-12`, label `--gray-11` |
| Press wall | grid of `currentColor` marks | `--gray-11`, at least 3:1 |
| Awards | text pairs between drawn laurels | `--gray-12` |
| Reviews | `Masonry` of `Card` with `StarFilledIcon` rows and an `Avatar` | `--fade-start`, `rounded-[20px]` |
| Release covers | tiles of `--cover-*` gradients with `--night` captions | `Marquee` is not used; static grid with fade mask |
| Data table | `Table`, `text-sm` | rows on `--gray-1`, hairline `--gray-6` |
| Plans | `Card` trio | `--panel`, primary plan ringed with `--control-edge` |
| FAQ | `Accordion` | `--panel` rows, `rounded-md`, `ChevronDownIcon` |
| Newsletter | `Field`, `Input`, `Button` stacked | `--field-edge`, `--signal-warn` error, `--signal-ok` success |
| Footer | link columns + social `Button size="icon-md"` | labels `--gray-11` |

Icons are `@radix-ui/react-icons` (MIT, https://icons.radix-ui.com/) with `className="icon"`; social links use generic glyphs (chat, camera, mail, speaker), never platform logos.

Hushtone deliberately overrides Aura in three places, so do not "fix" them: headings stay at weight 400, primary actions are near-black fills instead of the accent, and the page has no shadows.

## Do's and Don'ts

Do:

- Keep the page black in dark mode and let thin white line art carry the imagery.
- Split section headings into two short sentences.
- Keep a pause control next to any ambient motion and stop all of it under `prefers-reduced-motion: reduce`.
- Use `--signal-warn` and `--signal-ok` only for form states.
- Keep placeholder and muted text at 4.5:1 and fictional marks at 3:1.

Don't:

- Don't color headings or fills with the accent; the accent is only the brand square, focus and selection.
- Don't add drop shadows, gradients with hue, or photos of real devices.
- Don't draw recognisable device brands, store badges, platform logos or real publication marks.
- Don't make headings bold; only stat figures use 700.
- Don't invert the dark theme to get light; use the semantic tokens above.

## Motion

- Entrances: content slides up 20px and fades in over 400ms (`cubic-bezier(0.2, 0.8, 0.4, 1)`); menus and the form notice slide in from the bottom.
- Ambient: the hero rays turn slowly, ridges drift and stars twinkle. A labelled pause control (`aria-pressed`) stops every ambient animation.
- Hover: controls swap fill over 200ms; cards lift their fade by one step; arrow links nudge the arrow 2px.
- `prefers-reduced-motion: reduce`: no ambient animation, no entrances, no transforms; everything renders in its final state.

## Reference

```tsx
import { ArrowTopRightIcon, PlayIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ModeCard() {
  return (
    <Card className="relative rounded-md border-0 shadow-none bg-[linear-gradient(180deg,var(--fade-start),transparent)] p-2">
      <Button size="icon-md" aria-label="Play the Unwind preview" className="absolute -top-1.5 right-1.5 rounded-full bg-[var(--control)] text-[var(--control-ink)]">
        <PlayIcon className="icon" />
      </Button>
      <h3 className="h5 font-normal text-[var(--gray-12)]">Unwind</h3>
      <p className="text-sm text-[var(--gray-11)]">Slow tones that loosen the shoulders after a long day.</p>
      <Button variant="link" className="px-0 text-[var(--gray-12)]">
        Explore <ArrowTopRightIcon className="icon" />
      </Button>
    </Card>
  );
}
```
