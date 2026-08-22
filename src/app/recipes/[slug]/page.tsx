import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RecipePage } from "@/components/recipes/RecipePage";
import { SITE_URL } from "@/config/product";
import {
  getAllRecipeSlugs,
  getRecipeBySlug,
} from "@/config/recipes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllRecipeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return {
      title: "Recipe not found",
    };
  }

  return {
    title: recipe.seoTitle,
    description: recipe.seoDescription,
    alternates: {
      canonical: recipe.path,
    },
    openGraph: {
      title: recipe.seoTitle,
      description: recipe.seoDescription,
      url: `${SITE_URL}${recipe.path}`,
      siteName: "Prickly Pear Jelly Guide",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: recipe.ogImage,
          width: 1600,
          height: 900,
          alt: `${recipe.title} with prickly pear jelly center`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: recipe.seoTitle,
      description: recipe.seoDescription,
      images: [recipe.ogImage],
    },
  };
}

export default async function RecipeSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return <RecipePage recipe={recipe} />;
}
