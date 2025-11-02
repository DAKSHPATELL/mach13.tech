"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "@/lib/i18n/useTranslation";
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
  const { t } = useTranslation();
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
    <header className="sticky top-0 z-40 border-b border-divider/70 bg-background/80 backdrop-blur dark:border-divider/40 dark:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-foreground" aria-label={t("brand.name")}>
          <Image src="/logo.svg" alt={t("brand.name")} width={48} height={48} priority className="h-12 w-12" />
          <span className="text-lg font-semibold tracking-tight">{t("brand.name")}</span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden flex-1 items-center justify-end gap-8 text-sm font-medium text-foreground/90 md:flex"
        >
          {navItems.map(({ href, labelKey }) => {
            const isActive = activePath === href || (href !== "/" && activePath.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors hover:text-steel focus-visible:text-steel ${isActive ? "text-steel" : ""}`}
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
                    href={href}
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
