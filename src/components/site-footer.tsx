import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-[color:var(--ink)] text-[color:var(--on-dark-muted)]">
      <div className="mx-auto grid w-full max-w-[1140px] gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-xl text-white">{t("brand")}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">{t("tagline")}</p>
        </div>
        <div className="text-sm">
          <p className="font-label mb-4 text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
            {t("explore")}
          </p>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="transition hover:text-white">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href="/esperienze" className="transition hover:text-white">
                {t("experiences")}
              </Link>
            </li>
            <li>
              <Link href="/journal" className="transition hover:text-white">
                {t("journal")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-white">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href="/prenota" className="transition hover:text-white">
                {t("book")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-white">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-label mb-4 text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
            {t("contact")}
          </p>
          <p>{siteConfig.email}</p>
          <p className="mt-1">{t("location")}</p>
          <p className="mt-8 text-xs text-white/40">{t("rights", { year })}</p>
        </div>
      </div>
    </footer>
  );
}
