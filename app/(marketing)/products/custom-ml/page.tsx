import { Metadata } from "next";
import { ProductHero } from "@/components/ProductHero";

export const metadata: Metadata = {
  title: "Custom ML",
  description:
    "Custom machine learning for sensor and vision data to predict failures, detect defects, and stabilize processes."
};

const capabilities = [
  "Time-Series: anomaly detection, predictive maintenance, drift monitoring, multivariate forecasting.",
  "Vision: surface defect detection, classification/segmentation, OCR.",
  "Delivery: data intake & labeling plan; baselines & ablation; validation protocol & acceptance gates; MLOps handover.",
  "Deployment: on-prem or cloud, containerized APIs; privacy-first."
];

export default function CustomMLPage() {
  return (
    <div className="space-y-16">
      <ProductHero
        kicker="Custom ML"
        title="Custom ML for Sensors & Vision"
        description="We build and deploy models for time-series sensors and image data to predict failures, detect defects, and stabilize processes."
        items={capabilities}
      />
      <section className="rounded-3xl border border-divider bg-white px-6 py-12 sm:px-12" aria-labelledby="delivery-heading">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <h2 id="delivery-heading" className="text-2xl font-semibold text-foreground">
            From discovery to deployment, without chaos
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-divider/80 bg-background px-5 py-6">
              <h3 className="text-lg font-semibold text-foreground">Data intake</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Structured plans for historian exports, PLC data, and camera feeds. We co-design labeling and quality checks with your process owners.
              </p>
            </div>
            <div className="rounded-2xl border border-divider/80 bg-background px-5 py-6">
              <h3 className="text-lg font-semibold text-foreground">Validation</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Baselines, ablations, and acceptance gates are agreed upfront. Every model ships with confidence intervals and failover guidance.
              </p>
            </div>
            <div className="rounded-2xl border border-divider/80 bg-background px-5 py-6">
              <h3 className="text-lg font-semibold text-foreground">MLOps handover</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Containerised APIs, monitoring hooks, and SOP updates so your teams own the outcome.
              </p>
            </div>
            <div className="rounded-2xl border border-divider/80 bg-background px-5 py-6">
              <h3 className="text-lg font-semibold text-foreground">Privacy-first deployment</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Cloud or on-premises, with role-based access and encryption in transit and at rest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
