import { GUIDE_PATH, PRODUCT, SITE_URL } from "@/config/product";
import type { RecipeDefinition } from "@/config/recipes";

export function getRecipeSchema(recipe: RecipeDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.seoDescription,
    image: [`${SITE_URL}${recipe.images.hero}`, `${SITE_URL}${recipe.images.cutOpen}`],
    recipeIngredient: recipe.ingredients.map((ingredient) =>
      ingredient.amount
        ? `${ingredient.amount} ${ingredient.item}`
        : ingredient.item
    ),
    recipeInstructions: recipe.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
    cookTime: "PT20M",
    // Bake window is approximately 20-25 minutes; schema uses the lower bound.
    recipeCategory: "Breakfast",
    recipeCuisine: "Southwest",
    keywords: [
      "arizona sunrise muffins",
      "prickly pear jelly muffins",
      "prickly pear jelly recipe",
      "homemade muffins",
    ].join(", "),
    about: {
      "@type": "Product",
      name: PRODUCT.name,
      brand: PRODUCT.brand,
    },
  };
}

export function getBreadcrumbSchema(recipe: RecipeDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Prickly Pear Guide",
        item: `${SITE_URL}${GUIDE_PATH}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: recipe.title,
        item: `${SITE_URL}${recipe.path}`,
      },
    ],
  };
}
