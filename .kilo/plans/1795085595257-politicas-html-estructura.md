# Estructurar el texto de politicas.html (sin modificar el contenido)

## Objetivo

El contenido completo de la política vive hoy dentro de un único `<p class="textfrase">` (`politicas.html:61-242`). Los saltos de línea del texto no se renderizan en HTML, así que en la web aparece como un bloque continuo ilegible. Hay que trocearlo en `h3`/`h4`, `p` y `ul`/`li` **conservando el texto literal** (incluidas tildes, puntuación, la errata `yse applicaran` y los espacios finales).

Alcance confirmado con el usuario: **solo formato**, sin índice de apartados ni texto nuevo.

## Archivos afectados

- `politicas.html` — sustituir el bloque de contenido (líneas 60-243).
- `css/style.css` — añadir reglas nuevas después de `.textfrase` (línea 661).

No se toca: el `<h2>Polticas de privacidad</h2>` (línea 55), el título del documento, navegación, footer ni scripts.

## Tarea 1 — Reescribir el bloque de contenido en `politicas.html`

Reemplazar desde `<div class="row justify-content-center" >` (línea 60) hasta su `</div>` de cierre (línea 243) por esta estructura. El wrapper deja de ser `<p>` y pasa a `<div class="textfrase politicas">`; `textfrase` se mantiene para heredar tipografía y color, `politicas` aporta el ancho y los estilos de sección.

