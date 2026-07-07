"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { aboutPage, engagements } from "@/lib/content";

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <>
      <PageHero
        eyebrow={aboutPage.eyebrow[lang]}
        title={aboutPage.title[lang]}
        intro={aboutPage.intro[lang]}
      />

      {/* Passion + image */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-2 shadow-soft">
              <Image
                src="/banner.png"
                alt={aboutPage.passionTitle[lang]}
                width={1254}
                height={1254}
                className="w-full rounded-[1.7rem] object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">{aboutPage.historyEyebrow[lang]}</span>
            <h2 className="display mt-4 text-4xl sm:text-5xl">{aboutPage.passionTitle[lang]}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{aboutPage.passionText[lang]}</p>
            <h3 className="mt-8 font-display text-2xl font-semibold text-plum-900">
              {aboutPage.historyTitle[lang]}
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
              <p>{aboutPage.historyText1[lang]}</p>
              <p>{aboutPage.historyText2[lang]}</p>
              <p>{aboutPage.historyText3[lang]}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Engagements */}
      <section className="bg-white/60 py-20 sm:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="eyebrow">{aboutPage.engagementsEyebrow[lang]}</span>
            <h2 className="display mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl">
              {aboutPage.engagementsTitle[lang]}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {engagements.map((e, i) => (
              <Reveal key={e.icon} delay={i * 90}>
                <div className="card h-full p-7 text-center">
                  <span className="icon-badge mx-auto">
                    <Icon name={e.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-plum-900">
                    {e.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{e.text[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
