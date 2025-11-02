const metrics = [
  {
    label: "Time-to-answer",
    value: "↓ 67%",
    note: "Operators get cited answers in under 20 seconds"
  },
  {
    label: "First-try accuracy",
    value: "↑ 32%",
    note: "Continuous evaluation across SOP and OEM content"
  },
  {
    label: "Audit readiness",
    value: "Always-on",
    note: "Citations and policy guardrails by default"
  }
];

export function MetricsKPI() {
  return (
    <section className="rounded-3xl border border-divider bg-white px-6 py-12 sm:px-12" aria-labelledby="metrics-heading">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <div>
          <h2 id="metrics-heading" className="text-2xl font-semibold text-foreground">
            Measured outcomes that operators trust
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-foreground/70">
            Every program starts with a baseline and ends with a report. We track the metrics that matter to your lines and compliance teams.
          </p>
        </div>
        <dl className="grid gap-6 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-divider/80 bg-background px-5 py-6">
              <dt className="text-xs font-semibold uppercase tracking-widest text-steel/80">
                {metric.label}
              </dt>
              <dd className="mt-3 text-3xl font-semibold text-foreground">{metric.value}</dd>
              <p className="mt-2 text-xs text-foreground/60">{metric.note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
