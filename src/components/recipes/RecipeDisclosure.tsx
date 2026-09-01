import type { RecipeDefinition } from "@/config/recipes";

export function RecipeDisclosure({ recipe }: { recipe: RecipeDefinition }) {
  return (
    <aside
      id="recipe-disclosure"
      aria-labelledby="recipe-disclosure-heading"
      className="border-t border-sand-dark bg-sand-light px-4 py-10 md:px-8"
    >
      <div className="mx-auto max-w-3xl rounded-sm border border-sand-dark bg-white p-6 md:p-8">
        <h2
          id="recipe-disclosure-heading"
          className="font-serif text-xl font-bold text-charcoal md:text-2xl"
        >
          Recipe source &amp; product disclosure
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal-light">
          {recipe.disclosureText}
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal-light">
          {recipe.productJarNote}
        </p>
      </div>
    </aside>
  );
}