```html
<div class="row justify-content-center">
   <div class="col-md-12">
      <div class="textfrase politicas">

         <h3>POLÍTICA GENERAL DE PRIVACIDAD</h3>
         <p>Aplicaciones, programas informáticos y videojuegos</p>

         <ul class="politicas-meta">
            <li>Desarrollador / Titular: mentalhelldev</li>
            <li>Correo electrónico: superoad2001@gmail.com</li>
            <li>Web oficial: mentalhell.es</li>
            <li>Versión: 1.0</li>
            <li>Fecha de publicación: 19/11/2026</li>
            <li>Fecha de entrada en vigor: 19/11/2026</li>
         </ul>

         <h4>1. Ámbito de aplicación</h4>
         <p>Esta Política de Privacidad establece los principios generales de privacidad aplicables a las aplicaciones, programas informáticos y videojuegos desarrollados y publicados por el titular.</p>
         <p>Los productos podrán distribuirse y utilizarse, según corresponda a cada versión, mediante diferentes sistemas operativos y plataformas, entre ellos:</p>
         <ul>
            <li>Android.</li>
            <li>iOS.</li>
            <li>Windows.</li>
            <li>Linux.</li>
            <li>SteamOS.</li>
            <li>Steam.</li>
            <li>Otras plataformas de distribución o sistemas operativos compatibles.</li>
         </ul>
         <p>No todos los productos estarán disponibles en todas las plataformas. Esta política se aplicará exclusivamente al producto y a la versión concreta que el usuario haya descargado, instalado o esté utilizando.</p>

         <h4>2. Recopilación de información por el desarrollador</h4>
         <p>El titular no solicita a los usuarios la creación de cuentas, registros personales ni la facilitación de información identificativa para utilizar sus aplicaciones o videojuegos, salvo que una funcionalidad específica indique expresamente lo contrario.</p>
         <p>Los productos están diseñados para funcionar sin sistemas propios de recopilación de datos personales, seguimiento de usuarios, elaboración de perfiles o almacenamiento de información personal en servidores del titular.</p>
         <p>El titular no recopila información personal para fines publicitarios, comerciales, estadísticos o de seguimiento del comportamiento de los usuarios.</p>

         <h4>3. Ausencia de sistemas propios de telemetría y servidores de recopilación</h4>
         <p>El titular no utiliza ni mantiene sistemas propios de telemetría, analítica de usuarios, seguimiento, monitorización del comportamiento o recopilación automatizada de información sobre la actividad de los usuarios.</p>
         <p>Tampoco mantiene servidores propios destinados a recibir o almacenar información personal procedente del funcionamiento ordinario de sus aplicaciones o videojuegos.</p>
         <p>No se implementan mecanismos propios destinados a identificar a los usuarios, registrar sus hábitos de utilización, elaborar perfiles personales o realizar un seguimiento individualizado.</p>
         <p>La información que pueda generarse o almacenarse localmente durante el funcionamiento de un producto permanecerá, en su caso, en el dispositivo del usuario, salvo las funcionalidades específicas descritas en esta política.</p>

         <h4>4. Sistemas operativos y plataformas de terceros</h4>
         <p>Cada producto funciona en el sistema operativo y entorno tecnológico para el que haya sido desarrollado y publicado.</p>
         <p>En función de la versión utilizada, podrán intervenir plataformas y proveedores independientes como Google, Apple, Microsoft, Valve, proveedores de distribuciones Linux y otros servicios tecnológicos.</p>
         <p>Estos proveedores pueden recopilar, tratar y almacenar información técnica o de utilización relacionada con sus propios sistemas operativos, dispositivos, tiendas de aplicaciones y plataformas de distribución.</p>
         <p>Dichos tratamientos se realizan bajo las políticas de privacidad, condiciones de servicio y configuraciones de cada proveedor.</p>
         <p>El titular no controla ni determina los tratamientos que estos proveedores realizan directamente para el funcionamiento y prestación de sus propios servicios, ni responde de sus operaciones independientes de tratamiento, sin perjuicio de las responsabilidades legales que le correspondan por sus propias actuaciones.</p>
         <p>La presente política no pretende atribuir al titular la gestión de los datos que las plataformas recopilan por cuenta propia ni eximirlo de las obligaciones que legalmente le correspondan.</p>

         <h4>5. Motores de desarrollo y tecnologías utilizadas</h4>
         <p>Las aplicaciones y videojuegos pueden haber sido desarrollados mediante diferentes tecnologías, motores de programación y herramientas de desarrollo, incluyendo Unity u otros entornos similares.</p>
         <p>El uso de un motor de desarrollo no implica por sí mismo que el titular recopile información de los usuarios.</p>
         <p>El titular no utiliza las herramientas de desarrollo para implementar sistemas propios de telemetría, analítica de usuarios o seguimiento de la actividad de los jugadores.</p>
         <p>Las funcionalidades técnicas de diagnóstico o recopilación de información que puedan estar incorporadas en herramientas externas deberán distinguirse de los mecanismos propios del titular y revisarse antes de habilitarlas en una versión publicada.</p>

         <h4>6. Plataformas de distribución y servicios externos</h4>
         <p>Algunas aplicaciones y videojuegos pueden distribuirse mediante plataformas como Google Play, Apple App Store o Steam.</p>
         <p>Estas plataformas pueden proporcionar servicios complementarios, como autenticación, almacenamiento en la nube, sincronización, logros, estadísticas, multijugador y otras funcionalidades.</p>
         <p>Cuando el usuario utilice servicios prestados directamente por estas plataformas, el tratamiento de información efectuado por ellas estará sujeto a sus respectivas políticas de privacidad y condiciones de servicio.</p>
         <p>El titular no controla los tratamientos independientes realizados por dichos proveedores fuera de las funcionalidades y tratamientos bajo su responsabilidad.</p>
         <p>La utilización de estos servicios no implica que el titular disponga de acceso a toda la información que las plataformas puedan recopilar de sus usuarios.</p>

         <h4>7. Informes técnicos de errores y cierres inesperados en videojuegos de Steam</h4>
         <p>Como excepción limitada a la ausencia general de sistemas de recopilación de información, el titular podrá habilitar en determinados videojuegos distribuidos mediante Steam funcionalidades específicas de recepción de informes técnicos de errores, fallos de funcionamiento o cierres inesperados (crash reports).</p>
         <p>Esta funcionalidad tendrá como única finalidad:</p>
         <ul>
            <li>Detectar errores técnicos del videojuego.</li>
            <li>Identificar las causas de cierres inesperados.</li>
            <li>Analizar incompatibilidades y problemas de funcionamiento.</li>
            <li>Reproducir errores para facilitar su corrección.</li>
            <li>Mejorar la estabilidad y el correcto funcionamiento del videojuego.</li>
         </ul>
         <p>Cuando esta funcionalidad esté habilitada, los informes podrán contener exclusivamente la información técnica necesaria para diagnosticar los problemas, como mensajes de error, registros técnicos, versiones del videojuego, información del sistema operativo, datos de configuración técnica y, cuando resulte necesario, volcados de memoria o información técnica generada durante el fallo.</p>
         <p>Estos informes podrán transmitirse mediante los servicios y herramientas de Steamworks y ponerse a disposición del titular a través de las herramientas de gestión para desarrolladores de Steam.</p>
         <p>El titular utilizará la información recibida exclusivamente para analizar, diagnosticar y solucionar los problemas técnicos detectados. No se utilizará para publicidad, seguimiento comercial, elaboración de perfiles, identificación de usuarios ni comercialización de información personal.</p>
         <p>Los informes estarán limitados a la información técnicamente necesaria. No se pretende recopilar deliberadamente archivos personales, documentos, fotografías, contraseñas ni contenidos privados del dispositivo del usuario.</p>
         <p>Esta funcionalidad no se encuentra necesariamente habilitada en todos los videojuegos ni en todas sus versiones. Su utilización dependerá de que el mecanismo correspondiente se encuentre efectivamente incorporado y activado.</p>
         <p>Los tratamientos que Valve realice directamente para la prestación de los servicios de Steam se regirán asimismo por sus propias condiciones y políticas de privacidad.</p>

         <h4>8. Ausencia de publicidad y seguimiento comercial</h4>
         <p>Los productos desarrollados por el titular no tienen como finalidad recopilar información personal para comercializarla, elaborar perfiles publicitarios o realizar seguimiento individualizado de sus usuarios.</p>
         <p>El titular no comercializa, vende ni cede a terceros bases de datos personales obtenidas mediante el funcionamiento ordinario de sus aplicaciones o videojuegos.</p>
         <p>Tampoco utiliza los datos técnicos que eventualmente puedan recibirse mediante los mecanismos de diagnóstico descritos en el apartado anterior para finalidades publicitarias o comerciales.</p>

         <h4>9. Comunicaciones voluntarias con el desarrollador</h4>
         <p>Si un usuario contacta voluntariamente con el titular mediante correo electrónico u otro medio externo a la aplicación, los datos que facilite serán utilizados exclusivamente para gestionar, atender y responder a dicha comunicación.</p>
         <p>Este tratamiento se realizará conforme a la normativa de protección de datos aplicable.</p>

         <h4>10. Derechos de protección de datos</h4>
         <p>En caso de que el titular realice algún tratamiento de datos personales, los interesados podrán ejercer los derechos reconocidos por la normativa aplicable, incluidos los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad cuando resulten procedentes.</p>
         <p>Las solicitudes podrán dirigirse al correo electrónico indicado en esta política.</p>
         <p>Asimismo, los usuarios podrán presentar una reclamación ante la Agencia Española de Protección de Datos o la autoridad de control competente.</p>
         <p>Los derechos relativos a tratamientos realizados de forma independiente por plataformas y proveedores externos deberán ejercerse directamente ante los respectivos responsables.</p>

         <h4>11. Modificaciones, versiones y entrada en vigor de esta política</h4>
         <p>La presente Política de Privacidad será publicada y mantenida exclusivamente en la página web oficial del titular, bajo su control y responsabilidad.</p>
         <p>La página web oficial indicada en este documento constituirá la fuente de referencia para consultar la versión vigente de la política.</p>
         <p>El titular no delegará en tiendas de aplicaciones, plataformas de distribución, proveedores tecnológicos ni páginas web externas la modificación o actualización del contenido de su Política de Privacidad.</p>
         <p>Cuando resulte necesario modificar esta política, el titular publicará una nueva versión en su página web oficial, identificando expresamente:</p>
         <ul>
            <li>El número o identificador de la nueva versión.</li>
            <li>La fecha de publicación de la modificación.</li>
            <li>La fecha concreta a partir de la cual entrará en vigor.</li>
         </ul>
         <p>Cada versión anterior podrá conservarse en un histórico de versiones para permitir identificar las condiciones informativas que estaban publicadas en cada momento.</p>
         <p>Las modificaciones no tendrán efectos retroactivos respecto de tratamientos realizados con anterioridad a su entrada en vigor.</p>
         <p>La nueva versión será aplicable a los tratamientos efectuados a partir de la fecha de entrada en vigor indicada, yse applicaran a instalaciones posteriores o actualizaciones.</p>
         <p>Cuando una modificación afecte sustancialmente a las finalidades o condiciones de un tratamiento de datos personales, el titular facilitará la información correspondiente por medios razonables y, cuando resulte legalmente necesario, solicitará el consentimiento del usuario antes de iniciar el nuevo tratamiento.</p>
         <p>La descarga, instalación o actualización de una aplicación no se considerará por sí sola consentimiento para tratamientos de datos personales que legalmente requieran una aceptación específica.</p>

         <h4>12. Contacto</h4>
         <p>Para cualquier consulta relacionada con esta Política de Privacidad o el tratamiento de datos personales por parte del titular:</p>
         <ul class="politicas-meta">
            <li>Desarrollador / Titular: mentalhelldev</li>
            <li>Correo electrónico: superoad2001@gmail.com</li>
            <li>Página web oficial: mentalhell.es</li>
         </ul>

         <h3>DECLARACIÓN GENERAL DE PRIVACIDAD</h3>
         <p>El titular mantiene como principio general el desarrollo de aplicaciones y videojuegos que no requieran la recopilación sistemática de información personal de sus usuarios.</p>
         <p>No se utilizan sistemas propios de telemetría, seguimiento, analítica de usuarios o recopilación de información con fines comerciales o publicitarios.</p>
         <p>La única excepción prevista en esta política consiste en la posible recepción limitada de informes técnicos de errores y fallos en determinados videojuegos distribuidos mediante Steam, cuando dicha funcionalidad se encuentre expresamente habilitada, y exclusivamente para diagnosticar y solucionar problemas técnicos.</p>
         <p>Los tratamientos independientes realizados por los sistemas operativos y plataformas de distribución se rigen por las condiciones y políticas de sus respectivos proveedores, sin perjuicio de las responsabilidades propias que correspondan legalmente al titular.</p>

      </div>
   </div>
</div>
```

