---
version: "alpha"
name: "Saltbrook"
description: "Pale salt-blue canvas with deep harbor-navy headings and a teal-indigo brook action color, a flavor of Aura for software-delivery suite marketing pages."
extends: "../../DESIGN.md"
colors:
  primary: "#1a5fd4"
  on-primary: "#ffffff"
  surface: "#f0f5fb"
  surface-container: "#e4edf7"
  on-surface: "#0d1f3c"
  on-surface-variant: "#3d5068"
  outline: "#c2cfe0"
typography:
  headline-display:
    fontFamily: "Figtree"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.02em
  body-md:
    fontFamily: "Figtree"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "IBM Plex Mono"
    fontSize: 12px
    fontWeight: 500
    letterSpacing: 0.08em
rounded:
  md: 8px
  full: 9999px
spacing:
  unit: 13px
  section: 143px
  max-width: 1280px
aura:
  theme:
    light:
      accent: "#1a5fd4"
      gray: "#3d5068"
      background: "#f0f5fb"
    dark:
      accent: "#4d8ff0"
      gray: "#6a84a0"
      background: "#0b1829"
  fonts:
    sans: "Figtree"
    display: "Figtree"
    label: "IBM Plex Mono"
    href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
  hero: "paper"
  headingWeight: 500
  radius:
    button: "8px"
    input: "8px"
    surface: "13px"
  tokens:
    light:
      ink: "#0d1f3c"
      body: "#3d5068"
      muted: "#4e6482"
      canvas: "#f0f5fb"
      paper: "#ffffff"
      salt: "#e8f0f9"
      shoal: "#dce9f6"
      harbor: "#0d1f3c"
      harbor-ink: "#f0f6ff"
      harbor-muted: "#8aaac8"
      brook: "#1a5fd4"
      brook-deep: "#144db0"
      on-brook: "#ffffff"
      kelp: "#0e3d8a"
      on-kelp: "#ffffff"
      tide-tint: "#d0e2f8"
      glint: "#00d4f0"
      dawn: "#f0a830"
      dusk: "#9068c8"
      rule: "#c2cfe0"
      control-line: "#6a84a0"
      focus: "#1a5fd4"
      focus-on-harbor: "#f0f6ff"
      on-tide-tint: "#0e3d8a"
      chip-ink: "#0d1f3c"
      footer: "#e4ecf5"
    dark:
      ink: "#d8e8f8"
      body: "#8aaac8"
      muted: "#7a9ab8"
      canvas: "#0b1829"
      paper: "#0f2038"
      salt: "#0e1e36"
      shoal: "#102240"
      harbor: "#07101e"
      harbor-ink: "#d8e8f8"
      harbor-muted: "#6a84a0"
      brook: "#4d8ff0"
      brook-deep: "#6aa4f4"
      on-brook: "#04101e"
      kelp: "#2a5fbf"
      on-kelp: "#ffffff"
      tide-tint: "#122848"
      glint: "#40e8ff"
      dawn: "#c87820"
      dusk: "#7848a8"
      rule: "#1e3454"
      control-line: "#5a7ea8"
      focus: "#4d8ff0"
      focus-on-harbor: "#d8e8f8"
      on-tide-tint: "#a8c8f0"
      chip-ink: "#d8e8f8"
      footer: "#081422"
---

# Saltbrook

> Pale salt-blue air, deep harbor headings, a teal-indigo brook filling every action, and honey-to-violet gradient bands frame Saltbrook Delivery — a full-suite software-delivery marketing theme. Built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). All copy, data, figures and visuals in the showcase are original and fictional; any resemblance to a real product is coincidental.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated scale values.
3. If the app uses `next/font`, load Figtree (400;500;600) and IBM Plex Mono (400;500) there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Saltbrook's sample copy into an unrelated product. All pricing, usage and timing figures are labelled as sample figures.
6. Verify at 360px, 768px and 1280px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Saltbrook is built on a pale salt-blue canvas (`--salt`, `--canvas`) with hairline `--rule` borders, 8px-radius rectangular controls filled with `--brook` (a teal-indigo), and three named surface registers — `--salt` (most page bands), `--shoal` (alternating inset bands), and `--harbor` (the dark event banner and heading color). A floating assistant chip, pill-tab service grids, a split accordion with synced media, and a full-width mega panel under the header make up the primary layout patterns. Warm `--dawn` and soft `--dusk` are reserved exclusively for decorative gradient stops. `--glint` appears only as a bright cyan accent on `--harbor` surfaces. Use Saltbrook for software-delivery suite marketing pages that need a confident, readable, navy-and-blue identity.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. Custom tokens extend them for Saltbrook-specific surfaces.

