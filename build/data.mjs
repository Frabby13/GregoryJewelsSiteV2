// Shared factual content for all three concepts.
// Everything here is taken from the existing homepages (copy, captions, alt texts) or is a
// restrained description of what the photographs show. Nothing about history, origin of
// materials or dates is invented. Journal texts are provisional samples (see README).

export const SITE = {
  email: 'info@gregoryjewels.com',            // placeholder carried over from the existing project
  instagram: 'https://www.instagram.com/gregoryjewels/',
};

export const IMG = {
  collana:   { file: 'gallery-collana-pietra-colore.jpg', w: 900,  h: 1350, alt: 'Tre collane in oro con una pietra blu sfaccettata e un ciondolo a mezzaluna' },
  anello:    { file: 'gallery-anello-solitario.jpg',      w: 900,  h: 600,  alt: 'Anello solitario in oro bianco e rosa, con un diamante al centro e un contorno di brillanti, su un piano nero' },
  bracciale: { file: 'gallery-bracciale-oro.jpg',         w: 900,  h: 600,  alt: 'Bracciale rigido in oro con un motivo a goccia e brillanti' },
  pendenti:  { file: 'gallery-orecchini-pendenti.jpg',    w: 900,  h: 1350, alt: 'Orecchini pendenti con zaffiro blu e cristalli, su una foglia verde' },
  intreccio: { file: 'filosofia-orecchini-oro.jpg',       w: 1200, h: 1800, alt: 'Orecchini a cerchio in oro intrecciato su una pietra bianca, nella luce del sole' },
  rubini:    { file: 'bespoke-bozzetto-rubini.jpg',       w: 900,  h: 1349, alt: 'Anello con rubini accanto ai bozzetti a colori, una lente e delle pinze' },
  collier:   { file: 'bespoke-bozzetto-collier.jpg',      w: 1200, h: 1798, alt: 'Bozzetto di un collier accanto al gioiello finito, in oro con smeraldi' },
  fusione:   { file: 'lab-fusione-fiamma.jpg',            w: 900,  h: 675,  alt: 'Una fiamma azzurra scalda un anello d\'oro su un blocco di lavoro' },
  incastona: { file: 'lab-incastonatura.jpg',             w: 900,  h: 582,  alt: 'Incastonatura di una pietra al banco da orafo' },
  saldatura: { file: 'lab-saldatura-flusso.jpg',          w: 900,  h: 675,  alt: 'Un orafo salda un anello alla fiamma' },
  banco:     { file: 'lab-banco-strumenti.jpg',           w: 900,  h: 1125, alt: 'Sul banco: filo, pinze e piccoli componenti in oro' },
  mani:      { file: 'storia-mani-artigiane.jpg',         w: 1200, h: 800,  alt: 'Dall\'alto, due mani intrecciano una fascia di piccole perle d\'oro su un telaio, accanto a una pinza' },
  hero:      { file: 'hero-chi-sono.jpg',                 w: 1920, h: 1278, alt: 'Le mani di un orafo, con la lente sul volto, lavorano un anello d\'oro' },
  contatti:  { file: 'hero-contatti.jpg',                 w: 1920, h: 1000, alt: '' },
};

