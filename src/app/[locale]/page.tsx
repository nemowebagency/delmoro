import { getTranslations } from "next-intl/server";
import { AnimatedSection } from "@/components/animated-section";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Hero } from "@/components/hero";
import { JournalCard } from "@/components/journal-card";
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
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return buildMetadata({
    locale,
    title: t("homeTitle"),
    description: t("homeDescription"),
    path: "/",
  });
}

export default async function Home() {
  const t = await getTranslations("Home");
  const tj = await getTranslations("Journal");
  const latest = journalArticles;

  const categoryLabel = (c: EditorialPillar) =>
    tj(`categoryNames.${editorialCategoryMessageKey(c)}`);

  return (
    <>
      <Hero />

      <AnimatedSection className="container py-[84px] md:py-[104px]">
        <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
          {t("manifestoLabel")}
        </p>
        <div className="mt-6 max-w-3xl space-y-5 text-[15px] leading-[1.75] text-[color:var(--muted)]">
          <p>{t("manifesto1")}</p>
          <p>{t("manifesto2")}</p>
          <p className="font-serif text-2xl font-normal leading-snug text-[color:var(--ink)] md:text-[32px]">
            {t("manifestoQuote")}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-y border-[color:var(--line)] bg-[color:var(--section-warm)] py-[84px] md:py-[104px]">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
                {t("latestLabel")}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-[color:var(--ink)] md:text-[45px]">
                {t("latestTitle")}
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-[1.75] text-[color:var(--muted)]">
                {t("latestLead")}
              </p>
            </div>
            <ButtonLink href="/journal" variant="ghost">
              {t("journalCta")}
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {latest.slice(0, 3).map((article) => (
              <JournalCard
                key={article.slug}
                article={article}
                categoryLabel={categoryLabel(article.category)}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-[84px] md:py-[104px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
              {t("aboutLabel")}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-[color:var(--ink)] md:text-[45px]">
              {t("aboutTitle")}
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-[15px] leading-[1.75] text-[color:var(--muted)]">
              {t("aboutBody")}
            </p>
            <ButtonLink href="/about" className="mt-8 w-fit" variant="ghost">
              {t("discoverMore")}
            </ButtonLink>
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
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.75] text-[color:var(--muted-warm)]">
            {t("letterBody")}
          </p>
          <div className="mx-auto mt-8 flex max-w-xl justify-center">
            <NewsletterForm />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
