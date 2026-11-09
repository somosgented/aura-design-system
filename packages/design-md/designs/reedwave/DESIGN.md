---
version: "alpha"
name: "Reedwave"
description: "Un lienzo crema con tinta verde casi negra, píldoras verde junco, titulares grandes en peso regular, burbujas de conversación que flotan sobre maquetas de producto, una banda nocturna para la privacidad y un carrusel menta de novedades. Un flavor de Aura para apps de conversación, comunidades y herramientas de llamadas."
extends: "../../DESIGN.md"
colors:
  primary: "#22c46e"
  on-primary: "#0e1a16"
  surface: "#fbf4e8"
  surface-container: "#ffffff"
  surface-night: "#10201b"
  surface-mint: "#e2f9d4"
  on-surface: "#12201c"
  on-surface-variant: "#4d5a54"
  outline: "#12201c"
  bubble-out: "#d8f8c6"
  error: "#b42318"
typography:
  headline-display:
    fontFamily: "Hanken Grotesk"
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.01em
  headline-section:
    fontFamily: "Hanken Grotesk"
    fontSize: 60px
    fontWeight: 400
    lineHeight: 1
  headline-statement:
    fontFamily: "Hanken Grotesk"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1
  body-md:
    fontFamily: "Hanken Grotesk"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Hanken Grotesk"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1
  mono-scramble:
    fontFamily: "JetBrains Mono"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.2
rounded:
  card-mobile: 13px
  surface: 26px
  full: 9999px
spacing:
  unit: 13px
  header: 78px
  hero-inset: 32.5px
  section: 97.5px
  max-width: 1079px
aura:
  theme:
    light:
      accent: "#22c46e"
      gray: "#8c8778"
      background: "#fbf4e8"
    dark:
      accent: "#2fd27e"
      gray: "#7a8781"
      background: "#0f1714"
  fonts:
    sans: "Hanken Grotesk"
    display: "Hanken Grotesk"
    label: "JetBrains Mono"
    href: "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap"
  hero: "paper"
  headingWeight: 400
  radius:
    button: "9999px"
    input: "9999px"
    surface: "26px"
  tokens:
    light:
      canvas: "#fbf4e8"
      ink: "#12201c"
      on-reed: "#0e1a16"
      paper: "#ffffff"
      night: "#10201b"
      night-ink: "#f4f7f2"
      night-muted: "#b9c6bf"
      mint: "#e2f9d4"
      bubble-out: "#d8f8c6"
      bubble-in: "#ffffff"
      bubble-ink: "#12201c"
      reed-line: "#1a9e57"
      scene-sky: "#23403c"
      scene-glow: "#c9785a"
      scene-water: "#14302c"
      scene-reed: "#0c1f1b"
      hue-amber: "#f2b36b"
      hue-sky: "#8fc9e8"
      hue-rose: "#e89ab8"
      hue-leaf: "#a7d47e"
      hue-lilac: "#c7a6f0"
      alert-ink: "#b42318"
    dark:
      canvas: "#0f1714"
      ink: "#e9f2ec"
      on-reed: "#0e1a16"
      paper: "#17231f"
      night: "#08110e"
      night-ink: "#f4f7f2"
      night-muted: "#b9c6bf"
      mint: "#16302a"
      bubble-out: "#1f4a36"
      bubble-in: "#1c2925"
      bubble-ink: "#e9f2ec"
      reed-line: "#2fd27e"
      scene-sky: "#1b3330"
      scene-glow: "#a8634a"
      scene-water: "#0f2522"
      scene-reed: "#08171a"
      hue-amber: "#f2b36b"
      hue-sky: "#8fc9e8"
      hue-rose: "#e89ab8"
      hue-leaf: "#a7d47e"
      hue-lilac: "#c7a6f0"
      alert-ink: "#ff8a7a"
---

# Reedwave

> Conversaciones cálidas sobre papel crema, una píldora verde junco para cada acción y titulares que hablan en voz baja. Construido sobre Aura.

Source flavor: Reedwave, un flavor original de Aura. This file adapts it to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

Los niveles de cada valor: **medido** (tomado de capturas reales a 1280 y 360 y de estilos computados, convertido a la grilla), **propio** (decisión de Reedwave) y **esqueleto** (piezas de Aura que se muestran como ejemplo, sin equivalente en el lenguaje de partida). Nombre, marca, copy, ilustraciones, datos y avatares son originales y ficticios.

