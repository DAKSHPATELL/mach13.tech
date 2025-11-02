"use client";

import { useTransition } from "react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { fallbackLocale, isLocale, languages, type Locale } from "@/lib/i18n/settings";

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { locale: activeLocale, t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentLocale = ((): Locale => {
    const active = activeLocale?.split("-")[0];
    if (active && isLocale(active)) {
      return active;
    }
    return fallbackLocale;
  })();

  const handleChange = (nextLocale: Locale) => {
    if (nextLocale === currentLocale) {
      return;
    }

    const segments = pathname ? pathname.split("/").filter(Boolean) : [];

    if (segments.length === 0 || !isLocale(segments[0])) {
      segments.unshift(nextLocale);
    } else {
      segments[0] = nextLocale;
    }

    const nextPath = `/${segments.join("/")}`;
    const search = searchParams?.toString();
    const href = search ? `${nextPath}?${search}` : nextPath;

    startTransition(() => {
      router.push(href, { scroll: false });
    });
  };

  return (
    <label className={`relative inline-flex items-center gap-2 text-sm text-foreground ${className ?? ""}`}>
      <span className="sr-only">{t("language.label")}</span>
      <span aria-hidden="true" className="font-medium text-foreground/70">
        {t("language.label")}
      </span>
      <select
        value={currentLocale}
        onChange={(event) => handleChange(event.target.value as Locale)}
        className="rounded-full border border-divider bg-transparent px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-steel focus:outline-none focus-visible:ring-2 focus-visible:ring-steel/60 disabled:opacity-70"
        aria-label={t("language.label")}
        disabled={isPending}
      >
        {languages.map((code) => (
          <option key={code} value={code} className="text-foreground">
            {t(`language.${code}`)}
          </option>
        ))}
      </select>
    </label>
  );
}
