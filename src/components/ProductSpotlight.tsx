import { AmazonLink } from "@/components/AmazonLink";
import { CtaMicrocopy } from "@/components/CtaMicrocopy";
import Image from "next/image";
import { IMAGES, PRODUCT } from "@/config/product";
import { SectionContainer, SectionHeading } from "./ui";

export function ProductSpotlight() {
  return (
    <SectionContainer
      id="product"
      ariaLabelledBy="product-heading"
      className="bg-sand-light"
    >
      <SectionHeading
        id="product-heading"
        title="Product Spotlight"
        subtitle="Cheri's Desert Harvest Prickly Pear Cactus Jelly — Arizona prickly pear jelly in a 5 oz jar"
        align="center"
      />

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-sm bg-white p-8 shadow-lg">
          <Image
            src={IMAGES.jar}
            alt="Front view of Cheri's Desert Harvest prickly pear jelly jar, 5 oz cactus jelly with gold lid"
            fill
            loading="lazy"
            className="object-contain p-6"
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
                className="rounded-sm border border-cactus/20 bg-white px-3 py-1.5 text-sm font-medium text-cactus"
              >
                {attr}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <AmazonLink variant="primary" placement="product-spotlight">
              View on Amazon
            </AmazonLink>
            <CtaMicrocopy />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
