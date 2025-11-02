"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n/useTranslation";

const productLinks = [
  { href: "/products/context-os", labelKey: "navigation.productsContextOs" },
  { href: "/products/custom-machine-learning", labelKey: "navigation.productsCustomMl" }
] as const;

const companyLinks = [
  { href: "/about", labelKey: "navigation.about" },
  { href: "/contact", labelKey: "navigation.contact" }
] as const;

const legalLinks = [
  { href: "/legal/privacy-policy", labelKey: "footer.privacy" },
  { href: "/legal/impressum", labelKey: "footer.imprint" }
] as const;

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-divider/70 bg-surface text-sm text-foreground/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-[2fr_1fr_1fr] sm:px-8 md:px-10 lg:px-16">
        <div className="space-y-3">
          <p className="text-base font-semibold text-foreground">{t("brand.name")}</p>
          <p className="max-w-sm text-sm leading-relaxed">{t("footer.description")}</p>
          <p className="text-xs uppercase tracking-wide text-foreground/50">{t("footer.tagline")}</p>
        </div>
        <nav aria-label="Products" className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground">{t("footer.products")}</h3>
          <ul className="space-y-2">
            {productLinks.map(({ href, labelKey }) => (
              <li key={href}>
                <Link href={href} className="transition hover:text-foreground">
                  {t(labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company" className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground">{t("footer.about")}</h3>
          <ul className="space-y-2">
            {companyLinks.map(({ href, labelKey }) => (
              <li key={href}>
                <Link href={href} className="transition hover:text-foreground">
                  {t(labelKey)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/50">{t("footer.legal")}</h4>
            <ul className="space-y-2">
              {legalLinks.map(({ href, labelKey }) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-foreground">
                    {t(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="border-t border-divider/60 bg-background px-6 py-6 text-center text-xs text-foreground/50 sm:px-8 md:px-10 lg:px-16">
        <p>{t("footer.copyright", { values: { year } })}</p>
      </div>
    </footer>
  );
}
