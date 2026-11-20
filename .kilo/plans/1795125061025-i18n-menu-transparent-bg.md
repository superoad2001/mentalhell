# Plan: Fondo transparente del menú de idioma (i18n)

## Objetivo
Cambiar el fondo del menú desplegable de idioma (`#langMenu`) de blanco (`#ffffff`) a transparente con alpha 0, para que se vea el fondo oscuro de la página a través del menú.

## Archivo afectado
- `css/style.css` — regla `#langMenu`, línea 1464

## Cambio
En `css/style.css`, línea 1464:

```css
/* antes */
background: #ffffff;
/* después */
background: transparent;
```

Equivalente a `rgba(0, 0, 0, 0)`.

## Consideraciones
- El borde `border: 1px solid #cccccc` se mantiene (el usuario solo pidió cambiar el fondo).
- En móviles (media query `max-width: 767px`, línea ~1517) el fondo ya es `transparent`; este cambio unifica el comportamiento en desktop.
- No hay impacto en JavaScript ni en HTML.

## Validación
1. Abrir cualquier página (p. ej. `politicas.html`) y abrir el menú de idioma.
2. Verificar que el fondo del menú es transparente (se ve el fondo oscuro de la página).
3. Verificar que el borde gris (`#cccccc`) y las esquinas redondeadas (`border-radius: 10px`) se mantienen.

## Abierto
- Ninguna decisión pendiente.
