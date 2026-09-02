import { GUIDE_PATH, SITE_URL } from "@/config/product";
import type { RecipeDefinition, RecipeIngredient } from "@/config/recipes";

const RECIPES_ANCHOR = `${GUIDE_PATH}#recipes`;

function formatIngredient(ingredient: RecipeIngredient): string {
  return ingredient.amount
    ? `${ingredient.amount} ${ingredient.item}${ingredient.note ? ` (${ingredient.note})` : ""}`
    : `${ingredient.item}${ingredient.note ? ` (${ingredient.note})` : ""}`;
}

function getAllIngredients(recipe: RecipeDefinition): RecipeIngredient[] {
  if (recipe.ingredientGroups?.length) {
    return recipe.ingredientGroups.flatMap((group) => group.items);
  }
  return recipe.ingredients;
}

export function buildRecipeJsonLd(recipe: RecipeDefinition) {
  const recipeUrl = `${SITE_URL}${recipe.path}`;
  const allIngredients = getAllIngredients(recipe);

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
    recipeCategory: recipe.recipeCategory,
    recipeCuisine: recipe.recipeCuisine,
    keywords: recipe.schemaKeywords.join(", "),
    ...(recipe.recipeYield ? { recipeYield: recipe.recipeYield } : {}),
    ...(recipe.cookTimeIso ? { cookTime: recipe.cookTimeIso } : {}),
    ...(recipe.totalTimeIso ? { totalTime: recipe.totalTimeIso } : {}),
    recipeIngredient: allIngredients.map(formatIngredient),
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
        name: "Prickly Pear Guide",
        item: `${SITE_URL}${GUIDE_PATH}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Recipes",
        item: `${SITE_URL}${RECIPES_ANCHOR}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: recipe.title,
        item: recipeUrl,
      },
    ],
  };

  return [recipeSchema, breadcrumbSchema];
}
