# Analytics Setup (GA4)

This landing page uses Google Analytics 4 to measure external traffic and outbound Amazon clicks for a zero-ad-spend experiment.

## 1. Create a GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/).
2. Create an **Account** (or use an existing one).
3. Create a **Property** for your landing page domain.
4. Choose **Web** as the platform.
5. Enter your site URL: `https://pricklypearjelly.mohidenterprisesllc.com` and stream name (e.g. `Prickly Pear Jelly Guide`).

## 2. Get the Measurement ID

1. In GA4, open **Admin** → **Data streams**.
2. Select your web stream.
3. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`).

## 3. Set the Environment Variable

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://pricklypearjelly.mohidenterprisesllc.com
```

Replace `G-XXXXXXXXXX` with your Measurement ID.

Restart the dev server after changing env vars.

## 4. Verify Events in GA4 DebugView

1. In GA4, go to **Admin** → **DebugView**.
2. Install the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension (optional), or run locally in development.
3. Visit your landing page with a source parameter, e.g.:

   ```
   http://localhost:3000/prickly-pear-guide?src=reddit-gifting
   ```

4. Confirm these events appear in DebugView:

   | Event | When |
   |-------|------|
   | `page_view` | Page load |
   | `amazon_cta_click` | Any Amazon button click |
   | `scroll_50` | 50% scroll depth |
   | `scroll_90` | 90% scroll depth |
   | `engaged_30s` | 30 seconds on page |
   | `engaged_60s` | 60 seconds on page |

5. For `amazon_cta_click`, verify parameters:

   - `source`
   - `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`
   - `placement` (e.g. `hero`, `sticky-mobile`)

## 5. Supported `src` Values

| `src` value | Use case |
|-------------|----------|
| `reddit-gifting` | Reddit posts about food gifts |
| `reddit-cocktail` | Reddit posts about drinks/cocktails |
| `reddit-food` | Reddit food/cooking communities |
| `facebook` | Facebook shares |
| `pinterest` | Pinterest pins |
| `google-organic` | Organic search (optional label) |
| *(none)* | Classified as `direct-or-organic` |

Example URLs (production):

```
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide?src=reddit-gifting
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide?src=reddit-cocktail
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide?src=reddit-food
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide?src=facebook
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide?src=pinterest
```

UTM parameters are also captured when present:

```
https://pricklypearjelly.mohidenterprisesllc.com/prickly-pear-guide?src=reddit-food&utm_source=reddit&utm_medium=social&utm_campaign=prickly-pear-test
```

## 6. How Amazon CTA Clicks Are Tracked

- All Amazon buttons use a centralized `AmazonLink` component.
- Each button has a `placement` value (e.g. `hero`, `product-spotlight`, `faq`).
- On click, `trackAmazonClick()` fires **before** navigation.
- Events use `transport_type: 'beacon'` when available so data is sent before the tab opens.
- The visitor is then sent to the seller-specific Amazon URL from `src/config/product.ts`.

## 7. Important Limitation

**The website can measure external traffic and outbound Amazon clicks, but without Amazon Attribution or access to Amazon order-level attribution, the website cannot prove which individual visitor purchased on Amazon.**

Use GA4 to compare:

- Landing page visitors by `source`
- Amazon CTA clicks by `source` and `placement`
- Click-through rate (CTA clicks ÷ page views)

Amazon Seller Central order reports show whether sales happened—not which traffic source drove them.

## Development Debug Panel

When `NODE_ENV !== "production"`, a **Traffic Debug** panel appears (top-right on mobile, bottom-right on desktop) showing:

- Traffic Source
- Stored First Touch Source
- UTM parameters
- Landing URL

Use this to verify source tracking without opening GA4.
