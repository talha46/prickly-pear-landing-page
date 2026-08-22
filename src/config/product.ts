export const GUIDE_UPDATED = "August 2026";

export const GUIDE_PATH = "/prickly-pear-guide";

export const AMAZON_PRODUCT_URL =
  "https://www.amazon.com/gp/product/B000MBM8T8/ref=cx_skuctr_share?smid=A2YJU6FJGYE1AY";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://pricklypearjelly.mohidenterprisesllc.com";

export const PRODUCT = {
  name: "Cheri's Desert Harvest Prickly Pear Cactus Jelly",
  brand: "Cheri's Desert Harvest",
  size: "5 oz (140g)",
  asin: "B000MBM8T8",
  ingredients: [
    "Organic Prickly Pear Cactus",
    "Organic Lemon Juice",
    "Pure Cane Sugar",
    "Citrus Pectin",
    "Citric Acid",
  ],
  attributes: [
    "All Natural",
    "Contains Fresh Fruit Juices",
    "No Artificial Colors",
    "No Preservatives",
    "Made in USA",
  ],
  nutrition: {
    servingSize: "1 Tbsp (15g)",
    servingsPerContainer: 10,
    calories: 35,
    totalFat: "0g",
    sodium: "0mg",
    totalCarbohydrate: "10g",
    sugars: "10g",
    protein: "0g",
    vitaminC: "2%",
  },
  servingSuggestions: [
    "Natural flavor complement as a glaze over lamb and pork",
    "Topping over fresh fruit",
    "Prickly Pear Cheesecake",
    "See website for recipes",
  ],
  manufacturer: {
    name: "Cheri's Desert Harvest",
    address: "1840 E. Winsett Street, Tucson, Arizona 85719",
    website: "www.CherisDesertHarvest.com",
  },
} as const;

export const IMAGES = {
  cactus: "/images/prickly-pear-cactus.png",
  fruit: "/images/prickly-pear-fruit.png",
  sliced: "/images/prickly-pear-sliced.png",
  jar: "/images/prickly-pear-jelly-jar.png",
  lifestyle: "/images/prickly-pear-jelly-lifestyle.png",
  freshHarvest: "/images/prickly-pear-fresh-harvest.png",
  labelBack: "/images/prickly-pear-jelly-label-back.png",
  ingredients: "/images/prickly-pear-jelly-ingredients.png",
  nutrition: "/images/prickly-pear-jelly-nutrition.png",
} as const;

export const SEO = {
  title: "Prickly Pear Jelly Guide: What It Is, How to Use It & Where to Buy",
  description:
    "Learn what prickly pear and cactus jelly are, how to use prickly pear jelly in recipes and glazes, explore Southwest food gift ideas, and see Cheri's Desert Harvest Prickly Pear Cactus Jelly on Amazon.",
  ogImage: "/images/prickly-pear-jelly-jar.png",
} as const;

export const SOURCE_MESSAGES: Record<string, string> = {
  "reddit-gifting": "Looking for a unique Southwest food gift?",
  "reddit-cocktail": "Looking for a prickly-pear ingredient for drinks?",
  "reddit-food":
    "Curious about one of the Southwest's most distinctive fruits?",
  facebook: "Discover a Southwest-inspired specialty food.",
  pinterest: "Save this guide for your next food board or recipe idea.",
};

export const USES = [
  {
    title: "Toast & Breakfast",
    description:
      "Try a small spoonful alongside toast, biscuits, or a morning spread for a colorful start to the day.",
  },
  {
    title: "Cheese Boards",
    description:
      "Pair with soft cheeses and crackers—the vibrant color adds visual interest to any board.",
  },
  {
    title: "Glaze for Lamb",
    description:
      "Use as a natural flavor complement as a glaze over lamb, as suggested on the product label.",
  },
  {
    title: "Glaze for Pork",
    description:
      "Brush over pork during the final minutes of roasting for a sweet, colorful finish.",
  },
  {
    title: "Fresh Fruit Topping",
    description:
      "Spoon over sliced fresh fruit for a simple dessert or snack, as noted on the packaging.",
  },
  {
    title: "Prickly Pear Cheesecake",
    description:
      "Drizzle or swirl into cheesecake—a serving suggestion printed on the product label.",
  },
  {
    title: "Creative Drinks",
    description:
      "Experiment by stirring a small amount into cocktails, mocktails, or sparkling water.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is prickly pear?",
    answer:
      "Prickly pear is the fruit of the Opuntia cactus, commonly found in desert and Southwest regions including Arizona. The fruit—also called tuna or cactus pear—can have vivid red or purple flesh and is eaten fresh or used in prepared foods like prickly pear jelly, prickly pear jam, and cactus jelly.",
  },
  {
    question: "What does prickly pear taste like?",
    answer:
      "Prickly pear flavor varies by variety and ripeness. Some people describe fresh fruit notes as mildly sweet with melon-like or berry-like character, though experiences differ. This guide focuses on how the fruit is used in jelly rather than making specific taste guarantees for any product.",
  },
  {
    question: "What does prickly pear jelly contain?",
    answer:
      "Cheri's Desert Harvest Prickly Pear Cactus Jelly contains organic prickly pear cactus, organic lemon juice, pure cane sugar, citrus pectin, and citric acid—as listed on the product label.",
  },
  {
    question: "How big is the jar?",
    answer:
      "The jar contains 5 oz (140g) of jelly, with approximately 10 servings per container at 1 tablespoon (15g) each.",
  },
  {
    question: "How can I use prickly pear jelly?",
    answer:
      "Common uses include spreading on toast, glazing lamb or pork, topping fresh fruit, incorporating into prickly pear cheesecake, pairing with cheese boards, and experimenting in drinks. The product label suggests several prickly pear recipes and serving ideas.",
  },
  {
    question: "What foods pair well with prickly pear jelly?",
    answer:
      "According to the product packaging, prickly pear jelly works as a prickly pear glaze over lamb and pork, as a topping over fresh fruit, and in Prickly Pear Cheesecake. It can also complement toast, cheese boards, and creative drink recipes.",
  },
  {
    question: "Is prickly pear jelly made from cactus fruit?",
    answer:
      "Yes. This cactus jelly is made with organic prickly pear cactus—the fruit of the Opuntia cactus—as its primary ingredient, along with organic lemon juice, pure cane sugar, citrus pectin, and citric acid.",
  },
  {
    question: "Is this a good prickly pear gift or Southwest food gift?",
    answer:
      "A jar of Arizona prickly pear jelly can appeal to people who enjoy Southwest food gifts, unusual pantry items, or regional specialty foods. It is a compact prickly pear gift option for food-curious recipients.",
  },
  {
    question: "Where can I buy prickly pear jelly?",
    answer:
      "Cheri's Desert Harvest Prickly Pear Cactus Jelly is available on Amazon.",
    link: AMAZON_PRODUCT_URL,
    linkText: "View on Amazon",
  },
] as const;

export const NAV_LINKS = [
  { href: "#what-is-prickly-pear", label: "What Is It" },
  { href: "#ways-to-use", label: "Ways to Use It" },
  { href: "/recipes/arizona-sunrise-muffins", label: "Recipes" },
  { href: "#product", label: "Product" },
  { href: "#faq", label: "FAQ" },
] as const;
