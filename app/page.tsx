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
import { home, services, engagements, cta, henneChapter, testimonials, servicesPage } from "@/lib/content";
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
              {home.eyebrow[lang]} · Paris 20ᵉ
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
            <ArchFrame id="hero-arch" drawBorder className="aspect-[3/4]">
              <Image
                src="/banner.png"
                alt={home.cardTitle[lang]}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
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

        <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const from = fromPrice(s.id);
            return (
              <Reveal key={s.id} delay={i * 70}>
                <article className="group text-center">
                  <div className="relative mx-auto max-w-[16rem]">
                    <ArchFrame id={`svc-${s.id}`} className="aspect-[3/4]">
                      <Image
                        src={s.image}
                        alt={s.title[lang]}
                        fill
                        sizes="(max-width: 640px) 80vw, 260px"
                        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                      />
                    </ArchFrame>
                    <span className="absolute left-1/2 top-3 -translate-x-1/2 opacity-70 transition-opacity group-hover:opacity-100">
                      <Paisley gold className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-medium text-plum-900">{s.title[lang]}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">{s.text[lang]}</p>
                  {from !== null && (
                    <p className="mt-3 font-caps text-xs uppercase tracking-[0.18em] text-gold-ink">
                      {servicesPage.fromLabel[lang]} <span className="text-plum-800">{from} €</span>
                    </p>
                  )}
                  <Link
                    href={s.priceHref}
                    className="nav-underline mt-3 inline-flex items-center gap-1.5 py-1 text-sm text-plum-800 transition-colors hover:text-plum-900"
                  >
                    {cta.seePrices[lang]}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ───────────────────────── Signature Henné (jewel box) ───────────────────────── */}
      <section className="relative overflow-hidden bg-aubergine-radial py-24 text-ivoire">
        <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron/10 blur-[100px]" />

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto grid aspect-square max-w-md place-items-center">
              {/* mandala centrepiece with self-painting mehndi vines */}
              <Mandala gold petals={24} className="absolute inset-0 h-full w-full opacity-90 animate-fade-up" />
              <span aria-hidden className="absolute inset-0 rounded-full bg-saffron/5 blur-2xl" />
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
              <span className="foil bg-gold-foil">{henneChapter.title[lang]}</span>
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
                <div className="group h-full rounded-3xl border border-line bg-white/80 p-6 text-center shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-glow hover:[box-shadow:inset_0_0_0_1px_theme(colors.gold.hair),0_24px_70px_-24px_rgba(201,162,75,0.45)]">
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

      {/* ───────────────────────── Testimonials ───────────────────────── */}
      <section className="container-x py-24">
        <Reveal className="text-center">
          <span className="eyebrow justify-center">
            <Paisley gold className="h-4 w-4" />
            {lang === "fr" ? "On dit de nous" : "What they say"}
          </span>
          <h2 className="display mx-auto mt-5 max-w-2xl text-4xl sm:text-5xl">
            {lang === "fr" ? "Des clientes conquises" : "Clients who adore us"}
          </h2>
          <GoldRule className="mt-6" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((tm, i) => (
            <Reveal key={tm.name} delay={i * 90}>
              <figure className="card h-full p-7">
                <span className="font-display text-6xl leading-none text-gold/50">“</span>
                <blockquote className="-mt-4 font-display text-xl italic leading-snug text-plum-900">
                  {tm.text[lang]}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Mandala key={s} gold petals={8} className="h-3 w-3" />
                    ))}
                  </span>
                  <span className="ml-auto text-right">
                    <span className="block text-sm font-medium text-plum-900">{tm.name}</span>
                    <span className="block text-xs text-muted">{tm.city[lang]}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
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
                <span className="foil bg-gold-foil">{home.ctaTitle[lang]}</span>
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
