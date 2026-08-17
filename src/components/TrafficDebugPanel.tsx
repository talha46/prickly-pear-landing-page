"use client";

import { useEffect, useState } from "react";
import { getTrafficContext } from "@/lib/traffic";

type DebugState = {
  source: string;
  firstTouchSource: string;
  landingUrl: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
};

export function TrafficDebugPanel() {
  const [data, setData] = useState<DebugState | null>(null);

  useEffect(() => {
    const context = getTrafficContext();
    setData({
      source: context.source,
      firstTouchSource: context.firstTouchSource,
      landingUrl: context.landingUrl,
      utm_source: context.utm.utm_source ?? "—",
      utm_medium: context.utm.utm_medium ?? "—",
      utm_campaign: context.utm.utm_campaign ?? "—",
      utm_content: context.utm.utm_content ?? "—",
      utm_term: context.utm.utm_term ?? "—",
    });
  }, []);

  if (process.env.NODE_ENV === "production" || !data) {
    return null;
  }

  const rows: [string, string][] = [
    ["Traffic Source", data.source],
    ["Stored First Touch", data.firstTouchSource],
    ["UTM Source", data.utm_source],
    ["UTM Medium", data.utm_medium],
    ["UTM Campaign", data.utm_campaign],
    ["UTM Content", data.utm_content],
    ["UTM Term", data.utm_term],
    ["Landing URL", data.landingUrl],
  ];

  return (
    <aside
      aria-label="Traffic debug panel (development only)"
      className="fixed right-4 top-4 z-[100] max-w-sm rounded-sm border border-charcoal/20 bg-white/95 p-4 text-xs shadow-lg backdrop-blur-sm md:bottom-4 md:top-auto"
    >
      <p className="mb-2 font-bold uppercase tracking-wide text-pear">
        Traffic Debug
      </p>
      <dl className="space-y-1.5">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className="font-semibold text-charcoal">{label}</dt>
            <dd className="break-all text-charcoal-light">{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
