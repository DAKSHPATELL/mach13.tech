'use client';

import { useTranslation } from '@/lib/i18n/useTranslation';

export default function ContextOSPage() {
  const { t } = useTranslation();
  
  const features = t<string[]>('productDetail.contextOs.features');
  const coverage = t<string[]>('productDetail.contextOs.coverage');

  return (
    <section className="px-6 py-16 sm:px-8 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl space-y-12">
        <header className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tighter-xl text-foreground sm:text-5xl">
            {t('productDetail.contextOs.title')}
          </h1>
          <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">
            {t('productDetail.contextOs.intro')}
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-divider bg-white px-8 py-8">
            <h2 className="text-2xl font-semibold text-foreground">
              {t('productDetail.contextOs.featuresTitle')}
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/75">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-steel mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-divider bg-white px-8 py-8">
            <h2 className="text-2xl font-semibold text-foreground">
              {t('productDetail.contextOs.coverageTitle')}
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/75">
              {coverage.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-steel mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-divider bg-slate-50 px-8 py-8 text-sm leading-relaxed text-foreground/75">
          <h2 className="text-xl font-semibold text-foreground">
            {t('productDetail.contextOs.pilotTitle')}
          </h2>
          <p className="mt-3">{t('productDetail.contextOs.pilotBody')}</p>
        </div>
      </div>
    </section>
  );
}