| Role | Token | Aura step | Use |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `gray-1` | App background |
| Cards, dropdowns | `--paper` | `gray-2` | Elevated surfaces, card fill |
| Pale band | `--salt` | `accent-a3` tinted | Most section bands |
| Alternate band | `--shoal` | `accent-a4` tinted | Alternating inset sections |
| Dark heading / banner | `--harbor` | dark `gray-1` scoped | Event banner fill only; **not used as a heading color** |
| Text on harbor | `--harbor-ink` | `gray-12` on harbor | Headings, body on dark harbor band |
| Muted on harbor | `--harbor-muted` | `gray-11` on harbor | Secondary text on harbor band |
| Cyan on harbor | `--glint` | custom | Decorative accent ONLY on harbor surfaces |
| Hairline | `--rule` | `gray-6` | Card outlines, section dividers |
| Primary ink | `--ink` | `gray-12` | Headings, primary text |
| Body copy | `--body` | `gray-11` | Secondary prose |
| Muted text | `--muted` | `gray-9` | Captions, footnotes (13px+); ≥ 4.5:1 on canvas, paper, salt, shoal and footer |
| Action fill | `--brook` | `accent-9` | Filled buttons, links, indicator bars |
| Action hover | `--brook-deep` | `accent-10` | Hover on brook-filled controls |
| Text on brook | `--on-brook` | custom | Text on brook-filled surfaces; ≥ 4.5:1 on brook |
| Active pill tab | `--kelp` | custom | Active pill-tab fill |
| Text on kelp | `--on-kelp` | custom | Text on kelp-filled pill tabs; ≥ 4.5:1 |
| Inactive pill tab | `--tide-tint` | `accent-a2` | Inactive pill-tab fill |
| Gradient warm | `--dawn` | custom | Decorative gradient stops ONLY |
| Gradient cool | `--dusk` | custom | Decorative gradient stops ONLY |
| Footer surface | `--footer` | `gray-3` | Footer band fill |
| Control border | `--control-line` | custom | Input/select/textarea borders; ≥ 3:1 on canvas, paper and footer |
| Focus ring | `--focus` | custom | Focus outline on light surfaces; ≥ 3:1 everywhere except harbor |
| Focus ring on harbor | `--focus-on-harbor` | custom | Focus outline on harbor surfaces; ≥ 3:1 on harbor in both appearances |
| Inactive pill tab text | `--on-tide-tint` | custom | Text on inactive pill tabs; ≥ 4.5:1 on tide-tint in both appearances |
| Chip ink | `--chip-ink` | `gray-12` | Text on the floating assistant chip |

**Contrast rules:**
- `--ink` on `--canvas` and `--paper` ≥ 7:1 in both appearances. All headings on canvas, paper, salt, shoal and gradient-wash surfaces use `--ink`. Only text on a true `--harbor` band uses `--harbor-ink`.
- `--body` on `--canvas`, `--salt` and `--shoal` ≥ 4.5:1 in both appearances.
- `--harbor-ink` on `--harbor` ≥ 7:1; `--harbor-muted` on `--harbor` ≥ 4.5:1.
- `--on-brook` on `--brook` ≥ 4.5:1 in both appearances (white in light; dark navy in dark).
- `--on-kelp` on `--kelp` ≥ 4.5:1 in both appearances.
- Text on `--tide-tint` uses `--on-tide-tint` at ≥ 4.5:1 in both appearances.
- `--control-line` on `--paper`, `--canvas` and `--footer` ≥ 3:1 in both appearances.
- `--focus` on every surface except harbor ≥ 3:1; on harbor surfaces use `--focus-on-harbor` ≥ 3:1.
- `--dawn` and `--dusk` are never used as text colors.
- `--glint` is never used as body text; it is a decorative stroke or glyph on `--harbor` only.
- Footer links use `--body` on `--footer` ≥ 4.5:1.

