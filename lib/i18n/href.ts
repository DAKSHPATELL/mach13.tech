export function withLocale(path: string, locale: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  // avoid duplicating if locale is already present
  if (normalized.startsWith(`/${locale}/`) || normalized === `/${locale}`) {
    return normalized;
  }
  return `/${locale}${normalized}`;
}

