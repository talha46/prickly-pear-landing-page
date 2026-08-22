import Link from "next/link";
import Image from "next/image";
import { arizonaSunriseMuffins } from "@/config/recipes/arizona-sunrise-muffins";
import { SectionContainer, SectionHeading } from "@/components/ui";

export function RecipeTeaser() {
  const recipe = arizonaSunriseMuffins;

  return (
    <SectionContainer
      id="recipes"
      ariaLabelledBy="recipes-heading"
      className="bg-white"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg">
          <Image
            src={recipe.images.cutOpen}
            alt="Arizona Sunrise Muffins with a bright prickly pear jelly center"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <SectionHeading
            id="recipes-heading"
            title="Try a prickly pear jelly recipe"
            subtitle="Bake Arizona Sunrise Muffins with a bright jelly surprise inside."
          />
          <p className="text-base leading-relaxed text-charcoal-light md:text-lg">
            Looking for a homemade way to use prickly pear jelly? Start with
            these golden muffins and a spoonful of jelly in the center, then
            explore more serving ideas in this guide.
          </p>
          <div className="mt-8">
            <Link
              href={recipe.path}
              className="inline-flex items-center justify-center rounded-sm bg-pear px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-pear-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pear"
            >
              Arizona Sunrise Muffins recipe
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
