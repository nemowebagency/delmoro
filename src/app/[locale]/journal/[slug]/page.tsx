import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { ButtonLink } from "@/components/ui/button-link";
import { editorialCategoryMessageKey } from "@/lib/editorial-labels";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { journalArticles } from "@/lib/mock-data";
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
      <section className="relative h-[55svh] min-h-[380px]">
        <Image
          src={article.heroImage}
          alt={article.title[loc]}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative flex h-full items-end pb-12 text-white">
          <div className="max-w-3xl">
            <p className="font-label text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
              {categoryLabel}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.25] md:text-[45px]">
              {article.title[loc]}
            </h1>
            <p className="mt-4 text-[15px] text-white/80">
              {article.location[loc]} · {article.publishedAt[loc]} · {article.readTime[loc]}
            </p>
          </div>
        </div>
      </section>

      <section className="container mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="max-w-3xl">
          {article.content[loc].map((paragraph) => (
            <p
              key={paragraph}
              className="mb-6 text-[15px] leading-[1.75] text-[color:var(--muted)] md:text-[17px]"
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
          <ButtonLink href="/concierge" className="mt-6">
            {t("privateAccess")}
          </ButtonLink>
        </aside>
      </section>

      <section className="container mt-14">
        <h2 className="font-serif text-3xl font-normal text-[color:var(--ink)] md:text-[36px]">
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
              <p className="mt-3 font-serif text-2xl font-normal text-[color:var(--ink)]">
                {item.title[loc]}
              </p>
              <p className="mt-2 text-[15px] leading-[1.75] text-[color:var(--muted)]">
                {item.excerpt[loc]}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mt-14 max-w-4xl border-t border-[color:var(--line)] bg-[color:var(--section-warm)] px-8 py-12 md:px-12">
        <h3 className="font-serif text-3xl font-normal text-[color:var(--muted)] md:text-[36px]">
          {t("subscribeTitle")}
        </h3>
        <p className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted-warm)]">
          {t("subscribeLead")}
        </p>
        <NewsletterForm />
      </section>
    </article>
  );
}
