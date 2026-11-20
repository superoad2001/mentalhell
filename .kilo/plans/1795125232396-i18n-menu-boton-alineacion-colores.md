# Plan: Ajustes del botón y menú de idioma (i18n) — alineación, colores y formato

## Contexto / estado actual
Se aplicó el cambio previo: `#langMenu` → `background: transparent;` en `css/style.css:1464` (plan `1795125061025-i18n-menu-transparent-bg.md`, completado). El usuario reporta ahora tres problemas pendientes:

1. El menú desplegado se abre hacia la izquierda: `#langMenu` usa `right: 0`, que alinea el borde DERECHO del menú al borde derecho del contenedor padre y la lista se extiende hacia la izquierda. Debe empezar alineado al borde DERECHO del botón `#langBtn` y extenderse hacia la derecha.
2. El botón `#langBtn` presenta un borde claro/blanco y no tiene los mismos colores/formato que los demás botones de la barra de navegación.
3. Preservar: fondo transparente del menú, borde `1px solid #cccccc`, `border-radius: 10px`, `box-shadow`.

## Decisiones
- **Alineación del menú:** cambiar `#langMenu` de `right: 0` a `left: 100%; right: auto;` manteniendo `top: calc(100% + 6px);`, para que el borde izquierdo del menú nazca en el borde derecho del botón y la lista se despliegue hacia la derecha.
  - Nota: `#langBtn` lleva `mx-3` (margen derecha ~1rem) que puede dejar un pequeño hueco. Si se requiere contacto exacto sin hueco, cambiar `mx-3` → `ms-3` en el HTML de `#langBtn` (o anidar `#langMenu` dentro de `#langBtn`). Se recomienda `left: 100%; right: auto;` como primer ajuste CSS.
- **Colores/formato del botón:** mantener `btn btn-outline-light` (fondo transparente, borde claro, texto claro) igual que los botones hermanos de la barra. Revisar `.lang-btn` (`css/style.css:1430`), que sobrescribe `padding: 6px 12px !important` y `font-size: 22px`; alinear esas propiedades con los hermanos o neutralizar sobresaltos de color para que no se vea desparejo. Conservar el estilo outline-light.
- **Preservar sin cambios:** fondo transparente, borde `#cccccc`, `border-radius: 10px`, `box-shadow` del menú.

## Archivos afectados
- `css/style.css`: regla `#langMenu` (posicionamiento) y regla `.lang-btn` (estilo visual).
- HTML (10 archivos): `index.html`, `contacto.html`, `launcher.html`, `alien1.html`, `alien2.html`, `alien3.html`, `lostdarkness.html`, `portafolios.html`, `politicas.html`, `tid-activity-manager.html` — solo si se opta por cambiar `mx-3` → `ms-3` en `#langBtn` o anidar el menú.

## Tareas
1. `css/style.css`: en `#langMenu`, reemplazar `right: 0` por `left: 100%; right: auto;` (mantener `top: calc(100% + 6px);`).
2. `css/style.css`: revisar/ajustar `.lang-btn` para igualar colores y formato de los botones de la barra (mantener `btn-outline-light`; revisar `padding`, `font-size`, `display`).
3. Opcional (HTML): si se necesita alineación exacta sin hueco, cambiar `mx-3` por `ms-3` en `#langBtn` de los 10 archivos HTML.
4. Validación manual en cada página.

## Validación (visual/manual; no hay package.json ni lint/typecheck)
- Abrir `politicas.html` (y el resto) en escritorio, click en 🇪🇸, comprobar que el menú surge del lado DERECHO del botón.
- Comprobar fondo transparente (se ve el fondo oscuro de la página), borde gris `#cccccc`, `border-radius: 10px`, sombra.
- Comprobar que `#langBtn` tiene los mismos colores/formato que los demás botones nav (outline-light).

## Abierto
- Ninguno (decisiones tomadas; detalles de margen exacto se ajustan en la implementación).
