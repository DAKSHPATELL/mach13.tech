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
              <figure className="card group relative overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title[lang]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950/70 via-plum-900/10 to-transparent" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-xl font-semibold">{item.title[lang]}</h3>
                  <p className="mt-1 text-sm text-white/85">{item.text[lang]}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
