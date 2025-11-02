'use client';

import { useTranslationContext } from '@/components/TranslationsProvider';

export function useTranslation() {
  return useTranslationContext();
}
