import type { ReactNode } from "react";
import { dir } from "i18next";
import { languages, fallbackLocale, isLocale, namespaces } from "@/lib/i18n/settings";
import TranslationsProvider from "@/components/TranslationsProvider";
import { loadTranslations } from "@/lib/i18n/get-translations";

export function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ 
  children,
  params
}: { 
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? params.locale : fallbackLocale;
  const { resources, namespaces: loadedNamespaces } = await loadTranslations(locale, namespaces);
  
  return (
    <html lang={locale} dir={dir(locale)}>
      <body>
        <TranslationsProvider locale={locale} resources={resources} namespaces={loadedNamespaces}>
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}
