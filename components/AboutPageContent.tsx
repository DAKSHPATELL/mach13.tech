'use client';
import { useTranslation } from '@/lib/i18n/useTranslation';

const valueKeys = ['precision', 'privacy', 'roi'] as const;

export default function AboutPageContent() {
  const { t } = useTranslation();

  return (
    <section className="px-4 py-14 sm:px-6 md:px-10 lg:px-16 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <section
          className="grid gap-10 rounded-3xl border border-divider bg-white px-8 py-12 sm:grid-cols-[1.1fr_0.9fr] sm:px-12"
          aria-labelledby="about-heading"
        >
          <div className="space-y-6">
            <h1 id="about-heading" className="text-4xl font-semibold tracking-tighter-xl text-foreground sm:text-5xl">
              {t('aboutPage.title')}
            </h1>
            <p className="text-base leading-relaxed text-foreground/75">{t('aboutPage.intro')}</p>
            <div className="rounded-2xl border border-divider/70 bg-slate-50 px-6 py-5 text-sm text-foreground/70">
              <p>{t('aboutPage.founder')}</p>
            </div>
          </div>
          {/* Premium imagery placeholder — replace with final asset */}
          <figure className="flex aspect-video w-full items-center justify-center rounded-3xl border border-divider bg-slate-50 p-6">
            <p className="text-sm text-foreground/50">[Premium Image: {t('aboutPage.illustrationAlt')}]</p>
            <figcaption className="mt-3 text-xs text-foreground/60">
              {t('aboutPage.illustrationAlt')}
            </figcaption>
          </figure>
        </section>

        <section
          aria-labelledby="values-heading"
          className="rounded-3xl border border-divider bg-white px-8 py-12 sm:px-12"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-6">
            <h2 id="values-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {t('aboutPage.valuesTitle')}
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {valueKeys.map((key) => (
                <div key={key} className="rounded-2xl border border-divider/70 bg-slate-50 px-6 py-6 hover:bg-slate-100 transition-colors">
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
