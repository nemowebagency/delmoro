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
    <article className="group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={article.heroImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="mt-5">
        <p className="font-label text-[13px] font-normal uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
          {categoryLabel ?? article.category}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-normal leading-tight text-[color:var(--ink)]">
          <Link
            href={`/journal/${article.slug}`}
            className="transition hover:text-[color:var(--gold-label)]"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-[15px] leading-[1.75] text-[color:var(--muted)]">
          {excerpt}
        </p>
        <p className="mt-3 text-xs text-[color:var(--muted-warm)]">
          {publishedAt} · {readTime}
        </p>
      </div>
    </article>
  );
}
