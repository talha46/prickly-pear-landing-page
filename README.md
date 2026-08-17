# Prickly Pear Jelly Landing Page

An educational, mobile-first landing page for Cheri's Desert Harvest Prickly Pear Cactus Jelly—built for Amazon external traffic and SEO/AEO discoverability.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Configuration

- **Amazon URL**: Edit `src/config/product.ts` → `AMAZON_PRODUCT_URL`
- **Site URL**: Set `NEXT_PUBLIC_SITE_URL` in `.env.local` (default: `https://pricklypearjelly.mohidenterprisesllc.com`)
- **Product facts**: Centralized in `src/config/product.ts`
- **GA4**: Set `NEXT_PUBLIC_GA_ID` in `.env.local` (see `ANALYTICS.md`)
- **Traffic testing**: See `TRAFFIC-TEST.md` for campaign URLs

## Primary URL

Production guide URL:

```
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide
```

The root `/` redirects to `/prickly-pear-guide` (preserving query params).

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

## Project Structure

```
src/
├── app/           # Layout, page, global styles
├── components/    # Section components
├── config/        # Product data & Amazon URL
└── lib/           # JSON-LD schema helpers
public/
└── images/        # Optimized product & fruit imagery
```
