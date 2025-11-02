import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { dir } from "i18next";
import dynamic from "next/dynamic";
import { baseMetadata } from "@/lib/metadata";
import TranslationsProvider from "@/components/TranslationsProvider";
import { loadTranslations } from "@/lib/i18n/get-translations";
import { fallbackLocale, isLocale, namespaces } from "@/lib/i18n/settings";
import PicktimeWidget from "@/components/PicktimeWidget";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-inter"
});

export const metadata = baseMetadata;

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const ConsentManager = dynamic(() => import("@/components/ConsentManager"), {
  ssr: false
});

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale?: string };
}) {
  const locale = params?.locale && isLocale(params.locale) ? params.locale : fallbackLocale;
  const { resources, namespaces: loadedNamespaces } = await loadTranslations(locale, namespaces);
  return (
    <html lang={locale} dir={dir(locale)} className={inter.variable}>
      <body className="bg-background text-foreground antialiased">
        <TranslationsProvider locale={locale} resources={resources} namespaces={loadedNamespaces}>
          <a className="skip-link" href="#main-content">
            Skip to main content
          </a>
          {children}
          <ConsentManager plausibleDomain={plausibleDomain} />
          <PicktimeWidget />
        </TranslationsProvider>
      </body>
    </html>
  );
}
