"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Calendar } from "./Icons";
import { Paisley, GoldRule, MandalaWatermark } from "./Ornaments";
import { cta } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function PageHero({
  eyebrow,
  title,
  intro,
  showCta = true,
  children
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  showCta?: boolean;
  children?: ReactNode;
}) {
  const { lang } = useLang();

  return (
    <section className="relative overflow-hidden bg-cream-radial">
      <MandalaWatermark className="-right-32 -top-40 h-[30rem] w-[30rem] text-plum-200/40" />
      <span aria-hidden className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-x relative py-20 sm:py-24">
        <span className="eyebrow">
          <Paisley gold className="h-4 w-4" />
          {eyebrow}
        </span>
        <h1 className="display mt-5 max-w-3xl text-5xl text-balance sm:text-6xl md:text-7xl">{title}</h1>
        <GoldRule className="mt-6" />
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
        {showCta && (
          <div className="mt-9">
            <Link href="/reservation" className="btn-primary">
              <Calendar className="h-4 w-4" />
              {cta.bookLong[lang]}
            </Link>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
