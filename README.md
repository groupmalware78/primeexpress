# PrimeXpress Freight website

Marketing website for **PrimeXpress Freight Limited** (PXF), *Service with Purpose*.

The site is fully static: no database, logins, forms or CMS. It covers how the service works, the three branches (Kingston Delivery, St. Catherine Delivery, Knutsford Express Pickup), a shipping-rate calculator that runs in the browser, and contact links (phone, email, Instagram).

**Stack:** Next.js 16 static export · Tailwind CSS 4 · served by nginx in Docker on Railway

## Editing content

Everything lives in code, so edit and redeploy to change it:

| What | Where |
| --- | --- |
| Name, tagline, phone, email, Instagram | `src/lib/brand.ts` → `brand` |
| Shipping rates | `src/lib/brand.ts` → `rates` |
| Branches and their fees | `src/lib/brand.ts` → `branches` |
| Home page copy (steps, services) | `src/app/(site)/page.tsx` |
| Terms / privacy | `src/app/(site)/terms`, `src/app/(site)/privacy` |
| Logo files | `public/logo.png`, `public/logo-mark.png`, `src/app/icon.png` |
| Colours | `src/app/globals.css` (`@theme`) |

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # writes the static site to ./out
npm start          # preview ./out locally
```

## Deploying to Railway

```bash
./scripts/deploy-railway.sh
# or with your own domain:
CUSTOM_DOMAIN=www.example.com ./scripts/deploy-railway.sh
```

The script is safe to re-run. It logs in to Railway, creates or links the project and a `web` service, sets up a domain, runs lint, typecheck and a test build, then uploads. Railway builds the `Dockerfile` (Next.js static export, served by nginx with security headers and long-term caching of assets) and the script waits until the site responds.

## Before going live

- [ ] Confirm the rates in `src/lib/brand.ts` (currently placeholders: J$700 first lb, J$450 each additional lb)
- [ ] Set branch fees if you charge them (currently J$0, so no fee is shown)
- [ ] Review the Terms and Privacy pages
# primeexpress
