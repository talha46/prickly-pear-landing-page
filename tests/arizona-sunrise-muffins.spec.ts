import { test, expect } from "@playwright/test";
import { AMAZON_PRODUCT_URL, SITE_URL, GUIDE_PATH, GUIDE_UPDATED_ISO } from "../src/config/product";

const RECIPE_PATH = "/recipes/arizona-sunrise-muffins";
const CANONICAL_URL = `${SITE_URL}${RECIPE_PATH}`;
const GUIDE_URL = `${SITE_URL}${GUIDE_PATH}`;
const SELLER_URL = AMAZON_PRODUCT_URL;

const SOURCE_INGREDIENTS = [
  "2 cups all-purpose flour",
  "1/4 cup sugar",
  "3 tsp baking powder",
  "1/2 tsp salt",
  "1/4 cup vegetable oil",
  "1 egg, slightly beaten",
  "1 cup milk",
  "1 (8-ounce) jar Cheri's Prickly Pear Cactus Jelly",
];

test.describe("Arizona Sunrise Muffins recipe page", () => {
  test("page loads successfully with one H1 and required content", async ({
    page,
  }) => {
    await page.goto(RECIPE_PATH);
    await expect(page).toHaveTitle(
      /Arizona Sunrise Muffins with Prickly Pear Jelly \| Easy Recipe/i
    );

    const headings = page.locator("h1");
    await expect(headings).toHaveCount(1);
    await expect(headings).toHaveText(
      "Arizona Sunrise Muffins with Prickly Pear Jelly"
    );

    await expect(page.getByText("Jump to Recipe")).toBeVisible();
    await expect(page.locator("#ingredients-heading")).toHaveText("Ingredients");
    await expect(page.locator("#directions-heading")).toHaveText(
      /How to Make Arizona Sunrise Muffins/i
    );
    await expect(page.locator("#recipe-card")).toContainText("Print Recipe");
    await expect(page.getByText("1 teaspoon").first()).toBeVisible();
    await expect(page.getByText(/Updated September 1, 2026/i)).toBeVisible();
  });

  test("hero Jump to Recipe scrolls to recipe card", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    await page.getByRole("link", { name: "Jump to Recipe" }).click();
    await expect(page.locator("#recipe-card")).toBeInViewport();
  });

  test("Amazon CTA uses seller-specific URL and fires analytics event", async ({
    page,
  }) => {
    await page.goto(`${RECIPE_PATH}?src=facebook-easy-homemade-muffins`);

    await page.evaluate(() => {
      const w = window as Window & {
        __TEST_GA__?: boolean;
        __amazonEvents?: unknown[][];
        gtag?: (...args: unknown[]) => void;
      };
      w.__TEST_GA__ = true;
      w.__amazonEvents = [];
      const previous = w.gtag;
      w.gtag = (...args: unknown[]) => {
        w.__amazonEvents?.push(args);
        if (typeof previous === "function") {
          previous(...args);
        }
      };
    });

    const heroCta = page
      .getByRole("link", { name: /Get the Prickly Pear Jelly/i })
      .first();
    await expect(heroCta).toHaveAttribute("href", SELLER_URL);

    const popupPromise = page.waitForEvent("popup");
    await heroCta.click();
    const popup = await popupPromise;
    await expect(popup).toHaveURL(SELLER_URL);

    await expect
      .poll(async () => {
        return page.evaluate(() => {
          const events =
            (
              window as Window & { __amazonEvents?: unknown[][] }
            ).__amazonEvents ?? [];
          return events.some(
            (entry) => entry[0] === "event" && entry[1] === "amazon_cta_click"
          );
        });
      })
      .toBe(true);

    const amazonClick = await page.evaluate(() => {
      const events =
        (window as Window & { __amazonEvents?: unknown[][] }).__amazonEvents ??
        [];
      return events.find(
        (entry) => entry[0] === "event" && entry[1] === "amazon_cta_click"
      );
    });

    expect(amazonClick?.[2]).toMatchObject({
      placement: "recipe-hero",
      source: "facebook-easy-homemade-muffins",
    });
  });

  test("source query parameter is stored as first-touch source", async ({
    page,
  }) => {
    await page.goto(`${RECIPE_PATH}?src=pinterest-sunrise-muffins`);
    await expect
      .poll(async () => {
        return page.evaluate(() => ({
          session: sessionStorage.getItem("ppj_session_source"),
          firstTouch: localStorage.getItem("ppj_first_touch_source"),
        }));
      })
      .toEqual({
        session: "pinterest-sunrise-muffins",
        firstTouch: "pinterest-sunrise-muffins",
      });
  });

  test("FAQ is crawlable and expands with details", async ({ page }) => {
    await page.goto(RECIPE_PATH);

    await expect(
      page.getByText(
        "Arizona Sunrise Muffins are homemade muffins with a prickly pear jelly center."
      )
    ).toBeAttached();

    const question = page.getByText(
      "How much prickly pear jelly should you put in a muffin?"
    );
    await question.click();
    await expect(
      page.getByText(
        "1 teaspoon per muffin matches the source recipe's guidance."
      )
    ).toBeVisible();
  });

  test("images load and guide link works", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    const hero = page
      .locator('img[alt*="Arizona Sunrise Muffins with prickly pear jelly"]')
      .first();
    await expect(hero).toBeVisible();
    const width = await hero.evaluate(
      (img: HTMLImageElement) => img.naturalWidth
    );
    expect(width).toBeGreaterThan(0);

    const guideLink = page.getByRole("link", {
      name: "Explore the Prickly Pear Guide",
    });
    await expect(guideLink).toHaveAttribute("href", "/prickly-pear-guide");
  });

  test("mobile viewport has no horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(RECIPE_PATH);
    const overflow = await page.evaluate(() => {
      return (
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth + 1
      );
    });
    expect(overflow).toBe(false);
  });

  test("print stylesheet keeps recipe card content", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    await page.emulateMedia({ media: "print" });
    await expect(page.locator("#printable-recipe")).toBeVisible();
    await expect(page.locator("#printable-recipe")).toContainText(
      "Arizona Sunrise Muffins with Prickly Pear Jelly"
    );
    await expect(
      page.locator("header.sticky.print\\:hidden, header.sticky")
    ).toBeHidden();
  });

  test("recipe disclosure is visible near product area", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    const disclosure = page.locator("#recipe-disclosure");
    await expect(disclosure).toBeVisible();
    await expect(disclosure).toContainText(
      "Recipe source: Cheri's Desert Harvest's Arizona Sunrise Muffins recipe."
    );
    await expect(disclosure).toContainText(
      "not the official Cheri's Desert Harvest website"
    );
    await expect(disclosure).toContainText(
      "The original Cheri's Desert Harvest recipe calls for an 8-ounce jar"
    );
  });
});