/* Close-up crops (same technique as the existing Concept 03 "Dettagli" section). */
export const COLLECTIONS = [
  {
    slug: 'collane', name: 'Collane', tag: 'Oro e pietre di colore',
    img: 'collana', pos: 'object-[50%_24%]',
    blurb: 'Catene sottili a lunghezze diverse, un punto di colore, una forma che resta.',
    lead: 'Tre collane in oro, tre lunghezze.',
    intro: [
      'In alto una pietra blu sfaccettata, più in basso un ciondolo a mezzaluna segnato da piccole pietre in fila. Le catene restano sottili: il disegno lavora sulla distanza tra un punto e l\'altro.',
    ],
    quote: 'Un punto di colore e una forma che resta in mente.',
    details: [['Metallo', 'Oro'], ['Pietra', 'Blu, taglio sfaccettato'], ['Ciondolo', 'Mezzaluna con piccole pietre incastonate']],
    pieces: [
      { t: 'Pietra blu', n: 'Taglio sfaccettato', img: 'collana', cls: 'origin-[47%_26%] scale-[2.6]', alt: 'Dettaglio di una pietra blu sfaccettata, incastonata in oro' },
      { t: 'Le tre catene', n: 'Lunghezze diverse', img: 'collana', cls: 'object-[50%_30%]' },
      { t: 'Mezzaluna', n: 'Piccole pietre in fila', img: 'collana', cls: 'origin-[45%_83%] scale-[2.2]', alt: 'Dettaglio del ciondolo a mezzaluna con le piccole pietre incastonate' },
    ],
    support: 'banco',
  },
  {
    slug: 'anelli', name: 'Anelli', tag: 'Solitari e pavé',
    img: 'anello', pos: 'object-[55%_50%]',
    blurb: 'Le proporzioni si decidono con chi lo porterà. Il metallo, la pietra e la montatura vengono dopo.',
    lead: 'Un diamante al centro, un contorno di brillanti.',
    intro: [
      'Oro bianco e rosa, su un piano nero. Il solitario tiene la pietra in primo piano; il pavé la accompagna con una cornice di brillanti.',
    ],
    quote: 'Le proporzioni si decidono con chi lo porterà.',
    details: [['Metallo', 'Oro bianco e rosa'], ['Pietra', 'Diamante al centro'], ['Contorno', 'Brillanti, pavé']],
    pieces: [
      { t: 'Il solitario', n: 'Diamante al centro', img: 'anello', cls: 'origin-[48%_44%] scale-[2.1]', alt: 'Dettaglio ravvicinato di un diamante con il suo contorno di brillanti' },
      { t: 'Oro bianco e rosa', n: 'Visto intero', img: 'anello', cls: 'object-[55%_50%]' },
      { t: 'Il contorno', n: 'Brillanti', img: 'anello', cls: 'origin-[40%_52%] scale-[3]', alt: 'Dettaglio dei brillanti che circondano la pietra centrale' },
    ],
    support: 'incastona',
  },
  {
    slug: 'bracciali', name: 'Bracciali', tag: 'Oro bianco e giallo',
    img: 'bracciale', pos: 'object-center',
    blurb: 'Un motivo a goccia che si ripete intorno al polso.',
    lead: 'Un bracciale rigido, un solo motivo.',
    intro: [
      'La goccia si ripete a catena, ogni elemento punteggiato di brillanti. Il disegno è semplice, e per questo ha bisogno di essere preciso.',
    ],
    quote: 'Il disegno ripete, la luce cambia.',
    details: [['Metallo', 'Oro bianco e giallo'], ['Forma', 'Rigido'], ['Motivo', 'A goccia, con brillanti']],
    pieces: [
      { t: 'Il motivo a goccia', n: 'Ripetuto a catena', img: 'bracciale', cls: 'origin-[45%_68%] scale-[2.4]', alt: 'Dettaglio del motivo a goccia del bracciale' },
      { t: 'Il bracciale rigido', n: 'Visto intero', img: 'bracciale', cls: 'object-center' },
      { t: 'I brillanti', n: 'Incastonati nel disegno', img: 'bracciale', cls: 'origin-[62%_62%] scale-[3.2]', alt: 'Dettaglio dei brillanti incastonati nel bracciale' },
    ],
    support: 'mani',
  },
  {
    slug: 'orecchini', name: 'Orecchini', tag: 'Intreccio e pendenti',
    img: 'pendenti', pos: 'object-[50%_42%]',
    blurb: 'Cerchi in oro intrecciato e pendenti con una pietra blu al centro.',
    lead: 'Una pietra al centro, la luce intorno.',
    intro: [
      'Due famiglie: i cerchi d\'oro intrecciato, ritmati dal metallo stesso, e i pendenti con zaffiro blu, circondati di cristalli.',
    ],
    quote: 'Una pietra al centro, la luce intorno.',
    details: [['Pendenti', 'Zaffiro blu e cristalli'], ['Cerchi', 'Oro intrecciato']],
    pieces: [
      { t: 'Zaffiro blu', n: 'Al centro del pendente', img: 'pendenti', cls: 'origin-[53%_43%] scale-[2.6]', alt: 'Dettaglio dello zaffiro blu al centro di un orecchino pendente' },
      { t: 'Orecchini pendenti', n: 'Su una foglia verde', img: 'pendenti', cls: 'object-[50%_42%]' },
      { t: 'Cerchi intrecciati', n: 'Oro', img: 'intreccio', cls: 'object-[50%_78%]' },
    ],
    support: 'saldatura',
  },
  {
    slug: 'su-misura', name: 'Su misura', tag: 'Dal bozzetto al gioiello',
    img: 'collier', pos: 'object-[50%_62%]',
    blurb: 'Commissioni su disegno. Il progetto resta accanto al gioiello finito.',
    lead: 'Il bozzetto a matita, l\'oro finito.',
    intro: [
      'Un collier con smeraldi, un anello con rubini. Per entrambi il disegno è rimasto sul tavolo, con la lente e le pinze: si vede da dove sono partiti.',
    ],
    quote: 'Il progetto è lì, accanto al gioiello.',
    details: [['Punto di partenza', 'Bozzetto a matita e a colori'], ['Pietre', 'Smeraldi, rubini'], ['Metallo', 'Oro']],
    pieces: [
      { t: 'Collier con smeraldi', n: 'Su misura', img: 'collier', cls: 'object-[50%_62%]' },
      { t: 'Anello con rubini', n: 'Su misura', img: 'rubini', cls: 'object-center' },
      { t: 'Il bozzetto', n: 'A matita e a colori', img: 'collier', cls: 'object-[30%_20%]', alt: 'Il bozzetto del collier, a matita e a colori' },
    ],
    support: 'fusione',
  },
];

