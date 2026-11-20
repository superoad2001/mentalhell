# Plan: Limitar tamaño de iconos de apps a la medida de Lost Darkness

## Contexto

En `index.html` hay dos tarjetas de aplicaciones (`index.html:91-97` Lost Darkness, `index.html:98-104` TID Activity Manager). Amchas comparten la clase `.apps .app_card` y la regla CSS `.apps .app_card figure img` en `css/style.css:1387-1391`:

```css
.apps .app_card figure img {
    width: 100%;
    max-height: 220px;
    object-fit: contain;
}
```

El usuario considera que `220px` es demasiado holgado: el icono de TID (`icotidact2.png`, más pequeño que Lost Darkness) se ve desproporcionado. Quiere que el tamaño de referencia sea el icono real de Lost Darkness (`icon_lost_darkness.png`) y que ambos iconos tengan ese mismo tope (el de TID, al ser más pequeño, simplemente ocupará menos espacio dentro del marco).

## Decisiones

1. Medir las dimensiones reales (ancho x alto) de `images/icon_lost_darkness.png`. Ese alto será el `max-height` (y opcionalmente `max-width`) de referencia.
2. Aplicar ese mismo límite a **ambas** tarjetas mediante la regla compartida `.apps .app_card figure img` (no hace falta regla por icono).
3. Mantener `object-fit: contain` para que ni uno ni el otro se deforme.
4. No tocar el HTML (`index.html` ya apunta a `icotidact2.png` correctamente desde el cambio previo).

## Tareas

1. **Medir dimensiones** de `images/icon_lost_darkness.png` (ancho y alto en px). Nota: en este modo no dispongo de herramienta que lea metadatos de imagen; este paso requiere ejecutar fuera (ej. PowerShell `Add-Type -AssemblyName System.Drawing`, o cualquier visor de imágenes) y anotar el alto de Lost Darkness.
2. **Editar `css/style.css:1389`**: cambiar `max-height: 220px;` por `max-height: <H_LOST>px;` donde `<H_LOST>` es el alto medido de Lost Darkness. Opcionalmente añadir `max-width: <W_LOST>px;` si se quiere limitar también el ancho.
3. **Verificar** en el servidor local (`http://localhost:8000/index.html`) que Lost Darkness ocupe su tamaño real y que TID nunca lo supere (se verá más pequeño dentro del mismo marco).

## Criterio de aceptación

- El icono de Lost Darkness se muestra a su tamaño natural (no escalado hacia arriba por `width: 100%`).
- El icono de TID Activity Manager no excede el tamaño de Lost Darkness; al ser más pequeño, ocupa menos espacio dentro del mismo contenedor dorado.
- Ninguna de las dos tarjetas se deforma (`object-fit: contain` preservado).

## Archivos implicados

- `css/style.css:1387-1391` — regla `.apps .app_card figure img` a modificar.
- `images/icon_lost_darkness.png` — referencia de tamaño (solo lectura).
- `images/icotidact2.png` — icono de TID (solo lectura).

## Abierto

- Dimensiones exactas (px) de `icon_lost_darkness.png`: pendiente de medir con herramienta de imagen disponible fuera de este modo.
