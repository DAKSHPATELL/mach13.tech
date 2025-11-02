'use client';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    const s = document.createElement('script');
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    document.body.appendChild(s);
    return () => { document.body.removeChild(s); };
  }, []);

  return (
    <main className="px-6 md:px-10 lg:px-16 py-16" id="book">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B0B0C]">Book an appointment</h1>
        <p className="mt-6 text-lg text-[#0B0B0C]/80">
          Prefer email? Write to <a className="underline" href="mailto:info@mach13.tech">info@mach13.tech</a>.
        </p>
        <div className="mt-8">
          <div
            className="calendly-inline-widget h-[820px] w-full rounded-lg ring-1 ring-[#EDEDED]"
            data-url="https://calendly.com/YOUR-CALENDLY-USERNAME/15min?hide_event_type_details=1&hide_gdpr_banner=1"
            aria-label="Appointment booking"
            role="region"
          ></div>
          <noscript>
            Enable JavaScript to load the scheduling widget. Or book at calendly.com/YOUR-CALENDLY-USERNAME/15min
          </noscript>
        </div>
      </div>
    </main>
  );
}
