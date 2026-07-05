# ~/k8s-docs

Kubernetes documentation in Bahasa Indonesia — a single-page app built with HTML, vanilla JavaScript, and Tailwind CSS. Deployed via GitHub Pages at [fahadh.dev/kubernetes-documentation](https://fahadh.dev/kubernetes-documentation).

## Structure

- **SPA** with clean-path routing (`/menyiapkan-kubernetes/1-memasang-kubernetes`) + hash fallback
- **20 content pages** — Typora-exported HTML, CodeMirror cleaned at runtime
- **Sidebar** — 33-item nav tree with sections, sub-pages, and fragment links
- **Bottom nav** — previous/center/next sequential navigation
- **Mobile** — swipe gestures, overlay sidebar, auto-close on link click

## Sections

| Section | Pages |
|---|---|
| Pendahuluan | 1 |
| Apa itu Kubernetes? | 1 |
| Menyiapkan Kubernetes | 7 (index + 6 sub-pages) |
| Dasar Kubernetes | 10 (index + 9 sub-pages) |

## How Clean-Path Routing Works

The site uses path-based URLs (`/kubernetes-documentation/pods`) instead of hash fragments for SEO. Since GitHub Pages is a static host:

1. **Direct visit hits 404** → `docs/404.html` redirects to `/#/path` via JavaScript
2. **Router loads page** from hash, then converts URL to clean path via `history.replaceState`
3. **Internal navigation** uses `pushState` — no page reload, no server request

## Features

- **Contact FAB** — floating button with modal form, Turnstile CAPTCHA, honeypot spam protection
- **Dark/light theme** — full overrides for sidebar, content, code blocks, tables, TOC
- **Fragment scrolling** — sidebar sub-item clicks scroll to headings (ConfigMap, Secret, etc.)
- **Responsive** — collapsible desktop sidebar, mobile overlay with swipe gestures

## Architecture

| File | Purpose |
|---|---|
| `js/app.js` | Router (hash + pathname), sidebar, bottom nav, content loader, mobile toggle |
| `js/data.js` | Navigation tree (NAVS, SIDENAVS, BOTTOMLINKS), PAGE_MAP, PAGE_META |
| `js/theme.js` | Dark/light toggle, Turnstile re-render on theme change |

## SEO

- `PAGE_META` in `data.js` provides per-page `<title>`, `<meta name="description">`, and `<meta name="keywords">`
- All 20 pages listed in the main site's `sitemap.xml`
- Clean-path URLs are indexable by Google (no hash fragments)

## CSS

Tailwind is pre-built into `docs/css/tailwind.min.css` (scanning all HTML/JS content). Custom styles live in `docs/css/theme.css` (content styling, sidebar, light theme, mobile). To rebuild:

```bash
npx tailwindcss -i tailwind.css -o docs/css/tailwind.min.css --minify
```

## Running Locally

```bash
npx live-server docs/
```

## Deployment

GitHub Pages from `docs/` on `master` branch. Served at `fahadh.dev/kubernetes-documentation/` via the main site's custom domain.

---

> **Disclaimer:** Built with assistance from [DeepSeek](https://deepseek.com).
