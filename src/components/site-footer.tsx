import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

const experiencePaths = [
  { href: "/esperienze", labelKey: "experiencesTileHistory" as const },
  { href: "/esperienze", labelKey: "experiencesTileNature" as const },
  { href: "/esperienze", labelKey: "experiencesTileRental" as const },
  { href: "/esperienze", labelKey: "experiencesTileStays" as const },
];

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const tHome = await getTranslations("Home");
  const tNav = await getTranslations("Nav");
  const year = new Date().getFullYear();
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const sitemapUrl = `${baseUrl}/sitemap.xml`;

  return (
    <footer className="bg-[color:var(--ink)] text-[color:var(--on-dark-muted)]">
      <div className="mx-auto grid w-full gap-14 px-6 py-20 md:w-[70%] md:grid-cols-12 md:gap-12 md:px-8 md:py-24 lg:gap-16 lg:px-10 lg:py-28">
        <div className="md:col-span-5 lg:col-span-5">
          <Link href="/" className="inline-block">
            <Image
              src="/brand/Bianco2.png"
              alt={t("logoAlt")}
              width={180}
              height={72}
              className="h-[52px] w-auto object-contain md:h-[60px]"
              unoptimized
            />
          </Link>
          <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/85">
            {t("footerIntro")}
          </p>
          <div className="mt-8 flex items-center gap-6 text-white">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[color:var(--gold-label)]"
              aria-label={t("instagramLabel")}
            >
              <BiLogoInstagram className="h-7 w-7" aria-hidden />
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[color:var(--gold-label)]"
              aria-label={t("whatsappLabel")}
            >
              <BiLogoWhatsapp className="h-7 w-7" aria-hidden />
            </a>
          </div>
        </div>

        <div className="text-sm md:col-span-2 lg:col-span-2">
          <p className="font-label mb-6 text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
            {t("colExperiences")}
          </p>
          <ul className="space-y-5">
            {experiencePaths.map((item) => (
              <li key={item.labelKey}>
                <Link
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {tHome(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm md:col-span-2 lg:col-span-2">
          <p className="font-label mb-6 text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
            {t("colMenu")}
          </p>
          <ul className="space-y-5">
            {siteConfig.nav
              .filter((item) => item.href !== "/prenota")
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {tNav(item.labelKey)}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="text-sm md:col-span-3 lg:col-span-3">
          <p className="font-label mb-6 text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
            {t("colUseful")}
          </p>
          <ul className="space-y-5">
            <li>
              <Link href="/prenota" className="transition hover:text-white">
                {tNav("book")}
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="transition hover:text-white">
                {t("privacy")}
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="transition hover:text-white">
                {t("cookies")}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-white">
                {t("terms")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 py-8 text-xs text-white/50 md:w-[70%] md:justify-between md:px-8 md:py-9 lg:px-10">
          <span>
            {t("fiscalCodeLabel")} {siteConfig.fiscalCode}
          </span>
          <span className="text-center">{t("rights", { year })}</span>
          <a
            href={sitemapUrl}
            className="transition hover:text-white"
          >
            {t("sitemap")}
          </a>
          <span>
            {t("poweredBy")}{" "}
            <a
              href={siteConfig.credits.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--gold-label)] transition hover:text-white"
            >
              {siteConfig.credits.agencyName}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
