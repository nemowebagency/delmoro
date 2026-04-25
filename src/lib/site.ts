import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { absoluteUrl, pathWithLocale } from "@/lib/locale-path";

const siteUrl = "https://delmorosicily.com";

/** Demo coordinates for the contact page; replace before launch */
export const contactPlaceholders = {
  email: "info@delmorosicily.com",
  phone: "+39 328 257 9590",
  street: "Via Vittorio Emanuele 187",
  cityLine: "90133 Palermo PA",
} as const;

export const siteConfig = {
  name: "Del Moro Sicily",
  email: "info@delmorosicily.com",
  description:
    "An international cultural journal on Sicily and the Mediterranean: slow, poetic, independent of aggressive tourism.",
  tagline: "True luxury is not excess, it is access.",
  siteUrl,
  /** Codice fiscale (persona / titolare). */
  fiscalCode: "VRZGRL98A29H700X",
  social: {
    /** Replace with the real Instagram profile URL. */
    instagram: "https://www.instagram.com/delmorosicily/",
    /** Replace with wa.me link including country code, e.g. https://wa.me/393331234567 */
    whatsapp: "https://wa.me/393282579590",
  },
  credits: {
    agencyName: "Nemo Web Agency",
    agencyUrl: "https://www.nemoagency.it/",
  },
  nav: [
    { href: "/", labelKey: "home" },
    { href: "/journal", labelKey: "journal" },
    { href: "/about", labelKey: "about" },
    { href: "/esperienze", labelKey: "experiences" },
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