export const col = (slug) => COLLECTIONS.find((c) => c.slug === slug);
export const relatedCollections = (slug) => {
  const i = COLLECTIONS.findIndex((c) => c.slug === slug);
  return [COLLECTIONS[(i + 1) % COLLECTIONS.length], COLLECTIONS[(i + 2) % COLLECTIONS.length]];
};

export const MAISON = {
  statement: 'Un gioiello non nasce da un catalogo. Nasce da un disegno, da un metallo che si scalda, da una pietra scelta a occhio.',
  who: 'Gregory Jewels disegna e costruisce pezzi unici e creazioni su misura. Ogni anello, collana o orecchino passa dalle stesse mani, dal primo bozzetto all\'incastonatura.',
  approach: 'Cerchiamo l\'equilibrio tra le linee classiche e un disegno più netto, contemporaneo. Pochi materiali, scelti con rigore, lavorati senza fretta.',
  quote: 'Dare una forma a ciò che si ricorda: un giorno, una persona, un luogo.',
  motto: 'Creazioni uniche che custodiscono emozioni senza tempo.',
  studio: 'L\'atelier è piccolo di proposito. Si lavora su pochi pezzi per volta, e si possono vedere nascere.',
  principles: [
    ['Mano', 'Ogni pezzo passa dalle stesse mani.'],
    ['Materia', 'Pochi materiali, scelti con rigore.'],
    ['Misura', 'Pezzi unici e su misura.'],
  ],
  closing: ['Raccontaci', 'cosa vuoi custodire.'],
};

export const CRAFT = {
  title: ['La fiamma,', 'poi la pazienza.'],
  lead: 'Fusione, saldatura, limatura, incastonatura. Pochi gesti, ripetuti finché il pezzo smette di sembrare lavorato e comincia a sembrare inevitabile.',
  quote: 'Il tempo che serve, non quello che avanza.',
  steps: [
    { t: 'Il bozzetto', p: 'Si parte ascoltando. Poi matita, colore, proporzioni, finché il disegno regge da solo.', img: 'rubini', cls: 'object-center', alt: 'Bozzetti a colori accanto a un anello con rubini' },
    { t: 'La fusione', p: 'Il metallo prende forma sul banco, alla fiamma, saldatura dopo saldatura.', img: 'fusione', cls: 'object-[40%_50%]' },
    { t: 'La pietra', p: 'Scelta a occhio, con la lente. Poi l\'incastonatura, il gesto più piccolo e il meno perdonabile.', img: 'incastona', cls: 'object-center' },
    { t: 'La consegna', p: 'Il pezzo viene provato, aggiustato e consegnato a mano.', img: 'banco', cls: 'object-center' },
  ],
  closeups: [
    { t: 'Pavé', n: 'Brillanti', img: 'anello', cls: 'origin-[48%_44%] scale-[2.1]', alt: 'Dettaglio ravvicinato di un diamante con il suo contorno di brillanti' },
    { t: 'Taglio', n: 'Pietra di colore', img: 'collana', cls: 'origin-[47%_26%] scale-[2.6]', alt: 'Dettaglio di una pietra blu sfaccettata, incastonata in oro' },
    { t: 'Intreccio', n: 'Oro', img: 'intreccio', cls: 'origin-[52%_73%] scale-[2.4]', alt: 'Dettaglio di un orecchino a cerchio in oro intrecciato' },
  ],
};

/* Provisional sample articles: kept short and built only from statements already on the homepages.
   No dates, on purpose. */
