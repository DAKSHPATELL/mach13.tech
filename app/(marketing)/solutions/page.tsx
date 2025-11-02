import { Metadata } from "next";

const industries = [
  {
    name: "Metal Stamping",
    description: "Press condition, tool wear, SPC checks"
  },
  {
    name: "Plastics/LSR",
    description: "Recipe windows, cure profiles, flash/short-shot detection"
  },
  {
    name: "Food & Beverage",
    description: "HACCP/IFS lookups, oven/retort profiles, label checks"
  },
  {
    name: "Logistics",
    description: "SOP answers, route exceptions, dock scheduling notes"
  },
  {
    name: "Coatings/Chemicals",
    description: "SDS/TDS queries, batch records, viscosity/UV parameters"
  }
];

export const metadata: Metadata = {
  title: "Solutions",
  description: "Context OS and custom machine learning tuned for metal stamping, plastics, food and beverage, logistics, and coatings."
};

export default function SolutionsPage() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <header className="rounded-3xl border border-divider bg-white p-8 shadow-subtle" aria-labelledby="solutions-heading">
          <div className="max-w-3xl space-y-4">
            <h1 id="solutions-heading" className="text-4xl font-semibold text-foreground">
              Same platform, different lines.
            </h1>
            <p className="text-base text-foreground/70">
              Mach13 adapts Context OS and custom machine learning to the realities of your facility. Start with document-grounded answers, scale into prediction and visual quality assurance where it matters.
            </p>
          </div>
        </header>
        <div aria-label="Industry solutions" className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <article key={industry.name} className="rounded-3xl border border-divider bg-white px-6 py-8 shadow-subtle">
              <h2 className="text-2xl font-semibold text-foreground">{industry.name}</h2>
              <p className="mt-3 text-sm text-foreground/70">{industry.description}</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-foreground/50">
                Powered by Context OS + Custom machine learning
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