test.describe("Arizona Sunrise Muffins source recipe accuracy", () => {
  test("visible ingredients match Cheri's source recipe", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    const ingredients = page.locator("#ingredients");
    for (const ingredient of SOURCE_INGREDIENTS) {
      await expect(ingredients).toContainText(ingredient);
    }
    await expect(ingredients).not.toContainText("vanilla extract");
    await expect(ingredients).not.toContainText("1 cup sugar");
  });

  test("visible instructions match source baking guidance", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    const directions = page.locator("#directions");
    await expect(directions).toContainText("400°F (standard) or 375°F (convection)");
    await expect(directions).toContainText("Sift together");
    await expect(directions).toContainText("until frothy");
    await expect(directions).toContainText("batter will be lumpy");
    await expect(directions).toContainText("Fill muffin tins half full");
    await expect(directions).toContainText(
      "1 teaspoon of prickly pear jelly in the exact center"
    );
    await expect(directions).toContainText("keeping the jelly away from the edges");
    await expect(directions).toContainText("two-thirds full");
    await expect(directions).not.toContainText("350°F");
    await expect(directions).not.toContainText("vanilla");
  });

  test("recipe card matches source temperatures and ingredients", async ({
    page,
  }) => {
    await page.goto(RECIPE_PATH);
    const card = page.locator("#printable-recipe");
    await expect(card).toContainText("400°F");
    await expect(card).toContainText("375°F convection");
    await expect(card).toContainText("1/4 cup sugar");
    await expect(card).toContainText("3 tsp baking powder");
    await expect(card).toContainText("1/4 cup vegetable oil");
    await expect(card).toContainText("8-ounce");
  });
});