export const ARTICLES = [
  {
    slug: 'dal-bozzetto-al-collier', cat: 'Su misura',
    title: 'Dal bozzetto al collier',
    excerpt: 'Una commissione su disegno: la matita, poi l\'oro, con il progetto ancora accanto al gioiello.',
    img: 'collier', pos: 'object-[50%_62%]', lead: 'collier', second: 'fusione', related: 'su-misura',
    paras: [
      'Ogni commissione comincia da una conversazione, non da un listino. Si parla di chi porterà il gioiello, di che cosa vuole ricordare, di come lo userà.',
      'Poi viene il disegno: un bozzetto a matita, poi a colori. Si approva sulla carta, prima che il metallo sia scaldato.',
      'Nella fotografia il collier in oro con smeraldi sta accanto al suo bozzetto, con la lente e le pinze ancora sul tavolo. Il progetto è lì, accanto al gioiello: è un modo per vedere da dove si è partiti.',
    ],
    quote: 'Si approva sulla carta.',
    paras2: ['Il resto è lavoro di banco: la fusione, la saldatura, l\'incastonatura delle pietre una per una.'],
    cap1: 'Il collier con smeraldi, accanto al bozzetto.', cap2: 'Alla fiamma, sul banco.',
  },
  {
    slug: 'la-fiamma-poi-la-pazienza', cat: 'Atelier',
    title: 'La fiamma, poi la pazienza',
    excerpt: 'Fusione, saldatura, limatura, incastonatura: pochi gesti, ripetuti.',
    img: 'fusione', pos: 'object-[40%_50%]', lead: 'fusione', second: 'saldatura', related: 'bracciali',
    paras: [
      'Fusione, saldatura, limatura, incastonatura. Sono pochi gesti, e sono sempre gli stessi.',
      'La fiamma è la parte più visibile: il metallo si scalda, si salda, prende la forma del disegno. La pazienza è tutto ciò che viene dopo, e non fa scena.',
      'Si ripete finché il pezzo smette di sembrare lavorato e comincia a sembrare inevitabile.',
    ],
    quote: 'Il tempo che serve, non quello che avanza.',
    paras2: ['Per questo l\'atelier lavora su pochi pezzi per volta.'],
    cap1: 'Una fiamma azzurra scalda un anello sul blocco di lavoro.', cap2: 'La saldatura, con il flusso sul blocco.',
  },
  {
    slug: 'dare-forma-a-cio-che-si-ricorda', cat: 'Maison',
    title: 'Dare forma a ciò che si ricorda',
    excerpt: 'Un gioiello come modo di tenere insieme un giorno, una persona, un luogo.',
    img: 'mani', pos: 'object-center', lead: 'mani', second: 'banco', related: 'anelli',
    paras: [
      'Un gioiello è un modo di tenere insieme un giorno, una persona, un luogo. Per questo non lo si sceglie come si sceglie un oggetto qualunque.',
      'Cerchiamo l\'equilibrio tra le linee classiche e un disegno più netto, contemporaneo. Pochi materiali, scelti con rigore, lavorati senza fretta.',
      'Le proporzioni si decidono con chi lo porterà. Il metallo, la pietra e la montatura vengono dopo.',
    ],
    quote: 'Creazioni uniche che custodiscono emozioni senza tempo.',
    paras2: ['È qui che il lavoro di mano diventa utile: permette di cambiare una misura, una pietra, una linea, finché il pezzo è giusto.'],
    cap1: 'Due mani intrecciano una fascia di piccole perle d\'oro.', cap2: 'Il banco: filo, pinze e componenti in oro.',
  },
  {
    slug: 'una-pietra-scelta-a-occhio', cat: 'Pietre',
    title: 'Una pietra scelta a occhio',
    excerpt: 'La lente, la luce, l\'incastonatura: il gesto più piccolo e il meno perdonabile.',
    img: 'incastona', pos: 'object-center', lead: 'incastona', second: 'collana', related: 'collane',
    paras: [
      'La pietra si sceglie a occhio, con la lente. Si guarda come prende la luce, come sta accanto al metallo, come starà sul disegno.',
      'Poi viene l\'incastonatura: il gesto più piccolo e il meno perdonabile. Ogni pietra al suo posto, con calma.',
      'Una pietra blu sfaccettata, uno zaffiro al centro di un pendente, gli smeraldi di un collier: ognuna ha chiesto una montatura diversa.',
    ],
    quote: 'Il gesto più piccolo, e il meno perdonabile.',
    paras2: ['La scelta non finisce con la pietra: finisce quando il pezzo è provato e consegnato a mano.'],
    cap1: 'Incastonatura di una pietra al banco.', cap2: 'Una pietra blu sfaccettata, incastonata in oro.',
  },
];
export const art = (slug) => ARTICLES.find((a) => a.slug === slug);

export const CONTACT = {
  lead: 'Per una commissione, un restauro o semplicemente per vedere i pezzi: scrivici, rispondiamo di persona.',
  topics: ['Una commissione su misura', 'Vedere i pezzi, su appuntamento', 'Un restauro', 'Altro'],
};
