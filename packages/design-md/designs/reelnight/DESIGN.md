---
version: "alpha"
name: "Reelnight"
description: "Una pantalla negra de cine con un muro de carteles inclinado, un solo rojo de acción, titulares grotescos en negrita, un arco luminoso que corta el hero, filas numeradas con cifras gigantes y un FAQ de bloques grises. Un flavor de Aura para servicios de streaming, catálogos de vídeo y portadas de suscripción."
extends: "../../DESIGN.md"
colors:
  primary: "#e50914"
  on-primary: "#ffffff"
  primary-hover: "#c11119"
  primary-pressed: "#99161d"
  surface: "#000000"
  surface-container: "#2d2d2d"
  surface-container-high: "#414141"
  tile: "#232323"
  on-surface: "#ffffff"
  on-surface-variant: "#b3b3b3"
  outline: "#808080"
  error: "#eb3942"
  success: "#2bb871"
  warning: "#d89d31"
typography:
  headline-display:
    fontFamily: "Figtree"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: -0.01em
  headline-section:
    fontFamily: "Figtree"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0em
  body-md:
    fontFamily: "Figtree"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Figtree"
    fontSize: 14px
    fontWeight: 600
    letterSpacing: 0em
  rank-numeral:
    fontFamily: "Figtree"
    fontSize: 100px
    fontWeight: 800
    lineHeight: 1
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
spacing:
  unit: 13px
  section: 71.5px
  max-width: 981.5px
aura:
  theme:
    light:
      accent: "#e50914"
      gray: "#808080"
      background: "#f4f3f0"
    dark:
      accent: "#e50914"
      gray: "#808080"
      background: "#000000"
  fonts:
    sans: "Figtree"
    display: "Figtree"
    label: "Figtree"
    href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800;900&display=swap"
  hero: "field"
  headingWeight: 800
  radius:
    button: "4px"
    input: "4px"
    surface: "16px"
  tokens:
    light:
      action-hover: "#c11119"
      action-pressed: "#99161d"
      screen: "#f4f3f0"
      screen-ink: "#141414"
      ember: "#f3c9cb"
      arc-glow: "#7f97f0"
      promo-from: "#efe4f5"
      promo-to: "#dfe4fa"
      card-from: "#e3e8fb"
      card-to: "#f7e3ea"
      panel: "#e6e5e1"
      panel-hover: "#d9d8d3"
      tile: "#dcdbd6"
      field-surface: "#ffffffd9"
      field-line: "#6b6b6b"
      alert-ink: "#b3161f"
      ok-ink: "#11703f"
      poster-crimson: "#8c1d2a"
      poster-indigo: "#283a8f"
      poster-teal: "#1f6f6a"
      poster-amber: "#a8661c"
      poster-plum: "#5b2a6e"
    dark:
      action-hover: "#c11119"
      action-pressed: "#99161d"
      screen: "#000000"
      screen-ink: "#ffffff"
      ember: "#461518"
      arc-glow: "#4061e7"
      promo-from: "#261733"
      promo-to: "#151a3f"
      card-from: "#192247"
      card-to: "#210e17"
      panel: "#2d2d2d"
      panel-hover: "#414141"
      tile: "#232323"
      field-surface: "#161616b3"
      field-line: "#808080b3"
      alert-ink: "#eb3942"
      ok-ink: "#2bb871"
      poster-crimson: "#8c1d2a"
      poster-indigo: "#283a8f"
      poster-teal: "#1f6f6a"
      poster-amber: "#a8661c"
      poster-plum: "#5b2a6e"
---

# Reelnight

> Una sala a oscuras, un muro de carteles y un único botón rojo que dice "empieza". Construido sobre Aura.

Source flavor: <https://www.netflix.com/>. **Fuente y método.** Home pública sin sesión capturada el 2026-11-08 entre las 17:03 y las 17:06 UTC desde un navegador Chrome headless normal y `curl`: URL final `https://www.netflix.com/` (sin redirección), HTTP 200, `<html lang="en">`, contexto de país `US` y locale `en-US` en los datos de la página, viewports 1280×800 y 360×780, sin login, sin cookies previas y sin bot challenge. Se leyeron el HTML servido, sus 139 bloques `<style>` inline y la hoja `nmhp.*.css`; las medidas salen de `getComputedStyle` y `getBoundingClientRect` sobre los nodos marcados con `data-uia`. Los valores se clasifican en tres niveles:

