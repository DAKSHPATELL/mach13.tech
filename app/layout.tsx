import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Marcellus } from "next/font/google";
import { ReactNode } from "react";
import Providers from "@/components/Providers";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap"
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap"
});

const caps = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caps",
  display: "swap"
});

const siteUrl = "https://salon.mach13.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shree Beauté Indienne — Institut de beauté à Bagnolet",
    template: "%s · Shree Beauté Indienne"
  },
  description:
    "Institut de beauté à Bagnolet (93), aux portes de Paris. Épilation au fil et à la cire, onglerie, soins du visage, modelage et henné. Prenez rendez-vous en ligne chez Shree Beauté Indienne.",
  keywords: [
    "institut de beauté Bagnolet",
    "épilation au fil Bagnolet",
    "onglerie",
    "soin du visage",
    "henné",
    "modelage",
    "Bagnolet 93170",
    "institut de beauté près de Paris",
    "Shree Beauté Indienne"
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Shree Beauté Indienne",
    title: "Shree Beauté Indienne — Institut de beauté à Bagnolet",
    description:
      "Des soins sur-mesure pour sublimer votre beauté : épilation, onglerie, soins du visage, modelage et henné.",
    images: [{ url: "/banner.png", width: 1254, height: 1254, alt: "Shree Beauté Indienne" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Beauté Indienne — Institut de beauté à Bagnolet",
    description: "Épilation, onglerie, soins du visage, modelage et henné à Bagnolet (93).",
    images: ["/banner.png"]
  },
  icons: { icon: "/logo.png", apple: "/logo.png" }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Shree Beauté Indienne",
  image: `${siteUrl}/banner.png`,
  url: siteUrl,
  telephone: "+33188480712",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 rue Raoul Berton",
    postalCode: "93170",
    addressLocality: "Bagnolet",
    addressRegion: "Île-de-France",
    addressCountry: "FR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.86822,
    longitude: 2.41823
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "19:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday"],
      opens: "14:00",
      closes: "19:30"
    }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className={`${display.variable} ${sans.variable} ${caps.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
