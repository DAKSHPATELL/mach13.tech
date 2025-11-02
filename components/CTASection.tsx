import Link from "next/link";

export function CTASection() {
  return (
    <section className="rounded-3xl border border-divider bg-steel px-6 py-16 text-white sm:px-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <h2 className="text-3xl font-semibold leading-tight">Ready to reduce downtime and compliance noise?</h2>
        <p className="text-base text-white/80">
          Operators, quality managers, and auditors get the same trusted answers with Context OS and custom models built for your lines.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact#book"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-steel transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a 15-minute discovery
          </Link>
          <Link
            href="/products/context-os"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Learn about Context OS
          </Link>
        </div>
      </div>
    </section>
  );
}
