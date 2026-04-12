import { getTranslations } from "next-intl/server";
import { ExperienceGalleryLightbox } from "@/components/experience-gallery-lightbox";
import { getExperienceGalleryImageUrls } from "@/lib/experience-gallery";
import type { ExperienceTileSlug } from "@/lib/experience-tiles";

export async function ExperienceImageGallery({
  slug,
  altBase,
  embedded,
}: {
  slug: ExperienceTileSlug;
  altBase: string;
  /** Se true, niente bordo superiore extra (sezione gestita dal `AnimatedSection` esterno). */
  embedded?: boolean;
}) {
  const t = await getTranslations("Experiences");
  const urls = getExperienceGalleryImageUrls(slug);
  const items = urls.map((src, i) => ({
    src,
    alt: `${altBase}, ${t("galleryImageNumber", { n: i + 1 })}`,
  }));
  const headingId = `gallery-${slug}`;

  return (
    <section
      className={embedded ? "w-full" : "mt-14 border-t border-[color:var(--line)] pt-10"}
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="font-serif text-[32px] font-normal leading-[1.1] text-[color:var(--ink)] md:text-[36px]">
        {t("galleryHeading")}
      </h2>
      <p className="mt-2 text-[14px] leading-[1.65] text-[color:var(--muted)]">{t("galleryLead")}</p>
      <ExperienceGalleryLightbox items={items} labelledBy={headingId} />
    </section>
  );
}
