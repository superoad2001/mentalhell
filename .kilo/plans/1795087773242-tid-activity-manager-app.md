# Nueva app "TID Activity Manager" como segundo icono en Aplicaciones (inicio)

## Objetivo

Añadir una segunda aplicación a la sección **Aplicaciones** de `index.html`: una tarjeta `.app_card` con icono genérico que abra una nueva página `tid-activity-manager.html` con contenido genérico/relleno. No se modifica la barra de navegación común (se mantiene con 4 botones).

## Decisiones confirmadas

| Decisión | Valor |
|---|---|
| Archivo de la página nueva | `tid-activity-manager.html` |
| Icono | Copia placeholder de `images/icon_lost_darkness.png` → `images/icon_tid_activity_manager.png` |
| h3 / nombre visible | `TID Activity Manager` |
| h4 / descripción corta | `applicacion para la gestion del sistema de personas con tid` |
| Botón en nav común | No (se mantiene con 4 botones: Inicio, Hardware y Sistemas, Contacto, Políticas) |
| Cambios CSS | Ninguno (reusa `.apps .app_card` existente en `css/style.css`) |

## Archivos afectados

| Archivo | Acción |
|---|---|
| `tid-activity-manager.html` | Nuevo (esqueleto idéntico a `politicas.html`/`contacto.html`) |
| `index.html` | Añadir 2ª tarjeta `.app_card` en sección Aplicaciones |
| `images/icon_tid_activity_manager.png` | Nuevo (copia de `images/icon_lost_darkness.png`) |

## Tareas

1. **Crear `tid-activity-manager.html`**
   - Esqueleto igual al de `politicas.html` (doctype, head, loader, `wrapper`, `#content`, footer, overlay, mismos 5 `<script>` + 2 inline).
   - `<title>TID Activity Manager</title>`.
   - Banner `images/bg_main_vacia.jpg`.
   - Nav común de 4 botones (Inicio, Hardware y Sistemas, Contacto, Políticas).
   - `<div id="game" class="casino">` con `<h2>TID Activity Manager</h2>` y un bloque de texto genérico/relleno (editable después).
   - Mantener `id="content"`, `<footer>` y scripts idénticos al resto de páginas.

2. **Copiar icono placeholder**
   - `cp "images/icon_lost_darkness.png" "images/icon_tid_activity_manager.png"` (no mover el original).

3. **Añadir 2ª tarjeta en `index.html`**
   - Dentro de `<div class="row justify-content-center">` de la sección Aplicaciones, añadir una segunda `<div class="col-6 col-md-4 app_card">`:
     ```html
     <a href="tid-activity-manager.html">
        <figure><img src="images/icon_tid_activity_manager.png" alt="TID Activity Manager"/></figure>
        <h3>TID Activity Manager</h3>
        <h4>applicacion para la gestion del sistema de personas con tid</h4>
     </a>
     ```
   - Queda: LOST DARKNESS (col 1) + TID Activity Manager (col 2), rejilla `col-md-4` × 1 fila.

## Validación

1. Abrir `index.html`: sección Aplicaciones muestra 2 iconos (LOST DARKNESS y TID Activity Manager) en una fila.
2. Clic en el icono TID → `tid-activity-manager.html` carga con título/h2 correctos y sin 404.
3. `images/icon_tid_activity_manager.png` existe y se carga sin 404 en consola.
4. El nav común sigue con exactamente 4 botones en las 8 páginas (sin cambios).
5. Responsive 375/768 px: las 2 tarjetas se apilan en 1 columna, sin overflow horizontal.

## Riesgos / notas

- El icono es un placeholder (copia del de LOST DARKNESS); reemplazarlo por la imagen definitiva de TID cuando esté disponible.
- No se añade 5º botón al nav; la app solo es accesible desde el icono de inicio y escribiendo la URL directamente.
