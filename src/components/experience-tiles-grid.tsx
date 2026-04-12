import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HOME_EXPERIENCE_TILES } from "@/lib/experience-tiles";
import { cn } from "@/lib/utils";

type ExperienceTilesGridProps = {
  /** Home: stessa fascia ampia della sezione esperienze; interne: dentro il page-shell. */
  layout?: "home" | "inner";
};

export async function ExperienceTilesGrid({ layout = "inner" }: ExperienceTilesGridProps) {
  const t = await getTranslations("Home");

  return (
    <div
      className={cn(
        layout === "home" && "mt-14 w-full px-[60px] lg:mt-16",
        layout === "inner" && "mt-0 w-full",
      )}
    >
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
            </Link>
          </figure>
        ))}
      </div>
    </div>
  );
}
