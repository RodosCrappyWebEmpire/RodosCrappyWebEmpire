/*
 * ============================================================
 *  Rodo's Crappy Web Empire — Site Data
 * ============================================================
 *
 *  Strings bilingües:  { es: "...", en: "..." }
 *  Strings técnicos (URLs, tags, names): string plano
 *
 *  status: "live" | "beta" | "wip" | "archived"
 *  featured: true → aparece en home
 * ============================================================
 */

var SITE_DATA = {

  config: {
    name: "Rodo's Crappy Web Empire",
    shortName: "RCWE",
    domain: "rcwe.ragustingarcia.com",
    owner: "Rodolfo Agustín García",
    portfolioUrl: "https://ragustingarcia.com/",
    github: "https://github.com/ragustingarcia",
    githubOrg: "https://github.com/RodosCrappyWebEmpire",
    githubHandle: "ragustingarcia",
    tagline: {
      es: "Una colección de aplicaciones web hechas con más entusiasmo que presupuesto.",
      en: "A collection of web apps made with more enthusiasm than budget.",
    },
    description: {
      es: "Portfolio de proyectos web, herramientas y experimentos del lado caótico. Todo lo que construyo cuando nadie me pide nada serio.",
      en: "Portfolio of web projects, tools and experiments from the chaotic side. Everything I build when nobody asks me for anything serious.",
    },
    contactEmail: "",
  },

  // ──────────────────────────────────────────
  // Proyectos del imperio
  // ──────────────────────────────────────────
  projects: [
    {
      id: 1,
      name: "El Códice del Tabernero",
      url: "https://elcodicedeltabernero.netlify.app/",
      repo: "",
      desc: {
        es: "Criptógrafo polialfabético estilo Wheatstone para sesiones de D&D. Ruedas rotantes, clave embebida opcional, historial persistente y share sheet. PWA offline. 94 tests automáticos verifican la biyección del motor criptográfico.",
        en: "Wheatstone-style polyalphabetic cipher for D&D sessions. Rotating wheels, optional embedded key, persistent history and share sheet. Offline PWA. 94 automated tests verify the bijection of the crypto engine.",
      },
      tags: ["PWA", "Vanilla JS", "Crypto", "D&D"],
      status: "live",
      featured: true,
    },
    {
      id: 2,
      name: "Los Dados del Tabernero",
      url: "https://losdadosdeltabernero.netlify.app/",
      repo: "",
      desc: {
        es: "Lanzador de dados D&D 5e con armado de mano (d4–d100), ventaja/desventaja visual, detección de crítico y pifia, tiradas guardadas y vibración háptica. PWA instalable, estética pixel art medieval.",
        en: "D&D 5e dice roller with hand building (d4–d100), visual advantage/disadvantage, crit and fumble detection, saved rolls and haptic feedback. Installable PWA, medieval pixel art aesthetic.",
      },
      tags: ["PWA", "Vanilla JS", "D&D", "Pixel Art"],
      status: "live",
      featured: true,
    },
    {
      id: 3,
      name: "Sala de Mapas",
      url: "https://lodte-sala-de-mapas.onrender.com/",
      repo: "",
      desc: {
        es: "Mapas compartidos en tiempo real para D&D. El DM controla fog of war, POIs y tokens; los jugadores se conectan con un código de 4 letras desde cualquier dispositivo. WebSockets, MongoDB y Cloudinary.",
        en: "Real-time shared maps for D&D. DM controls fog of war, POIs and tokens; players connect with a 4-letter room code from any device. WebSockets, MongoDB and Cloudinary.",
      },
      tags: ["Flask", "Socket.IO", "MongoDB", "Cloudinary", "D&D"],
      status: "live",
      featured: true,
    },
    {
      id: 4,
      name: "CAPSULE",
      url: "https://rcwe-capsule.netlify.app/",
      repo: "",
      desc: {
        es: "Cartas cifradas que duermen hasta su fecha de apertura. AES-256-GCM en el navegador, archivo .capsule descargable, y un servidor que custodia solo el fragmento temporal de la clave (mínimo 3 años). Tres piezas separadas: mensaje + frase secreta + fragmento del servidor — nada se descifra hasta que el tiempo lo permite. 600.000 iteraciones PBKDF2, modo descartable opcional y soporte para keyfile en USB.",
        en: "Encrypted letters that sleep until their opening date. AES-256-GCM in the browser, downloadable .capsule file, and a server that custodies only the temporal fragment of the key (minimum 3 years). Three separate pieces: message + secret phrase + server fragment — nothing decrypts until time allows. 600,000 PBKDF2 iterations, optional one-shot mode and USB keyfile support.",
      },
      tags: ["Crypto", "AES-256", "Time-lock", "Vanilla JS"],
      status: "live",
      featured: true,
    },
    {
      id: 5,
      name: "El Tabernero",
      url: "",
      repo: "",
      desc: {
        es: "Registrador y seguimiento de campañas de D&D 5e: personajes, sesiones y crónicas desde una UI local. Backend FastAPI + frontend vanilla. Graba el audio de la sesión para El Caldero. Corre en tu máquina, no requiere deploy.",
        en: "D&D 5e campaign logger and tracker: characters, sessions and chronicles from a local UI. FastAPI backend + vanilla frontend. Records session audio for El Caldero. Runs locally, no deploy required.",
      },
      tags: ["FastAPI", "Vanilla JS", "D&D", "Local"],
      status: "live",
      featured: false,
    },
    {
      id: 6,
      name: "El Caldero del Tabernero",
      url: "",
      repo: "",
      desc: {
        es: "Toma el audio de tus sesiones de D&D (grabado por El Tabernero) y lo transmuta en relato: transcribe, diariza (separa voces) y reescribe en prosa con IA local. Pensado para sesiones de hasta ~4 horas mediante map-reduce.",
        en: "Takes the audio from your D&D sessions (recorded by El Tabernero) and transmutes it into narrative: transcribes, diarizes (separates voices) and rewrites it as prose with local AI. Built for sessions up to ~4 hours via map-reduce.",
      },
      tags: ["IA local", "Transcripción", "Diarización", "D&D", "Python"],
      status: "live",
      featured: false,
    },
    {
      id: 7,
      name: "El Escriba",
      url: "",
      repo: "",
      desc: {
        es: "Afinador de instrumentos con detección de pitch en tiempo real y visualizador de audio. Toma el micrófono, calcula la frecuencia fundamental y muestra qué nota estás tocando y cuánto te desviás. Corre entero en el navegador, sin instalar nada.",
        en: "Instrument tuner with real-time pitch detection and an audio visualizer. It takes the microphone, works out the fundamental frequency and shows which note you're playing and how far off you are. Runs entirely in the browser, nothing to install.",
      },
      tags: ["Web Audio API", "Pitch detection", "Vanilla JS", "Música"],
      status: "live",
      featured: false,
    },
    // ── Agregá más proyectos copiando este bloque: ──
    // {
    //   id: 4,
    //   name: "Nombre",
    //   url: "https://...",
    //   repo: "https://github.com/...",
    //   desc: { es: "...", en: "..." },
    //   tags: ["Tag1", "Tag2"],
    //   status: "live",
    //   featured: false,
    // },
  ],

  // ──────────────────────────────────────────
  // Acerca de
  // ──────────────────────────────────────────
  about: {
    bio: {
      es: "Desarrollador, DM de D&D y constructor compulsivo de herramientas web que nadie pidió pero que aparentemente necesitaban existir. Parte de La Orden del Tabernero Errante (LODTE). Para los proyectos serios, ver el portfolio principal.",
      en: "Developer, D&D DM and compulsive builder of web tools nobody asked for but apparently needed to exist. Part of La Orden del Tabernero Errante (LODTE). For serious projects, see the main portfolio.",
    },
    links: [
      { label: "Portfolio principal", url: "https://ragustingarcia.com/", icon: ">" },
      { label: "GitHub", url: "https://github.com/ragustingarcia", icon: ">" },
      { label: "GitHub Org (RCWE)", url: "https://github.com/RodosCrappyWebEmpire", icon: ">" },
      { label: "LODTE", url: "https://www.lodte.com.ar/", icon: ">" },
    ],
  },

  // ──────────────────────────────────────────
  // Labels de UI (bilingüe)
  // ──────────────────────────────────────────
  ui: {
    nav: {
      back:     { es: "← portfolio", en: "← portfolio" },
      home:     { es: "~/home",      en: "~/home" },
      projects: { es: "~/projects",  en: "~/projects" },
      about:    { es: "~/about",     en: "~/about" },
    },
    sections: {
      featuredTitle: { es: "Proyectos destacados", en: "Featured projects" },
      featuredSub:   { es: "Lo más reciente del imperio", en: "Latest from the empire" },
      allTitle:      { es: "Proyectos",            en: "Projects" },
      allSub: {
        es: "todos los proyectos del imperio",
        en: "all projects in the empire",
      },
      aboutTitle:    { es: "Acerca de",            en: "About" },
      aboutSub:      { es: "whoami",               en: "whoami" },
    },
    buttons: {
      seeProjects: { es: "ver proyectos",   en: "see projects" },
      seeAll:      { es: "ver todos los proyectos", en: "see all projects" },
      open:        { es: "[abrir",          en: "[open" },
      repo:        { es: "[repo",           en: "[repo" },
      github:      { es: "github",          en: "github" },
    },
    misc: {
      project:     { es: "proyecto",  en: "project" },
      projects:    { es: "proyectos", en: "projects" },
      inEmpire:    { es: "en el imperio", en: "in the empire" },
      tagline:     { es: "Hecho con más entusiasmo que presupuesto.", en: "Made with more enthusiasm than budget." },
      readme:      { es: "$ cat README.md", en: "$ cat README.md" },
      whoami:      { es: "$ whoami",        en: "$ whoami" },
      links:       { es: "$ cat links.txt", en: "$ cat links.txt" },
      noProjects:  { es: "$ ls projects/",  en: "$ ls projects/" },
      noProjectsHint: { es: "No hay proyectos todavía.", en: "No projects yet." },
      footerNote: {
        es: "// Sitio estático: HTML + CSS + JS vanilla.\n// Hosteado en GitHub Pages, gratis, sin frameworks.\n// Porque a veces lo simple es suficiente.",
        en: "// Static site: HTML + CSS + vanilla JS.\n// Hosted on GitHub Pages, free, no frameworks.\n// Because sometimes simple is enough.",
      },
    },
    status: {
      live:     { es: "LIVE",      en: "LIVE" },
      beta:     { es: "BETA",      en: "BETA" },
      wip:      { es: "WIP",       en: "WIP" },
      archived: { es: "ARCHIVED",  en: "ARCHIVED" },
    },
  },

};
