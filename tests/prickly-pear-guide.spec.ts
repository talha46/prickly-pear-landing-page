import { test, expect } from "@playwright/test";

const GUIDE_PATH = "/prickly-pear-guide";

const EXPECTED_USE_CASES = [
  "Toast & Breakfast",
  "Cheese Boards",
  "Glaze for Lamb",
  "Fresh Fruit Topping",
  "Prickly Pear Cheesecake",
  "Creative Drinks",
];

test.describe("Prickly Pear Guide — 6 ways to use section", () => {
  test("renders six numbered use cases without Glaze for Pork", async ({
    page,
  }) => {
    await page.goto(GUIDE_PATH);

    await expect(
      page.getByRole("heading", { name: "6 Ways to Use Prickly Pear Jelly" })
    ).toBeVisible();
    await expect(
      page.getByText(
        "From breakfast spreads to prickly pear glazes - ideas to get you started."
      )
    ).toBeVisible();

    const section = page.locator("#ways-to-use");
    await expect(section.getByText("Glaze for Pork")).toHaveCount(0);

    for (const title of EXPECTED_USE_CASES) {
      await expect(section.getByRole("heading", { name: title })).toHaveCount(1);
    }

    await expect(section.locator("article")).toHaveCount(6);

    for (let i = 1; i <= 6; i += 1) {
      await expect(
        section.getByText(String(i).padStart(2, "0"), { exact: true })
      ).toHaveCount(1);
    }
  });
});