## Apply to an Aura project

Un agente que recibe el enlace de este archivo dentro de un proyecto Aura hace esto, en orden:

1. Guarda este archivo como `DESIGN.theme.md` en la raíz del proyecto. Mantén el `DESIGN.md` raíz (base Aura). Donde discrepen, este archivo gana en color, tipografía, radio, forma, motion y voz; la base gana en grid, accesibilidad, iconos y formularios.
2. Trae el `theme.css` hermano (misma URL, `DESIGN.md` → `theme.css`). Pega su `@import`, el bloque `@theme inline`, el bloque `:root`, el bloque de media oscura y el bloque `.dark` **después** de los existentes en el `globals.css` del proyecto. No edites a mano los valores generados. Después, fija en `:root` `--aura-text-primary-inverse: var(--on-reed)` para que la etiqueta de los botones verdes sea tinta oscura (ver **Calidad**).
3. Si la app usa `next/font`, carga `Hanken Grotesk` (400, 500, 600) y `JetBrains Mono` (400) allí en lugar del `@import`, y apunta `--font-sans` y `--font-display` a Hanken Grotesk y `--font-label` a JetBrains Mono.
4. Reestiliza solo con componentes Aura y clases de tokens, siguiendo **Components**. Ningún hex nuevo en componentes.
5. Conserva el contenido del producto. No importes el copy de ejemplo de Reedwave a un producto ajeno.
6. Verifica a 360px, en modo oscuro y con `prefers-reduced-motion: reduce`, y repasa la lista de Don'ts.

## Overview

Reedwave es una portada de producto conversacional. Un **header crema pegajoso** con navegación de texto, un desplegable de funciones y dos píldoras (contorno tinta y relleno verde). Un **hero en tarjeta** con margen de 32.5px y radio de 26px, escena ilustrada, titular blanco de 80px, dos burbujas de chat con reacciones y, en escritorio, un **panel translúcido de alta de demo**. Le siguen un anuncio de **llamadas desde el navegador** con una ventana de escritorio dibujada, dos **bandas de avatares con burbujas** que encuadran una **declaración central**, cinco bloques alternos de texto y **maqueta de dispositivo** (llamadas, privacidad en banda nocturna con texto que se descifra, grupos, estados con stickers, catálogo), el esqueleto Aura de ejemplo, un **carrusel menta de novedades** con flechas circulares, y un **footer nocturno** de cuatro columnas con selector de idioma en diálogo. En escritorio, una **barra fija de anuncio** menta cerrable; en móvil, una **franja de instalación** cerrable bajo el header.

## Colors

| Rol | Token | Nivel |
| --- | --- | --- |
| Lienzo | `--canvas` (crema exacto; el generador deriva `--gray-1` de la semilla mezclada con el gris y no lo iguala) | Medido (crema de secciones) |
| Superficie hundida, hover | `--gray-3`, `--gray-a3` | Propio |
| Superficie de tarjeta y desplegable | `--paper` | Medido (blanco) |
| Tinta | `--ink`, texto `--gray-12` | Medido (tinta verde casi negra) |
| Tinta atenuada | `--gray-11` | Propio |
| Acción | `--accent-9` (verde junco) | Medido en rol; tono propio |
| Texto sobre la acción | `--on-reed` | Medido (tinta sobre verde, no blanco) |
| Borde de píldora | `--ink` a 1px | Medido |
| Banda de privacidad y footer | `--night`, texto `--night-ink`, atenuado `--night-muted` | Medido |
| Banda de novedades y barra fija | `--mint` | Medido |
| Burbuja saliente / entrante | `--bubble-out` / `--bubble-in`, texto `--bubble-ink` | Medido en rol; tono propio |
| Subrayado de enlaces de bloque | `--reed-line` | Medido (subrayado verde grueso) |
| Escena del hero | `--scene-sky`, `--scene-glow`, `--scene-water`, `--scene-reed` | Propio |
| Avatares ilustrados | `--hue-amber`, `--hue-sky`, `--hue-rose`, `--hue-leaf`, `--hue-lilac` | Propio |
| Error de campo | `--alert-ink` | Propio |
| Foco | `--ink` a 2px con 2px de separación | Propio |

