# Mapping a source onto Aura

## Spacing to the 13px grid

Aura spacing is `--spacing: 13px` in half steps. Pick the nearest half step and write the table in the flavor.

| Source px | Aura step | px |
| --- | --- | --- |
| 4–8 | `0.5` | 6.5 |
| 12–16 | `1` | 13 |
| 18–22 | `1.5` | 19.5 |
| 24–28 | `2` | 26 |
| 32 | `2.5` | 32.5 |
| 40 | `3` | 39 |
| 44–48 | `3.5` | 45.5 |
| 52–56 | `4` | 52 |
| 64 | `5` | 65 |
| 72 | `5.5` | 71.5 |
| 80 | `6` | 78 |
| 96 | `7.5` | 97.5 |
| 112 | `8.5` | 110.5 |
| 140 | `11` | 143 |
| 160 | `12.5` | 162.5 |

Max widths: divide by 13 and round to a half step (`1200px` → `max-w-92.5`, `1280px` → `max-w-98.5`, `1300px` → `max-w-100`).

## Colors to steps

| Source role | Aura |
| --- | --- |
| Page background | `gray-1` (the `background` seed) |
| Secondary surface, cards | `gray-2`–`gray-3` |
| Hover fill | `gray-3`–`gray-4` or `gray-a3` |
| Hairline border | `gray-6`, or `accent-a5` for a tinted hairline |
| Control border, focus | `gray-7`–`gray-8`, `--aura-outline` |
| Brand fill | `accent-9` / `--primary` |
| Brand hover | `accent-10` |
| Text on brand | `accent-contrast` |
| Muted ink | `gray-11` |
| Ink | `gray-12` |
| Faint metadata | `gray-9`, only at 13–14px |
| Extra brand colors | custom `tokens` (`--candy-*`, `--pigment-*`, `--cobalt`) |

If the source's primary is ink (black pills), the accent seed is ink. If brand blue only lives in headlines, keep it as the accent and make primary buttons ink with token classes.

## Dark mode

Reinterpret, do not invert. Drive the flavor through a few semantic variables and switch them in one `.dark` block:

| Variable | Light | Dark |
| --- | --- | --- |
| `--band` | `accent-9` | `color-mix(in srgb, var(--accent-9) 30%, var(--gray-1))` |
| `--band-fg` | `accent-contrast` | `accent-12` |
| `--heading` | `accent-9` | `accent-11` |
| Saturated frames or panels | the full tint | `color-mix(in srgb, var(--tint) 30%, var(--gray-2))` with a 1px ring of the tint |
| Textures (grain, glow) | full | about half |

Inside any tinted surface use `gray-a*` and `gray-1` mixes, never raw black or white. Give the dark tokens the source's own night scheme when it has one.

## Elements to components

| Source element | Aura |
| --- | --- |
| Primary button | `Button variant="fill"` |
| Secondary or outline button | `Button variant="pill"` with token border |
| Split button, arrow cell | `ButtonGroup` with a text `Button` and an icon `Button size="icon-md"` |
| Nav | `NavigationMenu` |
| Cards, plans, panels | `Card` with `rounded-*`, `border-*`, `shadow-none` overrides |
| Stats | `Stat`, `StatValue`, `StatLabel` |
| Ledgers, tables | `Table` or `@aura/data-grid`, `text-sm` cells |
| FAQ | `Accordion` |
| Tags, handles, status | `Badge`, `StatusDot` |
| Search, fields | `Input`, `InputGroup`, `NativeSelect` |
| Segmented control | `ToggleGroup` |
| Marquee | `Marquee` |
| Empty state | `Empty` |
| Icons | `@radix-ui/react-icons` with `className="icon"` |

## Showcase page (gallery only)

`packages/design-md/designs/<slug>/result.html` shows the flavor as an Aura app. The gallery thumbnail and the detail page both render it.

- Load `/aura/main.css`, then `theme.css`. Read `appearance` from the query string and add `light` or `dark` to `<html>`.
- Use Aura classes (`.button`, `.button-fill`, `.button-pill`, `.h1`–`.h6`, `.small`, `.icon`) and tokens (`var(--accent-*)`, `var(--gray-*)`, `var(--aura-font-display)`, `var(--aura-font-label)`, custom tokens). Spacing is `calc(var(--aura) * n)` in half steps.
- Keep the shared skeleton: nav (a square in the accent plus the flavor name), hero, stats, features, a data table, a form, pricing, FAQ, closing call to action, footer.
- Fill it with the flavor's signature elements and a short fictional context. Write fresh copy.
- Put the semantic dark variables in a `.dark` block. Check light and dark.
- Motion sits behind `prefers-reduced-motion: no-preference`. Interactive pieces keep focus rings.
- No code comments in the file.
