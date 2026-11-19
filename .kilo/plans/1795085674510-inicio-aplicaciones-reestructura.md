# Nuevo inicio (Aplicaciones) y reestructuración de la navegación

## Objetivo

1. Crear una **página de inicio nueva** (`index.html`) con una sección **Aplicaciones** (iconos) y un bloque de **presentación** genérico debajo.
2. Renombrar la página actual de LOST DARKNESS a `lostdarkness.html`.
3. `portafolios.html` pasa a llamarse **"Hardware y Sistemas"** (solo nombre visible) y pierde sus 3 últimas fotos.
4. Barra de navegación común en todas las páginas: **Inicio**, **Hardware y Sistemas**, **Contacto**, **Políticas** (este último a la derecha de Contacto).
5. En Inicio, LOST DARKNESS aparece como icono de Aplicaciones y abre `lostdarkness.html`.

## Decisiones confirmadas

- Iconos: **solo LOST DARKNESS** (el launcher sigue sin enlazar, como ahora).
- Se **mantiene el archivo** `portafolios.html`; solo cambia el nombre visible.
- El botón **Políticas** se añade en **todas** las páginas.
- El texto de presentación lo redacta la implementación (genérico, editable).

## Estado actual relevante

- Las 8 páginas comparten el mismo bloque de botones (línea ~43-45 de `contacto.html`, `politicas.html`, `launcher.html`, `alien1-3.html`; línea ~50-52 de `index.html`; ~43-45 de `portafolios.html`):
  - `LOST DARKNESS` → `index.html`
  - `Portafolios` → `portafolios.html`
  - `Contacto` → `contacto.html`
- `index.html` es hoy la página de LOST DARKNESS (episodios, `.licens`, `.customer`, footer).
- `portafolios.html` tiene `<title>LOST DARKNESS 1</title>` (erróneo) y `<h2>PortaFolios</h2>`; 9 fotos `images/portafolios/foto1..9.jpg`.
- `politicas.html` ya usa la clase `.politicas` con degradado oro; sirve como plantilla de esqueleto (loader, banner, scripts).
- `images/LOST DARKNESS.png` no está referenciada en ningún HTML → libre para usarse como icono (nombre con espacio: se copiará a un nombre seguro).
- Paleta existente: fondo `#1b0905` (`.casino`, `.licens`, `.customer`), degradado oro `linear-gradient(to bottom, #bc883d, #f5e47b, #bc883d)` con `-webkit-background-clip: text`, texto `#ffffff` / `#f8eca6`.

## Archivos afectados

| Archivo | Acción |
|---|---|
| `index.html` | Se mueve a `lostdarkness.html`; se crea un `index.html` nuevo |
| `lostdarkness.html` | Recibe el contenido actual de `index.html` + nav nueva |
| `portafolios.html` | Título visible "Hardware y Sistemas", 3 fotos fuera, nav nueva |
| `contacto.html`, `politicas.html`, `launcher.html`, `alien1.html`, `alien2.html`, `alien3.html` | Solo nav nueva |
| `css/style.css` | Añadir bloque `.apps` al final del archivo |
| `images/icon_lost_darkness.png` | Nuevo (copia de `images/LOST DARKNESS.png`) |

---

## Tarea 1 — Nav común en las 8 páginas

Sustituir el bloque de botones por exactamente:

```html
               <div class="container text-center" style="padding-top: 80px; ">
                     <button type="button" class="btn btn-outline-light mx-3" style="min-width: 250px; margin-top: 20px;" onclick="window.location.href='index.html'">Inicio</button>
                     <button type="button" class="btn btn-outline-light mx-3" style="min-width: 250px; margin-top: 20px;" onclick="window.location.href='portafolios.html'">Hardware y Sistemas</button>
                     <button type="button" class="btn btn-outline-light mx-3" style="min-width: 250px; margin-top: 20px;" onclick="window.location.href='contacto.html'">Contacto</button>
                     <button type="button" class="btn btn-outline-light mx-3" style="min-width: 250px; margin-top: 20px;" onclick="window.location.href='politicas.html'">Políticas</button>
               </div>
```

Se aplica en `index.html` (nuevo), `lostdarkness.html`, `portafolios.html`, `contacto.html`, `politicas.html`, `launcher.html`, `alien1.html`, `alien2.html`, `alien3.html`.

## Tarea 2 — Renombrar el index actual

1. `mv index.html lostdarkness.html` (antes de crear el nuevo `index.html`).
2. En `lostdarkness.html` no cambia nada más que la nav de la Tarea 1. El `<title>` sigue siendo `LOST DARKNESS`.
3. Comprobar que los enlaces internos (alien1-3.html, itch.io, footer) siguen intactos.

## Tarea 3 — Icono de la aplicación

Copiar el recurso (no moverlo):

```
cp "images/LOST DARKNESS.png" "images/icon_lost_darkness.png"
```

Motivo: el nombre original lleva espacio y complica las rutas en `src`.

## Tarea 4 — Nuevo `index.html`

