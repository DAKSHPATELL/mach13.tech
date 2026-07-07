import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import { ReactNode } from "react";
import Providers from "@/components/Providers";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

const siteUrl = "https://mach13.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shree Beauté Indienne — Institut de beauté à Paris 20e",
    template: "%s · Shree Beauté Indienne"
  },
  description:
    "Institut de beauté à Paris 20e. Épilation au fil et à la cire, onglerie, soins du visage, modelage et henné. Prenez rendez-vous en ligne chez Shree Beauté Indienne.",
  keywords: [
    "institut de beauté Paris",
    "épilation au fil",
    "onglerie",
    "soin du visage",
    "henné",
    "modelage",
    "Paris 20e",
    "Shree Beauté Indienne"
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Shree Beauté Indienne",
    title: "Shree Beauté Indienne — Institut de beauté à Paris 20e",
    description:
      "Des soins sur-mesure pour sublimer votre beauté : épilation, onglerie, soins du visage, modelage et henné.",
    images: [{ url: "/banner.png", width: 1254, height: 1254, alt: "Shree Beauté Indienne" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Beauté Indienne — Institut de beauté à Paris 20e",
    description: "Épilation, onglerie, soins du visage, modelage et henné à Paris 20e.",
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
    streetAddress: "77 rue des Pyrénées",
    postalCode: "75020",
    addressLocality: "Paris",
    addressCountry: "FR"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00"
    }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className={`${display.variable} ${sans.variable}`}>
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
