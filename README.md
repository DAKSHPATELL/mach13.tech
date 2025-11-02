# Mach13 Marketing Site

Production marketing experience for Mach13 built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Quickstart

| Requirement | Version |
| --- | --- |
| Node.js | 18.17+ |
| npm | 9+ |

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` once the dev server boots.

## Environment Variables

| Name | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Yes | Domain tracked by Plausible (set to `mach13.tech`). |

Copy `.env.example` to `.env.local` and update values before running locally or deploying.

## Scripts

- `npm run dev` – start the development server
- `npm run build` – generate the production build
- `npm run start` – serve the production build locally
- `npm run lint` – run the ESLint checks configured by Next.js

## Deploying on Vercel

1. Push this repository to GitHub (or your preferred Git provider).
2. In Vercel, create a new project and import the repo.
3. Set the `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=mach13.tech` environment variable in the project settings.
4. Trigger a deployment; Vercel will handle builds, preview deployments, and SSL.
5. Follow the domain wiring instructions below to point `mach13.tech` at Vercel.

## Domain Wiring (`mach13.tech`)

1. In Vercel → Project → Domains, add `mach13.tech` and `www.mach13.tech`.
2. Choose one of two DNS approaches:
   - **Nameserver delegation**: switch your registrar’s nameservers to `ns1.vercel-dns.com`, `ns2.vercel-dns.com`, `ns3.vercel-dns.com`, `ns4.vercel-dns.com`.
   - **Keep existing DNS**: create a CNAME record for `www` pointing to `cname.vercel-dns.com` and an ALIAS/ANAME (or CNAME if supported) for `@` pointing to `cname.vercel-dns.com`.
3. Mark `mach13.tech` as the primary domain and keep the provided redirect from `www`.
4. Redeploy (or trigger a rebuild) and verify SSL status in Vercel.

## Editing Content & Brand System

- Colors, typography, and spacing tokens: `tailwind.config.ts` + `app/globals.css`.
- Page copy: files inside `app/(marketing)` and the markdown sources in `content/`.
- Imagery: replace SVGs in `public/illustrations/` and the Open Graph image at `public/og.png`.

## Calendly / Cal.com Embed

Add the provider’s inline embed script to load into the placeholder `<div id="calendly-embed" aria-label="Booking" />` on `app/(marketing)/contact/page.tsx`. The comment above the div shows where to paste the script. Ensure any embed script executes client-side only.

