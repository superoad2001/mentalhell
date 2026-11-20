# Plan: Corregir color y bordes del botón de idioma y menú desplegable

## Problema
- `#langBtn` (`.lang-btn`) no se ve igual que los botones nav `.btn.btn-outline-light`: tiene un contorno blanco visible y color diferente.
- El menú `#langMenu` muestra un borde blanco con alpha != 0 (no coincide con el diseño esperado).

## Causa raíz
Especificidad CSS: `.btn.btn-outline-light` (0,2,0) tiene mayor especificidad que `.lang-btn` (0,1,0). Aunque `.lang-btn` declara los mismos valores de outline-light, algunas propiedades pueden resolverse de forma inconsistente entre clases, y el menú/herencia de bordes no está blindado.

## Archivo afectado
- `css/style.css` — reglas `.lang-btn` y `#langMenu`

## Cambios requeridos

### 1. `.lang-btn` — igualar exactamente a `.btn.btn-outline-light`
En `css/style.css` (línea ~1430), elevar la especificidad y asegurar que todas las propiedades de outline-light se apliquen sin ser anuladas por `.btn.btn-outline-light`:

Opción A (recomendada): cambiar el selector a `.btn.btn-outline-light.lang-btn` y mantener/añadir:
- `background: rgba(255, 255, 255, 0.12)`
- `border: 1px solid rgba(255, 255, 255, 0.6)`
- `border-radius: 999px`
- `color: #ffffff`
- `font-weight: 600`
- `box-shadow: inset 0 0 0 0 rgba(255,255,255,0.1)`
- `transition: background 0.2s ease, transform 0.2s ease`
- `cursor: pointer`

Opción B: mantener selector `.lang-btn` pero añadir `!important` a `background`, `border`, `border-radius`, `color`.

### 2. `#langMenu` — eliminar/revisar borde blanco no deseado
Verificar que `#langMenu` use `border: 1px solid #cccccc` (gris) y no un borde blanco con alpha. Si hay reglas que le apliquen borde blanco, corregirlas.

## Validación
- Abrir cada una de las 10 páginas HTML.
- Clic en 🇪🇸.
- Confirmar que el botón de idioma se ve idéntico a los botones nav (mismo fondo, mismo borde, mismo texto blanco, mismo radio 999px).
- Confirmar que el menú desplegable no tiene contorno blanco inesperado (borde gris #cccccc, radius 10px, sombra, fondo transparente).

## Planes previos (contexto)
- Plan anterior `1795127747298-i18n-menu-alineacion-colores-revisado.md` ya anidó `#langMenu` dentro de `#langBtn` y corrigió `left: 0` / `top: calc(100% + 6px)`. Ese trabajo se conserva; este plan solo corrige la apariencia de color/bordes.