import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/hero";
import { ButtonLink } from "@/components/ui/button-link";
import { RevealText } from "@/components/reveal-text";
import { buildMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return buildMetadata({
    locale,
    title: t("guidesTitle"),
    description: t("guidesDescription"),
    path: "/guides",
  });
}

export default async function GuidesPage() {
  const t = await getTranslations("Guides");

  return (
    <>
      <Hero variant="compact" menuTitleKey="guides" />
      <div id="page-content" className="scroll-mt-24 md:scroll-mt-28">
        <div className="page-shell py-[80px] md:py-[100px]">
          <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
        {t("label")}
      </p>
      <h2 className="mt-6 font-serif text-[45px] font-normal leading-[1.08] tracking-normal text-balance text-[color:var(--ink)]">
        {t("title")}
      </h2>
      <RevealText className="mt-6 text-[15px] leading-[1.75] text-[color:var(--muted)]">
        {t("p1")}
      </RevealText>
      <RevealText
        className="mt-4 text-[15px] leading-[1.75] text-[color:var(--muted)]"
        delay={0.06}
      >
        {t("p2")}
      </RevealText>
          <ButtonLink href="/journal" className="mt-8">
            {t("cta")}
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
