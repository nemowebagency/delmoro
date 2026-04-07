import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

/** Pathname without locale prefix (e.g. `/`, `/about`). */
export function pathWithLocale(locale: string, pathname: string): string {
  if (locale === routing.defaultLocale) {
    return pathname;
  }
  if (pathname === "/") {
    return "/it";
  }
  return `/it${pathname}`;
}

export function absoluteUrl(locale: string, pathname: string): string {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const path = pathWithLocale(locale, pathname);
  return `${base}${path}`;
}
