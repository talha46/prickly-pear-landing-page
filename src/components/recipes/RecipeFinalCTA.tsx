import Image from "next/image";
import Link from "next/link";
import { AmazonLink } from "@/components/AmazonLink";
import { CtaMicrocopy } from "@/components/CtaMicrocopy";
import { GUIDE_PATH } from "@/config/product";
import type { RecipeDefinition } from "@/config/recipes";

export function RecipeFinalCTA({ recipe }: { recipe: RecipeDefinition }) {
  return (
    <section
      id="get-started"
      aria-labelledby="recipe-final-cta-heading"
      className="bg-cactus-dark px-4 py-16 md:px-8 md:py-20 lg:py-24 print:hidden"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2
            id="recipe-final-cta-heading"
            className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-[2.75rem]"
          >
            {recipe.finalCtaHeadline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sand/90 md:text-xl">
            {recipe.finalCtaBody}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <AmazonLink
              placement="recipe-final-cta"
              variant="primary"
              className="bg-pear hover:bg-pear-light"
            >
              {recipe.finalCtaPrimaryLabel}
            </AmazonLink>
            <Link
              href={GUIDE_PATH}
              className="inline-flex items-center justify-center rounded-sm border-2 border-sand/50 px-6 py-3.5 text-base font-semibold text-sand transition-colors hover:bg-sand hover:text-cactus-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand"
            >
              Explore More Prickly Pear Recipes
            </Link>
          </div>
          <CtaMicrocopy theme="dark" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square overflow-hidden rounded-sm shadow-xl">
            <Image
              src={recipe.images.cutOpen}
              alt={recipe.finalCtaHeroAlt}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 45vw, 280px"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-sm bg-sand-light shadow-xl ring-1 ring-gold/20">
            <Image
              src={recipe.images.product}
              alt="Cheri's Desert Harvest Prickly Pear Cactus Jelly 5 oz jar"
              fill
              loading="lazy"
              className="object-contain p-4"
              sizes="(max-width: 1024px) 45vw, 280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
