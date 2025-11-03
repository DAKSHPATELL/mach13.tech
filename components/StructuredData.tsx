import { siteName, siteUrl } from "@/lib/metadata";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": siteName,
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`,
      "sameAs": ["https://www.linkedin.com/company/mach13ai/"],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "email": "info@mach13.tech",
          "areaServed": ["EU", "IN"],
          "availableLanguage": ["en", "de"]
        }
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": "Gujarat",
          "addressLocality": "Ahmedabad"
        },
        {
          "@type": "PostalAddress",
          "addressCountry": "DE",
          "addressRegion": "North Rhine-Westphalia",
          "addressLocality": "Aachen"
        }
      ]
    },
    {
      "@type": "WebSite",
      "name": siteName,
      "url": siteUrl,
      "potentialAction": [
        {
          "@type": "ContactAction",
          "target": `${siteUrl}/contact`,
          "name": "Book an appointment"
        }
      ],
      "inLanguage": ["en", "de", "fr", "it"]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Products",
          "item": `${siteUrl}/products`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": `${siteUrl}/about`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Contact",
          "item": `${siteUrl}/contact`
        }
      ]
    }
  ]
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
