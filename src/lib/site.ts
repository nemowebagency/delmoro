import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { absoluteUrl, pathWithLocale } from "@/lib/locale-path";

const siteUrl = "https://delmorosicily.com";

/** Demo coordinates for the contact page — replace before launch */
export const contactPlaceholders = {
  email: "studio@delmorosicily.com",
  phone: "+39 091 555 0166",
  street: "Via Vittorio Emanuele 187",
  cityLine: "90133 Palermo PA",
} as const;

export const siteConfig = {
  name: "Del Moro Sicily",
  email: "hello@delmorosicily.com",
  description:
    "An international cultural journal on Sicily and the Mediterranean — slow, poetic, independent of aggressive tourism.",
  tagline: "True luxury is not excess, it is access.",
  siteUrl,
  nav: [
    { href: "/", labelKey: "home" },
    { href: "/esperienze", labelKey: "experiences" },
    { href: "/journal", labelKey: "journal" },
    { href: "/contact", labelKey: "contact" },
    { href: "/about", labelKey: "about" },
    { href: "/prenota", labelKey: "book" },
  ],
};

export function buildMetadata({
  locale,
  title,
  description,
  path = "/",
}: {
  locale: string;
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonicalPath = pathWithLocale(locale, path);
  const url = absoluteUrl(locale, path);
  const enUrl = absoluteUrl(routing.locales[0], path);
  const itUrl = absoluteUrl(routing.locales[1], path);

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalPath,
      languages: { en: enUrl, it: itUrl },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale === "it" ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
