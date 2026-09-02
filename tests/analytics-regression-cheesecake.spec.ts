import { test, expect, type Page } from "@playwright/test";
import { AMAZON_PRODUCT_URL, SITE_URL } from "../src/config/product";

const RECIPE_PATH = "/recipes/classic-prickly-pear-cheesecake";
const RECIPE_URL = `${SITE_URL}${RECIPE_PATH}`;
const SELLER_URL = AMAZON_PRODUCT_URL;
const EXPECTED_META_DESCRIPTION =
  "Make a classic prickly pear cheesecake with a creamy sour-cream topping made with one 5 oz jar of prickly pear jelly.";
const SRC = "pinterest-cheesecake";

type GaEvent = unknown[];

async function enableTestAnalytics(page: Page) {
  await page.evaluate(() => {
    const w = window as Window & {
      __TEST_GA__?: boolean;
      __gaEvents?: GaEvent[];
      gtag?: (...args: unknown[]) => void;
    };
    w.__TEST_GA__ = true;
    w.__gaEvents = [];
    w.gtag = (...args: unknown[]) => {
      w.__gaEvents?.push(args);
    };
  });
}

async function installPersistentAnalyticsSpy(page: Page) {
  await page.addInitScript(() => {
    const w = window as Window & {
      __TEST_GA__?: boolean;
      __gaEvents?: GaEvent[];
      dataLayer?: unknown[];
    };
    w.__TEST_GA__ = true;
    w.__gaEvents = [];
    w.dataLayer = w.dataLayer || [];
    const push = w.dataLayer.push.bind(w.dataLayer);
    w.dataLayer.push = function (...args: unknown[]) {
      const entry = args[0];
      if (entry && typeof entry === "object") {
        const normalized = Array.from(entry as ArrayLike<unknown>);
        w.__gaEvents?.push(normalized);
      }
      return push.apply(w.dataLayer, args);
    };
  });
}

async function getGaEvents(page: Page): Promise<GaEvent[]> {
  return page.evaluate(
    () =>
      (window as Window & { __gaEvents?: GaEvent[] }).__gaEvents ?? []
  );
}

async function clickAmazonAndAssert(
  page: Page,
  clickTarget: ReturnType<Page["getByRole"]>,
  expected: { placement: string; source: string }
) {
  await page.route("**/googletagmanager.com/**", (route) => route.abort());
  await enableTestAnalytics(page);
  await expect(clickTarget).toHaveAttribute("href", SELLER_URL);
  const popupPromise = page.waitForEvent("popup");
  await clickTarget.click();
  const popup = await popupPromise;
  await expect(popup).toHaveURL(SELLER_URL);

  await expect
    .poll(async () => {
      const events = await getGaEvents(page);
      return events.some(
        (entry) => entry[0] === "event" && entry[1] === "amazon_cta_click"
      );
    })
    .toBe(true);

  const amazonClick = (await getGaEvents(page)).find(
    (entry) => entry[0] === "event" && entry[1] === "amazon_cta_click"
  );

  expect(amazonClick?.[2]).toMatchObject({
    placement: expected.placement,
    source: expected.source,
  });

  return amazonClick;
}

