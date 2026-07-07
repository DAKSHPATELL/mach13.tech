"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { Calendar, Menu, Close } from "./Icons";
import { navOrder, cta } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function Header() {
  const { lang } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line bg-cream/85 backdrop-blur-md"
          : "border-transparent bg-cream/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-[4.6rem] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navOrder.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-magenta" : "text-plum-800 hover:text-magenta"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label[lang]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageToggle className="hidden sm:inline-flex" />
          <Link href="/reservation" className="btn-primary hidden sm:inline-flex">
            <Calendar className="h-4 w-4" />
            {cta.book[lang]}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="btn-ghost !px-3 !py-2 lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-line bg-cream/95 backdrop-blur-md`}
      >
        <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile">
          {navOrder.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-4 py-3 text-base font-medium ${
                  active ? "bg-plum-50 text-magenta" : "text-plum-800 hover:bg-plum-50"
                }`}
              >
                {item.label[lang]}
              </Link>
            );
          })}
          <div className="mt-2 flex items-center justify-between gap-3 px-1">
            <LanguageToggle />
            <Link href="/reservation" className="btn-primary flex-1">
              <Calendar className="h-4 w-4" />
              {cta.book[lang]}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
