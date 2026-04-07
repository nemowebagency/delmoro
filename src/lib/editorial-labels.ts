import type { EditorialPillar } from "@/lib/types";

const categoryToKey: Record<EditorialPillar, string> = {
  "Culture & History": "cultureHistory",
  Lifestyle: "lifestyle",
  Places: "places",
  Letters: "letters",
};

export function editorialCategoryMessageKey(category: EditorialPillar): string {
  return categoryToKey[category];
}
