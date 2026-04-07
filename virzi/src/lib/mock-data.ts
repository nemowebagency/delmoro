import type { EditorialPillar, JournalArticle } from "@/lib/types";

/** Order used in editorial planning and legacy category filters */
export const journalCategoryOrder: EditorialPillar[] = [
  "Culture & History",
  "Lifestyle",
  "Places",
  "Letters",
];

export const editorialPillars = [
  {
    title: "Culture & History",
    description:
      "Architecture, stratified memories, and the civilizations that shaped the island.",
  },
  {
    title: "Lifestyle",
    description:
      "Slow rituals, community, food as sustenance and story, and light as measure of the day.",
  },
  {
    title: "Places",
    description:
      "Olives and boats, inland silence and coastline: geography felt, not listed.",
  },
  {
    title: "Letters",
    description:
      "Poetic notes on belonging, solitude, return, and why Sicily stays with you.",
  },
] as const;

/** Single ordered list: Journal page shows all stories in this order (no category splits). */
export const journalArticles: JournalArticle[] = [
  {
    slug: "the-hidden-architecture-of-sicilian-towns",
    title: "The Hidden Architecture of Sicilian Towns",
    excerpt:
      "Narrow streets, carved stone, and silent courtyards: how Sicilian towns teach you to read time in the walls.",
    category: "Places",
    readTime: "9 min read",
    publishedAt: "April 2026",
    heroImage:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1800&q=80",
    location: "Val di Noto",
    content: [
      "From above, Sicilian towns look like a single idea held together by light. Up close, they are something else: asymmetry, repair, and centuries of decisions pressed into stone.",
      "The architecture does not shout. It narrows the street until two people must slow down to pass. It lifts a balcony just enough to offer shade without stealing the sky.",
      "Baroque facades in the southeast, Arab-Norman echoes in Palermo, rural limestone in the interior — none of it is a style catalogue. It is a record of who stayed, who left, and what had to be rebuilt after fire or history.",
      "To walk these towns is to accept that beauty here is often modest and always earned. A doorway, a wellhead, a staircase worn in the center: each is a lesson in patience.",
      "This is not tourism as consumption. It is learning to see a place the way its walls ask you to see it — slowly, and in fragments that only merge when you stop trying to hurry.",
    ],
  },
  {
    slug: "a-slow-morning-in-a-sicilian-market",
    title: "A Slow Morning in a Sicilian Market",
    excerpt:
      "Voices, citrus, and the rhythm of stalls: a market morning as introduction to the island.",
    category: "Lifestyle",
    readTime: "7 min read",
    publishedAt: "April 2026",
    heroImage:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1800&q=80",
    location: "Palermo",
    content: [
      "A Sicilian market does not begin when you arrive. It began hours earlier, in deliveries and banter and the first knives cutting through greens.",
      "Morning is the honest hour: before heat, before performance. The sellers know their regulars by voice. The buyers know which stall hides the best artichokes.",
      "Here food is still public life. A conversation about fish becomes a conversation about family; a complaint about prices becomes a story about last year’s harvest.",
      "To move slowly through the aisles is not inefficiency. It is respect — for the labor in each crate, for the elders who have held the same corners for decades.",
      "If you want to understand Sicily, skip the checklist. Begin with a slow morning in the market, and leave with hands full and nowhere urgent to be.",
    ],
  },
  {
    slug: "why-sicilians-never-rush-lunch",
    title: "Why Sicilians Never Rush Lunch",
    excerpt:
      "A meal as architecture of time: why lunch in Sicily is a ritual, not a break.",
    category: "Lifestyle",
    readTime: "7 min read",
    publishedAt: "March 2026",
    heroImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80",
    location: "Catania",
    content: [
      "A life where time moves more slowly. This line is often romanticized, but in Sicily it has structure.",
      "Lunch is where this structure becomes visible: multiple courses, long conversation, no urgency to conclude.",
      "In a world obsessed with optimization, Sicilian lunch protects what cannot be optimized: memory, attention, and human connection.",
      "In Sicily, one can feel incredibly rich with very little. Rich in time. Rich in beauty. Rich in human connection.",
      "To understand Sicily, begin at the table and stay longer than planned.",
    ],
  },
  {
    slug: "the-arab-legacy-in-sicilian-gardens",
    title: "The Arab Legacy in Sicilian Gardens",
    excerpt:
      "Water, geometry, citrus and shade: how the Arab legacy still shapes Sicilian beauty.",
    category: "Culture & History",
    readTime: "8 min read",
    publishedAt: "March 2026",
    heroImage:
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=1800&q=80",
    location: "Palermo",
    content: [
      "There are places in the world that are not simply visited. They are experienced slowly. Sicily is one of those places.",
      "In Palermo and beyond, the garden tradition influenced by Arab craftsmanship survives in fragments: courtyards where water cools stone, citrus draws geometric shade, and silence feels intentional.",
      "These spaces were never only decorative. They were a philosophy: beauty should regulate time, lower the voice, and bring the body back to balance.",
      "Walking through them today is like reading a text written across centuries. Sicily remains a meeting point of civilizations, and each era leaves behind a gesture of care.",
      "Not tourism. A way of understanding a place.",
    ],
  },
  {
    slug: "the-meaning-of-summer-in-sicily",
    title: "The Meaning of Summer in Sicily",
    excerpt:
      "Light, heat, stone, and sea: why the season feels like an argument for returning.",
    category: "Letters",
    readTime: "6 min read",
    publishedAt: "February 2026",
    heroImage:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1800&q=80",
    location: "South-East Coast",
    content: [
      "Summer in Sicily is not just weather. It is choreography.",
      "Early markets, long white afternoons, late passeggiata, and nights that expand without warning.",
      "Everyday life becomes cinematic, not because it is staged, but because it is intensely present.",
      "The meaning of summer is not escape from responsibility — it is permission to remember that the body belongs to the season, to salt, to heat, to the sound of the sea when the town goes quiet.",
      "People return to Sicily because something in the light asks a question only this island answers. Each visit adds a line to that answer. Each summer deepens the handwriting.",
    ],
  },
];
