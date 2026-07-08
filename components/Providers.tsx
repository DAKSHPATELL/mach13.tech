"use client";

import { ReactNode } from "react";
import { LanguageProvider, useLang } from "@/lib/i18n";
import Header from "./Header";
import Footer from "./Footer";
import MobileBookBar from "./MobileBookBar";
import { GoldDefs } from "./Ornaments";

function SkipLink() {
  const { lang } = useLang();
  return (
    <a href="#main" className="skip-link">
      {lang === "fr" ? "Aller au contenu" : "Skip to content"}
    </a>
  );
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <GoldDefs />
      <SkipLink />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <MobileBookBar />
    </LanguageProvider>
  );
}