### Dark mode

Saltbrook's dark appearance is a declared adaptation — no dark reference was observed. The dark canvas is a **deep harbor-navy** (`#0b1829`), giving the page the feel of looking at the system late at night with the harbor lights on. Cards use `--paper` (`#0f2038`), a slightly lighter navy step. The `--salt` and `--shoal` bands deepen to near-black navy tints so banding is felt through luminance contrast rather than saturated color. Decorative gradient bands deepen their `--dawn` and `--dusk` stops so gradient art remains visible without overpowering text. `--brook` lightens to `#4d8ff0` so filled buttons and inline links maintain ≥ 4.5:1 on the dark canvas; `--on-brook` becomes dark navy (`#04101e`) so text on a brook-filled button also meets 4.5:1. `--harbor` deepens to near-black for the event banner. A single `.dark` block on `<html>` switches all semantic tokens; no section needs its own dark override.

| Variable | Light | Dark |
| --- | --- | --- |
| `--canvas` | pale salt-blue | deep harbor-navy |
| `--paper` | white | lighter harbor-navy |
| `--salt` | pale cool blue | dark navy tint |
| `--shoal` | pale blue-gray | deeper navy tint |
| `--harbor` | darkest navy | near-black navy |
| `--brook` | teal-indigo | lighter teal-blue |
| `--on-brook` | white | dark navy |
| `--kelp` | deep slate-blue | mid slate-blue |
| `--tide-tint` | light blue tint | deep navy tint |
| `--rule` | cool light gray | dark navy rule |
| `--footer` | light gray-blue | near-black navy |

## Typography

Figtree (SIL OFL) is used at weights 400, 500 and 600 for all display, heading and body text. IBM Plex Mono (SIL OFL) is used at weights 400 and 500 for eyebrow labels and small code chips only.

| Element | Size / Leading | Weight | Aura class |
| --- | --- | --- | --- |
| Hero `h1` (1280) | 44px / 56px | 500 | `.h1 font-display` |
| Hero `h1` (360) | 36px / 44px | 500 | `.h1 font-display` |
| Section `h2` (1280) | 40px / 48px | 500 | `.h2 font-display` |
| Section `h2` (360) | 28px / 36px | 500 | `.h2 font-display` |
| Feature `h3` | 20px / 28px | 600 | `.h3` |
| Card title | 18px / 26px | 600 | `.h4` |
| Body prose | 16px / 24px | 400 | `p` |
| Nav / anchor links | 14px / 20px | 600 | `.small font-semibold` |
| Eyebrow label | 12px / 18px | 600 | `font-label uppercase tracking-[0.08em]` |
| Button text | 15px | 600 | inside `Button` |
| Footnote | 14px / 20px | 400 | `.small` |

## Layout

Saltbrook's spacing maps to the 13px grid:

| Source px | Aura step | px | Use |
| --- | --- | --- | --- |
| 8 | `0.5` | 6.5 | Icon gap, tight internal padding |
| 12–16 | `1` | 13 | Nav gap, label gap, card inner gap |
| 24 | `2` | 26 | Card padding-x, pill padding-x |
| 36 | `2.5` | 32.5 | Event banner height (1280) |
| 40 | `3` | 39 | Pill tab height |
| 44–48 | `3.5` | 45.5 | Button height |
| 56 | `4` | 52 | Header height |
| 64 | `5` | 65 | Hero art band (360), section gap |
| 96 | `7.5` | 97.5 | Section vertical padding |
| 140 | `11` | 143 | Large section gap |
| 470 | `36` | 468 | Hero height (1280) |
| 1280 | `98.5` | 1280.5 | Max content width |

