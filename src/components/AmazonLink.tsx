"use client";

import { AMAZON_PRODUCT_URL } from "@/config/product";
import {
  trackAmazonClick,
  type AmazonPlacement,
} from "@/lib/analytics";

type ButtonVariant = "primary" | "secondary" | "secondary-light" | "text";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center rounded-sm bg-pear px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-pear-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pear",
  secondary:
    "inline-flex items-center justify-center rounded-sm border-2 border-cactus bg-transparent px-6 py-3.5 text-base font-semibold text-cactus transition-colors hover:bg-cactus hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cactus",
  "secondary-light":
    "inline-flex items-center justify-center rounded-sm border-2 border-sand/50 bg-transparent px-6 py-3.5 text-base font-semibold text-sand transition-colors hover:bg-sand hover:text-cactus-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand",
  text: "inline-flex items-center gap-1 font-semibold text-pear underline-offset-4 transition-colors hover:text-pear-dark hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pear",
};

type AmazonLinkProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  placement: AmazonPlacement;
};

export function AmazonLink({
  children,
  className = "",
  variant = "primary",
  placement,
}: AmazonLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    trackAmazonClick(placement, () => {
      window.open(AMAZON_PRODUCT_URL, "_blank", "noopener,noreferrer");
    });
  };

  return (
    <a
      href={AMAZON_PRODUCT_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`${variantStyles[variant]} ${className}`}
      onClick={handleClick}
    >
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
