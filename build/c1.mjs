// Concept 01 — Editorial Maison. Continues concept-1.html: bone ground, full-bleed photography,
// Cormorant display with one italic line, small uppercase Montserrat, curtain masks and rising lines.
import { COLLECTIONS, MAISON, CRAFT, ARTICLES, SITE, CONTACT, col, art, relatedCollections } from './data.mjs';
import { pic, head, skip, switcher, scripts, contactScript, contactForm, links } from './lib.mjs';

const N = 1;
const WRAP = 'mx-auto grid max-w-[1872px] gap-16 px-5 py-28 sm:px-10 md:py-44 lg:grid-cols-12 lg:gap-8 lg:px-14';
const SMALL = 'text-[.7rem] uppercase tracking-[.22em]';
const BODY = 'text-[.95rem] leading-[1.9] text-mute';
const H2 = 'font-display text-[clamp(2.4rem,5.4vw,5.5rem)] leading-none';

function shell({ title, desc, depth, active, solid = false, main, preload = '', extra = '' }) {
  const L = links(N, depth);
  const rt = L.root;
  const a = (k, label) => `<a class="u-link${active === k ? ' u-link--rest' : ''}" href="${L[k]}"${active === k ? ' aria-current="page"' : ''}>${label}</a>`;
  return `${head({ n: N, title, desc, themeColor: '#0f0f0f', rt, preload })}<body class="bg-bone">
${skip}

<header data-header${solid ? ' data-solid' : ''} class="group fixed inset-x-0 top-0 z-[70] text-white transition-[background-color,color,padding] duration-700 ease-lux [&.is-scrolled]:bg-bone [&.is-scrolled]:text-ink [&.is-scrolled]:shadow-[0_1px_0_var(--color-line)]${solid ? ' is-scrolled' : ''}">
  <div class="hero-fade mx-auto grid max-w-[1872px] grid-cols-[1fr_auto_1fr] items-center px-5 py-5 transition-[padding] duration-700 sm:px-10 lg:px-14 group-[.is-scrolled]:py-3" style="--d:.3s">
    <nav aria-label="Principale" class="hidden items-center gap-9 text-[.7rem] font-normal uppercase tracking-[.22em] lg:flex">
      ${a('collezioni', 'Collezioni')}
      ${a('maison', 'Maison')}
      ${a('atelier', 'Atelier')}
    </nav>
    <a href="${L.home}" aria-label="Gregory Jewels — homepage" class="col-start-1 flex items-center gap-3 lg:col-start-2 lg:justify-center">
      <img class="h-10 w-auto group-[.is-scrolled]:hidden" src="${rt}img/logo-mark-light.png" alt="" width="30" height="44">
      <img class="hidden h-10 w-auto group-[.is-scrolled]:block" src="${rt}img/logo-mark.png" alt="" width="30" height="44">
      <span class="whitespace-nowrap font-display text-[.98rem] tracking-[.22em] sm:text-[1.3rem] sm:tracking-[.28em]">GREGORY JEWELS</span>
    </a>
    <div class="col-start-3 flex items-center justify-end gap-9 text-[.7rem] font-normal uppercase tracking-[.22em]">
      ${a('journal', 'Journal').replace('class="u-link', 'class="hidden lg:inline-block u-link')}
      ${a('contatti', 'Contatti').replace('class="u-link', 'class="hidden lg:inline-block u-link')}
      <button data-menu-toggle type="button" aria-expanded="false" aria-controls="menu" aria-label="Apri il menu" class="-mr-2 inline-flex min-h-11 items-center px-2 uppercase tracking-[.22em] lg:hidden">Menu</button>
    </div>
  </div>
</header>

<div id="menu" data-menu class="invisible fixed inset-0 z-[60] flex flex-col bg-ink px-6 pb-10 pt-24 text-white opacity-0 transition-[opacity,visibility] duration-700 ease-lux [&.is-open]:visible [&.is-open]:opacity-100 lg:hidden">
  <nav aria-label="Menu" class="flex flex-1 flex-col justify-center gap-3 font-display text-[clamp(2.4rem,11vw,4rem)] leading-[1.1]">
    <a href="${L.collezioni}">Collezioni</a><a href="${L.maison}">Maison</a><a href="${L.atelier}">Atelier</a><a href="${L.journal}">Journal</a><a href="${L.contatti}">Contatti</a>
  </nav>
  <p class="text-[.7rem] uppercase tracking-[.22em] text-gold-metal">Su appuntamento · Italia</p>
</div>

<main id="main">
${main}
</main>

<footer class="bg-ink px-5 py-12 text-white sm:px-10 lg:px-14">
  <div class="mx-auto flex max-w-[1760px] flex-col gap-8 text-[.7rem] uppercase tracking-[.2em] text-white/70 md:flex-row md:items-center md:justify-between">
    <a href="${L.home}" class="font-display text-lg tracking-[.28em] text-white">GREGORY JEWELS</a>
    <nav aria-label="Footer" class="flex flex-wrap gap-x-8 gap-y-3">
      <a class="u-link" href="${L.collezioni}">Collezioni</a>
      <a class="u-link" href="${L.maison}">Maison</a>
      <a class="u-link" href="${L.atelier}">Atelier</a>
      <a class="u-link" href="${L.journal}">Journal</a>
      <a class="u-link" href="${L.contatti}">Contatti</a>
      <a class="u-link" href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a>
    </nav>
    <span>© <span data-year>2026</span> · P.IVA 00000000000</span>
  </div>
</footer>

${switcher(N, L)}

${scripts(rt, extra)}</body>
</html>
`;
}

