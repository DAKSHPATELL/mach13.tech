export default function PlaybooksPage() {
  return (
    <main className="px-6 md:px-10 lg:px-16 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B0B0C]">Playbooks</h1>
        <p className="mt-6 text-lg text-[#0B0B0C]/80">
          Implementation notes you can reuse. No client names. No fabricated stories.
        </p>
        <ul className="mt-8 space-y-4 text-[#0B0B0C]/80">
          <li>• Two-week pilot: scope, document sampling, metrics, acceptance criteria.</li>
          <li>• Document-grounded answering: ingestion, chunking, retrieval, citation quality.</li>
          <li>• Sensor and vision: labelling plan, baselines, validation gates, monitoring.</li>
        </ul>
      </div>
    </main>
  );
}