- **Observado (CSS/computado)**: el valor existe como variable o propiedad computada; se cita su selector o variable.
- **Observado (visual)**: se ve en las capturas pero el CSS no lo expone de forma legible; el valor es una lectura aproximada.
- **Reelnight (propio)**: interpretación de este flavor (tema claro, fuente, marca, copy, carteles, partes del esqueleto Aura que la fuente no tiene).

No se reutiliza ningún nombre, logo, cartel, imagen, copy, precio ni teléfono de la fuente. Reelnight y su catálogo son ficticios; los carteles son placeholders de color generados con CSS.

This file adapts that visual language to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

Un agente que recibe el enlace de este archivo dentro de un proyecto Aura hace esto, en orden:

1. Guarda este archivo como `DESIGN.theme.md` en la raíz del proyecto. Mantén el `DESIGN.md` raíz (base Aura). Donde discrepen, este archivo gana en color, tipografía, radio, forma, motion y voz; la base gana en grid, accesibilidad, iconos y formularios.
2. Trae el `theme.css` hermano (misma URL, `DESIGN.md` → `theme.css`). Pega su `@import`, el bloque `@theme inline`, el bloque `:root`, el bloque de media oscura y el bloque `.dark` **después** de los existentes en el `globals.css` del proyecto. No edites a mano los valores generados. Después de esos bloques, fija en `:root` `--aura-text-primary-inverse: var(--accent-contrast)` (para que los botones rellenos conserven su etiqueta blanca; ver **Limitación upstream**) y `--aura-button-hover: var(--action-hover)` (el hover rojo observado).
3. Si la app usa `next/font`, carga `Figtree` (400, 500, 600, 700, 800, 900) allí en lugar del `@import` y apunta `--font-sans`, `--font-display` y `--font-label` a esa variable.
4. Reestiliza solo con componentes Aura y clases de tokens, siguiendo **Components**. Ningún hex nuevo en componentes.
5. Conserva el contenido del producto. No importes el copy de ejemplo de Reelnight a un producto ajeno.
6. Verifica a 360px, en modo oscuro y con `prefers-reduced-motion: reduce`, y repasa la lista de Don'ts.

## Overview

Reelnight es una portada de suscripción a oscuras. Arriba, un hero de casi una pantalla (708px a 1280) con un **muro de carteles inclinado** bajo un velo negro degradado, un titular blanco centrado en dos líneas, una línea de precio de ejemplo, una pregunta de una línea y un **formulario de email en fila con un botón rojo grande**. El hero termina en un **arco**: un borde superior curvo con un filo rojo-rosado y un resplandor azul debajo. Le sigue un **banner promocional** redondeado con degradado violeta-azul, una fila **"Tendencias" con cifras gigantes contorneadas** detrás de carteles verticales, cuatro **tarjetas de razones** con degradado azul noche → granate e icono abajo a la derecha, un **FAQ de bloques grises a todo el ancho** con `+` que gira a `×`, la repetición del formulario de email y un **footer gris de cuatro columnas de enlaces subrayados**. Úsalo para servicios de vídeo, catálogos y portadas de suscripción.

## Colors

El acento es el **rojo de acción** observado: `--hcw--local-design--Button-Surface: rgb(229,9,20)` (`#e50914`) en `[data-uia="nmhp-card-cta+hero_card"]` y en "Sign In". El gris semilla es el neutro que la propia fuente usa en sus alphas (`rgba(128,128,128,…)`, `#808080`). El fondo oscuro es `#000` (`body` computado `rgb(0,0,0)`). Lee los pasos generados en `theme.css`; no los copies a mano.

