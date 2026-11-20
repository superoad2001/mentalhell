# Plan: Corregir selector de idioma (i18n) - doble toggle y posicionamiento

## Problema reportado

El usuario reporta que el icono/selector de idioma aparece "debajo" (descolocado verticalmente) y que al hacer clic no reacciona ni se abre la lista desplegable.

## Diagnóstico (verificado en código)

### Bug 1: Doble toggle — el menú se abre y cierra instantáneamente

Cada página tiene en el botón del idioma tanto:
- `onclick="toggleLangMenu()"` en el HTML (línea inline), y
- un `document.addEventListener("click", ...)` en `js/custom.js` que también llama a `toggleLangMenu()` cuando se hace clic en el botón.

Secuencia al hacer clic:
1. El inline `onclick` ejecuta `toggleLangMenu()` → abre el menú (`menuOpen = true`, `display: block`).
2. El evento burbujea al listener de `document`; `btn.contains(e.target)` es verdadero → ejecuta `toggleLangMenu()` de nuevo → cierra el menú inmediatamente (`menuOpen = false`, `display: none`).

Resultado: el menú nunca se ve abierto. Este es el motivo de "no reacciona ni sale la lista".

### Bug 2: Posicionamiento del menú desplegable

`#langMenu` tiene `position: absolute; top: calc(100% + 8px); right: 0;` en `css/style.css` (línea ~1445-1448), pero su padre directo (el `<div>` que envuelve a `#langBtn` y `#langMenu`) no tiene `position: relative`. Por tanto, el menú absoluto se posiciona respecto al ancestro posicionado más cercano (o al `body`), no debajo del botón. Esto explica que el icono/menú aparezca "debajo" o descolocado.

## Archivos afectados (10 páginas HTML)

Todas siguen el mismo patrón de nav con botón de idioma:

1. `index.html`
2. `contacto.html`
3. `launcher.html`
4. `alien1.html`
5. `alien2.html`
6. `alien3.html`
7. `lostdarkness.html`
8. `portafolios.html`
9. `politicas.html`
10. `tid-activity-manager.html`

Además: `js/custom.js` y `css/style.css` (ya contienen la lógica y los estilos, solo necesitan que el HTML los use correctamente).

## Correcciones a aplicar (una por página HTML)

En el bloque del selector de idioma de cada página, cambiar:

```html
<div>
  <button ... class="... lang-btn" id="langBtn" style="min-width: auto;" onclick="toggleLangMenu()">
    <span id="langFlag">🇪🇸</span>
  </button>
  <div id="langMenu" class="lang-menu">
    ...
  </div>
</div>
```

por:

```html
<div style="position: relative;">
  <button ... class="... lang-btn" id="langBtn" style="min-width: auto;">
    <span id="langFlag">🇪🇸</span>
  </button>
  <div id="langMenu" class="lang-menu">
    ...
  </div>
</div>
```

Cambios clave:
- Agregar `style="position: relative;"` al `<div>` padre (wrapper) para que `#langMenu` (`position: absolute`) se posicione debajo del botón.
- **Eliminar** `onclick="toggleLangMenu()"` del botón. El listener de `document` en `custom.js` ya maneja la apertura/cierre y el cierre al hacer clic fuera. Mantener el inline onclick causa el doble toggle.

## Cambios en JS / CSS (ninguno requerido)

- `js/custom.js`: la lógica ya está correcta (`toggleLangMenu`, `setLang`, listener de documento, detección de cookie/idioma, actualización de `<html lang>` y `document.title`). No requiere cambios.
- `css/style.css`: `.lang-btn`, `#langMenu`, `.lang-option` ya están definidos. Con `position: relative` en el wrapper padre, `#langMenu` se posicionará correctamente debajo del botón.

## Validación sugerida

1. Abrir cada una de las 10 páginas en el navegador.
2. Hacer clic en el botón del idioma: el menú desplegable debe abrirse (mostrar 🇪🇸 Español y 🇺🇸 English).
3. Hacer clic en una opción: el idioma debe cambiar (textos, `document.title`, `<html lang>`) y el menú debe cerrarse.
4. Hacer clic fuera del menú: debe cerrarse.
5. Recargar la página: el idioma seleccionado debe persistir (cookie `mentalhell_lang`).
6. Verificar que el botón del idioma quede alineado a la derecha, en la misma línea que los botones de nav (no debajo), y que el menú aparezca justo debajo del botón.

## Notas

- No tocar el script de tracking externo en `js/custom.js` (línea ~49 original).
- Los emojis de bandera (🇪🇸 / 🇺🇸) ya están en el HTML; no se requieren imágenes.
- El `lang-btn` ya usa `min-width: auto` y solo muestra el emoji, tal como se especificó.