/** Tile esperienze in home + rotte `/esperienze/[slug]` e menu a tendina. */
export const HOME_EXPERIENCE_TILES = [
  {
    slug: "storia",
    src: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=720&h=1080&q=80",
    titleKey: "experiencesTileHistory",
    altKey: "experiencesTileHistoryAlt",
  },
  {
    slug: "natura",
    src: "/media/nature.jpg",
    titleKey: "experiencesTileNature",
    altKey: "experiencesTileNatureAlt",
  },
  {
    slug: "noleggio",
    src: "/media/noleggio.jpg",
    titleKey: "experiencesTileRental",
    altKey: "experiencesTileRentalAlt",
  },
  {
    slug: "alloggi",
    src: "/media/alloggi.jpg",
    titleKey: "experiencesTileStays",
    altKey: "experiencesTileStaysAlt",
  },
] as const;

export type ExperienceTileSlug = (typeof HOME_EXPERIENCE_TILES)[number]["slug"];

export function getExperienceTile(slug: string) {
  return HOME_EXPERIENCE_TILES.find((t) => t.slug === slug);
}
