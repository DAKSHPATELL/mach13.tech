"use client";

import { useEffect, useState } from "react";
import CookieBanner from "@/components/CookieBanner";
import { loadAnalytics, unloadAnalytics } from "@/lib/consent";

const STORAGE_KEY = "mach13-tech-consent";

type ConsentValue = "accepted" | "rejected" | "analytics-enabled" | "analytics-disabled";

type ConsentManagerProps = {
  plausibleDomain?: string;
};

export default function ConsentManager({ plausibleDomain }: ConsentManagerProps) {
  const [consent, setConsent] = useState<ConsentValue | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentValue | null;
    if (stored) {
      setConsent(stored);
      if ((stored === "accepted" || stored === "analytics-enabled") && plausibleDomain) {
        loadAnalytics(plausibleDomain);
      }
    }
  }, [plausibleDomain]);

  const persist = (value: ConsentValue) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  };

  const handleAccept = () => {
    persist("accepted");
    if (plausibleDomain) {
      loadAnalytics(plausibleDomain);
    }
  };

  const handleReject = () => {
    unloadAnalytics();
    persist("rejected");
  };

  const handleCustomise = (allowAnalytics: boolean) => {
    if (allowAnalytics) {
      persist("analytics-enabled");
      if (plausibleDomain) {
        loadAnalytics(plausibleDomain);
      }
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
