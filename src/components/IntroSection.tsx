import Image from "next/image";
import Link from "next/link";
import { IMAGES, PRODUCT } from "@/config/product";
import { SectionContainer, SectionHeading } from "./ui";

export function IntroSection() {
  return (
    <SectionContainer
      id="what-is-jelly"
      ariaLabelledBy="what-is-jelly-heading"
      className="bg-white"
    >
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            id="what-is-jelly-heading"
            title="What Is Prickly Pear Jelly?"
            subtitle="How cactus fruit becomes a spreadable Southwest pantry staple."
          />
          <div className="space-y-4 text-base leading-relaxed text-charcoal-light md:text-lg">
            <p>
              Jelly is a traditional way to capture the color and character of
              seasonal fruit. Prickly pear jelly transforms the desert&apos;s
              distinctive cactus fruit into a spreadable preserve you can
              enjoy year-round.
            </p>
            <p>
              <strong className="font-semibold text-charcoal">
                {PRODUCT.name}
              </strong>{" "}
              is a small-batch style preserve made with organic prickly pear
              cactus and a short list of recognizable ingredients. For a
              homemade bake that uses the jelly as a bright center filling, try{" "}
              <Link
                href="/recipes/arizona-sunrise-muffins"
                className="font-semibold text-pear underline-offset-4 hover:underline"
              >
                Arizona Sunrise Muffins
              </Link>
              .
            </p>
          </div>

          <div className="mt-8 rounded-sm border border-sand-dark bg-sand-light p-6">
            <h3 className="font-serif text-xl font-bold text-charcoal">
              Product at a Glance
            </h3>
            <dl className="mt-4 space-y-3 text-sm md:text-base">
              <div className="flex justify-between border-b border-sand-dark pb-2">
                <dt className="font-medium text-charcoal">Size</dt>
                <dd className="text-charcoal-light">{PRODUCT.size}</dd>
              </div>
              <div className="flex justify-between border-b border-sand-dark pb-2">
                <dt className="font-medium text-charcoal">Made in</dt>
                <dd className="text-charcoal-light">USA</dd>
              </div>
              <div>
                <dt className="font-medium text-charcoal">Ingredients</dt>
                <dd className="mt-1 text-charcoal-light">
                  {PRODUCT.ingredients.join(", ")}
                </dd>
              </div>
            </dl>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Product attributes">
              {PRODUCT.attributes.map((attr) => (
                <li
                  key={attr}
                  className="rounded-sm bg-white px-3 py-1 text-xs font-medium uppercase tracking-wide text-cactus ring-1 ring-cactus/20 md:text-sm"
                >
                  {attr}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="relative aspect-square overflow-hidden rounded-sm shadow-lg lg:sticky lg:top-8">
          <Image
            src={IMAGES.lifestyle}
            alt="Open jar of prickly pear jelly with sliced fruit showing vibrant magenta interior on a cream background"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <figcaption className="sr-only">
            Prickly pear jelly with fresh sliced cactus fruit
          </figcaption>
        </figure>
      </div>
    </SectionContainer>
  );
}
