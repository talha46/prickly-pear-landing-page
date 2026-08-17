import Image from "next/image";
import { IMAGES } from "@/config/product";
import { AmazonLink } from "@/components/AmazonLink";
import { CtaMicrocopy } from "@/components/CtaMicrocopy";
import { SectionContainer, SectionHeading } from "./ui";

export function GiftSection() {
  return (
    <SectionContainer
      id="gift"
      ariaLabelledBy="gift-heading"
      className="bg-sand"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <figure className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg">
          <Image
            src={IMAGES.fruit}
            alt="Harvested prickly pear fruits—a Southwest food gift and prickly pear gift idea"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <figcaption className="sr-only">
            Harvested prickly pear fruits in a bowl
          </figcaption>
        </figure>

        <div>
          <SectionHeading
            id="gift-heading"
            title="A Southwest Gift Idea"
            subtitle="A prickly pear gift for food lovers and Southwest enthusiasts."
          />
          <div className="space-y-4 text-base leading-relaxed text-charcoal-light md:text-lg">
            <p>
              A jar of prickly pear jelly can make a thoughtful Southwest food
              gift for people who appreciate regional flavors, enjoy exploring
              unusual foods, or love building a gourmet pantry.
            </p>
            <p>
              Whether for a host, a traveler who visited Arizona, or someone
              who simply likes trying new ingredients, this small preserve
              offers a taste of the desert in a giftable format.
            </p>
          </div>
          <div className="mt-8">
            <AmazonLink variant="primary" placement="gift-section">
              View on Amazon
            </AmazonLink>
            <CtaMicrocopy />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
