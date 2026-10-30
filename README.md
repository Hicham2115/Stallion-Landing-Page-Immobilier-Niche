# Stallion — Agences de voyage

French landing page for Stallion Advertising’s website, CRM and app development services for Moroccan travel agencies. Reuses the visual direction and owned logo/video from the Morocco landing page.

## Run

- `npm run dev` — local preview
- `npm run lint` — code checks
- `npm run build` — production build

Stack: Next.js, React, TypeScript, Tailwind CSS and Lucide.

`app/page.tsx` composes sections in `components/landing/`; shared header and footer live in `layout/`. Assets live in `public/`.

The original project form opens WhatsApp at the number inherited from the development page. No form data is stored. Set `NEXT_PUBLIC_SITE_URL` to the final deployment URL to populate the sitemap.
