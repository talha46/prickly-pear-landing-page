import Link from "next/link";
import { GUIDE_PATH } from "@/config/product";
import type { RecipeDefinition } from "@/config/recipes";
import { RecipeReveal } from "./RecipeReveal";

export function RecipeMoreUses({ recipe }: { recipe: RecipeDefinition }) {
  return (
    <section
      id="more-uses"
      aria-labelledby="more-uses-heading"
      className="bg-sand px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <RecipeReveal className="text-center">
          <h2
            id="more-uses-heading"
            className="font-serif text-3xl font-bold tracking-tight text-charcoal md:text-4xl"
          >
            More ways to use prickly pear jelly
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-charcoal-light">
            After muffins, try these ideas from the Prickly Pear Guide.
          </p>
        </RecipeReveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recipe.moreUses.map((use, index) => (
            <RecipeReveal key={use.title} delay={index * 0.05}>
              <li>
                <Link
                  href={use.href}
                  className="block border-l-4 border-cactus bg-white p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pear"
                >
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    {use.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                    {use.description}
                  </p>
                </Link>
              </li>
            </RecipeReveal>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href={GUIDE_PATH}
            className="inline-flex items-center justify-center rounded-sm border-2 border-cactus px-6 py-3.5 text-base font-semibold text-cactus transition-colors hover:bg-cactus hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cactus"
          >
            Explore the Prickly Pear Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
