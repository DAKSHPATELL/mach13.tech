import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";

const LogoCloud = dynamic(async () => {
  const mod = await import("@/components/LogoCloud");
  return { default: mod.LogoCloud };
});
const CTASection = dynamic(async () => {
  const mod = await import("@/components/CTASection");
  return { default: mod.CTASection };
});
const MetricsKPI = dynamic(async () => {
  const mod = await import("@/components/MetricsKPI");
  return { default: mod.MetricsKPI };
});

const valueProps = [
  {
    title: "Document-grounded answers with citations",
    description: "From SOPs, manuals, IFS/HACCP, SDS/TDS, and OEM specs.",
    image: "/illustrations/blueprint.svg"
  },
  {
    title: "Custom ML for sensors & vision",
    description: "Predictive maintenance, anomaly detection, visual QA.",
    image: "/illustrations/pipeline.svg"
  },
  {
    title: "Measured outcomes",
    description: "Time-to-answer, first-try accuracy, and compliance readiness.",
    image: "/illustrations/dashboard.svg"
  }
];

const highlights = [
  {
    title: "Document connectors",
    description: "PDF, Word/Excel, SharePoint, S3, on-prem shares — plug in the sources you already trust."
  },
  {
    title: "Policy guardrails",
    description: "RBAC scaffolding ensures the right teams see the right answers with audit trails."
  },
  {
    title: "Observability",
    description: "Track questions asked, sources used, and satisfaction signals to close the loop."
  }
];

export default function Page() {
  return (
    <>
      <Hero />
      <section aria-labelledby="value-props" className="grid gap-6 sm:grid-cols-3">
        <h2 id="value-props" className="sr-only">
          Value propositions
        </h2>
        {valueProps.map((value) => (
          <FeatureCard key={value.title} title={value.title} description={value.description} image={value.image} />
        ))}
      </section>
      <section className="grid gap-12 rounded-3xl border border-divider bg-white px-6 py-12 sm:px-12" aria-labelledby="connectors">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="connectors" className="text-2xl font-semibold text-foreground">
              One platform built for regulated production
            </h2>
            <p className="mt-3 max-w-xl text-sm text-foreground/70">
              Context OS and custom ML models share the same foundation: high-trust content ingestion, policy guardrails, and measurable KPIs.
            </p>
          </div>
          <Link
            href="/products/context-os"
            className="inline-flex items-center justify-center rounded-full border border-divider px-5 py-3 text-sm font-semibold text-foreground transition hover:border-steel hover:text-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
          >
            Explore Context OS
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col gap-3 rounded-2xl border border-divider/70 bg-background px-5 py-6">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <LogoCloud />
      <section className="grid gap-10 rounded-3xl border border-divider bg-white px-6 py-12 sm:grid-cols-[1.2fr_1fr] sm:px-12" aria-labelledby="stack-unified">
        <div className="space-y-6">
          <h2 id="stack-unified" className="text-2xl font-semibold text-foreground">
            Assistants and custom ML share a common stack
          </h2>
          <p className="text-sm text-foreground/70">
            Document-grounded answers give teams context. Sensor and vision models catch issues before they escape. Together, they close the loop between knowledge and action.
          </p>
          <ul className="space-y-4 text-sm text-foreground/80">
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-steel" />
              <span>Hybrid RAG + knowledge graph maps machines, lines, recipes, and SKUs.</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-steel" />
              <span>Grounded citations by default, so audits stay calm.</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-steel" />
              <span>Time-series and vision models deployed as containerized APIs on-prem or in the cloud.</span>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-divider bg-background p-6">
          <Image
            src="/illustrations/mesh.svg"
            alt="Abstract illustration of connected production lines"
            width={400}
            height={240}
            className="w-full"
          />
          <p className="mt-4 text-xs text-foreground/60">
            All projects include data intake, evaluation gates, and handover playbooks.
          </p>
        </div>
      </section>
      <MetricsKPI />
      <CTASection />
    </>
  );
}
