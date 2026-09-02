"use client";

import type { RecipeDefinition } from "@/config/recipes";
import { RecipeReveal } from "./RecipeReveal";

function StepList({
  steps,
  startNumber = 1,
}: {
  steps: RecipeDefinition["steps"];
  startNumber?: number;
}) {
  return (
    <ol className="mt-6 space-y-0">
      {steps.map((step, index) => {
        const stepNumber = startNumber + index;
        return (
          <li
            key={`${stepNumber}-${step.title}`}
            className="relative border-l border-sand-dark py-5 pl-8 last:pb-0"
          >
            <span
              className="absolute -left-3 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-pear text-[11px] font-bold text-white"
              aria-hidden="true"
            >
              {stepNumber}
            </span>
            <h4 className="font-serif text-lg font-bold text-charcoal md:text-xl">
              {step.title}
            </h4>
            <p className="mt-2 text-base leading-relaxed text-charcoal-light">
              {step.body}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

export function RecipeSteps({ recipe }: { recipe: RecipeDefinition }) {
  const phases = recipe.stepPhases;
  let stepOffset = 1;

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

        {phases?.length ? (
          <div className="mt-10 space-y-10">
            {phases.map((phase) => {
              const startNumber = stepOffset;
              stepOffset += phase.steps.length;
              return (
                <RecipeReveal key={phase.label}>
                  <h3 className="font-serif text-2xl font-bold text-charcoal">
                    {phase.label}
                  </h3>
                  <StepList steps={phase.steps} startNumber={startNumber} />
                </RecipeReveal>
              );
            })}
          </div>
        ) : (
          <RecipeReveal className="mt-10">
            <StepList steps={recipe.steps} />
          </RecipeReveal>
        )}
      </div>
    </section>
  );
}