/* opening: full-bleed photograph, headline rises in two lines (same device as the homepage, shorter delays) */
function hero(rt, { img, cls = 'object-center', alt, eyebrow, lines, tail = '' }) {
  return `<section class="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-ink text-white" aria-label="Apertura">
  ${pic(rt, img, { eager: true, alt, cls: `hero-pic absolute inset-0 -z-20 h-full w-full object-cover ${cls}` })}
  <div class="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/30"></div>
  <div class="relative mx-auto w-full max-w-[1872px] px-5 pb-12 sm:px-10 sm:pb-16 lg:px-14 lg:pb-20">
    <p class="hero-fade eyebrow mb-6 text-gold" style="--d:.5s">${eyebrow}</p>
    <h1 class="hero-lines font-display font-normal leading-[.98] tracking-[-.015em] text-[clamp(2.6rem,9vw,8.5rem)]">
      <span class="line"><span style="--i:0;--d:.4s">${lines[0]}</span></span>
      <span class="line"><span style="--i:1;--d:.4s" class="italic">${lines[1]}</span></span>
    </h1>
    ${tail}
  </div>
</section>`;
}

/* a light opening for pages that start on the bone ground (solid header) */
function lightOpen({ eyebrow, lines, text }) {
  return `<section class="mx-auto grid max-w-[1872px] gap-10 px-5 pb-20 pt-40 sm:px-10 md:pb-32 md:pt-52 lg:grid-cols-12 lg:gap-8 lg:px-14">
  <p class="hero-fade eyebrow text-gold-deep lg:col-span-2" style="--d:.4s">${eyebrow}</p>
  <div class="lg:col-span-9 lg:col-start-4">
    <h1 class="hero-lines font-display font-normal leading-[.98] tracking-[-.015em] text-[clamp(2.8rem,8vw,8rem)]">
      <span class="line"><span style="--i:0;--d:.3s">${lines[0]}</span></span>
      <span class="line"><span style="--i:1;--d:.3s" class="italic">${lines[1]}</span></span>
    </h1>
    <p class="hero-fade mt-10 max-w-[44ch] ${BODY}" style="--d:.9s">${text}</p>
  </div>
</section>`;
}

function closing(rt, L, { eyebrow = 'Su appuntamento', lines = MAISON.closing, cta = 'Scrivici', href } = {}) {
  return `<section class="relative isolate flex min-h-[78svh] items-center justify-center overflow-hidden px-5 text-center text-white">
  ${pic(rt, 'contatti', { alt: '', cls: 'absolute inset-0 -z-20 h-full w-full object-cover' })}
  <div class="absolute inset-0 -z-10 bg-ink/60"></div>
  <div>
    <p class="eyebrow mb-8 text-gold" data-reveal>${eyebrow}</p>
    <h2 class="font-display text-[clamp(2.6rem,7vw,7rem)] leading-[1.02]" data-lines>
      <span class="line"><span style="--i:0">${lines[0]}</span></span>
      <span class="line"><span style="--i:1" class="italic">${lines[1]}</span></span>
    </h2>
    <a href="${href || L.contatti}" class="u-link u-link--rest mt-12 text-[.75rem] uppercase tracking-[.24em]" data-reveal>${cta}</a>
  </div>
</section>`;
}

