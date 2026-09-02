import Link from "next/link";
import Image from "next/image";
import { getAllRecipes } from "@/config/recipes";
import { SectionContainer, SectionHeading } from "@/components/ui";

export function RecipeTeaser() {
  const recipes = getAllRecipes();

  return (
    <SectionContainer
      id="recipes"
      ariaLabelledBy="recipes-heading"
      className="bg-white"
    >
      <SectionHeading
        id="recipes-heading"
        title="Prickly pear jelly recipes"
        subtitle="Editorial recipes that showcase ways to use prickly pear jelly at home."
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {recipes.map((recipe) => (
          <article
            key={recipe.slug}
            className="grid overflow-hidden rounded-sm border border-sand-dark bg-sand-light shadow-sm md:grid-cols-2"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[220px]">
              <Image
                src={recipe.images.cutOpen}
                alt={recipe.cutOpenImageAlt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="flex flex-col justify-center p-6">
              <h3 className="font-serif text-xl font-bold text-charcoal md:text-2xl">
                {recipe.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-light md:text-base">
                {recipe.subheadline}
              </p>
              <div className="mt-5">
                <Link
                  href={recipe.path}
                  className="inline-flex items-center justify-center rounded-sm bg-pear px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pear-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pear"
                >
                  View recipe
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
