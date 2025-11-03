"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { withLocale } from "@/lib/i18n/href";
import LanguageSwitcherWrapper from "@/components/LanguageSwitcherWrapper";
import { isLocale } from "@/lib/i18n/settings";

type NavItem = {
  href: string;
  labelKey: string;
};

const navItems: NavItem[] = [
  { href: "/", labelKey: "navigation.home" },
  { href: "/products", labelKey: "navigation.products" },
  { href: "/about", labelKey: "navigation.about" },
  { href: "/contact", labelKey: "navigation.contact" }
];

export default function Header() {
  const { t, locale } = useTranslation();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activePath = useMemo(() => {
    if (!pathname) {
      return "/";
    }
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      return "/";
    }
    if (isLocale(segments[0])) {
      segments.shift();
    }
    return `/${segments.join("/")}`;
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [activePath]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-divider/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-foreground transition-opacity hover:opacity-80" aria-label={t("brand.name")}>
          <Image src="/logo.png" alt={t("brand.name")} width={40} height={40} priority className="h-10 w-10" />
          <span className="text-xl font-bold tracking-tight">{t("brand.name")}</span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden flex-1 items-center justify-end gap-8 text-sm font-semibold text-foreground/80 md:flex"
        >
          {navItems.map(({ href, labelKey }) => {
            const isActive = activePath === href || (href !== "/" && activePath.startsWith(href));
            return (
              <Link
                key={href}
                href={withLocale(href, locale)}
                className={`transition-all duration-200 hover:text-steel ${isActive ? "text-steel font-bold" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {t(labelKey)}
              </Link>
            );
          })}
          <LanguageSwitcherWrapper />
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-divider px-3 py-2 text-sm font-semibold text-foreground hover:border-steel hover:text-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`md:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="space-y-4 border-t border-divider/70 bg-background px-4 py-4 text-base font-medium dark:border-divider/40 dark:bg-background">
          <ul className="space-y-1">
            {navItems.map(({ href, labelKey }) => {
              const isActive = activePath === href || (href !== "/" && activePath.startsWith(href));
              return (
                <li key={href}>
                  <Link
                    href={withLocale(href, locale)}
                    className={`block rounded-md px-3 py-2 transition-colors hover:bg-white/60 hover:text-steel focus-visible:bg-white focus-visible:text-steel dark:hover:bg-foreground/10 ${isActive ? "bg-white text-steel dark:bg-foreground/20 dark:text-steel" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {t(labelKey)}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LanguageSwitcherWrapper className="w-full justify-between" />
        </div>
      </nav>
    </header>
  );
}
