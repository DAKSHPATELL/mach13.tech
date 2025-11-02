import { Metadata } from "next";
import Image from "next/image";

const values = [
  {
    title: "Precision",
    description: "Every workflow is mapped before we deploy. Measurements matter more than hype."
  },
  {
    title: "Privacy (GDPR)",
    description: "Data residency, retention, and access controls respect your compliance posture."
  },
  {
    title: "Measurable ROI",
    description: "We ship dashboards that show time saved, issues prevented, and audits passed."
  }
];

export const metadata: Metadata = {
  title: "About",
  description: "Mach13 modernises Germany's industrial heart with applied AI." 
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-10 rounded-3xl border border-divider bg-white px-6 py-12 sm:grid-cols-[1.1fr_0.9fr] sm:px-12" aria-labelledby="about-heading">
        <div className="space-y-6">
          <h1 id="about-heading" className="text-4xl font-semibold text-foreground">
            Modernise Germany’s industrial heart with applied AI.
          </h1>
          <p className="text-base text-foreground/70">
            Mach13 helps operators, quality leaders, and plant managers unlock the knowledge buried in documents and sensors. We focus on outcomes: faster answers, calmer audits, and lines that keep running.
          </p>
          <div className="rounded-2xl border border-divider/80 bg-background px-5 py-4 text-sm text-foreground/80">
            <p>
              Founded by <strong>Daksh Patel</strong>. Background in sensor analytics and document-grounded AI. Based in Bremen.
            </p>
          </div>
        </div>
        <figure className="rounded-3xl border border-divider bg-background p-6">
          <Image src="/illustrations/network.svg" alt="Abstract network illustration" width={400} height={240} className="w-full" />
          <figcaption className="mt-3 text-xs text-foreground/60">
            Mach13 blends document and sensor intelligence for regulated industries.
          </figcaption>
        </figure>
      </section>
      <section aria-labelledby="values-heading" className="rounded-3xl border border-divider bg-white px-6 py-12 sm:px-12">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <h2 id="values-heading" className="text-2xl font-semibold text-foreground">
            Values that shape every engagement
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-divider/80 bg-background px-5 py-6">
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
