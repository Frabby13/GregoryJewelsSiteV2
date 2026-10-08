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