| Rol | Token | Fuente | Nivel |
| --- | --- | --- | --- |
| Lienzo | `--gray-1` (semilla `#000` / `#f4f3f0`) | `body { background: rgb(0,0,0) }` | Observado (CSS) / propio en claro |
| Botón primario | `--accent-9` | `--hcw--local-design--Button-Surface: rgb(229,9,20)` | Observado (CSS) |
| Hover primario | `--action-hover` (no `--accent-10`, que el generador deja en `#d40000`/`#d50000`) | `--…Button-SurfaceHovered: rgb(193,17,25)` | Observado (CSS) |
| Pulsado | `--action-pressed` | `--…Button-SurfacePressed: rgb(153,22,29)` | Observado (CSS) |
| Texto sobre rojo | `--accent-contrast` | `--…Button-Foreground: rgb(255,255,255)` | Observado (CSS) |
| Botón secundario | `--gray-a8` en oscuro, `--gray-a5` en claro | `--…Button-Surface: rgba(128,128,128,0.4)` en `promo-banner-cta` | Observado (CSS); claro propio |
| Bloque FAQ | `--panel`, hover `--panel-hover` | `--…Accordion-HeadlineSurface: rgb(45,45,45)`, `…SurfaceHovered: rgb(65,65,65)` | Observado (CSS) |
| Cartel vacío | `--tile` | `[data-uia^="top-10-element"] { background: rgb(35,35,35) }` | Observado (computado) |
| Tinta | `--gray-12` | `--…Text-Foreground: rgb(255,255,255)` | Observado (CSS) |
| Tinta atenuada | `--gray-11` | `--…Text-Foreground: rgba(255,255,255,0.7)`; footer `rgba(255,255,255,0.7)` | Observado (CSS) |
| Campo | `--field-surface`, borde `--field-line` | `--…Input-Surface: rgba(22,22,22,0.7)`, `--…Input-Border: rgba(128,128,128,0.7)` | Observado (CSS) |
| Error | `--alert-ink` | `--…Input-MessageForegroundError: rgb(235,57,66)` | Observado (CSS); en claro propio |
| Éxito | `--ok-ink` | `--…MessageForegroundSuccess: rgb(43,184,113)` | Observado (CSS); en claro propio |
| Resplandor del hero | `--ember` | `radial-gradient(11% 56% at 17% 50%, #461518 0%, transparent 100%)` ×2 | Observado (computado) |
| Arco | `--arc-glow` | `radial-gradient(50% 500% at 50% -420%, rgba(64,97,231,0.4) 80%, rgba(0,0,0,0.1) 100%)` y `border-radius: 50% 50% 0 0 / 100% 100% 0 0` | Observado (computado) |
| Filo del arco | `--accent-9` → `--poster-plum` | `border-top: 4px solid transparent` + imagen de borde no legible | Observado (visual) |
| Banner promo | `--promo-from` → `--promo-to` | `linear-gradient(91deg, rgb(38,23,51), rgb(21,26,63))` | Observado (computado) |
| Tarjeta de razones | `--card-from` → `--card-to` | `linear-gradient(149deg, rgb(25,34,71) 0%, rgb(33,14,23) 96.86%)` | Observado (computado) |
| Carteles placeholder | `--poster-crimson`, `-indigo`, `-teal`, `-amber`, `-plum` | — | Reelnight (propio) |
| Foco | `--gray-12` a 2px | `--hcw--focus-ring--color: rgb(255,255,255)` | Observado (CSS) |

- El velo del hero es una pila de degradados negros de 0.85 a ~0.6 de opacidad (`linear-gradient(7deg, rgba(0,0,0,.85) 10%, …)`, observado). Exprésalo como `color-mix(in srgb, var(--screen) 85%, transparent)` → 60%.
- Un solo rojo por vista para la acción principal. El rojo nunca rellena tarjetas ni fondos.

> **Limitación upstream — `--gray-contrast: undefined`:** el generador compartido interpola `scales.grayContrast`, que `generateRadixColors` no devuelve, así que el `theme.css` generado (también este) declara `--gray-contrast: undefined`. El showcase de la galería no lo lee. Los proyectos Aura sí: `packages/registry/styles/globals.css` asigna `--aura-text-primary-inverse: var(--gray-contrast)` y `.button-fill` usa `--aura-text-primary-inverse` para su etiqueta, así que la etiqueta cae a la tinta heredada. Con este flavor eso es tinta oscura sobre rojo en claro y blanco sobre rojo en oscuro por herencia accidental, no por diseño. El paso 2 de **Apply** fija `--aura-text-primary-inverse: var(--accent-contrast)`, que da la etiqueta blanca observada en ambas apariencias (medido en **Calidad**). Las utilidades que leen `--gray-contrast` directamente siguen inválidas hasta que se corrija el generador compartido; esa corrección queda fuera de este flavor y los archivos generados no se parchean a mano.

### Dark mode

