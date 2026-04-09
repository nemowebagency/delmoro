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
    title: {
      en: "The Hidden Architecture of Sicilian Towns",
      it: "L’architettura nascosta dei borghi siciliani",
    },
    excerpt: {
      en: "Narrow streets, carved stone, and silent courtyards: how Sicilian towns teach you to read time in the walls.",
      it: "Vicine strette, pietra scolpita e cortili silenziosi: come i paesi siciliani insegnano a leggere il tempo nei muri.",
    },
    category: "Places",
    readTime: { en: "9 min read", it: "9 min di lettura" },
    publishedAt: { en: "April 2026", it: "Aprile 2026" },
    heroImage:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1800&q=80",
    location: { en: "Val di Noto", it: "Val di Noto" },
    content: {
      en: [
        "From above, Sicilian towns look like a single idea held together by light. Up close, they are something else: asymmetry, repair, and centuries of decisions pressed into stone.",
        "The architecture does not shout. It narrows the street until two people must slow down to pass. It lifts a balcony just enough to offer shade without stealing the sky.",
        "Baroque facades in the southeast, Arab-Norman echoes in Palermo, rural limestone in the interior — none of it is a style catalogue. It is a record of who stayed, who left, and what had to be rebuilt after fire or history.",
        "To walk these towns is to accept that beauty here is often modest and always earned. A doorway, a wellhead, a staircase worn in the center: each is a lesson in patience.",
        "This is not tourism as consumption. It is learning to see a place the way its walls ask you to see it — slowly, and in fragments that only merge when you stop trying to hurry.",
      ],
      it: [
        "Visti dall’alto, i paesi siciliani sembrano un’unica idea tenuta insieme dalla luce. Da vicino sono altro: asimmetrie, riparazioni e secoli di decisioni premute nella pietra.",
        "L’architettura non urla. Restringe la strada finché due persone devono rallentare per passare. Solleva un balcone quanto basta per dare ombra senza rubare il cielo.",
        "Facciate barocche nel sud-est, echi arabo-normanni a Palermo, calcare rurale nell’entroterra: non è un catalogo di stili. È il registro di chi è rimasto, chi è partito e cosa è stato ricostruito dopo incendi o storia.",
        "Camminare qui significa accettare che la bellezza è spesso sobria e sempre conquistata. Una soglia, un pozzo, una scala consumata al centro: ogni dettaglio insegna pazienza.",
        "Non è turismo come consumo. È imparare a vedere un luogo come i suoi muri chiedono di essere visti: lentamente, per frammenti, finché smetti di avere fretta.",
      ],
    },
  },
  {
    slug: "a-slow-morning-in-a-sicilian-market",
    title: { en: "A Slow Morning in a Sicilian Market", it: "Una mattina lenta al mercato" },
    excerpt: {
      en: "Voices, citrus, and the rhythm of stalls: a market morning as introduction to the island.",
      it: "Voci, agrumi e ritmo di bancarelle: una mattina al mercato come introduzione all’isola.",
    },
    category: "Lifestyle",
    readTime: { en: "7 min read", it: "7 min di lettura" },
    publishedAt: { en: "April 2026", it: "Aprile 2026" },
    heroImage:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1800&q=80",
    location: { en: "Palermo", it: "Palermo" },
    content: {
      en: [
        "A Sicilian market does not begin when you arrive. It began hours earlier, in deliveries and banter and the first knives cutting through greens.",
        "Morning is the honest hour: before heat, before performance. The sellers know their regulars by voice. The buyers know which stall hides the best artichokes.",
        "Here food is still public life. A conversation about fish becomes a conversation about family; a complaint about prices becomes a story about last year’s harvest.",
        "To move slowly through the aisles is not inefficiency. It is respect — for the labor in each crate, for the elders who have held the same corners for decades.",
        "If you want to understand Sicily, skip the checklist. Begin with a slow morning in the market, and leave with hands full and nowhere urgent to be.",
      ],
      it: [
        "Un mercato siciliano non comincia quando arrivi. È iniziato ore prima, tra consegne, battute e i primi coltelli che tagliano le verdure.",
        "La mattina è l’ora più onesta: prima del caldo, prima della scena. I venditori riconoscono i clienti dalla voce. I clienti sanno quale banco nasconde i carciofi migliori.",
        "Qui il cibo è ancora vita pubblica. Un discorso sul pesce diventa un discorso sulla famiglia; una lamentela sui prezzi diventa una storia sull’ultimo raccolto.",
        "Muoversi lentamente tra i corridoi non è inefficienza. È rispetto: per il lavoro dentro ogni cassetta, per chi tiene lo stesso angolo da decenni.",
        "Se vuoi capire la Sicilia, lascia perdere la checklist. Inizia da una mattina lenta al mercato e vai via con le mani piene e senza niente di urgente da fare.",
      ],
    },
  },
  {
    slug: "why-sicilians-never-rush-lunch",
    title: { en: "Why Sicilians Never Rush Lunch", it: "Perché in Sicilia non si corre a pranzo" },
    excerpt: {
      en: "A meal as architecture of time: why lunch in Sicily is a ritual, not a break.",
      it: "Un pasto come architettura del tempo: perché il pranzo in Sicilia è un rito, non una pausa.",
    },
    category: "Lifestyle",
    readTime: { en: "7 min read", it: "7 min di lettura" },
    publishedAt: { en: "March 2026", it: "Marzo 2026" },
    heroImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80",
    location: { en: "Catania", it: "Catania" },
    content: {
      en: [
        "A life where time moves more slowly. This line is often romanticized, but in Sicily it has structure.",
        "Lunch is where this structure becomes visible: multiple courses, long conversation, no urgency to conclude.",
        "In a world obsessed with optimization, Sicilian lunch protects what cannot be optimized: memory, attention, and human connection.",
        "In Sicily, one can feel incredibly rich with very little. Rich in time. Rich in beauty. Rich in human connection.",
        "To understand Sicily, begin at the table and stay longer than planned.",
      ],
      it: [
        "Una vita in cui il tempo si muove più lentamente: spesso è una frase romanticizzata, ma in Sicilia ha una struttura.",
        "Il pranzo è il punto in cui questa struttura si vede: più portate, conversazioni lunghe, nessuna fretta di chiudere.",
        "In un mondo ossessionato dall’ottimizzazione, il pranzo siciliano protegge ciò che non si può ottimizzare: memoria, attenzione e legami.",
        "In Sicilia ci si può sentire incredibilmente ricchi con poco. Ricchi di tempo. Ricchi di bellezza. Ricchi di presenza.",
        "Per capire la Sicilia, comincia a tavola e resta più di quanto avevi previsto.",
      ],
    },
  },
  {
    slug: "the-arab-legacy-in-sicilian-gardens",
    title: { en: "The Arab Legacy in Sicilian Gardens", it: "L’eredità araba nei giardini siciliani" },
    excerpt: {
      en: "Water, geometry, citrus and shade: how the Arab legacy still shapes Sicilian beauty.",
      it: "Acqua, geometrie, agrumi e ombra: come l’eredità araba continua a modellare la bellezza siciliana.",
    },
    category: "Culture & History",
    readTime: { en: "8 min read", it: "8 min di lettura" },
    publishedAt: { en: "March 2026", it: "Marzo 2026" },
    heroImage:
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=1800&q=80",
    location: { en: "Palermo", it: "Palermo" },
    content: {
      en: [
        "There are places in the world that are not simply visited. They are experienced slowly. Sicily is one of those places.",
        "In Palermo and beyond, the garden tradition influenced by Arab craftsmanship survives in fragments: courtyards where water cools stone, citrus draws geometric shade, and silence feels intentional.",
        "These spaces were never only decorative. They were a philosophy: beauty should regulate time, lower the voice, and bring the body back to balance.",
        "Walking through them today is like reading a text written across centuries. Sicily remains a meeting point of civilizations, and each era leaves behind a gesture of care.",
        "Not tourism. A way of understanding a place.",
      ],
      it: [
        "Ci sono luoghi che non si “visitano” soltanto: si attraversano lentamente. La Sicilia è uno di questi.",
        "A Palermo e non solo, la tradizione dei giardini influenzata dall’artigianato arabo sopravvive a frammenti: cortili dove l’acqua raffredda la pietra, gli agrumi disegnano ombre geometriche e il silenzio sembra voluto.",
        "Questi spazi non erano solo decorazione. Erano una filosofia: la bellezza dovrebbe regolare il tempo, abbassare la voce e riportare il corpo in equilibrio.",
        "Camminarci oggi è come leggere un testo scritto attraverso i secoli. La Sicilia resta un punto d’incontro di civiltà, e ogni epoca lascia un gesto di cura.",
        "Non turismo. Un modo di capire un luogo.",
      ],
    },
  },
  {
    slug: "the-meaning-of-summer-in-sicily",
    title: { en: "The Meaning of Summer in Sicily", it: "Il significato dell’estate in Sicilia" },
    excerpt: {
      en: "Light, heat, stone, and sea: why the season feels like an argument for returning.",
      it: "Luce, caldo, pietra e mare: perché la stagione sembra una ragione per tornare.",
    },
    category: "Letters",
    readTime: { en: "6 min read", it: "6 min di lettura" },
    publishedAt: { en: "February 2026", it: "Febbraio 2026" },
    heroImage:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1800&q=80",
    location: { en: "South-East Coast", it: "Costa sud-orientale" },
    content: {
      en: [
        "Summer in Sicily is not just weather. It is choreography.",
        "Early markets, long white afternoons, late passeggiata, and nights that expand without warning.",
        "Everyday life becomes cinematic, not because it is staged, but because it is intensely present.",
        "The meaning of summer is not escape from responsibility — it is permission to remember that the body belongs to the season, to salt, to heat, to the sound of the sea when the town goes quiet.",
        "People return to Sicily because something in the light asks a question only this island answers. Each visit adds a line to that answer. Each summer deepens the handwriting.",
      ],
      it: [
        "L’estate in Sicilia non è solo meteo. È coreografia.",
        "Mercati presto, pomeriggi bianchi e lunghi, passeggiata tardi, e notti che si allargano senza avvisare.",
        "La vita quotidiana diventa cinematografica non perché sia in posa, ma perché è intensamente presente.",
        "Il significato dell’estate non è fuga dalle responsabilità: è il permesso di ricordare che il corpo appartiene alla stagione, al sale, al caldo, al suono del mare quando il paese si fa quieto.",
        "Si torna in Sicilia perché nella luce c’è una domanda a cui solo quest’isola risponde. Ogni visita aggiunge una riga a quella risposta. Ogni estate approfondisce la grafia.",
      ],
    },
  },
];
