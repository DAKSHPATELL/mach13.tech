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
  description: "Context OS and custom ML tuned for metal stamping, plastics, food & beverage, logistics, and coatings."
};

export default function SolutionsPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-divider bg-white px-6 py-12 sm:px-12" aria-labelledby="solutions-heading">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          <h1 id="solutions-heading" className="text-4xl font-semibold text-foreground">
            Same platform, different lines.
          </h1>
          <p className="text-base text-foreground/70">
            Mach13 adapts Context OS and custom ML to the realities of your facility. Start with document-grounded answers, scale into prediction and visual QA where it matters.
          </p>
        </div>
      </section>
      <section aria-label="Industry solutions" className="grid gap-6 md:grid-cols-2">
        {industries.map((industry) => (
          <article key={industry.name} className="rounded-3xl border border-divider bg-white px-6 py-8 shadow-subtle">
            <h2 className="text-2xl font-semibold text-foreground">{industry.name}</h2>
            <p className="mt-3 text-sm text-foreground/70">{industry.description}</p>
            <p className="mt-4 text-xs uppercase tracking-widest text-foreground/50">
              Powered by Context OS + Custom ML
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
