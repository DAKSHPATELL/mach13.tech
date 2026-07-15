"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { useLang } from "@/lib/i18n";
import { galleryPage } from "@/lib/content";

export default function GalleryPage() {
  const { lang } = useLang();

  return (
    <>
      <PageHero
        eyebrow={galleryPage.eyebrow[lang]}
        title={galleryPage.title[lang]}
        intro={galleryPage.intro[lang]}
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPage.items.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 90}>
              <figure className="group relative overflow-hidden rounded-[1.85rem] shadow-[0_30px_60px_-32px_rgba(30,9,21,0.55)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title[lang]}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/75 via-noir/10 to-transparent" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-medium text-ivoire">{item.title[lang]}</h3>
                  <p className="mt-1 max-w-xs text-sm leading-relaxed text-ivoire/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {item.text[lang]}
                  </p>
                </figcaption>
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[1.85rem] ring-1 ring-inset ring-gold/15" />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
