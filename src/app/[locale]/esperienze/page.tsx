import { getTranslations } from "next-intl/server";
import { AnimatedSection } from "@/components/animated-section";
import { ExperienceTilesGrid } from "@/components/experience-tiles-grid";
import { Hero } from "@/components/hero";
import { RevealMedia } from "@/components/reveal-media";
import { RevealText } from "@/components/reveal-text";
import { ButtonLink } from "@/components/ui/button-link";
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

          <ExperienceTilesGrid layout="home" />
        </AnimatedSection>

        <AnimatedSection className="border-y border-[color:var(--line)] bg-white py-[84px] md:py-[104px]">
          <div className="page-shell flex w-full flex-col">
            <div className="mt-6 grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div className="min-w-0 space-y-5 text-[15px] leading-[1.75] text-[color:var(--muted)]">
                <h2 className="font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
                  {t("otherServicesTitle")}
                </h2>
                <RevealText className="whitespace-pre-line">
                  {t("otherServicesLead")}
                </RevealText>
                <ButtonLink
                  href="/prenota"
                  variant="outlineBeige"
                  className="mt-4 w-fit px-9 py-2 md:px-10 md:py-2.5"
                >
                  {t("seeExperiences")}
                </ButtonLink>
              </div>
              <RevealMedia className="min-w-0 overflow-hidden border border-[color:var(--line)] bg-[color:var(--section-warm)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/motors/bearded-man-scooter-with-womanfriend-outdoors.jpg"
                  alt={t("otherServicesImageAlt")}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </RevealMedia>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
