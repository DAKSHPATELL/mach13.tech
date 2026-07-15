"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import Faq from "@/components/Faq";
import InstagramStrip from "@/components/InstagramStrip";
import { Icon } from "@/components/Icons";
import { Calendar, ArrowRight } from "@/components/Icons";
import {
  Paisley,
  GoldRule,
  ArchFrame,
  Mandala,
  MandalaWatermark,
  MehndiVine,
  GoldDust,
  WaxSeal
} from "@/components/Ornaments";
import { useLang } from "@/lib/i18n";
import { home, services, engagements, cta, henneChapter, testimonials } from "@/lib/content";
import { priceCategories } from "@/lib/prices";

const groupByServiceId: Record<string, string> = {
  epilation: "Waxing & threading",
  onglerie: "Nails",
  "soin-visage": "Facials",
  modelage: "Massage",
  henne: "Henna"
};
function fromPrice(serviceId: string): number | null {
  const groupEn = groupByServiceId[serviceId];
  const prices = priceCategories
    .filter((c) => c.group.en === groupEn)
    .flatMap((c) => c.items.map((i) => i.price))
    .filter((p): p is number => p !== null);
  return prices.length ? Math.min(...prices) : null;
}

export default function HomePage() {
  const { lang } = useLang();

  return (
    <>
      {/* ───────────────────────── Jharokha Hero ───────────────────────── */}
      <section className="draw-now relative overflow-hidden bg-cream-radial">
        <MandalaWatermark className="-right-40 -top-56 h-[42rem] w-[42rem] text-plum-200/40" />
        <span aria-hidden className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-[90px]" />
        <GoldDust count={9} />

        <div className="container-x relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up">
            <span className="eyebrow">
              <Paisley gold className="h-4 w-4" />
              {home.eyebrow[lang]} · Bagnolet
            </span>
            <h1 className="display mt-6 text-6xl leading-[0.95] sm:text-7xl md:text-[5.4rem]">
              <span className="block text-plum-900">{home.heroTitle1[lang]}</span>
              <span className="foil foil-sweep mt-1 block bg-gold-foil">{home.heroTitle2[lang]}</span>
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-16 bg-gradient-to-r from-gold to-transparent" />
              <MehndiVine gold className="h-6 w-40" />
            </div>

            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">{home.heroText[lang]}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/reservation" className="btn-primary text-base">
                <Calendar className="h-5 w-5" />
                {cta.bookLong[lang]}
              </Link>
              <Link href="/prestations" className="btn-ghost text-base">
                {lang === "fr" ? "Découvrir nos univers" : "Discover our services"}
              </Link>
            </div>

            <div className="mt-11 flex flex-wrap gap-x-8 gap-y-4">
              {home.badges.map((b) => (
                <div key={b.icon} className="flex items-center gap-3">
                  <WaxSeal>
                    <Icon name={b.icon} className="h-5 w-5" />
                  </WaxSeal>
                  <span className="max-w-[7rem] text-sm leading-tight text-plum-800">{b.label[lang]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arch-framed hero image */}
          <div className="relative mx-auto w-full max-w-md animate-fade-up lg:max-w-none" style={{ animationDelay: "0.15s" }}>
            <ArchFrame id="hero-arch" drawBorder className="aspect-[4/5]">
              <Image
                src="/banner.png"
                alt={home.cardTitle[lang]}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="animate-ken object-cover"
              />
            </ArchFrame>
            {/* floating signature card */}
            <div className="absolute -bottom-4 -left-3 max-w-[15rem] rounded-2xl border border-gold/40 bg-ivoire/95 p-4 shadow-gold-glow backdrop-blur-md sm:-left-8">
              <div className="flex items-center gap-2">
                <Mandala gold petals={12} className="h-6 w-6" />
                <span className="font-caps text-sm uppercase tracking-[0.16em] text-gold-ink">
                  {home.cardTitle[lang]}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-snug text-muted">{home.cardText[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Maison marquee ───────────────────────── */}
      <Marquee />

      {/* ───────────────────────── Nos Univers ───────────────────────── */}
      <section className="container-x py-24">
        <Reveal className="text-center">
          <span className="eyebrow justify-center">
            <Paisley gold className="h-4 w-4" />
            {home.servicesEyebrow[lang]}
          </span>
          <h2 className="display mx-auto mt-5 max-w-2xl text-4xl text-balance sm:text-5xl">
            {home.servicesTitle[lang]}
          </h2>
          <GoldRule className="mt-6" />
        </Reveal>

        <div className="mt-16 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const from = fromPrice(s.id);
            return (
              <Reveal key={s.id} delay={i * 70}>
                <Link
                  href={s.priceHref}
                  className="group block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5"
                >
                  <ArchFrame id={`svc-${s.id}`} className="aspect-[4/5]">
                    <Image
                      src={s.image}
                      alt={s.title[lang]}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                    />
                    <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/55 via-transparent to-transparent opacity-80" />
                    {from !== null && (
                      <span className="absolute left-3.5 top-3.5 rounded-full bg-ivoire/90 px-3 py-1 text-xs font-semibold text-plum-800 shadow-sm backdrop-blur">
                        {lang === "fr" ? "dès" : "from"} {from} €
                      </span>
                    )}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-display text-3xl font-medium text-ivoire">{s.title[lang]}</h3>
                      <span className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-ivoire/85">
                        {cta.seePrices[lang]}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </ArchFrame>
                  <p className="mx-auto mt-4 max-w-xs px-1 text-center text-sm leading-relaxed text-muted">
                    {s.text[lang]}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ───────────────────────── Signature Henné (jewel box) ───────────────────────── */}
      <section className="relative overflow-hidden bg-aubergine-radial py-24 text-ivoire">
        <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto grid aspect-square max-w-md place-items-center">
              {/* mandala centrepiece with self-painting mehndi vines */}
              <Mandala gold petals={24} className="absolute inset-0 h-full w-full opacity-90 animate-fade-up" />
              <span aria-hidden className="absolute inset-0 rounded-full bg-gold/5 blur-2xl" />
              <MehndiVine gold className="absolute left-0 top-[38%] h-10 w-full" />
              <MehndiVine gold className="absolute left-0 top-[62%] h-10 w-full rotate-180" />
              <span className="relative font-caps text-[0.72rem] uppercase tracking-[0.32em] text-gold">
                Mehndi
              </span>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <span className="eyebrow text-gold">
              <Paisley gold className="h-4 w-4" />
              {henneChapter.eyebrow[lang]}
            </span>
            <h2 className="display mt-5 text-5xl text-ivoire sm:text-6xl">
              <span className="foil foil-dark bg-gold-foil">{henneChapter.title[lang]}</span>
            </h2>
            <p className="mt-6 font-display text-2xl italic text-gold-champagne">
              « {henneChapter.quote[lang]} »
            </p>
            <div className="mt-5 space-y-4 text-ivoire/75">
              <p className="leading-relaxed">{henneChapter.text1[lang]}</p>
              <p className="leading-relaxed">{henneChapter.text2[lang]}</p>
            </div>
            <Link href="/reservation" className="btn-gold mt-8">
              <Calendar className="h-4 w-4" />
              {henneChapter.cta[lang]}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── Le Rituel (about teaser) ───────────────────────── */}
      <section className="bg-ivoire py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">
              <Paisley gold className="h-4 w-4" />
              {home.aboutEyebrow[lang]}
            </span>
            <h2 className="display mt-5 text-4xl sm:text-5xl">{home.aboutTitle[lang]}</h2>
            <GoldRule className="mt-6" />
            <p className="dropcap mt-7 text-base leading-relaxed text-muted">{home.aboutText1[lang]}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{home.aboutText2[lang]}</p>
            <Link href="/a-propos" className="nav-underline mt-6 inline-flex items-center gap-1.5 py-1 text-sm text-plum-800">
              {lang === "fr" ? "Notre histoire" : "Our story"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3">
            {engagements.map((e, i) => (
              <Reveal key={e.icon} delay={i * 90}>
                <div className="group h-full rounded-3xl border border-line bg-white/80 p-6 text-center shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-glow hover:[box-shadow:inset_0_0_0_1px_theme(colors.gold.hair),0_24px_70px_-24px_rgba(184,152,95,0.45)]">
                  <WaxSeal className="mx-auto">
                    <Icon name={e.icon} className="h-6 w-6" />
                  </WaxSeal>
                  <h3 className="mt-5 font-display text-2xl font-medium text-plum-900">{e.title[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{e.text[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Testimonials (velvet jewel box) ───────────────────────── */}
      <section className="relative overflow-hidden bg-aubergine-radial py-24 text-ivoire">
        <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <MandalaWatermark gold className="-left-32 -bottom-40 h-[32rem] w-[32rem] opacity-[0.06]" />

        <div className="container-x relative">
          <Reveal className="text-center">
            <span className="eyebrow justify-center text-gold">
              <Paisley gold className="h-4 w-4" />
              {lang === "fr" ? "On dit de nous" : "What they say"}
            </span>
            <h2 className="display mx-auto mt-5 max-w-2xl text-4xl text-ivoire sm:text-5xl">
              {lang === "fr" ? "Des clientes conquises" : "Clients who adore us"}
            </h2>
            <GoldRule className="mt-6" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((tm, i) => (
              <Reveal key={tm.name} delay={i * 90}>
                <figure className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40">
                  <span className="font-display text-6xl leading-none text-gold/60">“</span>
                  <blockquote className="-mt-4 font-display text-xl italic leading-snug text-gold-champagne">
                    {tm.text[lang]}
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                    <span className="flex items-center gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Mandala key={s} gold petals={8} className="h-3 w-3" />
                      ))}
                    </span>
                    <span className="ml-auto text-right">
                      <span className="block text-sm font-medium text-ivoire">{tm.name}</span>
                      <span className="block text-xs text-ivoire/55">{tm.city[lang]}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Instagram ───────────────────────── */}
      <InstagramStrip />

      {/* ───────────────────────── FAQ ───────────────────────── */}
      <Faq />

      {/* ───────────────────────── CTA jewel box ───────────────────────── */}
      <section className="container-x pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-aubergine-radial px-6 py-20 text-center text-ivoire shadow-soft ring-1 ring-gold/25 sm:px-12">
            <MandalaWatermark gold className="left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />
            <GoldDust count={8} />
            <div className="relative">
              <span className="eyebrow justify-center text-gold">
                <Paisley gold className="h-4 w-4" />
                {cta.book[lang]}
              </span>
              <h2 className="display mx-auto mt-5 max-w-2xl text-5xl sm:text-6xl">
                <span className="foil foil-dark bg-gold-foil">{home.ctaTitle[lang]}</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-ivoire/80">{home.ctaText[lang]}</p>
              <div className="mt-9 flex justify-center">
                <Link href="/reservation" className="btn-gold text-base">
                  <Calendar className="h-5 w-5" />
                  {cta.bookNow[lang]}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