**Header (1280px):** White bar `h-[52px]` with `border-b border-(--rule)`. Left: accent square wordmark "Saltbrook", thin divider, suite label "Delivery", then 4 nav triggers (Explore, Services, Solutions, More) at 14px weight 600. Right: search icon button, Learn, Support, Contact sales text links, filled "Start building" button, outline "Sign in" button. Each trigger opens a **full-width mega panel** (`NavigationMenu`) positioned against the header element (not the `<li>`), spanning full viewport width, inset 12px, with a hairline bottom border and soft shadow. The panel holds a "View all services (sample 120+)" link in `--brook` at the top, then 6 columns each with a bold 13px column title and 7–9 plain 13px links. Only one panel open at a time; clicking the same trigger closes it; click/Enter/Space only. Escape closes and returns focus to the trigger; click outside closes. Panel z-index 70, above sticky nav (40) and floating chip (30).

**Header (360px):** Row 1: 3-column grid (44px | 1fr | 44px) — search icon button in the first cell, wordmark centered in the middle cell, third cell empty; the divider and suite label "Delivery" are hidden. Row 2 under a hairline: "Delivery" disclosure button at left with chevron. Opening it shows a full-width internally scrollable panel (z-index 70) with rows: Home, then Explore / Services / Solutions each expandable, Pricing as a plain link, Partners / Resources each expandable, then Learn, Support, Contact sales, and a footer area with Start building and Sign in. Escape closes; focus returns to the trigger; page scroll locked while open.

**Event banner:** Full-bleed `--harbor` band, `~32.5px` tall at 1280 (taller at 360). Centered `--harbor-ink` text "Join Saltbrook Summit, a fictional online event on 3–4 December 2026." with an underlined `--harbor-ink` link "Save a seat". Decorative CSS/SVG curved arcs (using `--glint` and `--dusk` strokes) at both ends. White close × at right; dismisses on click; focus moves to main content start.

**Hero:** `~468px` tall at 1280 on `--paper`. Copy column (max-width 420px, z-index 1): `h1` "Saltbrook Delivery" (color `--ink`), 16px paragraph, filled "Start building" button. Art: an absolutely positioned layer covering `top:0; bottom:0; right:0; width:60%` of the hero, no border-radius or border. Its left edge fades into the canvas via `mask-image: linear-gradient(to right, transparent, black 30%)` (plus `-webkit-mask-image`) so there is no visible box edge in light or dark. Art content: in light, bright warm honey/amber glow (`--dawn`) blooming from the right edge, soft white diagonal beam ≤ 35% opacity, thin violet-to-coral arc line; in dark, deep navy with dim amber glow (`--dawn` ≤ 35%), beam ≤ 8% white, arc kept. The hero `overflow:hidden` clips all art. At <768px: the art layer becomes a 130px-tall band in normal flow placed above the copy (order: -1), edge-to-edge with no side margins or border-radius, faded at its bottom into the canvas via `mask-image: linear-gradient(to bottom, black 60%, transparent)`. Button is full-width. Text never overlaps the bright art area.

**Sticky anchor nav:** White bar under the hero with 7 anchor links (At a glance, Services, Safeguards, Plans, Team stories, Learning, Get going) at 14px weight 600 `--brook` and a filled "Start building" button right. When scrolled past the hero it sticks at `top:0`, becomes an inset floating card (radius 13px, soft shadow, inset 45px from viewport edges at 1280). Active section link gets a 3px `--brook` underline via a scroll/resize handler throttled with `requestAnimationFrame`: active = last section whose top ≤ sticky-nav bottom + 2px; if none, first section (Overview). The sticky "stuck" state is detected by an `IntersectionObserver` on a 1px marker element (`id="sb-anchors-marker"`). The mobile disclosure label (`#sb-anchors-toggle`) shows the current section name, and the scrollspy handler updates its visible text (`#sb-anchors-current-label`) on every active-section change. At <768px the nav collapses into a single full-width disclosure button (the toggle row). In the stuck state at <768px it is a plain full-width bar: `margin:0`, `border-radius:0`, `box-shadow:none`, `border-bottom:1px solid var(--rule)` only. The `#sb-anchors-list` container is `display:none` unless the toggle is expanded; when expanded it renders as a full-width vertical panel (paper surface, 1px rule top border, soft shadow) directly under the toggle, not an inline scroll row. Escape closes the panel and returns focus to the toggle. Z-index 40, below header (60) and mega panels (70).

