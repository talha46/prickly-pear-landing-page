import Image from "next/image";
import Link from "next/link";
import { GUIDE_PATH, IMAGES } from "@/config/product";
import type { RecipeDefinition } from "@/config/recipes";
import { RecipeImageReveal, RecipeReveal } from "./RecipeReveal";

export function RecipeWhy({ recipe }: { recipe: RecipeDefinition }) {
  return (
    <section
      id="why-prickly-pear"
      aria-labelledby="why-heading"
      className="bg-white px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <RecipeReveal className="order-2 lg:order-1">
          <h2
            id="why-heading"
            className="font-serif text-3xl font-bold tracking-tight text-charcoal md:text-4xl"
          >
            {recipe.whyHeadline}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal-light md:text-lg">
            {recipe.whyBody.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p>
              <Link
                href={GUIDE_PATH}
                className="font-semibold text-pear underline decoration-pear/30 underline-offset-2 transition-colors hover:text-pear-dark"
              >
                Learn more about prickly pear jelly
              </Link>
              .
            </p>
          </div>
        </RecipeReveal>

        <RecipeImageReveal className="relative order-1 aspect-square rounded-sm shadow-lg lg:order-2">
          <Image
            src={IMAGES.sliced}
            alt="Prickly pear fruit halved to show vivid magenta flesh"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </RecipeImageReveal>
      </div>
    </section>
  );
}
