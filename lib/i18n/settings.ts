export const languages = ["en", "de", "fr", "it"] as const;

export type Locale = (typeof languages)[number];

export const fallbackLocale: Locale = "en";

export const namespaces = ["common"] as const;

export type Namespace = (typeof namespaces)[number];

export function isLocale(value: string): value is Locale {
  return languages.includes(value as Locale);
}
