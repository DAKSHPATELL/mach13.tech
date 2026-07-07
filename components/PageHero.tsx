"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Calendar } from "./Icons";
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
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-plum-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-32 h-64 w-64 rounded-full bg-magenta/10 blur-3xl"
      />
      <div className="container-x relative py-16 sm:py-20">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
        {showCta && (
          <div className="mt-8">
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
