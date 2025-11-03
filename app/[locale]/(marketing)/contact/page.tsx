'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function ContactPage() {
  const { t } = useTranslation();
  const emailAddress = 'info@mach13.tech';
  const linkedInUrl = 'https://www.linkedin.com/in/daksh-patel-ai/';

  useEffect(() => {
    // load Picktime script for the inline widget once
    if (!document.querySelector('script[data-picktime="1"]')) {
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.picktime.com/assets/booking.js';
      s.setAttribute('data-picktime', '1');
      document.body.appendChild(s);
    }
  }, []);

  return (
    <main className="px-6 md:px-10 lg:px-16 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B0B0C]">Book an appointment</h1>
        <p className="mt-6 text-lg text-[#0B0B0C]/80">
          Prefer email? Write to <a className="underline" href={`mailto:${emailAddress}`}>{emailAddress}</a>.
        </p>

        {/* Inline Picktime embed */}
        <div id="book" className="mt-8">
          <a
            href="https://www.picktime.com/9581da74-ab62-43f5-a00c-68aacec5895b"
            className="ptbkbtn block w-full"
            target="_blank"
            rel="noreferrer"
            style={{ minHeight: 80 }}
            aria-label="Book an appointment with Mach13 on Picktime"
            title="Book an appointment with Mach13"
          >
            {/* Picktime script will transform this link into the embedded widget. */}
          </a>
        </div>

        <div className="mt-8 rounded-3xl border border-divider bg-background px-6 py-6 text-sm text-foreground/75">
          <p>
            {t('contactPage.precall')}{' '}
            <Link className="underline" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              {t('contactPage.linkedInLabel')}
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
