import { getTranslations } from "next-intl/server";
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
    title: t("journalTitle"),
    description: t("journalDescription"),
    path: "/journal",
  });
}

export default async function JournalPage({
  params,
}: {
  params: Promise<{ locale: "en" | "it" }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Journal");

  const categoryLabel = (c: EditorialPillar) =>
    t(`categoryNames.${editorialCategoryMessageKey(c)}`);

  return (
    <>
      <Hero variant="compact" menuTitleKey="journal" />
      <div id="page-content" className="scroll-mt-24 md:scroll-mt-28">
        <div className="page-shell py-[80px] md:py-[100px]">
        <header className="w-full min-w-0">
          <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
            {t("label")}
          </p>
          <h2 className="mt-6 font-serif text-[45px] font-normal leading-[1.08] tracking-normal text-balance text-[color:var(--ink)]">
            {t("title")}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("intro")}
          </p>
        </header>
      </div>

      <section className="border-y border-[color:var(--line)] bg-[color:var(--section-warm)]">
        <div className="page-shell grid gap-10 py-[72px] md:grid-cols-2 md:gap-10 md:py-[88px] lg:grid-cols-3 lg:gap-10">
          {journalArticles.map((article) => (
            <JournalCard
              key={article.slug}
              article={article}
              categoryLabel={categoryLabel(article.category)}
              locale={locale}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-[color:var(--line)] py-[72px] md:py-[96px]">
        <div className="page-shell">
          <div className="mx-auto w-full max-w-none text-center">
            <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
              {t("guideCtaKicker")}
            </p>
            <h2 className="mt-4 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
              {t("guideCtaTitle")}
            </h2>
            <p className="mx-auto mt-4 w-full text-[15px] leading-[1.75] text-[color:var(--muted)]">
              {t("guideCtaLead")}
            </p>
            <ButtonLink href="/digital-products" className="mt-8">
              {t("guideCtaButton")}
            </ButtonLink>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
