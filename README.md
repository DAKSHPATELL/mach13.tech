# Shree Beauté Indienne

Bilingual (French / English) marketing and online-booking site for **Shree Beauté Indienne**, a beauty institute in Paris 20e. Built with Next.js 14 (App Router), TypeScript and Tailwind CSS. Deployed on Vercel at [mach13.tech](https://mach13.tech).

## Features

- **7 pages**: Accueil, À propos, Prestations, Tarifs, Galerie, Contact, Réservation.
- **Bilingual** FR/EN with an in-header language toggle. The choice is persisted to `localStorage` and reflected on `<html lang>`. All copy lives in `lib/content.ts` and `lib/prices.ts`.
- **Online booking** (`/reservation`): add treatments to a cart, see an estimated duration and total, and submit a booking request. Prices/labels come from the same catalog that powers the Tarifs page.
- **Design system**: plum-on-cream palette, Cormorant Garamond display + Poppins body (self-hosted via `next/font`), scroll-reveal animations, fully responsive with a mobile menu.
- **SEO & security**: per-page metadata, JSON-LD `BeautySalon` structured data, `sitemap.xml`, `robots.txt`, and strict security headers/CSP (`next.config.mjs`).

## Quickstart

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/                 # App Router pages (one folder per route)
components/           # Header, Footer, Providers, PageHero, Reveal, Icons, …
lib/
  i18n.tsx           # LanguageProvider + useLang() (FR/EN)
  content.ts         # all bilingual UI/page copy
  prices.ts          # the full treatment + price catalog
public/              # logo + treatment images
```

## Editing content

- **Text / translations** → `lib/content.ts` (each string is `{ fr, en }`).
- **Prices / treatments** → `lib/prices.ts`. Categories are grouped into "universes" (Épilation, Onglerie, Soins visage, Modelage, Henné) and drive Tarifs, Prestations and Réservation.
- **Images** → replace the files in `public/` (keep the same names) with real salon photos.

## Deployment

Connected to the Vercel project for `mach13.tech`. Pushing to `main` triggers a production deploy. See `DEPLOY_DOMAIN.md` for domain/DNS notes.
