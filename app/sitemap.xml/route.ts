import { languages } from "@/lib/i18n/settings";

const baseUrl = "https://mach13.tech";

const baseRoutes = [
  "/",
  "/products",
  "/products/context-os",
  "/products/custom-machine-learning",
  "/about",
  "/contact",
  "/legal/impressum",
  "/legal/privacy-policy"
];

export function GET(): Response {
  const lastModified = new Date().toISOString();
  const urls = languages
    .flatMap((locale) =>
      baseRoutes.map((path) => {
        const localizedPath = locale === "en"
          ? path === "/" ? "/" : `/${locale}${path}`
          : `/${locale}${path === "/" ? "" : path}`;
        const normalizedPath = localizedPath === "/" ? "" : localizedPath;
        const loc = `${baseUrl}${normalizedPath}`;
        return `    <url>\n      <loc>${loc}</loc>\n      <lastmod>${lastModified}</lastmod>\n    </url>`;
      })
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