- Un verde por vista para la acción principal; el verde nunca rellena secciones.
- La banda menta y la nocturna son las únicas superficies de sección distintas del crema.

### Dark mode

El lenguaje de partida no tiene modo oscuro global: solo la banda de privacidad y el footer son oscuros. El oscuro de Reedwave es una **adaptación propia**: lienzo `#0f1714`, tarjetas `--paper` verde noche, la banda nocturna un paso más profundo con un filo `--gray-a4`, menta convertida en verde bosque y el verde de acción un punto más claro. No se invierte nada: el showcase conmuta unas pocas variables semánticas en un bloque `.dark`.

| Variable | Claro | Oscuro |
| --- | --- | --- |
| `--surface-card` | `--paper` | `--paper` (verde noche) |
| `--band-night` | `--night` | `--night` con borde `--gray-a4` |
| `--band-mint` | `--mint` | `--mint` (verde bosque) |
| `--pill-line` | `--ink` | `--gray-a8` |
| `--hero-veil` | escena al 100% | escena con un velo `--gray-1` al 20% |
| `--shadow-pop` | sombra suave doble | sombra más corta y oscura |

## Typography

**Hanken Grotesk** (OFL) es la cara única de texto: grotesca humanista, abierta, legible en peso regular a 80px. **JetBrains Mono** (OFL) solo aparece en el texto que se descifra de la banda de privacidad. No se presenta ninguna como equivalente métrico de nada.

| Elemento | 1280 (medido) | 360 (medido) | Aura |
| --- | --- | --- | --- |
| Titular hero `h1` | 80px / 80px, 400 | 44px / 44px | `font-display text-[80px] leading-none max-[1023px]:text-[44px]` |
| Titular de bloque `h2` | 60px / 60px, 400 | 32px / 32px | `text-[60px] leading-none max-[1023px]:text-[32px]` |
| Declaración central | 48px / 48px, 400 | 24px / 24px | `text-5xl leading-none` |
| Párrafo de bloque | 17px / 1.5 | 17px / 1.5 | `text-[17px]` |
| Píldoras y enlaces de bloque | 16px, 500 | 16px | `text-base font-medium` |
| Texto que se descifra | 32px mono | 20px mono | `font-label text-[32px]` |

Titulares siempre en 400: la jerarquía sale del tamaño, nunca del peso. Sin versales ni tracking marcado.

## Layout

| Medida | Paso Aura | px | Uso | Nivel |
| --- | --- | --- | --- | --- |
| 80 alto header (1280) | `h-6` | 78 | Header pegajoso | Medido |
| 58 alto header (360) | `h-4.5` | 58.5 | Header móvil | Medido |
| 32 margen de la tarjeta hero | `p-2.5` | 32.5 | Hero 1280 | Medido |
| 16 margen de la tarjeta hero (360) | `p-1` | 13 | Hero móvil | Medido |
| 720 alto tarjeta hero | `h-55` | 715 | Hero 1280 | Medido |
| 1080 columna de contenido | `max-w-83` | 1079 | Bloques | Medido |
| 24 margen lateral | `px-2` | 26 | Columna | Medido |
| 45 alto píldora del header, padding 12 / 20 | `h-3.5 px-1.5` | 45.5 / 19.5 | Entrar, Descargar | Medido |
| 53 alto píldora grande, padding 16 / 32 | `h-4 px-2.5` | 52 / 32.5 | CTA hero y footer | Medido |
| ≈800 alto de bloque | `py-7.5` | 97.5 | Ritmo vertical | Medido |
| 180 ancho desplegable | `w-14` | 182 | Funciones | Medido |
| 504 tarjeta de novedad, padding 56, hueco 24 | `w-39 p-4 gap-2` | 507 / 52 / 26 | Carrusel | Medido |
| 48 flecha del carrusel | `size-3.5` | 45.5 | Anterior / Siguiente | Medido |
| 760 × 600 diálogo de idioma | `w-58.5 max-h-46` | 760.5 × 598 | Idioma | Medido |
| 62 barra fija | `h-5` | 65 | Barra de anuncio | Medido |