El oscuro **es la referencia**: todo lo observado se vio en oscuro. El claro es la adaptación propia de Reelnight ("matinée"): papel cálido `#f4f3f0`, tinta `#141414`, el mismo rojo, carteles con los mismos placeholders y degradados tenues. No se invierte nada: el showcase conmuta unas pocas variables semánticas en un bloque `.dark`.

| Variable | Claro (propio) | Oscuro (observado) |
| --- | --- | --- |
| `--veil` | `--screen` de 92% a 70% | `--screen` de 85% a 60% |
| `--hero-ink` | `--screen-ink` | `--screen-ink` |
| `--arc-edge` | `--accent-9` → `--poster-plum` | igual |
| `--reason-bg` | `--card-from` → `--card-to` (tintes claros) | `--card-from` → `--card-to` (noche → granate) |
| `--promo-bg` | `--promo-from` → `--promo-to` claros | violeta → azul observado |
| `--rank-stroke` | `--gray-12` | `--gray-12` |
| `--rank-fill` | `--gray-1` | `--gray-1` |
| `--faq-bg` | `--panel` | `--panel` |

## Typography

La fuente servida es **Netflix Sans** (`@font-face` "Netflix Sans Variable", cargada en 400, 500 y 700; computado en `h1`: `"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif`). Es propietaria y no se carga aquí. **Figtree** es la aproximación propia: grotesca geométrica, `a` y `e` abiertas, buena negrita. No se presenta como equivalente métrico.

| Elemento | Observado a 1280 | Observado a 360 | Aura |
| --- | --- | --- | --- |
| Titular hero `h1` | 56px / 70px, 700, blanco | 32px / 40px | `font-display text-[clamp(2rem,4.6vw,3.5rem)] font-extrabold leading-[1.25]` |
| Línea de precio | ≈20px, 500 (visual) | ≈16px | `text-xl font-medium` |
| Pregunta "Ready to watch…" `h3` | 16px / 24px, 400 | 16px / 24px | `text-base` |
| Título de sección `h2` | 24px, 500 | 18px, 500 | `text-[clamp(1.125rem,2vw,1.5rem)] font-semibold` |
| Título de tarjeta `h3` | 24px, 500 | 20px, 500 | `text-[clamp(1.25rem,2vw,1.5rem)] font-semibold` |
| Pregunta FAQ | 24px, 400 | 18px, 400 | `text-[clamp(1.125rem,2vw,1.5rem)] font-normal` |
| Respuesta FAQ | 24px (token `Accordion-PanelTextFontSize: 1.5rem`) | 18px (`1.125rem`) | igual que la pregunta |
| Botón grande | 24px, 500 | 18px, 500 | `text-[clamp(1.125rem,2vw,1.5rem)] font-medium` |
| Botón pequeño | 14px, 500, `line-height: 14px` | igual | `text-sm font-medium` |
| Cifra de ranking | 100px, 700, relleno negro, trazo blanco 0.25rem, sombra `0 0 1.5rem rgba(0,0,0,.5)` | ≈ proporcional | `text-[100px] font-extrabold` con `-webkit-text-stroke` en `--rank-stroke` |
| Footer | 16px enlace (teléfono), resto ≈14px (visual), `rgba(255,255,255,.7)` subrayado | igual | `text-sm text-gray-11 underline` |

Reelnight sube el titular a 800 porque Figtree a 700 se ve más ligera que Netflix Sans a 700 (decisión propia). Sin versales, sin mono, sin tracking negativo marcado.

## Layout

Columna central observada de 984px a 1280 (márgenes de 148px); a 360 márgenes de 24px (32px en el hero).

