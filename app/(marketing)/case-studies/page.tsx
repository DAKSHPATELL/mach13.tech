import { Metadata } from "next";
import Link from "next/link";
import { getCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "See how Mach13 reduces time-to-answer and keeps audits calm across regulated production."
};

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies();

  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-divider bg-white px-6 py-12 sm:px-12" aria-labelledby="case-studies-heading">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          <h1 id="case-studies-heading" className="text-4xl font-semibold text-foreground">
            Results delivered in quiet factories
          </h1>
          <p className="text-base text-foreground/70">
            Three anonymised programs show how document-grounded answers and custom ML work together. Figures ready for NDA conversations.
          </p>
        </div>
      </section>
      <section aria-label="Case studies" className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((study) => (
          <article key={study.slug} className="flex h-full flex-col gap-4 rounded-3xl border border-divider bg-white px-6 py-8 shadow-subtle">
            <header className="space-y-1">
              <h2 className="text-xl font-semibold text-foreground">{study.title}</h2>
              <p className="text-xs uppercase tracking-widest text-foreground/50">Stack: {study.stack}</p>
            </header>
            <dl className="space-y-3 text-sm text-foreground/75">
              <div>
                <dt className="font-semibold text-foreground">Challenge</dt>
                <dd>{study.challenge}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Approach</dt>
                <dd>{study.approach}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Measured outcome</dt>
                <dd>{study.outcome}</dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="mt-auto inline-flex items-center justify-center rounded-full border border-divider px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground/80 transition hover:border-steel hover:text-steel"
            >
              Discuss details
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
