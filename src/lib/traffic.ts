export const TRAFFIC_STORAGE_KEYS = {
  sessionSource: "ppj_session_source",
  firstTouchSource: "ppj_first_touch_source",
  landingUrl: "ppj_landing_url",
  utm: "ppj_utm_params",
  initialized: "ppj_traffic_initialized",
} as const;

export const DEFAULT_SOURCE = "direct-or-organic";

export const SUPPORTED_SOURCES = [
  "reddit-gifting",
  "reddit-cocktail",
  "reddit-food",
  "facebook",
  "pinterest",
  "google-organic",
  DEFAULT_SOURCE,
] as const;

export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

export type TrafficContext = {
  source: string;
  firstTouchSource: string;
  landingUrl: string;
  utm: UtmParams;
};

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function parseUtmParams(searchParams: URLSearchParams): UtmParams {
  const utm: UtmParams = {};
  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ] as const;

  for (const key of keys) {
    const value = searchParams.get(key);
    if (value) {
      utm[key] = value;
    }
  }

  return utm;
}

function resolveSourceFromParams(searchParams: URLSearchParams): string {
  const src = searchParams.get("src");
  return src?.trim() || DEFAULT_SOURCE;
}

function readStoredUtm(): UtmParams {
  if (!isBrowser()) return {};

  try {
    const raw = localStorage.getItem(TRAFFIC_STORAGE_KEYS.utm);
    if (!raw) return {};
    return JSON.parse(raw) as UtmParams;
  } catch {
    return {};
  }
}

function storeUtm(utm: UtmParams): void {
  if (!isBrowser() || Object.keys(utm).length === 0) return;
  localStorage.setItem(TRAFFIC_STORAGE_KEYS.utm, JSON.stringify(utm));
}

function mergeUtm(existing: UtmParams, incoming: UtmParams): UtmParams {
  return { ...existing, ...incoming };
}

/**
 * Initializes first-touch and session source tracking from the landing URL.
 * Never overwrites an existing session source or first-touch source.
 */
export function initTrafficTracking(): TrafficContext {
  if (!isBrowser()) {
    return {
      source: DEFAULT_SOURCE,
      firstTouchSource: DEFAULT_SOURCE,
      landingUrl: "",
      utm: {},
    };
  }

  const searchParams = new URLSearchParams(window.location.search);
  const incomingSource = resolveSourceFromParams(searchParams);
  const incomingUtm = parseUtmParams(searchParams);
  const landingUrl = window.location.href;

  const existingSessionSource = sessionStorage.getItem(
    TRAFFIC_STORAGE_KEYS.sessionSource
  );
  const existingFirstTouch = localStorage.getItem(
    TRAFFIC_STORAGE_KEYS.firstTouchSource
  );
  const existingLandingUrl = localStorage.getItem(
    TRAFFIC_STORAGE_KEYS.landingUrl
  );
  const existingUtm = readStoredUtm();

  const sessionSource = existingSessionSource ?? incomingSource;
  const firstTouchSource = existingFirstTouch ?? incomingSource;
  const storedLandingUrl = existingLandingUrl ?? landingUrl;
  const utm = mergeUtm(existingUtm, incomingUtm);

  if (!existingSessionSource) {
    sessionStorage.setItem(TRAFFIC_STORAGE_KEYS.sessionSource, sessionSource);
  }

  if (!existingFirstTouch) {
    localStorage.setItem(
      TRAFFIC_STORAGE_KEYS.firstTouchSource,
      firstTouchSource
    );
  }

  if (!existingLandingUrl) {
    localStorage.setItem(TRAFFIC_STORAGE_KEYS.landingUrl, storedLandingUrl);
  }

  if (Object.keys(incomingUtm).length > 0) {
    storeUtm(utm);
  }

  sessionStorage.setItem(TRAFFIC_STORAGE_KEYS.initialized, "true");

  return {
    source: sessionSource,
    firstTouchSource,
    landingUrl: storedLandingUrl,
    utm,
  };
}

export function getTrafficContext(): TrafficContext {
  if (!isBrowser()) {
    return {
      source: DEFAULT_SOURCE,
      firstTouchSource: DEFAULT_SOURCE,
      landingUrl: "",
      utm: {},
    };
  }

  return {
    source:
      sessionStorage.getItem(TRAFFIC_STORAGE_KEYS.sessionSource) ??
      DEFAULT_SOURCE,
    firstTouchSource:
      localStorage.getItem(TRAFFIC_STORAGE_KEYS.firstTouchSource) ??
      DEFAULT_SOURCE,
    landingUrl:
      localStorage.getItem(TRAFFIC_STORAGE_KEYS.landingUrl) ??
      window.location.href,
    utm: readStoredUtm(),
  };
}