| Medida fuente | Paso Aura | px | Uso | Nivel |
| --- | --- | --- | --- | --- |
| 984 columna | `max-w-75.5` | 981.5 | Contenido | Observado (computado) |
| 808 alto del muro (imagen de 1280×808; el contenido del hero ocupa 708) | `min-h-62` | 806 | Hero con el arco solapado en sus últimos 97.5px | Observado (computado) |
| 100 alto del arco | `h-7.5` | 97.5 | Arco | Observado (computado) |
| 4 filo del arco | 4px | 4 | Borde | Observado (CSS) |
| 56 alto campo y CTA (1280) | `h-4` | 52 | Formulario hero | Observado (computado) |
| 48 alto campo y CTA (360) | `h-3.5` | 45.5 | Formulario móvil | Observado (computado) |
| 12 / 24 padding CTA | `py-1 px-2` | 13 / 26 | CTA grande | Observado (computado) |
| 8 hueco campo-botón (campo termina en x=713, botón empieza en x=721) | `gap-0.5` | 6.5 | Formulario | Observado (computado) |
| 32 botón de nav | `h-2.5` | 32.5 | "Entrar", idioma | Observado (computado) |
| 4 / 16 padding botón nav | `py-0.5 px-1` | 6.5 / 13 | "Entrar" | Observado (computado) |
| 93 banner promo, padding 16 / 32 | `py-1 px-2.5` | 13 / 32.5 | Banner | Observado (computado) |
| 24 título → fila | `mt-2` | 26 | Cabeceras | Observado (computado) |
| 72 entre secciones | `pt-5.5` | 71.5 | Ritmo vertical | Observado (computado) |
| 180×252 cartel (1280) | `w-14 h-19.5` | 182×253.5 | Tendencias | Observado (computado) |
| 112×157 cartel (360) | `w-8.5 h-12` | 110.5×156 | Tendencias móvil | Observado (computado) |
| 44 hueco entre carteles | `gap-3.5` | 45.5 | Fila (ocupado por la cifra) | Observado (computado) |
| 234×328 tarjeta razones, hueco 16 | `gap-1`, `min-h-25` | 13 / 325 | Tarjetas | Observado (computado) |
| 24 / 16 / 128 padding tarjeta | `pt-2 px-1 pb-10` | 26 / 13 / 130 | Tarjetas | Observado (computado) |
| 84 alto ítem FAQ, hueco 8 | `gap-0.5` | 6.5 | FAQ | Observado (computado) |
| 24 padding FAQ | `p-2` | 26 | FAQ | Observado (CSS) |

- Escritorio: 4 tarjetas de razones en fila; a 360 se apilan en una columna. La fila de tendencias hace scroll horizontal con flechas laterales de 24×120.
- A 360 el formulario de email pasa a columna con el botón alineado a la izquierda (observado) y el hero conserva el muro de carteles recortado.

## Elevation & Depth

- La profundidad sale de la **luz**, no de las sombras: velo negro sobre el muro, resplandor `--ember` a los lados del titular, arco con `--arc-glow` debajo.
- Tarjetas, banner y FAQ son planos: sin `box-shadow` (computado `none`).
- La única sombra es la de la cifra de ranking (`text-shadow: 0 0 1.5rem rgba(0,0,0,.5)`, observado).
- En claro el velo es papel y el resplandor un rosa pálido; nunca brillos fuertes.

## Shapes

- Botones y campos: **4px** (`--…Button-BorderRadius: 0.25rem`, `--…Input-BorderRadius: 0.25rem`). Reelnight fija `radius.button` y `radius.input` a `4px`; no los "corrijas" a píldora.
- Banner, tarjetas de razones: **16px** (computado). Carteles: **8px** (computado).
- FAQ: **0px** (`--…Accordion-HeadlineBorderRadius: 0rem`); bloques cuadrados con 1px de separación entre pregunta y respuesta.
- El **arco**: elipse superior `border-radius: 50% 50% 0 0 / 100% 100% 0 0` más ancha que la ventana (1664px a 1280).
- Marca Reelnight (propia): palabra en Figtree 900 en versalitas rojas con un pequeño arco debajo; en carteles, una insignia cuadrada roja con el mismo arco. No imita ningún logotipo.

## Components