/* ---------------------------------------------------------------- 01 collezioni */
export function collezioni() {
  const L = links(N, 1); const rt = L.root;
  const slots = [
    { s: 'md:col-span-5', ar: 'aspect-[3/4]' },
    { s: 'md:col-span-6 md:col-start-7 md:mt-48', ar: 'aspect-[3/2]' },
    { s: 'md:col-span-7', ar: 'aspect-[3/2]' },
    { s: 'md:col-span-4 md:col-start-9 md:mt-32', ar: 'aspect-[2/3]' },
    { s: 'md:col-span-10 md:col-start-2', ar: 'aspect-[16/9]' },
  ];
  const items = COLLECTIONS.map((c, i) => `
      <a href="${L.col(c.slug)}" class="group/c ${slots[i].s}">
        <div class="frame ${slots[i].ar}" data-mask${i % 2 ? ' style="--d:.15s"' : ''}>
          ${pic(rt, c.img, { alt: '', cls: c.pos })}
        </div>
        <div class="mt-5 flex items-baseline justify-between gap-6" data-reveal>
          <h2 class="font-display text-3xl md:text-4xl">${c.name}</h2>
          <span class="${SMALL} text-mute">${c.tag}</span>
        </div>
        <p class="mt-4 max-w-[40ch] ${BODY}" data-reveal>${c.blurb}</p>
        <span class="u-link mt-5 ${SMALL}" data-reveal>Scopri la collezione</span>
      </a>`).join('\n');
  const main = `${lightOpen({ eyebrow: 'Collezioni', lines: ['Cinque famiglie,', 'un solo banco.'], text: 'Collane, anelli, bracciali, orecchini e i pezzi nati da una commissione. Non un catalogo: un modo di guardare il lavoro, una famiglia alla volta.' })}
<section class="px-5 pb-28 sm:px-10 md:pb-44 lg:px-14" aria-label="Le collezioni">
  <div class="mx-auto max-w-[1760px]">
    <div class="grid gap-y-20 md:grid-cols-12 md:gap-x-8 md:gap-y-28">${items}
    </div>
  </div>
</section>
${closing(rt, L, { eyebrow: 'Dal vivo', lines: ['I pezzi si vedono', 'meglio da vicino.'], cta: 'Chiedi un appuntamento' })}`;
  return shell({ title: 'Collezioni', desc: 'Le collezioni Gregory Jewels: collane, anelli, bracciali, orecchini e pezzi su misura.', depth: 1, active: 'collezioni', solid: true, main });
}

