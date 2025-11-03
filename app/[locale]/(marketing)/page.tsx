"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import PickTimeButton from "@/components/PickTimeButton";

const HERO_VIDEOS = [
  {
    src: "/videos/AI_Startup_Website_Video_Concepts.mp4",
    poster: "/illustrations/hero-assembly.svg",
    altKey: "hero.videoPrimaryAlt"
  },
  {
    src: "/videos/AI_Video_Generation_for_Mach_.mp4",
    poster: "/illustrations/hero-assembly.svg",
    altKey: "hero.videoSecondaryAlt"
  }
] as const;

const abVariant = process.env.NEXT_PUBLIC_AB_VARIANT ?? "control";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type CTAButtonProps = {
  href: string;
  label: string;
  tone?: "primary" | "secondary" | "ghost";
  eventId: string;
  className?: string;
};

function CTAButton({ href, label, tone = "primary", eventId, className }: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const toneClasses =
    tone === "primary"
      ? "bg-steel text-white hover:bg-steel/90 focus-visible:outline-steel"
      : tone === "secondary"
        ? "border border-steel text-steel hover:bg-steel/10 focus-visible:outline-steel"
        : "text-foreground hover:text-steel focus-visible:outline-steel";
  const combined = `${baseClasses} ${toneClasses} ${className ?? ""}`;

  const handleClick = () => {
    window.gtag?.("event", "cta_click", {
      event_category: "engagement",
      event_label: eventId,
      variant: abVariant
    });
  };

  return (
    <Link href={href} className={combined.trim()} onClick={handleClick}>
      {label}
    </Link>
  );
}

