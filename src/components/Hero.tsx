import Image from "next/image";
import { GUIDE_UPDATED, IMAGES } from "@/config/product";
import { AmazonLink } from "@/components/AmazonLink";
import { CtaMicrocopy } from "@/components/CtaMicrocopy";
import { SourceBanner } from "@/components/SourceBanner";
import { AnchorLink } from "./ui";

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-cactus-dark">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.cactus}
          alt="Ripe magenta prickly pear fruits on an Opuntia cactus—Arizona prickly pear jelly ingredient"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cactus-dark/80 via-cactus-dark/70 to-cactus-dark/90" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-sand/70">
              Guide updated: {GUIDE_UPDATED}
            </p>
            <p className="mb-4 mt-2 text-sm font-semibold uppercase tracking-widest text-gold">
              Southwest Desert Fruit
            </p>
            <SourceBanner />
            <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
              What Is Prickly Pear Jelly?
            </h1>
            <p className="mt-4 font-serif text-xl text-sand md:text-2xl">
              Discover the fruit of the Southwest—and one delicious way to enjoy
              it.
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-sand/90 md:text-lg">
              Prickly pear comes from the cactus fruit often associated with
              the desert Southwest. Learn what it is, how people use prickly
              pear jelly and cactus jelly, and how to try a jar for yourself.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <AmazonLink variant="primary" placement="hero">
                View on Amazon
              </AmazonLink>
              <AnchorLink href="#ways-to-use" variant="secondary-light">
                Explore Ways to Use It
              </AnchorLink>
            </div>
            <CtaMicrocopy theme="dark" />
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl ring-1 ring-gold/30">
              <Image
                src={IMAGES.jar}
                alt="Cheri's Desert Harvest prickly pear jelly jar, 5 oz cactus jelly with gold lid"
                fill
                priority
                className="object-contain bg-sand-light p-4"
                sizes="(max-width: 1024px) 80vw, 400px"
              />
            </div>
            <div
              className="absolute -bottom-3 -left-3 hidden h-24 w-24 border-b-2 border-l-2 border-gold/50 md:block"
              aria-hidden="true"
            />
            <div
              className="absolute -right-3 -top-3 hidden h-24 w-24 border-r-2 border-t-2 border-gold/50 md:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
