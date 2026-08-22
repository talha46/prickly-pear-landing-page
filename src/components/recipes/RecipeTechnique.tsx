import type { RecipeDefinition } from "@/config/recipes";
import { RecipeReveal } from "./RecipeReveal";

export function RecipeTechnique({ recipe }: { recipe: RecipeDefinition }) {
  return (
    <section
      id="technique"
      aria-labelledby="technique-heading"
      className="bg-sand px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        {recipe.techniqueSections.map((section, sectionIndex) => (
          <RecipeReveal key={section.headline} delay={sectionIndex * 0.05}>
            <div className={sectionIndex > 0 ? "mt-12" : ""}>
              <h2
                id={sectionIndex === 0 ? "technique-heading" : undefined}
                className="font-serif text-2xl font-bold tracking-tight text-charcoal md:text-3xl"
              >
                {section.headline}
              </h2>
              <ul className="mt-4 space-y-2 text-base leading-relaxed text-charcoal-light">
                {section.items.map((item) => (
                  <li key={item.slice(0, 48)} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pear"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RecipeReveal>
        ))}
      </div>
    </section>
  );
}
