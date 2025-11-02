'use client';

import { useTranslation } from '@/lib/i18n/useTranslation';

const featureKeys = [0, 1, 2, 3, 4] as const;
const coverageKeys = [0, 1, 2] as const;

export default function ContextOSPage() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-16 sm:px-8 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl space-y-12">
        <header className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {t('productDetail.contextOs.title')}
          </h1>
          <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">
            {t('productDetail.contextOs.intro')}
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-divider bg-surface px-6 py-6 shadow-subtle">
            <h2 className="text-2xl font-semibold text-foreground">
              {t('productDetail.contextOs.featuresTitle')}
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/75">
              {featureKeys.map((index) => (
                <li key={index}>• {t(`productDetail.contextOs.features.${index}`)}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-divider bg-surface px-6 py-6 shadow-subtle">
            <h2 className="text-2xl font-semibold text-foreground">
              {t('productDetail.contextOs.coverageTitle')}
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/75">
              {coverageKeys.map((index) => (
                <li key={index}>• {t(`productDetail.contextOs.coverage.${index}`)}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-divider bg-background px-6 py-6 text-sm leading-relaxed text-foreground/75 shadow-subtle">
          <h2 className="text-xl font-semibold text-foreground">
            {t('productDetail.contextOs.pilotTitle')}
          </h2>
          <p className="mt-3">{t('productDetail.contextOs.pilotBody')}</p>
        </div>
      </div>
    </section>
  );
}
