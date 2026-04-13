import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { AnimatedSection } from "@/components/animated-section";
import { ExperienceTilesGrid } from "@/components/experience-tiles-grid";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  const tHero = await getTranslations({ locale, namespace: "Hero" });
  return buildMetadata({
    locale,
    title: tHero("title"),
    description: tMeta("homeDescription"),
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
        className="w-full scroll-mt-28 py-[84px] md:scroll-mt-32 md:py-[104px]"
      >
        <div className="page-shell flex w-full flex-col">
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

      <AnimatedSection
        id="home-experiences"
        className="w-full scroll-mt-28 border-y border-[color:var(--line)] py-[84px] md:scroll-mt-32 md:py-[104px]"
      >
        <div className="page-shell flex w-full flex-col">
          <div className="min-w-0">
            <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
              {t("experiencesLabel")}
            </p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <h2 className="min-w-0 flex-1 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
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
            <RevealText className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
              {t("experiencesLead")}
            </RevealText>
          </div>
        </div>

        <ExperienceTilesGrid layout="home" />
      </AnimatedSection>

      <AnimatedSection className="w-full bg-[#f1ece3] py-[84px] md:py-[104px]">
        <div className="page-shell flex w-full flex-col">
          <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
                {t("aboutLabel")}
              </p>
              <h2 className="mt-4 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
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
        <div className="page-shell flex w-full flex-col">
          <div className="min-w-0">
            <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
              {t("journalLabel")}
            </p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <h2 className="min-w-0 flex-1 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
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
            <RevealText className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
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
        <div className="page-shell text-center">
          <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
            {t("letterLabel")}
          </p>
          <h3 className="mt-4 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
            {t("letterTitle")}
          </h3>
          <RevealText className="mx-auto mt-4 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("letterBody")}
          </RevealText>
          <div className="mx-auto mt-8 w-full max-w-none">
            <NewsletterForm />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
