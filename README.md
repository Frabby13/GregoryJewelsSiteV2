# Gregory Jewels — tre concept per la homepage

Tailwind CSS v4 (CLI), HTML statico, nessun framework. Font, palette, logo e foto vengono dal progetto esistente `GregoryJewels`.

    npm install
    npm run build      # genera css/tailwind.css
    npm run watch      # rigenera mentre modifichi
    npm run serve      # http://localhost:4173

- `index.html` — pagina di confronto
- `concept-1.html` — Editorial Maison
- `concept-2.html` — Art / Portfolio
- `concept-3.html` — Modern Luxury
- `src/input.css` — token del brand (`@theme`), font, componenti e movimento condivisi
- `js/site.js` — reveal allo scroll, header, menu mobile, parallax leggero, cursore (senza dipendenze)

Il movimento è attivo solo con `prefers-reduced-motion: no-preference`; altrimenti la pagina è statica e completamente visibile.
Nei concept, `info@gregoryjewels.com` e la P.IVA `00000000000` sono segnaposto presi dal progetto esistente.

## Pagine interne (7 tipi × 3 concept)

Generate da `build/` (solo Node, nessuna dipendenza): `npm run build` rigenera le pagine e poi il CSS.

    concept-N/collezioni.html              panoramica collezioni
    concept-N/collezioni/<slug>.html       dettaglio (collane, anelli, bracciali, orecchini, su-misura)
    concept-N/maison.html                  la maison
    concept-N/artigianalita.html           artigianalità / atelier
    concept-N/journal.html                 journal
    concept-N/journal/<slug>.html          articolo (4)
    concept-N/contatti.html                contatti

- `build/data.mjs` — contenuti condivisi (collezioni, maison, atelier, articoli, contatti)
- `build/lib.mjs` — helper condivisi (immagini, URL, form, switcher)
- `build/c1.mjs`, `c2.mjs`, `c3.mjs` — layout propri di ciascun concept
- `js/contact.js` (validazione form), `js/rail.js` (scorrimento orizzontale, concept 02)

Da sapere:
- Il modulo contatti **non è collegato a nessun backend**: valida e apre il programma di posta con `mailto:`.
- Gli articoli del journal sono testi provvisori, senza date, costruiti solo da frasi già presenti nelle homepage.
- Email e P.IVA restano i segnaposto del progetto; Privacy e Cookie (già `#` nelle homepage) non hanno ancora una pagina e sono omessi dalle pagine interne.
- Per le collezioni esiste una sola foto per pezzo: i dettagli sono ritagli della stessa immagine.

## Negozio (lista, scheda prodotto, carrello × 3 concept)

    concept-N/negozio.html                 lista prodotti (filtro per collezione)
    concept-N/negozio/<slug>.html          scheda prodotto (6)
    concept-N/carrello.html                carrello

- `build/data.mjs` (`PRODUCTS`) — **catalogo di esempio**: nomi e materiali vengono dai testi delle collezioni, i **prezzi sono segnaposto**.
- `build/shop.mjs` — form di aggiunta, corpo del carrello e token di stile condivisi; ogni concept li veste a modo suo.
- `js/shop.js` — carrello in `localStorage`, contatore nell'header, filtro. Nessun backend: «Invia la richiesta d'ordine» apre il programma di posta con l'elenco dei pezzi; non c'è pagamento né spedizione calcolata.
- Una sola foto per pezzo: la seconda vista di ogni scheda è un ritaglio.
- Le homepage `concept-N.html` non hanno ancora il link «Negozio» né il contatore carrello.
