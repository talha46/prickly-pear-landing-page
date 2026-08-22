"use client";

import { AmazonLink } from "@/components/AmazonLink";
import type { RecipeDefinition } from "@/config/recipes";

export function RecipeCard({ recipe }: { recipe: RecipeDefinition }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="recipe-card"
      aria-labelledby="recipe-card-heading"
      className="bg-sand-light px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div
        id="printable-recipe"
        className="mx-auto max-w-3xl border border-sand-dark bg-white p-6 shadow-sm md:p-10 print:border-0 print:shadow-none"
      >
        <div className="flex flex-col gap-4 border-b border-sand-dark pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2
              id="recipe-card-heading"
              className="font-serif text-3xl font-bold text-charcoal md:text-4xl"
            >
              Recipe Card
            </h2>
            <p className="mt-2 font-serif text-xl font-bold text-charcoal">
              {recipe.title}
            </p>
            <p className="mt-2 text-charcoal-light">{recipe.subheadline}</p>
            <p className="mt-2 text-sm text-charcoal-light">
              Updated {recipe.updatedLabel} · Recipe concept: {recipe.recipeSource}
            </p>
            <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal-light">
              <div>
                <dt className="inline font-semibold text-charcoal">Difficulty: </dt>
                <dd className="inline">{recipe.difficulty}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-charcoal">Bake: </dt>
                <dd className="inline">
                  {recipe.bakeTemp} / {recipe.bakeTempConvection}
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold text-charcoal">Time: </dt>
                <dd className="inline">{recipe.bakeTime}</dd>
              </div>
            </dl>
          </div>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex shrink-0 items-center justify-center rounded-sm border-2 border-cactus px-4 py-2.5 text-sm font-semibold text-cactus transition-colors hover:bg-cactus hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cactus print:hidden"
          >
            Print Recipe
          </button>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl font-bold text-charcoal">
              Ingredients
            </h3>
            <ul className="mt-4 space-y-2 text-charcoal-light">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient.item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pear" aria-hidden="true" />
                  <span>
                    {ingredient.amount
                      ? `${ingredient.amount} ${ingredient.item}`
                      : ingredient.item}
                    {ingredient.note ? ` (${ingredient.note})` : ""}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-charcoal-light">
              {recipe.ingredientsNote}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold text-charcoal">
              Directions
            </h3>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-charcoal-light">
              {recipe.steps.map((step) => (
                <li key={step.title}>
                  <span className="font-semibold text-charcoal">{step.title}. </span>
                  {step.body}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-8 border-t border-sand-dark pt-6 print:hidden">
          <AmazonLink placement="recipe-card" variant="primary">
            Get the Prickly Pear Jelly
          </AmazonLink>
          <p className="mt-3 text-sm text-charcoal-light">
            5 OZ / 140g jar · Made in USA · No Artificial Colors · No Preservatives
          </p>
        </div>
      </div>
    </section>
  );
}
