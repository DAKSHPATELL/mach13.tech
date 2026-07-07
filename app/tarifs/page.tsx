"use client";

import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { useLang } from "@/lib/i18n";
import { pricesPage } from "@/lib/content";
import { priceCategories, formatPrice, type PriceCategory } from "@/lib/prices";

export default function PricesPage() {
  const { lang } = useLang();

  // Group categories by universe, preserving order.
  const universes: { name: string; categories: PriceCategory[] }[] = [];
  for (const cat of priceCategories) {
    const name = cat.group[lang];
    const bucket = universes.find((u) => u.name === name);
    if (bucket) bucket.categories.push(cat);
    else universes.push({ name, categories: [cat] });
  }

  return (
    <>
      <PageHero
        eyebrow={pricesPage.eyebrow[lang]}
        title={pricesPage.title[lang]}
        intro={pricesPage.intro[lang]}
      />

      <section className="container-x space-y-16 py-16 sm:py-20">
        {universes.map((u) => (
          <div key={u.name}>
            <Reveal>
              <h2 className="display flex items-center gap-4 text-3xl sm:text-4xl">
                {u.name}
                <span className="h-px flex-1 bg-line" />
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {u.categories.map((cat, i) => (
                <Reveal key={cat.id} delay={i * 60}>
                  <div id={cat.id} className="card scroll-mt-28 p-6 sm:p-7">
                    <h3 className="font-display text-xl font-semibold text-plum-800">
                      {cat.title[lang]}
                    </h3>
                    <ul className="mt-4 divide-y divide-line/70">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="flex items-baseline justify-between gap-4 py-3">
                          <span>
                            <span className="text-sm font-medium text-ink">{item.label[lang]}</span>
                            {item.detail && (
                              <span className="mt-0.5 block text-xs text-muted">
                                {item.detail[lang]}
                              </span>
                            )}
                          </span>
                          <span className="whitespace-nowrap font-display text-lg font-semibold text-magenta">
                            {formatPrice(item, lang)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
        <p className="text-center text-sm text-muted">{pricesPage.note[lang]}</p>
      </section>
    </>
  );
}
