"use client";

import { useState } from "react";
import { AmazonLink } from "@/components/AmazonLink";
import type { RecipeDefinition } from "@/config/recipes";

export function RecipeFAQ({ recipe }: { recipe: RecipeDefinition }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="recipe-faq-heading"
      className="bg-sand-light px-4 py-16 md:px-8 md:py-20 lg:py-24 print:hidden"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="recipe-faq-heading"
          className="text-center font-serif text-3xl font-bold tracking-tight text-charcoal md:text-4xl"
        >
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-charcoal-light">
          Practical answers about the muffins and prickly pear jelly.
        </p>

        <dl className="mt-10 divide-y divide-sand-dark">
          {recipe.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="py-4">
                <dt>
                  <button
                    type="button"
                    id={`recipe-faq-q-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`recipe-faq-a-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 text-left font-semibold text-charcoal transition-colors hover:text-pear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pear"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`mt-1 shrink-0 text-pear transition-transform ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  id={`recipe-faq-a-${index}`}
                  role="region"
                  aria-labelledby={`recipe-faq-q-${index}`}
                  hidden={!isOpen}
                  className="mt-3 text-base leading-relaxed text-charcoal-light"
                >
                  <p>{item.answer}</p>
                  {item.amazonLink && (
                    <p className="mt-3">
                      <AmazonLink variant="text" placement="recipe-faq">
                        View on Amazon
                      </AmazonLink>
                    </p>
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
