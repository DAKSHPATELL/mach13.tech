"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";
import { Paisley, GoldRule } from "./Ornaments";
import { instagram } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function InstagramStrip() {
  const { lang } = useLang();

  return (
    <section className="container-x py-24">
      <Reveal className="text-center">
        <span className="eyebrow justify-center">
          <Paisley gold className="h-4 w-4" />
          {instagram.eyebrow[lang]}
        </span>
        <h2 className="display mx-auto mt-5 text-4xl sm:text-5xl">{instagram.title[lang]}</h2>
        <a
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block font-caps text-sm uppercase tracking-[0.18em] text-gold-ink transition-colors hover:text-plum-800"
        >
          {instagram.handle}
        </a>
        <GoldRule className="mt-5" />
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {instagram.images.map((src, i) => (
          <Reveal key={i} delay={(i % 6) * 60}>
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-2xl gold-hair"
            >
              <Image
                src={src}
                alt={`${instagram.handle} ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-noir/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-caps text-xs uppercase tracking-[0.2em] text-gold-champagne">
                  Shree
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href={instagram.url} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          {instagram.cta[lang]}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
