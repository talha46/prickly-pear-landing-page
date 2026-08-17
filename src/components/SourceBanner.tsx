"use client";

import { useEffect, useState } from "react";
import { SOURCE_MESSAGES } from "@/config/product";
import { getTrafficContext } from "@/lib/traffic";

export function SourceBanner() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const { source } = getTrafficContext();
    setMessage(SOURCE_MESSAGES[source] ?? null);
  }, []);

  if (!message) {
    return null;
  }

  return (
    <p className="mb-4 rounded-sm border border-gold/30 bg-gold/10 px-4 py-2.5 text-sm leading-relaxed text-sand md:text-base">
      {message}
    </p>
  );
}
