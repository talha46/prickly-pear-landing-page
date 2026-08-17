import Image from "next/image";
import { IMAGES } from "@/config/product";
import { AmazonLink } from "@/components/AmazonLink";
import { CtaMicrocopy } from "@/components/CtaMicrocopy";
import { SectionContainer } from "./ui";

export function FinalCTA() {
  return (
    <SectionContainer
      id="get-started"
      ariaLabelledBy="final-cta-heading"
      className="bg-cactus-dark"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2
            id="final-cta-heading"
            className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-[2.75rem]"
          >
            Curious About Prickly Pear?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sand/90 md:text-xl">
            Explore how people use prickly pear jelly in recipes, glazes, and
            Southwest-inspired dishes—and try a 5 oz jar for yourself.
          </p>
          <div className="mt-8">
            <AmazonLink
              variant="primary"
              placement="final-cta"
              className="bg-pear hover:bg-pear-light"
            >
              View on Amazon
            </AmazonLink>
            <CtaMicrocopy theme="dark" />
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-sm bg-sand-light shadow-2xl ring-1 ring-gold/20 lg:max-w-sm">
          <Image
            src={IMAGES.jar}
            alt="Cheri's Desert Harvest prickly pear cactus jelly product jar"
            fill
            loading="lazy"
            className="object-contain p-6"
            sizes="300px"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
