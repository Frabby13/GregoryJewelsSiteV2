// Concept 02 — Art / Portfolio. Continues concept-2.html: stone ground, oversized Cormorant,
// overlapping crops, a blend-mode header, a horizontal rail, ruled lists and a gold cursor label.
import { COLLECTIONS, MAISON, CRAFT, ARTICLES, SITE, CONTACT, PRODUCTS, col, art, relatedCollections, relatedProducts } from './data.mjs';
import { money, addForm, cartBody, tokens } from './shop.mjs';
import { pic, head, skip, switcher, scripts, contactScript, contactForm, links } from './lib.mjs';

const N = 2;
const SMALL = 'text-[.7rem] uppercase tracking-[.22em]';
const BODY = 'text-[.95rem] leading-[1.9] text-mute';
const H2 = 'font-display text-[clamp(2.4rem,6vw,6rem)] leading-none';
const BIG = 'font-display font-normal leading-[.82] tracking-[-.03em] text-[clamp(4.6rem,23vw,27rem)]';
const PAD = 'px-5 sm:px-10 lg:px-14';

function shell({ title, desc, depth, active, main, extra = '' }) {
  const L = links(N, depth);
  const rt = L.root;
  const a = (k, label) => `<a class="u-link${active === k ? ' u-link--rest' : ''}" href="${L[k]}"${active === k ? ' aria-current="page"' : ''}>${label}</a>`;
  return `${head({ n: N, title, desc, themeColor: '#efe9db', rt })}<body class="bg-stone">
${skip}
<div class="cursor" aria-hidden="true"></div>

<header data-header class="fixed inset-x-0 top-0 z-[70] text-white mix-blend-difference max-md:bg-stone max-md:text-ink max-md:mix-blend-normal">
  <div class="hero-fade flex items-center justify-between ${PAD} py-5" style="--d:.3s">
    <a href="${L.home}" class="flex items-center gap-3" aria-label="Gregory Jewels — homepage">
      <img class="hidden h-9 w-auto md:block" src="${rt}img/logo-mark-light.png" alt="" width="30" height="44">
      <img class="h-9 w-auto md:hidden" src="${rt}img/logo-mark.png" alt="" width="30" height="44">
      <span class="hidden font-display text-xl tracking-[.26em] sm:inline">GREGORY JEWELS</span>
    </a>
    <nav aria-label="Principale" class="hidden gap-9 text-[.7rem] uppercase tracking-[.22em] md:flex">
      ${a('collezioni', 'Opere')}
      ${a('atelier', 'Processo')}
      ${a('maison', 'Studio')}
      ${a('negozio', 'Negozio')}
      ${a('journal', 'Journal')}
      ${a('contatti', 'Contatti')}
      ${a('carrello', 'Carrello (<span data-cart-count>0</span>)')}
    </nav>
    <div class="flex items-center gap-4 md:hidden">
    <a href="${L.carrello}" class="text-[.7rem] uppercase tracking-[.22em]"${active === 'carrello' ? ' aria-current="page"' : ''}>Carrello (<span data-cart-count>0</span>)</a>
    <button data-menu-toggle type="button" aria-expanded="false" aria-controls="menu" aria-label="Apri il menu" class="-mr-2 inline-flex min-h-11 items-center px-2 text-[.7rem] uppercase tracking-[.22em] md:hidden">Indice</button>
    </div>
  </div>
</header>
<div id="menu" data-menu class="invisible fixed inset-0 z-[60] flex flex-col justify-end bg-ink px-6 pb-12 pt-24 text-white opacity-0 transition-[opacity,visibility] duration-700 ease-lux [&.is-open]:visible [&.is-open]:opacity-100 md:hidden">
  <nav aria-label="Menu" class="flex flex-col gap-1 font-display text-[clamp(3rem,15vw,5rem)] italic leading-[1.05]">
    <a href="${L.collezioni}">Opere</a><a href="${L.atelier}">Processo</a><a href="${L.maison}">Studio</a><a href="${L.negozio}">Negozio</a><a href="${L.journal}">Journal</a><a href="${L.contatti}">Contatti</a>
  </nav>
</div>

<main id="main">
${main}
</main>

<footer class="bg-ink px-5 pb-24 pt-4 text-white sm:px-10 lg:px-14">
  <div class="mx-auto flex max-w-[1760px] flex-col gap-6 border-t border-white/15 pt-8 ${SMALL} text-white/65 md:flex-row md:justify-between">
    <span>© <span data-year>2026</span> Gregory Jewels · P.IVA 00000000000</span>
    <nav aria-label="Footer" class="flex flex-wrap gap-x-8 gap-y-3">
      <a class="u-link" href="${L.collezioni}">Opere</a><a class="u-link" href="${L.atelier}">Processo</a><a class="u-link" href="${L.maison}">Studio</a><a class="u-link" href="${L.negozio}">Negozio</a><a class="u-link" href="${L.journal}">Journal</a><a class="u-link" href="${L.contatti}">Contatti</a>
      <a class="u-link" href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a>
    </nav>
  </div>
</footer>

${switcher(N, L)}

${scripts(rt, extra)}</body>
</html>
`;
}

/* closing statement, same device as the homepage: type fills the width, email underneath */
function closing(L, { lines = ['Pezzi con', 'intenzione.'], link, label = SITE.email, text = CONTACT.lead } = {}) {
  return `<section class="bg-ink ${PAD} py-32 text-white md:py-52">
  <div class="mx-auto max-w-[1760px]">
    <p class="font-display text-[clamp(3rem,12vw,13rem)] leading-[.88] tracking-[-.03em]" data-lines>
      <span class="line"><span style="--i:0">${lines[0]}</span></span>
      <span class="line"><span style="--i:1" class="italic text-gold">${lines[1]}</span></span>
    </p>
    <div class="mt-16 flex flex-col justify-between gap-10 md:mt-28 md:flex-row md:items-end">
      <a href="${link || L.contatti}" class="u-link u-link--rest w-fit font-display text-[clamp(1.6rem,3vw,3rem)] italic" data-reveal>${label}</a>
      <p class="max-w-[34ch] text-[.85rem] leading-[1.9] text-white/65" data-reveal>${text}</p>
    </div>
  </div>
</section>`;
}

