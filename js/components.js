/* ═══════════════════════════════════════════════════
   ARROSÉ – components.js
   Injecte la nav et le footer sur chaque page
   Responsive mobile : menu hamburger + footer adapté
════════════════════════════════════════════════════ */

/* ── NAV ──────────────────────────────────────────── */
function renderNav(activePage) {
  const pages = [
    { id: "vins", label: "Vins", href: "vins.html" },
    { id: "fleurs", label: "Fleurs", href: "fleurs.html" },
    { id: "ateliers", label: "Ateliers", href: "ateliers.html" },
    { id: "evenements", label: "Évènements", href: "evenements.html" },
  ];

  const links = pages
    .map(
      (p) => `
    <li class="${p.id === activePage ? "active" : ""}">
      <a href="${p.href}">${p.label}</a>
    </li>
  `,
    )
    .join("");

  return `
    <nav>
      <a class="nav-logo" href="index.html">
        <span class="logo-main">ARROSÉ</span>
        <span class="logo-sub">La cave fleurie</span>
      </a>

      <!-- Bouton hamburger (mobile uniquement) -->
      <button class="nav-hamburger" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="nav-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links" id="nav-menu" role="list">
        ${links}
        <li class="contact ${activePage === "contact" ? "active" : ""}">
          <a href="contact.html">Contact</a>
        </li>
      </ul>

      <!-- Overlay fond sombre (mobile) -->
      <div class="nav-overlay" aria-hidden="true"></div>
    </nav>
  `;
}

