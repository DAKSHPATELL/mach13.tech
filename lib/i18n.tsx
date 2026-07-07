"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "fr" | "en";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "shree-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  // Read the saved preference once on mount. We intentionally do NOT persist
  // here — a mount effect keyed on `lang` races this read under StrictMode and
  // would clobber the stored value back to the default.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "fr" || stored === "en") {
        setLangState(stored);
      } else if (navigator.language.toLowerCase().startsWith("en")) {
        setLangState("en");
      }
    } catch {
      /* ignore */
    }
  }, []);

  // Reflect the language on <html> for accessibility/SEO. No persistence here.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Persistence happens only on an explicit user change.
  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };
  const toggle = () => setLang(lang === "fr" ? "en" : "fr");

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
