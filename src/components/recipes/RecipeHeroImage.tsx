"use client";

import Image from "next/image";
import type { RecipeDefinition } from "@/config/recipes";
import { RecipeReveal } from "./RecipeReveal";

export function RecipeHeroImage({ recipe }: { recipe: RecipeDefinition }) {
  return (
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
  );
}
