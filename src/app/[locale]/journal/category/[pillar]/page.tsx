import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { JournalCard } from "@/components/journal-card";
import { editorialCategoryMessageKey } from "@/lib/editorial-labels";
import type { EditorialPillar } from "@/lib/types";
import { journalArticles } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/site";

const pillarParamToCategory: Record<string, EditorialPillar> = {
  "culture-history": "Culture & History",
  lifestyle: "Lifestyle",
  places: "Places",
  letters: "Letters",
};

const pillarParamToTile: Record<
  string,
  { src: string; altHomeKey: "hiddenPlaces" | "cultureLegends" | "letters" | "lifestyle" }
> = {
  places: { src: "/media/serena-torrisi-dmGWJXtRXJQ-unsplash.jpg", altHomeKey: "hiddenPlaces" },
  "culture-history": { src: "/media/sarah-penney-3pALd7mqItc-unsplash.jpg", altHomeKey: "cultureLegends" },
  letters: { src: "/media/josh-withers-FrChCKygfqA-unsplash.jpg", altHomeKey: "letters" },
  lifestyle: { src: "/media/giordano-rossoni-hP6fQ5ivf0I-unsplash.jpg", altHomeKey: "lifestyle" },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; pillar: string }>;
}) {
  const { locale, pillar } = await params;
  const category = pillarParamToCategory[pillar];
  if (!category) return {};
  const t = await getTranslations({ locale, namespace: "Journal" });
  return buildMetadata({
    locale,
    title: t(`categoryNames.${editorialCategoryMessageKey(category)}`),
    description: t("intro"),
    path: `/journal/category/${pillar}`,
  });
}

export default async function JournalCategoryPage({
  params,
}: {
  params: Promise<{ locale: "en" | "it"; pillar: string }>;
}) {
  const { locale, pillar } = await params;
  const category = pillarParamToCategory[pillar];
  if (!category) notFound();

  const t = await getTranslations({ locale, namespace: "Journal" });
  const tHome = await getTranslations({ locale, namespace: "Home" });
  const categoryLabel = t(`categoryNames.${editorialCategoryMessageKey(category)}`);
  const filtered = journalArticles.filter((a) => a.category === category);
  const tile = pillarParamToTile[pillar];

  return (
    <>
      <Hero
        variant="compact"
        menuTitleKey="journal"
        titleOverride={categoryLabel}
        backgroundImageSrc={tile?.src}
        backgroundImageAlt={
          tile ? tHome(`journalTile.${tile.altHomeKey}`) : categoryLabel
        }
      />
      <div id="page-content" className="scroll-mt-24 md:scroll-mt-28">
        <section className="border-y border-[color:var(--line)] bg-[color:var(--section-warm)]">
          <div className="page-shell py-[72px] md:py-[88px]">
            <header className="w-full min-w-0">
              <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
                {t("resultsTitle")}
              </p>
              <h2 className="mt-4 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
                {categoryLabel}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-[color:var(--muted)]">
                {t("resultsSubtitle", { category: categoryLabel })}
              </p>
            </header>

            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10">
            {filtered.map((article) => (
              <JournalCard
                key={article.slug}
                article={article}
                categoryLabel={categoryLabel}
                locale={locale}
              />
            ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

