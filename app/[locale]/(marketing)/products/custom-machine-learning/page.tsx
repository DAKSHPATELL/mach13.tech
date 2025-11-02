'use client';

import Image from 'next/image';
import { useTranslation } from '@/lib/i18n/useTranslation';

const timeSeriesKeys = [0, 1, 2] as const;
const visionKeys = [0, 1, 2] as const;
const deliveryKeys = [0, 1, 2, 3] as const;

export default function CustomMachineLearningPage() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-16 sm:px-8 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl space-y-12">
        <header className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {t('productDetail.customMl.title')}
          </h1>
          <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">
            {t('productDetail.customMl.intro')}
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-divider bg-background shadow-subtle">
            <Image
              src="/illustrations/panel-sensors.svg"
              alt={t('operations.bullets.overlay')}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-divider bg-background shadow-subtle">
            <Image
              src="/illustrations/panel-vision.svg"
              alt={t('operations.bullets.handsFree')}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3 rounded-3xl border border-divider bg-surface px-6 py-6 shadow-subtle text-sm leading-relaxed text-foreground/75">
            <h2 className="text-2xl font-semibold text-foreground">
              {t('productDetail.customMl.timeSeriesTitle')}
            </h2>
            <p>{t('productDetail.customMl.timeSeriesIntro')}</p>
            <ul className="space-y-2">
              {timeSeriesKeys.map((index) => (
                <li key={index}>• {t(`productDetail.customMl.timeSeriesPoints.${index}`)}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 rounded-3xl border border-divider bg-surface px-6 py-6 shadow-subtle text-sm leading-relaxed text-foreground/75">
            <h2 className="text-2xl font-semibold text-foreground">
              {t('productDetail.customMl.visionTitle')}
            </h2>
            <p>{t('productDetail.customMl.visionIntro')}</p>
            <ul className="space-y-2">
              {visionKeys.map((index) => (
                <li key={index}>• {t(`productDetail.customMl.visionPoints.${index}`)}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-divider bg-background px-6 py-6 text-sm leading-relaxed text-foreground/75 shadow-subtle">
          <h2 className="text-xl font-semibold text-foreground">
            {t('productDetail.customMl.deliveryTitle')}
          </h2>
          <ul className="mt-3 space-y-2">
            {deliveryKeys.map((index) => (
              <li key={index}>• {t(`productDetail.customMl.deliveryPoints.${index}`)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
