let gads = document.querySelector("#box1");
gads.addEventListener("click", function () {
  Swal.fire({
    title: `<i class="icofont-brand-google" style="color:red; font-size: 3em;"></i> `,
    html:
      "Google Ads es un servicio y un programa de la empresa Google que se utiliza para ofrecer publicidad patrocinada a potenciales anunciantes. Los anuncios patrocinados de Google Ads aparecen en: En la página de resultados junto con los resultados de búsquedas naturales u orgánicas." +
      `<a href="https://es.wikipedia.org/wiki/Google_Ads" target="__blank" style="outline:none"> Info</a>`,
    focusConfirm: false,
    confirmButtonText: "Okey",
  });
});

let mkt = document.querySelector("#box2");
mkt.addEventListener("click", function () {
  Swal.fire({
    title: `<i class="icofont-stock-mobile" style="color:red; font-size: 3em;"></i> `,
    html:
      "La mercadotecnia digital o marketing digital está caracterizada por la combinación y utilización de estrategias de comercialización en medios digitales." +
      `<a href="https://es.wikipedia.org/wiki/Marketing_digital" target="__blank" style="outline:none"> Info</a>`,
    focusConfirm: false,
    confirmButtonText: "Okey",
  });
});

let cp = document.querySelector("#box3");
cp.addEventListener("click", function () {
  Swal.fire({
    title: `<i class="icofont-globe" style="color:red; font-size: 3em;"></i> `,
    html:
      "La voz fue adoptada por la industria de la publicidad con el significado de un plan extenso para una serie de anuncios diferentes, pero relacionados, que aparecen en diversos medios durante un periodo específico." +
      `<a href="https://es.wikipedia.org/wiki/Campa%C3%B1a_publicitaria" target="__blank" style="outline:none"> Info</a>`,
    focusConfirm: false,
    confirmButtonText: "Okey",
  });
});

let landing = document.querySelector("#lp");