test.describe("Analytics regression — Classic Prickly Pear Cheesecake (local)", () => {
  test("GA4 gtag script is present in server-rendered HTML when GA is configured", async ({
    request,
  }) => {
    const response = await request.get(RECIPE_PATH);
    const html = await response.text();
    expect(response.status()).toBe(200);
    expect(html).toContain("googletagmanager.com/gtag/js");
  });

  test("page_view fires once after load when analytics hook is active", async ({
    page,
  }) => {
    await installPersistentAnalyticsSpy(page);
    await page.goto(`${RECIPE_PATH}?src=${SRC}`);

    await expect
      .poll(async () => {
        const events = await getGaEvents(page);
        return events.filter(
          (entry) => entry[0] === "event" && entry[1] === "page_view"
        ).length;
      }, { timeout: 10000 })
      .toBe(1);

    const pageView = (await getGaEvents(page)).find(
      (entry) => entry[0] === "event" && entry[1] === "page_view"
    );
    expect(pageView?.[2]).toMatchObject({
      page_path: `${RECIPE_PATH}?src=${SRC}`,
      source: SRC,
    });
  });

  test("does not introduce duplicate page_view events on load", async ({
    page,
  }) => {
    await installPersistentAnalyticsSpy(page);
    await page.goto(`${RECIPE_PATH}?src=${SRC}`);
    await page.waitForTimeout(1000);

    const pageViews = (await getGaEvents(page)).filter(
      (entry) => entry[0] === "event" && entry[1] === "page_view"
    );
    expect(pageViews).toHaveLength(1);
  });

  test("initTrafficTracking stores first-touch and session source without wrapping children", async ({
    page,
  }) => {
    await page.goto(
      `${RECIPE_PATH}?src=${SRC}&utm_source=pinterest&utm_medium=social`
    );
    await expect
      .poll(async () =>
        page.evaluate(() => ({
          session: sessionStorage.getItem("ppj_session_source"),
          firstTouch: localStorage.getItem("ppj_first_touch_source"),
          utm: localStorage.getItem("ppj_utm_params"),
          initialized: sessionStorage.getItem("ppj_traffic_initialized"),
        }))
      )
      .toEqual({
        session: SRC,
        firstTouch: SRC,
        utm: JSON.stringify({
          utm_source: "pinterest",
          utm_medium: "social",
        }),
        initialized: "true",
      });
  });

  test("hero Amazon CTA fires amazon_cta_click with placement and source", async ({
    page,
  }) => {
    await page.goto(`${RECIPE_PATH}?src=${SRC}`);
    await clickAmazonAndAssert(
      page,
      page.getByRole("link", { name: /Get the 5 oz Prickly Pear Jelly/i }).first(),
      { placement: "recipe-hero", source: SRC }
    );
  });

  test("product spotlight Amazon CTA fires amazon_cta_click", async ({ page }) => {
    await page.goto(`${RECIPE_PATH}?src=${SRC}`);
    await page.locator("#product").scrollIntoViewIfNeeded();
    await clickAmazonAndAssert(
      page,
      page.locator("#product").getByRole("link", { name: "View on Amazon" }),
      { placement: "recipe-product-spotlight", source: SRC }
    );
  });

  test("FAQ Amazon CTA fires amazon_cta_click", async ({ page }) => {
    await page.goto(`${RECIPE_PATH}?src=${SRC}`);
    await page.locator("#faq").scrollIntoViewIfNeeded();
    await page
      .getByText("Where can I buy prickly pear jelly?", { exact: true })
      .click();
    const faqLink = page
      .locator("#faq")
      .getByRole("link", { name: /View on Amazon/i });
    await expect(faqLink).toBeVisible();
    await clickAmazonAndAssert(page, faqLink, {
      placement: "recipe-faq",
      source: SRC,
    });
  });

  test("sticky mobile CTA fires amazon_cta_click after scroll threshold", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${RECIPE_PATH}?src=${SRC}`);
    await page.evaluate(() => window.scrollTo(0, 600));
    await expect(
      page.getByRole("link", { name: /View on Amazon/i }).last()
    ).toBeVisible();

    await clickAmazonAndAssert(
      page,
      page.getByRole("link", { name: /View on Amazon/i }).last(),
      { placement: "recipe-sticky-mobile", source: SRC }
    );
  });

  test("tracking URL preserves SEO tags in server HTML", async ({ request }) => {
    const response = await request.get(`${RECIPE_PATH}?src=${SRC}`);
    expect(response.status()).toBe(200);
    const html = await response.text();

    expect((html.match(/<h1[\s>]/gi) ?? []).length).toBe(1);
    expect(html).toContain("Classic Prickly Pear Cheesecake");

    const descriptionMatch = html.match(
      /<meta\s+name="description"\s+content="([^"]*)"/i
    );
    expect(descriptionMatch?.[1]).toBe(EXPECTED_META_DESCRIPTION);
    expect(descriptionMatch![1].length).toBe(117);

    const canonicalMatch = html.match(
      /<link\s+rel="canonical"\s+href="([^"]*)"/i
    );
    expect(canonicalMatch?.[1]).toBe(RECIPE_URL);
    expect(canonicalMatch?.[1]).not.toContain("src=");
  });

  test("recipe card section has no Amazon CTA (removed in visual refinement)", async ({
    page,
  }) => {
    await page.goto(RECIPE_PATH);
    await page.locator("#recipe-card").scrollIntoViewIfNeeded();
    await expect(
      page.locator("#recipe-card").getByRole("link", { name: /Amazon/i })
    ).toHaveCount(0);
  });
});

test.describe("Production URL audit — Classic Prickly Pear Cheesecake", () => {
  test("live HTML includes GA loader and stable canonical", async ({
    request,
  }) => {
    const clean = await request.get(RECIPE_URL);
    const tracked = await request.get(`${RECIPE_URL}?src=${SRC}`);

    expect(clean.status()).toBe(200);
    expect(tracked.status()).toBe(200);

    for (const html of [await clean.text(), await tracked.text()]) {
      expect(html).toContain("googletagmanager.com/gtag/js");
      expect(html).toMatch(
        /rel="canonical"\s+href="https:\/\/pricklypearjelly\.mohidenterprisesllc\.com\/recipes\/classic-prickly-pear-cheesecake"/
      );
    }
  });
});
