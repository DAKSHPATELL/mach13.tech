import type { Metadata } from "next";

export const siteName = "Mach13";
export const siteUrl = "https://mach13.tech";
export const openGraphImage = {
  url: "/logo.png",
  width: 1200,
  height: 630,
  alt: "Mach13 — Dependable AI for regulated production"
};

const description =
  "Mach13 delivers document-grounded copilots and sensor intelligence so regulated manufacturing teams resolve deviations fast.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s • ${siteName}`
  },
  description,
  category: "technology",
  keywords: [
    "industrial AI",
    "manufacturing analytics",
    "document-grounded assistants",
    "computer vision",
    "Mach13",
    "Aachen",
    "Gujarat"
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  },
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName,
    type: "website",
    images: [openGraphImage]
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      en: `${siteUrl}/en`,
      de: `${siteUrl}/de`,
      fr: `${siteUrl}/fr`,
      it: `${siteUrl}/it`
    }
  }
};