lp.addEventListener("click", function () {
  Swal.fire({
    title: "Landing-page",
    html:
      `<span class="bg-green">✔</span> Mostras tu información` +
      `</br>` +
      `<span class="bg-green">✔</span> Enlaces directo a tu whatsapp` +
      `</br>` +
      `<span class="bg-green">✔</span> Galería de imagenes` +
      `</br>` +
      `<span class="bg-green">✔</span> Dominio gratis por un año ` +
      `</br>` +
      `<span class="bg-green">✔</span> Botón de WhatsApp y/o Messenger` +
      `</br>` +
      `<span class="bg-green">✔</span> Botones de Call To Action` +
      `</br>` +
      `<span class="bg-green">✔</span> Renderizada para poder hacer marketing` +
      `</br>` +
      `<span class="bg-green">✔</span> Formulario de suscripción para newsletter` +
      `</br>` +
      `<span class="bg-green">✔</span> Hosting GRATIS` +
      `</br>` +
      `<span class="bg-green">✔</span> SEO trabajado para posicionar tu web en lo más alto` +
      `</br>` +
      `<span class="bg-green">✔</span> Google analytics` +
      `</br>` +
      `<span class="bg-green">✔</span> Formularios de contacto`,

    imageUrl: "./assets/img/packs/landing.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
});

let eb = document.querySelector("#eb");
eb.addEventListener("click", function () {
  Swal.fire({
    title: "E-commerce Básico",
    html:
      `<span class="bg-green">✔</span> Catálogo online hasta 50 productos` +
      `</br>` +
      `<span class="bg-green">✔</span> Integración con procesadores de medios de pago online` +
      `</br>` +
      `<span class="bg-green">✔</span> Panel de gestión de pedidos, productos y clientes ` +
      `</br>` +
      `<span class="bg-green">✔</span> Dominio gratis por un año ` +
      `</br>` +
      `<span class="bg-green">✔</span> Botón de WhatsApp` +
      `</br>` +
      `<span class="bg-green">✔</span> Autoadministrable ` +
      `</br>` +
      `<span class="bg-green">✔</span> 100% Escalable ` +
      `</br>` +
      `<span class="bg-green">✔</span> 1 Formulario de contacto` +
      `</br>` +
      `<span class="bg-green">✔</span> Limpiador de caché ` +
      `</br>` +
      `<span class="bg-green">✔</span> Calculadora de envíos de OCA` +
      `</br>` +
      `<span class="bg-green">✔</span> Google analytics`,

    imageUrl: "./assets/img/packs/ecob.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
});

let ef = document.querySelector("#ef");
ef.addEventListener("click", function () {
  Swal.fire({
    title: "E-commerce FULL",
    html:
      `<span class="bg-green">✔</span> Catálogo online hasta 100 productos` +
      `</br>` +
      `<span class="bg-green">✔</span> Integración con procesadores de medios de pago online` +
      `</br>` +
      `<span class="bg-green">✔</span> Panel de gestión de pedidos, productos y clientes ` +
      `</br>` +
      `<span class="bg-green">✔</span> Secciones de contenido institucional ` +
      `</br>` +
      `<span class="bg-green">✔</span> Certificado SSL` +
      `</br>` +
      `<span class="bg-green">✔</span> Dominio gratis por un año ` +
      `</br>` +
      `<span class="bg-green">✔</span> Integración con redes sociales (Poder etiquetar productos en las fotos) ` +
      `</br>` +
      `<span class="bg-green">✔</span> Botón de WhatsApp y/o Messenger` +
      `</br>` +
      `<span class="bg-green">✔</span> Cuentas de correo corporativo` +
      `</br>` +
      `<span class="bg-green">✔</span> Autoadministrable ` +
      `</br>` +
      `<span class="bg-green">✔</span> Diseño personalizable ` +
      `</br>` +
      `<span class="bg-green">✔</span> 100% Escalable ` +
      `</br>` +
      `<span class="bg-green">✔</span> Una aplicación Mobile para poder gestionar todos los pedidos desde ahí ` +
      `</br>` +
      `<span class="bg-green">✔</span> Formularios de contacto` +
      `</br>` +
      `<span class="bg-green">✔</span> Gestionada y configurada para hacer marketing ` +
      `</br>` +
      `<span class="bg-green">✔</span> Mantenimiento por 1 mes ` +
      `</br>` +
      `<span class="bg-green">✔</span> Limpiador de caché ` +
      `</br>` +
      `<span class="bg-green">✔</span> Pixel de Facebook  ` +
      `</br>` +
      `<span class="bg-green">✔</span> Chat online (si se desea) ` +
      `</br>` +
      `<span class="bg-green">✔</span> Calculadora de envíos de OCA` +
      `</br>` +
      `<span class="bg-green">✔</span> Hosting durante un año ` +
      `</br>` +
      `<span class="bg-green">✔</span> Google analytics`,

    imageUrl: "./assets/img/packs/ecof.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
});

let btmp = document.querySelectorAll(".mercadopago-button");
[].forEach.call(btmp, function (btmp) {
  btmp.innerHTML = "Quiero mi pack";
});

let cmb = document.querySelector("#mb");
cmb.addEventListener("click", function () {
  Swal.fire({
    title: "PLAN BÁSICO",
    html:
      `*Ideal para quienes buscan dar sus primeros pasos en medios digitales*` +
      `</br>` +
      `<span class="bg-green">✔</span> Armado de plan de marketing digital para que la estrategia comunicativa se adapte a los objetivos del cliente` +
      `</br>` +
      `<span class="bg-green">✔</span> Armado y presentación previa de calendario de publicaciones` +
      `</br>` +
      `<span class="bg-green">✔</span> 2 publicaciones semanales en FB e IG (O redes a convenir) e historias ` +
      `</br>` +
      `<span class="bg-green">✔</span> Diseño de Gráficas personalizadas para cada red social ` +
      `</br>` +
      `<span class="bg-green">✔</span> Seguimiento y gestión de cuentas` +
      `</br>` +
      `<span class="bg-green">✔</span> Medición de resultados y reportes  ` +
      `</br>` +
      `<span class="bg-green">✔</span> Reuniones mensuales`,
    imageUrl: "./assets/img/packs/cmb.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
});

let cmc = document.querySelector("#mc");
cmc.addEventListener("click", function () {
  Swal.fire({
    title: "PLAN COMPLETE",
    html:
      `*Potencía tu negocio!*` +
      `</br>` +
      `<span class="bg-green">✔</span> Armado de plan de marketing digital para que la estrategia comunicativa se adapte a los objetivos del cliente` +
      `</br>` +
      `<span class="bg-green">✔</span> Armado y presentación previa de calendario de publicaciones` +
      `</br>` +
      `<span class="bg-green">✔</span> 4 publicaciones semanales en FB e IG (O redes a convenir) e historias ` +
      `</br>` +
      `<span class="bg-green">✔</span> Diseño de Gráficas personalizadas para cada red social ` +
      `</br>` +
      `<span class="bg-green">✔</span> Seguimiento y gestión de cuentas` +
      `</br>` +
      `<span class="bg-green">✔</span> Medición de resultados y reportes  ` +
      `</br>` +
      `<span class="bg-green">✔</span> Interacción con la comunidad mediante historias` +
      `</br>` +
      `<span class="bg-green">✔</span> Campañas de publicidad en ambas redes sociales (opcionales)` +
      `</br>` +
      `<span class="bg-green">✔</span> Moderación de comentarios y respuestas a mensajes privados` +
      `</br>` +
      `<span class="bg-green">✔</span> Optimización de perfil empresa en Instagram y Facebook` +
      `</br>` +
      `<span class="bg-green">✔</span> Medición de resultados y presentación de reportes mensuales ` +
      `</br>` +
      `<span class="bg-green">✔</span> Reuniones mensuales `,

    imageUrl: "./assets/img/packs/cmc.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
});

let cmf = document.querySelector("#mf");
cmf.addEventListener("click", function () {
  Swal.fire({
    title: "PLAN FULL",
    html:
      `*Ideal si buscas que tu marca participe activamente de las redes sociales y que sea un nuevo medio de comercialización de productos/servicios!*` +
      `</br>` +
      `<span class="bg-green">✔</span> Armado de Plan de Marketing Digital para que las acciones a ejecutar se adapten a los objetivos del cliente` +
      `</br>` +
      `<span class="bg-green">✔</span> Armado y presentación previa de calendario de publicaciones` +
      `</br>` +
      `<span class="bg-green">✔</span> Publicaciones díarias en FB e IG (O redes a convenir) e historias ` +
      `</br>` +
      `<span class="bg-green">✔</span> Diseño de Gráficas personalizadas para cada red social ` +
      `</br>` +
      `<span class="bg-green">✔</span> Seguimiento y gestión de cuentas` +
      `</br>` +
      `<span class="bg-green">✔</span> Medición de resultados y reportes  ` +
      `</br>` +
      `<span class="bg-green">✔</span> Interacción con la comunidad mediante historias` +
      `</br>` +
      `<span class="bg-green">✔</span> Campañas de publicidad en ambas redes sociales (opcionales)` +
      `</br>` +
      `<span class="bg-green">✔</span> Moderación de comentarios y respuestas a mensajes privados` +
      `</br>` +
      `<span class="bg-green">✔</span> Optimización de perfil empresa en Instagram y Facebook` +
      `</br>` +
      `<span class="bg-green">✔</span> Medición de resultados y presentación de reportes mensuales ` +
      `</br>` +
      `<span class="bg-green">✔</span> Reuniones quincenales  `,

    imageUrl: "./assets/img/packs/cmf.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
});
