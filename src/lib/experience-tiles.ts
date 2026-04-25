/** Tile esperienze in home + rotte `/esperienze/[slug]` e menu a tendina. */
export const HOME_EXPERIENCE_TILES = [
  {
    slug: "by-sea",
    src: "/media/pexels-tugce-turan-275581022-19476160.jpg",
    titleKey: "experiencesTileHistory",
    subtitleKey: "experiencesTileHistorySubtitle",
    altKey: "experiencesTileHistoryAlt",
  },
  {
    slug: "at-the-table",
    src: "/media/claudio-pantoni-RXIvf9wR60U-unsplash.jpg",
    titleKey: "experiencesTileNature",
    subtitleKey: "experiencesTileNatureSubtitle",
    altKey: "experiencesTileNatureAlt",
  },
  {
    slug: "stay",
    src: "/media/alec-favale-PFmM7T4mMOk-unsplash.jpg",
    titleKey: "experiencesTileRental",
    subtitleKey: "experiencesTileRentalSubtitle",
    altKey: "experiencesTileRentalAlt",
  },
  {
    slug: "private-sicily",
    src: "/media/yoav-aziz-KC0UiFxxWJQ-unsplash.jpg",
    titleKey: "experiencesTileStays",
    subtitleKey: "experiencesTileStaysSubtitle",
    altKey: "experiencesTileStaysAlt",
  },
] as const;

export type ExperienceTileSlug = (typeof HOME_EXPERIENCE_TILES)[number]["slug"];

export function getExperienceTile(slug: string) {
  return HOME_EXPERIENCE_TILES.find((t) => t.slug === slug);
}