test.describe("Arizona Sunrise Muffins SEO", () => {
  test("canonical URL is correct without tracking parameters", async ({
    page,
  }) => {
    await page.goto(`${RECIPE_PATH}?src=pinterest-sunrise-muffins`);
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveCount(1);
    await expect(canonical).toHaveAttribute("href", CANONICAL_URL);
  });

  test("tracking parameters do not change canonical", async ({ page }) => {
    await page.goto(`${RECIPE_PATH}?src=facebook-easy-homemade-muffins`);
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute("href");
    expect(canonical).toBe(CANONICAL_URL);
    expect(canonical).not.toContain("src=");
  });

  test("robots meta allows indexing", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    const robots = page.locator('meta[name="robots"]');
    const count = await robots.count();
    if (count > 0) {
      const content = await robots.first().getAttribute("content");
      expect(content?.toLowerCase()).not.toContain("noindex");
      expect(content?.toLowerCase()).not.toContain("nofollow");
    }
  });

  test("meta description matches recommended copy", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute(
      "content",
      "Make Arizona Sunrise Muffins with a bright prickly pear jelly center. Learn how to make these easy homemade muffins and discover more ways to use prickly pear jelly."
    );
  });

  test("Open Graph tags exist with canonical URL", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /Arizona Sunrise Muffins with Prickly Pear Jelly/i
    );
    await expect(
      page.locator('meta[property="og:description"]')
    ).toHaveAttribute("content", /.+/);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      CANONICAL_URL
    );
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      "content",
      "article"
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /arizona-sunrise-muffins-cut-open/i
    );
  });

  test("Recipe JSON-LD matches visible source recipe content", async ({
    page,
  }) => {
    await page.goto(RECIPE_PATH);
    const scripts = page.locator('script[type="application/ld+json"]');
    await expect(scripts).not.toHaveCount(0);

    const jsonLdTexts = await scripts.allTextContents();
    expect(jsonLdTexts.length).toBeGreaterThanOrEqual(2);

    const parsed = jsonLdTexts.map((text) => JSON.parse(text));
    const recipeSchema = parsed.find((s) => s["@type"] === "Recipe");
    const breadcrumbSchema = parsed.find((s) => s["@type"] === "BreadcrumbList");

    expect(recipeSchema).toBeDefined();
    expect(recipeSchema.name).toBe(
      "Arizona Sunrise Muffins with Prickly Pear Jelly"
    );
    expect(recipeSchema.datePublished).toBe("2026-08-22");
    expect(recipeSchema.dateModified).toBe("2026-09-01");

    for (const ingredient of SOURCE_INGREDIENTS) {
      expect(
        recipeSchema.recipeIngredient.some((entry: string) =>
          entry.includes(ingredient)
        )
      ).toBe(true);
    }

    expect(recipeSchema.recipeInstructions).toHaveLength(6);
    expect(recipeSchema.recipeInstructions[0].text).toContain("400°F");
    expect(recipeSchema.recipeInstructions[0].text).toContain("375°F");
    expect(recipeSchema.recipeInstructions[0].text).toContain("Sift");
    expect(recipeSchema.recipeInstructions[1].text).toContain("frothy");
    expect(recipeSchema.recipeInstructions[2].text).toContain("lumpy");
    expect(recipeSchema.recipeInstructions[3].text).toContain("half full");
    expect(recipeSchema.recipeInstructions[4].text).toContain("exact center");
    expect(recipeSchema.recipeInstructions[5].text).toContain("two-thirds full");

    expect(recipeSchema.aggregateRating).toBeUndefined();
    expect(recipeSchema.review).toBeUndefined();
    expect(recipeSchema.nutrition).toBeUndefined();
    expect(recipeSchema.video).toBeUndefined();
    expect(recipeSchema.prepTime).toBeUndefined();
    expect(recipeSchema.recipeYield).toBeUndefined();

    expect(breadcrumbSchema).toBeDefined();
    expect(breadcrumbSchema.itemListElement).toHaveLength(4);
  });

  test("ingredients and instructions exist in server-rendered HTML", async ({
    page,
  }) => {
    await page.goto(RECIPE_PATH);
    await expect(page.locator("#ingredients")).toContainText("all-purpose flour");
    await expect(page.locator("#directions")).toContainText(
      "Preheat and Prepare Dry Ingredients"
    );
    await expect(page.locator("#directions")).toContainText("Cover and Bake");
    await expect(page.locator("#faq")).toContainText(
      "What are Arizona Sunrise Muffins?"
    );
  });

  test("breadcrumbs are visible", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    const nav = page.getByRole("navigation", { name: "Breadcrumb" });
    await expect(nav).toBeVisible();
    await expect(nav).toContainText("Prickly Pear Guide");
    await expect(nav).toContainText("Recipes");
  });
});

test.describe("Site SEO infrastructure", () => {
  test("robots.txt returns 200 with plain-text crawl policy", async ({
    request,
  }) => {
    const response = await request.get("/robots.txt");
    expect(response.status()).toBe(200);

    const contentType = response.headers()["content-type"] ?? "";
    expect(contentType).toMatch(/text\/plain/i);

    const body = await response.text();
    expect(body).toMatch(/User-agent:\s*\*/i);
    expect(body).toMatch(/Allow:\s*\//i);
    expect(body).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
    expect(body.toLowerCase()).not.toContain("disallow: /");
    expect(body).not.toMatch(/Allow:\s*\/prickly-pear-guide/i);
    expect(body).not.toMatch(/Allow:\s*\/recipes\//i);
  });

  test("sitemap.xml returns 200 with canonical URLs only", async ({
    request,
  }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.status()).toBe(200);

    const contentType = response.headers()["content-type"] ?? "";
    expect(contentType).toMatch(/xml/i);

    const body = await response.text();
    expect(body).toContain(GUIDE_URL);
    expect(body).toContain(CANONICAL_URL);
    expect(body).toContain(`<lastmod>${GUIDE_UPDATED_ISO}</lastmod>`);
    expect(body).toContain("<lastmod>2026-09-01</lastmod>");

    expect(body).not.toContain(`${SITE_URL}</loc>`);
    expect(body).not.toContain(`${SITE_URL}/</loc>`);
    expect(body).not.toContain("src=");
    expect(body).not.toContain("<changefreq>");
    expect(body).not.toContain("<priority>");
  });
});
