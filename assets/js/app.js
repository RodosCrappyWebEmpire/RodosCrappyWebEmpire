/* ============================================================
 *  Rodo's Crappy Web Empire — Site Engine
 * ============================================================ */

(function () {
  "use strict";

  var currentPage = "home";
  var mobileMenuOpen = false;
  var D = SITE_DATA;
  var VALID_PAGES = ["home", "projects", "about"];

  function esc(s) {
    if (!s) return "";
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  // ── Hash Router ──
  function getPageFromHash() {
    var hash = window.location.hash.replace("#", "").replace("/", "");
    if (hash && VALID_PAGES.indexOf(hash) !== -1) return hash;
    return "home";
  }

  function navigateTo(page) {
    currentPage = page;
    mobileMenuOpen = false;
    window.location.hash = page === "home" ? "" : page;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("hashchange", function () {
    var page = getPageFromHash();
    if (page !== currentPage) {
      currentPage = page;
      mobileMenuOpen = false;
      render();
      window.scrollTo({ top: 0 });
    }
  });

  // ── Navbar ──
  function renderNavbar() {
    var links = [
      { p: "home", l: "~/home" },
      { p: "projects", l: "~/projects" },
      { p: "about", l: "~/about" }
    ];
    var dsk = "", mob = "";
    for (var i = 0; i < links.length; i++) {
      var a = currentPage === links[i].p ? " active" : "";
      dsk += '<a href="#' + links[i].p + '" class="navbar-link' + a + '" data-page="' + links[i].p + '">' + esc(links[i].l) + '</a>';
      mob += '<a href="#' + links[i].p + '" class="navbar-mobile-link' + a + '" data-page="' + links[i].p + '">' + esc(links[i].l) + '</a>';
    }
    return '<nav class="navbar" id="navbar" role="navigation">' +
      '<div class="navbar-inner">' +
      '<a href="#" class="navbar-brand" data-page="home">RCWE://</a>' +
      '<div class="navbar-links">' + dsk + '</div>' +
      '<button class="navbar-mobile-btn" id="mobile-toggle" aria-label="Menú">[=]</button>' +
      '</div>' +
      '<div class="navbar-mobile-menu' + (mobileMenuOpen ? ' open' : '') + '" id="mobile-menu">' + mob + '</div>' +
      '</nav>';
  }

  // ── Footer ──
  function renderFooter() {
    return '<footer class="footer" role="contentinfo"><div class="container">' +
      '<p>' +
      '<a href="' + esc(D.config.githubOrg) + '" target="_blank" rel="noopener noreferrer">GitHub Org</a> · ' +
      '<a href="' + esc(D.config.github) + '" target="_blank" rel="noopener noreferrer">' + esc(D.config.githubHandle) + '</a> · ' +
      '<a href="https://www.lodte.com.ar/" target="_blank" rel="noopener noreferrer">LODTE</a>' +
      '</p>' +
      '<p style="margin-top:6px;">&copy; ' + new Date().getFullYear() + ' ' + esc(D.config.name) + ' · ' + esc(D.config.domain) + '</p>' +
      '<p style="margin-top:4px;font-size:10px;">Hecho con más entusiasmo que presupuesto.</p>' +
      '</div></footer>';
  }

  // ── Section Header ──
  function sectionHeader(title, subtitle) {
    return '<div class="section-header">' +
      '<h2><span class="prompt">$</span> ' + esc(title) + '</h2>' +
      (subtitle ? '<p class="subtitle">' + esc(subtitle) + '</p>' : '') +
      '</div>';
  }

  // ── Project Card ──
  function projectCard(p) {
    var statusClass = "status-" + (p.status || "wip");
    var statusLabel = { live: "LIVE", beta: "BETA", wip: "WIP", archived: "ARCHIVED" }[p.status] || "WIP";
    var tags = "";
    if (p.tags) {
      for (var i = 0; i < p.tags.length; i++) {
        tags += '<span class="tag">' + esc(p.tags[i]) + '</span>';
      }
    }
    var links = '';
    if (p.url) links += '<a href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer" class="project-link">[abrir &#8599;]</a>';
    if (p.repo) links += '<a href="' + esc(p.repo) + '" target="_blank" rel="noopener noreferrer" class="project-link">[repo &#8599;]</a>';

    return '<div class="project-card' + (p.featured ? ' featured' : '') + '">' +
      '<span class="status-badge ' + statusClass + '">' + statusLabel + '</span>' +
      '<h3 class="project-name">' + esc(p.name) + '</h3>' +
      '<p class="project-desc">' + esc(p.desc) + '</p>' +
      (tags ? '<div class="project-tags">' + tags + '</div>' : '') +
      '<div class="project-links">' + links + '</div>' +
      '</div>';
  }

  // ══════════════════════════════════════════
  //  PAGES
  // ══════════════════════════════════════════

  function pageHome() {
    var featured = "";
    var count = 0;
    for (var i = 0; i < D.projects.length; i++) {
      if (D.projects[i].featured) {
        featured += projectCard(D.projects[i]);
        count++;
      }
    }
    if (count === 0 && D.projects.length > 0) {
      featured += projectCard(D.projects[0]);
    }

    return '<section class="hero">' +
      '<p class="hero-prefix">$ cd ~/rodoscrappywebempire</p>' +
      '<h1>' + esc(D.config.name) + '<span class="hero-cursor"></span></h1>' +
      '<p class="hero-tagline">' + esc(D.config.tagline) + '</p>' +
      '<div style="display:flex;gap:12px;flex-wrap:wrap;">' +
      '<a href="#projects" class="btn btn-primary" data-page="projects">ver proyectos</a>' +
      '<a href="' + esc(D.config.githubOrg) + '" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">github &#8599;</a>' +
      '</div>' +
      '</section>' +

      '<section class="section"><div class="container">' +
      sectionHeader("Proyecto destacado", "Lo más reciente del imperio") +
      featured +
      '<div style="margin-top:20px;">' +
      '<a href="#projects" class="btn btn-ghost" data-page="projects" style="font-size:11px;">ver todos los proyectos &rarr;</a>' +
      '</div>' +
      '</div></section>' +

      '<section class="section"><div class="container">' +
      '<div style="border:1px solid var(--border);padding:24px;">' +
      '<p style="font-size:13px;color:var(--text-faint);margin-bottom:8px;font-family:var(--font-display);">$ cat README.md</p>' +
      '<p style="font-size:14px;color:var(--text-dim);line-height:1.8;">' + esc(D.config.description) + '</p>' +
      '<p style="font-size:13px;color:var(--text-faint);margin-top:16px;">' + esc(D.about.bio) + '</p>' +
      '</div>' +
      '</div></section>';
  }

  function pageProjects() {
    var cards = "";
    for (var i = 0; i < D.projects.length; i++) {
      cards += projectCard(D.projects[i]);
    }
    if (D.projects.length === 0) {
      cards = '<div style="padding:40px;text-align:center;color:var(--text-faint);">' +
        '<p style="font-size:13px;">$ ls projects/</p>' +
        '<p style="font-size:12px;margin-top:8px;">No hay proyectos todavía. Agregá uno en content/site-data.js</p>' +
        '</div>';
    }
    return '<div class="container" style="padding-top:80px;padding-bottom:60px;">' +
      sectionHeader("Proyectos", D.projects.length + " proyecto" + (D.projects.length !== 1 ? "s" : "") + " en el imperio") +
      cards +
      '<p class="text-faint mt-3" style="font-size:12px;">Para agregar un proyecto, editá <span class="text-green">content/site-data.js</span> y copiá un bloque en "projects".</p>' +
      '</div>';
  }

  function pageAbout() {
    var links = "";
    for (var i = 0; i < D.about.links.length; i++) {
      var l = D.about.links[i];
      links += '<a href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer" class="about-link">' +
        '<span class="arrow">&gt;</span> ' + esc(l.label) +
        '</a>';
    }

    return '<div class="container" style="padding-top:80px;padding-bottom:60px;">' +
      sectionHeader("Acerca de", "whoami") +
      '<div style="border:1px solid var(--border);padding:24px;margin-bottom:24px;">' +
      '<p style="font-size:13px;color:var(--text-faint);margin-bottom:12px;font-family:var(--font-display);">$ whoami</p>' +
      '<p style="font-size:16px;color:var(--green);margin-bottom:8px;font-family:var(--font-display);font-weight:700;">' + esc(D.config.owner) + '</p>' +
      '<p class="about-bio">' + esc(D.about.bio) + '</p>' +
      '</div>' +

      '<div style="border:1px solid var(--border);padding:24px;">' +
      '<p style="font-size:13px;color:var(--text-faint);margin-bottom:12px;font-family:var(--font-display);">$ cat links.txt</p>' +
      '<div class="about-links">' + links + '</div>' +
      '</div>' +

      '<div style="margin-top:32px;padding:20px;border:1px dashed var(--border);">' +
      '<p style="font-size:12px;color:var(--text-faint);line-height:1.8;">' +
      '// Este sitio es estático: HTML + CSS + JS vanilla.<br>' +
      '// Hosteado en GitHub Pages, gratis, sin frameworks.<br>' +
      '// Todo el contenido se edita desde <span class="text-green">content/site-data.js</span><br>' +
      '// Porque a veces lo simple es suficiente.' +
      '</p>' +
      '</div>' +
      '</div>';
  }

  // ── Render ──
  function render() {
    var pages = { home: pageHome, projects: pageProjects, about: pageAbout };
    var fn = pages[currentPage] || pageHome;
    document.getElementById("app").innerHTML =
      renderNavbar() +
      '<main style="position:relative;z-index:1;" role="main">' + fn() + '</main>' +
      renderFooter();
    bindEvents();
    updateMeta();
  }

  function updateMeta() {
    var t = {
      home: "Rodo's Crappy Web Empire",
      projects: "Proyectos — Rodo's Crappy Web Empire",
      about: "Acerca de — Rodo's Crappy Web Empire"
    };
    document.title = t[currentPage] || t.home;
    var m = document.querySelector('meta[name="description"]');
    if (m) {
      var d = {
        home: "Portfolio de proyectos web de Rodolfo García. Una colección de aplicaciones hechas con más entusiasmo que presupuesto.",
        projects: "Proyectos web: Mareas Argentinas y más herramientas del imperio crappy.",
        about: "Rodolfo Agustín García — desarrollador, DM de D&D y constructor de herramientas web."
      };
      m.content = d[currentPage] || d.home;
    }
  }

  // ── Events ──
  function bindEvents() {
    var pl = document.querySelectorAll("[data-page]");
    for (var i = 0; i < pl.length; i++) {
      pl[i].addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        navigateTo(this.getAttribute("data-page"));
      });
    }

    var mt = document.getElementById("mobile-toggle");
    if (mt) {
      mt.addEventListener("click", function () {
        mobileMenuOpen = !mobileMenuOpen;
        var m = document.getElementById("mobile-menu");
        if (m) m.classList.toggle("open", mobileMenuOpen);
        this.textContent = mobileMenuOpen ? "[x]" : "[=]";
      });
    }

    window.onscroll = function () {
      var n = document.getElementById("navbar");
      if (n) {
        if (window.scrollY > 20) n.style.background = "rgba(5,10,5,0.97)";
        else n.style.background = "rgba(5,10,5,0.92)";
      }
    };
  }

  // ── Init ──
  document.addEventListener("DOMContentLoaded", function () {
    currentPage = getPageFromHash();
    render();
  });

})();
