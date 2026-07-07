import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://mach13.tech/sitemap.xml",
    host: "https://mach13.tech"
  };
}