**Overview section:** Eyebrow OVERVIEW, `h2`, then 2-column split: left an `Accordion` of 6 capability items (18px weight 600 titles, chevrons, hairline separators; open item has a 3px `--brook` left bar, shows a paragraph and a "Learn more" link). Right: a large media panel (radius 13px) that swaps a different CSS-drawn product mock for the open item (`aria-live="polite"`). Only one item open; first open by default. At 360 the media sits under the open item text.

**Services section:** Eyebrow SERVICES, `h2`, then 2 pill tabs (Services, Extensions) as a WAI-ARIA tablist (roving tabindex, Left/Right/Home/End, automatic activation, `--kelp` active fill / `--tide-tint` inactive fill). Services panel: 3-column grid of 9 entries. Extensions panel: 6 entries. Each entry: 40px white rounded-square tile with inline SVG glyph, 16px weight 600 title (a deliberate compact exception to the 18px card-title row; the smaller size keeps the 3-column grid readable), 2–4 line paragraph, underlined "Learn more" or "View add-on". Below the grid a chevron-square link "See every service". At <768px each panel becomes a horizontal scroll-snap carousel (cards ~80% width) with Previous/Next circular buttons that disable at the ends.

**Gradient bands:** The security/AI band and the Next steps band use `linear-gradient` from `--dawn` through pale rose to `--dusk` with a soft `--brook` tint at the right. Gradient stops kept very light in light mode; a soft `--paper`-tinted halo sits behind the centered text column to ensure ≥ 4.5:1 contrast on every stop. In dark mode stops deepen to navy-violet.

**Next steps account card:** A 50/50 split card matching the pricing card pattern: left panel holds eyebrow, `h3` (color `--ink`), paragraph, CTA button; right panel holds a CSS-drawn abstract workspace illustration. At <768px the art panel stacks above the content panel.

**Stats:** Eyebrow SECURITY, centered `h2`, 3 stats in a row each with a 4px `--brook` left bar, big number (32px weight 500), description, "Learn more" link. At 360 stacked vertically. All figures are sample.

**Story card:** Split card (radius 13px, shadow): left a client tile, 22px quote, attribution, service chips, "Read the story" button; right a CSS-drawn photo panel. Below: 4 client tiles as a WAI-ARIA tablist (selected: 4px `--brook` bottom bar). Previous/Next slide buttons. No autoplay. Band uses a large `--dawn`-to-`--dusk` gradient wash. In dark mode the band gradient deepens to overlay `--harbor` so text contrast reaches ≥ 4.5:1: the eyebrow uses `color-mix(in srgb,var(--brook) 70%,var(--ink))` and unselected client tiles use `--body` at full opacity on a slightly lighter tile fill (`color-mix(in srgb,var(--paper) 80%,var(--canvas))`), without any reduced opacity on their text. Selected tiles use `--ink` text with the 4px `--brook` bottom bar.

**Resource cards:** 3 cards (radius 13px, 1px `--rule` border, soft shadow) each with a CSS-drawn image area on top (inset 8px, radius 8px), 18px weight 600 title, paragraph, chevron-square "Learn more" link.

**Footer:** `--footer` surface, 6 columns (Explore Saltbrook, Services and pricing, Solutions and support, Partners, Resources, Cloud basics), 12–13px links at ≥ 4.5:1, column titles 15px weight 600. At <768px columns become `Accordion` buttons (`aria-expanded`). Legal row: globe icon + language `NativeSelect` (English, Español, Português; local only), "Privacy settings" link, Sitemap, Contact, Privacy, Terms, Brand use, Accessibility, "2026 Saltbrook, a fictional company."

