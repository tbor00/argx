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
      `<span class="bg-green">✔</span> Catálogo online hasta 100 o más productos` +
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
