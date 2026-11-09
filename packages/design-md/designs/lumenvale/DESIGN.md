---
version: "alpha"
name: "Lumenvale"
description: "A warm, lantern-lit lakeside park with deep royal-blue navigation, pill CTAs, animated night-scene hero, and rich section rhythm. An Aura flavor for family destination and leisure resort sites."
extends: "../../DESIGN.md"
colors:
  primary: "#187bb7"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#e3f5ff"
  on-surface: "#102131"
  on-surface-variant: "#4b6781"
  outline: "#b8d8ef"
typography:
  headline-display:
    fontFamily: "Nunito"
    fontSize: 56px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-section:
    fontFamily: "Nunito"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-card:
    fontFamily: "Nunito"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.3
  body-md:
    fontFamily: "Nunito Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Nunito Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Nunito Sans"
    fontSize: 14px
    fontWeight: 600
    letterSpacing: 0.01em
rounded:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  full: 9999px
spacing:
  unit: 13px
  section: 104px
  max-width: 1280px
aura:
  theme:
    light:
      accent: "#187bb7"
      gray: "#4b6781"
      background: "#ffffff"
    dark:
      accent: "#4aaee0"
      gray: "#7a9bb8"
      background: "#0d1e2e"
  fonts:
    sans: "Nunito Sans"
    display: "Nunito"
    label: "Nunito Sans"
    href: "https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&family=Nunito+Sans:wght@400;600;700&display=swap"
  hero: "field"
  headingWeight: 700
  radius:
    button: "9999px"
    input: "16px"
    surface: "24px"
  tokens:
    light:
      brand-navy: "#1c468e"
      brand-green: "#008900"
      brand-green-hover: "#006b00"
      brand-teal: "#0e8fa0"
      hero-overlay: "rgba(14,30,54,0.55)"
      card-bg: "#ffffff"
      card-border: "#daeaf5"
      band: "#f0f7fc"
      band-alt: "#e3f1fa"
      mega-panel: "#dff0fa"
      ornament: "#b8860b"
      hours-closed: "#c0392b"
      hours-open: "#006da8"
      pill-gradient-from: "#187bb7"
      pill-gradient-to: "#0e8fa0"
      drawer-bg: "#1c468e"
      scrim: "rgba(28,70,142,0.72)"
      hair: "#d0e6f4"
      fill: "#187bb7"
      on-fill: "#ffffff"
      fill-green: "#008900"
      on-fill-green: "#ffffff"
    dark:
      brand-navy: "#2a5cb8"
      brand-green: "#33b233"
      brand-green-hover: "#28962b"
      brand-teal: "#2ab8cc"
      hero-overlay: "rgba(5,12,22,0.65)"
      card-bg: "#0f2237"
      card-border: "#1e3a56"
      band: "#0a1929"
      band-alt: "#0d2035"
      mega-panel: "#0f2a42"
      ornament: "#d4a84b"
      hours-closed: "#e05a4a"
      hours-open: "#2c7ca3"
      pill-gradient-from: "#2a7bbf"
      pill-gradient-to: "#1a9db8"
      drawer-bg: "#0d2240"
      scrim: "rgba(5,12,22,0.80)"
      hair: "#1e3a56"
      fill: "#2c7ca3"
      on-fill: "#ffffff"
      fill-green: "#1a6e1a"
      on-fill-green: "#ffffff"
---

# Lumenvale

> A warm, lantern-lit lakeside park with deep royal-blue navigation, pill CTAs, animated night-scene hero, and rich section rhythm. Built on Aura.

This file adapts an observed visual language to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius, shape, motion and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). Lumenvale is a fictional lakeside lantern-lit family park; no name, logo, wordmark, character, copy, testimonial, person, attraction or brand mark of any real resort is reused, and every content vignette is an original creation.