/* ---------------------------------------------------------------- 02 collezione */
export function collezione(c) {
  const L = links(N, 2); const rt = L.root;
  const [r1, r2] = relatedCollections(c.slug);
  const figs = c.pieces.map((p, i) => {
    const spans = ['md:col-span-3', 'md:col-span-5 md:col-start-5', 'md:col-span-3 md:col-start-10'][i];
    const ar = ['aspect-[2/3]', 'aspect-[3/4]', 'aspect-[3/4]'][i];
    return `<figure class="${spans}">
        <div class="frame ${ar}" data-mask${i ? ` style="--d:${i * 0.15}s"` : ''}>${pic(rt, p.img, { alt: p.alt, cls: p.cls })}</div>
        <figcaption class="mt-4 ${SMALL} text-mute" data-reveal>${p.t} · ${p.n}</figcaption>
      </figure>`;
  }).join('\n      ');
  const main = `${hero(rt, { img: c.img, cls: c.pos, eyebrow: 'Collezione', lines: [c.name, c.tag] })}

<section class="${WRAP}">
  <p class="eyebrow text-gold-deep lg:col-span-2" data-reveal>Il racconto</p>
  <div class="lg:col-span-6 lg:col-start-4">
    <p class="font-display text-[clamp(1.9rem,3.7vw,3.6rem)] leading-[1.14] tracking-[-.01em]" data-reveal>${c.lead}</p>
    <p class="mt-10 max-w-[46ch] ${BODY}" data-reveal style="--d:.15s">${c.intro[0]}</p>
  </div>
  <dl class="self-end lg:col-span-3 lg:col-start-10" data-reveal>
    ${c.details.map(([k, v]) => `<div class="border-t border-line py-4"><dt class="${SMALL} text-gold-deep">${k}</dt><dd class="mt-1 font-display text-xl">${v}</dd></div>`).join('\n    ')}
  </dl>
</section>

<section class="bg-stone px-5 py-28 sm:px-10 md:py-44 lg:px-14" aria-labelledby="pezzi">
  <div class="mx-auto max-w-[1760px]">
    <h2 id="pezzi" class="mb-14 ${H2} md:mb-24" data-reveal>Pezzi scelti</h2>
    <div class="grid items-end gap-x-8 gap-y-16 md:grid-cols-12">
      ${figs}
    </div>
  </div>
</section>

<section class="relative h-[70svh] min-h-[420px] overflow-hidden bg-ink" aria-label="Dal banco">
  <div class="absolute inset-x-0 -top-[10%] h-[120%]" data-speed="0.05">${pic(rt, c.support, { alt: '', cls: 'h-full w-full object-cover' })}</div>
  <div class="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"></div>
  <p class="absolute bottom-8 left-5 max-w-[24ch] font-display text-[clamp(1.5rem,3vw,2.6rem)] italic leading-tight text-white sm:left-10 lg:bottom-14 lg:left-14" data-reveal>${c.quote}</p>
</section>

<section class="${WRAP}" aria-labelledby="altre">
  <div class="lg:col-span-4 lg:col-start-2">
    <p class="eyebrow mb-8 text-gold-deep" data-reveal>Continua</p>
    <h2 id="altre" class="font-display text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.06]" data-reveal>Altre collezioni</h2>
    <a href="${L.contatti}" class="u-link mt-10 ${SMALL}" data-reveal>Vedi i pezzi dal vivo</a>
  </div>
  <div class="grid grid-cols-2 gap-5 lg:col-span-6 lg:col-start-7 lg:gap-8">
    ${[r1, r2].map((r, i) => `<a href="${L.col(r.slug)}" class="group/c${i ? ' mt-16' : ''}">
      <div class="frame aspect-[3/4]" data-mask${i ? ' style="--d:.15s"' : ''}>${pic(rt, r.img, { alt: '', cls: r.pos })}</div>
      <div class="mt-4 flex flex-col gap-1" data-reveal><h3 class="font-display text-2xl">${r.name}</h3><span class="${SMALL} text-mute">${r.tag}</span></div>
    </a>`).join('\n    ')}
  </div>
</section>
<div class="px-5 pb-28 text-center sm:px-10 lg:px-14"><a href="${L.collezioni}" class="u-link ${SMALL}">Tutte le collezioni</a></div>`;
  return shell({ title: c.name, desc: `${c.name} — ${c.lead} ${c.tag}.`, depth: 2, active: 'collezioni', main});
}

