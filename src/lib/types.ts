export type EditorialPillar =
  | "Culture & History"
  | "Lifestyle"
  | "Places"
  | "Letters";

export type Localized<T> = {
  en: T;
  it: T;
};

export type JournalArticle = {
  slug: string;
  title: Localized<string>;
  excerpt: Localized<string>;
  category: EditorialPillar;
  readTime: Localized<string>;
  publishedAt: Localized<string>;
  heroImage: string;
  location: Localized<string>;
  content: Localized<string[]>;
};

export type Guide = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  format: string;
  season: string;
};
