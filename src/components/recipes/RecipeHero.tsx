"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AmazonLink } from "@/components/AmazonLink";
import type { RecipeDefinition } from "@/config/recipes";
import { getTrafficContext } from "@/lib/traffic";
import { RecipeReveal } from "./RecipeReveal";

type RecipeHeroProps = {
  recipe: RecipeDefinition;
  children: React.ReactNode;
};

export function RecipeHero({ recipe, children }: RecipeHeroProps) {
  const [sourceMessage, setSourceMessage] = useState<string | null>(null);

  useEffect(() => {
    const { source } = getTrafficContext();
    setSourceMessage(recipe.sourceMessages?.[source] ?? null);
  }, [recipe.sourceMessages]);

  return (
    <header className="relative overflow-hidden bg-cactus-dark">
      <div className="absolute inset-0">
        <Image
          src={recipe.images.hero}
          alt={recipe.heroImageAlt}
          fill
          priority
          className="object-cover object-[center_35%] opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cactus-dark/75 via-cactus-dark/70 to-cactus-dark/90" />
      </div>

      <div className="relative mx-auto grid min-h-0 max-w-6xl items-center gap-6 px-4 py-10 md:min-h-[88dvh] md:grid-cols-2 md:gap-12 md:px-8 md:py-20 lg:min-h-[92dvh] lg:py-24">
        <div className="order-2 md:order-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            {recipe.heroEyebrow}
          </p>
          {sourceMessage && (
            <p className="mt-3 rounded-sm border border-gold/30 bg-gold/10 px-4 py-2.5 text-sm leading-relaxed text-sand">
              {sourceMessage}
            </p>
          )}
          {children}
          <p className="mt-4 max-w-md text-lg leading-relaxed text-sand md:text-xl">
            {recipe.subheadline}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Recipe highlights">
            {recipe.meta.map((item) => (
              <li
                key={item}
                className="rounded-sm border border-sand/25 bg-cactus-dark/40 px-3 py-1.5 text-xs font-medium text-sand md:text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#recipe-card"
              className="inline-flex items-center justify-center rounded-sm bg-pear px-6 py-3.5 text-base font-semibold text-white transition-transform duration-150 ease-out hover:bg-pear-dark active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pear"
            >
              Jump to Recipe
            </a>
            <AmazonLink placement="recipe-hero" variant="secondary-light">
              {recipe.heroSecondaryCta}
            </AmazonLink>
          </div>
        </div>

        <RecipeReveal className="relative order-1 mx-auto aspect-[5/4] w-full max-w-lg overflow-hidden rounded-sm shadow-2xl ring-1 ring-gold/25 md:order-2 md:aspect-[4/3] md:max-w-none">
          <Image
            src={recipe.images.cutOpen}
            alt={recipe.cutOpenImageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </RecipeReveal>
      </div>
    </header>
  );
}
