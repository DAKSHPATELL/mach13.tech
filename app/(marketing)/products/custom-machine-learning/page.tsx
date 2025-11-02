import Image from "next/image";

export default function CustomMachineLearningPage() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">Custom machine learning for sensors and vision</h1>
          <p className="text-lg text-foreground/80">
            We design and deploy models for time-series sensor data and image data to predict failures, detect defects, and stabilise processes. Every engagement starts with a discovery on the shop floor and ends with monitored, production-ready models.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-divider">
            <Image src="/illustrations/panel-sensors.svg" alt="Sensors" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-divider">
            <Image src="/illustrations/panel-vision.svg" alt="Vision" fill className="object-cover" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 text-sm text-foreground/80">
            <h2 className="text-2xl font-semibold text-foreground">Time-series capabilities</h2>
            <p>Detect anomalies before they escalate, forecast drift, and schedule maintenance windows with confidence.</p>
            <ul className="space-y-2">
              <li>• Feature engineering from historian, programmable logic controller, and SCADA signals.</li>
              <li>• Predictive maintenance models with calibrated risk thresholds and alerts.</li>
              <li>• Multivariate forecasting for throughput, scrap, and energy consumption.</li>
            </ul>
          </div>
          <div className="space-y-3 text-sm text-foreground/80">
            <h2 className="text-2xl font-semibold text-foreground">Vision capabilities</h2>
            <p>Support operators with automated inspection that highlights real defects and ignores noise.</p>
            <ul className="space-y-2">
              <li>• Surface defect detection, classification, and semantic segmentation.</li>
              <li>• Optical character recognition for lot codes and regulatory labels.</li>
              <li>• Deployment on edge devices or secure cloud endpoints with monitoring hooks.</li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-divider bg-white p-6 text-sm text-foreground/80">
          <h2 className="text-xl font-semibold text-foreground">Delivery approach</h2>
          <ul className="mt-3 space-y-2">
            <li>• Data intake and labelling plan co-designed with your operators and quality managers.</li>
            <li>• Baselines and ablation studies documented for every model released.</li>
            <li>• Validation protocol and acceptance gates agreed before production deployment.</li>
            <li>• Handover with operating procedures, retraining cadence, and escalation paths.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
