import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Spotlight } from "@/components/spotlight";
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
    <Spotlight
      className={[
        "group relative isolate overflow-hidden rounded-xl border border-[color:var(--line)] bg-[color:var(--paper)]",
        "transition-[transform,box-shadow] duration-300 will-change-transform",
        "shadow-[0_0_0_rgba(0,0,0,0)]",
      ].join(" ")}
      style={{
        transform: "scale(var(--hover-scale, 1))",
        boxShadow: "var(--card-shadow, 0 0 0 rgba(0,0,0,0))",
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: "var(--spotlight-opacity, 0)",
          background:
            "radial-gradient(650px circle at var(--spotlight-x, 20%) var(--spotlight-y, 0%), rgba(205,160,90,0.55), transparent 62%)",
          filter: "blur(0px)",
        }}
      />
      <article className="relative z-10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={article.heroImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="px-5 pb-5 pt-4">
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
    </Spotlight>
  );
}
