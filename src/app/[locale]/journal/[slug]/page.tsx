import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { RevealMedia } from "@/components/reveal-media";
import { ArticleShareButtons } from "@/components/article-share-buttons";
import { editorialCategoryMessageKey } from "@/lib/editorial-labels";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { journalArticles } from "@/lib/mock-data";
import { absoluteUrl } from "@/lib/locale-path";
import { buildMetadata } from "@/lib/site";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    journalArticles.map((article) => ({ locale, slug: article.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = journalArticles.find((item) => item.slug === slug);
  if (!article) return {};
  const loc = locale === "it" ? "it" : "en";
  return buildMetadata({
    locale,
    title: article.title[loc],
    description: article.excerpt[loc],
    path: `/journal/${article.slug}`,
  });
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = journalArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  const loc = locale === "it" ? "it" : "en";
  const shareUrl = absoluteUrl(locale, `/journal/${article.slug}`);

  const t = await getTranslations({ locale, namespace: "Article" });
  const tj = await getTranslations({ locale, namespace: "Journal" });
  const categoryLabel = tj(
    `categoryNames.${editorialCategoryMessageKey(article.category)}`,
  );

  const related = journalArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  return (
    <article className="pb-16">
      <Hero variant="compact" menuTitleKey="journal" />
      <div id="page-content" className="scroll-mt-24 md:scroll-mt-28">
      <section className="relative h-[55svh] min-h-[380px]">
        <RevealMedia className="absolute inset-0" delay={0.02}>
          <Image
            src={article.heroImage}
            alt={article.title[loc]}
            fill
            className="object-cover"
          />
        </RevealMedia>
        <div className="absolute inset-0 bg-black/40" />
        <div className="page-shell relative flex h-full items-end pb-12 text-white">
          <div className="w-full min-w-0">
            <p className="font-label text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
              {categoryLabel}
            </p>
            <h2 className="mt-4 font-serif text-[45px] font-normal leading-[1.08] tracking-normal text-balance">
              {article.title[loc]}
            </h2>
            <p className="mt-4 text-[15px] text-white/80">
              {article.location[loc]} · {article.publishedAt[loc]} · {article.readTime[loc]}
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="min-w-0">
          {article.content[loc].map((paragraph, i) => (
            <p
              key={i}
              className="mb-6 whitespace-pre-line text-[15px] leading-[1.75] text-[color:var(--muted)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <aside className="h-fit border-t border-[color:var(--line)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-8">
          <p className="font-label text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
            {t("further")}
          </p>
          <p className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("furtherLead")}
          </p>
          <ArticleShareButtons url={shareUrl} title={article.title[loc]} />
        </aside>
      </section>

      <section className="page-shell mt-14">
        <h2 className="font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
          {t("related")}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/journal/${item.slug}`}
              className="border border-[color:var(--line)] p-6 transition hover:border-[color:var(--bronze)]"
            >
              <p className="font-label text-[12px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
                {tj(`categoryNames.${editorialCategoryMessageKey(item.category)}`)}
              </p>
              <p className="mt-3 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
                {item.title[loc]}
              </p>
              <p className="mt-2 text-[15px] leading-[1.75] text-[color:var(--muted)]">
                {item.excerpt[loc]}
              </p>
            </Link>
          ))}
        </div>
      </section>

      </div>
    </article>
  );
}