Notas de transcripción obligatorias:

- El texto debe quedar **idéntico** al actual. No corregir la errata `yse applicaran` (apartado 11) ni el título sin tilde `Polticas de privacidad`; si el usuario quiere, se corrige en un cambio aparte.
- No añadir ni quitar frases, ni siquiera encabezados nuevos: cada `h3`/`h4` usa literalmente una línea que ya existía.
- Se elimina el `<p>` envolvente y su `style="max-width: 80%;"`; ese ancho pasa a la clase `.politicas`.

## Tarea 2 — Añadir estilos en `css/style.css`

Insertar justo después del bloque `.textfrase { ... }` (línea 661), respetando la paleta existente (dorado `#f8eca6`, texto `#ffffff`):

```css
.politicas {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.politicas h3,
.politicas h4 {
    color: #f8eca6;
    font-weight: bold;
    text-align: left;
}

.politicas h3 {
    font-size: 28px;
    line-height: 34px;
    margin: 40px 0 20px;
}

.politicas h4 {
    font-size: 22px;
    line-height: 28px;
    margin: 32px 0 12px;
}

.politicas p {
    margin-bottom: 18px;
}

.politicas ul {
    margin: 0 0 18px 0;
    padding-left: 28px;
    list-style: disc;
}

.politicas li {
    margin-bottom: 8px;
}

.politicas .politicas-meta {
    list-style: none;
    padding-left: 0;
}

@media (max-width: 767px) {
    .politicas {
        max-width: 100%;
        padding: 0 15px;
    }

    .politicas h3 {
        font-size: 24px;
        line-height: 30px;
        margin-top: 30px;
    }

    .politicas h4 {
        font-size: 20px;
        line-height: 26px;
    }
}
```

Las reglas se limitan a `.politicas`, así que no afectan a otras páginas que reutilizan `.textfrase`.

## Validación

1. Abrir `politicas.html` en el navegador: debe verse el título dorado, el bloque de metadatos, 12 apartados numerados como subtítulos y las tres listas con viñetas.
2. Comprobar responsive a 375 px y 768 px: sin scroll horizontal y con el texto a ancho completo en móvil.
3. Verificar que el texto visible es idéntico al actual: comparar el texto extraído del HTML anterior y el nuevo (por ejemplo, copiar el contenido renderizado y comparar palabra por palabra). Diferencias aceptables: ninguna.
4. Confirmar que no hay errores en consola y que el resto de la página (botones superiores, footer, scripts) sigue intacto.
5. Revisar que `.textfrase` sigue aplicando tipografía en otras páginas (`index.html`, `portafolios.html`, etc.) sin cambios visuales.

## Riesgos

- Pérdida o alteración accidental de texto al trocear: mitigado con la validación del punto 3.
- Anidamiento HTML descuidado (los `</div>` de cierre de las líneas 243-248): al reemplazar, mantener el número de `</div>` del contenedor `row` para no romper el layout.
