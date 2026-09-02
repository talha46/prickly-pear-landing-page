"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initTrafficTracking } from "@/lib/traffic";
import {
  trackEngagement,
  trackPageView,
  trackScrollDepth,
} from "@/lib/analytics";

export function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const scrollTracked = useRef({ fifty: false, ninety: false });
  const engagementTracked = useRef({ thirty: false, sixty: false });

  useEffect(() => {
    initTrafficTracking();
  }, []);

  useEffect(() => {
    trackPageView(
      `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`
    );
    scrollTracked.current = { fifty: false, ninety: false };
  }, [pathname, searchParams]);

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = (window.scrollY / scrollable) * 100;

      if (progress >= 50 && !scrollTracked.current.fifty) {
        scrollTracked.current.fifty = true;
        trackScrollDepth(50);
      }

      if (progress >= 90 && !scrollTracked.current.ninety) {
        scrollTracked.current.ninety = true;
        trackScrollDepth(90);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer30 = window.setTimeout(() => {
      if (!engagementTracked.current.thirty) {
        engagementTracked.current.thirty = true;
        trackEngagement(30);
      }
    }, 30_000);

    const timer60 = window.setTimeout(() => {
      if (!engagementTracked.current.sixty) {
        engagementTracked.current.sixty = true;
        trackEngagement(60);
      }
    }, 60_000);

    return () => {
      window.clearTimeout(timer30);
      window.clearTimeout(timer60);
    };
  }, []);

  return null;
}