/* ---------------------------------------------------------------- 03 maison */
export function maison() {
  const L = links(N, 1); const rt = L.root;
  const main = `${hero(rt, { img: 'hero', cls: 'object-[62%_50%] md:object-center', alt: IMGALT_HERO, eyebrow: 'La maison', lines: ['Un disegno,', 'una mano, un tempo.'] })}

<section class="${WRAP}">
  <p class="eyebrow text-gold-deep lg:col-span-2" data-reveal>Il pensiero</p>
  <div class="lg:col-span-6 lg:col-start-4">
    <p class="font-display text-[clamp(1.9rem,3.7vw,3.6rem)] leading-[1.14] tracking-[-.01em]" data-reveal>${MAISON.statement}</p>
    <p class="mt-10 max-w-[46ch] ${BODY}" data-reveal style="--d:.15s">${MAISON.who}</p>
  </div>
  <div class="hidden self-end lg:col-span-3 lg:col-start-10 lg:block">
    <div class="frame aspect-[3/4]" data-mask>${pic(rt, 'intreccio', { cls: 'object-[50%_78%]' })}</div>
  </div>
</section>

<section class="bg-ink text-white">
  <div class="${WRAP}">
    <div class="lg:col-span-5">
      <p class="eyebrow mb-8 text-gold" data-reveal>Come lavoriamo</p>
      <h2 class="font-display text-[clamp(2.2rem,4.2vw,4.2rem)] leading-[1.06]" data-lines>
        <span class="line"><span style="--i:0">Linee classiche,</span></span>
        <span class="line"><span style="--i:1" class="italic">disegno più netto.</span></span>
      </h2>
      <p class="mt-10 max-w-[42ch] text-[.95rem] leading-[1.9] text-white/70" data-reveal>${MAISON.approach}</p>
      <ul class="mt-14 max-w-[42ch] border-t border-white/15" data-reveal>
        ${MAISON.principles.map(([k, v]) => `<li class="flex items-baseline justify-between gap-6 border-b border-white/15 py-4"><span class="font-display text-2xl">${k}</span><span class="text-right text-[.8rem] text-white/60">${v}</span></li>`).join('\n        ')}
      </ul>
    </div>
    <div class="lg:col-span-6 lg:col-start-7">
      <div class="frame aspect-[3/2]" data-mask>${pic(rt, 'mani')}</div>
    </div>
  </div>
</section>

<section class="${WRAP}" aria-labelledby="studio">
  <div class="lg:col-span-4 lg:col-start-2">
    <div class="frame aspect-[4/5]" data-mask>${pic(rt, 'banco')}</div>
  </div>
  <div class="flex flex-col justify-center lg:col-span-5 lg:col-start-7">
    <p class="eyebrow mb-8 text-gold-deep" data-reveal>Lo studio</p>
    <h2 id="studio" class="font-display text-[clamp(1.8rem,3.3vw,3.3rem)] italic leading-[1.16]" data-reveal>«${MAISON.quote.replace(/\.$/, '')}.»</h2>
    <p class="mt-10 max-w-[44ch] ${BODY}" data-reveal style="--d:.1s">${MAISON.studio}</p>
    <a href="${L.atelier}" class="u-link mt-10 ${SMALL}" data-reveal style="--d:.2s">Il lavoro, passo per passo</a>
  </div>
</section>

${closing(rt, L, { lines: MAISON.closing, cta: 'Prenota un appuntamento privato' })}`;
  return shell({ title: 'La Maison', desc: 'Gregory Jewels disegna e costruisce pezzi unici e creazioni su misura. La maison, in poche parole.', depth: 1, active: 'maison', main });
}
const IMGALT_HERO = 'Le mani di un orafo, con la lente sul volto, lavorano un anello d\'oro';

