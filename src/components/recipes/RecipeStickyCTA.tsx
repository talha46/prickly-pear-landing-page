"use client";

import { useEffect, useState } from "react";
import { AmazonLink } from "@/components/AmazonLink";

const DISMISS_KEY = "ppj_recipe_sticky_dismissed";
const SCROLL_THRESHOLD = 520;

export function RecipeStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(DISMISS_KEY) === "true";
    if (dismissed) {
      return;
    }

    const updateVisibility = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-dark bg-sand-light/95 px-4 py-3 backdrop-blur-sm md:hidden print:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <AmazonLink
          placement="recipe-sticky-mobile"
          variant="primary"
          className="flex-1 px-4 py-3 text-sm"
        >
          View on Amazon
        </AmazonLink>
        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem(DISMISS_KEY, "true");
            setVisible(false);
          }}
          aria-label="Dismiss sticky Amazon button"
          className="shrink-0 rounded-sm px-2 py-2 text-sm font-medium text-charcoal-light transition-colors hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pear"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
