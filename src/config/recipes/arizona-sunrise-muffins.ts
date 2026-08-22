import { GUIDE_PATH, IMAGES } from "@/config/product";
import type { RecipeDefinition } from "./types";

export const arizonaSunriseMuffins: RecipeDefinition = {
  slug: "arizona-sunrise-muffins",
  path: "/recipes/arizona-sunrise-muffins",
  title: "Arizona Sunrise Muffins",
  seoTitle:
    "Arizona Sunrise Muffins with Prickly Pear Jelly | Easy Recipe",
  seoDescription:
    "Make Arizona Sunrise Muffins with a bright prickly-pear jelly center. Explore this easy homemade muffin recipe and discover more ways to use prickly pear jelly.",
  headline: "Arizona Sunrise Muffins",
  subheadline:
    "Golden homemade muffins with a bright prickly-pear jelly surprise inside.",
  meta: [
    "Easy homemade recipe",
    "20-25 minute bake",
    "Prickly pear jelly center",
  ],
  surpriseHeadline: "The surprise is inside.",
  surpriseBody: [
    "These muffins look like a classic breakfast bake until you break one open. Nestled in the center is a spoonful of vivid magenta jelly made from prickly pear cactus fruit.",
    "About 1 teaspoon of prickly pear jelly can be placed in the center of each muffin after filling the cups halfway, then covered with the remaining batter. The jelly softens as the muffins bake and becomes a bright pocket of color when you split them open.",
  ],
  whyHeadline: "Why prickly pear?",
  whyBody: [
    "Prickly pear is the fruit of the Opuntia cactus, closely associated with the desert Southwest. When ripe, the flesh can show a striking red or magenta color that carries through into jelly.",
    "As a muffin filling, that color turns a simple homemade bake into something unexpected. It is an unusual pantry ingredient for curious cooks, and a natural fit for Southwest-inspired kitchens and food boards.",
    "This page focuses on culinary use, not health claims. The jelly is interesting because of its origin, color, and how it changes a familiar muffin.",
  ],
  ingredients: [
    { amount: "2 cups", item: "all-purpose flour" },
    { amount: "1/4 cup", item: "sugar" },
    { amount: "3 teaspoons", item: "baking powder" },
    { amount: "1/2 teaspoon", item: "salt" },
    { amount: "1/4 cup", item: "vegetable oil" },
    { amount: "1", item: "egg" },
    { amount: "1 cup", item: "milk" },
    {
      item: "Prickly pear jelly",
      note: "about 1 teaspoon per muffin for the center filling",
    },
  ],
  ingredientsNote:
    "A related Cheri's Desert Harvest recipe has historically referenced an 8 oz jar for a full batch. For this test, a 5 oz jar can be used depending on muffin yield and how generously you portion the filling. The number of muffins depends on pan size and how much jelly you place in each cup.",
  steps: [
    {
      title: "Prepare the dry ingredients",
      body: "In a mixing bowl, stir together the flour, sugar, baking powder, and salt until evenly combined.",
    },
    {
      title: "Combine wet ingredients",
      body: "In a separate bowl, whisk the vegetable oil, egg, and milk until smooth.",
    },
    {
      title: "Mix batter",
      body: "Pour the wet mixture into the dry ingredients and stir just until the batter comes together. Avoid overmixing.",
    },
    {
      title: "Fill muffin cups halfway",
      body: "Spoon batter into greased or lined muffin cups until each cup is about halfway full.",
    },
    {
      title: "Add about 1 teaspoon prickly pear jelly to the center",
      body: "Place about 1 teaspoon of prickly pear jelly in the center of each partially filled cup.",
    },
    {
      title: "Cover with remaining batter",
      body: "Top each cup with enough remaining batter to cover the jelly and fill the cups.",
    },
    {
      title: "Bake at 400°F / 375°F convection",
      body: "Preheat the oven to 400°F, or 375°F if using convection. Place the pan on the center rack.",
    },
    {
      title: "Bake approximately 20-25 minutes",
      body: "Bake until the muffins are golden and a toothpick inserted near the edge comes out clean. Exact timing can vary by oven and pan.",
    },
    {
      title: "Cool and serve",
      body: "Let the muffins cool briefly in the pan, then transfer to a rack. Serve warm or at room temperature so the jelly center stays soft.",
    },
  ],
  bakeTemp: "400°F",
  bakeTempConvection: "375°F convection",
  bakeTime: "approximately 20-25 minutes",
  difficulty: "Easy",
  faq: [
    {
      question: "What is prickly pear jelly?",
      answer:
        "Prickly pear jelly is a fruit preserve made from the fruit of the Opuntia cactus. Cheri's Desert Harvest Prickly Pear Cactus Jelly lists organic prickly pear cactus, organic lemon juice, pure cane sugar, citrus pectin, and citric acid on the label.",
    },
    {
      question: "How do you put jelly inside a muffin?",
      answer:
        "Fill each muffin cup about halfway with batter, add about 1 teaspoon of prickly pear jelly to the center, then cover with the remaining batter before baking.",
    },
    {
      question: "How much prickly pear jelly goes in each muffin?",
      answer:
        "About 1 teaspoon per muffin is a practical starting point. Use more or less based on how bold you want the center to be and how many muffins your pan yields.",
    },
    {
      question: "Can I use another jam instead?",
      answer:
        "Yes. Another thick jam or jelly can work as a center filling. Prickly pear jelly is used here for its vivid color and Southwest character.",
    },
    {
      question: "What temperature should I bake the muffins at?",
      answer:
        "Bake at 400°F, or 375°F if using a convection oven.",
    },
    {
      question: "How long do the muffins bake?",
      answer:
        "Bake approximately 20-25 minutes, until golden. Check a few minutes early, since ovens and pans vary.",
    },
    {
      question: "Where can I buy prickly pear jelly?",
      answer:
        "Cheri's Desert Harvest Prickly Pear Cactus Jelly is available on Amazon in a 5 oz (140g) jar.",
      amazonLink: true,
    },
  ],
  moreUses: [
    {
      title: "Toast",
      href: `${GUIDE_PATH}#ways-to-use`,
      description: "A small spoonful with breakfast toast or biscuits.",
    },
    {
      title: "Cheese boards",
      href: `${GUIDE_PATH}#ways-to-use`,
      description: "Pair with soft cheeses and crackers.",
    },
    {
      title: "Glazes",
      href: `${GUIDE_PATH}#ways-to-use`,
      description: "Use as a glaze over lamb or pork.",
    },
    {
      title: "Cheesecake",
      href: `${GUIDE_PATH}#ways-to-use`,
      description: "Drizzle or swirl into Prickly Pear Cheesecake.",
    },
    {
      title: "Fresh fruit",
      href: `${GUIDE_PATH}#ways-to-use`,
      description: "Spoon over sliced fruit as a simple topping.",
    },
    {
      title: "Creative drinks",
      href: `${GUIDE_PATH}#ways-to-use`,
      description: "Try a small amount in cocktails or mocktails.",
    },
  ],
  images: {
    hero: "/images/arizona-sunrise-muffins-hero.png",
    cutOpen: "/images/arizona-sunrise-muffin-cut.png",
    product: IMAGES.jar,
    lifestyle: "/images/arizona-sunrise-muffins-hero.png",
  },
  ogImage: "/images/arizona-sunrise-muffins-hero.png",
  sourceMessages: {
    "facebook-easy-homemade-muffins":
      "Looking for an easy homemade muffin with a colorful surprise?",
    "facebook-simple-recipes":
      "A simple breakfast bake with a Southwest twist.",
    "facebook-breakfast-muffins":
      "Homemade breakfast muffins with a prickly-pear center.",
    "pinterest-sunrise-muffins":
      "Save this Arizona Sunrise Muffins recipe for your next bake.",
    facebook: "Discover a Southwest-inspired specialty food.",
    pinterest: "Save this guide for your next food board or recipe idea.",
  },
};
