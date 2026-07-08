"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "./Icons";
import { GoldRule, MandalaWatermark } from "./Ornaments";
import { navOrder, site, hours, footer } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="relative mt-28 overflow-hidden bg-aubergine-radial text-ivoire/85">
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <MandalaWatermark gold className="-right-24 -top-24 h-96 w-96 opacity-[0.07]" />

      <div className="container-x relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Link href="/" className="flex items-center gap-3" aria-label={site.fullName[lang]}>
            <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-gold/50">
              <Image src="/logo.png" alt="" fill sizes="48px" className="object-cover" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-2xl font-semibold text-ivoire">{site.name[lang]}</span>
              <span className="block font-caps text-[0.62rem] uppercase tracking-[0.28em] text-gold">
                {site.sub[lang]}
              </span>
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-ivoire/70">{site.tagline[lang]}</p>
          <GoldRule className="opacity-80" />
        </div>

        <div>
          <h3 className="font-caps text-xs uppercase tracking-[0.28em] text-gold">{footer.quickLinks[lang]}</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navOrder.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ivoire/70 transition-colors hover:text-gold">
                  {item.label[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-caps text-xs uppercase tracking-[0.28em] text-gold">{hours.title[lang]}</h3>
          <ul className="mt-5 space-y-3 text-sm text-ivoire/70">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 flex-none text-gold" />
              <span>
                <span className="block text-ivoire">{hours.weekdays[lang]}</span>
                {hours.weekdaysTime}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-4 w-4 flex-none" />
              <span>
                <span className="block text-ivoire">{hours.sunday[lang]}</span>
                {hours.closed[lang]}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-caps text-xs uppercase tracking-[0.28em] text-gold">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-ivoire/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-gold" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-none text-gold" />
              <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 flex-none text-gold" />
              <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x py-5 text-center font-caps text-xs uppercase tracking-[0.22em] text-ivoire/50">
          {footer.rights[lang]}
        </div>
      </div>
    </footer>
  );
}