- Bloques de producto: texto y maqueta en dos columnas alternas (texto a la izquierda en llamadas, grupos y catálogo; a la derecha en anuncio, privacidad y estados). A menos de 1024px todo se apila con el texto arriba.
- Las bandas de avatares ocupan todo el ancho y no tienen texto propio salvo las burbujas.

## Elevation & Depth

- Plano por defecto: secciones, tarjetas de novedad y footer sin sombra.
- Solo flotan las capas que se superponen: el desplegable, las burbujas del hero, la tarjeta de evento sobre la maqueta de grupos y la barra fija (`--shadow-pop`).
- El panel de alta del hero es un vidrio oscuro: fondo `--scene-reed` al 70% con `backdrop-filter: blur(13px)`.

## Shapes

- Botones y campos: **píldora** (`radius.button` y `radius.input` a `9999px`). No los cuadres.
- Tarjeta hero, tarjetas de novedad, desplegable y diálogo de idioma: **26px**. La tarjeta hero baja a **13px** a 360.
- Flechas del carrusel, botón de descarga móvil y redes del footer: círculos con borde de 1px.
- Burbujas: 13px con la esquina del lado del emisor a 3px.
- Marca Reedwave (propia): un cuadrado `--accent-9` de esquinas suaves con dos ondas de tinta y la palabra en Hanken Grotesk 600.

## Components

- **Acción principal** → `Button variant="fill"` `rounded-full border border-(--ink) bg-accent-9 text-(--on-reed) h-4 px-2.5` con `DownloadIcon className="icon"`; en el header `h-3.5 px-1.5`. Reedwave **anula** el `scale(1.03)` de hover de Aura (`hover:scale-100`): la píldora solo oscurece a `--accent-10`.
- **Entrar** → `Button variant="pill"` `rounded-full border border-(--ink) bg-(--paper) text-gray-12` con `ChevronRightIcon`.
- **Funciones** → `NavigationMenu` con un `NavigationMenuContent` `w-14 rounded-[26px] bg-(--paper) shadow-(--shadow-pop)`; abre con clic, Enter, Espacio o flecha abajo y cierra con Escape devolviendo el foco.
- **Menú móvil** → `Sheet` a pantalla completa bajo el header, lista con separadores `--gray-6`, sub-vista de funciones con botón de volver; `aria-expanded` en la hamburguesa.
- **Enlace de bloque** → `Button variant="link"` `no-underline text-base` con `ChevronRightIcon` y un subrayado `border-b-[3px] border-(--reed-line)` bajo el texto.
- **Panel de alta (solo ≥1024px)** → `Card` vidrio con `Input type="tel"` de píldora, prefijo ficticio en `NativeSelect` y `Button variant="fill"`. Todo es local: no envía, no autentica y no guarda el número.
- **Burbujas y reacciones** → `Card` pequeñas `rounded-[13px]` con `--bubble-out` / `--bubble-in`, hora en `text-xs text-gray-11` y `Badge` de reacciones.
- **Maquetas de dispositivo** → dibujos propios en CSS/SVG (marco de teléfono `rounded-[26px]`, ventana de escritorio); avatares como círculos de color con iniciales, nunca fotos.
- **Texto que se descifra** → `span` mono `aria-hidden` animado más el texto final en `sr-only`; con `Toggle` de pausa (`aria-pressed`).
- **Carrusel de novedades** → lista con scroll horizontal y snap, cinco `Card` `rounded-[26px] bg-(--paper) p-4`, cada una con `Button variant="pill"` "Leer más"; flechas `Button size="icon-md"` circulares con `aria-label`, región `aria-live="polite"` con "Novedad n de 5". Sin autoplay.
- **Barra fija (≥768px)** → `Alert` en `--mint` fijada abajo con enlace y `Button size="icon-sm"` de cerrar; mientras está visible el `body` reserva su alto.
- **Franja de instalación (<768px)** → `Alert` compacta bajo el header con el cuadrado de marca, texto, `Button variant="link"` y cerrar.
- **Stats, tabla, formulario, planes y FAQ** → esqueleto Aura (`Stat`, `Table` con `Badge`, `Input` y `Textarea` con etiqueta visible a 17px, tres `Card` de plan con `ToggleGroup`, `Accordion`), rotulados como ejemplo y con la misma piel: crema, tarjetas `--paper` de 26px, píldoras.
- **Footer** → fondo `--night`, marca, acción principal, cuatro columnas de enlaces `text-sm text-(--night-muted)`, redes genéricas en círculos y un `Button` de idioma que abre un `Dialog` (centrado en escritorio, hoja inferior en móvil) con `NativeSelect` de región y rejilla de idiomas.

