"use client";

import { useEffect, useState } from "react";
import type { RecipeDefinition } from "@/config/recipes";
import { getTrafficContext } from "@/lib/traffic";

export function RecipeHeroSourceMessage({
  recipe,
}: {
  recipe: RecipeDefinition;
}) {
  const [sourceMessage, setSourceMessage] = useState<string | null>(null);

  useEffect(() => {
    const { source } = getTrafficContext();
    setSourceMessage(recipe.sourceMessages?.[source] ?? null);
  }, [recipe.sourceMessages]);

  if (!sourceMessage) {
    return null;
  }

  return (
    <p className="mt-3 rounded-sm border border-gold/30 bg-gold/10 px-4 py-2.5 text-sm leading-relaxed text-sand">
      {sourceMessage}
    </p>
  );
}
