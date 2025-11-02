"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const fadeIn = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-divider bg-white px-6 py-20 shadow-subtle sm:px-12" aria-labelledby="hero-title">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.08 }}
        className="mx-auto flex max-w-3xl flex-col gap-8"
      >
        <motion.div variants={fadeIn}>
          <span className="inline-flex items-center gap-2 rounded-full border border-divider/80 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-steel">
            AI for industrial operators
          </span>
        </motion.div>
        <motion.div variants={fadeIn}>
          <h1 id="hero-title" className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            AI-Driven Industrial Efficiency
          </h1>
        </motion.div>
        <motion.p
          variants={fadeIn}
          className="max-w-2xl text-lg leading-relaxed text-foreground/80"
        >
          Mach13 builds document-grounded assistants and custom ML that cut search time, reduce scrap, and keep audits calm.
        </motion.p>
        <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
          <Link
            href="/contact#book"
            className="inline-flex items-center justify-center rounded-full bg-steel px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-steel/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
          >
            Book a 15-minute discovery
          </Link>
          <Link
            href="/products/context-os"
            className="inline-flex items-center justify-center rounded-full border border-divider px-6 py-3 text-sm font-semibold text-foreground transition hover:border-steel hover:text-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
          >
            Explore Products
          </Link>
        </motion.div>
      </motion.div>
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-steel/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-12 h-72 w-72 rounded-full bg-signal/10 blur-3xl" />
    </section>
  );
}
