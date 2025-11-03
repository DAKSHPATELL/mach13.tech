import fs from "fs";
import path from "path";
import type { Locale } from "@/lib/i18n/settings";

type ResourceStore = Record<string, Record<string, unknown>>;

export async function loadResources(locale: Locale, namespaces: readonly string[]) {
  const resources: ResourceStore = {};
  resources[locale] = {};

  const base = path.join(process.cwd(), "public", "locales", locale);

  for (const ns of namespaces) {
    const file = path.join(base, `${ns}.json`);
    try {
      const raw = fs.readFileSync(file, "utf-8");
      resources[locale][ns] = JSON.parse(raw);
    } catch {
      resources[locale][ns] = {};
    }
  }

  return { resources, namespaces: [...namespaces] };
}

