// Generates the internal pages of the three concepts into concept-1/, concept-2/, concept-3/.
// No dependencies: `node build/build.mjs` (also run by `npm run build`).
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { COLLECTIONS, ARTICLES, PRODUCTS } from './data.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const concepts = [1, 2, 3];
let count = 0;

for (const n of concepts) {
  const file = join(root, 'build', `c${n}.mjs`);
  if (!existsSync(file)) continue;
  const c = await import(`./c${n}.mjs`);
  const out = (rel, html) => {
    const p = join(root, `concept-${n}`, rel);
    mkdirSync(dirname(p), { recursive: true });
    writeFileSync(p, html);
    count++;
  };
  out('collezioni.html', c.collezioni());
  for (const col of COLLECTIONS) out(`collezioni/${col.slug}.html`, c.collezione(col));
  out('maison.html', c.maison());
  out('artigianalita.html', c.atelier());
  out('journal.html', c.journal());
  for (const a of ARTICLES) out(`journal/${a.slug}.html`, c.articolo(a));
  out('contatti.html', c.contatti());
  out('negozio.html', c.negozio());
  for (const p of PRODUCTS) out(`negozio/${p.slug}.html`, c.prodotto(p));
  out('carrello.html', c.carrello());
}
console.log(`${count} pages written`);
