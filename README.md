# ~/k8s-docs

Kubernetes documentation (Bahasa Indonesia) — a single-page app built with HTML, vanilla JavaScript, and Tailwind CSS.

## Structure

- **SPA** with hash-based routing (`#/pendahuluan`, `#/dasar-kubernetes/1-node`)
- **Sidebar** — full navigation tree with section headers, numbered items, and fragment sub-items
- **Bottom nav** — previous/center/next navigation between pages
- **20 content pages** ported from the original Angular app

## Sections

| Section | Pages |
|---|---|
| Pendahuluan | 1 |
| Apa itu Kubernetes? | 1 |
| Menyiapkan Kubernetes | 7 (index + 6 sub-pages) |
| Dasar Kubernetes | 10 (index + 9 sub-pages) |

## Running Locally

Open `index.html` directly or serve with any static server:

```bash
npx live-server
```

## Deployment

Deployed via GitHub Pages at [fahadh4ilyas.github.io/kubernetes-documentation](https://fahadh4ilyas.github.io/kubernetes-documentation).

---

> **Disclaimer:** This documentation site was built with the assistance of [DeepSeek](https://deepseek.com), an AI coding companion.
