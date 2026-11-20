# Plan: Corregir borde del menú desplegable y color de opciones del selector de idioma

## Problema reportado (usuario)

1. La lista desplegable del selector de idioma (`#langMenu`) muestra un borde blanco/gris claro alrededor; debe ser cero (`border: 0`).
2. Las opciones del menú (`.lang-option`) deben tener el mismo color que el botón "Inicio" (`.btn.btn-outline-light`): actualmente son fondo sólido `#f4f4f4` con texto `#000000`; deben ser fondo transparente, borde y texto claros como un botón outline-light.

## Contexto verificado en código

- Selector implementado con clases propias (no nice-select): `.lang-btn`, `#langMenu`, `.lang-option`, `.lang-flag`, `.lang-name` en `css/style.css` (líneas 1430-1531).
- Estructura HTML idéntica en las 10 páginas: `index.html`, `contacto.html`, `politicas.html`, `launcher.html`, `alien1.html`, `alien2.html`, `alien3.html`, `lostdarkness.html`, `portafolios.html`, `tid-activity-manager.html` (bloque del idioma dentro del nav, botón + menú anidado).
- `css/style.css:1466-1478` `#langMenu`: `background: transparent; border: 1px solid #cccccc; border-radius: 10px; box-shadow: 0 4px 14px rgba(0,0,0,0.35);` → el `border: 1px solid #cccccc` es el borde blanco/gris que se ve alrededor de la lista.
- `css/style.css:1480-1502` `.lang-option`: `background: #f4f9f4` (fondo sólido gris claro), `color: #000000`, `border-radius: 8px`, hover `background: #e8e8e8`.
- Referencia de color "botón de inicio": `.btn-outline-light` en `css/bootstrap.css:2849-2860`: `color: #f8f9fa; background-color: transparent; border-color: #f8f9fa;`; hover `color: #212529; background-color: #f8f9fa; border-color: #f8f9fa;`.
- `js/custom.js:595-635` (`setLang`, `toggleLangMenu`) funciona; no requiere cambios. El anidamiento del menú dentro del `<button>` es preexistente (se gestiona en plan anterior `1795092103767-fix-i18n-selector-bugs.md`); fuera de alcance de este ajuste visual.

## Decisiones

| # | Decisión | Valor |
|---|----------|-------|
| 1 | Archivo a modificar | Solo `css/style.css` (regla i18n, líneas ~1466-1502) |
| 2 | Borde de `#langMenu` | `border: 1px solid #cccccc` → `border: 0;` (se conserva box-shadow, border-radius, background transparente) |
| 3 | Colores de `.lang-option` | Iguales a `.btn.btn-outline-light`: fondo transparente, `border: 1px solid #f8f9fa`, `color: #f8f9fa` |
| 4 | Hover de `.lang-option` | Igual a outline-light hover: `background: #f8f9fa; color: #212529; border-color: #f8f9fa` |
| 5 | Forma (border-radius) | Se conserva `8px` en opciones; solo se cambian colores, per solicitud "mismo color" |
| 6 | Responsive (`max-width: 767px`) | Ya tiene `border: none` en `#langMenu`; `.lang-option` hereda los nuevos colores automáticamente |

## Tareas (orden de implementación)

1. `css/style.css`: en `#langMenu` cambiar `border: 1px solid #cccccc;` por `border: 0;`.
2. `css/style.css`: en `.lang-option` cambiar `color: #000000;` → `color: #f8f9fa;`, `background: #f4f4f4;` → `background: transparent;`, añadir `border: 1px solid #f8f9fa;`.
3. `css/style.css`: en `.lang-option:hover` cambiar `background: #e8e8e8;` por `background: #f8f9fa; color: #212529; border-color: #f8f9fa;`.

## Validación

1. Abrir `index.html` (y una página más, ej. `portafolios.html`) en el navegador.
2. Abrir el menú del idioma: la lista desplegable no debe mostrar borde alrededor (`border: 0`).
3. Las opciones "ES Español" y "US English" deben verse como botones outline-light: fondo transparente, borde claro y texto claro, iguales al botón "Inicio".
4. Al pasar el mouse sobre una opción, fondo `#f8f9fa` con texto oscuro `#212529`.
5. Recargar y verificar que no hay errores de consola relacionados.

## Riesgos / notas

- No hay comandos de lint/typecheck en este sitio estático (solo HTML/CSS/JS); la validación es visual en el navegador.
- El menú desplegado queda sobre fondo transparente con `box-shadow`, por lo que al quitar el borde se conserva la separación visual sobre el fondo oscuro.
- No se modifican las 10 páginas HTML ni `js/custom.js`.
