# Mach13 Marketing Site

Production-ready marketing experience for Mach13 built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and a GDPR-compliant cookie consent flow.

## Quickstart

| Requirement | Version |
| --- | --- |
| Node.js | 18.17+ |
| npm | 9+ |

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` after the dev server starts.

## Environment Variables

| Name | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Yes | Plausible analytics domain, e.g. `mach13.tech`. |

Duplicate `.env.example` as `.env.local` and update the value before running locally or deploying.

## Scripts

- `npm run dev` – start the development server
- `npm run build` – create an optimized production build
- `npm run start` – serve the production build locally
- `npm run lint` – run the Next.js ESLint configuration

## Calendly Setup

Open `app/(marketing)/contact/page.tsx` and replace `YOUR-CALENDLY-USERNAME` inside `calendlyUrl` with your Calendly slug. The inline widget loads automatically on the client.

## Cookie Consent

- Cookie logic lives in `components/CookieBanner.tsx` and `components/ConsentManager.tsx`.
- Consent is stored in `localStorage` under `mach13-tech-consent`.
- Analytics (`lib/consent.ts`) only loads Plausible after the visitor accepts analytics cookies or saves a custom preference.
- Update the copy or add additional cookie categories inside `CookieBanner.tsx` if requirements change.

## Hero Media

Place a compressed, muted MP4 video at `public/videos/factory-hero.mp4` for the homepage hero. A fallback illustration (`public/illustrations/hero-assembly.svg`) displays automatically if the video is missing or fails to load.

## Editing Content & Style

- Brand colours, typography, and spacing tokens: `tailwind.config.ts` and `app/globals.css`.
- Page copy: files in `app/(marketing)` for marketing pages; legal copy in `app/(legal)`; blog posts in `content/blog` (Markdown with front matter).
- Illustrations: replace SVGs in `public/illustrations/`; the Open Graph image lives at `public/og.png`.

## Deploying on Vercel

1. Push this repository to GitHub (or another Git provider).
2. In Vercel, create/import the project and connect the repo.
3. Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=mach13.tech` in Project Settings → Environment Variables (preview + production).
4. Deploy; Vercel builds automatically using `npm run build`.
5. To redeploy manually from the CLI, run `npx vercel --prod` inside the project.

## Domain Wiring (`mach13.tech`)

1. In Vercel → Project → Domains, add both `mach13.tech` and `www.mach13.tech`.
2. Choose a DNS strategy:
   - **Delegate to Vercel**: change registrar nameservers to `ns1.vercel-dns.com`, `ns2.vercel-dns.com`, `ns3.vercel-dns.com`, `ns4.vercel-dns.com`.
   - **Keep your existing DNS**: create `CNAME www → cname.vercel-dns.com` and an `ALIAS`/`ANAME` (or root `CNAME` if supported) `@ → cname.vercel-dns.com`.
3. Mark `mach13.tech` as the primary domain so `www` redirects to the apex.
4. Trigger a redeploy or run `npx vercel --prod` to issue fresh certificates.
5. Verify HTTPS for both `https://mach13.tech` and `https://www.mach13.tech`.

