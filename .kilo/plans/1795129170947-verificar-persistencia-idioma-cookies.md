# Plan: Verificar persistencia de idioma entre páginas (cookies)

## Contexto actual

El sitio ya implementa persistencia de idioma mediante cookies en `js/custom.js`:

- `COOKIE_NAME = "mentalhell_lang"`, `COOKIE_DAYS = 365`
- `setLang(lang)` → `setCookie(COOKIE_NAME, lang, COOKIE_DAYS)` con `path=/` (disponible en todas las páginas del mismo dominio)
- `detectLanguage()` lee la cookie al cargar cada página; si no existe, usa `navigator.language`
- `applyTranslations(lang)` actualiza todos los elementos `[data-i18n]` y el botón `langFlag`

**Limitación conocida:** las cookies no funcionan con el protocolo `file://` (al abrir los HTML directamente desde el explorador de archivos). Requieren HTTP (servidor local o remoto).

## Tareas (verificación, sin cambios de código)

1. Servir el sitio por HTTP (ej. `npx serve .`, `python -m http.server`, o Live Server de VS Code). No abrir archivos directamente con `file://`.
2. Abrir `index.html` en el navegador.
3. Abrir DevTools → Application → Cookies y confirmar que existe `mentalhell_lang` con valor `es` o `en`.
4. Cambiar el idioma al menú desplegable (ES ↔ EN).
5. Confirmar que la cookie se actualiza y que los textos de la página cambian al idioma seleccionado.
6. Navegar a otra página (ej. `contacto.html`, `portafolios.html`) y confirmar que:
   - La cookie `mentalhell_lang` sigue presente con el mismo valor.
   - Los textos ya aparecen en el idioma seleccionado sin recargar manualmente.
7. Volver a `index.html` y confirmar que el idioma se mantiene.

## Criterio de aceptación

El idioma seleccionado persiste al navegar entre cualquiera de las 10 páginas (`index.html`, `contacto.html`, `politicas.html`, `launcher.html`, `alien1.html`, `alien2.html`, `alien3.html`, `lostdarkness.html`, `portafolios.html`, `tid-activity-manager.html`) cuando el sitio se sirve por HTTP.

## Riesgos / notas

- Si el usuario abre los HTML directamente (`file://`), las cookies no persisten. En ese caso sería necesario usar `localStorage` o servir el sitio por HTTP.
- No hay proceso de build/lint; validación exclusivamente manual en navegador.
- `js/custom.js` no requiere cambios si la verificación es exitosa.

## Archivos implicados

- `js/custom.js` (líneas 158-161, 566-582, 599-603): mecanismo de cookie existente, no se modifica.
- Los 10 archivos HTML: cada uno carga `js/custom.js` y dispone del selector de idioma.
