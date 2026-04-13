import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/animated-section";
import { ExperienceImageGallery } from "@/components/experience-image-gallery";
import { Hero } from "@/components/hero";
import { RevealText } from "@/components/reveal-text";
import { ButtonLink } from "@/components/ui/button-link";
import { getExperienceTile, HOME_EXPERIENCE_TILES, type ExperienceTileSlug } from "@/lib/experience-tiles";
import { buildMetadata } from "@/lib/site";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    HOME_EXPERIENCE_TILES.map((tile) => ({ locale, slug: tile.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const tile = getExperienceTile(slug);
  if (!tile) return {};
  const tHome = await getTranslations({ locale, namespace: "Home" });
  const tExp = await getTranslations({ locale, namespace: "Experiences" });
  const title = tHome(tile.titleKey);
  const description = tExp(`experienceThemes.${slug}.body`);
  return buildMetadata({
    locale,
    title,
    description,
    path: `/esperienze/${slug}`,
  });
}

export default async function ExperienceThemePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const tile = getExperienceTile(slug);
  if (!tile) notFound();

  const tHome = await getTranslations("Home");
  const tExp = await getTranslations("Experiences");
  const themeTitle = tHome(tile.titleKey);

  return (
    <>
      <Hero
        variant="compact"
        menuTitleKey="experiences"
        usePageShellColumn
        titleOverride={themeTitle}
        backgroundImageSrc={tile.src}
        backgroundImageAlt={tHome(tile.altKey)}
      />
      <div id="page-content" className="scroll-mt-28 md:scroll-mt-32">
        <AnimatedSection className="w-full scroll-mt-28 py-[84px] md:scroll-mt-32 md:py-[104px]">
          <div className="page-shell flex w-full flex-col">
            <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div className="min-w-0 space-y-5 text-[15px] leading-[1.75] text-[color:var(--muted)]">
                <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
                  {tExp("label")}
                </p>
                <RevealText>{tExp(`experienceThemes.${slug}.body`)}</RevealText>
                <div className="flex flex-wrap gap-3 pt-2">
                  <ButtonLink href="/esperienze" variant="outlineBeige" className="w-fit px-9 py-2 md:px-10 md:py-2.5">
                    {tExp("seeAllExperiences")}
                  </ButtonLink>
                  <ButtonLink href="/prenota#booking-form" variant="beigeFill" className="w-fit px-9 py-2 md:px-10 md:py-2.5">
                    {tExp("requestInfoCta")}
                  </ButtonLink>
                </div>
              </div>
              <div className="relative min-h-[280px] overflow-hidden border border-[color:var(--line)] bg-[color:var(--section-warm)] lg:min-h-[360px]">
                <Image
                  src={tile.src}
                  alt={tHome(tile.altKey)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="border-y border-[color:var(--line)] bg-white py-[84px] md:py-[104px]">
          <div className="page-shell">
            <ExperienceImageGallery
              slug={tile.slug as ExperienceTileSlug}
              altBase={tHome(tile.altKey)}
              embedded
            />
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
