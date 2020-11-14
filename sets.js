let gads = document.querySelector("#box1");
gads.addEventListener("click", function () {
  Swal.fire({
    title: `<i class="icofont-brand-google" style="color:red; font-size: 3em;"></i> `,
    html:
      "Google Ads es un servicio y un programa de la empresa Google que se utiliza para ofrecer publicidad patrocinada a potenciales anunciantes. Los anuncios patrocinados de Google Ads aparecen en: En la página de resultados junto con los resultados de búsquedas naturales u orgánicas" +
      `<a href="https://es.wikipedia.org/wiki/Google_Ads" target="__blank" style="outline:none"> Para más info click acá</a>`,
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
      `<a href="https://es.wikipedia.org/wiki/Marketing_digital" target="__blank" style="outline:none"> Para más info click acá</a>`,
    focusConfirm: false,
    confirmButtonText: "Okey",
  });
});

let cp = document.querySelector("#box3");
cp.addEventListener("click", function () {
  Swal.fire({
    title: `<i class="icofont-globe" style="color:red; font-size: 3em;"></i> `,
    html:
      "La voz fue adoptada por la industria de la publicidad con el significado de un plan extenso para una serie de anuncios diferentes, pero relacionados, que aparecen en diversos medios durante un periodo específico" +
      `<a href="https://es.wikipedia.org/wiki/Campa%C3%B1a_publicitaria" target="__blank" style="outline:none"> Para más info click acá</a>`,
    focusConfirm: false,
    confirmButtonText: "Okey",
  });
});