/* ── FOOTER ───────────────────────────────────────── */
function renderFooter() {
  const svgIG = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;
  const svgFB = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`;

  return `
    <footer>
      <div class="footer-brand footer-col-sep">
        <div class="logo-main">ARROSÉ</div>
        <div class="logo-sub">La cave fleurie</div>
        <div class="footer-socials">
          <a href="https://www.instagram.com/arrose.lacavefleurie/" aria-label="Instagram">${svgIG}</a>
          <a href="https://www.facebook.com/share/1Hr2yi8RXr/?mibextid=wwXIfr" aria-label="Facebook">${svgFB}</a>
        </div>
      </div>
      <div class="footer-col footer-col-sep">
        <h4>Contact</h4>
        <address>
          31C rue des plages<br/>
          22560 Trébeurden<br/><br/>
          <strong>Boutique :</strong> <br/>
          06 10 50 08 42 <br/>
          06 29 49 40 33 <br/>
        </address>
        <br/>
        <a href="contact.html">→ Demande spécifique</a>
      </div>
      <div class="footer-col">
        <h4>Horaires</h4>
        <div class="footer-horaires">
          <span>Lundi :</span> Fermé <br/> 
          <span>Mardi :</span> 10h / 19h<br/> 
          <span>Mercredi :</span> 10h / 19h<br/> 
          <span>Jeudi :</span> 10h / 19h<br/> 
          <span>Vendredi :</span> 10h / 20h<br/> 
          <span>Samedi :</span> 10h / 20h<br/> 
          <span>Dimanche :</span> 10h / 13h<br/>
        </div>
      </div>
    </footer>
    <div class="footer-bottom">
      <a href="mentions-legales.html">Mentions légales</a>
    </div>
  `;
}

/* ── INJECTION ────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  const activePage = document.body.dataset.page || "";

  const navEl = document.getElementById("nav-placeholder");
  if (navEl) navEl.outerHTML = renderNav(activePage);

  const footerEl = document.getElementById("footer-placeholder");
  if (footerEl) footerEl.outerHTML = renderFooter();

  /* ── Hamburger logic ──────────────────────────── */
  initHamburger();
});

function initHamburger() {
  const hamburger = document.querySelector(".nav-hamburger");
  const navMenu = document.getElementById("nav-menu");
  const overlay = document.querySelector(".nav-overlay");
  const nav = document.querySelector("nav");

  if (!hamburger || !navMenu) return;

  function openMenu() {
    hamburger.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
    navMenu.classList.add("is-open");
    overlay.classList.add("is-visible");
    nav.classList.add("menu-open");
    document.body.style.overflow = "hidden"; // bloque le scroll
  }

  function closeMenu() {
    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    nav.classList.remove("menu-open");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    hamburger.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  // Ferme en cliquant sur l'overlay
  overlay.addEventListener("click", closeMenu);

  // Ferme en cliquant sur un lien
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Ferme si on passe en desktop (resize)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeMenu();
  });

  // Ferme avec la touche Echap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

/* ── ROTATEUR DE PHOTOS ───────────────────────────
   Fait alterner en fondu les images d'un .photo-rotator
   (désactivé si l'utilisateur préfère réduire les animations) */
document.querySelectorAll(".photo-rotator").forEach((rotator) => {
  const imgs = rotator.querySelectorAll("img");
  if (!imgs.length) return;
  imgs[0].classList.add("is-visible");
  if (imgs.length < 2) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let current = 0;
  setInterval(() => {
    imgs[current].classList.remove("is-visible");
    current = (current + 1) % imgs.length;
    imgs[current].classList.add("is-visible");
  }, 5500);
});


/* ── AVIS GOOGLE ──────────────────────────────────
   TOUT l'encart avis se modifie ici (et uniquement ici) :
   titre, note, nombre d'avis, lien Google, et les avis.
   Tous les avis s'affichent sur toutes les pages
   (le champ "pages" est conservé mais plus utilisé). */
const AVIS_CONFIG = {
  titre: "Ils parlent de nous",
  note: "4,9",
  nombre: "avis clients",
  lienGoogle: "https://search.google.com/local/reviews?placeid=ChIJ6dEXWL3TE0gRJQN5qYpZX6A",
  lienTexte: "→ Voir tous nos avis sur Google",
};

const AVIS = [
  { nom: "Lucile L.", texte: "Très belle découverte ! La boutique est superbe, avec un concept génial. L'accueil est très chaleureux. Je recommande vivement cette boutique !", pages: ["home", "contact"] },
  { nom: "Envel R.", texte: "Superbe concept, accueil au top et beaucoup de goût ! Bravo à ces deux jeunes commerçants pour cette belle cave fleurie !", pages: ["home", "contact"] },
  { nom: "Antoine G.", texte: "Superbe accueil et très belle boutique ! De bons conseils pour les vins avec un large choix. Les bouquets de fleurs sont magnifiques.", pages: ["home", "vins"] },
  { nom: "Charline R.", texte: "Boutique très chaleureuse où les 2 espaces cave et fleurs cohabitent parfaitement. Et surtout, 2 jeunes commerçants au top !", pages: ["home"] },
  { nom: "Angélique N.", texte: "J'adore le concept, personnel aimable, de bon conseil ! J'ai acheté un bouquet de pivoines et une bouteille de vin blanc qui est excellent ! J'ai découvert des fleurs champêtre que je connaissais pas et il y a beaucoup de bon vin comme le gigondas ou morgon. Hésitez pas à aller faire un tour !", pages: ["vins"] },
  { nom: "Lucille R.", texte: "Atelier dégustation et confection de bouquet. Un grand merci à Tanguy et Erell pour cette belle découverte. Merci pour leur patience et leur douceur. Un très grand choix de vins et de fleurs. Allez-y les yeux fermés !", pages: ["vins", "contact"] },
  { nom: "Alexandre D.", texte: "Super accueil de la part des gérants ! La boutique est charmante, plein de choix de vins et de magnifiques fleurs ! À très vite.", pages: ["vins"] },
  { nom: "Marina M.", texte: "Erell s'est occupée de la décoration florale pour notre mariage. C'était vraiment magnifique ! Elle a un réel talent pour sublimer votre mariage. Le petit plus : que de la fleur bretonne.", pages: ["fleurs"] },
  { nom: "Marie T.", texte: "Passée chez Arrosé pour fleurir une tombe, et super bien conseillée : on m'a aidée à choisir des plantes robustes pour bien tenir en extérieur au cimetière, le tout très joli. Et bonne surprise, c'est aussi une cave à vin ! Un chouette commerce à Trébeurden, je recommande ++", pages: ["fleurs", "contact"] },
  { nom: "Anna L.", texte: "Je reviendrai ! De superbes bouquets, modernes et avec des fleurs locales, de saison. De très bons conseils sur la partie cave. Une chance pour Trébeurden.", pages: ["fleurs"] },
  { nom: "Bleue A.", texte: "Très joli bouquet champêtre pour mon anniversaire. Une semaine après il est encore beau.", pages: ["fleurs"] },
];

document.querySelectorAll(".avis-google").forEach((section) => {
  const cartes = AVIS
    .map(
      (a) => `<article class="avis-card">
        <div class="avis-stars" aria-label="5 sur 5">★★★★★</div>
        <p>« ${a.texte} »</p>
        <div class="avis-author">${a.nom}</div>
      </article>`,
    )
    .join("");
  section.innerHTML = `
    <div class="avis-google-head">
      <h2 id="avis-title">${AVIS_CONFIG.titre}</h2>
      <div class="avis-google-note"><span class="g-logo">Google</span><span class="avis-stars">★★★★★</span><span>${AVIS_CONFIG.note} · ${AVIS_CONFIG.nombre}</span></div>
    </div>
    <div class="avis-track">${cartes}</div>
    <div class="avis-google-cta"><a class="cta-link" href="${AVIS_CONFIG.lienGoogle}" target="_blank" rel="noopener">${AVIS_CONFIG.lienTexte}</a></div>`;
});
