# Plan: Ajustes del menú y botón de idioma — alineación por borde izquierdo y colores

## Problemas reportados (por screenshot del usuario)
1. `#langMenu` no queda alineado al borde izquierdo del botón; queda desplazado con hueco visible. Causa raíz: `#langMenu` es hermano (sibling) de `#langBtn` dentro de un wrapper `position: relative`, no hijo. Por eso `left`/`right` resuelven contra el borde del wrapper, no contra el botón.
2. `#langBtn` no respeta el estilo `outline-light` (borde blanco / texto blanco) como los botones nav; se ve oscuro y sin borde claro.

## Decisiones
- **Alineación:** anidar `#langMenu` dentro de `#langBtn` para que el `position: absolute` del menú resuelva contra el botón. `#langMenu`: `left: 0` (borde izquierdo del menú = borde izquierdo del botón), `top: calc(100% + 6px)` (cuelga debajo del botón, extendiéndose a la derecha). Se elimina `left: 100%` / `right: auto`.
- **Colores del botón:** asegurar que `.lang-btn` no anule `btn-outline-light`; reforzar `border` y `color` si es necesario para que coincida con los botones nav.
- **Preservar sin cambios:** fondo transparente del menú, borde `1px solid #cccccc`, `border-radius: 10px`, `box-shadow`.
- **Mobile (`max-width: 767px`):** `#langMenu` ya se resetea a `position: static`; no se afecta por cambios de posicionamiento desktop.

## Archivos afectados
- `css/style.css`: regla `#langMenu` (posicionamiento) y regla `.lang-btn` (reforzar colores outline-light).
- HTML (10 archivos): `index.html`, `contacto.html`, `launcher.html`, `alien1.html`, `alien2.html`, `alien3.html`, `lostdarkness.html`, `portafolios.html`, `politicas.html`, `tid-activity-manager.html` — anidar `<div id="langMenu">` dentro de `<button id="langBtn">`.

## Tareas
1. `css/style.css`: `#langMenu` → `position: absolute; left: 0; top: calc(100% + 6px);` (quitar `left: 100%`/`right: auto`). Mantener `background: transparent`, `border: 1px solid #cccccc`, `border-radius: 10px`, `box-shadow`.
2. `css/style.css`: `.lang-btn` → asegurar `border`/`color` de `outline-light`; mantener `min-width: auto !important`, padding/font-size alineados a nav.
3. 10 HTML files: mover `<div id="langMenu">...</div>` dentro de `<button id="langBtn">...</button>` (anidar); el wrapper ya no necesita `position: relative` (el relative queda en `#langBtn` que ya lo tiene).
4. Validación visual en cada página.

## Validación (manual; sin package.json ni lint/typecheck)
- Abrir cada página, click 🇪🇸, comprobar que el menú surge desde el borde IZQUIERDO del botón, sin hueco, con borde gris `#cccccc`, `border-radius: 10px`, sombra y fondo transparente.
- Comprobar que `#langBtn` tiene borde blanco y texto blanco igual que los botones nav (`outline-light`).
- Mobile: menú se muestra como bloque estático debajo del botón.
