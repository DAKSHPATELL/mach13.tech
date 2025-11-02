'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export default function HomePage() {
  const prefersReduced = useReducedMotion();
  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(10,37,64,.12),transparent),linear-gradient(180deg,rgba(215,0,21,.05),transparent)]" />
      <section className="px-6 md:px-10 lg:px-16 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0B0B0C]">
              AI-driven industrial efficiency
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#0B0B0C]/80">
              Mach13 builds document-grounded assistants and custom machine learning for sensor and image data.
              We help teams find precise answers with citations, reduce scrap, and keep audits calm — without changing existing systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact#book" className="rounded-md bg-[#0A2540] px-5 py-3 text-white text-base font-semibold hover:bg-[#0A2540]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2540]">
                Book a 15-minute appointment
              </Link>
              <Link href="/products/context-os" className="rounded-md border border-[#0A2540] px-5 py-3 text-[#0A2540] text-base font-semibold hover:bg-[#0A2540]/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2540]">
                Explore products
              </Link>
            </div>
            <p className="mt-6 text-sm text-[#0B0B0C]/60">
              Based in Gujarat, India. Also serving Aachen, Germany.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#EDEDED]">
            <motion.div
              initial={prefersReduced ? {} : { scale: 0.98, opacity: 0 }}
              animate={prefersReduced ? {} : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="h-full w-full"
            >
              <Image
                src="/illustrations/hero-assembly.svg"
                alt="Industrial data and documents unified"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16 border-t border-[#EDEDED] bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[{
            title: 'Document-grounded answers with citations',
            body: 'Manuals, standard operating procedures, quality guidelines, customer requirements, and equipment specifications — answered with the exact source passage.'
          },{
            title: 'Custom machine learning for sensors and vision',
            body: 'Time-series sensors and image data models for predictive maintenance, anomaly detection, and visual quality checks.'
          },{
            title: 'Measured outcomes',
            body: 'Time-to-answer, first-attempt accuracy, and audit readiness. Clear metrics, small pilots, and fast iteration.'
          }].map(v => (
            <div key={v.title} className="p-6 rounded-lg ring-1 ring-[#EDEDED] bg-white">
              <h3 className="text-lg font-semibold text-[#0B0B0C]">{v.title}</h3>
              <p className="mt-3 text-[#0B0B0C]/80">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-14 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B0B0C]">Built for regulated operations</h2>
            <ul className="mt-6 space-y-3 text-[#0B0B0C]/80">
              <li>• Confidential by default. Non-disclosure agreements on request.</li>
              <li>• Role-based access control scaffolding for least-privilege answers.</li>
              <li>• Citations for every answer to support audits and internal reviews.</li>
              <li>• Two-week pilot playbook with clear acceptance criteria.</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden ring-1 ring-[#EDEDED]">
              <Image src="/illustrations/panel-docs.svg" alt="Documents" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden ring-1 ring-[#EDEDED]">
              <Image src="/illustrations/panel-sensors.svg" alt="Sensors" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden ring-1 ring-[#EDEDED]">
              <Image src="/illustrations/panel-vision.svg" alt="Vision" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden ring-1 ring-[#EDEDED]">
              <Image src="/illustrations/panel-security.svg" alt="Security" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16 border-t border-[#EDEDED]">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-extrabold text-[#0B0B0C]">Start with a short discovery</h3>
          <p className="mt-3 text-[#0B0B0C]/80">Fifteen minutes to understand your documentation and data. If there is a fit, we propose a small pilot with clear metrics.</p>
          <Link href="/contact#book" className="inline-block mt-6 rounded-md bg-[#D70015] px-6 py-3 text-white font-semibold hover:bg-[#D70015]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D70015]">
            Book an appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
