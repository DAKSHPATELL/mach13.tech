"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import OpenStatus from "@/components/OpenStatus";
import { MapPin, Phone, Clock, Calendar, ArrowRight } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { contactPage, site, hours } from "@/lib/content";

export default function ContactPage() {
  const { lang } = useLang();
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.mapsQuery
  )}`;

  const coords = [
    { icon: MapPin, label: contactPage.addressLabel[lang], value: site.address, href: mapsHref },
    { icon: Phone, label: contactPage.phoneLabel[lang], value: site.phone, href: `tel:${site.phoneHref}` },
    {
      icon: Clock,
      label: contactPage.hoursLabel[lang],
      value: `${hours.everyDay[lang]}, ${hours.everyDayTime}`
    },
    {
      icon: Clock,
      label: contactPage.exceptionLabel[lang],
      value: hours.exceptionTime
    }
  ];

  return (
    <>
      <PageHero
        eyebrow={contactPage.eyebrow[lang]}
        title={contactPage.title[lang]}
        intro={contactPage.intro[lang]}
        showCta={false}
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Coordinates */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow">{contactPage.coordsEyebrow[lang]}</span>
              <OpenStatus />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {coords.map((c, i) => {
                const Body = (
                  <div className="card h-full p-5">
                    <span className="icon-badge">
                      <c.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-plum-700">
                      {c.label}
                    </h3>
                    <p className="mt-1 text-sm text-ink">{c.value}</p>
                  </div>
                );
                return c.href ? (
                  <a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block transition-transform hover:-translate-y-0.5"
                  >
                    {Body}
                  </a>
                ) : (
                  <div key={i}>{Body}</div>
                );
              })}
            </div>

            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex items-center gap-4 overflow-hidden rounded-3xl border border-line bg-plum-50/60 p-6 shadow-card transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-white text-gold-ink shadow-sm">
                <MapPin className="h-7 w-7" />
              </span>
              <span className="flex-1">
                <span className="block font-medium text-plum-900">{site.address}</span>
                <span className="mt-0.5 block text-sm text-gold-ink">
                  {lang === "fr" ? "Ouvrir dans Google Maps" : "Open in Google Maps"}
                </span>
              </span>
              <ArrowRight className="h-5 w-5 text-gold transition-transform group-hover:translate-x-1" />
            </a>

            <div className="mt-5 overflow-hidden rounded-3xl border border-line shadow-card gold-hair">
              <iframe
                title={site.address}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full grayscale-[0.15]"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.4142%2C48.8657%2C2.4222%2C48.8707&layer=mapnik&marker=48.86822%2C2.41823"
              />
            </div>
          </Reveal>

          {/* Actions */}
          <Reveal delay={100}>
            <span className="eyebrow">{contactPage.actionEyebrow[lang]}</span>
            <h2 className="display mt-4 text-4xl sm:text-5xl">{contactPage.actionTitle[lang]}</h2>

            <div className="mt-8 space-y-5">
              <a href={`tel:${site.phoneHref}`} className="card flex items-center gap-5 p-6 transition-transform hover:-translate-y-0.5">
                <span className="icon-badge">
                  <Phone className="h-6 w-6" />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-2xl font-semibold text-plum-900">
                    {contactPage.callCardTitle[lang]}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{contactPage.callCardText[lang]}</span>
                </span>
                <span className="text-sm font-semibold text-gold-ink">{site.phone}</span>
              </a>

              <Link href="/reservation" className="block">
                <div className="relative overflow-hidden rounded-3xl bg-plum-gradient p-6 text-white shadow-glow transition-transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-5">
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-white/20">
                      <Calendar className="h-6 w-6" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-2xl font-semibold">
                        {contactPage.bookCardTitle[lang]}
                      </span>
                      <span className="mt-1 block text-sm text-white/85">
                        {contactPage.bookCardText[lang]}
                      </span>
                    </span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
