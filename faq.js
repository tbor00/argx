let pf1 = document.querySelector("#pf1");
let faq1 = document.querySelector("#faq1");
let pf2 = document.querySelector("#pf2");
let faq2 = document.querySelector("#faq2");
let pf3 = document.querySelector("#pf3");
let faq3 = document.querySelector("#faq3");
let pf4 = document.querySelector("#pf4");
let faq4 = document.querySelector("#faq4");
let pf5 = document.querySelector("#pf5");
let faq5 = document.querySelector("#faq5");
let unic1 = document.querySelector("#unic1");
let unic2 = document.querySelector("#unic2");
let unic3 = document.querySelector("#unic3");
let unic4 = document.querySelector("#unic4");
let unic5 = document.querySelector("#unic5");
let flp1 = document.querySelector("#flp1");
let flp2 = document.querySelector("#flp2");
let flp3 = document.querySelector("#flp3");
let flp4 = document.querySelector("#flp4");
let flp5 = document.querySelector("#flp5");

process(pf1, faq1, unic1, flp1);
process(pf2, faq2, unic2, flp2);
process(pf3, faq3, unic3, flp3);
process(pf4, faq4, unic4, flp4);
process(pf5, faq5, unic5, flp5);

function process(pf, faq, spanes, flp) {
  pf.addEventListener("click", function () {
    faq.style.display == "block"
      ? unshow(faq, spanes, flp)
      : show(faq, spanes, flp);
  });
}

function show(response, spanes, flp) {
  response.style.display = "block";
  spanes.style.color = "red";
  flp.classList.replace("fa-chevron-circle-down", "fa-chevron-circle-up");
}

function unshow(response, spanes, flp) {
  response.style.display = "none";
  spanes.style.color = "";
  flp.classList.replace("fa-chevron-circle-up", "fa-chevron-circle-down");
}
