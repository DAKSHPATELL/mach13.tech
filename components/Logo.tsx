import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function Logo({ onClick }: { onClick?: () => void }) {
  const { lang } = useLang();
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-3"
      aria-label={site.fullName[lang]}
    >
      <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-plum-100">
        <Image src="/logo.png" alt="" fill sizes="44px" className="object-cover" priority />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-xl font-semibold text-plum-800">
          {site.name[lang]}
        </span>
        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted">
          {site.sub[lang]}
        </span>
      </span>
    </Link>
  );
}
