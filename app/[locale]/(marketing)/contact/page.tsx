'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/useTranslation';

type FormState = {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string | null;
};

export default function ContactPage() {
  const { t } = useTranslation();
  const emailAddress = 'info@mach13.tech';
  const linkedInUrl = 'https://www.linkedin.com/in/daksh-patel-ai/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: null });

  useEffect(() => {
    if (!document.querySelector('script[data-picktime="1"]')) {
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.picktime.com/assets/booking.js';
      s.setAttribute('data-picktime', '1');
      document.body.appendChild(s);
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState({ status: 'submitting', message: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t('contactPage.form.errorGeneral'));
      }

      setFormState({ status: 'success', message: t('contactPage.form.success') });
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : t('contactPage.form.errorGeneral');
      setFormState({ status: 'error', message: errorMessage });
    }
  };

  return (
    <main className="px-4 py-14 sm:px-6 md:px-10 lg:px-16 sm:py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-16">
        <section className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {t('contactPage.form.title')}
          </h1>
          <p className="text-lg text-foreground/80">
            {t('contactPage.form.subtitle')}{' '}
            <a className="underline hover:text-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-steel" href={`mailto:${emailAddress}`}>
              {emailAddress}
            </a>
            .
          </p>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground/90">
                  {t('contactPage.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  autoComplete="name"
                  className="mt-1 block w-full rounded-md border border-divider bg-white px-4 py-2.5 text-foreground shadow-sm transition focus:border-steel focus:outline-none focus:ring-2 focus:ring-steel/80"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground/90">
                  {t('contactPage.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border border-divider bg-white px-4 py-2.5 text-foreground shadow-sm transition focus:border-steel focus:outline-none focus:ring-2 focus:ring-steel/80"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground/90">
                {t('contactPage.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-divider bg-white px-4 py-2.5 text-foreground shadow-sm transition focus:border-steel focus:outline-none focus:ring-2 focus:ring-steel/80"
              />
            </div>

            {formState.status === 'success' ? (
              <p className="text-sm font-medium text-green-700" role="status" aria-live="polite">
                {formState.message}
              </p>
            ) : null}
            {formState.status === 'error' ? (
              <p className="text-sm font-medium text-red-700" role="alert">
                {formState.message}
              </p>
            ) : null}

            <div>
              <button
                type="submit"
                disabled={formState.status === 'submitting'}
                className="inline-flex items-center justify-center rounded-full bg-steel px-6 py-3 text-sm font-semibold text-white transition hover:bg-steel/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel disabled:opacity-60"
              >
                {formState.status === 'submitting'
                  ? t('contactPage.form.submitting')
                  : t('contactPage.form.submit')}
              </button>
            </div>
          </form>
        </section>

        <section className="space-y-6">
          <h2 id="book" className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t('contactPage.title')}
          </h2>
          <p className="text-lg text-foreground/80">
            {t('contactPage.subtitle')}
          </p>

          <div>
            <a
              href="https://www.picktime.com/9581da74-ab62-43f5-a00c-68aacec5895b"
              className="ptbkbtn block w-full"
              target="_blank"
              rel="noreferrer"
              style={{ minHeight: 80 }}
              aria-label={t('contactPage.widgetLabel')}
              title={t('contactPage.widgetLabel')}
            >
              {/* Picktime script will transform this link */}
            </a>
            <p className="mt-2 text-sm text-foreground/60">{t('contactPage.placeholderNotice')}</p>
          </div>

          <div className="rounded-3xl border border-divider bg-background px-6 py-6 text-sm text-foreground/75">
            <p>
              {t('contactPage.precall')}{' '}
              <Link className="underline hover:text-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-steel" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                {t('contactPage.linkedInLabel')}
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
