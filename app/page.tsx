"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { Calendar, ArrowRight, Sparkle } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { home, services, engagements, cta } from "@/lib/content";

export default function HomePage() {
  const { lang } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-radial">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-plum-200/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-magenta/10 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="eyebrow">{home.eyebrow[lang]}</span>
            <h1 className="display mt-5 text-5xl sm:text-6xl md:text-7xl">
              <span className="text-plum-900">{home.heroTitle1[lang]}</span>
              <br />
              <span className="bg-plum-gradient bg-clip-text text-transparent">
                {home.heroTitle2[lang]}
              </span>
            </h1>
            <div className="mt-6 h-px w-20 bg-plum-300" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{home.heroText[lang]}</p>
            <div className="mt-8">
              <Link href="/reservation" className="btn-primary text-base">
                <Calendar className="h-5 w-5" />
                {cta.bookLong[lang]}
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {home.badges.map((b) => (
                <div key={b.icon} className="chip justify-start">
                  <Icon name={b.icon} className="h-5 w-5 text-magenta" />
                  <span className="text-xs">{b.label[lang]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-2 shadow-soft">
              <Image
                src="/banner.png"
                alt={home.cardTitle[lang]}
                width={1254}
                height={1254}
                priority
                className="h-full w-full rounded-[1.7rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-line bg-white/90 p-4 shadow-card backdrop-blur-md sm:left-6 sm:max-w-xs">
              <div className="flex items-center gap-2 text-magenta">
                <Sparkle className="h-5 w-5" />
                <span className="text-sm font-semibold text-plum-800">{home.cardTitle[lang]}</span>
              </div>
              <p className="mt-1.5 text-sm leading-snug text-muted">{home.cardText[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-x py-20 sm:py-24">
        <Reveal className="text-center">
          <span className="eyebrow">{home.servicesEyebrow[lang]}</span>
          <h2 className="display mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl">
            {home.servicesTitle[lang]}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <article className="card group h-full overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title[lang]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/85 text-plum-600 shadow-sm backdrop-blur">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-plum-900">{s.title[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text[lang]}</p>
                  <Link
                    href={s.priceHref}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-magenta transition-colors hover:text-plum-700"
                  >
                    {cta.seePrices[lang]}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-white/60 py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="eyebrow">{home.aboutEyebrow[lang]}</span>
            <h2 className="display mt-4 text-4xl sm:text-5xl">{home.aboutTitle[lang]}</h2>
            <p className="mt-6 text-base leading-relaxed text-muted">{home.aboutText1[lang]}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{home.aboutText2[lang]}</p>
          </Reveal>
          <div className="grid gap-5">
            {engagements.map((e, i) => (
              <Reveal key={e.icon} delay={i * 90}>
                <div className="card flex items-start gap-4 p-5">
                  <span className="icon-badge">
                    <Icon name={e.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-plum-900">{e.title[lang]}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{e.text[lang]}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-plum-gradient px-6 py-16 text-center text-white shadow-glow sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl"
            />
            <h2 className="display relative mx-auto max-w-2xl text-4xl text-white sm:text-5xl">
              {home.ctaTitle[lang]}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/85">{home.ctaText[lang]}</p>
            <div className="relative mt-8 flex justify-center">
              <Link
                href="/reservation"
                className="btn inline-flex bg-white text-plum-800 hover:-translate-y-0.5 hover:bg-plum-50"
              >
                <Calendar className="h-4 w-4" />
                {cta.bookNow[lang]}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