**Floating assistant chip:** Fixed bottom-right, a single `<button>` element (not multiple controls) containing: a chat-bubble icon tile, the label "Ask Saltbrook" at ≥ 768px or "Ask" below 768px, and a decorative "+" square. The chip has auto width, radius 8px, shadow and 1px `--rule` border. Opens a local `Dialog` (role=dialog, aria-modal, labelled, ~380px wide, focus trapped, Escape/× close, focus returns) with 3 suggestion buttons, input + send button (disabled until text), canned answers in an `aria-live` log.

**Z-index scale:** floating chip 30 → sticky anchor nav 40 → header 60 → header mega panels / mobile panel 70 → dialog 90.

## Elevation & Depth

- **Flat default:** `--canvas`, `--salt` and `--shoal` bands carry no shadow.
- **Cards:** `shadow-sm border border-(--rule) bg-(--paper)` radius 13px.
- **Mega panel:** `shadow-lg border-b-2 border-(--rule)` — the only layer floating above the header flow.
- **Sticky nav (floating state):** `shadow-md rounded-[13px] border border-(--rule)`.
- **Floating assistant chip:** `shadow-md border border-(--rule)`.
- **Assistant dialog:** `shadow-xl rounded-[13px]`.
- Dark mode: shadows shorten; no glow or blur added.

## Shapes

- **Buttons and inputs:** 8px radius (`--aura-button-radius`, `--aura-input-radius`).
- **Surfaces (cards, panels, floating nav):** 13px radius (`--aura-radius`).
- **Pill tabs:** 9999px radius (fully rounded), height 39px, padding-x 26px.
- **Chevron-square link glyph:** 24–28px square, 8px radius, `--brook` fill, white chevron icon.
- **Stat left bar:** 4px wide, full-height of the stat block, `--brook` fill.
- **Accordion active left bar:** 3px wide, `--brook` fill.
- **Client tile selected bottom bar:** 4px, `--brook` fill.

## Components

| Flavor element | Aura component | Notes |
| --- | --- | --- |
| Filled "Start building" | `Button variant="fill"` | `bg-(--brook) text-(--on-brook) hover:bg-(--brook-deep) rounded-[8px] h-[45.5px] px-[26px] text-[15px] font-semibold` |
| Outline "Sign in" | `Button variant="outline"` | `border-2 border-(--ink) text-(--ink) bg-transparent rounded-[8px] h-[45.5px]` |
| Pill tab (active) | `Tabs` active trigger | `bg-(--kelp) text-(--on-kelp) rounded-full h-[39px] px-[26px] font-semibold` |
| Pill tab (inactive) | `Tabs` inactive trigger | `bg-(--tide-tint) text-(--on-tide-tint) rounded-full h-[39px] px-[26px] font-semibold` |
| Header nav with mega panel | `NavigationMenu` | Full-width panel; 6 columns; click/Enter/Space only; Escape closes; z-index 70 |
| Overview accordion | `Accordion` | Open item: 3px `--brook` left bar; `aria-live="polite"` on media panel |
| Service tile card | `Card` | `rounded-[13px] shadow-sm border border-(--rule) bg-(--paper)` |
| Resource card | `Card` | `rounded-[13px] shadow-sm border border-(--rule) bg-(--paper)` |
| Split story card | `Card` | `rounded-[13px] shadow-md` with left content panel and right CSS art panel |
| Services carousel (<768px) | `Carousel` with `Button size="icon-md"` | Scroll-snap; prev/next disable at ends; `role=region aria-label` on track |
| Client tile strip tablist | `Tabs` | WAI-ARIA tablist; selected tile: 4px `--brook` bottom bar; unselected ≥ 3:1 |
| Event banner | `Alert` dismissible | `bg-(--harbor) text-(--harbor-ink)`; close × moves focus to main content |
| Stats | `Stat`, `StatValue`, `StatLabel` | 4px `--brook` left bar; sample figures; stacks at 360 |
| Pricing / usage table | `Table` in `overflow-x:auto` wrapper | `role=region aria-label tabindex=0`; `text-sm` cells; `border-b border-(--rule)` |
| Contact sales form | `Input`, `NativeSelect`, `Textarea` | Local; `preventDefault`; inline errors via `aria-describedby`; `aria-live` confirmation |
| FAQ | `Accordion` | 5 items; `--body` answers; first item open |
| Eyebrow | plain `<span class="eyebrow">` | `font-label uppercase tracking-[0.08em] text-xs text-(--brook)` — implemented as a plain span, not a Badge component; `Badge` is the closest Aura component if a project wants a component abstraction |
| Chevron-square link | `Button size="icon-sm"` + label | `bg-(--brook) text-(--on-brook) rounded-[8px]` holding `ChevronRightIcon`; label in `font-semibold text-(--brook)` |
| Footer columns (<768px) | `Accordion` | `aria-expanded`; closed by default |
| Language select (footer) | `NativeSelect` | `.sb select.inputer { border: 1px solid var(--control-line); appearance: auto; color: var(--ink); background: var(--footer); }` |
| Form selects | `NativeSelect` | `.sb select.inputer { border: 1px solid var(--control-line); background: var(--paper); color: var(--ink); }` enforced with scoped selector |
| Floating assistant chip | `Dialog` triggered by fixed chip `Button` | Chip: `bg-(--paper) text-(--chip-ink) rounded-[8px] shadow-md border border-(--rule)`; dialog `rounded-[13px] shadow-xl`; focus trapped; Escape/× close |
| Assistant input + send | `Input` + `Button variant="fill"` | Send disabled until input has text; `aria-live` log for canned answers |

