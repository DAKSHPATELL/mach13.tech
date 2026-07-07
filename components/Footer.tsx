"use client";

import Link from "next/link";
import Logo from "./Logo";
import { MapPin, Phone, Mail, Clock } from "./Icons";
import { navOrder, site, hours, footer } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="mt-24 border-t border-line bg-white/70">
      <div className="container-x grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted">{site.tagline[lang]}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-plum-700">
            {footer.quickLinks[lang]}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navOrder.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet">
                  {item.label[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-plum-700">
            {hours.title[lang]}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 flex-none text-plum-500" />
              <span>
                <span className="block text-ink">{hours.weekdays[lang]}</span>
                {hours.weekdaysTime}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-4 w-4 flex-none" />
              <span>
                <span className="block text-ink">{hours.sunday[lang]}</span>
                {hours.closed[lang]}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-plum-700">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-plum-500" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-none text-plum-500" />
              <a href={`tel:${site.phoneHref}`} className="link-quiet">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 flex-none text-plum-500" />
              <a href={`mailto:${site.email}`} className="link-quiet break-all">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x py-5 text-center text-xs text-muted">{footer.rights[lang]}</div>
      </div>
    </footer>
  );
}
