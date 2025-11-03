"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";

type SkipLinkProps = {
  targetId?: string;
};

export default function SkipLink({ targetId = "main-content" }: SkipLinkProps) {
  const { t } = useTranslation();

  return (
    <a href={`#${targetId}`} className="skip-link">
      {t("layout.skipToContent")}
    </a>
  );
}