const rail = (rt, L, items, { title, label }) => `<section class="overflow-hidden pb-32 md:pb-48" aria-labelledby="rail-t">
  <div class="mb-12 flex items-end justify-between ${PAD}">
    <h2 id="rail-t" class="${H2}" data-reveal>${title}</h2>
    <div class="flex gap-2" role="group" aria-label="Scorri">
      <button type="button" data-scroll="-1" class="grid size-12 place-items-center border border-ink/30 text-lg transition hover:bg-ink hover:text-white" aria-label="Precedente">←</button>
      <button type="button" data-scroll="1" class="grid size-12 place-items-center border border-ink/30 text-lg transition hover:bg-ink hover:text-white" aria-label="Successivo">→</button>
    </div>
  </div>
  <div data-rail tabindex="0" role="region" aria-label="${label}" class="no-scrollbar flex snap-x snap-mandatory scroll-px-5 items-start gap-5 overflow-x-auto px-5 pb-4 sm:scroll-px-10 sm:gap-8 sm:px-10 lg:scroll-px-14 lg:px-14">
    ${items}
  </div>
</section>`;

/* ---------------------------------------------------------------- 01 collezioni (Opere) */
export function collezioni() {
  const L = links(N, 1); const rt = L.root;
  const rows = [
    { img: 'md:col-span-4 md:col-start-1', ar: 'aspect-[3/4]', txt: 'md:col-span-8 md:col-start-4 md:row-start-1 md:mt-[16vh]' },
    { img: 'md:col-span-5 md:col-start-8', ar: 'aspect-[3/2]', txt: 'md:col-span-8 md:col-start-1 md:row-start-1 md:mt-[4vh]' },
    { img: 'md:col-span-4 md:col-start-2', ar: 'aspect-square', txt: 'md:col-span-8 md:col-start-5 md:row-start-1 md:mt-[22vh]' },
    { img: 'md:col-span-3 md:col-start-9', ar: 'aspect-[2/3]', txt: 'md:col-span-9 md:col-start-1 md:row-start-1 md:mt-[10vh]' },
    { img: 'md:col-span-6 md:col-start-4', ar: 'aspect-[4/5]', txt: 'md:col-span-9 md:col-start-2 md:row-start-1 md:mt-[28vh]' },
  ];
  const list = COLLECTIONS.map((c, i) => `<li>
      <a href="${L.col(c.slug)}" class="group/c grid items-start gap-y-6 md:grid-cols-12 md:gap-x-8" data-cursor="Apri">
        <div class="frame ${rows[i].ar} ${rows[i].img} md:row-start-1" data-mask>${pic(rt, c.img, { alt: '', cls: c.pos })}</div>
        <div class="relative z-10 ${rows[i].txt}">
          <h2 class="font-display text-[clamp(3.4rem,11vw,12rem)] leading-[.86] tracking-[-.025em] transition-transform duration-700 ease-lux md:group-hover/c:translate-x-3 ${i % 2 ? 'italic' : ''}" data-reveal>${c.name}</h2>
          <div class="mt-5 flex flex-col gap-3 md:ml-1 md:max-w-[46ch]" data-reveal><span class="${SMALL}">${c.tag}</span><p class="${BODY}">${c.blurb}</p></div>
        </div>
      </a>
    </li>`).join('\n    ');
  const main = `<section class="relative px-5 pb-16 pt-28 sm:px-10 lg:px-14 md:pb-24" aria-label="Apertura">
  <h1 class="hero-lines ${BIG} text-ink">
    <span class="line"><span class="block" style="--i:0;--d:.3s">Opere</span></span>
  </h1>
  <div class="mt-10 flex flex-col justify-between gap-8 md:mt-16 md:flex-row md:items-end">
    <p class="hero-fade max-w-[34ch] text-[.95rem] leading-[1.9]" style="--d:.9s">Cinque famiglie di gioielli, guardate come si guardano le opere di un portfolio: una alla volta, da vicino.</p>
    <p class="hero-fade ${SMALL}" style="--d:1s">(Cinque famiglie)</p>
  </div>
</section>

<section class="${PAD} pb-32 md:pb-52" aria-label="Le collezioni">
  <ul class="mx-auto flex max-w-[1760px] flex-col gap-24 md:gap-40">
    ${list}
  </ul>
</section>

${closing(L, { lines: ['Pezzi con', 'intenzione.'], link: L.contatti, label: 'Vedi i pezzi dal vivo' })}`;
  return shell({ title: 'Opere', desc: 'Le collezioni Gregory Jewels, come un portfolio: collane, anelli, bracciali, orecchini e pezzi su misura.', depth: 1, active: 'collezioni', main });
}

