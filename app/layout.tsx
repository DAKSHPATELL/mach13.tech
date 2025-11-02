import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { baseMetadata, openGraphImage } from "@/lib/metadata";
import dynamic from "next/dynamic";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL("https://mach13.tech"),
  title: {
    default: "Mach13",
    template: "%s • Mach13"
  },
  alternates: {
    canonical: "https://mach13.tech"
  },
  openGraph: {
    ...baseMetadata.openGraph,
    url: "https://mach13.tech",
    images: [openGraphImage]
  }
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const ConsentManager = dynamic(() => import("@/components/ConsentManager"), {
  ssr: false
});

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
        <ConsentManager plausibleDomain={plausibleDomain} />
      </body>
    </html>
  );
}
