"use client";

import type { RecipeDefinition } from "@/config/recipes";
import { RecipeReveal } from "./RecipeReveal";

function IngredientList({
  items,
}: {
  items: RecipeDefinition["ingredients"];
}) {
  return (
    <ul className="mt-4 columns-1 gap-x-10 sm:columns-2">
      {items.map((ingredient) => (
        <li
          key={ingredient.item}
          className="break-inside-avoid border-b border-sand-dark/50 py-3.5 first:pt-0"
        >
          <p className="font-serif text-lg leading-snug text-charcoal">
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
            <p className="mt-1 text-sm text-charcoal-light">{ingredient.note}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

export function RecipeIngredients({ recipe }: { recipe: RecipeDefinition }) {
  const groups = recipe.ingredientGroups;

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
            {recipe.ingredientsIntro}
          </p>
        </RecipeReveal>

        {groups?.length ? (
          <div className="mt-10 space-y-10">
            {groups.map((group) => (
              <RecipeReveal key={group.label}>
                <h3 className="font-serif text-xl font-bold text-charcoal md:text-2xl">
                  {group.label}
                </h3>
                <IngredientList items={group.items} />
              </RecipeReveal>
            ))}
          </div>
        ) : (
          <RecipeReveal className="mt-10">
            <IngredientList items={recipe.ingredients} />
          </RecipeReveal>
        )}

        <RecipeReveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-charcoal-light md:text-base">
            {recipe.ingredientsNote}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-charcoal-light/90 md:text-base">
            {recipe.productJarNote}
          </p>
        </RecipeReveal>
      </div>
    </section>
  );
}