The source has **no dark mode**: Aura **light** is the faithful appearance matching the observed screens. Aura **dark** is an explicit creative adaptation — it reinterprets the deep-blue, lantern-warm palette into a night-time lakeside scene with darker surfaces and adjusted accent steps. It is not an inversion.

## Asset Licenses

| Asset | License |
| --- | --- |
| Nunito | SIL Open Font License 1.1 |
| Nunito Sans | SIL Open Font License 1.1 |

## Observed CSS Snapshot

| Kind | What |
| --- | --- |
| Observed (measured) | Header bar deep royal blue; two-row sticky header: utility row (sign-in, globe locale pill, slim search pill ~22px tall) + main row (wordmark + 5 nav items + cart + account); primary button blue / hover darker / focus border 4px / disabled bg pale blue text muted; secondary button white with blue text; search CTA green; hero pause rgba(0,0,0,0.7) background, 3px white focus; pill radius 999px; h3 24px/700; desktop side padding ~57px from 1200px; hero: full-bleed scene, two-line centered headline, two large pill CTAs with blue-to-teal gradient + 2px white border; booking strip: white rounded card floating over hero bottom at desktop (below hero on mobile), ticket-type select, two steppers (adults/children, circular ± buttons), green search pill; mega-menu: left link groups + right pale-blue panel with six venues and hours (one closed for renovation); 360: hamburger + wordmark + tickets pill + search icon; drawer full-height blue with icon+label rows, locale row, sign-in row; footer: white area with 4 link columns, stay-connected social icons, create-account blurb, then full-width royal-blue bottom bar with legal links; locale dialog: centered white modal, two columns of region links, pill cancel button over blue scrim; page body begins with a large-radius rounded "sheet" that rises over the hero's lower edge |
| Adapted by Lumenvale | All type set in Nunito (display) and Nunito Sans (body/label); every spacing rounded to 13px grid; hero scene replaced with original layered CSS gradient animation (sky gradient, distant hills, lake band with reflections, lantern dots, radial bursts); all images replaced with CSS-only art; all copy is original Lumenvale fiction; six fictional resort areas replace source venues; booking strip is demo-only with aria-live status, no submission; locale dialog uses native dialog element with focus trap, Escape closes |
| Not legible | Exact animation keyframes for hover states, section scroll behaviour, authenticated flows, cookie banner internals |

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the app uses `next/font`, load Nunito (700, 800) and Nunito Sans (400, 600, 700) there instead of the `@import`, and point `--font-sans` at the Nunito Sans variable and `--font-display` at the Nunito variable.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Lumenvale's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Lumenvale is a warm, immersive leisure page. The header is a sticky deep-blue two-row bar: a slim utility row above a wordmark-and-nav row with a mega-menu panel on the primary tab. At desktop, a white rounded booking strip overlaps the bottom of the hero (positioned absolutely so it floats over the hero's lower edge); on mobile it sits below the hero. The page body begins with a large-radius rounded "sheet" (48px top corners) that visually rises over the hero. The hero is full-bleed: a layered CSS animation (slow gradient pan + drifting lantern-light particles + hill silhouettes + lake reflection band) with a centered two-line headline in white and two large pill CTAs carrying a blue-to-teal gradient fill with a 2px white ring. Sections alternate between white and a soft sky-blue band, each preceded by an ornamental divider (thin rule + small centered lantern glyph) and a centered dark-navy heading. Cards use 24px radius, soft border, and subtle shadow. Motion is rich but strictly behind `prefers-reduced-motion: no-preference`; the hero pause button stops all animation with correct aria state.

## Colors