/* ---------------------------------------------------------------- 04 artigianalità */
export function atelier() {
  const L = links(N, 1); const rt = L.root;
  const steps = CRAFT.steps.map((s, i) => {
    const flip = i % 2;
    return `<div class="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
      <div class="${flip ? 'lg:order-2 lg:col-span-5 lg:col-start-8' : 'lg:col-span-5 lg:col-start-2'}">
        <div class="frame ${flip ? 'aspect-[3/4]' : 'aspect-[4/5]'}" data-mask>${pic(rt, s.img, { alt: s.alt, cls: s.cls })}</div>
      </div>
      <div class="${flip ? 'lg:order-1 lg:col-span-4 lg:col-start-2' : 'lg:col-span-4 lg:col-start-8'}">
        <h3 class="font-display text-[clamp(2rem,3.6vw,3.6rem)] leading-[1.04]" data-reveal>${s.t}</h3>
        <p class="mt-6 max-w-[38ch] ${BODY}" data-reveal style="--d:.1s">${s.p}</p>
      </div>
    </div>`;
  }).join('\n    ');
  const close = CRAFT.closeups.map((p, i) => `<figure data-reveal${i ? ` style="--d:${i * 0.12}s"` : ''}>
        <div class="frame aspect-[3/4] bg-ink-soft">${pic(rt, p.img, { alt: p.alt, cls: p.cls })}</div>
        <figcaption class="mt-4 flex justify-between ${SMALL}"><span>${p.t}</span><span class="text-white/55">${p.n}</span></figcaption>
      </figure>`).join('\n      ');
  const main = `<section class="bg-ink text-white">
  <div class="mx-auto grid max-w-[1872px] gap-16 px-5 pb-28 pt-40 sm:px-10 md:pb-44 md:pt-52 lg:grid-cols-12 lg:gap-8 lg:px-14">
    <div class="lg:col-span-5">
      <p class="hero-fade eyebrow mb-8 text-gold" style="--d:.4s">Atelier</p>
      <h1 class="hero-lines font-display text-[clamp(2.8rem,6vw,6rem)] leading-[1.02]">
        <span class="line"><span style="--i:0;--d:.3s">${CRAFT.title[0]}</span></span>
        <span class="line"><span style="--i:1;--d:.3s" class="italic">${CRAFT.title[1]}</span></span>
      </h1>
      <p class="hero-fade mt-10 max-w-[42ch] text-[.95rem] leading-[1.9] text-white/70" style="--d:.9s">${CRAFT.lead}</p>
    </div>
    <div class="grid grid-cols-5 items-start gap-4 lg:col-span-6 lg:col-start-7 lg:gap-8">
      <div class="frame col-span-3 aspect-[4/5]" data-mask>${pic(rt, 'fusione', { eager: true, cls: 'object-[40%_50%]' })}</div>
      <div class="frame col-span-2 mt-24 aspect-[3/4]" data-mask style="--d:.2s">${pic(rt, 'saldatura', { cls: 'object-center' })}</div>
    </div>
  </div>
</section>

<section class="mx-auto max-w-[1872px] px-5 py-28 sm:px-10 md:py-44 lg:px-14" aria-label="I gesti">
  <div class="flex flex-col gap-24 md:gap-40">
    ${steps}
  </div>
</section>

<section class="bg-ink py-28 text-white md:py-44" aria-labelledby="det">
  <div class="mx-auto max-w-[1872px] px-5 sm:px-10 lg:px-14">
    <h2 id="det" class="mb-14 font-display text-[clamp(2.4rem,5vw,5rem)] leading-none md:mb-20" data-reveal>Da vicino</h2>
    <div class="grid gap-x-6 gap-y-12 sm:grid-cols-3">
      ${close}
    </div>
  </div>
</section>

<section class="relative h-[78svh] min-h-[460px] overflow-hidden bg-ink" aria-label="Il gesto">
  <div class="absolute inset-x-0 -top-[10%] h-[120%]" data-speed="0.05">${pic(rt, 'mani', { cls: 'h-full w-full object-cover' })}</div>
  <div class="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"></div>
  <p class="absolute bottom-8 left-5 max-w-[22ch] font-display text-[clamp(1.5rem,3vw,2.6rem)] italic leading-tight text-white sm:left-10 lg:bottom-14 lg:left-14" data-reveal>${CRAFT.quote}</p>
</section>

${closing(rt, L, { eyebrow: 'Il risultato', lines: ['Dal banco', 'alle collezioni.'], cta: 'Guarda le collezioni', href: L.collezioni })}`;
  return shell({ title: 'Atelier', desc: 'Fusione, saldatura, limatura, incastonatura: i gesti del lavoro di Gregory Jewels.', depth: 1, active: 'atelier', main });
}

