# Traffic Test Guide

Use this guide to run a **zero-ad-spend external traffic experiment** for Cheri's Desert Harvest Prickly Pear Cactus Jelly (ASIN: B000MBM8T8) through your reseller Amazon offer.

**Production base URL:** `https://pricklypearjelly.mohidenterprisesllc.com`

## Campaign URLs (one per channel)

Use **one source URL per campaign/channel**. Do not share the generic page URL when testing a specific source.

### Reddit — Gifting

```
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide?src=reddit-gifting
```

Use when posting in gifting, food gift, or regional gift threads.

### Reddit — Cocktails / Drinks

```
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide?src=reddit-cocktail
```

Use when discussing prickly pear cocktails, mocktails, or drink ingredients.

### Reddit — Food / Cooking

```
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide?src=reddit-food
```

Use in food, cooking, or specialty ingredient discussions.

### Facebook

```
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide?src=facebook
```

Use when sharing to Facebook groups or your page.

### Pinterest

```
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide?src=pinterest
```

Use as the destination URL on pins linking to this guide.

### Optional: Google Organic label

```
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide?src=google-organic
```

Optional if you want to tag organic search referrals manually. Visitors without `src` are classified as `direct-or-organic`.

## How to Run the Experiment

1. **Pick one channel** (e.g. Reddit gifting).
2. **Share only that channel's URL** — not the bare `/prickly-pear-guide` URL.
3. **All visitors** click through to the same Amazon seller-specific offer (configured in `src/config/product.ts`).
4. **Wait for traffic** — organic posts may take hours or days to gain traction.
5. **Compare in GA4**:
   - Page views filtered by `source` event parameter
   - `amazon_cta_click` events filtered by `source`
   - CTA click-through rate = Amazon clicks ÷ page views (per source)
6. **Compare placements** — which buttons convert (`hero`, `sticky-mobile`, `faq`, etc.).

## What You Can Measure

| Metric | Tool |
|--------|------|
| Visitors by traffic source | GA4 (`source` parameter) |
| Amazon button clicks | GA4 (`amazon_cta_click`) |
| Click-through rate by source | GA4 (clicks ÷ views) |
| Scroll depth & engagement | GA4 (`scroll_50`, `scroll_90`, `engaged_30s`) |
| Which CTA placement works best | GA4 (`placement` parameter) |

## What You Cannot Measure (without extra tools)

- **Amazon purchases tied to a specific visitor or source** — this site cannot see Amazon checkout data.
- **Revenue per Reddit post** — unless you add Amazon Attribution links or analyze Seller Central reports separately.

> **Important:** Amazon purchases cannot be directly attributed from this site without Amazon Attribution or order-level data from Amazon. Use GA4 for traffic and click quality; use Seller Central for sales volume.

## Local Testing

Before sharing live links, test locally:

```
http://localhost:3000/prickly-pear-guide?src=reddit-gifting
```

1. Confirm the **Traffic Debug** panel (dev only) shows `reddit-gifting`.
2. Click **View on Amazon** and confirm GA4 DebugView records `amazon_cta_click` with correct `source` and `placement`.
3. Refresh the page — source should **persist** for the session (not reset to `direct-or-organic`).

## Optional UTM Parameters

You can add UTM tags alongside `src` for finer reporting:

```
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide?src=reddit-food&utm_source=reddit&utm_medium=social&utm_campaign=august-test
```

Both `src` and UTM values are stored and sent with GA4 events.

## Reseller Disclosure

This landing page is an independent guide. You are a **reseller**, not the brand owner. Do not represent the page as an official Cheri's Desert Harvest website. Footer copy reflects this.

## Business Context (for your reference)

| Item | Value |
|------|-------|
| ASIN | B000MBM8T8 |
| Selling price | $15.00 |
| Subscribe & Save | 20% (seller-funded) |
| Landed COG | $3.92/unit |
| Goal | Recover inventory capital; test premium-price sell-through without paid ads |
