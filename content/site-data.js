/*
 * ============================================================
 *  Rodo's Crappy Web Empire — Site Data
 * ============================================================
 *
 *  Todos los datos editables del portfolio están acá.
 *  Para agregar un proyecto, copiá un bloque en "projects".
 *  NO hace falta tocar index.html ni CSS/JS.
 *
 * ============================================================
 */

var SITE_DATA = {

  config: {
    name: "Rodo's Crappy Web Empire",
    shortName: "RCWE",
    domain: "rodoscrappywebempire.com",
    owner: "Rodolfo Agustín García",
    github: "https://github.com/ragustingarcia",
    githubOrg: "https://github.com/RodosCrappyWebEmpire",
    githubHandle: "ragustingarcia",
    tagline: "Una colección de aplicaciones web hechas con más entusiasmo que presupuesto.",
    description: "Portfolio de proyectos web, herramientas, experimentos y cosas que probablemente deberían haber sido un email.",
    contactEmail: "",
  },

  // ──────────────────────────────────────────
  // Proyectos
  // Para agregar uno nuevo, copiá un bloque y completá.
  //   status: "live" | "beta" | "wip" | "archived"
  //   tags: array de tecnologías o categorías
  // ──────────────────────────────────────────
  projects: [
    {
      id: 1,
      name: "Mareas Argentinas",
      url: "https://mareas-argentinas.netlify.app/",
      repo: "",
      desc: "Nivel del Río de la Plata en tiempo real. Datos de mareas, alertas personalizadas, calendario de regatas 2026, integración con Telegram y canal push. PWA instalable.",
      tags: ["PWA", "API", "Tiempo real", "Telegram"],
      status: "live",
      featured: true,
    },
    // ── Agregá más proyectos copiando este bloque: ──
    // {
    //   id: 2,
    //   name: "Nombre del proyecto",
    //   url: "https://...",
    //   repo: "https://github.com/...",
    //   desc: "Descripción del proyecto...",
    //   tags: ["Tag1", "Tag2"],
    //   status: "live",
    //   featured: false,
    // },
  ],

  // ──────────────────────────────────────────
  // Secciones "Acerca de"
  // ──────────────────────────────────────────
  about: {
    bio: "Desarrollador, DM de D&D, y constructor compulsivo de herramientas web que nadie pidió pero que aparentemente necesitaban existir. Parte de La Orden del Tabernero Errante (LODTE).",
    links: [
      { label: "GitHub", url: "https://github.com/ragustingarcia", icon: ">" },
      { label: "GitHub Org", url: "https://github.com/RodosCrappyWebEmpire", icon: ">" },
      { label: "LODTE", url: "https://www.lodte.com.ar/", icon: ">" },
    ],
  },

};