## Do's and Don'ts

- Do usar un solo verde por vista y tinta para todo lo demás.
- Do dejar que las burbujas y las maquetas cuenten el producto; el texto queda corto.
- Do marcar como ficticios números, nombres, novedades, precios y conversaciones.
- Do ofrecer cerrar la barra fija y la franja de instalación.
- Don't usar fotografías, logotipos, stickers, capturas de interfaz ni nombres de terceros.
- Don't prometer cifrado, llamadas ni mensajes reales: es un demo visual.
- Don't pedir, enviar ni guardar números de teléfono en el panel de alta.
- Don't poner titulares en negrita ni texto pequeño verde sobre crema.
- Don't autoplay en el carrusel.

## Motion

Solo dentro de `@media (prefers-reduced-motion: no-preference)` y solo con `opacity`, `transform` y `background-color`.

| Qué | Valor | Nivel |
| --- | --- | --- |
| Entrada de burbujas del hero | 330ms `cubic-bezier(0.33, 0, 0, 1)`, retrasos 400 / 800 / 1000ms | Medido |
| Entrada de bloques al aparecer | 1000ms `cubic-bezier(0.33, 0, 0, 1)` | Medido |
| Texto que se descifra | ciclo propio de 4s con pausa | Propio |
| Carrusel | `scroll-behavior: smooth` | Propio |
| Píldoras | `background-color` 250ms | Propio |

Con `reduce` todo aparece en su estado final, el texto queda descifrado y quieto y el carrusel salta sin animación.

## Calidad

Contraste WCAG de los pares de tokens (claro / oscuro):

| Par | Claro | Oscuro |
| --- | --- | --- |
| `ink` sobre `canvas` | 15.38 | 15.94 |
| `gray-11` sobre `canvas` (texto secundario, placeholder) | 6.80 | 8.72 |
| `gray-11` sobre `paper` (placeholder en tarjeta) | 7.43 | 7.76 |
| `on-reed` sobre `accent-9` (etiqueta de botón verde) | 7.80 | 9.03 |
| `accent-11` sobre `paper` (nombre en burbuja) | 5.93 | 8.65 |
| `night-ink` sobre `night` | 15.62 | 17.72 |
| `night-muted` sobre `night` | 9.56 | 10.84 |
| `ink` sobre `mint` | 15.00 | 12.33 |
| `bubble-ink` sobre `bubble-out` | 14.54 | 8.79 |

Medido en `result.html` a 1280 y 360 px, en claro y oscuro: todo el texto informativo cumple AA (el mínimo es 3.85 en el titular grande del hero sobre la escena a 360 px, y 4.77 en texto normal); el foco es visible en cada parada del tabulador; no hay desbordamiento horizontal; con `prefers-reduced-motion: reduce` no corre ninguna animación y el texto cifrado queda fijo, y con movimiento tiene un botón de pausa.

- `--aura-text-primary-inverse` debe fijarse a `var(--on-reed)`: el generador deja blanco sobre `accent-9` en claro, que no llega a 3:1.
- El generador emite `--gray-contrast: undefined`; no uses ese token.
- `reed-line` es un trazo decorativo (subrayados, iconos); no lo uses para texto.

## Reference

```tsx
<section className="mx-auto max-w-83 px-2 py-7.5 grid gap-5 lg:grid-cols-2 items-center">
  <div className="grid gap-2">
    <h2 className="font-display text-[60px] leading-none max-[1023px]:text-[32px]">Llama a quien quieras</h2>
    <p className="text-[17px] text-gray-11">Videollamadas de ejemplo para grupos pequeños.</p>
    <Button variant="link" className="justify-self-start no-underline border-b-[3px] border-(--reed-line) px-0">
      Ver más <ChevronRightIcon className="icon" />
    </Button>
  </div>
  <PhoneMockup aria-hidden className="justify-self-center rounded-[26px]" />
</section>
```
