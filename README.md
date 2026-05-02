# Rodo's Crappy Web Empire

> Una colección de aplicaciones web hechas con más entusiasmo que presupuesto.

---

## Qué es esto

Portfolio personal de **Rodolfo Agustín García** — un catálogo de proyectos web, herramientas, experimentos y cosas que probablemente deberían haber sido un email.

🌐 **[www.rodoscrappywebempire.com](https://www.rodoscrappywebempire.com/)**

---

## Estructura

```
rcwe/
├── index.html              ← Página principal
├── 404.html                ← Redirección para GitHub Pages
├── CNAME                   ← Dominio personalizado (NO MODIFICAR)
├── content/
│   └── site-data.js        ← ✏️ TODOS los datos editables
├── assets/
│   ├── css/styles.css      ← Estilos (terminal retro)
│   └── js/app.js           ← Motor del sitio
└── README.md
```

---

## Cómo agregar un proyecto

Abrí `content/site-data.js`, buscá `projects` y agregá un bloque:

```javascript
{
  id: 2,
  name: "Nombre del proyecto",
  url: "https://...",
  repo: "https://github.com/...",
  desc: "Descripción del proyecto...",
  tags: ["Tag1", "Tag2"],
  status: "live",    // live | beta | wip | archived
  featured: false,
},
```

Pusheá y listo.

---

## Proyectos

| Proyecto | Descripción | Link |
|----------|-------------|------|
| 🌊 **Mareas Argentinas** | Nivel del Río de la Plata en tiempo real | [mareas-argentinas.netlify.app](https://mareas-argentinas.netlify.app/) |

---

## Stack

- HTML5 + CSS3 + JavaScript vanilla
- GitHub Pages (hosting gratuito)
- Cloudflare (DNS)
- Cero frameworks, cero build steps
- Estética: terminal retro

---

## Importante

> ⚠️ **NO MODIFICAR NI ELIMINAR el archivo `CNAME`.**

Conecta el repo con el dominio personalizado via Cloudflare.

---

## También

Parte de **[La Orden del Tabernero Errante](https://www.lodte.com.ar/)** — campañas, crónicas y mundos compartidos de Calabozos y Dragones.

---

*Hecho con más entusiasmo que presupuesto.*