/* ---------------------------------------------------------------- 05 journal */
export function journal() {
  const L = links(N, 1); const rt = L.root;
  const [f, ...rest] = ARTICLES;
  const slots = [
    { s: 'md:col-span-5', ar: 'aspect-[4/5]' },
    { s: 'md:col-span-6 md:col-start-7 md:mt-40', ar: 'aspect-[3/2]' },
    { s: 'md:col-span-5 md:col-start-2', ar: 'aspect-[3/2]' },
  ];
  const cards = rest.map((a, i) => `<a href="${L.art(a.slug)}" class="group/c ${slots[i].s}">
        <div class="frame ${slots[i].ar}" data-mask>${pic(rt, a.img, { alt: '', cls: a.pos })}</div>
        <p class="mt-5 ${SMALL} text-gold-deep" data-reveal>${a.cat}</p>
        <h3 class="mt-2 font-display text-3xl md:text-4xl" data-reveal>${a.title}</h3>
        <p class="mt-3 max-w-[40ch] ${BODY}" data-reveal>${a.excerpt}</p>
      </a>`).join('\n      ');
  const main = `${lightOpen({ eyebrow: 'Journal', lines: ['Appunti dal banco,', 'una pietra alla volta.'], text: 'Poche pagine, scritte con calma: il lavoro, le pietre, le commissioni.' })}

<section class="px-5 pb-28 sm:px-10 md:pb-44 lg:px-14" aria-label="In evidenza">
  <a href="${L.art(f.slug)}" class="group/c mx-auto grid max-w-[1760px] items-end gap-10 lg:grid-cols-12 lg:gap-8">
    <div class="frame aspect-[4/3] lg:col-span-8" data-mask>${pic(rt, f.img, { alt: '', cls: f.pos })}</div>
    <div class="lg:col-span-4">
      <p class="${SMALL} text-gold-deep" data-reveal>In evidenza · ${f.cat}</p>
      <h2 class="mt-4 font-display text-[clamp(2rem,3.6vw,3.6rem)] leading-[1.06]" data-reveal>${f.title}</h2>
      <p class="mt-5 max-w-[36ch] ${BODY}" data-reveal>${f.excerpt}</p>
      <span class="u-link mt-8 ${SMALL}" data-reveal>Leggi</span>
    </div>
  </a>
</section>

<section class="bg-stone px-5 py-28 sm:px-10 md:py-44 lg:px-14" aria-label="Altri articoli">
  <div class="mx-auto max-w-[1760px]">
    <div class="grid gap-x-8 gap-y-20 md:grid-cols-12 md:gap-y-28">
      ${cards}
    </div>
  </div>
</section>

${closing(rt, L, { eyebrow: 'Una domanda?', lines: ['Scrivici,', 'rispondiamo di persona.'], cta: 'Contatti' })}`;
  return shell({ title: 'Journal', desc: 'Il journal di Gregory Jewels: il lavoro al banco, le pietre, le commissioni.', depth: 1, active: 'journal', solid: true, main });
}

/* ---------------------------------------------------------------- 06 articolo */
export function articolo(a) {
  const L = links(N, 2); const rt = L.root;
  const c = col(a.related);
  const idx = ARTICLES.findIndex((x) => x.slug === a.slug);
  const next = ARTICLES[(idx + 1) % ARTICLES.length];
  const P = 'text-[1.02rem] leading-[1.95] text-ink/85';
  const main = `<article>
  <header class="mx-auto max-w-[1200px] px-5 pb-14 pt-40 text-center sm:px-10 md:pt-52">
    <p class="hero-fade eyebrow text-gold-deep" style="--d:.3s">${a.cat}</p>
    <h1 class="hero-lines mt-8 font-display text-[clamp(2.6rem,6.4vw,6.4rem)] font-normal leading-[1] tracking-[-.015em]">
      <span class="line"><span style="--i:0;--d:.3s">${a.title}</span></span>
    </h1>
    <p class="hero-fade mx-auto mt-8 max-w-[40ch] font-display text-2xl italic leading-snug text-mute" style="--d:.8s">${a.excerpt}</p>
  </header>

  <div class="mx-auto max-w-[1560px] px-5 sm:px-10">
    <div class="frame aspect-[4/3] sm:aspect-[16/9]" data-mask>${pic(rt, a.lead, { eager: true, alt: '', cls: a.pos })}</div>
    <p class="mt-4 ${SMALL} text-mute">${a.cap1}</p>
  </div>

  <div class="mx-auto max-w-[62ch] px-5 py-20 sm:px-10 md:py-28 sm:max-w-[calc(62ch+5rem)]">
    ${a.paras.map((p, i) => `<p class="${P}${i ? ' mt-7' : ''}" data-reveal>${p}</p>`).join('\n    ')}
  </div>

  <blockquote class="mx-auto max-w-[24ch] px-5 py-6 text-center font-display text-[clamp(2rem,4vw,3.8rem)] italic leading-[1.12]" data-reveal>«${a.quote}»</blockquote>

  <div class="mx-auto mt-20 grid max-w-[1560px] items-end gap-6 px-5 sm:px-10 md:grid-cols-12 md:gap-8">
    <div class="frame aspect-[4/5] md:col-span-4 md:col-start-2" data-mask>${pic(rt, a.second, { alt: '', cls: 'object-center' })}</div>
    <p class="${SMALL} text-mute md:col-span-4 md:col-start-7 md:pb-2" data-reveal>${a.cap2}</p>
  </div>

  <div class="mx-auto max-w-[62ch] px-5 py-20 sm:px-10 md:py-28 sm:max-w-[calc(62ch+5rem)]">
    ${a.paras2.map((p) => `<p class="${P}" data-reveal>${p}</p>`).join('\n    ')}
  </div>
</article>

<section class="bg-stone px-5 py-24 sm:px-10 md:py-36 lg:px-14" aria-label="Continua">
  <div class="mx-auto grid max-w-[1760px] gap-12 md:grid-cols-2 md:gap-8">
    <a href="${L.col(c.slug)}" class="group/c grid grid-cols-5 items-end gap-5">
      <div class="frame col-span-2 aspect-[3/4]" data-mask>${pic(rt, c.img, { alt: '', cls: c.pos })}</div>
      <div class="col-span-3"><p class="${SMALL} text-gold-deep">La collezione</p><h2 class="mt-2 font-display text-3xl">${c.name}</h2><span class="u-link mt-4 ${SMALL}">Scopri</span></div>
    </a>
    <a href="${L.art(next.slug)}" class="group/c grid grid-cols-5 items-end gap-5">
      <div class="frame col-span-2 aspect-[3/4]" data-mask style="--d:.15s">${pic(rt, next.img, { alt: '', cls: next.pos })}</div>
      <div class="col-span-3"><p class="${SMALL} text-gold-deep">Leggi ancora</p><h2 class="mt-2 font-display text-3xl">${next.title}</h2><span class="u-link mt-4 ${SMALL}">Leggi</span></div>
    </a>
  </div>
  <p class="mt-16 text-center"><a href="${L.journal}" class="u-link ${SMALL}">Torna al journal</a></p>
</section>`;
  return shell({ title: a.title, desc: a.excerpt, depth: 2, active: 'journal', solid: true, main });
}

