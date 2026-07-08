"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Phone } from "./Icons";
import { site, cta } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function MobileBookBar() {
  const { lang } = useLang();
  const pathname = usePathname();
  if (pathname === "/reservation") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-cream/95 backdrop-blur-md lg:hidden">
      <div
        className="container-x flex items-center gap-3 py-3"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <a
          href={`tel:${site.phoneHref}`}
          aria-label={cta.call[lang]}
          className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-plum-200 bg-white text-plum-800"
        >
          <Phone className="h-5 w-5" />
        </a>
        <Link href="/reservation" className="btn-primary flex-1">
          <Calendar className="h-4 w-4" />
          {cta.book[lang]}
        </Link>
      </div>
    </div>
  );
}
