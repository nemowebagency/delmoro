import fs from "node:fs";
import path from "node:path";
import type { ExperienceTileSlug } from "@/lib/experience-tiles";

/**
 * Immagini di galleria per `/esperienze/[slug]`.
 * Se in `video/imagese/{slug}/` ci sono file .jpg/.jpeg/.png/.webp/.gif`, vengono usati quelli (ordinati per nome).
 * Altrimenti si usano questi URL di fallback finché non carichi le foto nella cartella.
 */
const FALLBACK_GALLERY: Record<ExperienceTileSlug, string[]> = {
  storia: [
    "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=960&q=80",
  ],
  natura: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=960&q=80",
  ],
  noleggio: [
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=960&q=80",
  ],
  alloggi: [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1611892440504-42a792e54d34?auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=960&q=80",
  ],
};

export function getExperienceGalleryImageUrls(slug: ExperienceTileSlug): string[] {
  const dir = path.join(process.cwd(), "video", "imagese", slug);
  try {
    const files = fs
      .readdirSync(dir)
      .filter(
        (f) =>
          !f.startsWith(".") &&
          !f.toLowerCase().endsWith(".md") &&
          /\.(jpe?g|png|webp|gif)$/i.test(f),
      )
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    if (files.length > 0) {
      return files.map((f) => `/media/imagese/${slug}/${encodeURIComponent(f)}`);
    }
  } catch {
    /* directory assente o non leggibile */
  }
  return FALLBACK_GALLERY[slug];
}
