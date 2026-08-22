import Link from "next/link";
import { GUIDE_PATH } from "@/config/product";
import type { RecipeDefinition } from "@/config/recipes";
import { RecipeReveal } from "./RecipeReveal";

export function RecipeTips({ recipe }: { recipe: RecipeDefinition }) {
  return (
    <section
      id="tips"
      aria-labelledby="tips-heading"
      className="bg-sand-light px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <RecipeReveal>
          <h2
            id="tips-heading"
            className="font-serif text-3xl font-bold tracking-tight text-charcoal md:text-4xl"
          >
            {recipe.tipsHeadline}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal-light md:text-lg">
            {recipe.tipsBody.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 text-base leading-relaxed text-charcoal-light">
            <Link
              href={GUIDE_PATH}
              className="font-semibold text-pear underline decoration-pear/30 underline-offset-2 transition-colors hover:text-pear-dark hover:decoration-pear"
            >
              Explore more ways to use prickly pear jelly
            </Link>{" "}
            in our complete guide.
          </p>
        </RecipeReveal>
      </div>
    </section>
  );
}
