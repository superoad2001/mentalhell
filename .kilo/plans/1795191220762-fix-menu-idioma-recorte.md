# Plan: el menú desplegable de idioma queda oculto bajo la cabecera

## Problema

Al pulsar el botón de idioma (`#langBtn`, capsule "ES"), el menú `#langMenu` con las opciones Español/English no se ve completo: la parte que cae por debajo de la cabecera desaparece (el usuario lo percibe como que "se queda debajo del fondo"). Afecta sobre todo a móvil y a anchos de escritorio donde la cabecera es baja (~1024px y menos).

## Causa raíz (verificada en el código)

- `css/style.css:561-567` — `.banner_main` tiene `overflow: hidden`.
- En las 9 páginas, `#langMenu` está anidado dentro de `#langBtn`, y `#langBtn` está dentro de `.banner_main` (`index.html:36-45` y equivalentes).
- `#langBtn` lleva inline `position: absolute; right: 20px; top: 20px;`, así que su bloque contenedor es `.banner_main`, que recorta (`overflow: hidden`) todo lo que sobresale de la altura de la imagen de cabecera.
- `#langMenu` (`css/style.css:1466-1478`) es `position: absolute; top: calc(100% + 6px);` y mide ~90-100px de alto. Con la altura de la imagen (`bg_main_vacia.jpg`, `bg_main.jpg`, `bg_main1/2/3.jpg`) el conjunto botón + menú supera el borde inferior de `.banner_main` en móvil/tablet y en escritorio estrecho, por lo que la parte inferior del menú se recorta.
- No es un problema de `z-index`: el botón es un elemento posicionado y `#langMenu` ya tiene `z-index: 1000`, así que una vez eliminado el recorte se pinta por encima del fondo y de la navegación.
- Defecto secundario en móvil: la media query `@media (max-width: 767px)` (`css/style.css:1522-1535`) pone `#langMenu` en `position: static`. Como `.lang-btn` es `display: inline-flex` sin `flex-direction`, el menú pasa a ser un hermano flex del texto "ES" y se coloca al lado, no debajo; además el botón crece dentro de la cabecera recortada.

## Decisión

- Mantener el diseño actual del botón y del menú (colores, cápsulas, transparencia).
- Eliminar solo el recorte de la cabecera y hacer que, también en móvil, el menú se despliegue como dropdown debajo del botón (igual que en escritorio), sin que la altura del banner lo corte.
- No tocar `js/custom.js`, los diccionarios, el HTML ni la lógica de cookies/localStorage.

## Tareas ordenadas

### 1. `css/style.css` — permitir que el menú sobresalga de la cabecera

En la regla `.banner_main` (líneas 561-567) cambiar:

```css
overflow: hidden;
```

por:

```css
overflow: visible;
```

Notas:
- Es seguro: `.banner_main` solo contiene la imagen (`display: block; max-width: 100%`), el botón de idioma y, en `lostdarkness.html`, un `container-fluid` vacío. No hay contenido que dependa del recorte.
- `html`/`body` conservan `overflow-x: hidden` (`css/style.css:48` y `:57`), así que no aparece scroll horizontal.
- No hace falta añadir `z-index` nuevo: `#langMenu` ya tiene `z-index: 1000` y su ancestro `.banner_main` no crea stacking context (position relative sin z-index).

### 2. `css/style.css` — menú dropdown también en móvil

En `@media (max-width: 767px)` (líneas 1522-1535), eliminar del bloque `#langMenu` las declaraciones que lo convierten en flujo estático:

```css
position: static;
width: 100%;
border-radius: 0;
box-shadow: none;
border: none;
background: transparent;
```

Es decir, borrar el bloque `#langMenu { ... }` completo de esa media query, dejando el bloque `.lang-option` que ya existe. Así `#langMenu` hereda la regla base (`position: absolute; top: calc(100% + 6px); right: 0; min-width: 200px; z-index: 1000`).

Comprobación de encaje: con el botón a `right: 20px`, un menú de 200px de ancho cabe desde 320px de viewport (borde izquierdo a ~100px) y se abre hacia la izquierda, sin salirse.

### 3. Sin cambios en HTML/JS

- No mover `#langMenu` fuera de `#langBtn`.
- No cambiar `onclick`, `setLang`, `toggleLangMenu`, cookies ni traducciones.

## Verificación

Servir el sitio por HTTP (`python -m http.server`) y comprobar en `index.html`, `contacto.html`, `politicas.html`, `portafolios.html`, `lostdarkness.html`, `alien1.html`, `alien2.html`, `alien3.html` y `tid-activity-manager.html`:

1. Escritorio 1280/1366: clic en "ES" → se ven las dos opciones completas, con sombra y cápsulas; el menú queda por encima del fondo y de la navegación.
2. 1024 y 992: mismo resultado, sin que la altura del banner recorte la opción "English".
3. 768 y 767 (frontera de la media query): el menú se abre debajo del botón, completo y alineado a su derecha.
4. 414/375/320: el menú se abre debajo del botón, las dos opciones visibles, sin scroll horizontal y sin recorte inferior.
5. Elegir "English" → cambia el idioma, se cierra el menú y el layout de navegación móvil sigue correcto; volver a "Español" funciona igual.
6. Clic fuera del menú → se cierra. El botón sigue abriendo/cerrando sin doble toggle.
7. Regresión visual de la cabecera: la imagen de fondo se ve igual y no aparece contenido desbordado por haber quitado `overflow: hidden` (revisar especialmente `lostdarkness.html`).

## Riesgos y notas

- Si al quitar el recorte apareciera algún desbordamiento inesperado de la imagen en algún navegador, la alternativa sería mantener `overflow: hidden` en `.banner_main` y trasladar únicamente el botón/menú fuera del contenedor recortado; es más invasiva (9 HTML) y no se espera necesaria.
- El menú abierto en móvil se superpone a la zona de navegación (el botón es absoluto y no empuja contenido). Es el comportamiento estándar de un dropdown y evita recortes.
- Fuera de alcance: rediseño del selector de idioma, cambio de textos, persistencia de idioma y el layout de los botones de navegación ya corregido.

## Archivos afectados

- `css/style.css` (único archivo a modificar)
