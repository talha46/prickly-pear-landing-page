"use client";

import type { RecipeDefinition } from "@/config/recipes";
import { RecipeReveal } from "./RecipeReveal";

export function RecipeSteps({ recipe }: { recipe: RecipeDefinition }) {
  return (
    <section
      id="directions"
      aria-labelledby="directions-heading"
      className="bg-white px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <RecipeReveal>
          <h2
            id="directions-heading"
            className="font-serif text-3xl font-bold tracking-tight text-charcoal md:text-4xl"
          >
            {recipe.stepsHeadline}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal-light md:text-lg">
            {recipe.stepsIntro}
          </p>
        </RecipeReveal>

        <ol className="mt-12 space-y-0">
          {recipe.steps.map((step, index) => (
            <RecipeReveal key={step.title} delay={Math.min(index * 0.04, 0.28)}>
              <li className="relative border-l border-sand-dark py-6 pl-8 last:pb-0">
                <span
                  className="absolute -left-3 top-7 flex h-6 w-6 items-center justify-center rounded-full bg-pear text-[11px] font-bold text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal-light">
                  {step.body}
                </p>
              </li>
            </RecipeReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
