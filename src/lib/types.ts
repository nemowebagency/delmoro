export type EditorialPillar =
  | "Culture & History"
  | "Lifestyle"
  | "Places"
  | "Letters";

export type JournalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: EditorialPillar;
  readTime: string;
  publishedAt: string;
  heroImage: string;
  location: string;
  content: string[];
};

export type Guide = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  format: string;
  season: string;
};
