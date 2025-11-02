const baseUrl = "https://mach13.tech";

const routes = [
  "/",
  "/products/context-os",
  "/products/custom-ml",
  "/solutions",
  "/about",
  "/blog",
  "/contact",
  "/legal/impressum",
  "/legal/privacy"
];

export function GET(): Response {
  const lastModified = new Date().toISOString();
  const urls = routes
    .map((path) => {
      const loc = `${baseUrl}${path === "/" ? "" : path}`;
      return `    <url>\n      <loc>${loc}</loc>\n      <lastmod>${lastModified}</lastmod>\n    </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
