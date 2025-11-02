"use client";

import { Suspense } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

type LanguageSwitcherWrapperProps = {
  className?: string;
};

export default function LanguageSwitcherWrapper({ className }: LanguageSwitcherWrapperProps) {
  return (
    <Suspense fallback={<div className={`h-10 w-32 animate-pulse rounded-full bg-muted ${className ?? ""}`} />}>
      <LanguageSwitcher className={className} />
    </Suspense>
  );
}
