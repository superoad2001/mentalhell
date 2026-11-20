/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
        }
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
	
		
	

	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	
	
	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('[data-countdown]').each(function () {
        var $this = $(this),
		finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
			+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
			+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
			+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
			+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
			+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
    });
	
	
	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('#news-slider').slick({
        dots: false,
        infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
	
	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});

/*---------------------------------------------------------------------
    i18n - Selector de idioma Espanol / Ingles
---------------------------------------------------------------------*/

(function () {
    "use strict";

    var COOKIE_NAME = "mentalhell_lang";
    var COOKIE_DAYS = 365;
    var STORAGE_KEY = COOKIE_NAME;
    var currentLang = "es";
    var menuOpen = false;

    var translations = {
        es: {
            /* Nav comunes */
            "nav.inicio": "Inicio",
            "nav.hardware": "Hardware y Sistemas",
            "nav.contacto": "Contacto",
            "nav.politicas": "Pol\u00edticas",

            /* index.html */
            "title.index": "Aplicaciones | Mental Hell",
            "index.h2.apps": "Aplicaciones",
            "index.app.lostdarkness.title": "LOST DARKNESS",
            "index.app.lostdarkness.subtitle": "Videojuego \u00b7 Antolog\u00eda de 3 episodios",
            "index.app.tid.title": "TID Activity Manager",
            "index.app.tid.subtitle": "Aplicaci\u00f3n para la gesti\u00f3n del sistema de personas con TID",
            "index.h2.presentacion": "Presentaci\u00f3n",
            "index.p.presentacion": "Mental Hell es un estudio independiente de desarrollo de videojuegos y software dirigido por Serah Rodr\u00edguez Adell. En esta web se re\u00fanen las aplicaciones y proyectos publicados. El objetivo es crear experiencias accesibles, cuidadas y con una identidad propia.",

            /* contacto.html */
            "title.contacto": "Contacto",
            "contacto.h2": "Serah Rodr\u00edguez Adell",
            "contacto.p.intro1": "Hola, me llamo Serah",
            "contacto.p.intro2": "Esta es mi p\u00e1gina web; aqu\u00ed puedes ver mi portafolio o informaci\u00f3n sobre mis proyectos",
            "contacto.p.intro3": "Aqu\u00ed almacenar\u00e9 todo lo que hago, pues soy una apasionada de la inform\u00e1tica",
            "contacto.h3.contactodatos": "Datos de contacto",
            "contacto.p.telefono": "Tel\u00e9fono: (+34) 686 43 42 94",
            "contacto.p.correo": "Correo: superoadev@gmail.com",
            "contacto.btn.descargarcv": "Descargar CV",

            /* launcher.html */
            "title.launcher": "LOST DARKNESS Launcher",
            "launcher.h2": "Launcher",
            "launcher.span.info": "Informaci\u00f3n y descarga del launcher de LOST DARKNESS",
            "launcher.h2.titulo": "Launcher de LOST DARKNESS",
            "launcher.p.info": "Aqu\u00ed encontrar\u00e1s toda la informaci\u00f3n sobre el launcher de LOST DARKNESS. Con \u00e9l podr\u00e1s acceder a todos los juegos de la antolog\u00eda conforme salgan.",
            "launcher.h2.caracteristicas": "Caracter\u00edsticas principales:",
            "launcher.li.caracteristica1": "Todos los juegos en un solo ejecutable cuando vayan estando disponibles.",
            "launcher.li.caracteristica2": "Partidas compartidas interconectadas",
            "launcher.li.caracteristica3": "Sistema de Trofeos Interno",
            "launcher.li.caracteristica4": "Y funciones adicionales que depender\u00e1n de la recepci\u00f3n de los usuarios y de poder seguir desarrollando el proyecto",
            "launcher.btn.descargar": "Descargar",
            "launcher.btn.atras": "Atr\u00e1s",

            /* alien1.html */
            "title.alien1": "LOST DARKNESS 1",
            "alien1.p.desc1": "LOST DARKNESS Episodio 1: Espacio Profundo seguir\u00e1 la aventura de regreso a casa de nuestro protagonista.",
            "alien1.p.desc2": "En un universo al borde del colapso, tomar\u00e1s el control de un astr\u00f3nomo retirado",
            "alien1.p.desc3": "Confiaste en la persona equivocada y ahora te persigue un cient\u00edfico genocida",
            "alien1.p.desc4": "Por culpa de \u00e9l, quedas a la deriva en un asteroide donde se ubica un templo perteneciente a unas entidades arcanas",
            "alien1.p.desc5": "pero tu \u00fanico objetivo ser\u00e1 salir de aqu\u00ed y volver a casa",
            "alien1.btn.atras": "Atr\u00e1s",

            /* alien2.html */
            "title.alien2": "LOST DARKNESS 2",
            "alien2.p.desc1": "La aventura de LOST DARKNESS Episodio 2: Regreso a casa continuar\u00e1 tras los eventos del episodio anterior.",
            "alien2.p.desc2": "El alien ha vuelto a casa, pero ha aparecido una nueva amenaza: una compa\u00f1\u00eda de piratas ladrones ha invadido su mundo",
            "alien2.p.desc3": "El alien y sus nuevos compa\u00f1eros buscar\u00e1n averiguar las intenciones de esta amenaza",
            "alien2.p.desc4": "y finalmente encontrar a su familia, que est\u00e1 desaparecida",
            "alien2.btn.atras": "Atr\u00e1s",

            /* alien3.html */
            "title.alien3": "LOST DARKNESS 3",
            "alien3.p.desc1": "La aventura de LOST DARKNESS Episodio 3: Viaje del h\u00e9roe ocurrir\u00e1 10 a\u00f1os despu\u00e9s del episodio anterior.",
            "alien3.p.desc2": "\u00bfEste pondr\u00e1 punto final a la historia de 3 episodios desvelando finalmente el misterio de los antiguos? Tal vez descubran un gran secreto, pero no es oro todo lo que reluce",
            "alien3.p.desc3": "Tampoco es real todo lo que crees.",
            "alien3.btn.atras": "Atr\u00e1s",

            /* lostdarkness.html */
            "title.lostdarkness": "LOST DARKNESS",
            "lostdarkness.h2": "LOST DARKNESS",
            "lostdarkness.h3.ep1": "EPISODIO 1: Espacio Profundo",
            "lostdarkness.h3.ep2": "EPISODIO 2: Regreso a Casa",
            "lostdarkness.h3.ep3": "EPISODIO 3: H\u00e9roe en Ascenso",
            "lostdarkness.h3.exploracion": "Exploraci\u00f3n",
            "lostdarkness.h3.mundos": "Diferentes Mundos",
            "lostdarkness.h3.jefes": "Jefes",
            "lostdarkness.li.ep1": "Info LOST DARKNESS EP:1",
            "lostdarkness.li.ep2": "Info LOST DARKNESS EP:2",
            "lostdarkness.li.ep3": "Info LOST DARKNESS EP:3",
            "lostdarkness.h2.aventura": "Una Aventura Espacial",
            "lostdarkness.p.descargar": "Descargar el juego",
            "lostdarkness.h3.tresepisodios": "Ser\u00e1n 3 episodios de gran aventura \u00e9pica",
            "lostdarkness.p.historia": "Te enfrentar\u00e1s a diferentes amenazas y viajar\u00e1s por diferentes mundos a lo largo de los 3 episodios que durar\u00e1 la historia.",
            "lostdarkness.h4.mentalhell": "Mental Hell",
            "lostdarkness.span.serah": "Serah Rodr\u00edguez Adell",

            /* portafolios.html */
            "title.portafolios": "Hardware y Sistemas",
            "portafolios.h2": "Hardware y Sistemas",

            /* politicas.html */
            "title.politicas": "Pol\u00edticas de privacidad",
            "politicas.h2": "Pol\u00edticas de privacidad",
            "politicas.h3.general": "POL\u00cdTICA GENERAL DE PRIVACIDAD",
            "politicas.p.aplicaciones": "Aplicaciones, programas inform\u00e1ticos y videojuegos",
            "politicas.li.titular": "Desarrollador / Titular: mentalhelldev",
            "politicas.li.correo": "Correo electr\u00f3nico: superoad2001@gmail.com",
            "politicas.li.web": "Web oficial: mentalhell.es",
            "politicas.li.version": "Versi\u00f3n: 1.0",
            "politicas.li.fechaPub": "Fecha de publicaci\u00f3n: 19/11/2026",
            "politicas.li.fechaVig": "Fecha de entrada en vigor: 19/11/2026",
            "politicas.h4.seccion1": "1. \u00c1mbito de aplicaci\u00f3n",
            "politicas.p.s1p1": "Esta Pol\u00edtica de Privacidad establece los principios generales de privacidad aplicables a las aplicaciones, programas inform\u00e1ticos y videojuegos desarrollados y publicados por el titular.",
            "politicas.p.s1p2": "Los productos podr\u00e1n distribuirse y utilizarse, seg\u00fan corresponda a cada versi\u00f3n, mediante diferentes sistemas operativos y plataformas, entre ellos:",
            "politicas.li.android": "Android.",
            "politicas.li.ios": "iOS.",
            "politicas.li.windows": "Windows.",
            "politicas.li.linux": "Linux.",
            "politicas.li.steamos": "SteamOS.",
            "politicas.li.steam": "Steam.",
            "politicas.li.otras": "Otras plataformas de distribuci\u00f3n o sistemas operativos compatibles.",
            "politicas.p.s1p3": "No todos los productos estar\u00e1n disponibles en todas las plataformas. Esta pol\u00edtica se aplicar\u00e1 exclusivamente al producto y a la versi\u00f3n concreta que el usuario haya descargado, instalado o est\u00e9 utilizando.",
            "politicas.h4.seccion2": "2. Recopilaci\u00f3n de informaci\u00f3n por el desarrollador",
            "politicas.p.s2p1": "El titular no solicita a los usuarios la creaci\u00f3n de cuentas, registros personales ni la facilitaci\u00f3n de informaci\u00f3n identificativa para utilizar sus aplicaciones o videojuegos, salvo que una funcionalidad espec\u00edfica indique expresamente lo contrario.",
            "politicas.p.s2p2": "Los productos est\u00e1n dise\u00f1ados para funcionar sin sistemas propios de recopilaci\u00f3n de datos personales, seguimiento de usuarios, elaboraci\u00f3n de perfiles o almacenamiento de informaci\u00f3n personal en servidores del titular.",
            "politicas.p.s2p3": "El titular no recopila informaci\u00f3n personal para fines publicitarios, comerciales, estad\u00edsticos o de seguimiento del comportamiento de los usuarios.",
            "politicas.h4.seccion3": "3. Ausencia de sistemas propios de telemetr\u00eda y servidores de recopilaci\u00f3n",
            "politicas.p.s3p1": "El titular no utiliza ni mantiene sistemas propios de telemetr\u00eda, anal\u00edtica de usuarios, seguimiento, monitorizaci\u00f3n del comportamiento o recopilaci\u00f3n automatizada de informaci\u00f3n sobre la actividad de los usuarios.",
            "politicas.p.s3p2": "Tampoco mantiene servidores propios destinados a recibir o almacenar informaci\u00f3n personal procedente del funcionamiento ordinario de sus aplicaciones o videojuegos.",
            "politicas.p.s3p3": "No se implementan mecanismos propios destinados a identificar a los usuarios, registrar sus h\u00e1bitos de utilizaci\u00f3n, elaborar perfiles personales o realizar un seguimiento individualizado.",
            "politicas.p.s3p4": "La informaci\u00f3n que pueda generarse o almacenarse localmente durante el funcionamiento de un producto permanecer\u00e1, en su caso, en el dispositivo del usuario, salvo las funcionalidades espec\u00edficas descritas en esta pol\u00edtica.",
            "politicas.h4.seccion4": "4. Sistemas operativos y plataformas de terceros",
            "politicas.p.s4p1": "Cada producto funciona en el sistema operativo y entorno tecnol\u00f3gico para el que haya sido desarrollado y publicado.",
            "politicas.p.s4p2": "En funci\u00f3n de la versi\u00f3n utilizada, podr\u00e1n intervenir plataformas y proveedores independientes como Google, Apple, Microsoft, Valve, proveedores de distribuciones Linux y otros servicios tecnol\u00f3gicos.",
            "politicas.p.s4p3": "Estos proveedores pueden recopilar, tratar y almacenar informaci\u00f3n t\u00e9cnica o de utilizaci\u00f3n relacionada con sus propios sistemas operativos, dispositivos, tiendas de aplicaciones y plataformas de distribuci\u00f3n.",
            "politicas.p.s4p4": "Dichos tratamientos se realizan bajo las pol\u00edticas de privacidad, condiciones de servicio y configuraciones de cada proveedor.",
            "politicas.p.s4p5": "El titular no controla ni determina los tratamientos que estos proveedores realizan directamente para el funcionamiento y prestaci\u00f3n de sus propios servicios, ni responde de sus operaciones independientes de tratamiento, sin perjuicio de las responsabilidades legales que le correspondan por sus propias actuaciones.",
            "politicas.p.s4p6": "La presente pol\u00edtica no pretende atribuir al titular la gesti\u00f3n de los datos que las plataformas recopilan por cuenta propia ni eximirlo de las obligaciones que legalmente le correspondan.",
            "politicas.h4.seccion5": "5. Motores de desarrollo y tecnolog\u00edas utilizadas",
            "politicas.p.s5p1": "Las aplicaciones y videojuegos pueden haber sido desarrollados mediante diferentes tecnolog\u00edas, motores de programaci\u00f3n y herramientas de desarrollo, incluyendo Unity u otros entornos similares.",
            "politicas.p.s5p2": "El uso de un motor de desarrollo no implica por s\u00ed mismo que el titular recopile informaci\u00f3n de los usuarios.",
            "politicas.p.s5p3": "El titular no utiliza las herramientas de desarrollo para implementar sistemas propios de telemetr\u00eda, anal\u00edtica de usuarios o seguimiento de la actividad de los jugadores.",
            "politicas.p.s5p4": "Las funcionalidades t\u00e9cnicas de diagn\u00f3stico o recopilaci\u00f3n de informaci\u00f3n que puedan estar incorporadas en herramientas externas deber\u00e1n distinguirse de los mecanismos propios del titular y revisarse antes de habilitarlas en una versi\u00f3n publicada.",
            "politicas.h4.seccion6": "6. Plataformas de distribuci\u00f3n y servicios externos",
            "politicas.p.s6p1": "Algunas aplicaciones y videojuegos pueden distribuirse mediante plataformas como Google Play, Apple App Store o Steam.",
            "politicas.p.s6p2": "Estas plataformas pueden proporcionar servicios complementarios, como autenticaci\u00f3n, almacenamiento en la nube, sincronizaci\u00f3n, logros, estad\u00edsticas, multijugador y otras funcionalidades.",
            "politicas.p.s6p3": "Cuando el usuario utilice servicios prestados directamente por estas plataformas, el tratamiento de informaci\u00f3n efectuado por ellas estar\u00e1 sujeto a sus respectivas pol\u00edticas de privacidad y condiciones de servicio.",
            "politicas.p.s6p4": "El titular no controla los tratamientos independientes realizados por dichos proveedores fuera de las funcionalidades y tratamientos bajo su responsabilidad.",
            "politicas.p.s6p5": "La utilizaci\u00f3n de estos servicios no implica que el titular disponga de acceso a toda la informaci\u00f3n que las plataformas puedan recopilar de sus usuarios.",
            "politicas.h4.seccion7": "7. Informes t\u00e9cnicos de errores y cierres inesperados en videojuegos de Steam",
            "politicas.p.s7p1": "Como excepci\u00f3n limitada a la ausencia general de sistemas de recopilaci\u00f3n de informaci\u00f3n, el titular podr\u00e1 habilitar en determinados videojuegos distribuidos mediante Steam funcionalidades espec\u00edficas de recepci\u00f3n de informes t\u00e9cnicos de errores, fallos de funcionamiento o cierres inesperados (crash reports).",
            "politicas.p.s7p2": "Esta funcionalidad tendr\u00e1 como \u00fanica finalidad:",
            "politicas.li.s7detectar": "Detectar errores t\u00e9cnicos del videojuego.",
            "politicas.li.s7causas": "Identificar las causas de cierres inesperados.",
            "politicas.li.s7incompatibilidades": "Analizar incompatibilidades y problemas de funcionamiento.",
            "politicas.li.s7reproducir": "Reproducir errores para facilitar su correcci\u00f3n.",
            "politicas.li.s7mejorar": "Mejorar la estabilidad y el correcto funcionamiento del videojuego.",
            "politicas.p.s7p3": "Cuando esta funcionalidad est\u00e9 habilitada, los informes podr\u00e1n contener exclusivamente la informaci\u00f3n t\u00e9cnica necesaria para diagnosticar los problemas, como mensajes de error, registros t\u00e9cnicos, versiones del videojuego, informaci\u00f3n del sistema operativo, datos de configuraci\u00f3n t\u00e9cnica y, cuando resulte necesario, volcados de memoria o informaci\u00f3n t\u00e9cnica generada durante el fallo.",
            "politicas.p.s7p4": "Estos informes podr\u00e1n transmitirse mediante los servicios y herramientas de Steamworks y ponerse a disposici\u00f3n del titular a trav\u00e9s de las herramientas de gesti\u00f3n para desarrolladores de Steam.",
            "politicas.p.s7p5": "El titular utilizar\u00e1 la informaci\u00f3n recibida exclusivamente para analizar, diagnosticar y solucionar los problemas t\u00e9cnicos detectados. No se utilizar\u00e1 para publicidad, seguimiento comercial, elaboraci\u00f3n de perfiles, identificaci\u00f3n de usuarios ni comercializaci\u00f3n de informaci\u00f3n personal.",
            "politicas.p.s7p6": "Los informes estar\u00e1n limitados a la informaci\u00f3n t\u00e9cnica necesaria. No se pretende recopilar deliberadamente archivos personales, documentos, fotograf\u00edas, contrase\u00f1as ni contenidos privados del dispositivo del usuario.",
            "politicas.p.s7p7": "Esta funcionalidad no se encuentra necesariamente habilitada en todos los videojuegos ni en todas sus versiones. Su utilizaci\u00f3n depender\u00e1 de que el mecanismo correspondiente se encuentre efectivamente incorporado y activado.",
            "politicas.p.s7p8": "Los tratamientos que Valve realice directamente para la prestaci\u00f3n de los servicios de Steam se regir\u00e1n asimismo por sus propias condiciones y pol\u00edticas de privacidad.",
            "politicas.h4.seccion8": "8. Ausencia de publicidad y seguimiento comercial",
            "politicas.p.s8p1": "Los productos desarrollados por el titular no tienen como finalidad recopilar informaci\u00f3n personal para comercializarla, elaborar perfiles publicitarios o realizar seguimiento individualizado de sus usuarios.",
            "politicas.p.s8p2": "El titular no comercializa, vende ni cede a terceros bases de datos personales obtenidas mediante el funcionamiento ordinario de sus aplicaciones o videojuegos.",
            "politicas.p.s8p3": "Tampoco utiliza los datos t\u00e9cnicos que eventualmente puedan recibirse mediante los mecanismos de diagn\u00f3stico descritos en el apartado anterior para finalidades publicitarias o comerciales.",
            "politicas.h4.seccion9": "9. Comunicaciones voluntarias con el desarrollador",
            "politicas.p.s9p1": "Si un usuario contacta voluntariamente con el titular mediante correo electr\u00f3nico u otro medio externo a la aplicaci\u00f3n, los datos que facilite ser\u00e1n utilizados exclusivamente para gestionar, atender y responder a dicha comunicaci\u00f3n.",
            "politicas.p.s9p2": "Este tratamiento se realizar\u00e1 conforme a la normativa de protecci\u00f3n de datos aplicable.",
            "politicas.h4.seccion10": "10. Derechos de protecci\u00f3n de datos",
            "politicas.p.s10p1": "En caso de que el titular realice alg\u00fan tratamiento de datos personales, los interesados podr\u00e1n ejercer los derechos reconocidos por la normativa aplicable, incluidos los derechos de acceso, rectificaci\u00f3n, supresi\u00f3n, oposici\u00f3n, limitaci\u00f3n del tratamiento y portabilidad cuando resulten procedentes.",
            "politicas.p.s10p2": "Las solicitudes podr\u00e1n dirigirse al correo electr\u00f3nico indicado en esta pol\u00edtica.",
            "politicas.p.s10p3": "Asimismo, los usuarios podr\u00e1n presentar una reclamaci\u00f3n ante la Agencia Espa\u00f1ola de Protecci\u00f3n de Datos o la autoridad de control competente.",
            "politicas.p.s10p4": "Los derechos relativos a tratamientos realizados de forma independiente por plataformas y proveedores externos deber\u00e1n ejercerse directamente ante los respectivos responsables.",
            "politicas.h4.seccion11": "11. Modificaciones, versiones y entrada en vigor de esta pol\u00edtica",
            "politicas.p.s11p1": "La presente Pol\u00edtica de Privacidad ser\u00e1 publicada y mantenida exclusivamente en la p\u00e1gina web oficial del titular, bajo su control y responsabilidad.",
            "politicas.p.s11p2": "La p\u00e1gina web oficial indicada en este documento constituir\u00e1 la fuente de referencia para consultar la versi\u00f3n vigente de la pol\u00edtica.",
            "politicas.p.s11p3": "El titular no delegar\u00e1 en tiendas de aplicaciones, plataformas de distribuci\u00f3n, proveedores tecnol\u00f3gicos ni p\u00e1ginas web externas la modificaci\u00f3n o actualizaci\u00f3n del contenido de su Pol\u00edtica de Privacidad.",
            "politicas.p.s11p4": "Cuando resulte necesario modificar esta pol\u00edtica, el titular publicar\u00e1 una nueva versi\u00f3n en su p\u00e1gina web oficial, identificando expresamente:",
            "politicas.li.s11v": "El n\u00famero o identificador de la nueva versi\u00f3n.",
            "politicas.li.s11fecha": "La fecha de publicaci\u00f3n de la modificaci\u00f3n.",
            "politicas.li.s11vigencia": "La fecha concreta a partir de la cual entrar\u00e1 en vigor.",
            "politicas.p.s11p5": "Cada versi\u00f3n anterior podr\u00e1 conservarse en un hist\u00f3rico de versiones para permitir identificar las condiciones informativas que estaban publicadas en cada momento.",
            "politicas.p.s11p6": "Las modificaciones no tendr\u00e1n efectos retroactivos respecto de tratamientos realizados con anterioridad a su entrada en vigor.",
            "politicas.p.s11p7": "La nueva versi\u00f3n ser\u00e1 aplicable a los tratamientos efectuados a partir de la fecha de entrada en vigor indicada, y se aplicar\u00e1 a instalaciones posteriores o actualizaciones.",
            "politicas.p.s11p8": "Cuando una modificaci\u00f3n afecte sustancialmente a las finalidades o condiciones de un tratamiento de datos personales, el titular facilitar\u00e1 la informaci\u00f3n correspondiente por medios razonables y, cuando resulte legalmente necesario, solicitar\u00e1 el consentimiento del usuario antes de iniciar el nuevo tratamiento.",
            "politicas.p.s11p9": "La descarga, instalaci\u00f3n o actualizaci\u00f3n de una aplicaci\u00f3n no se considerar\u00e1 por s\u00ed sola consentimiento para tratamientos de datos personales que legalmente requieran una aceptaci\u00f3n espec\u00edfica.",
            "politicas.h4.seccion12": "12. Contacto",
            "politicas.p.s12p1": "Para cualquier consulta relacionada con esta Pol\u00edtica de Privacidad o el tratamiento de datos personales por parte del titular:",
            "politicas.li.contacto1": "Desarrollador / Titular: mentalhelldev",
            "politicas.li.contacto2": "Correo electr\u00f3nico: superoad2001@gmail.com",
            "politicas.li.contacto3": "P\u00e1gina web oficial: mentalhell.es",
            "politicas.h3.declaracion": "DECLARACI\u00d3N GENERAL DE PRIVACIDAD",
            "politicas.p.decl1": "El titular mantiene como principio general el desarrollo de aplicaciones y videojuegos que no requieran la recopilaci\u00f3n sistem\u00e1tica de informaci\u00f3n personal de sus usuarios.",
            "politicas.p.decl2": "No se utilizan sistemas propios de telemetr\u00eda, seguimiento, anal\u00edtica de usuarios o recopilaci\u00f3n de informaci\u00f3n con fines comerciales o publicitarios.",
            "politicas.p.decl3": "La \u00fanica excepci\u00f3n prevista en esta pol\u00edtica consiste en la posible recepci\u00f3n limitada de informes t\u00e9cnicos de errores y fallos en determinados videojuegos distribuidos mediante Steam, cuando dicha funcionalidad se encuentre expresamente habilitada, y exclusivamente para diagnosticar y solucionar problemas t\u00e9cnicos.",
            "politicas.p.decl4": "Los tratamientos independientes realizados por los sistemas operativos y plataformas de distribuci\u00f3n se rigen por las condiciones y pol\u00edticas de sus respectivos proveedores, sin perjuicio de las responsabilidades propias que correspondan legalmente al titular.",

            /* tid-activity-manager.html */
            "title.tid": "TID Activity Manager",
            "tid.h2": "TID Activity Manager",
            "tid.h3": "TID Activity Manager",
            "tid.p.desc": "Aplicaci\u00f3n para la gesti\u00f3n del sistema de personas con TID.",
            "tid.p.placeholder": "Es una herramienta muy completa para la gesti\u00f3n de actividades y horarios y la comunicaci\u00f3n, enfocada a personas con TID. El objetivo de esta app es mejorar su capacidad de gesti\u00f3n y darles facilidades para gestionar el d\u00eda, el mes y la semana, con una interfaz fluida y entendible que facilite la gesti\u00f3n, intentando que sea relajante y no demasiado estimulante.",

            /* Footer */
            "footer.copyright1": "Copyright 2019 All Rights Reserved By ",
            "footer.copyright2": ", bajo licencia ",
            "footer.copyright3": ". Modificado por ",
            "politicas.h3.cookies": "POLÍTICA DE COOKIES",
            "politicas.p.cookies1": "Este sitio web utiliza una única cookie propia y el almacenamiento local del navegador con la única finalidad de recordar el idioma seleccionado manualmente por el usuario.",
            "politicas.p.cookies2": "Tanto la cookie como el almacenamiento local se generan únicamente cuando el usuario cambia voluntariamente el idioma mediante el selector disponible en la web. No se instalan ni se activan por el simple hecho de visitar o navegar por el sitio web.",
            "politicas.p.cookies3": "Esta cookie tiene una finalidad exclusivamente funcional y no se utiliza para recopilar datos personales, realizar seguimiento, elaborar perfiles, mostrar publicidad ni analizar el comportamiento de los visitantes.",
            "politicas.p.cookies4": "No se utilizan cookies analíticas, publicitarias ni de seguimiento de terceros.",
            "politicas.p.cookies5": "Al tratarse de una cookie de personalización basada en una elección expresa del propio usuario, está exenta del requisito de consentimiento conforme a los criterios de la Agencia Española de Protección de Datos (AEPD).",
        },
        en: {
            /* Nav comunes */
            "nav.inicio": "Home",
            "nav.hardware": "Hardware and Systems",
            "nav.contacto": "Contact",
            "nav.politicas": "Policies",

            /* index.html */
            "title.index": "Applications | Mental Hell",
            "index.h2.apps": "Applications",
            "index.app.lostdarkness.title": "LOST DARKNESS",
            "index.app.lostdarkness.subtitle": "Video Game \u00b7 3-episode Anthology",
            "index.app.tid.title": "TID Activity Manager",
            "index.app.tid.subtitle": "Application for the management of the TID system",
            "index.h2.presentacion": "Presentation",
            "index.p.presentacion": "Mental Hell is an independent video game and software development studio led by Serah Rodr\u00edguez Adell. This website brings together the published applications and projects. The goal is to create accessible, carefully crafted experiences with a distinct identity.",

            /* contacto.html */
            "title.contacto": "Contact",
            "contacto.h2": "Serah Rodr\u00edguez Adell",
            "contacto.p.intro1": "Hello, my name is Serah",
            "contacto.p.intro2": "This is my website; here you can see my portfolio or information about my projects",
            "contacto.p.intro3": "Here I will store everything I do, since I am passionate about computing",
            "contacto.h3.contactodatos": "Contact Details",
            "contacto.p.telefono": "Phone: (+34) 686 43 42 94",
            "contacto.p.correo": "Email: superoadev@gmail.com",
            "contacto.btn.descargarcv": "Download CV",

            /* launcher.html */
            "title.launcher": "LOST DARKNESS Launcher",
            "launcher.h2": "Launcher",
            "launcher.span.info": "Information and download of the LOST DARKNESS launcher",
            "launcher.h2.titulo": "LOST DARKNESS Launcher",
            "launcher.p.info": "Here you will find all the information about the LOST DARKNESS launcher. With it you will be able to access all the games of the anthology as they are released.",
            "launcher.h2.caracteristicas": "Main features:",
            "launcher.li.caracteristica1": "All games in a single executable as they become available.",
            "launcher.li.caracteristica2": "Interconnected Shared Saves",
            "launcher.li.caracteristica3": "Internal Trophy System",
            "launcher.li.caracteristica4": "And additional functions that will depend on user reception and on being able to continue developing the project",
            "launcher.btn.descargar": "Download",
            "launcher.btn.atras": "Back",

            /* alien1.html */
            "title.alien1": "LOST DARKNESS 1",
            "alien1.p.desc1": "LOST DARKNESS Episode 1: Deep Space will follow our protagonist's adventure back home.",
            "alien1.p.desc2": "In a universe on the brink of collapse, you will take control of a retired astronomer",
            "alien1.p.desc3": "You trusted the wrong person and now a genocidal scientist is hunting you",
            "alien1.p.desc4": "Because of him, you are adrift on an asteroid where a temple belonging to arcane entities is located",
            "alien1.p.desc5": "but your only goal will be to get out of here and return home",
            "alien1.btn.atras": "Back",

            /* alien2.html */
            "title.alien2": "LOST DARKNESS 2",
            "alien2.p.desc1": "The adventure of LOST DARKNESS Episode 2: Return Home will continue after the events of the previous episode.",
            "alien2.p.desc2": "The alien has returned home, but a new threat has appeared: a company of thieving pirates has invaded his world",
            "alien2.p.desc3": "The alien and his new companions will try to find out the intentions of this threat",
            "alien2.p.desc4": "and finally find his family, who is missing",
            "alien2.btn.atras": "Back",

            /* alien3.html */
            "title.alien3": "LOST DARKNESS 3",
            "alien3.p.desc1": "The adventure of LOST DARKNESS Episode 3: Hero's Journey will take place 10 years after the previous episode.",
            "alien3.p.desc2": "Will this put an end to the 3-episode story by finally revealing the mystery of the ancients? Perhaps they will discover a great secret, but not all that glitters is gold",
            "alien3.p.desc3": "Nor is everything you believe real.",
            "alien3.btn.atras": "Back",

            /* lostdarkness.html */
            "title.lostdarkness": "LOST DARKNESS",
            "lostdarkness.h2": "LOST DARKNESS",
            "lostdarkness.h3.ep1": "EPISODE 1: Deep Space",
            "lostdarkness.h3.ep2": "EPISODE 2: Return Home",
            "lostdarkness.h3.ep3": "EPISODE 3: Rising Hero",
            "lostdarkness.h3.exploracion": "Exploration",
            "lostdarkness.h3.mundos": "Different Worlds",
            "lostdarkness.h3.jefes": "Bosses",
            "lostdarkness.li.ep1": "Info LOST DARKNESS EP:1",
            "lostdarkness.li.ep2": "Info LOST DARKNESS EP:2",
            "lostdarkness.li.ep3": "Info LOST DARKNESS EP:3",
            "lostdarkness.h2.aventura": "A Space Adventure",
            "lostdarkness.p.descargar": "Download the game",
            "lostdarkness.h3.tresepisodios": "There will be 3 episodes of a great epic adventure",
            "lostdarkness.p.historia": "You will face different threats and travel through different worlds throughout the 3 episodes that the story will last.",
            "lostdarkness.h4.mentalhell": "Mental Hell",
            "lostdarkness.span.serah": "Serah Rodr\u00edguez Adell",

            /* portafolios.html */
            "title.portafolios": "Hardware and Systems",
            "portafolios.h2": "Hardware and Systems",

            /* politicas.html */
            "title.politicas": "Privacy Policies",
            "politicas.h2": "Privacy Policies",
            "politicas.h3.general": "GENERAL PRIVACY POLICY",
            "politicas.p.aplicaciones": "Applications, computer programs and video games",
            "politicas.li.titular": "Developer / Owner: mentalhelldev",
            "politicas.li.correo": "Email: superoad2001@gmail.com",
            "politicas.li.web": "Official website: mentalhell.es",
            "politicas.li.version": "Version: 1.0",
            "politicas.li.fechaPub": "Publication date: 11/19/2026",
            "politicas.li.fechaVig": "Effective date: 11/19/2026",
            "politicas.h4.seccion1": "1. Scope of application",
            "politicas.p.s1p1": "This Privacy Policy establishes the general privacy principles applicable to applications, computer programs and video games developed and published by the owner.",
            "politicas.p.s1p2": "Products may be distributed and used, as appropriate for each version, through different operating systems and platforms, including:",
            "politicas.li.android": "Android.",
            "politicas.li.ios": "iOS.",
            "politicas.li.windows": "Windows.",
            "politicas.li.linux": "Linux.",
            "politicas.li.steamos": "SteamOS.",
            "politicas.li.steam": "Steam.",
            "politicas.li.otras": "Other distribution platforms or compatible operating systems.",
            "politicas.p.s1p3": "Not all products will be available on all platforms. This policy will apply exclusively to the product and the specific version that the user has downloaded, installed or is using.",
            "politicas.h4.seccion2": "2. Collection of information by the developer",
            "politicas.p.s2p1": "The owner does not request users to create accounts, personal records or provide identifying information to use their applications or video games, unless a specific functionality expressly indicates otherwise.",
            "politicas.p.s2p2": "Products are designed to function without their own personal data collection systems, user tracking, profiling or storage of personal information on the owner's servers.",
            "politicas.p.s2p3": "The owner does not collect personal information for advertising, commercial, statistical or user behavior tracking purposes.",
            "politicas.h4.seccion3": "3. Absence of own telemetry systems and collection servers",
            "politicas.p.s3p1": "The owner does not use or maintain their own telemetry systems, user analytics, tracking, behavior monitoring or automated collection of information about user activity.",
            "politicas.p.s3p2": "Nor does it maintain its own servers intended to receive or store personal information from the ordinary operation of its applications or video games.",
            "politicas.p.s3p3": "No mechanisms are implemented intended to identify users, record their usage habits, create personal profiles or carry out individualized tracking.",
            "politicas.p.s3p4": "Information that may be generated or stored locally during the operation of a product will remain, where applicable, on the user's device, except for the specific functionalities described in this policy.",
            "politicas.h4.seccion4": "4. Third-party operating systems and platforms",
            "politicas.p.s4p1": "Each product operates on the operating system and technological environment for which it was developed and published.",
            "politicas.p.s4p2": "Depending on the version used, independent platforms and providers such as Google, Apple, Microsoft, Valve, Linux distribution providers and other technological services may be involved.",
            "politicas.p.s4p3": "These providers may collect, process and store technical or usage information related to their own operating systems, devices, app stores and distribution platforms.",
            "politicas.p.s4p4": "Such processing is carried out under the privacy policies, terms of service and settings of each provider.",
            "politicas.p.s4p5": "The owner does not control or determine the processing that these providers carry out directly for the operation and provision of their own services, nor is it responsible for their independent processing operations, without prejudice to the legal responsibilities that correspond to it for its own actions.",
            "politicas.p.s4p6": "This policy does not intend to attribute to the owner the management of the data that platforms collect on their own nor exempt it from the obligations that legally correspond to it.",
            "politicas.h4.seccion5": "5. Development engines and technologies used",
            "politicas.p.s5p1": "Applications and video games may have been developed using different technologies, programming engines and development tools, including Unity or other similar environments.",
            "politicas.p.s5p2": "The use of a development engine does not in itself imply that the owner collects user information.",
            "politicas.p.s5p3": "The owner does not use development tools to implement their own telemetry systems, user analytics or player activity tracking.",
            "politicas.p.s5p4": "Technical diagnostic or information collection functionalities that may be incorporated into external tools shall be distinguished from the owner's own mechanisms and reviewed before enabling them in a published version.",
            "politicas.h4.seccion6": "6. Distribution platforms and external services",
            "politicas.p.s6p1": "Some applications and video games may be distributed through platforms such as Google Play, Apple App Store or Steam.",
            "politicas.p.s6p2": "These platforms may provide complementary services, such as authentication, cloud storage, synchronization, achievements, statistics, multiplayer and other functionalities.",
            "politicas.p.s6p3": "When the user uses services provided directly by these platforms, the processing of information carried out by them will be subject to their respective privacy policies and terms of service.",
            "politicas.p.s6p4": "The owner does not control the independent processing carried out by such providers outside the functionalities and processing under its responsibility.",
            "politicas.p.s6p5": "The use of these services does not imply that the owner has access to all the information that platforms may collect from their users.",
            "politicas.h4.seccion7": "7. Technical error reports and unexpected closures in Steam video games",
            "politicas.p.s7p1": "As a limited exception to the general absence of information collection systems, the owner may enable in certain video games distributed through Steam specific functionalities for receiving technical error reports, malfunction reports or unexpected closures (crash reports).",
            "politicas.p.s7p2": "This functionality will have the sole purpose of:",
            "politicas.li.s7detectar": "Detect technical errors of the video game.",
            "politicas.li.s7causas": "Identify the causes of unexpected closures.",
            "politicas.li.s7incompatibilidades": "Analyze incompatibilities and malfunction problems.",
            "politicas.li.s7reproducir": "Reproduce errors to facilitate their correction.",
            "politicas.li.s7mejorar": "Improve the stability and correct operation of the video game.",
            "politicas.p.s7p3": "When this functionality is enabled, the reports may contain exclusively the technical information necessary to diagnose the problems, such as error messages, technical logs, video game versions, operating system information, technical configuration data and, when necessary, memory dumps or technical information generated during the failure.",
            "politicas.p.s7p4": "These reports may be transmitted through Steamworks services and tools and made available to the owner through Steam developer management tools.",
            "politicas.p.s7p5": "The owner will use the received information exclusively to analyze, diagnose and resolve the detected technical problems. It will not be used for advertising, commercial tracking, profiling, user identification or commercialization of personal information.",
            "politicas.p.s7p6": "Reports will be limited to the technically necessary information. There is no intention to deliberately collect personal files, documents, photographs, passwords or private content from the user's device.",
            "politicas.p.s7p7": "This functionality is not necessarily enabled in all video games or all their versions. Its use will depend on the corresponding mechanism being effectively incorporated and activated.",
            "politicas.p.s7p8": "The processing that Valve carries out directly for the provision of Steam services shall also be governed by its own terms and privacy policies.",
            "politicas.h4.seccion8": "8. Absence of advertising and commercial tracking",
            "politicas.p.s8p1": "Products developed by the owner do not have the purpose of collecting personal information to commercialize it, create advertising profiles or carry out individualized tracking of their users.",
            "politicas.p.s8p2": "The owner does not commercialize, sell or transfer to third parties personal databases obtained through the ordinary operation of its applications or video games.",
            "politicas.p.s8p3": "Nor does it use the technical data that may eventually be received through the diagnostic mechanisms described in the previous section for advertising or commercial purposes.",
            "politicas.h4.seccion9": "9. Voluntary communications with the developer",
            "politicas.p.s9p1": "If a user voluntarily contacts the owner by email or other means external to the application, the data provided will be used exclusively to manage, attend to and respond to said communication.",
            "politicas.p.s9p2": "This processing will be carried out in accordance with applicable data protection regulations.",
            "politicas.h4.seccion10": "10. Data protection rights",
            "politicas.p.s10p1": "In the event that the owner carries out any processing of personal data, data subjects may exercise the rights recognized by applicable regulations, including the rights of access, rectification, erasure, objection, restriction of processing and portability when appropriate.",
            "politicas.p.s10p2": "Requests may be sent to the email address indicated in this policy.",
            "politicas.p.s10p3": "Likewise, users may file a complaint with the Spanish Data Protection Agency or the competent supervisory authority.",
            "politicas.p.s10p4": "Rights relating to processing carried out independently by platforms and external providers shall be exercised directly before the respective controllers.",
            "politicas.h4.seccion11": "11. Modifications, versions and entry into force of this policy",
            "politicas.p.s11p1": "This Privacy Policy will be published and maintained exclusively on the owner's official website, under its control and responsibility.",
            "politicas.p.s11p2": "The official website indicated in this document will be the reference source for consulting the current version of the policy.",
            "politicas.p.s11p3": "The owner will not delegate to app stores, distribution platforms, technology providers or external websites the modification or updating of the content of its Privacy Policy.",
            "politicas.p.s11p4": "When it is necessary to modify this policy, the owner will publish a new version on its official website, expressly identifying:",
            "politicas.li.s11v": "The number or identifier of the new version.",
            "politicas.li.s11fecha": "The publication date of the modification.",
            "politicas.li.s11vigencia": "The specific date from which it will enter into force.",
            "politicas.p.s11p5": "Each previous version may be kept in a version history to allow identifying the information conditions that were published at each time.",
            "politicas.p.s11p6": "Modifications will not have retroactive effects regarding processing carried out prior to their entry into force.",
            "politicas.p.s11p7": "The new version will apply to processing carried out from the indicated entry into force date, and will apply to subsequent installations or updates.",
            "politicas.p.s11p8": "When a modification substantially affects the purposes or conditions of personal data processing, the owner will provide the corresponding information by reasonable means and, when legally necessary, will request the user's consent before starting the new processing.",
            "politicas.p.s11p9": "The download, installation or update of an application will not in itself be considered consent for personal data processing that legally requires specific acceptance.",
            "politicas.h4.seccion12": "12. Contact",
            "politicas.p.s12p1": "For any inquiry related to this Privacy Policy or the processing of personal data by the owner:",
            "politicas.li.contacto1": "Developer / Owner: mentalhelldev",
            "politicas.li.contacto2": "Email: superoad2001@gmail.com",
            "politicas.li.contacto3": "Official website: mentalhell.es",
            "politicas.h3.declaracion": "GENERAL PRIVACY STATEMENT",
            "politicas.p.decl1": "The owner maintains as a general principle the development of applications and video games that do not require the systematic collection of personal information from their users.",
            "politicas.p.decl2": "No own telemetry, tracking, user analytics or information collection systems are used for commercial or advertising purposes.",
            "politicas.p.decl3": "The only exception provided for in this policy consists of the possible limited receipt of technical error and failure reports in certain video games distributed through Steam, when said functionality is expressly enabled, and exclusively to diagnose and resolve technical problems.",
            "politicas.p.decl4": "Independent processing carried out by operating systems and distribution platforms is governed by the terms and policies of their respective providers, without prejudice to the responsibilities that legally correspond to the owner.",

            /* tid-activity-manager.html */
            "title.tid": "TID Activity Manager",
            "tid.h2": "TID Activity Manager",
            "tid.h3": "TID Activity Manager",
            "tid.p.desc": "Application for the management of the TID system.",
            "tid.p.placeholder": "It is a very complete tool for managing activities, schedules and communication, aimed at people with TID. The goal of this app is to improve their management skills and make it easier to manage the day, month and week, with a fluid and understandable interface that facilitates management, trying to make it relaxing and not too stimulating.",

            /* Footer */
            "footer.copyright1": "Copyright 2019 All Rights Reserved By ",
            "footer.copyright2": ", under license ",
            "footer.copyright3": ". Modified by ",
            "politicas.h3.cookies": "COOKIES POLICY",
            "politicas.p.cookies1": "This website uses a single own cookie and the browser's local storage for the sole purpose of remembering the language manually selected by the user.",
            "politicas.p.cookies2": "Both the cookie and the local storage are only generated when the user voluntarily changes the language through the selector available on the website. They are not installed or activated simply by visiting or browsing the website.",
            "politicas.p.cookies3": "This cookie has an exclusively functional purpose and is not used to collect personal data, carry out tracking, create profiles, display advertising or analyze visitor behavior.",
            "politicas.p.cookies4": "No analytical, advertising or third-party tracking cookies are used.",
            "politicas.p.cookies5": "As a personalization cookie based on an express choice of the user, it is exempt from the consent requirement in accordance with the criteria of the Spanish Data Protection Agency (AEPD).",
        }
    };

    function getCookie(name) {
        var v = document.cookie.match("(?:^|;\\s*" + name + "=)([^;]*)");
        return v ? decodeURIComponent(v[1]) : null;
    }

    function setCookie(name, value, days) {
        var d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + d.toUTCString() + "; path=/";
    }

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

    function detectLanguage() {
        var c = getCookie(COOKIE_NAME);
        if (c === "es" || c === "en") return c;
        var s = getStoredLang();
        if (s) return s;
        var nav = navigator.language || (navigator.languages && navigator.languages[0]) || "";
        return nav.substring(0, 2).toLowerCase() === "es" ? "es" : "en";
    }

    function applyTranslations(lang) {
        var dict = translations[lang];
        if (!dict) return;
        var els = document.querySelectorAll("[data-i18n]");
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            var key = el.getAttribute("data-i18n");
            if (key && dict[key]) el.textContent = dict[key];
        }
        document.documentElement.lang = lang;
        currentLang = lang;
        var flag = document.getElementById("langFlag");
        if (flag)         flag.textContent = lang === "es" ? "ES" : "EN";
    }

    function setLang(lang) {
        setCookie(COOKIE_NAME, lang, COOKIE_DAYS);
        setStoredLang(lang);
        applyTranslations(lang);
        toggleLangMenu(false);
    }

    function toggleLangMenu(force) {
        var menu = document.getElementById("langMenu");
        if (!menu) return;
        menuOpen = force === undefined ? !menuOpen : force;
        menu.style.display = menuOpen ? "block" : "none";
    }

    function isLangOption(el) {
        while (el && el !== document) {
            if (el.classList && el.classList.contains("lang-option")) return true;
            el = el.parentNode;
        }
        return false;
    }

    document.addEventListener("click", function (e) {
        if (isLangOption(e.target)) return;
        var btn = document.getElementById("langBtn");
        var menu = document.getElementById("langMenu");
        if (!btn || !menu) return;
        if (btn.contains(e.target)) {
            toggleLangMenu();
        } else if (!menu.contains(e.target)) {
            toggleLangMenu(false);
        }
    });

    function init() {
        var lang = detectLanguage();
        applyTranslations(lang);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    window.setLang = setLang;
    window.toggleLangMenu = toggleLangMenu;
})();

