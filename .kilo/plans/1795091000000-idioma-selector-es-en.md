# Plan: Seleccion de idioma Espanol / Ingles

## Objetivo

Añadir un selector de idioma (Español / Ingles) a todas las paginas del sitio. Espanol es el idioma por defecto. La seleccion se guarda en cookies y se detecta automaticamente del navegador (es-* => Espanol, cualquier otro => Ingles). El boton es una capsula pequeña con la bandera (emoji) del idioma elegido, alineada a la derecha de la fila de botones de nav. Al hacer clic se abre un menu desplegable debajo con 2 opciones (bandera + nombre), disenadas como capsulas rectangulares alargadas del mismo tamano con 1 cm de separacion.

## Decisiones confirmadas

| Decision | Valor |
|---|---|
| Idiomas | Espanol (es) e Ingles (en) |
| Idioma por defecto | Espanol |
| Orden de deteccion | cookie `mentalhell_lang` -> `navigator.language`/`navigator.languages` (es-* => es, todo lo demás => en) -> default es |
| Persistencia | Cookie vanilla JS, nombre `mentalhell_lang`, expiracion 365 dias, sin libreria externa |
| Iconos de idioma | Emojis: 🇪🇸 (Español), 🇺🇸 (Ingles) — no se necesitan archivos de imagen |
| Boton de idioma | Capsula pequena en la fila de nav, al borde derecho, muestra el emoji de bandera del idioma activo |
| Menu desplegable | Click para abrir/cerrar, click fuera para cerrar, 2 opciones (bandera izquierda + nombre derecha), capsulas rectangulares alargadas mismo tamano, separacion 1 cm |
| Metodo de traduccion | Atributo `data-i18n` en elementos traducibles; JS reemplaza `textContent` segun idioma activo |
| Scope de traduccion | Todo el texto visible en las 10 paginas (nav, titulos, h2/h3/h4, p, botones, <title>) |
| Archivo JS | `js/custom.js` — se añade el modulo i18n al final |
| Archivo CSS | `css/style.css` — se añaden estilos del boton y menu desplegable |

## Archivos afectados

| Archivo | Accion |
|---|---|
| `js/custom.js` | Añadir modulo i18n (deteccion, cookies, diccionario ES/EN, applyTranslations, toggle menu, setLang, click fuera para cerrar) |
| `css/style.css` | Añadir estilos `.lang-btn`, `.lang-menu`, `.lang-option` y variantes responsive |
| `index.html` | Boton idioma en nav + `data-i18n` en todos los textos traducibles |
| `contacto.html` | Igual que index |
| `politicas.html` | Igual que index (mas texto, mayor esfuerzo de extraccion de strings) |
| `launcher.html` | Igual que index |
| `alien1.html` | Igual que index |
| `alien2.html` | Igual que index |
| `alien3.html` | Igual que index |
| `lostdarkness.html` | Igual que index |
| `portafolios.html` | Igual que index |
| `tid-activity-manager.html` | Igual que index |

## Tareas (orden de implementacion)

### 1. Modulo i18n en js/custom.js
- Añadir funciones `getCookie(name)` y `setCookie(name, value, days)` (vanilla JS, `document.cookie`)
- Añadir `detectLanguage()`: lee cookie; si no hay, lee `navigator.language` (o `navigator.languages[0]`); si empieza con "es" devuelve "es", si no "en"
- Añadir diccionario `translations.es` y `translations.en` con todas las claves `data-i18n` y sus valores en cada idioma
- Añadir `applyTranslations(lang)`: recorre `[data-i18n]`, reemplaza `textContent` (y `document.title` si tiene `data-i18n`); actualiza `document.documentElement.lang`
- Añadir `toggleLangMenu()`: muestra/oculta el menu desplegable
- Añadir `setLang(lang)`: guarda cookie, actualiza emoji del boton, llama `applyTranslations(lang)`, cierra menu
- Añadir listener `click` en `document` para cerrar menu al hacer click fuera
- Inicializacion en `DOMContentLoaded`: detectar idioma, aplicar traducciones, configurar boton

