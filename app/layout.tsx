import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { baseMetadata } from "@/lib/metadata";
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
  children
}: {
  children: ReactNode;
}) {
  // This is the root layout - translations are handled in [locale] layout
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <body className="bg-background text-foreground antialiased">
        {children}
        <ConsentManager plausibleDomain={plausibleDomain} />
        <PicktimeWidget />
      </body>
    </html>
  );
}
