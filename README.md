# Del Moro Sicily - Premium Editorial Showcase

Next.js 14+ App Router project designed as a premium cultural journal and future-ready luxury concierge platform.

## Technical Architecture

- Framework: Next.js App Router + TypeScript
- Styling: Tailwind CSS v4 with brand tokens in `globals.css`
- Motion: Framer Motion (`AnimatedSection`)
- UI pattern: reusable components in `src/components`
- Data layer: mock CMS-ready content in `src/lib/mock-data.ts`
- API routes (light backend):
  - `POST /api/newsletter`
  - `POST /api/contact`
  - `POST /api/concierge`

## Sitemap

- `/` Home
- `/about`
- `/journal`
- `/journal/[slug]`
- `/guides`
- `/concierge`
- `/contact`
- `sitemap.xml` and `robots.txt` generated via metadata routes

## Design System (Base)

- Colors (quiet Mediterranean palette):
  - `--ivory`, `--sand`, `--limestone`, `--terracotta`, `--olive`, `--charcoal`, `--sea`
- Typography:
  - Serif headlines: Cormorant Garamond
  - Sans UI/body: Inter
- Principles:
  - generous spacing
  - minimal visual noise
  - editorial rhythm
  - soft CTA hierarchy

## CMS-Ready Direction

- Content is centralized and typed in `src/lib/types.ts` + `src/lib/mock-data.ts`.
- Replace mock-data with a CMS adapter (Sanity, Contentful, Strapi, Notion API) without rewriting page templates.
- API routes are prepared for future CRM/newsletter integrations.

## Run

```bash
npm install
npm run dev
```

## Notes

- Hero currently uses a cinematic static background image. For silent intro video, replace hero background with a short autoplaying muted loop (`next/video` or native `<video>`).
- The project is built mobile-first and optimized for future i18n extension.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# delmoro
