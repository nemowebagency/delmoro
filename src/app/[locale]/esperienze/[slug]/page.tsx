import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/animated-section";
import { ExperienceRequestForm } from "@/components/forms/experience-request-form";
import { Hero } from "@/components/hero";
import { RevealText } from "@/components/reveal-text";
import { getExperienceTile, HOME_EXPERIENCE_TILES } from "@/lib/experience-tiles";
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
  const hasFullLayout = slug === "by-sea" || slug === "at-the-table";

  const BulletIcon = (
    <svg
      aria-hidden="true"
      viewBox="0 0 8 8"
      className="mt-[0.52em] h-2 w-2 shrink-0 text-[color:var(--gold-label)]"
    >
      <circle cx="4" cy="4" r="3" fill="currentColor" />
    </svg>
  );

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
                <div className="space-y-2">
                  <div className="inline-flex w-fit items-center border border-[color:var(--line)] bg-white px-3 py-1 font-label text-[12px] font-normal uppercase tracking-[0.32em] text-[color:var(--muted)]">
                    {themeTitle}
                  </div>
                  <div className="font-serif text-[32px] font-normal leading-[1.12] text-[color:var(--ink)] md:text-[36px]">
                    {tHome(tile.subtitleKey)}
                  </div>
                  {slug === "by-sea" || slug === "at-the-table" || slug === "stay" ? (
                    <p className="whitespace-pre-line text-[15px] leading-[1.75] text-[color:var(--muted)]">
                      {tExp(`experienceThemes.${slug}.afterSubtitle`)}
                    </p>
                  ) : null}
                </div>
                {slug === "by-sea" || slug === "at-the-table" ? (
                  (() => {
                    const body = tExp(`experienceThemes.${slug}.body`);
                    const lines = body
                      .split("\n")
                      .map((l) => l.trim())
                      .filter(Boolean);
                    const heading = lines[0] ?? "";
                    const items = lines
                      .slice(1)
                      .map((l) => l.replace(/^-+\s*/, "").trim())
                      .filter(Boolean);

                    return (
                      <div className="text-[15px] leading-[1.75] text-[color:var(--muted)]">
                        {heading ? (
                          <p className="font-label text-[12px] font-normal uppercase tracking-[0.32em] text-[color:var(--gold-label)]">
                            {heading}
                          </p>
                        ) : null}
                        <ul className="mt-4 space-y-2">
                          {items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              {BulletIcon}
                              <span className="min-w-0">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })()
                ) : (
                  (() => {
                    const body = tExp(`experienceThemes.${slug}.body`).trim();
                    if (!body) return null;
                    return <RevealText className="whitespace-pre-line">{body}</RevealText>;
                  })()
                )}
              </div>
              <div className="relative min-h-[280px] lg:min-h-[360px]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 border border-[color:var(--line)] md:translate-x-4 md:translate-y-4"
                />
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
          </div>
        </AnimatedSection>

        {hasFullLayout ? (
          <AnimatedSection className="w-full bg-white pb-[64px] pt-[40px] md:pb-[80px] md:pt-[52px]">
            <div className="page-shell">
              <div className="grid gap-10 md:grid-cols-2 md:gap-12">
                <div className="min-w-0 border border-[color:var(--line)] bg-[color:var(--section-warm)] p-7 md:p-9">
                  <div className="font-serif text-[32px] font-normal leading-[1.12] text-[color:var(--ink)] md:text-[36px]">
                    {tExp(`experienceThemes.${slug}.forWhoTitle`)}
                  </div>
                  <p className="mt-4 font-label text-[12px] font-normal uppercase tracking-[0.32em] text-[color:var(--gold-label)]">
                    {tExp(`experienceThemes.${slug}.forWhoLead`)}
                  </p>
                  <ul className="mt-5 space-y-2 text-[15px] leading-[1.75] text-[color:var(--muted)]">
                    {[
                      tExp(`experienceThemes.${slug}.forWhoItems.couples`),
                      tExp(`experienceThemes.${slug}.forWhoItems.returningTravelers`),
                      tExp(`experienceThemes.${slug}.forWhoItems.slowTravelers`),
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        {BulletIcon}
                        <span className="min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="min-w-0 border border-[color:var(--line)] bg-[color:var(--section-warm)] p-7 md:p-9">
                  <div className="font-serif text-[32px] font-normal leading-[1.12] text-[color:var(--ink)] md:text-[36px]">
                    {tExp(`experienceThemes.${slug}.whereTitle`)}
                  </div>
                  <p className="mt-4 font-label text-[12px] font-normal uppercase tracking-[0.32em] text-[color:var(--gold-label)]">
                    {tExp(`experienceThemes.${slug}.whereTitle`)}
                  </p>
                  <ul className="mt-5 space-y-2 text-[15px] leading-[1.75] text-[color:var(--muted)]">
                    {[
                      tExp(`experienceThemes.${slug}.whereItems.palermoCoast`),
                      tExp(`experienceThemes.${slug}.whereItems.scopelloFaraglioni`),
                      tExp(`experienceThemes.${slug}.whereItems.zingaroReserve`),
                      tExp(`experienceThemes.${slug}.whereItems.sanVito`),
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        {BulletIcon}
                        <span className="min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ) : null}

        {hasFullLayout ? (
          <div
            className="w-full border-t border-[color:var(--line)]"
            style={{
              backgroundImage: "url(/media/147750.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <AnimatedSection className="relative w-full overflow-hidden py-[84px] md:py-[104px]">
              <div className="absolute inset-0 bg-black/25" />
              <div className="page-shell relative z-10">
                <div
                  className="border border-[color:var(--line)] p-7 backdrop-blur-md md:p-9"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--section-warm) 78%, transparent)",
                  }}
                >
                  <div className="font-serif text-[32px] font-normal leading-[1.12] text-[color:var(--ink)] md:text-[36px]">
                    {tExp(`experienceThemes.${slug}.requestTitle`)}
                  </div>
                  <ExperienceRequestForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
        ) : null}

        {slug === "stay" ? (
          <div
            className="w-full border-t border-[color:var(--line)]"
            style={{
              backgroundImage: "url(/media/147750.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <AnimatedSection className="relative w-full overflow-hidden py-[84px] md:py-[104px]">
              <div className="absolute inset-0 bg-black/25" />
              <div className="page-shell relative z-10">
                <div
                  className="border border-[color:var(--line)] p-7 backdrop-blur-md md:p-9"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--section-warm) 78%, transparent)",
                  }}
                >
                  <div className="font-serif text-[32px] font-normal leading-[1.12] text-[color:var(--ink)] md:text-[36px]">
                    {tExp("experienceThemes.stay.requestTitle")}
                  </div>
                  <ExperienceRequestForm
                    notesPlaceholderKey="accommodationLookingFor"
                    notesFieldName="accommodationType"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        ) : null}
      </div>
    </>
  );
}
