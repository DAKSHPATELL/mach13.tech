export default function ContextOSPage() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">Context OS for the factory floor</h1>
          <p className="text-lg text-foreground/80">
            Context OS is a document-grounded assistant that answers operational and quality questions with a cited source passage. It unifies manuals, standard operating procedures, quality guides, and customer requirements so teams get the right answer in seconds.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-divider bg-white p-6 text-sm text-foreground/80">
            <h2 className="text-2xl font-semibold text-foreground">Key features</h2>
            <ul className="mt-4 space-y-2">
              <li>• Hybrid retrieval with a knowledge graph for machines, lines, recipes, and stock keeping units.</li>
              <li>• Citations by default for every answer.</li>
              <li>• Connectors for PDF, Word, Excel, SharePoint, object storage, and secure on-premise shares.</li>
              <li>• Role-based guardrails that follow your approval matrices.</li>
              <li>• Observability dashboards for sources accessed and satisfaction signals.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-divider bg-white p-6 text-sm text-foreground/80">
            <h2 className="text-2xl font-semibold text-foreground">Where it helps</h2>
            <ul className="mt-4 space-y-2">
              <li>• Quality and compliance: faster audit answers with citations that stand up in reviews.</li>
              <li>• Operations and maintenance: quick lookups for settings, alarms, parts, and torque values.</li>
              <li>• Onboarding: reduce ramp-up time on complex production lines without writing new manuals.</li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-divider bg-background p-6 text-sm text-foreground/80">
          <h2 className="text-xl font-semibold text-foreground">Pilot structure</h2>
          <p className="mt-2">
            Two-week sprints with a curated document set, measurable time-to-answer improvements, and citation accuracy thresholds agreed before kickoff. We leave you with a production-ready stack and a governance checklist.
          </p>
        </div>
      </div>
    </section>
  );
}
