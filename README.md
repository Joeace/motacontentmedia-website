# Mota Content Media — Website

> Ideas into influence. Content into growth.

Marketing website for Mota Content Media, a creative technology and digital marketing agency.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens in `src/app/globals.css`
- Fonts self-hosted at build time via `next/font`

Further libraries (Motion, Lucide, GSAP, React Three Fiber) are added only when a feature needs them.

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Script              | Purpose                       |
| ------------------- | ----------------------------- |
| `npm run dev`       | Development server            |
| `npm run build`     | Production build              |
| `npm run start`     | Serve the production build    |
| `npm run lint`      | ESLint                        |
| `npm run typecheck` | TypeScript, no emit           |

Copy `.env.example` to `.env.local` if you need to override `NEXT_PUBLIC_SITE_URL` locally.

## Deployment

The site is hosted on **Cloudflare Pages**, connected to this GitHub repository. Every push to
`main` deploys to production; every other branch gets a preview URL.

Next.js builds a static export (`output: "export"` in `next.config.ts`) into `./out`.
Cloudflare Pages project settings (**Settings → Builds & deployments → Build configuration**):

| Setting                | Value                               |
| ---------------------- | ----------------------------------- |
| Framework preset       | Next.js (Static HTML Export)        |
| Build command          | `npm run build`                     |
| Build output directory | `out`                               |
| Root directory         | *(leave empty)*                     |

Node.js 22 is pinned by `.node-version`. Set `NEXT_PUBLIC_SITE_URL` to the production domain under
**Settings → Environment variables** (Production) so canonical and social-preview URLs are correct.

Static hosting means no server code: no API routes, server actions or on-demand image
optimisation. Forms must post to a third-party service, and images should be optimised
before they are added to `public/`.

## Project structure

```
src/
├── app/            Routes, root layout, global styles and tokens
├── components/
│   └── ui/         Primitives: Button, Container, Section
├── content/        Typed site content (navigation, services…)
└── lib/            Brand config (site.ts) and helpers
public/brand/       Logos, favicon, social images
```

## Design rules

- **White dominates.** Blue is used deliberately: buttons, highlighted type, icons, interactive states.
- **Use tokens, never raw hex values.** Colours: `white`, `ice`, `silver`, `electric`, `deep`, `midnight`, `slate`.
- **Contrast.** Electric blue (`#2F80ED`) is 3.87:1 on white — use it only for large text (≥24px, or ≥18.66px bold), icons, borders and focus rings. Body text uses `midnight` or `slate`; text buttons use `deep`.
- **Motion respects `prefers-reduced-motion`.**
- **Honest content.** No invented statistics, testimonials, awards or credentials. No controls that look functional but do nothing.
