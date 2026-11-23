# HOUSE Personal Property Management — website

Homepage only (stage 1). Static, multilingual site built with **Astro 5 + TypeScript**.

## Why Astro (not a React SPA)

Each language must be a real, indexable URL (`/en/`, `/fr/`, `/ru/`) with hreflang and fast first paint.
Astro renders every page to plain HTML at build time, ships almost no JavaScript (two tiny scripts:
mobile menu and reveal-on-scroll) and optimises images. React components can be added later if a page
ever needs real interactivity.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321/en/
npm run build     # type-check + static build into dist/
npm run preview   # serve dist/
```

## Structure

```
src/
  site.ts                 business facts (phone, email, founding year) — one place
  i18n/
    config.ts             locales, native names, draft/approved status
    routes.ts             shared slugs + service anchors, path helpers
    dictionaries/en.ts    base copy (source of truth, typed)
    dictionaries/fr.ts    must match the English shape (TypeScript enforces it)
    dictionaries/ru.ts
  styles/tokens.css       HOUSE Design System v1.4 tokens (colour, type, space, lines, motion)
  styles/global.css       reset, 12-col grid, reveal animations
  components/             Header, LangSwitch, Hero, Intro, Services, Approach, Story, ContactCta,
                          Footer + primitives (Photo, Button, ArrowLink, SectionLabel, Logo)
  layouts/BaseLayout.astro  SEO (canonical, hreflang, OG, JSON-LD), fonts, scripts
  pages/[lang]/index.astro  homepage for every locale
  pages/index.astro         root → visitor's language (fallback /en/)
```

## Content rules (agreed)

- Hero = Ori's original opening sentence, verbatim (EN). FR/RU hero, intro body and service names
  come from Ori's existing FR/RU pages.
- Services = exactly the four original categories; descriptions only summarise the original items.
- No portrait of Ori, no stats, testimonials, listings, office hours or full address.
- Personal service is in English and Hebrew only — the FR/RU pages say so.
- Photography is illustrative (AI-generated, supplied by Aviv) and labelled as such in the footer.

## Translations

`fr` and `ru` are marked `status: 'draft'` in `i18n/config.ts`, which shows a thin
"draft translation" bar. After native review, set them to `'approved'`.

## Adding a page later

1. Add `src/pages/[lang]/services/index.astro` (copy the homepage pattern).
2. Add its strings to all three dictionaries.
3. Service rows already link to `/xx/services/#maintenance`, `#repairs-furnishings-renovations`,
   `#pre-visit-arrangements`, `#accounting-and-other`.

## Launch checklist (not done — no hosting/DNS changes at this stage)

- 301 redirects from the old PHP site:
  `index_eng.php → /en/`, `index_fr.php → /fr/`, `index_rus.php → /ru/`,
  `services_*.php → /xx/services/`, `about_*.php → /xx/about/`, `contact_*.php → /xx/contact/`
  (confirm exact old file names on the server first).
- HTTPS, favicon from the approved logo, sitemap.
- Native review of FR/RU.
