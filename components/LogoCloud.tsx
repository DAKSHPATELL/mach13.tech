const logos = [
  "Northwind Steel",
  "Bremen Logistics",
  "Rhine Foods",
  "Atlas Coatings",
  "Precision LSR"
];

export function LogoCloud() {
  return (
    <section aria-label="Customer logos" className="rounded-3xl border border-divider bg-white px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/40">
        {logos.map((logo) => (
          <span key={logo} className="rounded-full border border-divider px-6 py-3">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
