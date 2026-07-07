"use client";

import { useLang, type Lang } from "@/lib/i18n";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const options: Lang[] = ["fr", "en"];

  return (
    <div
      className={`inline-flex items-center rounded-full border border-line bg-white/70 p-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Language"
    >
      {options.map((opt) => {
        const active = lang === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setLang(opt)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1.5 uppercase tracking-wide transition-colors ${
              active ? "bg-plum-gradient text-white shadow-sm" : "text-muted hover:text-plum-700"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
