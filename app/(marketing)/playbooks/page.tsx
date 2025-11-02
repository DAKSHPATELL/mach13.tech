import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playbooks",
  description: "Implementation playbooks from Mach13 covering document-grounded assistants and industrial machine learning."
};

const sections = [
  {
    title: "Two-week pilot",
    description:
      "Scope, document sampling, metrics, and acceptance criteria. Learn how we run a focused discovery, normalise documents, and measure time-to-answer with citations." 
  },
  {
    title: "Document-grounded answering",
    description:
      "Ingestion, chunking, hybrid retrieval, and citation quality gates. Includes prompts, evaluation harnesses, and change-management checklists." 
  },
  {
    title: "Machine learning for sensors and vision",
    description:
      "Labelling plans, baseline selection, validation gates, shadow deployments, and monitoring templates for production lines." 
  }
];

export default function PlaybooksPage() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">Implementation playbooks</h1>
          <p className="text-lg text-foreground/80">
            Practical guidance drawn from real factory deployments. No client names. No marketing gloss. Downloadable templates and scorecards help you adapt the playbooks to your environment.
          </p>
          <p className="text-sm text-foreground/60">
            Based in Gujarat, India. Also serving Aachen, Germany.
          </p>
        </header>
        <div className="grid gap-6">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-divider bg-white p-6">
              <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
              <p className="mt-3 text-sm text-foreground/80">{section.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-steel/70">Request access via info@mach13.tech</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
