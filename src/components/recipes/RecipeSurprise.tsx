import Image from "next/image";
import type { RecipeDefinition } from "@/config/recipes";
import { RecipeImageReveal, RecipeReveal } from "./RecipeReveal";

export function RecipeSurprise({ recipe }: { recipe: RecipeDefinition }) {
  return (
    <section
      id="surprise"
      aria-labelledby="surprise-heading"
      className="bg-sand-light px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <RecipeImageReveal className="relative aspect-[4/3] rounded-sm shadow-lg">
          <Image
            src={recipe.images.cutOpen}
            alt="Arizona Sunrise Muffins with prickly pear jelly centers"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </RecipeImageReveal>

        <RecipeReveal>
          <h2
            id="surprise-heading"
            className="font-serif text-3xl font-bold tracking-tight text-charcoal md:text-4xl"
          >
            {recipe.surpriseHeadline}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal-light md:text-lg">
            {recipe.surpriseBody.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </RecipeReveal>
      </div>
    </section>
  );
}
