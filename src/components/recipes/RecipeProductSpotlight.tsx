import Image from "next/image";
import { PRODUCT } from "@/config/product";
import { AmazonLink } from "@/components/AmazonLink";
import { CtaMicrocopy } from "@/components/CtaMicrocopy";
import type { RecipeDefinition } from "@/config/recipes";
import { RecipeReveal } from "./RecipeReveal";

export function RecipeProductSpotlight({
  recipe,
}: {
  recipe: RecipeDefinition;
}) {
  return (
    <section
      id="product"
      aria-labelledby="product-heading"
      className="bg-white px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <RecipeReveal className="text-center">
          <h2
            id="product-heading"
            className="font-serif text-3xl font-bold tracking-tight text-charcoal md:text-4xl"
          >
            Prickly Pear Cactus Jelly
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-charcoal-light">
            The 5 oz jar used for this muffin-filling test.
          </p>
        </RecipeReveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-sm bg-sand-light p-6 shadow-lg">
            <Image
              src={recipe.images.product}
              alt="Cheri's Desert Harvest Prickly Pear Cactus Jelly jar, 5 oz, with gold lid and desert-themed label"
              fill
              loading="lazy"
              className="object-contain p-4"
              sizes="(max-width: 1024px) 80vw, 400px"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-terracotta">
              {PRODUCT.brand}
            </p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-charcoal md:text-3xl">
              Prickly Pear Cactus Jelly
            </h3>
            <p className="mt-1 text-lg text-charcoal-light">5 OZ / 140g</p>

            <div className="mt-6">
              <h4 className="font-semibold text-charcoal">Ingredients</h4>
              <ul className="mt-2 list-inside list-disc space-y-1 text-charcoal-light">
                {PRODUCT.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <ul
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Package attributes"
            >
              {[
                "Made in USA",
                "Contains Fresh Fruit Juices",
                "No Artificial Colors",
                "No Preservatives",
              ].map((attr) => (
                <li
                  key={attr}
                  className="rounded-sm border border-cactus/20 bg-sand-light px-3 py-1.5 text-sm font-medium text-cactus"
                >
                  {attr}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <AmazonLink
                placement="recipe-product-spotlight"
                variant="primary"
              >
                View on Amazon
              </AmazonLink>
              <CtaMicrocopy />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
