"use client";

import type { RecipeDefinition, RecipeIngredient } from "@/config/recipes";

function formatIngredient(ingredient: RecipeIngredient) {
  return ingredient.amount
    ? `${ingredient.amount} ${ingredient.item}${ingredient.note ? ` (${ingredient.note})` : ""}`
    : `${ingredient.item}${ingredient.note ? ` (${ingredient.note})` : ""}`;
}

export function RecipeCard({ recipe }: { recipe: RecipeDefinition }) {
  const handlePrint = () => {
    window.print();
  };

  const groups = recipe.ingredientGroups;
  const flatIngredients = groups
    ? groups.flatMap((group) => group.items)
    : recipe.ingredients;

  return (
    <section
      id="recipe-card"
      aria-labelledby="recipe-card-heading"
      className="bg-sand-light px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div
        id="printable-recipe"
        className="mx-auto max-w-3xl border border-sand-dark/80 bg-white p-6 md:p-10 print:border-0 print:shadow-none"
      >
        <div className="flex flex-col gap-4 border-b border-sand-dark pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-light">
              Printable recipe
            </p>
            <h2
              id="recipe-card-heading"
              className="mt-2 font-serif text-3xl font-bold text-charcoal md:text-4xl"
            >
              {recipe.title}
            </h2>
            <p className="mt-2 text-charcoal-light">{recipe.subheadline}</p>
            <p className="mt-2 text-sm text-charcoal-light">
              Updated {recipe.updatedLabel} · Recipe concept: {recipe.recipeSource}
            </p>
            <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal-light">
              {recipe.cardMeta ? (
                recipe.cardMeta.map((item) => (
                  <div key={item.label}>
                    <dt className="inline font-semibold text-charcoal">
                      {item.label}:{" "}
                    </dt>
                    <dd className="inline">{item.value}</dd>
                  </div>
                ))
              ) : (
                <>
                  <div>
                    <dt className="inline font-semibold text-charcoal">
                      Difficulty:{" "}
                    </dt>
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
                </>
              )}
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
            {groups?.length ? (
              <div className="mt-4 space-y-6">
                {groups.map((group) => (
                  <div key={group.label}>
                    <h4 className="font-semibold text-charcoal">{group.label}</h4>
                    <ul className="mt-2 space-y-2 text-charcoal-light">
                      {group.items.map((ingredient) => (
                        <li key={ingredient.item} className="flex gap-2">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pear"
                            aria-hidden="true"
                          />
                          <span>{formatIngredient(ingredient)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="mt-4 space-y-2 text-charcoal-light">
                {flatIngredients.map((ingredient) => (
                  <li key={ingredient.item} className="flex gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pear"
                      aria-hidden="true"
                    />
                    <span>{formatIngredient(ingredient)}</span>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-4 text-xs leading-relaxed text-charcoal-light">
              {recipe.ingredientsNote}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold text-charcoal">
              Directions
            </h3>
            <ol className="mt-4 space-y-4 text-charcoal-light">
              {recipe.steps.map((step, index) => (
                <li key={step.title} className="flex gap-3">
                  <span
                    className="mt-0.5 shrink-0 font-serif text-lg font-bold text-pear"
                    aria-hidden="true"
                  >
                    {index + 1}.
                  </span>
                  <div>
                    <p className="font-semibold text-charcoal">{step.title}</p>
                    <p className="mt-1 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
