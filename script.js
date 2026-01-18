document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     CONTADOR REGRESSIVO
  =============================== */

  const evento = new Date("2026-02-14T16:00:00-03:00").getTime();

  const spanDias = document.getElementById("dias");
  const spanHoras = document.getElementById("horas");
  const spanMinutos = document.getElementById("minutos");
  const spanSegundos = document.getElementById("segundos");

  function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = evento - agora;

    if (diferenca <= 0) {
      spanDias.innerText = "0";
      spanHoras.innerText = "0";
      spanMinutos.innerText = "0";
      spanSegundos.innerText = "0";
      return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    spanDias.innerText = dias;
    spanHoras.innerText = horas;
    spanMinutos.innerText = minutos;
    spanSegundos.innerText = segundos;
  }

  atualizarContador();
  setInterval(atualizarContador, 1000);

  /* ===============================
     LIGHTBOX DA GALERIA
  =============================== */

  const fotos = document.querySelectorAll(".foto-card img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  if (fotos.length && lightbox && lightboxImg && closeBtn) {

    fotos.forEach(img => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.add("active");
      });
    });

    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });

  }

});
