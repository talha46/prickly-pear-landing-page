import { test, expect } from "@playwright/test";
import { AMAZON_PRODUCT_URL, SITE_URL, GUIDE_PATH } from "../src/config/product";

const RECIPE_PATH = "/recipes/classic-prickly-pear-cheesecake";
const CANONICAL_URL = `${SITE_URL}${RECIPE_PATH}`;
const SELLER_URL = AMAZON_PRODUCT_URL;

const TOPPING_INGREDIENT = "1 x 5 oz jar Cheri's Prickly Pear Cactus Jelly";

const SOURCE_INGREDIENTS = [
  "1 package graham crackers",
  "1/4 cup crushed pecans (optional)",
  "1 tablespoon sugar",
  "5 tablespoons butter, melted",
  "16 ounces sour cream",
  "1 x 5 oz jar Cheri's Prickly Pear Cactus Jelly",
  "4 x 8-ounce packages cream cheese, room temperature (2 pounds total)",
  "1 1/4 cups sugar",
  "2 teaspoons lemon extract",
  "4 eggs",
];

test.describe("Classic Prickly Pear Cheesecake recipe page", () => {
  test("page loads with one H1 and required content", async ({ page }) => {
    const response = await page.goto(RECIPE_PATH);
    expect(response?.status()).toBe(200);

    await expect(page).toHaveTitle(/Classic Prickly Pear Cheesecake \| Easy Dessert Recipe/i);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveText("Classic Prickly Pear Cheesecake");
    await expect(page.locator("#ingredients")).toContainText(TOPPING_INGREDIENT);
    await expect(page.locator("#jar-highlight")).toBeVisible();
  });

  test("canonical URL is correct without tracking parameters", async ({
    page,
  }) => {
    await page.goto(RECIPE_PATH);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      CANONICAL_URL
    );
  });

  test("canonical remains correct with tracking parameter", async ({ page }) => {
    await page.goto(`${RECIPE_PATH}?src=pinterest-prickly-pear-cheesecake`);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      CANONICAL_URL
    );
  });

  test("Recipe JSON-LD includes 5 oz jar and matches visible content", async ({
    page,
  }) => {
    await page.goto(RECIPE_PATH);
    const scripts = await page.locator('script[type="application/ld+json"]').allTextContents();
    const parsed = scripts.map((text) => JSON.parse(text));
    const recipeSchema = parsed.find((s) => s["@type"] === "Recipe");
    const breadcrumbSchema = parsed.find((s) => s["@type"] === "BreadcrumbList");

    expect(recipeSchema).toBeDefined();
    expect(recipeSchema.recipeIngredient.some((i: string) => i.includes("5 oz"))).toBe(
      true
    );
    expect(recipeSchema.recipeYield).toBe("16 servings");
    expect(recipeSchema.cookTime).toBe("PT60M");
    expect(recipeSchema.totalTime).toBe("PT5H");
    expect(recipeSchema.recipeInstructions.length).toBe(15);
    expect(recipeSchema.recipeInstructions[0].text).toContain("graham crackers");
    expect(recipeSchema.recipeInstructions[4].text).toContain("5 oz jar");
    expect(recipeSchema.recipeInstructions[9].text).toContain("50–55 minutes");
    expect(recipeSchema.recipeInstructions[10].text).toContain("5 minutes");
    expect(recipeSchema.recipeInstructions[12].text).toContain("4 hours");

    for (const ingredient of SOURCE_INGREDIENTS) {
      expect(
        recipeSchema.recipeIngredient.some((entry: string) =>
          entry.includes(ingredient)
        )
      ).toBe(true);
    }

    expect(recipeSchema.aggregateRating).toBeUndefined();
    expect(recipeSchema.review).toBeUndefined();

    expect(breadcrumbSchema.itemListElement).toHaveLength(3);
    expect(breadcrumbSchema.itemListElement[2].item).toBe(CANONICAL_URL);
  });

  test("disclosure and grouped ingredients are visible", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    await expect(page.locator("#recipe-disclosure")).toContainText(
      "Recipe source: Cheri's Desert Harvest's Classic Prickly Pear Cheesecake recipe."
    );
    await expect(page.locator("#ingredients")).toContainText("Crust");
    await expect(page.locator("#ingredients")).toContainText("Topping");
    await expect(page.locator("#ingredients")).toContainText("Filling");
    await expect(page.locator("#directions")).toContainText("Phase 1 — Crust");
    await expect(page.locator("#directions")).toContainText("Phase 3 — Cheesecake");
  });

  test("Amazon CTA uses seller URL and fires analytics", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    await page.evaluate(() => {
      const w = window as Window & {
        __TEST_GA__?: boolean;
        __amazonEvents?: unknown[][];
        gtag?: (...args: unknown[]) => void;
      };
      w.__TEST_GA__ = true;
      w.__amazonEvents = [];
      w.gtag = (...args: unknown[]) => {
        w.__amazonEvents?.push(args);
      };
    });

    const cta = page.getByRole("link", { name: /5 oz Prickly Pear Jelly/i }).first();
    await expect(cta).toHaveAttribute("href", SELLER_URL);

    const popupPromise = page.waitForEvent("popup");
    await cta.click();
    await popupPromise;

    await expect
      .poll(async () =>
        page.evaluate(() => {
          const events =
            (window as Window & { __amazonEvents?: unknown[][] }).__amazonEvents ?? [];
          return events.some(
            (entry) => entry[0] === "event" && entry[1] === "amazon_cta_click"
          );
        })
      )
      .toBe(true);
  });

  test("Open Graph tags exist with canonical URL", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      CANONICAL_URL
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /classic-prickly-pear-cheesecake-slice/i
    );
  });

  test("print stylesheet keeps recipe card content", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    await page.emulateMedia({ media: "print" });
    await expect(page.locator("#printable-recipe")).toContainText(
      "Classic Prickly Pear Cheesecake"
    );
  });

  test("mobile viewport has no horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(RECIPE_PATH);
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth + 1
    );
    expect(overflow).toBe(false);
  });
});

test.describe("Classic Prickly Pear Cheesecake site infrastructure", () => {
  test("sitemap includes canonical recipe URL", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    const body = await response.text();
    expect(body).toContain(CANONICAL_URL);
    expect(body).not.toContain("src=");
  });

  test("robots allows crawling", async ({ request }) => {
    const response = await request.get("/robots.txt");
    const body = await response.text();
    expect(body.toLowerCase()).toContain("allow");
    expect(body).toContain("sitemap.xml");
  });

  test("internal link to guide exists", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    await expect(
      page.getByRole("link", { name: "Explore the Prickly Pear Guide" })
    ).toHaveAttribute("href", GUIDE_PATH);
  });
});
