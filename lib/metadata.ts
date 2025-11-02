import type { Metadata } from "next";

const siteName = "Mach13";
const siteUrl = "https://mach13.tech";
const description =
  "Mach13 builds document-grounded assistants and custom machine learning that cut search time, reduce scrap, and keep audits calm.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s • ${siteName}`
  },
  description,
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description
  },
  alternates: {
    canonical: siteUrl
  }
};

export const openGraphImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Mach13 — AI-driven industrial efficiency"
};
