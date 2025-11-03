'use client';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function CustomMachineLearningPage() {
  const { t } = useTranslation();
  
  const timeSeriesPoints = t<string[] | null>('productDetail.customMl.timeSeriesPoints') ?? [];
  const visionPoints = t<string[] | null>('productDetail.customMl.visionPoints') ?? [];
  const deliveryPoints = t<string[] | null>('productDetail.customMl.deliveryPoints') ?? [];

  return (
    <section className="px-6 py-16 sm:px-8 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl space-y-12">
        <header className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tighter-xl text-foreground sm:text-5xl">
            {t('productDetail.customMl.title')}
          </h1>
          <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">
            {t('productDetail.customMl.intro')}
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Premium product visuals placeholders */}
          <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-divider bg-slate-50">
            <p className="text-sm text-foreground/50">[Premium Visual: {t('operations.bullets.overlay')}]</p>
          </div>
          <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-divider bg-slate-50">
            <p className="text-sm text-foreground/50">[Premium Visual: {t('operations.bullets.handsFree')}]</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-divider bg-white px-8 py-8 text-sm leading-relaxed text-foreground/75">
            <h2 className="text-2xl font-semibold text-foreground">
              {t('productDetail.customMl.timeSeriesTitle')}
            </h2>
            <p>{t('productDetail.customMl.timeSeriesIntro')}</p>
            <ul className="space-y-3">
              {timeSeriesPoints.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-steel mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-3xl border border-divider bg-white px-8 py-8 text-sm leading-relaxed text-foreground/75">
            <h2 className="text-2xl font-semibold text-foreground">
              {t('productDetail.customMl.visionTitle')}
            </h2>
            <p>{t('productDetail.customMl.visionIntro')}</p>
            <ul className="space-y-3">
              {visionPoints.map((item, index) => (
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
            {t('productDetail.customMl.deliveryTitle')}
          </h2>
          <ul className="mt-4 space-y-3">
            {deliveryPoints.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-steel mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