### 2. Estilos CSS en css/style.css
- `.lang-btn`: capsula pequena, `min-width: auto`, padding reducido, alineado a la derecha, muestra solo el emoji
- `.lang-menu`: contenedor absoluto posicionado debajo del boton, `display: none` por defecto, fondo, borde, border-radius, sombra
- `.lang-option`: `display: flex`, `align-items: center`, `gap: 1cm` (bandera + nombre), ancho completo, mismo ancho para las 2 opciones, padding, cursor pointer, hover
- Responsive: en pantallas pequenas el menu se adapta al ancho del boton

### 3. Boton de idioma en el nav de las 10 paginas
- Añadir despues del boton "Politicas" (ultimo de la fila), alineado a la derecha:
  ```html
  <button type="button" class="btn btn-outline-light mx-3 lang-btn" id="langBtn" style="min-width: auto;" onclick="toggleLangMenu()">
    <span id="langFlag">🇪🇸</span>
  </button>
  <div id="langMenu" class="lang-menu">
    <div class="lang-option" onclick="setLang('es')"><span class="lang-flag">🇪🇸</span><span class="lang-name">Español</span></div>
    <div class="lang-option" onclick="setLang('en')"><span class="lang-flag">🇺🇸</span><span class="lang-name">English</span></div>
  </div>
  ```
- Ajustar el contenedor `.container text-center` del nav para permitir alineacion a la derecha del boton de idioma (usar `justify-content-between` o similar, o un wrapper con flex)

### 4. Atributos `data-i18n` en todas las paginas
Agregar `data-i18n="clave"` a todos los elementos con texto traducible:
- `<title>` (todas las paginas)
- Botones nav: Inicio, Hardware y Sistemas, Contacto, Políticas
- h2, h3, h4, p, span con texto visible
- index.html: "Aplicaciones", "Presentación", texto presentacion-texto, h4 de LOST DARKNESS y TID Activity Manager
- tid-activity-manager.html: h2, h3, parrafos
- politicas.html: todo el texto legal (h3, h4, p, li) — mayor volumen
- contacto.html, launcher.html, alien1-3, lostdarkness.html, portafolios.html: sus respectivos textos

### 5. Diccionario de traducciones ES -> EN
Rellenar `translations.en` con el equivalente en ingles de cada clave ES. politicas.html es el de mayor volumen.

## Validacion

1. Abrir cualquier pagina: el boton de idioma muestra 🇪🇸 (espanol por defecto si cookie vacia y navegador en espanol)
2. Cambiar navegador a ingles (o borrar cookie y navegar con locale en): al cargar, muestra 🇺🇸 y textos en ingles
3. Click en boton de idioma: se abre menu con 2 opciones (🇪🇸 Espanol, 🇺🇸 English) como capsulas rectangulares, 1 cm de separacion, mismo ancho
4. Click en opcion distinta: textos cambian de idioma, cookie se guarda, al recargar persiste el idioma elegido
5. Click fuera del menu: se cierra
6. Las 10 paginas muestran el boton de idioma y funcionan el cambio de idioma
7. No hay errores de consola relacionados con cookies o DOM

## Riesgos / notas

- politicas.html tiene gran volumen de texto legal; extraer todas las claves y traducirlas es la tarea mas larga
- El contenedor nav usa `text-center`; el boton de idioma a la derecha requiere ajuste de layout (flex `justify-content-between` o wrapper aparte)
- El tracking script externo en custom.js (linea ~49, `leostop.com`) se deja intacto; el modulo i18n se añade al final sin interferir
- Los emojis de bandera dependen del SO/navegador del usuario; en sistemas antiguos pueden mostrarse como letras (ES/US) — aceptable como fallback
