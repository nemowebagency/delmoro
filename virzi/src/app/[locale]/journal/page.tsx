import { getTranslations } from "next-intl/server";
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
    title: t("journalTitle"),
    description: t("journalDescription"),
    path: "/journal",
  });
}

export default async function JournalPage() {
  const t = await getTranslations("Journal");

  const categoryLabel = (c: EditorialPillar) =>
    t(`categoryNames.${editorialCategoryMessageKey(c)}`);

  return (
    <div>
      <div className="container py-[80px] md:py-[100px]">
        <header className="max-w-4xl">
          <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
            {t("label")}
          </p>
          <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.25] text-[color:var(--ink)] md:text-[45px]">
            {t("title")}
          </h1>
          <p className="mt-6 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("intro")}
          </p>
        </header>
      </div>

      <section className="border-y border-[color:var(--line)] bg-[color:var(--section-warm)]">
        <div className="container grid gap-10 py-[72px] md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10 md:py-[88px]">
          {journalArticles.map((article) => (
            <JournalCard
              key={article.slug}
              article={article}
              categoryLabel={categoryLabel(article.category)}
            />
          ))}
        </div>
      </section>

      <section className="container border-t border-[color:var(--line)] py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
            {t("guideCtaKicker")}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-[color:var(--ink)] md:text-[36px]">
            {t("guideCtaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("guideCtaLead")}
          </p>
          <ButtonLink href="/digital-products" className="mt-8">
            {t("guideCtaButton")}
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
