'use client';

import { useEffect } from 'react';
import Link from 'next/link';

const calendlyUrl = 'https://calendly.com/YOUR-CALENDLY-USERNAME/15min?hide_event_type_details=1&hide_gdpr_banner=1';

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="px-6 py-16 md:px-10 lg:px-16" id="book">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">Book a 15-minute appointment</h1>
          <p className="text-lg text-foreground/80">
            Prefer email? Write to <a className="underline" href="mailto:info@mach13.tech">info@mach13.tech</a>. We respond within one business day.
          </p>
        </header>
        <div className="rounded-2xl border border-divider bg-white p-6 shadow-subtle">
          <div
            className="calendly-inline-widget h-[800px] w-full"
            data-url={calendlyUrl}
            aria-label="Calendly scheduling widget"
          />
          <p className="mt-4 text-xs text-foreground/60">
            Replace <code>YOUR-CALENDLY-USERNAME</code> in <code>app/(marketing)/contact/page.tsx</code> with your Calendly user slug.
          </p>
        </div>
        <div className="rounded-xl border border-divider bg-background p-6 text-sm text-foreground/80">
          <p>
            Want prep material ahead of the call? Let us know the documents or production lines you want to discuss and we&apos;ll review before meeting. You can also connect via LinkedIn: <Link className="underline" href="https://www.linkedin.com/in/daksh-patel-ai/">Daksh Patel</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
