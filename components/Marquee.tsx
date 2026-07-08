"use client";

import { Fragment } from "react";
import { Paisley } from "./Ornaments";
import { marqueeWords } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function Marquee() {
  const { lang } = useLang();
  const words = marqueeWords[lang];
  const sequence = (
    <div className="flex shrink-0 items-center">
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="whitespace-nowrap px-6 font-display text-2xl italic text-ivoire sm:text-3xl">
            {w}
          </span>
          <Paisley gold className="h-5 w-5 flex-none opacity-90" />
        </Fragment>
      ))}
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-aubergine-radial py-6">
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="marquee" aria-hidden>
        {sequence}
        {sequence}
      </div>
      <span className="sr-only">{words.join(" · ")}</span>
    </section>
  );
}
