import type { ReactNode } from "react";
import { languages } from "@/lib/i18n/settings";

export function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
