import Image from 'next/image';

export default function CustomMLPage() {
  return (
    <main className="px-6 md:px-10 lg:px-16 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B0B0C]">Custom machine learning for sensors and vision</h1>
        <p className="mt-6 text-lg text-[#0B0B0C]/80">
          We design and deploy models for time-series sensor data and image data to predict failures, detect defects,
          and stabilise processes.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-[#EDEDED]">
            <Image src="/illustrations/panel-sensors.svg" alt="Sensors" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-[#EDEDED]">
            <Image src="/illustrations/panel-vision.svg" alt="Vision" fill className="object-cover" />
          </div>
        </div>
        <h2 className="mt-10 text-2xl font-semibold text-[#0B0B0C]">Capabilities</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4 text-[#0B0B0C]/80">
          <ul className="space-y-2">
            <li>• Time-series: anomaly detection, predictive maintenance, drift monitoring, multivariate forecasting.</li>
            <li>• Delivery: data intake and labelling plan, baselines and ablation, validation protocol and acceptance gates.</li>
          </ul>
          <ul className="space-y-2">
            <li>• Vision: surface defect detection, classification, segmentation, optical character recognition for labels and codes.</li>
            <li>• Deployment: on-premise or cloud, containerised endpoints with monitoring and retraining hooks.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