- **CTA principal** → `Button variant="fill"` con `rounded-[4px] border-0 h-4 px-2 text-[clamp(1.125rem,2vw,1.5rem)] font-medium hover:bg-(--action-hover) active:bg-(--action-pressed)` y `ChevronRightIcon className="icon"` al final. Reelnight **anula** el `scale(1.03)` de hover y el `scale(0.97)` de pulsado de Aura (`hover:scale-100 active:scale-100`): en la fuente el botón solo cambia de color.
- **Entrar (nav)** → `Button variant="fill"` `h-2.5 px-1 text-sm`.
- **Secundario** → `Button variant="pill"` con `rounded-[4px] border-0 bg-gray-a5 text-gray-12 hover:bg-gray-a6 dark:bg-gray-a8 dark:hover:bg-gray-a7`.
- **Idioma** → `NativeSelect` con `GlobeIcon`, fondo `--field-surface`, borde `--field-line`, `h-2.5`.
- **Formulario de email** → `Input type="email"` con etiqueta flotante (12px cuando hay valor o foco, observado: `Input-LabelTextFontSize: 0.75rem`), `h-4`, borde 1px `--field-line`; error en `--alert-ink` con `CrossCircledIcon` vía `aria-describedby`, y el borde pasa a `--alert-ink`. La etiqueta debe verse siempre: anula el patrón de Aura que la oculta mientras el placeholder está visible. Todo es local: el demo no envía nada.
- **Campo sobre el muro** (decisión propia): `--field-surface` (70% en la fuente) se compone sobre `--screen` al 80% y el mensaje de error del hero va en una pastilla del mismo fondo. Con el 70% observado los carteles se transparentan y la etiqueta y el error bajan de 4.5:1 en algunos píxeles.
- **Arco** → `div` decorativo `aria-hidden` con el radio elíptico, `border-top` de 4px y el resplandor, dentro de un contenedor `overflow-clip` porque es más ancho que la ventana.
- **Hero** → `overflow-clip`, no `overflow-hidden`: con `hidden` el navegador desplaza el hero al enfocar el email y el muro se descoloca.
- **Banner promo** → `Card` `rounded-[16px] border-0 bg-linear-[91deg] from-(--promo-from) to-(--promo-to) shadow-none` con icono a la izquierda y `Button` secundario.
- **Tendencias** → lista horizontal; cada ítem es un `button` con cartel `rounded-[8px]` y la cifra contorneada detrás; abre un `Dialog` con sinopsis ficticia. Flechas `Button size="icon-md"` con `aria-label`.
- **Razones** → cuatro `Card` `rounded-[16px] bg-linear-[149deg] from-(--card-from) to-(--card-to)`, icono abajo a la derecha.
- **Stats, tabla y planes** → esqueleto Aura (no existen en la fuente): `Stat`, `Table` con `Badge` y tres `Card` de plan con `ToggleGroup`, todos marcados como ejemplo y con la misma piel (bloques `--panel`, radio 16px, rojo solo en la acción).
- **FAQ** → `Accordion type="single"`, disparador `bg-(--panel) hover:bg-(--panel-hover) p-2 rounded-none`, `PlusIcon` que gira 45° a `×`, panel con la misma superficie y 1px de separación.
- **Footer** → texto `text-gray-11`, cuatro columnas de enlaces `text-sm underline`, `NativeSelect` de idioma y una nota legal ficticia.

## Do's and Don'ts

- Do mantener un solo rojo de acción por vista y el resto en grises alfa.
- Do dejar que el muro de carteles y la luz hagan la profundidad; tarjetas planas.
- Do repetir el formulario de email al final, igual que el hero.
- Do marcar como ficticios carteles, títulos, cifras, precios y planes.
- Don't usar carteles, logos, fotogramas, nombres de títulos ni el teléfono de la fuente.
- Don't redondear los botones a píldora ni el FAQ a tarjetas.
- Don't usar el rojo como fondo de sección ni de tarjeta.
- Don't reproducir precios reales; la fuente mostraba un precio en USD el 2026-11-08 (contexto US) que aquí no se usa.
- Don't autoplay ni carruseles automáticos.

## Motion

Observado en el CSS de la fuente; Reelnight lo aplica solo dentro de `@media (prefers-reduced-motion: no-preference)` y solo con `transform`, `opacity`, `background-color` y `grid-template-rows`.

| Qué | Valor | Nivel |
| --- | --- | --- |
| Fondo de botón | `background-color 250ms cubic-bezier(0.4, 0, 0.68, 0.06)` | Observado (computado en el CTA) |
| Cartel al hover | `transform: scale(1.05)` en 200ms `ease-in-out` | Observado (CSS `:hover` y computado) |
| Flechas del carrusel | `opacity` 400ms `ease-in-out` | Observado (computado) |
| Panel FAQ | 250ms `cubic-bezier(0.32, 0.94, 0.6, 1)` | Observado (computado al abrir) |
| Icono FAQ `+` → `×` | rotación 45° | Observado (visual); duración propia (250ms) |

Con `reduce` nada transiciona ni escala; el FAQ abre y cierra sin animación.

## Calidad