export default function HomePage() {
  const { t } = useTranslation();
  const prefersReduced = useReducedMotion();
  const [primaryVideoFailed, setPrimaryVideoFailed] = useState(false);
  const [secondaryVideoFailed, setSecondaryVideoFailed] = useState(false);

  const heroStats = [
    { value: t("hero.statPilot.value"), label: t("hero.statPilot.label") },
    { value: t("hero.statTraceable.value"), label: t("hero.statTraceable.label") },
    { value: t("hero.statDowntime.value"), label: t("hero.statDowntime.label") }
  ];

  const featureKeys = ["overview.items.context", "overview.items.analytics", "overview.items.governance"] as const;
  const operationsBullets = [
    t("operations.bullets.overlay"),
    t("operations.bullets.handover"),
    t("operations.bullets.handsFree")
  ];
  const trustCards = ["automotive", "pharma", "automation", "security"] as const;
  const processSteps = ["diagnostic", "pilot", "scale"] as const;
  const heroAccentClass = abVariant === "variant-b" ? "from-signal/25" : "from-steel/25";

  return (
    <main
      id="main-content"
      className="relative flex flex-col gap-24 pb-24 text-foreground md:gap-28 md:pb-32"
      data-ab-variant={abVariant}
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${heroAccentClass} via-transparent to-transparent`}
        aria-hidden="true"
      />

      <motion.section
        initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
        animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-6 pt-20 sm:px-8 md:px-10 lg:px-16"
      >
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-start gap-16 md:flex-row md:items-center">
          <div className="max-w-xl space-y-8">
            <span className="inline-flex items-center rounded-full border border-divider bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground/70 shadow-subtle/20">
              {t("hero.badge")}
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t("hero.title")}
              </h1>
              <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">
                {t("hero.subtitle")}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <PickTimeButton url="https://www.picktime.com/9581da74-ab62-43f5-a00c-68aacec5895b" />
              <a
                href="/products/context-os"
                className="rounded-md border border-[#0A2540] px-5 py-3 text-[#0A2540] text-base font-semibold hover:bg-[#0A2540]/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2540]"
              >
                Explore products
              </a>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-divider bg-surface px-5 py-4 shadow-subtle/30">
                  <dt className="text-xs font-medium uppercase tracking-wide text-foreground/60">{stat.label}</dt>
                  <dd className="mt-2 text-xl font-semibold text-foreground">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <p className="text-xs uppercase tracking-tight text-foreground/60">{t("hero.note")}</p>
          </div>

          <div className="w-full md:max-w-xl">
            <div className="relative overflow-hidden rounded-3xl border border-divider/60 bg-surface shadow-subtle">
              {!prefersReduced && !primaryVideoFailed ? (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={HERO_VIDEOS[0].poster}
                  onError={() => setPrimaryVideoFailed(true)}
                >
                  <source src={HERO_VIDEOS[0].src} type="video/mp4" />
                </video>
              ) : (
                <div className="relative aspect-[5/3] bg-muted">
                  <Image
                    src={HERO_VIDEOS[0].poster}
                    alt={t(HERO_VIDEOS[0].altKey)}
                    fill
                    className="object-cover"
                    priority
                  />
                  {primaryVideoFailed ? (
                    <span className="sr-only">{t("notifications.videoFallback")}</span>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      <section id="capabilities" className="px-6 sm:px-8 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 rounded-3xl border border-divider bg-surface px-6 py-14 shadow-subtle sm:px-10 md:py-16">
          <div className="max-w-3xl space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t("overview.title")}
            </h2>
            <p className="text-base leading-relaxed text-foreground/75">
              {t("overview.intro")}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featureKeys.map((key) => (
              <div key={key} className="rounded-3xl border border-divider/70 bg-background px-5 py-6">
                <h3 className="text-lg font-semibold text-foreground">{t(`${key}.title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{t(`${key}.body`)}</p>
              </div>
            ))}
          </div>
          <div>
            <CTAButton
              href="/contact"
              label={t("overview.cta")}
              tone="secondary"
              eventId="overview_cta"
            />
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-8 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 overflow-hidden rounded-3xl border border-divider bg-surface px-6 py-14 shadow-subtle sm:px-10 md:grid-cols-2 md:py-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("operations.title")}</h2>
            <p className="text-base leading-relaxed text-foreground/75">{t("operations.body")}</p>
            <ul className="space-y-3 text-sm text-foreground/70">
              {operationsBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 rounded-full bg-steel" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <CTAButton
              href="/products/custom-machine-learning"
              label={t("operations.cta")}
              tone="primary"
              eventId="operations_cta"
            />
          </div>
          <div className="relative w-full">
            <div className="relative overflow-hidden rounded-3xl border border-divider/60 bg-muted">
              {!prefersReduced && !secondaryVideoFailed ? (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={HERO_VIDEOS[1].poster}
                  onError={() => setSecondaryVideoFailed(true)}
                >
                  <source src={HERO_VIDEOS[1].src} type="video/mp4" />
                </video>
              ) : (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={HERO_VIDEOS[1].poster}
                    alt={t(HERO_VIDEOS[1].altKey)}
                    fill
                    className="object-cover"
                  />
                  {secondaryVideoFailed ? (
                    <span className="sr-only">{t("notifications.videoFallback")}</span>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-8 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 rounded-3xl border border-divider bg-surface px-6 py-14 shadow-subtle sm:px-10 md:py-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("trust.title")}</h2>
            <p className="text-base leading-relaxed text-foreground/75">{t("trust.body")}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {trustCards.map((card) => (
              <div key={card} className="rounded-3xl border border-divider/70 bg-background px-5 py-6">
                <h3 className="text-lg font-semibold text-foreground">{t(`trust.cards.${card}.title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {t(`trust.cards.${card}.body`)}
                </p>
              </div>
            ))}
          </div>
          <CTAButton
            href="/contact"
            label={t("trust.cta")}
            tone="secondary"
            eventId="trust_cta"
          />
        </div>
      </section>

 	    <section className="px-6 sm:px-8 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 rounded-3xl border border-divider bg-surface px-6 py-14 shadow-subtle sm:px-10 md:py-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("process.title")}</h2>
            <p className="text-base leading-relaxed text-foreground/75">{t("process.body")}</p>
          </div>
          <ol className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <li key={step} className="rounded-3xl border border-divider/70 bg-background px-5 py-6">
                <h3 className="text-lg font-semibold text-foreground">{t(`process.steps.${step}.title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {t(`process.steps.${step}.body`)}
                </p>
              </li>
            ))}
          </ol>
          <CTAButton
            href="/contact#book"
            label={t("process.cta")}
            eventId="process_cta"
          />
        </div>
      </section>

      <section className="px-6 sm:px-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-divider bg-steel px-6 py-16 text-white shadow-subtle sm:px-10 md:py-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("closing.title")}</h2>
            <p className="text-base leading-relaxed text-white/80">{t("closing.body")}</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTAButton
              href="/contact#book"
              label={t("closing.primaryCta")}
              eventId="closing_primary"
              className="bg-white text-steel hover:bg-white/90 focus-visible:outline-white"
            />
            <CTAButton
              href="/contact"
              label={t("closing.secondaryCta")}
              tone="ghost"
              eventId="closing_secondary"
              className="text-white hover:text-white/80 focus-visible:outline-white"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
