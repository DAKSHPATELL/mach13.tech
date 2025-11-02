import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ProductHero } from "@/components/ProductHero";

export const metadata: Metadata = {
  title: "Context OS",
  description:
    "Context OS is a document-grounded AI that answers operational and quality questions with citations in seconds."
};

const bulletPoints = [
  "Hybrid RAG + knowledge graph (machines, lines, recipes, SKUs).",
  "Citations by default (exact snippet + source link).",
  "Document connectors (PDF, Word/Excel, SharePoint, S3, on-prem shares — placeholders).",
  "Policy guardrails (RBAC scaffolding).",
  "Observability (questions, sources used, satisfaction signals)."
];

const fits = ["QA & Compliance", "Ops & Maintenance", "Onboarding"];

export default function ContextOSPage() {
  return (
    <div className="space-y-16">
      <ProductHero
        kicker="Context OS"
        title="Context OS for the Factory Floor"
        description="Context OS is a document-grounded AI that answers operational and quality questions with a cited source passage. It unifies manuals, SOPs, quality guides, and customer requirements so teams get the right answer in seconds."
        items={bulletPoints}
        footer={
          <p>
            Pilot CTA: <strong>Two-week pilot</strong>, 1–2 document sets, metrics: time-to-answer & citation accuracy.
          </p>
        }
      />
      <section className="grid gap-10 rounded-3xl border border-divider bg-white px-6 py-12 sm:grid-cols-[1.3fr_1fr] sm:px-12" aria-labelledby="fits-heading">
        <div className="space-y-4">
          <h2 id="fits-heading" className="text-2xl font-semibold text-foreground">
            Built for the teams that keep production running
          </h2>
          <p className="text-sm text-foreground/70">
            Context OS turns unstructured documentation into a fast, cited assistant. Operators and auditors stay aligned with shared context.
          </p>
          <ul className="flex flex-wrap gap-3" aria-label="Teams that benefit">
            {fits.map((fit) => (
              <li key={fit} className="rounded-full border border-divider px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground/70">
                {fit}
              </li>
            ))}
          </ul>
          <Link
            href="/contact#book"
            className="inline-flex w-fit items-center justify-center rounded-full bg-steel px-6 py-3 text-sm font-semibold text-white transition hover:bg-steel/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
          >
            Start a pilot
          </Link>
        </div>
        <figure className="rounded-3xl border border-divider bg-background p-6">
          <Image src="/illustrations/dashboard.svg" alt="Context OS dashboard" width={400} height={240} className="w-full" />
          <figcaption className="mt-3 text-xs text-foreground/60">
            Live citations with passage previews and source drill-down.
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
