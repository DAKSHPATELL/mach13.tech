'use client';

import Image from 'next/image';
import { useTranslation } from '@/lib/i18n/useTranslation';

const valueKeys = ['precision', 'privacy', 'roi'] as const;

export default function AboutPageContent() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-16 sm:px-8 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <section
          className="grid gap-10 rounded-3xl border border-divider bg-surface px-6 py-12 shadow-subtle sm:grid-cols-[1.1fr_0.9fr] sm:px-12"
          aria-labelledby="about-heading"
        >
          <div className="space-y-6">
            <h1 id="about-heading" className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {t('aboutPage.title')}
            </h1>
            <p className="text-base leading-relaxed text-foreground/75">{t('aboutPage.intro')}</p>
            <div className="rounded-2xl border border-divider/70 bg-background px-5 py-4 text-sm text-foreground/70">
              <p>{t('aboutPage.founder')}</p>
            </div>
          </div>
          <figure className="rounded-3xl border border-divider bg-background p-6">
            <Image
              src="/illustrations/network.svg"
              alt={t('aboutPage.illustrationAlt')}
              width={480}
              height={320}
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-xs text-foreground/60">
              {t('aboutPage.illustrationAlt')}
            </figcaption>
          </figure>
        </section>

        <section
          aria-labelledby="values-heading"
          className="rounded-3xl border border-divider bg-surface px-6 py-12 shadow-subtle sm:px-12"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-6">
            <h2 id="values-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {t('aboutPage.valuesTitle')}
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {valueKeys.map((key) => (
                <div key={key} className="rounded-2xl border border-divider/70 bg-background px-5 py-6">
                  <h3 className="text-lg font-semibold text-foreground">{t(`aboutPage.values.${key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {t(`aboutPage.values.${key}.body`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
