# Plan: Corregir alineación del botón de idioma en la misma línea que los botones de nav

## Problema reportado

El botón de selector de idioma (bandera) aparece en una **segunda línea**, debajo de "Políticas", en lugar de a la derecha en la misma línea que los botones de navegación.

## Diagnóstico (verificado en código)

El contenedor padre en `index.html:39` es:

```html
<div class="container d-flex justify-content-between align-items-center flex-wrap" style="padding-top: 80px;">
```

Contiene dos divs hijos:
1. `index.html:40` — `<div class="d-flex justify-content-center" style="flex: 1;">` con los 4 botones de nav (cada uno `min-width: 250px`, `margin-top: 20px`). El `flex: 1` le hace ocupar todo el ancho disponible centrado.
2. `index.html:46` — `<div style="position: relative; display: flex; align-items: center; margin-top: 20px;">` con el botón de idioma.

Con `flex-wrap` activo en el padre y el primer hijo ocupando `flex: 1`, el segundo hijo se desplaza a una segunda línea. El wrapper del idioma no tiene `flex-shrink: 0` para forzar que se quede en la misma fila.

## Archivos afectados (10 páginas)

Todas replican el mismo patrón de nav:
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

## Correcciones a aplicar

### 1. Contenedor padre (todas las 10 páginas, línea ~39)

Quitar `flex-wrap` para que el botón de idioma no baje a segunda línea:

```html
<!-- antes -->
<div class="container d-flex justify-content-between align-items-center flex-wrap" style="padding-top: 80px;">
<!-- después -->
<div class="container d-flex justify-content-between align-items-center" style="padding-top: 80px;">
```

### 2. Wrapper del idioma (todas las 10 páginas, línea del `<div>` que envuelve `#langBtn`)

Asegurar `flex-shrink: 0` para que nunca envuelva:

```html
<!-- antes -->
<div style="position: relative; display: flex; align-items: center; margin-top: 20px;">
<!-- después -->
<div style="position: relative; display: flex; align-items: center; margin-top: 20px; flex-shrink: 0;">
```

### 3. CSS (opcional, refuerzo en `css/style.css`)

Añadir regla específica para el wrapper del idioma si el estilo inline no basta:

```css
.lang-wrapper {
    flex-shrink: 0;
}
```

Y añadir clase `lang-wrapper` al div en lugar de (o además de) el estilo inline.

## Validación sugerida

1. Abrir cada una de las 10 páginas en el navegador (Ctrl+F5 para evitar caché).
2. Verificar que el botón de idioma (bandera) quede **en la misma línea** que los botones de nav (Inicio, Hardware y Sistemas, Contacto, Políticas), a la derecha de "Políticas".
3. Verificar que al hacer clic se abra el menú desplegable con fondo blanco y opciones legibles.
4. Verificar que el menú se posicione debajo del botón de idioma (no descolgado).

## Notas

- No tocar el script de tracking externo en `js/custom.js` (línea ~49).
- El IIFE ya expone `window.setLang` y `window.toggleLangMenu` (líneas 634-635 de custom.js).
- CSS ya tiene llaves balanceadas (206/206).
- No hay imágenes de bandera; se usan emojis 🇪🇸/🇺🇸 con `font-variant-emoji: emoji`.

No se debe commitear a menos que el usuario lo solicite explícitamente.
