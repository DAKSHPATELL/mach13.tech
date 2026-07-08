"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { Paisley, GoldRule } from "./Ornaments";
import { Plus, Minus } from "./Icons";
import { faq } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function Faq() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="container-x py-24">
      <Reveal className="text-center">
        <span className="eyebrow justify-center">
          <Paisley gold className="h-4 w-4" />
          {faq.eyebrow[lang]}
        </span>
        <h2 className="display mx-auto mt-5 max-w-2xl text-4xl sm:text-5xl">{faq.title[lang]}</h2>
        <GoldRule className="mt-6" />
      </Reveal>

      <div className="mx-auto mt-12 max-w-3xl">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={i * 50}>
              <div className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-xl font-medium text-plum-900">{item.q[lang]}</span>
                  <span
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border border-gold/40 text-gold-ink transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-plum-50" : ""
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-12 text-muted">{item.a[lang]}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