## Do's and Don'ts

- Do use `--brook` for filled buttons, inline text links, stat bars, accordion active bars and indicator underlines only.
- Do use `--kelp` only as the active pill-tab fill and confirm `--on-kelp` meets 4.5:1 on it.
- Do keep `--dawn` and `--dusk` exclusively inside CSS decorative gradient stops; never apply them to text or borders.
- Do keep `--glint` exclusively as a decorative stroke or glyph on `--harbor` surfaces.
- Do label every price, stat and timing figure as a sample figure.
- Do use generic wording for all technology, protocol and product names: "every common package format" not specific package manager names; "config file" not specific file format names; "Standard runner"/"Large runner" not OS brand names; "single sign-on and directory sync" not specific protocol names; "version control" not specific product names. No real vendor, tool or brand name should appear anywhere in copy, SVG labels or code.
- Do open the mega panel only on click, Enter or Space — never on hover.
- Do disable carousel prev/next at the ends; expose position with `aria-live`.
- Do use scoped selectors (`.sb select.inputer`) for native form controls so Aura's base styles do not override the visible border and chevron.
- Do keep the floating assistant chip small at 360px with safe bottom and right margins so it never permanently covers content.

- Don't use `--dawn`, `--dusk` or `--glint` as text, label or border colors anywhere.
- Don't use `--brook` or `--kelp` as a section background color outside pill tabs.
- Don't add shadows to cards inside `--salt` or `--shoal` bands beyond `shadow-sm`.
- Don't open more than one mega panel or mobile nav panel at once.
- Don't autoplay any carousel, animation or transition.
- Don't send, store or transmit any data from the form, assistant or search controls.
- Don't break words mid-word at any viewport; use `overflow-wrap: break-word` and `min-width: 0` on every grid/flex child.
- Don't use `overflow-wrap: anywhere` on headings; size headings so they fit at 360px.
- Don't use real logos, photos or external images; draw all visuals with HTML/CSS/inline SVG.

## Motion

All motion sits behind `@media (prefers-reduced-motion: no-preference)`. Use only `opacity`, `transform` and `background-color`.

| Element | Animation | Timing |
| --- | --- | --- |
| Section entrance | Fade + raise `translateY(18px → 0)` | 400ms `cubic-bezier(0.4, 0, 0.2, 1)`, staggered |
| Accordion open/close | `opacity` fade-in (open panels only) | 220ms ease |
| Mega panel open | `opacity 0 → 1` | 180ms ease |
| Carousel scroll | `scroll-behavior: smooth` | Native |
| Button hover fill | `background-color` to `--brook-deep` | 200ms ease |
| Sticky nav transition | `box-shadow`, `border-radius` | 220ms ease |
| Assistant dialog open | `scale(0.96 → 1) opacity(0 → 1)` | 220ms ease |
| Media panel swap | `opacity 0 → 1` | 200ms ease |

