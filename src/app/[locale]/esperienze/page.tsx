import { getTranslations } from "next-intl/server";
import { AnimatedSection } from "@/components/animated-section";
import { ExperienceTilesGrid } from "@/components/experience-tiles-grid";
import { Hero } from "@/components/hero";
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
    title: t("experiencesTitle"),
    description: t("experiencesDescription"),
    path: "/esperienze",
  });
}

export default async function ExperiencesPage() {
  const t = await getTranslations("Experiences");

  return (
    <>
      <Hero variant="compact" menuTitleKey="experiences" usePageShellColumn />
      <div id="page-content" className="scroll-mt-28 md:scroll-mt-32">
        <AnimatedSection className="w-full scroll-mt-28 border-y border-[color:var(--line)] py-[84px] md:scroll-mt-32 md:py-[104px]">
          <div className="page-shell flex w-full flex-col">
            <div className="min-w-0">
              <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
                {t("label")}
              </p>
              <h2 className="mt-4 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
                {t("title")}
              </h2>
              <RevealText className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
                {t("intro")}
              </RevealText>
            </div>
          </div>

          <div className="page-shell mt-14 w-full lg:mt-16">
            <ExperienceTilesGrid layout="inner" variant="rows" />
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
