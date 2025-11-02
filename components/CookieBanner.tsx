"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/i18n/useTranslation";

type CookieBannerProps = {
  onAccept: () => void;
  onReject: () => void;
  onCustomise: (analyticsAllowed: boolean) => void;
};

export default function CookieBanner({ onAccept, onReject, onCustomise }: CookieBannerProps) {
  const { t } = useTranslation();
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] flex justify-center px-4 pb-6">
      <div
        className="w-full max-w-4xl rounded-2xl border border-divider bg-surface/95 p-6 shadow-subtle backdrop-blur"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="cookie-banner-title" className="text-lg font-semibold text-foreground">
              {t("cookie.title")}
            </h2>
            <p className="text-sm text-foreground/70">{t("cookie.description")}</p>
          </div>
          {showPreferences ? (
            <div className="rounded-xl border border-divider/70 bg-background px-4 py-4">
              <p className="text-sm font-semibold text-foreground">{t("cookie.analyticsTitle")}</p>
              <p className="mt-1 text-sm text-foreground/70">{t("cookie.analyticsDescription")}</p>
              <label className="mt-4 flex items-center gap-3 text-sm text-foreground">
                <input
                  type="checkbox"
                  aria-label={t("cookie.allowAnalytics")}
                  checked={analyticsAllowed}
                  onChange={(event) => setAnalyticsAllowed(event.target.checked)}
                  className="h-4 w-4 accent-steel"
                />
                {t("cookie.allowAnalytics")}
              </label>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onCustomise(analyticsAllowed);
                    setShowPreferences(false);
                  }}
                  className="rounded-md bg-steel px-4 py-2 text-sm font-semibold text-white hover:bg-steel/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
                >
                  {t("cookie.save")}
                </button>
                <button
                  type="button"
                  onClick={() => setShowPreferences(false)}
                  className="rounded-md border border-divider px-4 py-2 text-sm font-semibold text-foreground hover:border-steel hover:text-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
                >
                  {t("cookie.cancel")}
                </button>
              </div>
            </div>
          ) : null}
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onAccept}
              className="rounded-md bg-steel px-4 py-2 text-sm font-semibold text-white hover:bg-steel/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
            >
              {t("cookie.accept")}
            </button>
            <button
              type="button"
              onClick={onReject}
              className="rounded-md border border-divider px-4 py-2 text-sm font-semibold text-foreground hover:border-steel hover:text-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
            >
              {t("cookie.reject")}
            </button>
            <button
              type="button"
              onClick={() => setShowPreferences((value) => !value)}
              className="rounded-md border border-divider px-4 py-2 text-sm font-semibold text-foreground hover:border-steel hover:text-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
            >
              {t("cookie.customise")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