With `prefers-reduced-motion: reduce`: all entrances appear instantly in final state; carousels jump without slide; accordion height changes are instant; all dialogs and panels appear without scale or fade.

## Accessibility notes

- All interactive elements expose `aria-expanded`, `aria-controls` and `aria-current` as required by their patterns.
- The sticky anchor nav uses `aria-current="true"` on the active link (set via the rAF-throttled scroll/resize scrollspy handler); only one link carries it at a time.
- The WAI-ARIA tabs pattern (roving tabindex, Left/Right/Home/End arrows) applies to pill tabs and the client story tile strip.
- The carousel track carries `role="region"` and `aria-label`; prev/next buttons update `aria-disabled` and shift focus to the other button when they become disabled.
- All `Dialog` instances trap focus within, respond to Escape, and return focus to the triggering element on close.
- The assistant `aria-live="polite"` log announces canned responses without disrupting reading flow.
- Native `<select>` elements carry an explicit `border: 1px solid var(--control-line)` and `appearance: auto` via scoped selectors to ensure the chevron and border are visible in both appearances and in forced-colors mode.
- Forced-colors support: add `@media (forced-colors: active)` rules so `--brook`-filled buttons use `ButtonFace`/`ButtonText`, the active tab underline uses `Highlight`, focus rings use `Highlight`, and stat/accordion bars use `CanvasText` borders rather than background fills.
- The event banner close button moves focus to the hero `h1` (which carries `tabindex="-1"`) after dismissal; a `:focus:not(:focus-visible)` rule suppresses any visible outline on this programmatic focus.
- Page scroll is locked (`overflow: hidden` on `<body>`) while the mobile nav panel is open.
- The search control in the header opens a local search field with a visible note that search is a local demo; no network request is made.

## Reference

```tsx
<section className="sb mx-auto max-w-[1280px] px-[26px] py-[97.5px]">
  <div className="grid gap-[32.5px]">
    <span className="font-label uppercase tracking-[0.08em] text-[12px] text-(--brook)">
      Services
    </span>
    <h2 className="h2 font-display font-medium text-(--ink) max-w-[22ch]">
      Every stage of delivery, one coherent platform.
    </h2>
  </div>
  <div role="tablist" aria-label="Service categories" className="flex gap-[13px] mt-[26px]">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="panel-services"
      tabIndex={0}
      className="rounded-full h-[39px] px-[26px] text-[15px] font-semibold bg-(--kelp) text-(--on-kelp)"
    >
      Services
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-extensions"
      tabIndex={-1}
      className="rounded-full h-[39px] px-[26px] text-[15px] font-semibold bg-(--tide-tint) text-(--on-tide-tint)"
    >
      Extensions
    </button>
  </div>
  <div
    id="panel-services"
    role="tabpanel"
    className="mt-[32.5px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[26px]"
  >
    <Card className="rounded-[13px] shadow-sm border border-(--rule) bg-(--paper) p-[26px] flex flex-col gap-[13px]">
      <div className="size-[39px] rounded-[8px] bg-(--salt) flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <rect x="3" y="4" width="18" height="3" rx="1.5" fill="var(--brook)" />
          <rect x="3" y="10" width="12" height="3" rx="1.5" fill="var(--brook)" fillOpacity="0.6" />
          <rect x="3" y="16" width="15" height="3" rx="1.5" fill="var(--brook)" fillOpacity="0.4" />
        </svg>
      </div>
      <h3 className="text-[18px] leading-[26px] font-semibold text-(--ink)">Saltbrook Ledger</h3>
      <p className="text-[16px] leading-[24px] text-(--body)">
        Track work items, milestones and releases in one shared view across your whole team.
      </p>
      <a href="#" className="text-[14px] font-semibold text-(--brook) underline">
        Learn more
      </a>
    </Card>
  </div>
</section>
```
