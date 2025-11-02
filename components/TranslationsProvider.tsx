"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode
} from "react";
import { fallbackLocale } from "@/lib/i18n/settings";

type TranslationRecord = Record<string, unknown>;
type TranslationValue = string | string[];

type TranslationContextValue = {
  locale: string;
  t: <T = string>(
    key: string,
    options?: { values?: Record<string, string | number> }
  ) => T;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

function resolvePath(
  resources: Record<string, TranslationRecord>,
  locale: string,
  namespace: string,
  segments: string[]
) {
  let current: unknown = resources[locale]?.[namespace];
  for (const segment of segments) {
    if (current == null || typeof current !== "object") {
      return undefined;
    }
    current = (current as TranslationRecord)[segment];
  }
  return current;
}

function interpolate(value: string, values?: Record<string, string | number>) {
  if (!values) {
    return value;
  }
  return value.replace(/\{\{(.*?)\}\}/g, (_, token: string) => {
    const trimmed = token.trim();
    return Object.prototype.hasOwnProperty.call(values, trimmed)
      ? String(values[trimmed])
      : `{{${trimmed}}}`;
  });
}

function createTranslator(
  resources: Record<string, TranslationRecord>,
  locale: string,
  namespaces: string[]
) {
  const defaultNamespace = namespaces[0] ?? "common";

  return function translate<T = string>(
    key: string,
    options?: { values?: Record<string, string | number> }
  ): T {
    const [namespacePart, pathPart] = key.includes(":")
      ? (key.split(":", 2) as [string, string])
      : [defaultNamespace, key];
    const segments = pathPart.split(".").filter(Boolean);

    const primary = resolvePath(resources, locale, namespacePart, segments);
    const fallback = resolvePath(resources, fallbackLocale, namespacePart, segments);
    const resolved = primary ?? fallback;

    if (typeof resolved === "string") {
      return interpolate(resolved, options?.values) as T;
    }

    const fallbackValue =
      (resolved as TranslationValue | undefined) ?? (key as unknown as TranslationValue);
    return fallbackValue as T;
  };
}

type TranslationsProviderProps = {
  children: ReactNode;
  locale: string;
  resources: Record<string, TranslationRecord>;
  namespaces: string[];
};

export default function TranslationsProvider({
  children,
  locale,
  resources,
  namespaces
}: TranslationsProviderProps) {
  const value = useMemo<TranslationContextValue>(() => {
    const translate = createTranslator(resources, locale, namespaces);
    return {
      locale,
      t: translate
    };
  }, [locale, namespaces, resources]);

  return (
    <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
  );
}

export function useTranslationContext() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationsProvider");
  }
  return context;
}
