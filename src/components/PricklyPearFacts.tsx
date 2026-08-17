import Image from "next/image";
import { IMAGES } from "@/config/product";
import { SectionContainer, SectionHeading } from "./ui";

export function PricklyPearFacts() {
  return (
    <SectionContainer
      id="what-is-prickly-pear"
      ariaLabelledBy="what-is-prickly-pear-heading"
      className="bg-sand-light"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <SectionHeading
            id="what-is-prickly-pear-heading"
            title="What Is Prickly Pear?"
            subtitle="The cactus fruit behind prickly pear jelly and prickly pear jam."
          />
          <div className="space-y-4 text-base leading-relaxed text-charcoal-light md:text-lg">
            <p>
              Prickly pear is the fruit of the <em>Opuntia</em> cactus—a plant
              closely associated with desert landscapes across the American
              Southwest and beyond.
            </p>
            <p>
              Also known as cactus pear or tuna, the fruit grows from the flat,
              paddle-shaped pads of the cactus. When ripe, prickly pears can
              display striking red, magenta, or purple flesh beneath their
              textured skin.
            </p>
            <p>
              The fruit can be eaten fresh—once carefully prepared to remove
              spines and glochids—or incorporated into prepared foods such as
              jams, jellies, syrups, and sauces.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg">
            <Image
              src={IMAGES.sliced}
              alt="Halved prickly pear fruits showing vivid magenta flesh alongside a green cactus pad on a white plate"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <figcaption className="sr-only">
              Sliced prickly pear fruit revealing deep red interior flesh
            </figcaption>
          </figure>
        </div>
      </div>
    </SectionContainer>
  );
}
