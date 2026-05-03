# Rodo's Crappy Web Empire

> Una colección de aplicaciones web hechas con más entusiasmo que presupuesto.

---

## Qué es esto

Catálogo de proyectos del lado caótico — herramientas, experimentos y cosas que probablemente deberían haber sido un email. El B-side de mi portfolio principal.

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
│   └── favicon/                ← favicons + iconos PWA
│       ├── favicon.ico
│       ├── favicon-16.png
│       ├── favicon-32.png
│       ├── apple-touch-icon.png  (512×512)
│       ├── icon-192.png          (PWA)
│       └── icon-512.png          (PWA)
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

## Favicon e iconos PWA

El branding visual es el logo "RCWE://" en tipografía limpia verde fósforo. Archivos en `/assets/favicon/`:

| Archivo | Uso |
| --- | --- |
| `favicon.ico` | Multi-size (16, 32, 48) — fallback universal |
| `favicon-16.png` / `favicon-32.png` | Favicons modernos PNG |
| `apple-touch-icon.png` (512×512) | iOS Safari |
| `icon-192.png` / `icon-512.png` | Iconos PWA |

## i18n — cómo funciona

- Idioma se persiste en `localStorage` (clave `rcwe-lang`)
- Sincroniza con la principal: cuando cambia idioma acá, también escribe `rag-lang`. Si después navega a la principal, mantiene su elección.
- Detección inicial: `localStorage` → idioma del browser → fallback `es`
- Cambia dinámicamente `<html lang>`, `<title>` y `meta description`

## Cross-linking con el portfolio principal

- **Navbar (izquierda del brand)**: link `← portfolio` que vuelve a `ragustingarcia.com`
- **Footer**: link `portfolio` antes de los demás
- **JSON-LD**: este sitio se declara `isPartOf` del portfolio principal
- **About**: la primera link es "Portfolio principal"

---

## También

Parte de **[La Orden del Tabernero Errante](https://www.lodte.com.ar/)** — campañas, crónicas y mundos compartidos de Calabozos y Dragones.

---

⚠️ **No modificar ni eliminar `CNAME`** — conecta el repo con `rcwe.ragustingarcia.com` vía Cloudflare.

*Hecho con más entusiasmo que presupuesto.*
