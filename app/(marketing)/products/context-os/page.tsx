import React from 'react';

export default function ContextOSPage() {
  return (
    <main className="px-6 md:px-10 lg:px-16 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B0B0C]">Context OS for the factory floor</h1>
        <p className="mt-6 text-lg text-[#0B0B0C]/80">
          Context OS is a document-grounded assistant that answers operational and quality questions with a cited source passage.
          It unifies manuals, standard operating procedures, quality guides, and customer requirements so teams get the right answer in seconds.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[#0B0B0C]">Key features</h2>
        <ul className="mt-4 space-y-2 text-[#0B0B0C]/80">
          <li>• Hybrid retrieval with a knowledge graph for machines, lines, recipes, and stock keeping units.</li>
          <li>• Citations by default for every answer.</li>
          <li>• Document connectors: PDF, Word, Excel, SharePoint, object storage, and on-premise shares.</li>
          <li>• Policy guardrails with role-based access scaffolding.</li>
          <li>• Observability: which sources were used and satisfaction signals.</li>
        </ul>
        <h2 className="mt-10 text-2xl font-semibold text-[#0B0B0C]">Where it helps</h2>
        <ul className="mt-4 space-y-2 text-[#0B0B0C]/80">
          <li>• Quality and compliance: faster audit answers; fewer escalations.</li>
          <li>• Operations and maintenance: quick lookups for settings, alarms, parts, and torque values.</li>
          <li>• Onboarding: reduce ramp-up time on complex production lines.</li>
        </ul>
      </div>
    </main>
  );
}
