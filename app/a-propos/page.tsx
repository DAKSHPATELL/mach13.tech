"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { Paisley, GoldRule, ArchFrame, WaxSeal } from "@/components/Ornaments";
import { useLang } from "@/lib/i18n";
import { aboutPage, engagements, team } from "@/lib/content";

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <>
      <PageHero
        eyebrow={aboutPage.eyebrow[lang]}
        title={aboutPage.title[lang]}
        intro={aboutPage.intro[lang]}
      />

      {/* Passion + arch image */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="group relative mx-auto w-full max-w-md">
              <ArchFrame id="about-arch" drawBorder className="aspect-[4/5]">
                <Image
                  src="/banner.png"
                  alt={aboutPage.passionTitle[lang]}
                  fill
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
              </ArchFrame>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <span className="eyebrow">
              <Paisley gold className="h-4 w-4" />
              {aboutPage.historyEyebrow[lang]}
            </span>
            <h2 className="display mt-4 text-4xl sm:text-5xl">{aboutPage.passionTitle[lang]}</h2>
            <p className="mt-5 font-display text-2xl italic leading-snug text-gold-ink">
              {aboutPage.passionText[lang]}
            </p>
            <GoldRule className="mt-6" />
            <h3 className="mt-7 font-display text-2xl font-medium text-plum-900">
              {aboutPage.historyTitle[lang]}
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
              <p className="dropcap">{aboutPage.historyText1[lang]}</p>
              <p>{aboutPage.historyText2[lang]}</p>
              <p>{aboutPage.historyText3[lang]}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Engagements */}
      <section className="bg-ivoire py-20 sm:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="eyebrow justify-center">
              <Paisley gold className="h-4 w-4" />
              {aboutPage.engagementsEyebrow[lang]}
            </span>
            <h2 className="display mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl">
              {aboutPage.engagementsTitle[lang]}
            </h2>
            <GoldRule className="mt-6" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {engagements.map((e, i) => (
              <Reveal key={e.icon} delay={i * 90}>
                <div className="group h-full rounded-3xl border border-line bg-white/80 p-8 text-center shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-glow">
                  <WaxSeal className="mx-auto">
                    <Icon name={e.icon} className="h-6 w-6" />
                  </WaxSeal>
                  <h3 className="mt-5 font-display text-2xl font-medium text-plum-900">
                    {e.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{e.text[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-20 sm:py-24">
        <Reveal className="text-center">
          <span className="eyebrow justify-center">
            <Paisley gold className="h-4 w-4" />
            {team.eyebrow[lang]}
          </span>
          <h2 className="display mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl">{team.title[lang]}</h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">{team.intro[lang]}</p>
          <GoldRule className="mt-6" />
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((m, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group flex h-full flex-col items-center rounded-3xl border border-line bg-white/80 p-7 text-center shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-glow">
                <span
                  className="flex h-20 w-20 items-center justify-center rounded-full text-plum-700"
                  style={{
                    background: "radial-gradient(circle at 35% 30%, #fffdf8, #f0e6d5 75%)",
                    boxShadow: "inset 0 0 0 1px rgba(184,152,95,0.65)"
                  }}
                >
                  <Icon name={m.icon} className="h-8 w-8" />
                </span>
                <p className="mt-4 font-caps text-xs uppercase tracking-[0.16em] text-gold-ink">
                  {m.role[lang]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
