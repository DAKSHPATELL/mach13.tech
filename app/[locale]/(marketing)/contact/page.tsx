'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/useTranslation';

const defaultCalendlyUrl = 'https://calendly.com/YOUR-CALENDLY-USERNAME/15min?hide_event_type_details=1&hide_gdpr_banner=1';

export default function ContactPage() {
  const { t } = useTranslation();
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? defaultCalendlyUrl;
  const emailAddress = 'info@mach13.tech';
  const linkedInUrl = 'https://www.linkedin.com/in/daksh-patel-ai/';
  const calendlyPlaceholder = calendlyUrl.includes('YOUR-CALENDLY-USERNAME');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="px-6 py-16 sm:px-8 md:px-10 lg:px-16" id="book">
      <div className="mx-auto max-w-5xl space-y-12">
        <header className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {t('contactPage.title')}
          </h1>
          <p className="text-base text-foreground/75 sm:text-lg">{t('contactPage.subtitle')}</p>
          <p className="text-base text-foreground/70">
            {t('contactPage.emailLead')}{' '}
            <a className="underline" href={`mailto:${emailAddress}`}>
              {emailAddress}
            </a>{' '}
            {t('contactPage.emailTrail')}
          </p>
        </header>

        <div className="rounded-3xl border border-divider bg-surface px-6 py-8 shadow-subtle">
          <div
            className="calendly-inline-widget h-[760px] w-full"
            data-url={calendlyUrl}
            aria-label={t('contactPage.widgetLabel')}
          />
          {calendlyPlaceholder ? (
            <p className="mt-4 text-xs text-signal">{t('contactPage.placeholderNotice')}</p>
          ) : null}
        </div>

        <div className="rounded-3xl border border-divider bg-background px-6 py-6 text-sm text-foreground/75">
          <p>
            {t('contactPage.precall')}{' '}
            <Link className="underline" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              {t('contactPage.linkedInLabel')}
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
