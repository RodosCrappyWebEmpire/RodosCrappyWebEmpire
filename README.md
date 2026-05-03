# Rodo's Crappy Web Empire

> Una colección de aplicaciones web hechas con más entusiasmo que presupuesto.

---

🌐 **[rcwe.ragustingarcia.com](https://rcwe.ragustingarcia.com/)**
🔗 Portfolio principal: **[ragustingarcia.com](https://ragustingarcia.com/)**

---

## Estructura

```
RodosCrappyWebEmpire/
├── index.html
├── 404.html
├── CNAME                       ← NO MODIFICAR
├── site.webmanifest            ← PWA manifest
├── content/
│   └── site-data.js            ← ✏️ Datos editables
├── assets/
│   ├── css/styles.css
│   ├── js/app.js               ← motor + i18n
│   ├── og-image.png            ← preview al compartir (1200×630)
│   └── favicon/                ← favicons + iconos PWA
└── README.md
```

## Cómo editar contenido

Todo lo editable vive en **`content/site-data.js`**.

### Strings bilingües

```js
tagline: {
  es: "Una colección de aplicaciones web hechas con más entusiasmo que presupuesto.",
  en: "A collection of web apps made with more enthusiasm than budget.",
}
```

### Agregar un proyecto

```js
{
  id: 4,
  name: "Nombre del proyecto",
  url: "https://...",
  repo: "https://github.com/...",
  desc: { es: "Descripción ES", en: "Description EN" },
  tags: ["Tag1", "Tag2"],
  status: "live",     // live | beta | wip | archived
  featured: false,    // true → destacado en home
},
```

## Proyectos del imperio

Tools del ecosistema **[LODTE — La Orden del Tabernero Errante](https://www.lodte.com.ar/)**:

| Proyecto | Descripción | Link |
| --- | --- | --- |
| 🗝 **El Códice del Tabernero** | Cifrado polialfabético para D&D | [elcodicedeltabernero.netlify.app](https://elcodicedeltabernero.netlify.app/) |
| 🎲 **Los Dados del Tabernero** | Lanzador de dados D&D 5e | [losdadosdeltabernero.netlify.app](https://losdadosdeltabernero.netlify.app/) |
| 🗺️ **Sala de Mapas** | Mapas compartidos en tiempo real | [lodte-sala-de-mapas.onrender.com](https://lodte-sala-de-mapas.onrender.com/) |

## Stack

HTML5 + CSS3 + JS vanilla · GitHub Pages · Cloudflare DNS · Sin frameworks · Sin build step · Estética terminal retro

## Imágenes / branding

| Archivo | Uso |
| --- | --- |
| `assets/favicon/favicon.ico` y PNGs | favicons del browser |
| `assets/favicon/apple-touch-icon.png` | iOS Safari |
| `assets/favicon/icon-192.png` / `icon-512.png` | iconos PWA |
| `assets/og-image.png` | preview al compartir en WhatsApp / LinkedIn / Twitter (1200×630) |

## i18n — cómo funciona

- Idioma persiste en `localStorage` (clave `rcwe-lang`)
- Sincroniza con la principal vía la clave compartida `rag-lang`
- Cambia dinámicamente `<html lang>`, `<title>` y `meta description`

## Cross-linking con el portfolio principal

- **Navbar (izquierda del brand)**: link `← portfolio` → `ragustingarcia.com`
- **Footer**: link `portfolio` antes de los demás
- **JSON-LD**: este sitio se declara `isPartOf` del portfolio principal
- **About**: la primera link es "Portfolio principal"

## SEO

- `canonical` apuntando a `https://rcwe.ragustingarcia.com/`
- Open Graph (`og:image` 1200×630) + Twitter Card (`summary_large_image`)
- `<noscript>` con lista de proyectos para crawlers sin JS

### Validar previews al compartir

- **Facebook / WhatsApp**: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/) — "Scrape Again" para refrescar cache
- **LinkedIn**: [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/)
- **Twitter / X**: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)

WhatsApp puede tardar 24–48hs en limpiar el cache. Para forzar refresh inmediato, agregá `?v=2` al final de la URL al pegarla.

---

## También

Parte de **[La Orden del Tabernero Errante](https://www.lodte.com.ar/)** — campañas y crónicas de D&D.

---

⚠️ **No modificar ni eliminar `CNAME`** — conecta el repo con `rcwe.ragustingarcia.com` vía Cloudflare.

*Hecho con más entusiasmo que presupuesto.*