Medido en Chrome headless sobre el showcase de la galería, claro / oscuro, a 1280 y 360. El contraste de texto se mide **por píxel**: se oculta el texto, se captura su caja (4px hacia dentro para excluir esquinas redondeadas) y se toma el peor píxel del fondo real contra el color computado del texto. Son comprobaciones en un navegador, no una auditoría completa.

| Par | Claro (peor de 1280 y 360) | Oscuro (peor de 1280 y 360) | Mínimo |
| --- | --- | --- | --- |
| Etiqueta blanca sobre `--accent-9` (CTA, "Entrar", insignia) | 4.79 | 4.79 | 4.5 |
| Titular del hero sobre el muro (peor píxel) | 9.66 | 7.91 | 3 (texto grande) |
| Pregunta del hero sobre el muro (peor píxel) | 8.93 | 6.00 | 4.5 |
| Etiqueta flotante sobre el campo | 7.32 | 8.95 | 4.5 |
| Error del campo (`--alert-ink`) en el hero | 5.55 | 4.71 | 4.5 |
| Texto de tarjeta de razones (`--gray-11` sobre degradado) | 6.14 | 7.72 | 4.5 |
| Pregunta FAQ sobre `--panel` | 12.93 | 11.87 | 4.5 |
| Enlaces y nota del footer (`--gray-11`) | 6.59 | 10.13 | 4.5 |
| Cabecera de tabla y etiquetas de stats | 6.01 | 6.64 | 4.5 |
| Anillo de foco `--gray-12` contra el lienzo | 14.17 | 18.10 | 3 |
| Borde del campo `--field-line` contra el lienzo (píxeles) | 4.63 | 3.24 | 3 |

- El rojo de la fuente con blanco da 4.79:1: pasa AA para texto normal por poco. No aclares el rojo ni pongas texto rojo pequeño sobre negro.
- El borde oscuro observado (`rgba(128,128,128,0.7)` sobre negro) queda en 3.24:1; no lo bajes.
- **Consumidor** (Aura `main.css` + `:root { --aura-text-primary-inverse: var(--gray-contrast) }` como en `packages/registry/styles/globals.css` + este `theme.css`): sin la mitigación, la etiqueta del `.button-fill` hereda la tinta del body (`#202020` sobre rojo, 3.40:1 en claro; `#eeeeee` sobre rojo, 4.13:1 en oscuro). Con `--aura-text-primary-inverse: var(--accent-contrast)` queda blanca, 4.79:1 en ambas.

### No legible

- El filo del arco: `border-top: 4px solid transparent` con una imagen de borde que no aparece en el CSS servido; el rojo → rosa se leyó de la captura.
- Ángulo y perspectiva del muro de carteles: es una sola imagen raster de 1280×808 en la fuente; la inclinación aquí es una aproximación con CSS.
- Tamaños del footer salvo el teléfono (16px) y del texto de precio del hero: lectura visual.
- Hover de tarjetas de razones y del banner: no se observó cambio.
- Métricas de Netflix Sans: propietaria; Figtree no las iguala.

## Reference

```tsx
<section className="relative isolate min-h-62 overflow-clip bg-gray-1 text-center">
  <PosterWall className="absolute inset-0 -z-10" aria-hidden />
  <div className="mx-auto flex max-w-45 flex-col items-center gap-1 pt-12.5">
    <h1 className="font-display text-[clamp(2rem,4.6vw,3.5rem)] font-extrabold leading-[1.25] text-gray-12">
      Cine de medianoche, series y más
    </h1>
    <p className="text-xl font-medium">Planes de ejemplo. Cancela cuando quieras.</p>
    <form className="mt-1 flex w-full flex-wrap justify-center gap-0.5" noValidate>
      <Input type="email" aria-label="Correo electrónico" className="h-4 flex-1 rounded-[4px] border-(--field-line) bg-(--field-surface)" />
      <Button variant="fill" className="h-4 rounded-[4px] px-2 text-[clamp(1.125rem,2vw,1.5rem)] font-medium">
        Empezar <ChevronRightIcon className="icon" />
      </Button>
    </form>
  </div>
  <div aria-hidden className="absolute inset-x-[-15%] bottom-0 h-7.5 rounded-[50%_50%_0_0/100%_100%_0_0] border-t-4 bg-gray-1" />
</section>
```
