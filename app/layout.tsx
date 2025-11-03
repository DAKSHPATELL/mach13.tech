import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { baseMetadata } from "@/lib/metadata";
import PicktimeWidget from "@/components/PicktimeWidget";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-inter"
});

export const metadata = baseMetadata;

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const plausibleScriptSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT;
const plausibleApiHost = process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST;
const ConsentManager = dynamic(() => import("@/components/ConsentManager"), {
  ssr: false
});

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  // This is the root layout - translations are handled in [locale] layout
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <body className="bg-background text-foreground antialiased">
        {children}
        <StructuredData />
        <ConsentManager
          plausibleDomain={plausibleDomain}
          plausibleScriptSrc={plausibleScriptSrc}
          plausibleApiHost={plausibleApiHost}
        />
        <PicktimeWidget />
      </body>
    </html>
  );
}