The accent is **royal blue** (#187bb7): it fills primary buttons, the header, the footer legal bar, and the booking CTA gradient. The green token (`--fill-green`) fills the search-prices pill exclusively. Two semantic variables — `--fill` and `--on-fill` — carry the interactive fill color and its legible label; they switch in `.dark` to ensure contrast passes in both modes.

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| Canvas | `--gray-1` | `--gray-1` (near-black) | Page background |
| Header / footer bar | `--brand-navy` | `--brand-navy` | Sticky nav, blue legal bar |
| Interactive fill | `--fill` | `--fill` (accent-8 equiv) | Buttons, booking CTA |
| Label on fill | `--on-fill` | `--on-fill` | Text on any `--fill` surface |
| Search prices pill | `--fill-green` | `--fill-green` | Booking strip CTA only |
| Label on green | `--on-fill-green` | `--on-fill-green` | Text on green pill |
| Hero pill CTA | gradient `--pill-gradient-from`→`--pill-gradient-to` + 2px white ring | same (shifted) | Hero actions only |
| Band | `--band` | `--band` | Alternating sections |
| Mega-menu right panel | `--mega-panel` | `--mega-panel` | Venue hours column |
| Card surface | `--card-bg`, 1px `--card-border` | `--card-bg`, 1px `--card-border` | Content cards |
| Drawer | `--drawer-bg` | `--drawer-bg` | Mobile nav drawer |
| Scrim | `--scrim` | `--scrim` | Locale dialog overlay |
| Ornament glyph | `--ornament` | `--ornament` | Divider seasonal mark |
| Hours open | `--hours-open` | `--hours-open` | Venue open status |
| Hours closed | `--hours-closed` | `--hours-closed` | Venue closed status |
| Hairline | `--hair` | `--hair` | Rule, card borders |
| Headline | `--brand-navy` | `--accent-9` | Section headings |
| Muted text | `--gray-11` | `--gray-11` | Descriptions (never gray-9/10 in light) |
| Body ink | `--gray-12` | `--gray-12` | Running text |

- Focus ring: `--accent-9` solid 3px, offset 2px. Hero pause button: white solid 3px.
- Skip link and "Passes" mobile pill: `background: var(--accent-9); color: var(--gray-1)` (Radix gray-1 on accent-9 passes contrast in both modes).
- Badge open (dark): `background: rgba(44,124,163,0.35); color: #c1e7fe`. Badge closed (light): `background: #ffe8e5; color: #9b1c1c`. Badge closed (dark): `background: rgba(140,40,30,0.5); color: #ffb3aa`. Closed-label text (dark): `color: #ffb3aa`. These are declared as CSS custom properties or inline in the theme block; no raw hex in component markup.
- Utility-row separator: `aria-hidden` `<span>` with a 1px `border-left` in `rgba(255,255,255,0.25)`, never a text character.

### Dark mode

Reinterpret, do not invert. Dark surfaces shift to a deep lake-night palette through semantic variables in one `.dark` block. The key shift: `--fill` moves from accent-9 (#187bb7) to accent-8 (#2c7ca3), which passes 4.65:1 against white. `--fill-green` darkens so white labels pass. All art card and hero backgrounds carry a solid dark base color so white text contrast never depends on the gradient art loading.

| Variable | Light | Dark |
| --- | --- | --- |
| `--band` | pale sky blue | deep lake-night navy |
| `--card-bg` | white | dark navy |
| `--fill` | #187bb7 | #2c7ca3 (accent-8, 4.65:1 vs white) |
| `--fill-green` | #008900 | #1a6e1a |
| `--ornament` | warm gold | warm gold (lighter) |
| Accent | #187bb7 | #4aaee0 (brightened, used for headings/links only) |

## Typography

- Display: Nunito 700/800 for all headings.
- Body: Nunito Sans 400 for prose; 600 for labels and nav links.
- Hero eyebrow: small line ~20px/600, centered, text-shadow for legibility.
- Hero `h1`: large line clamp(2.2rem, 6vw, 3.5rem)/800, centered, text-shadow; solid dark background-color behind the gradient art so contrast holds without art.
- Section `h2`: clamp(1.5rem, 3vw, 2rem) / 700, centered, dark navy in light / accent-9 in dark.
- Card `h3`: 1.5rem (24px) / 700, Nunito, line-height 1.3.
- Body: Nunito Sans 400 16px/1.6; card descriptions 14px; nav links 14px/600.
- Muted text: always `--gray-11` (never gray-9 or gray-10 for text in light mode).

## Layout

| Source px | Aura step | px | Use |
| --- | --- | --- | --- |
| 1280 content | `max-w-98.5` | 1280.5 | Main wrap |
| 57 side pad | `gap-4.5` | 58.5 | Desktop gutter |
| 100–110 section | `py-8` | 104 | Section vertical rhythm |
| 48 header row | `h-3.5` | 45.5 | Header main row height |
| 32 card gap | `gap-2.5` | 32.5 | Card grids |
| 24 internal pad | `p-2` | 26 | Card internal padding |
| 16 small gap | `gap-1` | 13 | Inline cluster gap |
| 24 radius lg | `rounded-lg` | 24px | Card, strip radius |
| 8 radius sm | `rounded-sm` | 8px | Badge radius |

Page maximum width: `min(100% - 2*57px, 1280px)`. At 360px the full width is used with 16px gutter.

The booking strip at desktop overlaps the hero: it is positioned so its top edge sits inside the hero's lower region, giving the floating-card-over-scene effect. On mobile (≤600px) the strip is a normal block below the hero.

## Elevation & Depth

Cards use 1px `--card-border` and a soft box-shadow (`0 2px 12px rgba(28,70,142,0.08)` light / `0 2px 12px rgba(0,0,0,0.3)` dark). The booking strip floats with `box-shadow: 0 4px 24px rgba(28,70,142,0.12)`. The mega-menu uses 1px border and an 8px border-radius drop panel. The sticky header gains no extra shadow — border-bottom only. The locale dialog uses a blue scrim and a white card with 24px radius and soft shadow.

## Shapes

- Pill buttons: radius 9999px (all CTAs, booking search pill, cancel button, locale cancel).
- Circular stepper buttons: 50% (± controls in booking strip).
- Circular hero pause: 50%, diameter 44px.
- Cards: 24px radius.
- Booking strip: 16px radius at desktop.
- Sheet over hero: 48px top-left and top-right radius, 0 bottom.
- Mega-menu panel: 8px radius.
- Locale dialog: 24px radius.
- Drawer: slides from left, square edges (full-height).

## Components

All components use Aura primitives and semantic tokens only. No hex literals in component markup.

### Two-row sticky header

Desktop: `position: sticky; top: 0; z-index: 100; background: var(--brand-navy)`. Utility row (sign-in link, locale button with globe SVG, slim search pill). Separators between utility items are `aria-hidden` `<span>` elements styled with a 1px `border-left` in `rgba(255,255,255,0.25)` — never text characters. Main row: wordmark (gradient square + "Lumenvale" in Nunito), five nav buttons with `aria-expanded` for mega-menu, cart icon button, account icon button. Mega-menu: `position: absolute`, left column with link groups (heading + sub-links), right column on `--mega-panel` listing six fictional areas. Escape closes mega-menu, focus returns to trigger. 360: hamburger toggle, wordmark, "Passes" pill, search icon button. Drawer is `position: fixed; inset: 0; background: var(--drawer-bg)` with icon+label rows and chevrons, locale row, sign-in row.

### Utility-row search pill

Slim white pill ~22px tall aligned in the utility row. `height: 22px; padding: 0 calc(var(--aura)*0.75); border-radius: 9999px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); display: inline-flex; align-items: center; gap: 6px`. Input inside inherits 13px font, transparent background, white text. Placeholder truncated to fit.

### Booking strip

White card overlapping the hero's lower edge at desktop (absolute or negative-margin technique). Ticket-type `<select>` with custom arrow SVG. Two stepper pairs with `aria-live` values. Green search pill: `background: var(--fill-green); color: var(--on-fill-green)`. Click shows aria-live status. No external request.

### Hero animation

`position: relative; overflow: hidden`. Background layers: deep-sky gradient base, distant hill silhouette (SVG `<path>`), lake reflection band (semi-transparent lighter strip), lantern-dot particles, soft radial bursts. The hero container has a solid dark `background-color` (#061830) so white text contrast holds without the gradient art. Particle layer: 20 `<span>` elements animated via `@keyframes lv-float`. Pause button `aria-pressed="true"` stops all animations. Under `prefers-reduced-motion: reduce`: static gradient only, particles hidden.

### Primary pill

`background: var(--fill); color: var(--on-fill); border-radius: 9999px; padding: calc(var(--aura)*0.75) calc(var(--aura)*2); font-weight: 700`. Hover: `opacity: 0.88`.

### Secondary pill

`background: var(--gray-1); color: var(--accent-9); border: 2px solid var(--accent-9); border-radius: 9999px`. Hover: `background: var(--band)`.

### Art cards (experience, offer, season, planning)

Each art card has a solid dark base `background-color` before the gradient overlay, so white label text reads at ≥4.5:1 even without the art gradient rendering. Gradient is layered on top via `position: absolute` pseudo-elements. Minimum height ensures the gradient cover never disappears below the text.

## Do's and Don'ts

**Do:**
- Use `--brand-navy` for the header and footer legal bar background.
- Use `--fill-green` / `--on-fill-green` exclusively for the search/booking CTA.
- Use `--fill` / `--on-fill` for all primary interactive fills; both switch in `.dark`.
- Apply `border-radius: 9999px` to all pill buttons.
- Apply `border-radius: 50%` to all circular controls.
- Keep section headings centered, using `--gray-12` / `--brand-navy` in light and `--accent-9` in dark.
- Use `--gray-11` for all muted/secondary text; never `--gray-9` or `--gray-10` as text color in light mode.
- Use `aria-hidden` border separators in the utility row, never pipe text characters.
- Stop all CSS animations when pause button `aria-pressed="true"` and under `prefers-reduced-motion: reduce`.

**Don't:**
- Use `--fill-green` for anything other than the booking search pill.
- Add box-shadows heavier than `0 4px 24px rgba(28,70,142,0.12)`.
- Use square corners on any interactive button.
- Use white text on accent-9 (#4aaee0) in dark mode — use `--on-fill` and `--fill` instead.
- Load video, real images, characters or recognisable brand shapes.
- Submit any form or booking request to an external endpoint.
- Place raw hex literals in component markup; declare art colors as custom properties.

## Motion

All transitions and animations are inside `@media (prefers-reduced-motion: no-preference)`. Under `prefers-reduced-motion: reduce`: the hero shows a static gradient, particles are hidden (`display: none`), and no keyframe runs. The pause button remains functional and visible in both states. Transition durations: button hover 150ms ease-out, card hover transform 200ms ease, mega-menu fade 180ms ease, drawer slide 240ms ease.

## Reference

```tsx
import { Button } from "@aura/ui";

export function HeroActions() {
  return (
    <div
      style={{
        display: "flex",
        gap: "calc(var(--aura) * 1.5)",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Button
        asChild
        style={{
          background:
            "linear-gradient(135deg, var(--pill-gradient-from), var(--pill-gradient-to))",
          boxShadow: "0 0 0 2px var(--color-background)",
          borderRadius: "9999px",
          color: "var(--on-fill)",
          fontWeight: 700,
          padding: "calc(var(--aura)*0.75) calc(var(--aura)*2.5)",
        }}
      >
        <a href="#passes">Explore Passes</a>
      </Button>
      <Button
        asChild
        style={{
          background: "var(--fill)",
          borderRadius: "9999px",
          color: "var(--on-fill)",
          fontWeight: 700,
          padding: "calc(var(--aura)*0.75) calc(var(--aura)*2)",
        }}
      >
        <a href="#lodging">Find a Lodge</a>
      </Button>
    </div>
  );
}
```
