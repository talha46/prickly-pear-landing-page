import Link from "next/link";
import { USES } from "@/config/product";
import { AmazonLink } from "@/components/AmazonLink";
import { CtaMicrocopy } from "@/components/CtaMicrocopy";
import { SectionContainer, SectionHeading } from "./ui";

export function UsesGrid() {
  return (
    <SectionContainer
      id="ways-to-use"
      ariaLabelledBy="ways-to-use-heading"
      className="bg-sand"
    >
      <SectionHeading
        id="ways-to-use-heading"
        title="7 Ways to Use Prickly Pear Jelly"
        subtitle="From breakfast spreads to prickly pear glazes - ideas to get you started."
        align="center"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {USES.map((use, index) => (
          <article
            key={use.title}
            className="group border-l-4 border-pear bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span
              className="mb-3 inline-block font-serif text-3xl font-bold text-pear/30 transition-colors group-hover:text-pear/50"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-serif text-xl font-bold text-charcoal">
              {use.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-light md:text-base">
              {use.description}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-charcoal-light">
        Serving suggestions on the product label include prickly pear glazes for
        lamb and pork, fresh fruit toppings, and Prickly Pear Cheesecake. See{" "}
        <span className="font-medium">{USES[6].title.toLowerCase()}</span> for
        your own culinary experiments. Looking for a full bake? Try{" "}
        <Link
          href="/recipes/arizona-sunrise-muffins"
          className="font-semibold text-pear underline-offset-4 hover:underline"
        >
          Arizona Sunrise Muffins with a prickly pear jelly center
        </Link>
        .
      </p>

      <div className="mt-10 text-center">
        <AmazonLink variant="primary" placement="uses-grid">
          View on Amazon
        </AmazonLink>
        <CtaMicrocopy className="mx-auto max-w-md" />
      </div>
    </SectionContainer>
  );
}
