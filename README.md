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
├── index.html                  ← shell + meta + noscript
├── 404.html                    ← redirect para GitHub Pages
├── CNAME                       ← NO MODIFICAR (rcwe.ragustingarcia.com)
├── content/
│   └── site-data.js            ← ✏️ TODOS los datos editables
├── assets/
│   ├── css/styles.css          ← terminal verde fósforo + ámbar
│   └── js/app.js               ← motor + i18n
└── README.md
```

## Cómo editar contenido

Todo lo editable vive en **`content/site-data.js`**. No hace falta tocar HTML, CSS ni JS.

### Strings bilingües

Cada string visible se escribe como `{ es: "...", en: "..." }`. El motor (`app.js`) renderiza según el idioma activo (toggle `ES / EN` en navbar). Los strings técnicos (URLs, tags, nombres) se escriben planos.

```js
tagline: {
  es: "Una colección de aplicaciones web hechas con más entusiasmo que presupuesto.",
  en: "A collection of web apps made with more enthusiasm than budget.",
}
```

### Agregar un proyecto

Copiá un bloque dentro de `projects`:

```js
{
  id: 4,
  name: "Nombre del proyecto",
  url: "https://...",
  repo: "https://github.com/...",
  desc: { es: "Descripción ES...", en: "Description EN..." },
  tags: ["Tag1", "Tag2"],
  status: "live",     // live | beta | wip | archived
  featured: false,    // true → aparece destacado en home
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

## i18n — cómo funciona

- Idioma se persiste en `localStorage` (clave `rcwe-lang`)
- Sincroniza con la principal: cuando el usuario cambia idioma acá, también escribe `rag-lang` (la clave que usa `ragustingarcia.com`). Si después navega a la principal, mantiene su elección.
- Detección inicial: `localStorage` → idioma del browser → fallback `es`
- Cambia dinámicamente `<html lang>`, `<title>` y `meta description`

## Cross-linking con el portfolio principal

- **Navbar (izquierda del brand)**: link `← portfolio` que vuelve a `ragustingarcia.com`
- **Footer**: link `portfolio` antes de los demás
- **JSON-LD**: este sitio se declara `isPartOf` del portfolio principal (señal explícita a Google)
- **About**: la primera link es "Portfolio principal"

---

## También

Parte de **[La Orden del Tabernero Errante](https://www.lodte.com.ar/)** — campañas, crónicas y mundos compartidos de Calabozos y Dragones.

---

⚠️ **No modificar ni eliminar `CNAME`** — conecta el repo con `rcwe.ragustingarcia.com` vía Cloudflare.

*Hecho con más entusiasmo que presupuesto.*
