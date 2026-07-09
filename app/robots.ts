import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://salon.mach13.tech/sitemap.xml",
    host: "https://salon.mach13.tech"
  };
}
