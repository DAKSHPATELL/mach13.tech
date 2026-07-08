"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { Paisley } from "@/components/Ornaments";
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
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPage.items.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 90}>
              <figure className="group text-center">
                <div className="relative mx-auto w-full max-w-[19rem]">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-[8rem] rounded-b-3xl gold-hair">
                    <Image
                      src={item.image}
                      alt={item.title[lang]}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/45 via-transparent to-transparent opacity-70" />
                  </div>
                  <span className="absolute left-1/2 top-4 -translate-x-1/2 opacity-80">
                    <Paisley gold className="h-5 w-5" />
                  </span>
                </div>
                <figcaption className="mt-5">
                  <h3 className="font-display text-2xl font-medium text-plum-900">{item.title[lang]}</h3>
                  <p className="mx-auto mt-1.5 max-w-xs text-sm leading-relaxed text-muted">
                    {item.text[lang]}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
