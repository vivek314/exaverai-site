# Exaver AI — Consulting Website

Marketing site for **Exaver AI** — custom AI automation systems (autonomous agents,
workflow automation, and AI voice agents) for established businesses.

🔗 **Live:** [exaverai.com](https://exaverai.com) · [www.exaverai.com](https://www.exaverai.com)

---

## How to access the website

| Environment | URL |
|---|---|
| **Production** | https://exaverai.com |
| **Vercel** | https://exaverai.vercel.app |
| **Preview deploys** | A unique `*.vercel.app` URL is generated automatically for every push (see [Deployment](#deployment)) |

The production site is a **static HTML** build hosted on **Vercel**. There is no
login or backend to access it — just open the URL.

---

## Run it locally

The live site is plain static HTML/CSS — no build step required.

```bash
# Option A: open the file directly
#   open exaverai/index.html in your browser

# Option B: serve it (nicer for assets/clean URLs)
npx serve exaverai
# → http://localhost:3000
```

> The deployed site is the **`exaverai/`** folder. The Next.js app under `app/`
> is a legacy/experimental version and is **not** deployed (see `.vercelignore`).

---

## Repo structure

```
exaverai/            ← THE LIVE SITE (static HTML, assets, favicons) — deployed by Vercel
index.html           Older root copy of the landing page (not the deployed one)
app/                 Legacy Next.js 14 app (excluded from deploy via .vercelignore)
components/  lib/     Supporting code for the legacy Next.js app
cp-design-kit/       "Paper + Ink" CP Coach design kit (tokens, styles)
cp-tokens.css        Design tokens
robots.txt  sitemap.xml  og-image.png   SEO assets
vercel.json          Vercel config (framework: null → static)
.vercelignore        Files Vercel skips so it deploys only the static site
```

---

## Deployment

Hosted on **Vercel** — project **`exaverai`**, serving `exaverai.com` + `www.exaverai.com`.

This repo is connected to the Vercel project via **Git integration**, so:

- **Push to `main`** → automatic **production** deploy to `exaverai.com`
- **Push to any other branch / open a PR** → automatic **preview** deploy with its own URL

The Vercel project's **Root Directory** is set to `exaverai`, so only that folder is
built and served.

### Manual deploy (fallback)

```bash
cd exaverai
npx vercel --prod
```
