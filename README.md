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
├── robots.txt                  ← reglas para crawlers
├── sitemap.xml                 ← lista de URLs para Google
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

## SEO

### `robots.txt` y `sitemap.xml`

Le dicen a Google qué indexar y dónde encontrarlo. Como el sitio es SPA (una sola URL real con hash routes), el sitemap lista solo la home.

**Después del primer deploy, registrar en Google Search Console**:
1. Ir a [search.google.com/search-console](https://search.google.com/search-console)
2. Agregar property `https://rcwe.ragustingarcia.com/`
3. Verificar (lo más fácil: subir un meta tag al `<head>` de `index.html`)
4. En "Sitemaps", agregar `sitemap.xml`

### Otros elementos SEO

- **JSON-LD** con `isPartOf` apuntando al portfolio principal (señal explícita a Google de que es parte del mismo ecosistema)
- **Open Graph** (`og:image` 1200×630) + Twitter Card
- **`canonical`** apuntando a `https://rcwe.ragustingarcia.com/`
- **`<noscript>`** con lista de proyectos para crawlers sin JS

## Cache busting

Los `<script>` y `<link>` tienen un parámetro `?v=YYYY.MM.DDx` para forzar al browser a re-bajar archivos cuando hay cambios:

```html
<link rel="stylesheet" href="assets/css/styles.css?v=2026.05.04a" />
<script src="content/site-data.js?v=2026.05.04a"></script>
<script src="assets/js/app.js?v=2026.05.04a"></script>
```

**Cuando hagas cambios significativos en JS o CSS**, "bumpeá" la versión en `index.html` (ej. de `2026.05.04a` a `2026.05.04b`). Eso garantiza que los visitantes existentes no queden con caché vieja.

## i18n — cómo funciona

- Idioma persiste en `localStorage` (clave `rcwe-lang`)
- Sincroniza con la principal vía la clave compartida `rag-lang`
- Cambia dinámicamente `<html lang>`, `<title>` y `meta description`

## Cross-linking con el portfolio principal

- **Navbar (izquierda del brand)**: link `← portfolio` → `ragustingarcia.com`
- **Footer**: link `portfolio` antes de los demás
- **JSON-LD**: este sitio se declara `isPartOf` del portfolio principal
- **About**: la primera link es "Portfolio principal"

---

## También

Parte de **[La Orden del Tabernero Errante](https://www.lodte.com.ar/)** — campañas y crónicas de D&D.

---

⚠️ **No modificar ni eliminar `CNAME`** — conecta el repo con `rcwe.ragustingarcia.com` vía Cloudflare.

*Hecho con más entusiasmo que presupuesto.*
