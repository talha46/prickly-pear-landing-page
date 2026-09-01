import { GUIDE_PATH, SITE_URL } from "@/config/product";
import type { RecipeDefinition } from "@/config/recipes";

const RECIPES_ANCHOR = `${GUIDE_PATH}#recipes`;

export function buildRecipeJsonLd(recipe: RecipeDefinition) {
  const recipeUrl = `${SITE_URL}${recipe.path}`;

  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.seoDescription,
    image: [`${SITE_URL}${recipe.ogImage}`],
    author: {
      "@type": "Organization",
      name: "Prickly Pear Jelly Guide",
      url: `${SITE_URL}${GUIDE_PATH}`,
    },
    dateModified: recipe.dateModified,
    ...(recipe.datePublished ? { datePublished: recipe.datePublished } : {}),
    recipeCategory: "Breakfast",
    recipeCuisine: "Southwestern",
    keywords: [
      "Arizona Sunrise Muffins",
      "prickly pear jelly",
      "prickly pear muffins",
      "homemade muffins",
      "prickly pear recipes",
      "prickly pear breakfast",
    ].join(", "),
    recipeIngredient: recipe.ingredients.map((ingredient) =>
      ingredient.amount
        ? `${ingredient.amount} ${ingredient.item}${ingredient.note ? ` (${ingredient.note})` : ""}`
        : `${ingredient.item}${ingredient.note ? ` (${ingredient.note})` : ""}`
    ),
    recipeInstructions: recipe.steps.map((step, index) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.body,
      url: `${recipeUrl}#directions`,
      position: index + 1,
    })),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": recipeUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Prickly Pear Guide",
        item: `${SITE_URL}${GUIDE_PATH}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Recipes",
        item: `${SITE_URL}${RECIPES_ANCHOR}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: recipe.title,
        item: recipeUrl,
      },
    ],
  };

  return [recipeSchema, breadcrumbSchema];
}