/* ---------------------------------------------------------------- 07 contatti */
export function contatti() {
  const L = links(N, 1); const rt = L.root;
  const form = contactForm({
    form: 'grid gap-9', field: 'flex flex-col', actions: 'flex flex-col items-start gap-5 sm:flex-row sm:items-center',
    label: `${SMALL} text-gold-deep`,
    input: 'mt-2 w-full border-0 border-b border-ink/30 bg-transparent px-0 py-3 text-[1rem] text-ink outline-none transition-colors duration-500 placeholder:text-mute focus:border-ink focus-visible:outline-none aria-[invalid=true]:border-[#8a2b1f]',
    err: 'mt-2 text-[.8rem] text-[#8a2b1f]',
    button: `min-h-12 border border-ink px-8 py-4 ${SMALL} transition-colors duration-500 hover:bg-ink hover:text-white`,
    status: 'text-[.85rem] leading-[1.7] text-mute sm:max-w-[34ch]',
    note: 'max-w-[46ch] text-[.8rem] leading-[1.8] text-mute',
  });
  const main = `${hero(rt, { img: 'contatti', alt: '', cls: 'object-center', eyebrow: 'Contatti', lines: ['Raccontaci', 'cosa vuoi custodire.'] })}

<section class="${WRAP}">
  <div class="lg:col-span-4 lg:col-start-2">
    <p class="font-display text-[clamp(1.7rem,2.6vw,2.4rem)] leading-[1.2]" data-reveal>${CONTACT.lead}</p>
    <dl class="mt-14 border-t border-line" data-reveal>
      <div class="border-b border-line py-5"><dt class="${SMALL} text-gold-deep">Email</dt><dd class="mt-2"><a class="u-link font-display text-2xl" href="mailto:${SITE.email}">${SITE.email}</a></dd></div>
      <div class="border-b border-line py-5"><dt class="${SMALL} text-gold-deep">Instagram</dt><dd class="mt-2"><a class="u-link font-display text-2xl" href="${SITE.instagram}" target="_blank" rel="noopener">@gregoryjewels</a></dd></div>
      <div class="border-b border-line py-5"><dt class="${SMALL} text-gold-deep">Visite</dt><dd class="mt-2 font-display text-2xl">Su appuntamento</dd></div>
    </dl>
  </div>
  <div class="lg:col-span-5 lg:col-start-7" data-reveal>
    ${form}
  </div>
</section>`;
  return shell({ title: 'Contatti', desc: 'Scrivi a Gregory Jewels per una commissione, un restauro o per vedere i pezzi su appuntamento.', depth: 1, active: 'contatti', main, extra: contactScript(rt) });
}