/* ---------------------------------------------------------------- 02 collezione */
export function collezione(c) {
  const L = links(N, 2); const rt = L.root;
  const [r1, r2] = relatedCollections(c.slug);
  const figs = c.pieces.map((p, i) => {
    const w = ['w-[72vw] sm:w-[44vw] lg:w-[26vw]', 'mt-16 w-[56vw] sm:w-[34vw] lg:mt-28 lg:w-[20vw]', 'w-[66vw] sm:w-[40vw] lg:w-[24vw]'][i];
    const ar = ['aspect-[2/3]', 'aspect-square', 'aspect-[3/4]'][i];
    return `<figure class="${w} shrink-0 snap-start" data-cursor="Vedi">
      <div class="frame ${ar}">${pic(rt, p.img, { alt: p.alt, cls: p.cls })}</div>
      <figcaption class="mt-4 flex justify-between gap-4 ${SMALL}"><span>${p.t}</span><span class="text-mute">${p.n}</span></figcaption>
    </figure>`;
  }).join('\n    ');
  const main = `<section class="relative isolate min-h-[100svh] overflow-hidden px-5 pb-10 pt-28 sm:px-10 lg:px-14" aria-label="Apertura">
  <h1 class="hero-lines relative z-20 ${BIG.replace('text-[clamp(4.6rem,23vw,27rem)]', 'text-[clamp(4.2rem,19vw,22rem)]')} text-ink">
    <span class="line"><span class="block" style="--i:0;--d:.3s">${c.name.split(' ')[0]}</span></span>
    ${c.name.split(' ')[1] ? `<span class="line ml-[10vw] md:ml-[24vw]"><span class="block italic text-gold-deep" style="--i:1;--d:.3s">${c.name.split(' ')[1]}</span></span>` : `<span class="line ml-[10vw] md:ml-[24vw]"><span class="block text-[.28em] italic text-gold-deep" style="--i:1;--d:.3s">${c.tag}</span></span>`}
  </h1>
  <div class="frame absolute right-[8vw] top-[34vh] z-10 aspect-[2/5] w-[34vw] max-w-[360px] md:right-auto md:left-[58vw] md:top-[14vh] md:aspect-[3/5] md:w-[24vw]" data-mask style="--d:.3s">
    ${pic(rt, c.img, { eager: true, alt: IMGALT[c.img], cls: 'hero-pic ' + c.pos })}
  </div>
  <p class="hero-fade absolute bottom-10 right-5 z-30 max-w-[24ch] text-right text-[.78rem] leading-[1.8] sm:right-10 lg:right-14" style="--d:1.2s">${c.tag}</p>
  <p class="hero-fade absolute bottom-10 left-5 z-30 hidden ${SMALL} sm:left-10 md:block lg:left-14" style="--d:1.2s"><a class="u-link" href="${L.collezioni}">← Tutte le opere</a></p>
</section>

<section class="${PAD} py-32 md:py-52">
  <p class="max-w-[22ch] font-display text-[clamp(2.6rem,7vw,7.6rem)] leading-[.98] tracking-[-.02em] md:max-w-[17ch]" data-reveal>${c.lead}</p>
  <p class="ml-auto mt-14 max-w-[40ch] ${BODY} md:mt-20" data-reveal>${c.intro[0]}</p>
</section>

${rail(rt, L, figs, { title: 'Pezzi scelti', label: `${c.name}, pezzi scelti, scorrimento orizzontale` })}

<section class="relative overflow-hidden bg-ink py-32 text-white md:py-52" aria-label="Dal banco">
  <div class="relative mx-auto max-w-[1872px] ${PAD}">
    <div class="grid items-start gap-y-10 md:grid-cols-12">
      <div class="frame aspect-[4/5] md:col-span-4" data-mask>${pic(rt, c.support, { alt: '', cls: 'object-center' })}</div>
      <p class="relative z-10 font-display text-[clamp(2.6rem,7vw,7rem)] italic leading-[.95] md:col-span-7 md:col-start-6 md:mt-[18vh]" data-reveal>${c.quote}</p>
    </div>
  </div>
</section>

<section class="${PAD} py-32 md:py-52" aria-labelledby="det">
  <div class="mx-auto max-w-[1760px]">
    <h2 id="det" class="mb-16 ${H2} md:mb-28" data-reveal>In dettaglio</h2>
    <dl class="border-t border-ink/20">
      ${c.details.map(([k, v]) => `<div class="grid items-baseline gap-x-8 gap-y-3 border-b border-ink/20 py-8 md:grid-cols-12 md:py-12" data-reveal><dt class="font-display text-3xl md:col-span-5 md:text-5xl">${k}</dt><dd class="max-w-[46ch] text-[.95rem] leading-[1.9] text-mute md:col-span-5 md:col-start-8">${v}</dd></div>`).join('\n      ')}
    </dl>
  </div>
</section>

<section class="bg-bone ${PAD} py-32 md:py-52" aria-labelledby="altre">
  <div class="mx-auto max-w-[1760px]">
    <p class="${SMALL} mb-8 text-gold-deep" data-reveal>Altre opere</p>
    <h2 id="altre" class="sr-only">Altre collezioni</h2>
    <div class="grid gap-14 md:grid-cols-12 md:gap-8">
      ${[r1, r2].map((r, i) => `<a href="${L.col(r.slug)}" class="group/c ${i ? 'md:col-span-5 md:col-start-8 md:mt-32' : 'md:col-span-6'}" data-cursor="Apri">
        <div class="frame ${i ? 'aspect-[2/3]' : 'aspect-[4/5]'}" data-mask>${pic(rt, r.img, { alt: '', cls: r.pos })}</div>
        <p class="mt-5 font-display text-[clamp(2.4rem,5vw,5rem)] leading-none ${i ? 'italic' : ''}" data-reveal>${r.name}</p>
        <p class="mt-2 ${SMALL} text-mute">${r.tag}</p>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>

${closing(L)}`;
  return shell({ title: c.name, desc: `${c.name} — ${c.lead} ${c.tag}.`, depth: 2, active: 'collezioni', main, extra: `<script src="${rt}js/rail.js" defer></script>\n` });
}
const IMGALT = {
  collana: 'Collane in oro con una pietra blu sfaccettata e un ciondolo a mezzaluna',
  anello: 'Anello con diamante e contorno di brillanti su un piano nero',
  bracciale: 'Bracciale rigido in oro con un motivo a goccia e brillanti',
  pendenti: 'Orecchini pendenti con zaffiro blu su una foglia verde',
  collier: 'Collier in oro con smeraldi accanto al suo bozzetto',
};

/* ---------------------------------------------------------------- 03 studio (Maison) */
export function maison() {
  const L = links(N, 1); const rt = L.root;
  const main = `<section class="relative isolate min-h-[100svh] overflow-hidden px-5 pb-10 pt-28 sm:px-10 lg:px-14" aria-label="Apertura">
  <h1 class="hero-lines relative z-20 ${BIG.replace('text-[clamp(4.6rem,23vw,27rem)]', 'text-[clamp(4.2rem,19vw,22rem)]')} text-ink">
    <span class="line"><span class="block" style="--i:0;--d:.3s">Studio</span></span>
    <span class="line ml-[10vw] md:ml-[30vw]"><span class="block italic text-gold-deep" style="--i:1;--d:.3s">Gregory</span></span>
  </h1>
  <div class="frame absolute right-[6vw] top-[34vh] z-10 aspect-[2/5] w-[34vw] max-w-[360px] md:right-auto md:left-[8vw] md:top-[46vh] md:aspect-[4/5] md:w-[22vw]" data-mask style="--d:.3s">
    ${pic(rt, 'hero', { eager: true, cls: 'hero-pic object-[62%_50%]', alt: 'Le mani di un orafo, con la lente sul volto, lavorano un anello d\'oro' })}
  </div>
  <div class="frame absolute bottom-[16vh] right-[10vw] z-30 aspect-square w-[30vw] max-w-[260px] md:bottom-[8vh] md:right-[14vw] md:w-[13vw]" data-mask style="--d:.8s">${pic(rt, 'intreccio', { alt: '', cls: 'object-[50%_78%]' })}</div>
  <p class="hero-fade absolute bottom-10 left-5 z-30 max-w-[24ch] text-[.78rem] leading-[1.8] sm:left-10 md:left-auto md:right-1/2 lg:right-[48%]" style="--d:1.4s">Gioielli d'autore, disegnati e costruiti a mano. Pezzi unici e commissioni.</p>
</section>

<section class="${PAD} py-32 md:py-52">
  <p class="${SMALL} mb-10 text-gold-deep" data-reveal>Manifesto</p>
  <p class="max-w-[22ch] font-display text-[clamp(2.6rem,7vw,7.6rem)] leading-[.98] tracking-[-.02em] md:max-w-[19ch]" data-reveal>${MAISON.statement}</p>
  <p class="ml-auto mt-14 max-w-[40ch] ${BODY} md:mt-20" data-reveal>${MAISON.who}</p>
</section>

<section class="bg-bone ${PAD} py-32 md:py-52" aria-labelledby="studio">
  <div class="mx-auto grid max-w-[1760px] items-center gap-14 lg:grid-cols-12 lg:gap-8">
    <div class="lg:col-span-5">
      <p class="${SMALL} mb-8 text-gold-deep" data-reveal>Lo studio</p>
      <h2 id="studio" class="font-display text-[clamp(2.4rem,5vw,5rem)] leading-[1.02]" data-reveal>Un banco, una lente, <em>molta luce.</em></h2>
      <p class="mt-8 max-w-[42ch] ${BODY}" data-reveal>${MAISON.studio}</p>
      <p class="mt-6 max-w-[42ch] ${BODY}" data-reveal>${MAISON.approach}</p>
      <a href="${L.atelier}" class="u-link mt-10 ${SMALL}" data-reveal>Il processo</a>
    </div>
    <div class="relative lg:col-span-6 lg:col-start-7">
      <div class="frame aspect-[4/5] w-[78%] lg:ml-auto" data-mask>${pic(rt, 'banco')}</div>
      <div class="frame absolute -bottom-10 left-0 aspect-[3/2] w-[52%]" data-mask style="--d:.3s">${pic(rt, 'saldatura')}</div>
    </div>
  </div>
</section>

<section class="${PAD} py-32 md:py-52" aria-labelledby="principi">
  <div class="mx-auto max-w-[1760px]">
    <h2 id="principi" class="mb-16 ${H2} md:mb-28" data-reveal>Tre principi</h2>
    <dl class="border-t border-ink/20">
      ${MAISON.principles.map(([k, v]) => `<div class="grid items-baseline gap-x-8 gap-y-3 border-b border-ink/20 py-8 md:grid-cols-12 md:py-12" data-reveal><dt class="font-display text-3xl md:col-span-5 md:text-5xl">${k}</dt><dd class="max-w-[46ch] ${BODY} md:col-span-5 md:col-start-8">${v}</dd></div>`).join('\n      ')}
    </dl>
  </div>
</section>

<section class="relative overflow-hidden bg-ink py-32 text-white md:py-52" aria-label="Dal disegno">
  <div class="relative mx-auto max-w-[1872px] ${PAD}">
    <div class="grid items-start gap-y-10 md:grid-cols-12">
      <div class="frame aspect-[16/10] md:col-span-6 md:col-start-2" data-mask>${pic(rt, 'mani', { alt: '' })}</div>
      <p class="relative z-10 font-display text-[clamp(2.6rem,6vw,6.4rem)] italic leading-[.95] text-gold md:col-span-5 md:col-start-8 md:mt-[22vh] md:-ml-[6vw]" data-reveal>${MAISON.quote}</p>
    </div>
  </div>
</section>

${closing(L, { lines: MAISON.closing, label: 'Prenota un appuntamento privato', text: 'Per una commissione, un restauro o semplicemente per vedere i pezzi.' })}`;
  return shell({ title: 'Studio', desc: 'Gregory Jewels disegna e costruisce pezzi unici e creazioni su misura. Lo studio, in poche parole.', depth: 1, active: 'maison', main });
}

/* ---------------------------------------------------------------- 04 processo (Craftsmanship) */
export function atelier() {
  const L = links(N, 1); const rt = L.root;
  const steps = CRAFT.steps.map((s, i) => `<li class="grid items-center gap-8 border-b border-ink/20 py-10 md:grid-cols-12 md:py-16" data-reveal>
        <h3 class="font-display text-[clamp(2.4rem,5vw,5rem)] leading-none md:col-span-5 ${i % 2 ? 'italic' : ''}">${s.t}</h3>
        <p class="max-w-[40ch] ${BODY} md:col-span-3">${s.p}</p>
        <div class="frame ${['aspect-[3/4]', 'aspect-[3/2]', 'aspect-square', 'aspect-[4/5]'][i]} md:col-span-3 md:col-start-10">${pic(rt, s.img, { alt: s.alt, cls: s.cls })}</div>
      </li>`).join('\n      ');
  const close = CRAFT.closeups.map((p, i) => `<figure class="${['w-[72vw] sm:w-[44vw] lg:w-[26vw]', 'mt-16 w-[60vw] sm:w-[36vw] lg:mt-28 lg:w-[22vw]', 'w-[66vw] sm:w-[40vw] lg:w-[24vw]'][i]} shrink-0 snap-start" data-cursor="Vedi">
      <div class="frame aspect-[3/4]">${pic(rt, p.img, { alt: p.alt, cls: p.cls })}</div>
      <figcaption class="mt-4 flex justify-between ${SMALL}"><span>${p.t}</span><span class="text-mute">${p.n}</span></figcaption>
    </figure>`).join('\n    ');
  const main = `<section class="relative px-5 pb-16 pt-28 sm:px-10 lg:px-14" aria-label="Apertura">
  <h1 class="hero-lines ${BIG} text-ink">
    <span class="line"><span class="block" style="--i:0;--d:.3s">Processo</span></span>
  </h1>
  <div class="mt-10 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
    <p class="hero-fade font-display text-[clamp(1.6rem,2.8vw,2.8rem)] italic leading-[1.15] md:col-span-6 md:col-start-6" style="--d:.9s">${CRAFT.title.join(' ')}</p>
    <p class="hero-fade max-w-[44ch] ${BODY} md:col-span-5 md:col-start-6" style="--d:1.1s">${CRAFT.lead}</p>
  </div>
</section>

<section class="relative overflow-hidden bg-ink py-32 text-white md:py-52" aria-label="Dal disegno alla pietra">
  <div class="relative mx-auto max-w-[1872px] ${PAD}">
    <div class="grid items-start gap-y-10 md:grid-cols-12">
      <div class="frame aspect-[4/5] md:col-span-4" data-mask>${pic(rt, 'rubini', { alt: '', cls: 'object-center' })}</div>
      <p class="relative z-10 font-display text-[clamp(2.6rem,7vw,7rem)] italic leading-[.95] md:col-span-7 md:col-start-6 md:mt-[18vh]" data-reveal>dal disegno</p>
    </div>
    <div class="mt-10 grid items-end gap-y-10 md:-mt-6 md:grid-cols-12">
      <p class="order-2 font-display text-[clamp(2.6rem,7vw,7rem)] italic leading-[.95] md:order-1 md:col-span-6 md:col-start-2" data-reveal>alla fiamma</p>
      <div class="frame order-1 aspect-[3/4] md:order-2 md:col-span-3 md:col-start-9" data-mask>${pic(rt, 'fusione', { alt: '', cls: 'object-[38%_50%]' })}</div>
    </div>
    <div class="mt-20 grid items-start gap-y-10 md:grid-cols-12">
      <div class="frame aspect-[16/10] md:col-span-6 md:col-start-3" data-mask>${pic(rt, 'incastona', { alt: '' })}</div>
      <p class="relative z-10 font-display text-[clamp(2.6rem,7vw,7rem)] italic leading-[.95] text-gold md:col-span-3 md:col-start-9 md:mt-[24vh] md:-ml-[10vw]" data-reveal>alla pietra.</p>
    </div>
  </div>
</section>

<section class="${PAD} py-32 md:py-52" aria-labelledby="gesti">
  <div class="mx-auto max-w-[1760px]">
    <h2 id="gesti" class="mb-16 ${H2} md:mb-24" data-reveal>I gesti</h2>
    <ol class="border-t border-ink/20">
      ${steps}
    </ol>
  </div>
</section>

${rail(rt, L, close, { title: 'Da vicino', label: 'Dettagli ravvicinati, scorrimento orizzontale' })}

${closing(L, { lines: ['Il tempo che serve,', 'non quello che avanza.'], link: L.collezioni, label: 'Guarda le opere', text: 'Dal banco alle collezioni: i pezzi finiti, una famiglia alla volta.' })}`;
  return shell({ title: 'Processo', desc: 'Fusione, saldatura, limatura, incastonatura: il processo di lavoro di Gregory Jewels.', depth: 1, active: 'atelier', main, extra: `<script src="${rt}js/rail.js" defer></script>\n` });
}

/* ---------------------------------------------------------------- 05 journal */
export function journal() {
  const L = links(N, 1); const rt = L.root;
  const [f, ...rest] = ARTICLES;
  const rows = rest.map((a, i) => `<li>
      <a href="${L.art(a.slug)}" class="group/c grid items-center gap-x-8 gap-y-6 border-t border-ink/20 py-10 md:grid-cols-12 md:py-14" data-cursor="Leggi">
        <p class="${SMALL} text-gold-deep md:col-span-2" data-reveal>${a.cat}</p>
        <div class="md:col-span-6">
          <h3 class="font-display text-[clamp(2.4rem,5vw,5rem)] leading-[.98] transition-transform duration-700 ease-lux md:group-hover/c:translate-x-3 ${i % 2 ? 'italic' : ''}" data-reveal>${a.title}</h3>
          <p class="mt-4 max-w-[42ch] ${BODY}" data-reveal>${a.excerpt}</p>
        </div>
        <div class="frame ${['aspect-[3/4]', 'aspect-[3/2]', 'aspect-square'][i]} md:col-span-3 md:col-start-10" data-mask>${pic(rt, a.img, { alt: '', cls: a.pos })}</div>
      </a>
    </li>`).join('\n    ');
  const main = `<section class="relative px-5 pb-16 pt-28 sm:px-10 lg:px-14" aria-label="Apertura">
  <h1 class="hero-lines ${BIG} text-ink"><span class="line"><span class="block" style="--i:0;--d:.3s">Journal</span></span></h1>
</section>

<section class="${PAD} pb-28 md:pb-44" aria-label="In evidenza">
  <a href="${L.art(f.slug)}" class="group/c mx-auto grid max-w-[1760px] items-start gap-y-8 md:grid-cols-12 md:gap-x-8" data-cursor="Leggi">
    <div class="frame aspect-[4/5] md:col-span-5" data-mask>${pic(rt, f.img, { eager: true, alt: '', cls: f.pos })}</div>
    <div class="relative z-10 md:col-span-8 md:col-start-5 md:row-start-1 md:mt-[22vh]">
      <p class="${SMALL} text-gold-deep" data-reveal>In evidenza · ${f.cat}</p>
      <h2 class="mt-4 font-display text-[clamp(3rem,9vw,9.5rem)] leading-[.9] tracking-[-.02em]" data-lines><span class="line"><span style="--i:0">${f.title.split(' al ')[0]}</span></span><span class="line"><span style="--i:1" class="italic text-gold-deep">${f.title.includes(' al ') ? 'al ' + f.title.split(' al ')[1] : ''}</span></span></h2>
      <p class="mt-8 max-w-[38ch] ${BODY} md:ml-[10vw]" data-reveal>${f.excerpt}</p>
    </div>
  </a>
</section>

<section class="${PAD} pb-32 md:pb-52" aria-label="Altri articoli">
  <ul class="mx-auto max-w-[1760px] border-b border-ink/20">
    ${rows}
  </ul>
</section>

${closing(L, { lines: ['Pezzi con', 'intenzione.'], link: L.contatti, label: 'Scrivici' })}`;
  return shell({ title: 'Journal', desc: 'Il journal di Gregory Jewels: il lavoro al banco, le pietre, le commissioni.', depth: 1, active: 'journal', main });
}

/* ---------------------------------------------------------------- 06 articolo */
export function articolo(a) {
  const L = links(N, 2); const rt = L.root;
  const c = col(a.related);
  const next = ARTICLES[(ARTICLES.findIndex((x) => x.slug === a.slug) + 1) % ARTICLES.length];
  const P = 'text-[1.02rem] leading-[1.95] text-ink/85';
  const main = `<article>
  <header class="${PAD} pb-14 pt-32 md:pt-40">
    <p class="hero-fade ${SMALL} text-gold-deep" style="--d:.3s"><a class="u-link" href="${L.journal}">← Journal</a> · ${a.cat}</p>
    <h1 class="hero-lines mt-8 max-w-[14ch] font-display text-[clamp(3.2rem,10vw,10.5rem)] font-normal leading-[.9] tracking-[-.025em]">
      <span class="line"><span style="--i:0;--d:.3s">${a.title}</span></span>
    </h1>
  </header>

  <div class="${PAD}">
    <div class="frame ml-auto aspect-[4/3] w-full md:w-[78%] md:aspect-[16/10]" data-mask>${pic(rt, a.lead, { eager: true, alt: '', cls: a.pos })}</div>
    <p class="mt-4 ${SMALL} text-mute md:w-[78%] md:ml-auto">${a.cap1}</p>
  </div>

  <div class="${PAD} grid gap-10 py-20 md:grid-cols-12 md:gap-8 md:py-32">
    <p class="font-display text-[clamp(1.6rem,2.4vw,2.4rem)] italic leading-[1.2] text-mute md:col-span-3" data-reveal>${a.excerpt}</p>
    <div class="max-w-[62ch] md:col-span-6 md:col-start-6">
      ${a.paras.map((p, i) => `<p class="${P}${i ? ' mt-7' : ''}" data-reveal>${p}</p>`).join('\n      ')}
    </div>
  </div>

  <p class="${PAD} max-w-[18ch] font-display text-[clamp(2.6rem,7vw,7rem)] italic leading-[.98] tracking-[-.02em] text-gold-deep md:ml-[18vw]" data-reveal>${a.quote}</p>

  <div class="${PAD} grid items-end gap-8 py-20 md:grid-cols-12 md:py-32">
    <div class="frame aspect-[4/5] md:col-span-4" data-mask>${pic(rt, a.second, { alt: '', cls: 'object-center' })}</div>
    <div class="md:col-span-5 md:col-start-6">
      <p class="${SMALL} mb-8 text-mute" data-reveal>${a.cap2}</p>
      ${a.paras2.map((p) => `<p class="max-w-[62ch] ${P}" data-reveal>${p}</p>`).join('\n      ')}
    </div>
  </div>
</article>

<section class="bg-ink ${PAD} py-24 text-white md:py-40" aria-label="Continua">
  <div class="mx-auto grid max-w-[1760px] gap-16 md:grid-cols-2 md:gap-8">
    <a href="${L.col(c.slug)}" class="group/c" data-cursor="Apri">
      <p class="${SMALL} text-white/60">La collezione</p>
      <p class="mt-4 font-display text-[clamp(2.6rem,6vw,6rem)] leading-[.95]">${c.name}</p>
      <span class="u-link mt-6 ${SMALL}">Scopri</span>
    </a>
    <a href="${L.art(next.slug)}" class="group/c" data-cursor="Leggi">
      <p class="${SMALL} text-white/60">Leggi ancora</p>
      <p class="mt-4 font-display text-[clamp(2.6rem,6vw,6rem)] italic leading-[.95] text-gold">${next.title}</p>
      <span class="u-link mt-6 ${SMALL}">Leggi</span>
    </a>
  </div>
  <p class="mx-auto mt-20 max-w-[1760px]"><a href="${L.journal}" class="u-link ${SMALL}">Torna al journal</a></p>
</section>`;
  return shell({ title: a.title, desc: a.excerpt, depth: 2, active: 'journal', main });
}

/* ---------------------------------------------------------------- 07 contatti */
export function contatti() {
  const L = links(N, 1); const rt = L.root;
  const form = contactForm({
    form: 'grid gap-9', field: 'flex flex-col', actions: 'flex flex-col items-start gap-5 sm:flex-row sm:items-center',
    label: `${SMALL} text-gold-deep`,
    input: 'mt-2 w-full border-0 border-b border-ink/30 bg-transparent px-0 py-3 text-[1rem] text-ink outline-none transition-colors duration-500 focus:border-ink focus-visible:outline-none aria-[invalid=true]:border-[#8a2b1f]',
    err: 'mt-2 text-[.8rem] text-[#8a2b1f]',
    button: `min-h-12 border border-ink px-8 py-4 ${SMALL} transition-colors duration-500 hover:bg-ink hover:text-white`,
    status: 'text-[.85rem] leading-[1.7] text-mute sm:max-w-[34ch]',
    note: 'max-w-[46ch] text-[.8rem] leading-[1.8] text-mute',
  });
  const main = `<section class="relative px-5 pb-16 pt-28 sm:px-10 lg:px-14" aria-label="Apertura">
  <h1 class="hero-lines ${BIG} text-ink">
    <span class="line"><span class="block" style="--i:0;--d:.3s">Scrivici</span></span>
    <span class="line ml-[14vw] md:ml-[34vw]"><span class="block italic text-gold-deep" style="--i:1;--d:.3s">di persona.</span></span>
  </h1>
</section>

<section class="${PAD} pb-32 md:pb-52">
  <div class="mx-auto grid max-w-[1760px] gap-16 lg:grid-cols-12 lg:gap-8">
    <div class="lg:col-span-5">
      <p class="font-display text-[clamp(1.7rem,2.6vw,2.4rem)] leading-[1.2]" data-reveal>${CONTACT.lead}</p>
      <dl class="mt-14 border-t border-ink/20" data-reveal>
        <div class="border-b border-ink/20 py-5"><dt class="${SMALL} text-gold-deep">Email</dt><dd class="mt-2"><a class="u-link font-display text-2xl italic" href="mailto:${SITE.email}">${SITE.email}</a></dd></div>
        <div class="border-b border-ink/20 py-5"><dt class="${SMALL} text-gold-deep">Instagram</dt><dd class="mt-2"><a class="u-link font-display text-2xl italic" href="${SITE.instagram}" target="_blank" rel="noopener">@gregoryjewels</a></dd></div>
        <div class="border-b border-ink/20 py-5"><dt class="${SMALL} text-gold-deep">Visite</dt><dd class="mt-2 font-display text-2xl italic">Su appuntamento</dd></div>
      </dl>
      <div class="frame mt-14 hidden aspect-[3/2] w-[70%] lg:block" data-mask>${pic(rt, 'anello', { alt: '', cls: 'object-[48%_50%]' })}</div>
    </div>
    <div class="lg:col-span-6 lg:col-start-7" data-reveal>
      ${form}
    </div>
  </div>
</section>

${closing(L, { lines: ['Pezzi con', 'intenzione.'], link: L.collezioni, label: 'Torna alle opere', text: 'Il modulo prepara un’email nel tuo programma di posta: nulla viene inviato finché non lo fai tu.' })}`;
  return shell({ title: 'Contatti', desc: 'Scrivi a Gregory Jewels per una commissione, un restauro o per vedere i pezzi su appuntamento.', depth: 1, active: 'contatti', main, extra: contactScript(rt) });
}

/* ---------------------------------------------------------------- 08 negozio (Shop), 09 prodotto, 10 carrello */
const S = tokens({
  small: SMALL, body: BODY, rule: 'border-ink/20',
  label: `${SMALL} text-gold-deep`,
  button: `inline-flex min-h-12 items-center border border-ink px-8 py-4 ${SMALL} transition-colors duration-500 hover:bg-ink hover:text-white`,
  nameCls: 'font-display text-3xl italic leading-tight md:text-4xl', lineCls: 'font-display text-2xl italic md:text-3xl', titleCls: 'font-display text-4xl italic md:text-5xl',
});

export function negozio() {
  const L = links(N, 1); const rt = L.root;
  const cols = [...new Set(PRODUCTS.map((p) => p.col))].map((s) => col(s));
  const chip = `min-h-11 border-b border-transparent px-1 ${SMALL} transition-colors duration-500 hover:border-ink aria-pressed:border-ink`;
  const rows = PRODUCTS.map((p, i) => `<li data-col="${p.col}" class="border-t border-ink/20 last:border-b">
      <a href="${L.prod(p.slug)}" class="group/c grid items-center gap-x-8 gap-y-4 py-6 md:grid-cols-12 md:py-8" data-cursor="Apri">
        <div class="frame aspect-[4/5] w-28 md:col-span-2 md:w-full" data-mask>${pic(rt, p.views[0].img, { alt: '', cls: p.views[0].cls })}</div>
        <h2 class="font-display text-[clamp(2.2rem,5.6vw,6rem)] leading-[.95] tracking-[-.02em] transition-transform duration-700 ease-lux md:col-span-6 md:group-hover/c:translate-x-3 ${i % 2 ? 'italic' : ''}" data-reveal>${p.name}</h2>
        <p class="${SMALL} md:col-span-2" data-reveal>${col(p.col).name}<br><span class="text-mute">${p.short}</span></p>
        <p class="font-display text-3xl md:col-span-2 md:text-right" data-reveal>${money(p.price)}</p>
      </a>
    </li>`).join('\n    ');
  const main = `<section class="relative px-5 pb-16 pt-28 sm:px-10 md:pb-24 lg:px-14" aria-label="Apertura">
  <h1 class="hero-lines ${BIG} text-ink"><span class="line"><span class="block" style="--i:0;--d:.3s">Negozio</span></span></h1>
  <div class="mt-10 flex flex-col justify-between gap-8 md:mt-16 md:flex-row md:items-end">
    <p class="hero-fade max-w-[34ch] text-[.95rem] leading-[1.9]" style="--d:.9s">Sei pezzi dalle collezioni, da richiedere online. Per tutto il resto, c'è il su misura.</p>
    <p class="hero-fade ${SMALL}" style="--d:1s" role="status" data-filter-status>${PRODUCTS.length} pezzi</p>
  </div>
</section>

<section class="${PAD} pb-32 md:pb-52" aria-label="I pezzi">
  <div class="mx-auto max-w-[1760px]">
    <div data-filter-bar hidden class="mb-8 flex flex-wrap gap-x-6 gap-y-2" role="group" aria-label="Filtra per collezione">
      <button type="button" data-filter="all" aria-pressed="true" class="${chip}">Tutti</button>
      ${cols.map((c) => `<button type="button" data-filter="${c.slug}" aria-pressed="false" class="${chip}">${c.name}</button>`).join('\n      ')}
    </div>
    <ul>
    ${rows}
    </ul>
  </div>
</section>

${closing(L, { lines: ['Pezzi con', 'intenzione.'], link: L.contatti, label: 'Chiedi un pezzo su misura' })}`;
  return shell({ title: 'Negozio', desc: 'Il negozio Gregory Jewels: collane, anelli, bracciali e orecchini da richiedere online.', depth: 1, active: 'negozio', main });
}

export function prodotto(p) {
  const L = links(N, 2); const rt = L.root;
  const c = col(p.col);
  const rel = relatedProducts(p.slug);
  const main = `<section class="${PAD} pb-10 pt-28" aria-label="${p.name}">
  <p class="${SMALL} text-mute"><a class="u-link" href="${L.negozio}">Negozio</a> / <a class="u-link" href="${L.col(c.slug)}">${c.name}</a></p>
  <h1 class="hero-lines mt-8 font-display text-[clamp(3.4rem,13vw,15rem)] font-normal leading-[.86] tracking-[-.03em]"><span class="line"><span class="block" style="--i:0;--d:.3s">${p.name}</span></span></h1>
</section>

<section class="${PAD} pb-28 md:pb-44">
  <div class="mx-auto grid max-w-[1760px] gap-12 lg:grid-cols-12 lg:gap-8">
    <div class="frame aspect-[4/5] lg:col-span-6">${pic(rt, p.views[0].img, { eager: true, alt: p.views[0].alt || p.name, cls: p.views[0].cls })}</div>
    <div class="lg:sticky lg:top-24 lg:col-span-5 lg:col-start-8 lg:self-start">
      <p class="font-display text-5xl italic">${money(p.price)}</p>
      <p class="mt-8 max-w-[44ch] ${BODY}">${p.desc}</p>
      <div class="mt-10">${addForm(p, S, L)}</div>
      <dl class="mt-12 border-t border-ink/20">
        ${p.details.map(([k, v]) => `<div class="flex justify-between gap-6 border-b border-ink/20 py-4"><dt class="${SMALL} text-gold-deep">${k}</dt><dd class="text-right font-display text-xl italic">${v}</dd></div>`).join('\n        ')}
      </dl>
      <p class="${S.note} mt-5">Dopo la richiesta ti scriviamo di persona per confermare disponibilità, tempi e spedizione.</p>
    </div>
    <div class="frame aspect-[3/2] lg:col-span-5 lg:col-start-2 lg:-mt-24" data-mask>${pic(rt, p.views[1].img, { alt: p.views[1].alt, cls: p.views[1].cls })}</div>
  </div>
</section>

${rail(rt, L, rel.map((r) => `<a href="${L.prod(r.slug)}" class="group/c block w-[68vw] shrink-0 snap-start sm:w-[34vw] lg:w-[24vw]" data-cursor="Apri">
      <div class="frame aspect-[4/5]">${pic(rt, r.views[0].img, { alt: '', cls: r.views[0].cls })}</div>
      <p class="mt-4 flex items-baseline justify-between gap-4"><span class="font-display text-2xl italic">${r.name}</span><span class="font-display text-xl">${money(r.price)}</span></p>
    </a>`).join('\n    '), { title: 'Altri pezzi', label: 'Altri pezzi del negozio' })}`;
  return shell({ title: p.name, desc: `${p.name} — ${p.short}. ${p.desc}`, depth: 2, active: 'negozio', main, extra: `<script src="${rt}js/rail.js" defer></script>
` });
}

export function carrello() {
  const L = links(N, 1);
  const main = `<section class="relative px-5 pb-16 pt-28 sm:px-10 md:pb-24 lg:px-14" aria-label="Apertura">
  <h1 class="hero-lines ${BIG} text-ink"><span class="line"><span class="block" style="--i:0;--d:.3s">Carrello</span></span></h1>
</section>

<section class="${PAD} pb-32 md:pb-52" aria-label="Il carrello">
  <div class="mx-auto max-w-[1760px]">
${cartBody(L, S)}
  </div>
</section>`;
  return shell({ title: 'Carrello', desc: 'Il tuo carrello Gregory Jewels.', depth: 1, active: 'carrello', main });
}
