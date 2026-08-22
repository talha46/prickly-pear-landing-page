import { getTrafficContext } from "@/lib/traffic";

export type AmazonPlacement =
  | "hero"
  | "header"
  | "product-spotlight"
  | "gift-section"
  | "final-cta"
  | "faq"
  | "sticky-mobile"
  | "uses-grid"
  | "recipe-hero"
  | "recipe-product-spotlight"
  | "recipe-final-cta"
  | "recipe-faq"
  | "recipe-sticky-mobile"
  | "recipe-card";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function getGaId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GA_ID?.trim();
  return id || undefined;
}

export function isGAEnabled(): boolean {
  if (typeof window === "undefined") return false;
  if (Boolean(getGaId())) return true;
  return Boolean(
    (window as Window & { __TEST_GA__?: boolean }).__TEST_GA__
  );
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

function waitForGtag(callback: () => void, timeoutMs = 4000): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    callback();
    return;
  }

  const started = Date.now();
  const timer = window.setInterval(() => {
    if (typeof window.gtag === "function") {
      window.clearInterval(timer);
      callback();
      return;
    }

    if (Date.now() - started > timeoutMs) {
      window.clearInterval(timer);
    }
  }, 50);
}

export function trackEvent(
  eventName: string,
  params: EventParams = {},
  options: { useBeacon?: boolean } = {}
): void {
  if (!isGAEnabled()) return;

  waitForGtag(() => {
    window.gtag?.("event", eventName, {
      ...buildTrafficParams(),
      ...params,
      ...(options.useBeacon ? { transport_type: "beacon" as const } : {}),
    });
  });
}

export function trackPageView(pagePath?: string): void {
  if (!isGAEnabled()) return;

  const path = pagePath ?? window.location.pathname + window.location.search;

  waitForGtag(() => {
    window.gtag?.("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      ...buildTrafficParams(),
    });
  });
}

export function trackAmazonClick(
  placement: AmazonPlacement,
  onComplete?: () => void
): void {
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    onComplete?.();
  };

  if (typeof window === "undefined") {
    finish();
    return;
  }

  const params = {
    ...buildTrafficParams(),
    placement,
  };

  const send = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "amazon_cta_click", {
        ...params,
        transport_type: "beacon",
        event_callback: finish,
      });
      window.setTimeout(finish, 400);
      return;
    }
    finish();
  };

  if (typeof window.gtag === "function") {
    send();
    return;
  }

  // If GA is configured, wait briefly for the script; otherwise complete immediately.
  if (getGaId()) {
    waitForGtag(send, 1500);
    window.setTimeout(finish, 1600);
    return;
  }

  finish();
}

export function trackScrollDepth(threshold: 50 | 90): void {
  trackEvent(`scroll_${threshold}`);
}

export function trackEngagement(seconds: 30 | 60): void {
  trackEvent(`engaged_${seconds}s`);
}
