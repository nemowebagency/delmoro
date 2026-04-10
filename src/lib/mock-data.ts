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
    slug: "why-sicily-feels-different",
    title: {
      en: "Why Sicily Feels Different",
      it: "Perché la Sicilia sembra diversa",
    },
    excerpt: {
      en: "Places you visit, and places that stay — Sicily asks you to slow down, stay, and notice.",
      it: "Luoghi che visiti e luoghi che restano: la Sicilia chiede di rallentare, fermarsi e accorgersi.",
    },
    category: "Letters",
    readTime: { en: "6 min read", it: "6 min di lettura" },
    publishedAt: { en: "April 2026", it: "Aprile 2026" },
    heroImage: "/articles/segesta.jpg",
    location: { en: "Sicily", it: "Sicilia" },
    content: {
      en: [
        `There are places you visit,
and places that stay.

Sicily belongs to the second kind.

Not because of what it shows,
but because of what it does—quietly, almost without asking.`,
        `It begins slowly.

Not with monuments,
nor with plans.

But with something less visible.

A certain light in the morning,
soft against stone walls.
A street that feels suspended in time.
A silence that is never empty.

You arrive thinking you will explore.

Instead, something begins to change.`,
        `Time, first.

It loosens.

Lunch takes longer than expected.
Afternoons stretch without purpose.
Evenings arrive gently, without urgency.

No one seems to be in a hurry.
And after a while, neither are you.`,
        `Then, attention.

You begin to notice things you would normally pass by.

A balcony, slightly worn,
full of plants and life.

A table set for hours,
where nothing feels rushed.

Voices in the distance,
not loud, but present.

Nothing here is designed to impress.

And yet, everything leaves a mark.`,
        `In Sicily, beauty is not displayed.

It is lived.

This is why it feels different.

Because it does not try to be.

Because it does not need to be explained.

Because it exists in its own rhythm,
indifferent to expectations.`,
        `Most places ask something from you.

To see more.
To move faster.
To do.

Sicily asks the opposite.

To slow down.
To stay.
To notice.`,
        `And somewhere between a long lunch
and a quiet afternoon,

you begin to understand.

That what you were looking for
was never a place.

But a way of being.

And once you feel it,

it stays.`,
      ],
      it: [
        `Ci sono luoghi che visiti
e luoghi che restano.

La Sicilia appartiene al secondo tipo.

Non per ciò che mostra,
ma per ciò che fa — in silenzio, quasi senza chiedere.`,
        `Comincia piano.

Non con i monumenti,
né con i programmi.

Ma con qualcosa di meno visibile.

Una certa luce al mattino,
morbida sulle pareti di pietra.
Una strada che sembra sospesa nel tempo.
Un silenzio che non è mai vuoto.

Arrivi pensando di esplorare.

E invece qualcosa comincia a cambiare.`,
        `Il tempo, prima.

Si allenta.

Il pranzo dura più del previsto.
I pomeriggi si allungano senza meta.
Le sere arrivano piano, senza urgenza.

Nessuno sembra avere fretta.
E dopo un po’, neanche tu.`,
        `Poi, l’attenzione.

Cominci a notare cose che di solito lasceresti passare.

Un balcone, un po’ consumato,
pieno di piante e di vita.

Una tavola apparecchiata per ore,
dove nulla sembra affrettato.

Voci in lontananza,
non alte, ma presenti.

Qui nulla è pensato per impressionare.

Eppure tutto lascia il segno.`,
        `In Sicilia la bellezza non è esposta.

Si vive.

Ecco perché sembra diversa.

Perché non cerca di esserlo.

Perché non ha bisogno di essere spiegata.

Perché esiste nel suo ritmo,
indifferente alle aspettative.`,
        `La maggior parte dei luoghi chiede qualcosa.

Vedere di più.
Muoversi più in fretta.
Fare.

La Sicilia chiede il contrario.

Rallentare.
Restare.
Accorgersi.`,
        `E in un punto tra un pranzo lungo
e un pomeriggio quieto,

cominci a capire.

Che ciò che cercavi
non era mai un posto.

Ma un modo di essere.

E una volta che lo senti,

resta.`,
      ],
    },
  },
  {
    slug: "il-moro-and-the-many-faces-of-sicily",
    title: {
      en: "Il moro and the Many Faces of Sicily",
      it: "Il moro e le molte facce della Sicilia",
    },
    excerpt: {
      en: "Teste di Moro on balconies and in homes — a ceramic symbol of an island shaped by centuries of encounter and exchange.",
      it: "Teste di Moro sui balconi e in casa — un simbolo in ceramica di un’isola plasmata da secoli di incontro e scambio.",
    },
    category: "Culture & History",
    readTime: { en: "8 min read", it: "8 min di lettura" },
    publishedAt: { en: "April 2026", it: "Aprile 2026" },
    heroImage: "/articles/barbara808-moors-heads-7111837.jpg",
    location: { en: "Sicily", it: "Sicilia" },
    content: {
      en: [
        `There is a symbol that appears again and again across Sicily.

On terraces filled with light.
On old balconies overlooking quiet streets.
Inside homes, where objects are never just objects.

It is the Moor.

Teste di Moro`,
        `At first glance, it feels like a fragment of the past.

A story, frozen in ceramic.

But in Sicily, the past is never distant.

It lives quietly within the present.`,
        `The legend tells of a meeting.

A Sicilian woman and a foreign man.
An encounter between two worlds.

Different languages.
Different origins.
A shared moment.

And perhaps this is what the story has always been about.

Not an ending,
but a beginning.`,
        `Because Sicily has always been a place of encounters.

A crossroads in the center of the Mediterranean.

For centuries, people have arrived here:

Greeks,
Arabs,
Normans,
Spaniards.

Not only passing through,
but leaving something behind.`,
        `You can see it in the architecture.

Arches that speak of the East.
Stone that carries Northern forms.
Cities that do not belong to one time,
but to many.`,
        `You can taste it in the food.

Sweet and savory, together.
Spices that traveled across the sea.
Ingredients that found a new home here.

Every dish tells a story of movement,
of exchange,
of adaptation.`,
        `And over time, all of this became something else.

Not a collection of influences.

But a culture.`,
        `In Sicily, diversity is not a recent idea.

It is something deeply rooted.

Something that does not need to be explained.

There is a natural openness here.

A curiosity towards what comes from outside.

Not as something to imitate,
but as something to understand.

And, slowly, to make one’s own.`,
        `This is why Sicily feels familiar, even to those who arrive from far away.

Because, in some way,
it already contains many parts of the world.`,
        `The Moor, then, is not just a figure.

It is a reminder.

Of how this island has always lived through connection.

Through exchange.

Through the meeting of cultures that, over time,
have become inseparable.`,
        `Nothing here is completely isolated.

Everything is part of a larger story.

And this is what gives Sicily its quiet richness.

Not excess.

Not spectacle.

But depth.

A place shaped by many voices,
that learned how to speak as one — Il Moro Sicily`,
      ],
      it: [
        `C’è un simbolo che torna, ancora e ancora, in tutta la Sicilia.

Sulle terrazze piene di luce.
Sui vecchi balconi che guardano strade silenziose.
Dentro le case, dove gli oggetti non sono mai solo oggetti.

È il Moro.

Teste di Moro`,
        `A prima vista sembra un frammento del passato.

Una storia, fissata nella ceramica.

Ma in Sicilia il passato non è mai lontano.

Vive in silenzio nel presente.`,
        `La leggenda racconta un incontro.

Una donna siciliana e un uomo straniero.
Un incontro tra due mondi.

Lingue diverse.
Origini diverse.
Un momento condiviso.

E forse è sempre stato questo il senso della storia.

Non una fine,
ma un inizio.`,
        `Perché la Sicilia è sempre stata un luogo di incontri.

Un crocevia al centro del Mediterraneo.

Per secoli, qui sono arrivati persone:

Greci,
Arabi,
Normanni,
Spagnoli.

Non solo di passaggio,
ma lasciando qualcosa.`,
        `Lo vedi nell’architettura.

Archi che parlano d’Oriente.
Pietra che porta forme del Nord.
Città che non appartengono a un solo tempo,
ma a molti.`,
        `Lo senti nel cibo.

Dolce e salato, insieme.
Spezie che hanno attraversato il mare.
Ingredienti che qui hanno trovato una nuova casa.

Ogni piatto racconta movimento,
scambio,
adattamento.`,
        `Col tempo, tutto questo è diventato altro.

Non una raccolta di influenze.

Ma una cultura.`,
        `In Sicilia la diversità non è un’idea recente.

È qualcosa di profondamente radicato.

Qualcosa che non ha bisogno di essere spiegato.

C’è qui un’apertura naturale.

Una curiosità verso ciò che arriva da fuori.

Non come cosa da imitare,
ma da capire.

E, lentamente, da far propria.`,
        `Ecco perché la Sicilia sembra familiare, anche a chi arriva da lontano.

Perché, in qualche modo,
contiene già molte parti del mondo.`,
        `Il Moro, allora, non è solo una figura.

È un promemoria.

Di come quest’isola ha sempre vissuto di legami.

Di scambio.

Dell’incontro di culture che, col tempo,
sono diventate inseparabili.`,
        `Qui nulla è del tutto isolato.

Tutto fa parte di una storia più grande.

Ed è questo che dà alla Sicilia la sua ricchezza silenziosa.

Non l’eccesso.

Non lo spettacolo.

Ma la profondità.

Un luogo plasmato da molte voci,
che ha imparato a parlare come una sola — Il Moro Sicily`,
      ],
    },
  },
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
