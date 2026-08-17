import Image from "next/image";
import { IMAGES } from "@/config/product";
import { SectionContainer, SectionHeading } from "./ui";

export function WhyInteresting() {
  const highlights = [
    {
      title: "An Unusual Fruit",
      text: "Prickly pear isn't something you'll find in every grocery aisle. It offers a sense of discovery for curious eaters.",
    },
    {
      title: "Striking Natural Color",
      text: "The fruit's vivid magenta and crimson tones carry through into the jelly—a visual standout on any table.",
    },
    {
      title: "Desert Southwest Identity",
      text: "Closely tied to Arizona and the broader Southwest, prickly pear connects food to a distinctive regional landscape.",
    },
    {
      title: "Culinary Versatility",
      text: "From toast at breakfast to glazes at dinner, prickly pear jelly invites experimentation across meals.",
    },
    {
      title: "Gift-Worthy Appeal",
      text: "A small jar of something unexpected makes a thoughtful gift for food lovers, travelers, and pantry explorers.",
    },
    {
      title: "Beyond Ordinary Jelly",
      text: "For those who've tried strawberry and grape, prickly pear offers something genuinely different to explore.",
    },
  ];

  return (
    <SectionContainer
      id="why-interesting"
      ariaLabelledBy="why-interesting-heading"
      className="bg-cactus text-white"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            id="why-interesting-heading"
            title="Not Your Everyday Jelly"
            subtitle="Why people seek out prickly pear instead of the usual spreads."
            theme="dark"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="border-t border-white/20 pt-4">
                <h3 className="font-serif text-lg font-bold text-gold">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-sand/90">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <figure className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
          <Image
            src={IMAGES.freshHarvest}
            alt="Freshly sliced prickly pear fruit on a white plate with a wooden bowl of whole cactus pears in the background"
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <figcaption className="sr-only">
            Fresh prickly pear harvest with sliced fruit showing ruby-red flesh
          </figcaption>
        </figure>
      </div>
    </SectionContainer>
  );
}
