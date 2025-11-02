"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products/context-os", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
    <header className="sticky top-0 z-40 border-b border-divider/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-foreground" aria-label="Mach13 home">
          <Image src="/logo.svg" alt="Mach13" width={48} height={48} priority className="h-12 w-12" />
          <span className="text-lg font-semibold tracking-tight">Mach13</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-medium text-foreground/90 md:flex">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors hover:text-steel focus-visible:text-steel ${isActive ? "text-steel" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
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
        <ul className="space-y-1 border-t border-divider/70 bg-background px-4 py-4 text-base font-medium">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block rounded-md px-3 py-2 transition-colors hover:bg-white/60 hover:text-steel focus-visible:bg-white focus-visible:text-steel ${isActive ? "bg-white text-steel" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
