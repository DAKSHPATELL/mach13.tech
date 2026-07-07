import type { MetadataRoute } from "next";

const base = "https://mach13.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/a-propos", "/prestations", "/tarifs", "/galerie", "/contact", "/reservation"];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}
