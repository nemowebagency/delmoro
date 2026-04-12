import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/hero";
import { ButtonLink } from "@/components/ui/button-link";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <>
      <Hero variant="compact" menuTitleKey="journal" />
      <div id="page-content" className="scroll-mt-24 md:scroll-mt-28">
        <div className="page-shell py-16 md:py-24">
          <p className="font-label text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
        {t("code")}
      </p>
      <h2 className="mt-4 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
        {t("title")}
      </h2>
      <p className="mt-4 w-full min-w-0 text-[15px] leading-[1.75] text-[color:var(--muted)]">
        {t("body")}
      </p>
          <ButtonLink href="/journal" className="mt-8">
            {t("cta")}
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
