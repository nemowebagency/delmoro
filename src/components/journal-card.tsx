import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { JournalArticle } from "@/lib/types";

export function JournalCard({
  article,
  categoryLabel,
  locale,
}: {
  article: JournalArticle;
  categoryLabel?: string;
  locale: "en" | "it";
}) {
  const title = article.title[locale];
  const excerpt = article.excerpt[locale];
  const publishedAt = article.publishedAt[locale];
  const readTime = article.readTime[locale];
  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group relative isolate block overflow-hidden border border-[color:var(--line)] bg-[color:var(--paper)] transition-transform duration-300 ease-out motion-safe:hover:-translate-y-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold-label)] focus-visible:ring-offset-2"
    >
      <article className="relative z-10">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={article.heroImage}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="px-5 pb-5 pt-4">
          <p className="font-label text-[13px] font-normal uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
            {categoryLabel ?? article.category}
          </p>
          <h3 className="mt-2 text-balance font-serif text-[34px] font-normal leading-[1.08] text-[color:var(--ink)] transition-colors group-hover:text-[color:var(--gold-label)] md:text-[36px]">
            {title}
          </h3>
          <p className="mt-2 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {excerpt}
          </p>
          <p className="mt-3 text-xs text-[color:var(--muted-warm)]">
            {publishedAt} · {readTime}
          </p>
        </div>
      </article>
    </Link>
  );
}
