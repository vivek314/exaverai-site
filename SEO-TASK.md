# Task: Make `automate-flow.html` SEO-ready for exaverai.com (brand: Exaver AI)

You are editing a single static marketing page (`automate-flow.html`) for the AI agency **Exaver AI**, domain **https://exaverai.com/**. The design and copy are good — **do not redesign anything**. Make the changes below and nothing else. Preserve all existing Tailwind classes, animations, and layout.

After each step, keep the file valid HTML and verify the page still renders identically.

---

## STEP 0 — Decision flag (read before STEP 1)

The file is branded **"Automate Flow"** throughout, but the real brand is **Exaver AI**. STEP 1 renames it. If "Automate Flow" was intended to be a *product name under the Exaver AI agency*, skip STEP 1 and only do STEP 2 onward. Default assumption: full rename to **Exaver AI**.

---

## STEP 1 — Rename brand "Automate Flow" → "Exaver AI"

Replace every visible occurrence of the brand. Known locations (verify by searching the whole file, do not rely only on these line numbers):

- Nav brand text (~line 57): `Automate Flow` → `Exaver AI`
- Hero badge (~line 89): `Automate Flow` → `Exaver AI`
- Footer brand text (~line 272): `Automate Flow` → `Exaver AI`
- Copyright (~line 304): `© 2026 Automate Flow. All rights reserved.` → `© 2026 Exaver AI. All rights reserved.`
- Footer description (~line 274) and any other prose mentioning the brand.

**Logo mark:** the single-letter mark currently shows `A` (lines ~56, ~207, ~271). Change each to `X`. (Judgment call — `X` reads as the strongest mark for "Exaver." If preferred, use `E` instead. Be consistent across all three.)

**Founder block (~lines 207–208):** currently "Hey, it's Alex / Founder." Leave the name as-is unless told otherwise — flag to the user that this real name may need updating.

---

## STEP 2 — Fix the dead email address

`hello@automateflow.example` is a non-functional placeholder (`.example` is a reserved TLD). Replace **all** occurrences with `hello@exaverai.com`:

- Footer mailto link and visible text (~lines 298–299)
- The form's mailto handler in the script (~line 419): `mailto:hello@automateflow.example` → `mailto:hello@exaverai.com`

---

## STEP 3 — Replace the `<head>` meta block

Replace the existing `<title>` and `<meta name="description">` (currently lines 6–7) with the block below. Insert all of it in place of those two lines, keeping the surrounding `<head>` contents (charset, viewport, Tailwind, fonts, styles) intact.

```html
<title>Exaver AI — AI Automation Systems for Business</title>
<meta name="description" content="Exaver AI builds custom AI automation systems — autonomous agents, workflow automation, and AI voice agents — that cut costs and scale operations for established businesses." />
<link rel="canonical" href="https://exaverai.com/" />
<meta name="robots" content="index, follow" />
<meta name="theme-color" content="#9333EA" />

<!-- Open Graph (LinkedIn, Facebook, Slack, iMessage) -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Exaver AI" />
<meta property="og:title" content="Exaver AI — AI Automation Systems for Business" />
<meta property="og:description" content="Custom AI systems — autonomous agents, workflow automation, and AI voice agents — built to cut costs and scale fast." />
<meta property="og:url" content="https://exaverai.com/" />
<meta property="og:image" content="https://exaverai.com/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Exaver AI — AI Automation Systems for Business" />
<meta name="twitter:description" content="Custom AI systems that cut costs, streamline ops, and scale fast." />
<meta name="twitter:image" content="https://exaverai.com/og-image.png" />

<!-- Favicon -->
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<!-- Structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Exaver AI",
  "url": "https://exaverai.com/",
  "description": "Custom AI automation systems for established businesses — autonomous agents, workflow automation, and AI voice agents.",
  "email": "hello@exaverai.com",
  "serviceType": ["AI Automation", "Autonomous AI Agents", "Workflow Automation", "AI Voice Agents", "AI Consulting"],
  "areaServed": "Worldwide"
}
</script>
```

---

## STEP 4 — Create `robots.txt` (domain root)

```
User-agent: *
Allow: /
Sitemap: https://exaverai.com/sitemap.xml
```

## STEP 5 — Create `sitemap.xml` (domain root)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/2000/sitemap/0.9">
  <url>
    <loc>https://exaverai.com/</loc>
    <lastmod>2026-06-24</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## STEP 6 — Add a JS-content fallback for crawlers (crawlability)

The services, testimonials, logos, and about-tiles are injected by JavaScript into empty `data-*` divs (script at the bottom, ~lines 309–377). Headings are static, but the keyword-rich body text is JS-only — weak for Bing, social scrapers, and LLM crawlers.

Add a `<noscript>` block immediately after the closing `</section>` of the Services section (~line 129) containing the four service names and descriptions as plain static HTML, so the text exists in raw source. Use the `services` array data from the script (~lines 310–314). Example shape:

```html
<noscript>
  <h3>Autonomous AI Agents</h3>
  <p>The agentic era has begun...</p>
  <!-- repeat for Workflow Automations, AI Voice Agents, Social Media AI Systems -->
</noscript>
```

Do **not** remove or alter the JS rendering — this is additive only. (Better long-term fix, optional, ask the user first: render the first copy of each marquee statically and keep the duplicated copy in JS for the animation.)

---

## STEP 7 — Production performance (flag, do not silently change)

Line 8 loads Tailwind from `https://cdn.tailwindcss.com`, which compiles Tailwind in-browser at runtime. It is explicitly **not for production** — it blocks render and hurts Largest Contentful Paint, a Core Web Vitals ranking signal.

**Do not change this automatically.** Instead, report to the user that the production fix is: build Tailwind to a static minified CSS file via the Tailwind CLI and replace line 8 with `<link rel="stylesheet" href="/styles.css">`. This requires a build step and a `tailwind.config.js` mirroring the inline config (lines 13–23). Implement only if the user confirms they have a build pipeline.

---

## Assets the user must produce (cannot be generated here — list them in your summary)

- `/og-image.png` — 1200×630. Without it, every shared link (LinkedIn, Slack, WhatsApp, X) renders blank. Highest-visibility item.
- `/favicon.ico`, `/favicon.svg`, `/apple-touch-icon.png`.

## Acceptance criteria

- [ ] No occurrence of "Automate Flow" remains (if STEP 1 applied).
- [ ] No occurrence of `automateflow.example` remains anywhere, including the script.
- [ ] `<head>` contains canonical, OG, Twitter, favicon, and JSON-LD blocks; JSON-LD is valid (validate at validator.schema.org).
- [ ] Exactly one `<h1>` on the page (hero, ~line 90); contact section stays `<h2>`.
- [ ] `robots.txt` and `sitemap.xml` exist at root.
- [ ] `<noscript>` fallback present with all four service descriptions.
- [ ] Page renders visually identical to before. Run it and confirm no console errors.
- [ ] Report the Tailwind-CDN and asset items to the user as follow-ups.
