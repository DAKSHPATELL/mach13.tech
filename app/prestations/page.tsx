"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { Icon, Calendar, ArrowRight } from "@/components/Icons";
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
          <span className="eyebrow">{servicesPage.chooseEyebrow[lang]}</span>
          <h2 className="display mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl">
            {servicesPage.chooseTitle[lang]}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const from = fromPrice(s.id);
            return (
              <Reveal key={s.id} delay={i * 70}>
                <article className="card group flex h-full flex-col overflow-hidden sm:flex-row">
                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:w-2/5">
                    <Image
                      src={s.image}
                      alt={s.title[lang]}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="flex items-center gap-2 text-magenta">
                      <Icon name={s.icon} className="h-5 w-5" />
                      <h3 className="font-display text-2xl font-semibold text-plum-900">
                        {s.title[lang]}
                      </h3>
                    </span>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.text[lang]}</p>
                    {from !== null && (
                      <p className="mt-4 text-sm text-muted">
                        {servicesPage.fromLabel[lang]}{" "}
                        <span className="font-display text-2xl font-semibold text-plum-800">
                          {from} €
                        </span>
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      <Link href="/reservation" className="btn-primary !px-5 !py-2.5 text-xs">
                        <Calendar className="h-4 w-4" />
                        {cta.book[lang]}
                      </Link>
                      <Link href={s.priceHref} className="btn-ghost !px-5 !py-2.5 text-xs">
                        {cta.seePrices[lang]}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
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
