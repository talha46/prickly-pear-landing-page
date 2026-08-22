"use client";

import Link from "next/link";
import { GUIDE_PATH, NAV_LINKS } from "@/config/product";
import { AmazonLink } from "@/components/AmazonLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cactus/10 bg-sand-light/95 backdrop-blur-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8"
      >
        <Link
          href={GUIDE_PATH}
          className="shrink-0 font-serif text-lg font-bold text-cactus md:text-xl"
        >
          Prickly Pear Guide
        </Link>

        <AmazonLink
          placement="header"
          variant="primary"
          className="hidden px-4 py-2 text-sm md:inline-flex"
        >
          View on Amazon
        </AmazonLink>
      </nav>

      <nav
        aria-label="Section navigation"
        className="border-t border-cactus/5 bg-sand-light/90"
      >
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 md:justify-center md:gap-6 md:px-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className="block whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium text-charcoal-light transition-colors hover:text-pear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pear"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
