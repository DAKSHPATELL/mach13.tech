import type { Namespace, Locale } from "@/lib/i18n/settings";
import { fallbackLocale, namespaces as allNamespaces } from "@/lib/i18n/settings";
import fs from "fs";
import path from "path";

export async function loadTranslations(
  locale: Locale,
  requiredNamespaces: Namespace[] | readonly Namespace[] = allNamespaces
) {
  const namespaces = requiredNamespaces.length
    ? [...requiredNamespaces]
    : [...allNamespaces];

  const resources: Record<string, Record<string, unknown>> = {};

  // Load translations for the requested locale
  for (const namespace of namespaces) {
    const localePath = path.join(process.cwd(), "public", "locales", locale, `${namespace}.json`);
    
    if (fs.existsSync(localePath)) {
      const content = fs.readFileSync(localePath, "utf-8");
      if (!resources[locale]) {
        resources[locale] = {};
      }
      resources[locale][namespace] = JSON.parse(content);
    }
  }

  // Load fallback translations if different from requested locale
  if (locale !== fallbackLocale) {
    for (const namespace of namespaces) {
      const fallbackPath = path.join(process.cwd(), "public", "locales", fallbackLocale, `${namespace}.json`);
      
      if (fs.existsSync(fallbackPath)) {
        const content = fs.readFileSync(fallbackPath, "utf-8");
        if (!resources[fallbackLocale]) {
          resources[fallbackLocale] = {};
        }
        resources[fallbackLocale][namespace] = JSON.parse(content);
      }
    }
  }

  return {
    resources,
    locale,
    namespaces
  };
}
