import type { MetadataRoute } from "next";
import { GUIDE_PATH, GUIDE_UPDATED_ISO, SITE_URL } from "@/config/product";
import { getAllRecipeSlugs, getRecipeBySlug } from "@/config/recipes";

export default function sitemap(): MetadataRoute.Sitemap {
  const recipeEntries = getAllRecipeSlugs().map((slug) => {
    const recipe = getRecipeBySlug(slug);
    return {
      url: `${SITE_URL}${recipe!.path}`,
      lastModified: recipe!.dateModified,
    };
  });

  return [
    {
      url: `${SITE_URL}${GUIDE_PATH}`,
      lastModified: GUIDE_UPDATED_ISO,
    },
    ...recipeEntries,
  ];
}
