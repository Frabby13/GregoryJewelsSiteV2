import { IMG, SITE, CONTACT } from './data.mjs';

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const IMG_FILE = (key) => IMG[key].file;

/* <img> with the intrinsic size from the data file; `cls` carries object-position / crop utilities */
export function pic(rt, key, { cls = '', alt, eager = false, attrs = '' } = {}) {
  const i = IMG[key];
  const a = alt !== undefined ? alt : i.alt;
  return `<img src="${rt}img/${i.file}" alt="${esc(a)}" width="${i.w}" height="${i.h}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"${cls ? ` class="${cls}"` : ''}${attrs ? ' ' + attrs : ''}>`;
}

/* Internal URLs. depth = folder levels below the project root (1 = concept-N/x.html, 2 = concept-N/x/y.html).
   Staying inside concept-N/ is what keeps visitors from switching concept by accident. */
export function links(n, depth) {
  const root = '../'.repeat(depth);
  const cb = depth === 1 ? '' : '../';
  return {
    root,
    home: `${root}concept-${n}.html`,
    collezioni: `${cb}collezioni.html`,
    maison: `${cb}maison.html`,
    atelier: `${cb}artigianalita.html`,
    journal: `${cb}journal.html`,
    contatti: `${cb}contatti.html`,
    negozio: `${cb}negozio.html`,
    carrello: `${cb}carrello.html`,
    prod: (s) => `${cb}negozio/${s}.html`,
    col: (s) => `${cb}collezioni/${s}.html`,
    art: (s) => `${cb}journal/${s}.html`,
    concept: (i) => `${root}concept-${i}.html`,
  };
}

export const SECTION_KEYS = ['collezioni', 'negozio', 'maison', 'atelier', 'journal', 'contatti'];

export function head({ n, title, desc, themeColor, rt, preload = '' }) {
  return `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} — Gregory Jewels</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="${themeColor}">
<link rel="icon" href="${rt}favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="${rt}apple-touch-icon.png">
<link rel="preload" href="${rt}fonts/cormorant-400.ttf" as="font" type="font/ttf" crossorigin>
${preload}<link rel="stylesheet" href="${rt}css/tailwind.css">
</head>
`;
}

export const skip = `<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-ink focus:text-white focus:px-4 focus:py-2">Vai al contenuto</a>`;

export function switcher(n, L) {
  const names = ['Maison', 'Atelier', 'Moderno'];
  return `<nav class="switcher flex gap-px bg-ink/90 text-[.62rem] uppercase tracking-[.2em] text-white" aria-label="Cambia concept">
${names.map((nm, i) => `  <a class="px-4 py-3 ${i + 1 === n ? 'bg-gold text-ink' : 'hover:bg-white/10'}" href="${L.concept(i + 1)}"${i + 1 === n ? ' aria-current="true"' : ''}>${nm}</a>`).join('\n')}
</nav>`;
}

export const scripts = (rt, extra = '') => `<script src="${rt}js/site.js" defer></script>\n<script src="${rt}js/shop.js" defer></script>\n${extra}`;
export const contactScript = (rt) => `<script src="${rt}js/contact.js" defer></script>\n`;

/* Contact form. Markup is shared (labels, names, validation hooks); each concept passes its own classes.
   There is no backend: contact.js validates, then opens the visitor's mail client. */
export function contactForm(s) {
  const f = (id, label, input, msg) => `
    <div class="${s.field}">
      <label for="f-${id}" class="${s.label}">${label}</label>
      ${input}
      <p id="e-${id}" class="${s.err}" data-error hidden>${msg}</p>
    </div>`;
  const common = `class="${s.input}" aria-describedby="e-`;
  return `<form id="contact-form" novalidate data-mailto="${SITE.email}" class="${s.form}">
  ${f('nome', 'Nome', `<input id="f-nome" name="nome" type="text" autocomplete="name" required ${common}nome">`, 'Scrivi il tuo nome.')}
  ${f('email', 'Email', `<input id="f-email" name="email" type="email" autocomplete="email" inputmode="email" required ${common}email">`, 'Scrivi un indirizzo email valido, così possiamo risponderti.')}
  ${f('tema', 'Di cosa si tratta', `<select id="f-tema" name="tema" required ${common}tema">
        <option value="" disabled selected>Scegli</option>
        ${CONTACT.topics.map((t) => `<option>${t}</option>`).join('\n        ')}
      </select>`, 'Scegli un argomento.')}
  ${f('messaggio', 'Messaggio', `<textarea id="f-messaggio" name="messaggio" rows="5" required minlength="10" ${common}messaggio"></textarea>`, 'Scrivi almeno qualche riga: ci aiuta a risponderti meglio.')}
  <div class="${s.actions}">
    <button type="submit" class="${s.button}">Prepara l'email</button>
    <p id="form-status" class="${s.status}" role="status" aria-live="polite"></p>
  </div>
  <p class="${s.note}">Questo modulo non invia nulla da solo: apre il tuo programma di posta con il messaggio già scritto, e parte solo quando lo invii tu.</p>
</form>`;
}
