import { arizonaSunriseMuffins } from "./arizona-sunrise-muffins";
import type { RecipeDefinition } from "./types";

const recipes: RecipeDefinition[] = [arizonaSunriseMuffins];

export function getAllRecipes(): RecipeDefinition[] {
  return recipes;
}

export function getRecipeBySlug(slug: string): RecipeDefinition | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getAllRecipeSlugs(): string[] {
  return recipes.map((recipe) => recipe.slug);
}

export type { RecipeDefinition } from "./types";
