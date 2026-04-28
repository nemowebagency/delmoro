import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HOME_EXPERIENCE_TILES } from "@/lib/experience-tiles";
import { cn } from "@/lib/utils";

type ExperienceTilesGridProps = {
  /** Home: stessa fascia ampia della sezione esperienze; interne: dentro il page-shell. */
  layout?: "home" | "inner";
  /** grid: tile come in home; rows: una riga per esperienza (foto + testo). */
  variant?: "grid" | "rows";
};

export async function ExperienceTilesGrid({
  layout = "inner",
  variant = "grid",
}: ExperienceTilesGridProps) {
  const t = await getTranslations("Home");
  const tExp = await getTranslations("Experiences");

  return (
    <div
      className={cn(
        layout === "home" && "mt-14 w-full px-[60px] lg:mt-16",
        layout === "inner" && "mt-0 w-full",
      )}
    >
      {variant === "grid" ? (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {HOME_EXPERIENCE_TILES.map((tile) => (
            <figure key={tile.slug} className="min-w-0">
              <Link
                href={`/esperienze/${tile.slug}`}
                className="group/tile block outline-none transition-opacity hover:opacity-95 focus-visible:opacity-95 focus-visible:ring-2 focus-visible:ring-[color:var(--gold-label)] focus-visible:ring-offset-2"
              >
                <div className="relative aspect-3/4 overflow-hidden border border-[color:var(--line)] bg-[color:var(--section-warm)] transition-transform duration-300 ease-out motion-safe:group-hover/tile:-translate-y-4">
                  <Image
                    src={tile.src}
                    alt={t(tile.altKey)}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 120px), (max-width: 1024px) calc((100vw - 120px) / 2), calc((100vw - 120px) / 4)"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)] transition-colors group-hover/tile:text-[color:var(--gold-label)]">
                  {t(tile.titleKey)}
                </figcaption>
                <p className="mt-2 text-[15px] leading-[1.55] text-[color:var(--muted)]">
                  {t(tile.subtitleKey)}
                </p>
              </Link>
            </figure>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-6 md:gap-7">
          {HOME_EXPERIENCE_TILES.map((tile, idx) => (
            <Link
              key={tile.slug}
              href={`/esperienze/${tile.slug}`}
              className={cn(
                "group/row flex min-w-0 flex-col overflow-hidden border border-[color:var(--line)] bg-white outline-none transition-colors hover:bg-[color:var(--section-warm)] focus-visible:ring-2 focus-visible:ring-[color:var(--gold-label)] focus-visible:ring-offset-2 md:flex-row",
                idx % 2 === 1 && "md:flex-row-reverse",
              )}
            >
              <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-[color:var(--section-warm)] md:aspect-auto md:h-[210px] md:w-[340px] lg:h-[230px] lg:w-[380px]">
                <Image
                  src={tile.src}
                  alt={t(tile.altKey)}
                  fill
                  sizes="(max-width: 768px) calc(100vw - 120px), (max-width: 1024px) 340px, 380px"
                  className="object-cover transition-transform duration-300 ease-out motion-safe:group-hover/row:scale-[1.03]"
                />
              </div>
              <div
                className={cn(
                  "min-w-0 px-6 py-5 md:px-8 md:py-6",
                  idx % 2 === 1 && "md:text-right",
                )}
              >
                <div
                  className={cn(
                    "inline-flex w-fit items-center border border-[color:var(--line)] bg-white px-3 py-1 font-label text-[12px] font-normal uppercase tracking-[0.32em] text-[color:var(--muted)]",
                    idx % 2 === 1 && "md:ml-auto",
                  )}
                >
                  {t(tile.titleKey)}
                </div>
                <div className="mt-3 font-serif text-[36px] font-normal leading-[1.08] text-[color:var(--ink)] transition-colors group-hover/row:text-[color:var(--gold-label)] md:text-[44px]">
                  {t(tile.subtitleKey)}
                </div>
                {tile.slug === "by-sea" || tile.slug === "at-the-table" || tile.slug === "stay" ? (
                  <p className="mt-2 whitespace-pre-line text-[15px] leading-[1.65] text-[color:var(--muted)]">
                    {tExp(`experienceThemes.${tile.slug}.afterSubtitle`)}
                  </p>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