Crear el archivo completo con el mismo esqueleto que `politicas.html` (doctype, head, loader, `wrapper`, `#content`, footer, overlay y los mismos `<script>`). Contenido del cuerpo:

```html
            <section class="slider_section">
               <div class="banner_main">
                  <img class="img-centrada" src="images/bg_main_vacia.jpg" alt="#"/>
               </div>
               <!-- nav de la Tarea 1 -->
            </section>

            <div id="game" class="casino apps">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="titlepage">
                           <h2>Aplicaciones</h2>
                           <span></span>
                        </div>
                     </div>
                  </div>
                  <div class="row justify-content-center">
                     <div class="col-6 col-md-4 app_card">
                        <a href="lostdarkness.html">
                           <figure><img src="images/icon_lost_darkness.png" alt="LOST DARKNESS"/></figure>
                           <h3>LOST DARKNESS</h3>
                           <h4>Videojuego · Antología de 3 episodios</h4>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div class="licens">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="titlepage">
                           <h2>Presentación</h2>
                           <span></span>
                        </div>
                     </div>
                  </div>
                  <div class="row justify-content-center">
                     <div class="col-md-10">
                        <p class="textfrase presentacion-texto">
                           Mental Hell es un estudio independiente de desarrollo de videojuegos y software
                           dirigido por Serah Rodríguez Adell. En esta web se reúnen las aplicaciones y
                           proyectos publicados, junto con información sobre el hardware y los sistemas
                           utilizados en su desarrollo. El objetivo es crear experiencias accesibles,
                           cuidadas y con una identidad propia.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
```

Notas:
- `<title>Aplicaciones | Mental Hell</title>`.
- La imagen del banner es la neutra `bg_main_vacia.jpg` (no el arte del juego).
- El texto de presentación es provisional y editable; no enlaza a nada.
- Mantener `id="content"`, `<footer>` y scripts idénticos al resto de páginas.

## Tarea 5 — `portafolios.html`

1. `<title>Hardware y Sistemas</title>` (corrige el actual `LOST DARKNESS 1`).
2. `<h2>Hardware y Sistemas</h2>` (sustituye `PortaFolios`).
3. Nav de la Tarea 1.
4. Eliminar los tres últimos bloques de fotos: `foto7.jpg`, `foto8.jpg` y `foto9.jpg` (líneas 102-119 actuales). Quedan 6 fotos en una rejilla `col-md-4` × 2 filas. No borrar los archivos de `images/portafolios/` del disco.
5. Ajustar `meta keywords/description` si mencionan portafolios (opcionalmente "hardware y sistemas").

## Tarea 6 — `css/style.css`: estilos de la rejilla de aplicaciones

Añadir al final del archivo (todo scopeado bajo `.apps`):

```css
/* Aplicaciones (inicio) */

.apps .app_card {
    text-align: center;
    margin-bottom: 40px;
}

.apps .app_card a {
    display: block;
    text-decoration: none;
}

.apps .app_card figure {
    margin: 0;
    padding: 20px;
    background-image: linear-gradient(to bottom, #bc883d, #f5e47b, #bc883d);
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
}

.apps .app_card figure img {
    width: 100%;
    max-height: 220px;
    object-fit: contain;
}

.apps .app_card:hover figure {
    transform: translateY(-4px);
}

.apps .app_card h3 {
    margin-top: 18px;
    font-size: 22px;
    font-weight: bold;
    background-image: linear-gradient(to bottom, #bc883d, #f5e47b, #bc883d);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.apps .app_card h4 {
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 6px;
}

.presentacion-texto {
    max-width: 80%;
    margin: 0 auto 40px auto;
    text-align: left;
}

@media (max-width: 767px) {
    .presentacion-texto {
        max-width: 100%;
    }
}
```

## Validación

1. Abrir `index.html`: banner neutro, 4 botones, sección "Aplicaciones" con un icono de LOST DARKNESS y el bloque de presentación debajo.
2. Clic en el icono → `lostdarkness.html` conserva todo el contenido anterior (episodios, descargas, footer).
3. `portafolios.html`: título "Hardware y Sistemas" y exactamente 6 fotos, sin huecos ni scroll horizontal.
4. En las 8 páginas los 4 botones llevan a `index.html`, `portafolios.html`, `contacto.html` y `politicas.html`.
5. Sin 404 en consola: verificar `images/icon_lost_darkness.png` y `images/bg_main_vacia.jpg`.
6. Responsive a 375 px y 768 px: rejilla de 1 columna, botones apilados, sin overflow.
7. `politicas.html` mantiene su estructura y estilo actuales (solo cambia la nav).

## Riesgos

- Enlaces externos o marcadores a `index.html` (URL raíz) seguirán funcionando: el nuevo `index.html` es la portada.
- Si alguna página no existe con el nombre exacto (`contacto.html`, `alien*.html`), los botones darán 404; comprobar con `glob *.html` antes de dar por cerrada la tarea.
- El renombrado `index.html` → `lostdarkness.html` debe hacerse **antes** de crear el nuevo `index.html`, para no perder contenido.
