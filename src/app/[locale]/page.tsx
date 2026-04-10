import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { AnimatedSection } from "@/components/animated-section";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Hero } from "@/components/hero";
import { JournalCard } from "@/components/journal-card";
import { RevealMedia } from "@/components/reveal-media";
import { RevealText } from "@/components/reveal-text";
import { ButtonLink } from "@/components/ui/button-link";
import { editorialCategoryMessageKey } from "@/lib/editorial-labels";
import type { EditorialPillar } from "@/lib/types";
import { journalArticles } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/site";

const EXPERIENCE_VISUAL_TILES = [
  {
    src: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=720&h=1080&q=80",
    titleKey: "experiencesTileHistory",
    altKey: "experiencesTileHistoryAlt",
  },
  {
    src: "/media/nature.jpg",
    titleKey: "experiencesTileNature",
    altKey: "experiencesTileNatureAlt",
  },
  {
    src: "/media/noleggio.jpg",
    titleKey: "experiencesTileRental",
    altKey: "experiencesTileRentalAlt",
  },
  {
    src: "/media/alloggi.jpg",
    titleKey: "experiencesTileStays",
    altKey: "experiencesTileStaysAlt",
  },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return buildMetadata({
    locale,
    title: t("homeTitle"),
    description: t("homeDescription"),
    path: "/",
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "en" | "it" }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Home");
  const tj = await getTranslations("Journal");
  const categoryLabel = (c: EditorialPillar) =>
    tj(`categoryNames.${editorialCategoryMessageKey(c)}`);

  return (
    <>
      <Hero />

      <AnimatedSection
        id="discover-sicily"
        className="w-full scroll-mt-28 px-6 py-[84px] md:scroll-mt-32 md:py-[104px]"
      >
        <div className="mx-auto flex w-full flex-col md:w-[70%] md:px-8 lg:px-10">
          <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="min-w-0 space-y-5 text-[15px] leading-[1.75] text-[color:var(--muted)]">
              <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
                {t("discoverOverline")}
              </p>
              <h2 className="w-full font-serif text-[45px] font-normal leading-[1.08] tracking-normal text-balance text-[color:var(--ink)]">
                {t("manifestoLabel")}
              </h2>
              <RevealText>{t("manifesto1")}</RevealText>
              <RevealText delay={0.06}>{t("manifesto2")}</RevealText>
              <blockquote className="relative mt-1 border-l-2 border-[#b99e7e] pl-5 md:mt-2 md:pl-7">
                <p className="font-serif text-[18px] font-normal italic leading-[1.55] text-[color:var(--ink)] md:text-[22px] md:leading-[1.5]">
                  <span
                    className="mr-0.5 font-serif text-[2.25rem] font-normal not-italic leading-none text-[#b99e7e] md:text-[2.75rem]"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  {t("manifestoQuote")}
                  <span
                    className="ml-0.5 font-serif text-[2.25rem] font-normal not-italic leading-none text-[#b99e7e] md:text-[2.75rem]"
                    aria-hidden
                  >
                    &rdquo;
                  </span>
                </p>
              </blockquote>
            </div>
            <RevealMedia
              className="min-w-0 overflow-hidden border border-[color:var(--line)] bg-[color:var(--section-warm)]"
              delay={0.05}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/img/wall-opening-with-view-cityscape-by-sea.jpg"
                alt={t("discoverImageAlt")}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </RevealMedia>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="w-full border-y border-[color:var(--line)] py-[84px] md:py-[104px]">
        <div className="mx-auto flex w-full flex-col px-6 md:w-[70%] md:px-8 lg:px-10">
          <div className="min-w-0">
            <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
              {t("experiencesLabel")}
            </p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <h2 className="min-w-0 flex-1 max-w-3xl font-serif text-4xl font-normal leading-tight text-[color:var(--ink)] md:text-[45px]">
                {t("experiencesTitle")}
              </h2>
              <ButtonLink
                href="/esperienze"
                variant="navBook"
                className="w-fit shrink-0 sm:mt-1"
              >
                {t("experiencesCta")}
              </ButtonLink>
            </div>
            <RevealText className="mt-3 max-w-xl text-[15px] leading-[1.75] text-[color:var(--muted)]">
              {t("experiencesLead")}
            </RevealText>
          </div>
        </div>

        <div className="mt-14 w-full px-[60px] lg:mt-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {EXPERIENCE_VISUAL_TILES.map((tile) => (
              <figure key={tile.titleKey} className="min-w-0">
                <div className="relative aspect-3/4 overflow-hidden border border-[color:var(--line)] bg-[color:var(--section-warm)] transition-transform duration-300 ease-out motion-safe:hover:-translate-y-4">
                  <Image
                    src={tile.src}
                    alt={t(tile.altKey)}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 120px), (max-width: 1024px) calc((100vw - 120px) / 2), calc((100vw - 120px) / 4)"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-serif text-[34px] font-normal leading-snug text-[color:var(--ink)] md:text-[36px] md:leading-[1.15]">
                  {t(tile.titleKey)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="w-full bg-[#f1ece3] px-6 py-[84px] md:py-[104px]">
        <div className="mx-auto flex w-full flex-col md:w-[70%] md:px-8 lg:px-10">
          <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
                {t("aboutLabel")}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-[color:var(--ink)] md:text-[45px]">
                {t("aboutTitle")}
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <RevealText className="whitespace-pre-line text-[15px] leading-[1.75] text-[color:var(--muted)]">
                {t("aboutBody")}
              </RevealText>
              <ButtonLink
                href="/about"
                variant="navBook"
                className="mt-8 w-fit cursor-pointer"
              >
                {t("discoverMore")}
              </ButtonLink>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-y border-[color:var(--line)] bg-white py-[84px] md:py-[104px]">
        <div className="mx-auto flex w-full flex-col px-6 md:w-[70%] md:px-8 lg:px-10">
          <div className="min-w-0">
            <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
              {t("journalLabel")}
            </p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <h2 className="min-w-0 flex-1 max-w-3xl font-serif text-4xl font-normal leading-tight text-[color:var(--ink)] md:text-[45px]">
                {t("journalTitle")}
              </h2>
              <ButtonLink
                href="/journal"
                variant="navBook"
                className="w-fit shrink-0 sm:mt-1"
              >
                {t("journalCta")}
              </ButtonLink>
            </div>
            <RevealText className="mt-3 max-w-xl text-[15px] leading-[1.75] text-[color:var(--muted)]">
              {t("journalLead")}
            </RevealText>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {journalArticles.slice(0, 3).map((article) => (
              <JournalCard
                key={article.slug}
                article={article}
                categoryLabel={categoryLabel(article.category)}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-t border-[color:var(--line)] bg-[color:var(--section-warm)] py-[84px] md:py-[104px]">
        <div className="container max-w-3xl text-center">
          <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
            {t("letterLabel")}
          </p>
          <h3 className="mt-4 font-serif text-4xl font-normal leading-tight text-[color:var(--muted)] md:text-[45px]">
            {t("letterTitle")}
          </h3>
          <RevealText className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.75] text-[color:var(--muted-warm)]">
            {t("letterBody")}
          </RevealText>
          <div className="mx-auto mt-8 max-w-xl">
            <NewsletterForm />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
