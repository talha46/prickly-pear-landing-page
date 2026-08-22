import { test, expect } from "@playwright/test";
import { AMAZON_PRODUCT_URL } from "../src/config/product";

const RECIPE_PATH = "/recipes/arizona-sunrise-muffins";
const SELLER_URL = AMAZON_PRODUCT_URL;

test.describe("Arizona Sunrise Muffins recipe page", () => {
  test("page loads successfully with one H1 and required content", async ({
    page,
  }) => {
    await page.goto(RECIPE_PATH);
    await expect(page).toHaveTitle(/Arizona Sunrise Muffins/i);

    const headings = page.locator("h1");
    await expect(headings).toHaveCount(1);
    await expect(headings).toHaveText("Arizona Sunrise Muffins");

    await expect(page.getByText("Jump to Recipe")).toBeVisible();
    await expect(page.locator("#ingredients-heading")).toBeVisible();
    await expect(page.locator("#directions-heading")).toBeVisible();
    await expect(page.locator("#recipe-card")).toContainText("Print Recipe");
    await expect(page.getByText("about 1 teaspoon").first()).toBeVisible();
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
    const stored = await page.evaluate(() => ({
      session: sessionStorage.getItem("ppj_session_source"),
      firstTouch: localStorage.getItem("ppj_first_touch_source"),
    }));
    expect(stored.session).toBe("pinterest-sunrise-muffins");
    expect(stored.firstTouch).toBe("pinterest-sunrise-muffins");
  });

  test("FAQ expands and collapses", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    const question = page.getByRole("button", {
      name: "How much prickly pear jelly goes in each muffin?",
    });
    await question.click();
    await expect(
      page.getByText("About 1 teaspoon per muffin is a practical starting point.")
    ).toBeVisible();
  });

  test("images load and guide link works", async ({ page }) => {
    await page.goto(RECIPE_PATH);
    const hero = page.locator('img[alt*="Arizona Sunrise Muffins"]').first();
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
      "Arizona Sunrise Muffins"
    );
    await expect(
      page.locator("header.sticky.print\\:hidden, header.sticky")
    ).toBeHidden();
  });
});
