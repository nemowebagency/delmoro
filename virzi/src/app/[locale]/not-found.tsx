import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/button-link";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="container py-16 md:py-24">
      <p className="font-label text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
        {t("code")}
      </p>
      <h1 className="mt-4 font-serif text-4xl font-normal text-[color:var(--ink)] md:text-[45px]">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-[color:var(--muted)]">
        {t("body")}
      </p>
      <ButtonLink href="/journal" className="mt-8">
        {t("cta")}
      </ButtonLink>
    </div>
  );
}
