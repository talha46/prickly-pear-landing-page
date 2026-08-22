import type { MetadataRoute } from "next";
import { GUIDE_PATH, SITE_URL } from "@/config/product";
import { getAllRecipeSlugs, getRecipeBySlug } from "@/config/recipes";

export default function sitemap(): MetadataRoute.Sitemap {
  const recipeEntries = getAllRecipeSlugs().map((slug) => {
    const recipe = getRecipeBySlug(slug);
    return {
      url: `${SITE_URL}${recipe!.path}`,
      lastModified: recipe!.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}${GUIDE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...recipeEntries,
  ];
}
