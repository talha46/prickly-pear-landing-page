"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/config/product";
import { AmazonLink } from "@/components/AmazonLink";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-sand-light px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="text-center font-serif text-3xl font-bold tracking-tight text-charcoal md:text-4xl"
        >
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-charcoal-light">
          Quick answers about prickly pear jelly, cactus jelly, and how to use
          it.
        </p>

        <dl className="mt-10 divide-y divide-sand-dark">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const hasLink = "link" in item && item.link;

            return (
              <div key={item.question} className="py-4">
                <dt>
                  <button
                    type="button"
                    id={`faq-question-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
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
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                  className="mt-3 text-base leading-relaxed text-charcoal-light"
                >
                  <p>{item.answer}</p>
                  {hasLink && (
                    <p className="mt-3">
                      <AmazonLink variant="text" placement="faq">
                        {item.linkText}
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
