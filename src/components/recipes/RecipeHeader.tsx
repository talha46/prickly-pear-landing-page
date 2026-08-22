"use client";

import Link from "next/link";
import { GUIDE_PATH } from "@/config/product";
import { AmazonLink } from "@/components/AmazonLink";
import type { RecipeDefinition } from "@/config/recipes";

type RecipeHeaderProps = {
  recipe: RecipeDefinition;
};

export function RecipeHeader({ recipe }: RecipeHeaderProps) {
  const links = [
    { href: "#ingredients", label: "Ingredients" },
    { href: "#directions", label: "Directions" },
    { href: "#recipe-card", label: "Recipe Card" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-cactus/10 bg-sand-light/95 backdrop-blur-sm print:hidden">
      <nav
        aria-label="Recipe site navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8"
      >
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href={GUIDE_PATH}
            className="shrink-0 font-serif text-lg font-bold text-cactus md:text-xl"
          >
            Prickly Pear Guide
          </Link>
          <span className="hidden text-sand-dark sm:inline" aria-hidden="true">
            /
          </span>
          <span className="hidden truncate text-sm font-medium text-charcoal-light sm:inline">
            {recipe.title}
          </span>
        </div>

        <AmazonLink
          placement="header"
          variant="primary"
          className="hidden px-4 py-2 text-sm md:inline-flex"
        >
          View on Amazon
        </AmazonLink>
      </nav>

      <nav
        aria-label="Recipe section navigation"
        className="border-t border-cactus/5 bg-sand-light/90"
      >
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 md:justify-center md:gap-6 md:px-8">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="block whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium text-charcoal-light transition-colors hover:text-pear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pear"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
