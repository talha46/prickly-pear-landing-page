import Image from "next/image";
import { AmazonLink } from "@/components/AmazonLink";
import type { RecipeDefinition } from "@/config/recipes";
import { RecipeImageReveal, RecipeReveal } from "./RecipeReveal";

export function RecipeJarHighlight({ recipe }: { recipe: RecipeDefinition }) {
  const highlight = recipe.jarHighlight;
  if (!highlight) {
    return null;
  }

  return (
    <section
      id="jar-highlight"
      aria-labelledby="jar-highlight-heading"
      className="bg-cactus-dark px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <RecipeImageReveal className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg ring-1 ring-white/10">
          <Image
            src={recipe.images.cutOpen}
            alt={recipe.cutOpenImageAlt}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </RecipeImageReveal>

        <RecipeReveal>
          <h2
            id="jar-highlight-heading"
            className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {highlight.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-sand md:text-lg">
            {highlight.body}
          </p>
          <ul className="mt-8 space-y-2 border-l-2 border-gold/40 pl-5">
            {highlight.highlightItems.map((item) => (
              <li
                key={item}
                className="font-serif text-xl font-bold text-sand md:text-2xl"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <AmazonLink
              placement="recipe-product-spotlight"
              variant="primary"
              className="bg-pear hover:bg-pear-light"
            >
              {highlight.ctaLabel}
            </AmazonLink>
          </div>
        </RecipeReveal>
      </div>
    </section>
  );
}
