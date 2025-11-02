import Link from "next/link";

const footerNav = [
  {
    title: "Products",
    links: [
      { href: "/products/context-os", label: "Context OS" },
      { href: "/products/custom-ml", label: "Custom ML" }
    ]
  },
  {
    title: "Company",
    links: [
      { href: "/solutions", label: "Solutions" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/about", label: "About" }
    ]
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
      { href: "/legal/impressum", label: "Impressum" },
      { href: "/legal/privacy", label: "Privacy" }
    ]
  }
] as const;

export function Footer() {
  return (
    <footer className="border-t border-divider bg-white" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-foreground">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-steel text-sm font-semibold text-white">
                M13
              </span>
              <span className="text-lg font-semibold tracking-tight">Mach13</span>
            </div>
            <p className="max-w-xs text-sm text-foreground/70">
              AI systems tuned for Germany&apos;s industrial operators. Precision, privacy, measurable ROI.
            </p>
            <p className="text-sm text-foreground/60">info@mach13.tech · Bremen, Germany</p>
          </div>
          {footerNav.map((section) => (
            <div key={section.title} className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
                {section.title}
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link className="transition-colors hover:text-steel" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-divider pt-6 text-xs text-foreground/60">
          <span>© {new Date().getFullYear()} Mach13. All rights reserved.</span>
          <span>Made for mach13.tech</span>
        </div>
      </div>
    </footer>
  );
}
