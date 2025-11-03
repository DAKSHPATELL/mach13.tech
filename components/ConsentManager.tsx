"use client";

import { useCallback, useEffect, useState } from "react";
import CookieBanner from "@/components/CookieBanner";
import { loadAnalytics, unloadAnalytics } from "@/lib/consent";

const STORAGE_KEY = "mach13-tech-consent";

type ConsentValue = "accepted" | "rejected" | "analytics-enabled" | "analytics-disabled";

type ConsentManagerProps = {
  plausibleDomain?: string;
  plausibleScriptSrc?: string;
  plausibleApiHost?: string;
};

export default function ConsentManager({
  plausibleDomain,
  plausibleScriptSrc,
  plausibleApiHost
}: ConsentManagerProps) {
  const [consent, setConsent] = useState<ConsentValue | null>(null);

  const load = useCallback(() => {
    if (!plausibleDomain) {
      return;
    }
    loadAnalytics({
      domain: plausibleDomain,
      scriptSrc: plausibleScriptSrc,
      apiHost: plausibleApiHost
    });
  }, [plausibleApiHost, plausibleDomain, plausibleScriptSrc]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentValue | null;
    if (stored) {
      setConsent(stored);
      if (stored === "accepted" || stored === "analytics-enabled") {
        load();
      }
    }
  }, [load]);

  const persist = (value: ConsentValue) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  };

  const handleAccept = () => {
    persist("accepted");
    load();
  };

  const handleReject = () => {
    unloadAnalytics();
    persist("rejected");
  };

  const handleCustomise = (allowAnalytics: boolean) => {
    if (allowAnalytics) {
      persist("analytics-enabled");
      load();
    } else {
      unloadAnalytics();
      persist("analytics-disabled");
    }
  };

  if (consent) {
    return null;
  }

  return (
    <CookieBanner onAccept={handleAccept} onReject={handleReject} onCustomise={handleCustomise} />
  );
}
