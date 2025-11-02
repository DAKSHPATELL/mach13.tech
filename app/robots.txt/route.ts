export function GET(): Response {
  const body = [`User-agent: *`, `Allow: /`, ``, `Sitemap: https://mach13.tech/sitemap.xml`].join("\n");
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
