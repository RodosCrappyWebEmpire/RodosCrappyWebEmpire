/* ============================================================
 *  Rodo's Crappy Web Empire — Site Engine
 *  Vanilla JS · IIFE · No build · Bilingual (ES/EN)
 * ============================================================ */

(function () {
  "use strict";

  var currentPage = "home";
  var currentLang = "es";
  var mobileMenuOpen = false;
  var D = SITE_DATA;
  var VALID_PAGES = ["home", "projects", "about"];
  var STORAGE_KEY = "rcwe-lang";

  // ── i18n ──────────────────────────────────
  function detectInitialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") return saved;
      // Honor portfolio-wide preference if set on the parent domain
      var sharedSaved = localStorage.getItem("rag-lang");
      if (sharedSaved === "es" || sharedSaved === "en") return sharedSaved;
    } catch (e) {}
    var nav = ((navigator.language || navigator.userLanguage) || "es").toLowerCase();
    return nav.indexOf("en") === 0 ? "en" : "es";
  }
  function setLang(lang) {
    if (lang !== "es" && lang !== "en") return;
    if (lang === currentLang) return;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      localStorage.setItem("rag-lang", lang); // keep both sites in sync if user visits both
    } catch (e) {}
    document.documentElement.lang = lang;
    render();
  }
  function t(val) {
    if (val == null) return "";
    if (typeof val === "string") return val;
    if (typeof val === "object") {
      return val[currentLang] || val.es || val.en || "";
    }
    return String(val);
  }

  // ── Utils ──────────────────────────────────
  function esc(s) {
    if (!s) return "";
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  // ── Hash Router ───────────────────────────
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

  // ── Navbar ─────────────────────────────────
  function renderNavbar() {
    var navItems = [
      { p: "home",     l: D.ui.nav.home },
      { p: "projects", l: D.ui.nav.projects },
      { p: "about",    l: D.ui.nav.about }
    ];
    var dsk = "", mob = "";
    for (var i = 0; i < navItems.length; i++) {
      var a = currentPage === navItems[i].p ? " active" : "";
      var label = esc(t(navItems[i].l));
      dsk += '<a href="#' + navItems[i].p + '" class="navbar-link' + a + '" data-page="' + navItems[i].p + '">' + label + '</a>';
      mob += '<a href="#' + navItems[i].p + '" class="navbar-mobile-link' + a + '" data-page="' + navItems[i].p + '">' + label + '</a>';
    }

    var langToggle =
      '<div class="lang-toggle" role="group" aria-label="Language">' +
        '<button type="button" data-lang="es" class="' + (currentLang === "es" ? "active" : "") + '" aria-pressed="' + (currentLang === "es") + '">ES</button>' +
        '<button type="button" data-lang="en" class="' + (currentLang === "en" ? "active" : "") + '" aria-pressed="' + (currentLang === "en") + '">EN</button>' +
      '</div>';

    var backLink =
      '<a href="' + esc(D.config.portfolioUrl) + '" class="navbar-back" title="' + esc(t(D.ui.nav.back)) + '">' + esc(t(D.ui.nav.back)) + '</a>';

    return '<nav class="navbar" id="navbar" role="navigation">' +
      '<div class="navbar-inner">' +
        '<div class="navbar-left">' +
          backLink +
          '<a href="#" class="navbar-brand" data-page="home">RCWE://</a>' +
        '</div>' +
        '<div class="navbar-links">' + dsk + '</div>' +
        '<div class="navbar-right">' +
          langToggle +
          '<button class="navbar-mobile-btn" id="mobile-toggle" aria-label="Menu">[=]</button>' +
        '</div>' +
      '</div>' +
      '<div class="navbar-mobile-menu' + (mobileMenuOpen ? ' open' : '') + '" id="mobile-menu">' + mob + '</div>' +
    '</nav>';
  }

  // ── Footer ─────────────────────────────────
  function renderFooter() {
    return '<footer class="footer" role="contentinfo"><div class="container">' +
      '<p>' +
        '<a href="' + esc(D.config.portfolioUrl) + '" target="_blank" rel="noopener noreferrer">portfolio</a> · ' +
        '<a href="' + esc(D.config.githubOrg) + '" target="_blank" rel="noopener noreferrer">GitHub Org</a> · ' +
        '<a href="' + esc(D.config.github) + '" target="_blank" rel="noopener noreferrer">' + esc(D.config.githubHandle) + '</a> · ' +
        '<a href="https://www.lodte.com.ar/" target="_blank" rel="noopener noreferrer">LODTE</a>' +
      '</p>' +
      '<p style="margin-top:6px;">&copy; ' + new Date().getFullYear() + ' ' + esc(D.config.name) + ' · ' + esc(D.config.domain) + '</p>' +
      '<p style="margin-top:4px;font-size:10px;">' + esc(t(D.ui.misc.tagline)) + '</p>' +
    '</div></footer>';
  }

  // ── Section Header ─────────────────────────
  function sectionHeader(titleVal, subVal) {
    return '<div class="section-header">' +
      '<h2><span class="prompt">$</span> ' + esc(t(titleVal)) + '</h2>' +
      (subVal ? '<p class="subtitle">' + esc(t(subVal)) + '</p>' : '') +
    '</div>';
  }

  // ── Project Card ───────────────────────────
  function projectCard(p) {
    var statusKey = p.status || "wip";
    var statusClass = "status-" + statusKey;
    var statusLabel = t(D.ui.status[statusKey]) || statusKey.toUpperCase();

    var tags = "";
    if (p.tags) {
      for (var i = 0; i < p.tags.length; i++) {
        tags += '<span class="tag">' + esc(p.tags[i]) + '</span>';
      }
    }
    var links = "";
    if (p.url) links += '<a href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer" class="project-link">' + esc(t(D.ui.buttons.open)) + ' &#8599;]</a>';
    if (p.repo) links += '<a href="' + esc(p.repo) + '" target="_blank" rel="noopener noreferrer" class="project-link">' + esc(t(D.ui.buttons.repo)) + ' &#8599;]</a>';

    return '<div class="project-card' + (p.featured ? ' featured' : '') + '">' +
      '<span class="status-badge ' + statusClass + '">' + esc(statusLabel) + '</span>' +
      '<h3 class="project-name">' + esc(p.name) + '</h3>' +
      '<p class="project-desc">' + esc(t(p.desc)) + '</p>' +
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
      '<p class="hero-tagline">' + esc(t(D.config.tagline)) + '</p>' +
      '<div style="display:flex;gap:12px;flex-wrap:wrap;">' +
        '<a href="#projects" class="btn btn-primary" data-page="projects">' + esc(t(D.ui.buttons.seeProjects)) + '</a>' +
        '<a href="' + esc(D.config.githubOrg) + '" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">' + esc(t(D.ui.buttons.github)) + ' &#8599;</a>' +
      '</div>' +
    '</section>' +

    '<section class="section"><div class="container">' +
      sectionHeader(D.ui.sections.featuredTitle, D.ui.sections.featuredSub) +
      featured +
      '<div style="margin-top:20px;">' +
        '<a href="#projects" class="btn btn-ghost" data-page="projects" style="font-size:11px;">' + esc(t(D.ui.buttons.seeAll)) + ' &rarr;</a>' +
      '</div>' +
    '</div></section>' +

    '<section class="section"><div class="container">' +
      '<div style="border:1px solid var(--border);padding:24px;">' +
        '<p style="font-size:13px;color:var(--text-faint);margin-bottom:8px;font-family:var(--font-display);">' + esc(t(D.ui.misc.readme)) + '</p>' +
        '<p style="font-size:14px;color:var(--text-dim);line-height:1.8;">' + esc(t(D.config.description)) + '</p>' +
        '<p style="font-size:13px;color:var(--text-faint);margin-top:16px;">' + esc(t(D.about.bio)) + '</p>' +
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
        '<p style="font-size:13px;">' + esc(t(D.ui.misc.noProjects)) + '</p>' +
        '<p style="font-size:12px;margin-top:8px;">' + esc(t(D.ui.misc.noProjectsHint)) + '</p>' +
        '</div>';
    }
    var n = D.projects.length;
    var noun = t(n === 1 ? D.ui.misc.project : D.ui.misc.projects);
    var sub = n + " " + noun + " " + t(D.ui.misc.inEmpire);

    return '<div class="container" style="padding-top:80px;padding-bottom:60px;">' +
      sectionHeader(D.ui.sections.allTitle, sub) +
      cards +
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

    var footerLines = t(D.ui.misc.footerNote).split('\n').map(function (line) {
      return esc(line);
    }).join('<br>');

    return '<div class="container" style="padding-top:80px;padding-bottom:60px;">' +
      sectionHeader(D.ui.sections.aboutTitle, D.ui.sections.aboutSub) +

      '<div style="border:1px solid var(--border);padding:24px;margin-bottom:24px;">' +
        '<p style="font-size:13px;color:var(--text-faint);margin-bottom:12px;font-family:var(--font-display);">' + esc(t(D.ui.misc.whoami)) + '</p>' +
        '<p style="font-size:16px;color:var(--green);margin-bottom:8px;font-family:var(--font-display);font-weight:700;">' + esc(D.config.owner) + '</p>' +
        '<p class="about-bio">' + esc(t(D.about.bio)) + '</p>' +
      '</div>' +

      '<div style="border:1px solid var(--border);padding:24px;">' +
        '<p style="font-size:13px;color:var(--text-faint);margin-bottom:12px;font-family:var(--font-display);">' + esc(t(D.ui.misc.links)) + '</p>' +
        '<div class="about-links">' + links + '</div>' +
      '</div>' +

      '<div style="margin-top:32px;padding:20px;border:1px dashed var(--border);">' +
        '<p style="font-size:12px;color:var(--text-faint);line-height:1.8;">' + footerLines + '</p>' +
      '</div>' +
    '</div>';
  }

  // ── Render ─────────────────────────────────
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
    var titles = {
      es: { home: "Rodo's Crappy Web Empire",
            projects: "Proyectos | RCWE",
            about: "Acerca de | RCWE" },
      en: { home: "Rodo's Crappy Web Empire",
            projects: "Projects | RCWE",
            about: "About | RCWE" }
    };
    var descs = {
      es: { home: "Portfolio de proyectos web. Una colección hecha con más entusiasmo que presupuesto.",
            projects: "Proyectos del imperio: herramientas del ecosistema LODTE (Códice, Dados, Sala de Mapas, Tabernero, Caldero) y CAPSULE.",
            about: "Rodolfo Agustín García | desarrollador, DM de D&D y constructor de herramientas web." },
      en: { home: "Web project portfolio. A collection made with more enthusiasm than budget.",
            projects: "Empire projects: LODTE ecosystem tools (Códice, Dados, Sala de Mapas, Tabernero, Caldero) and CAPSULE.",
            about: "Rodolfo Agustín García | developer, D&D DM and builder of web tools." }
    };
    var lang = currentLang in titles ? currentLang : "es";
    document.title = titles[lang][currentPage] || titles[lang].home;
    var m = document.querySelector('meta[name="description"]');
    if (m) m.content = descs[lang][currentPage] || descs[lang].home;
  }

  // ── Events ─────────────────────────────────
  function bindEvents() {
    var pl = document.querySelectorAll("[data-page]");
    for (var i = 0; i < pl.length; i++) {
      pl[i].addEventListener("click", function (e) {
        e.preventDefault(); e.stopPropagation();
        navigateTo(this.getAttribute("data-page"));
      });
    }
    var ll = document.querySelectorAll("[data-lang]");
    for (var j = 0; j < ll.length; j++) {
      ll[j].addEventListener("click", function (e) {
        e.preventDefault(); e.stopPropagation();
        setLang(this.getAttribute("data-lang"));
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

  // ── Init ───────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    currentLang = detectInitialLang();
    document.documentElement.lang = currentLang;
    currentPage = getPageFromHash();
    render();
  });

})();
