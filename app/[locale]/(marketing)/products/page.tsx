'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/useTranslation';

const productCardKeys = ['contextOs', 'customMl'] as const;

export default function ProductsOverviewPage() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-16 sm:px-8 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {t('productsPage.title')}
          </h1>
          <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">
            {t('productsPage.intro')}
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {productCardKeys.map((key) => (
            <article key={key} className="flex h-full flex-col rounded-3xl border border-divider bg-surface px-6 py-6 shadow-subtle">
              <h2 className="text-2xl font-semibold text-foreground">{t(`productsPage.cards.${key}.title`)}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {t(`productsPage.cards.${key}.description`)}
              </p>
              {(() => {
                const features = t<string[]>(`productsPage.cards.${key}.features`);
                return (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/70">
                    {features.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                );
              })()}
              <Link
                href={`/products/${key === 'contextOs' ? 'context-os' : 'custom-machine-learning'}`}
                className="mt-6 inline-flex w-fit items-center rounded-full border border-steel px-4 py-2 text-sm font-semibold text-steel transition hover:bg-steel/10"
              >
                {t(`productsPage.cards.${key}.cta`)}
              </Link>
            </article>
          ))}
        </div>

        <section className="rounded-3xl border border-divider bg-background px-6 py-8 shadow-subtle">
          <h2 className="text-2xl font-semibold text-foreground">
            {t('productsPage.support.title')}
          </h2>
          {(() => {
            const supportItems = t<string[]>('productsPage.support.items');
            return (
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/75">
                {supportItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            );
          })()}
        </section>
      </div>
    </section>
  );
}
