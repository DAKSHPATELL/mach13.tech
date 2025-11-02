import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ReactNode } from "react";
import { baseMetadata, openGraphImage } from "@/lib/metadata";

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

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
