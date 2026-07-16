/* ═══════════════════════════════════════════════════
   ARROSÉ – lightbox.js
   Lightbox partagé pour les galeries (pages événements)
   Injecte le markup et branche les images de .event-galerie
════════════════════════════════════════════════════ */
(function () {
  const galerie = document.querySelector(".event-galerie");
  if (!galerie) return;

  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="lightbox" id="lightbox">
      <button class="lightbox-close" id="lightbox-close" aria-label="Fermer">✕</button>
      <button class="lightbox-prev" id="lightbox-prev" aria-label="Photo précédente">‹</button>
      <img class="lightbox-img" id="lightbox-img" src="" alt="" />
      <button class="lightbox-next" id="lightbox-next" aria-label="Photo suivante">›</button>
      <div class="lightbox-counter" id="lightbox-counter"></div>
    </div>`
  );

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCtr = document.getElementById("lightbox-counter");
  const imgs = Array.from(galerie.querySelectorAll("img"));
  let currentIndex = 0;

  function update() {
    lightboxImg.src = imgs[currentIndex].src;
    lightboxImg.alt = imgs[currentIndex].alt;
    lightboxCtr.textContent = `${currentIndex + 1} / ${imgs.length}`;
  }
  function open(i) {
    currentIndex = i;
    update();
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  function prev() {
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    update();
  }
  function next() {
    currentIndex = (currentIndex + 1) % imgs.length;
    update();
  }

  imgs.forEach((img, i) => img.addEventListener("click", () => open(i)));
  document.getElementById("lightbox-close").addEventListener("click", close);
  document.getElementById("lightbox-prev").addEventListener("click", prev);
  document.getElementById("lightbox-next").addEventListener("click", next);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") close();
  });
})();
