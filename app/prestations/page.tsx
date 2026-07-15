"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { Icon, Calendar, ArrowRight } from "@/components/Icons";
import { Paisley, GoldRule, ArchFrame } from "@/components/Ornaments";
import { useLang } from "@/lib/i18n";
import { servicesPage, services, cta } from "@/lib/content";
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

export default function ServicesPage() {
  const { lang } = useLang();

  return (
    <>
      <PageHero
        eyebrow={servicesPage.eyebrow[lang]}
        title={servicesPage.title[lang]}
        intro={servicesPage.intro[lang]}
      />

      <section className="container-x py-20 sm:py-24">
        <Reveal className="text-center">
          <span className="eyebrow justify-center">
            <Paisley gold className="h-4 w-4" />
            {servicesPage.chooseEyebrow[lang]}
          </span>
          <h2 className="display mx-auto mt-5 max-w-2xl text-4xl sm:text-5xl">
            {servicesPage.chooseTitle[lang]}
          </h2>
          <GoldRule className="mt-6" />
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const from = fromPrice(s.id);
            return (
              <Reveal key={s.id} delay={i * 70}>
                <article className="group flex h-full flex-col text-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5">
                  <div className="relative w-full">
                    <ArchFrame id={`prest-${s.id}`} className="aspect-[4/5]">
                      <Image
                        src={s.image}
                        alt={s.title[lang]}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                      />
                      {from !== null && (
                        <span className="absolute right-3.5 top-3.5 rounded-full bg-ivoire/90 px-3 py-1 text-xs font-semibold text-plum-800 shadow-sm backdrop-blur">
                          {servicesPage.fromLabel[lang]} {from} €
                        </span>
                      )}
                    </ArchFrame>
                  </div>
                  <span className="mt-6 flex items-center justify-center gap-2 text-plum-600">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-1 font-display text-3xl font-medium text-plum-900">{s.title[lang]}</h3>
                  <p className="mx-auto mt-2 max-w-xs flex-1 text-sm leading-relaxed text-muted">
                    {s.text[lang]}
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-2.5">
                    <Link href="/reservation" className="btn-primary !px-5 !py-2.5 text-xs">
                      <Calendar className="h-4 w-4" />
                      {cta.book[lang]}
                    </Link>
                    <Link href={s.priceHref} className="btn-ghost !px-5 !py-2.5 text-xs">
                      {cta.seePrices[lang]}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
