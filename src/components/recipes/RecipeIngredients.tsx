"use client";

import type { RecipeDefinition } from "@/config/recipes";
import { RecipeReveal } from "./RecipeReveal";

export function RecipeIngredients({ recipe }: { recipe: RecipeDefinition }) {
  return (
    <section
      id="ingredients"
      aria-labelledby="ingredients-heading"
      className="bg-sand px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <RecipeReveal>
          <h2
            id="ingredients-heading"
            className="font-serif text-3xl font-bold tracking-tight text-charcoal md:text-4xl"
          >
            Ingredients
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal-light md:text-lg">
            A short pantry list for homemade muffins with a prickly pear jelly
            center.
          </p>
        </RecipeReveal>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {recipe.ingredients.map((ingredient, index) => (
            <RecipeReveal key={ingredient.item} delay={index * 0.05}>
              <li className="border-l-4 border-pear bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md">
                <p className="font-serif text-lg font-bold text-charcoal">
                  {ingredient.amount ? (
                    <>
                      <span className="text-pear">{ingredient.amount}</span>{" "}
                      {ingredient.item}
                    </>
                  ) : (
                    ingredient.item
                  )}
                </p>
                {ingredient.note && (
                  <p className="mt-1 text-sm text-charcoal-light">
                    {ingredient.note}
                  </p>
                )}
              </li>
            </RecipeReveal>
          ))}
        </ul>

        <RecipeReveal delay={0.2}>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-charcoal-light md:text-base">
            {recipe.ingredientsNote}
          </p>
          <p className="mt-4 max-w-3xl rounded-sm border border-sand-dark bg-white p-4 text-sm leading-relaxed text-charcoal-light md:text-base">
            {recipe.productJarNote}
          </p>
        </RecipeReveal>
      </div>
    </section>
  );
}
