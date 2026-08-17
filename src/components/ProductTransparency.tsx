"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES, PRODUCT } from "@/config/product";
import { SectionContainer, SectionHeading } from "./ui";

type Tab = "ingredients" | "nutrition" | "serving";

const tabs: { id: Tab; label: string }[] = [
  { id: "ingredients", label: "Ingredients" },
  { id: "nutrition", label: "Nutrition" },
  { id: "serving", label: "Serving Suggestions" },
];

export function ProductTransparency() {
  const [activeTab, setActiveTab] = useState<Tab>("ingredients");
  const { nutrition } = PRODUCT;

  return (
    <SectionContainer
      id="transparency"
      ariaLabelledBy="transparency-heading"
      className="bg-white"
    >
      <SectionHeading
        id="transparency-heading"
        title="Product Transparency"
        subtitle="Label information, straight from the jar."
        align="center"
      />

      <div className="mx-auto max-w-3xl">
        <div
          role="tablist"
          aria-label="Product label information"
          className="flex border-b border-sand-dark"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors md:text-base ${
                activeTab === tab.id
                  ? "border-b-2 border-pear text-pear"
                  : "text-charcoal-light hover:text-charcoal"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {activeTab === "ingredients" && (
            <div
              role="tabpanel"
              id="panel-ingredients"
              aria-labelledby="tab-ingredients"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    Ingredients
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {PRODUCT.ingredients.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-charcoal-light"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-pear"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 space-y-1 text-sm text-charcoal-light">
                    {PRODUCT.attributes.map((attr) => (
                      <li key={attr}>{attr}</li>
                    ))}
                  </ul>
                </div>
                <figure className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand-light">
                  <Image
                    src={IMAGES.ingredients}
                    alt="Product label ingredients panel listing organic prickly pear cactus, organic lemon juice, pure cane sugar, citrus pectin, and citric acid"
                    fill
                    loading="lazy"
                    className="object-contain p-2"
                    sizes="400px"
                  />
                </figure>
              </div>
            </div>
          )}

          {activeTab === "nutrition" && (
            <div
              role="tabpanel"
              id="panel-nutrition"
              aria-labelledby="tab-nutrition"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    Nutrition Facts
                  </h3>
                  <p className="mt-1 text-sm text-charcoal-light">
                    Per serving: {nutrition.servingSize}
                  </p>
                  <dl className="mt-4 space-y-2 border-t-2 border-charcoal pt-3 text-sm md:text-base">
                    <div className="flex justify-between border-b border-charcoal/20 py-2 font-bold">
                      <dt>Calories</dt>
                      <dd>{nutrition.calories}</dd>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/20 py-1.5">
                      <dt>Total Fat</dt>
                      <dd>{nutrition.totalFat}</dd>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/20 py-1.5">
                      <dt>Sodium</dt>
                      <dd>{nutrition.sodium}</dd>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/20 py-1.5">
                      <dt>Total Carbohydrate</dt>
                      <dd>{nutrition.totalCarbohydrate}</dd>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/20 py-1.5 pl-4">
                      <dt>Sugars</dt>
                      <dd>{nutrition.sugars}</dd>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/20 py-1.5">
                      <dt>Protein</dt>
                      <dd>{nutrition.protein}</dd>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <dt>Vitamin C</dt>
                      <dd>{nutrition.vitaminC}</dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-xs text-charcoal-light">
                    Servings per container: {nutrition.servingsPerContainer}.
                    Percent Daily Values are based on a 2,400 calorie diet.
                  </p>
                </div>
                <figure className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand-light">
                  <Image
                    src={IMAGES.nutrition}
                    alt="Nutrition Facts label showing 35 calories per tablespoon serving"
                    fill
                    loading="lazy"
                    className="object-contain p-2"
                    sizes="400px"
                  />
                </figure>
              </div>
            </div>
          )}

          {activeTab === "serving" && (
            <div
              role="tabpanel"
              id="panel-serving"
              aria-labelledby="tab-serving"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    Serving Suggestions
                  </h3>
                  <p className="mt-2 text-sm text-charcoal-light">
                    Printed on the product label:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {PRODUCT.servingSuggestions.map((suggestion) => (
                      <li
                        key={suggestion}
                        className="border-l-2 border-pear pl-4 text-charcoal-light"
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-charcoal-light">
                    Manufacturer: {PRODUCT.manufacturer.name},{" "}
                    {PRODUCT.manufacturer.address}
                  </p>
                </div>
                <figure className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand-light">
                  <Image
                    src={IMAGES.labelBack}
                    alt="Back of product label showing serving suggestions, Made in USA mark, and manufacturer contact information"
                    fill
                    loading="lazy"
                    className="object-contain p-2"
                    sizes="400px"
                  />
                </figure>
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
