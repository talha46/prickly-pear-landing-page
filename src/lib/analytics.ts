import { getTrafficContext } from "@/lib/traffic";

export type AmazonPlacement =
  | "hero"
  | "header"
  | "product-spotlight"
  | "gift-section"
  | "final-cta"
  | "faq"
  | "sticky-mobile"
  | "uses-grid";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function getGaId(): string | undefined {
  return process.env.NEXT_PUBLIC_GA_ID;
}

export function isGAEnabled(): boolean {
  return typeof window !== "undefined" && Boolean(getGaId());
}

function buildTrafficParams(): EventParams {
  const { source, utm } = getTrafficContext();

  return {
    source,
    utm_source: utm.utm_source ?? "",
    utm_medium: utm.utm_medium ?? "",
    utm_campaign: utm.utm_campaign ?? "",
    utm_content: utm.utm_content ?? "",
    utm_term: utm.utm_term ?? "",
  };
}

export function trackEvent(
  eventName: string,
  params: EventParams = {},
  options: { useBeacon?: boolean } = {}
): void {
  if (!isGAEnabled()) return;

  const payload = {
    ...buildTrafficParams(),
    ...params,
    ...(options.useBeacon ? { transport_type: "beacon" as const } : {}),
  };

  window.gtag?.("event", eventName, payload);
}

export function trackPageView(pagePath?: string): void {
  if (!isGAEnabled()) return;

  const path = pagePath ?? window.location.pathname + window.location.search;

  window.gtag?.("event", "page_view", {
    page_path: path,
    ...buildTrafficParams(),
  });
}

export function trackAmazonClick(
  placement: AmazonPlacement,
  onComplete?: () => void
): void {
  if (!isGAEnabled()) {
    onComplete?.();
    return;
  }

  const params = {
    ...buildTrafficParams(),
    placement,
  };

  window.gtag?.("event", "amazon_cta_click", {
    ...params,
    transport_type: "beacon",
    event_callback: () => {
      onComplete?.();
    },
  });

  // Fallback if callback never fires (ad blockers, etc.)
  window.setTimeout(() => onComplete?.(), 300);
}

export function trackScrollDepth(threshold: 50 | 90): void {
  trackEvent(`scroll_${threshold}`);
}

export function trackEngagement(seconds: 30 | 60): void {
  trackEvent(`engaged_${seconds}s`);
}
