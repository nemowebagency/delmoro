import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { pathWithLocale } from "@/lib/locale-path";
import { journalArticles } from "@/lib/mock-data";
import { siteConfig } from "@/lib/site";

const staticPaths = [
  "/",
  "/about",
  "/journal",
  "/guides",
  "/digital-products",
  "/concierge",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");

  const localizedEntries = routing.locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${base}${pathWithLocale(locale, path)}`,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
  );

  const articles = routing.locales.flatMap((locale) =>
    journalArticles.map((article) => ({
      url: `${base}${pathWithLocale(locale, `/journal/${article.slug}`)}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  );

  return [...localizedEntries, ...articles];
}
