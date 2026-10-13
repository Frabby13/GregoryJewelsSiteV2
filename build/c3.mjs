// Concept 03 — Modern Luxury. Continues concept-3.html: white ground, 12-column grid, hairline rules,
// inset-to-full-bleed opening, wipe reveals (data-mask-x), drawn lines and a hover-fill closing band.
import { COLLECTIONS, MAISON, CRAFT, ARTICLES, SITE, CONTACT, col, relatedCollections } from './data.mjs';
import { pic, head, skip, switcher, scripts, contactScript, contactForm, links } from './lib.mjs';

const N = 3;
const LABEL = 'text-[.7rem] uppercase tracking-[.2em]';
const BODY = 'text-[.95rem] leading-[1.9] text-mute';
const WRAP = 'mx-auto max-w-[1872px] px-5 sm:px-10 lg:px-14';
const H2 = 'font-display text-[clamp(2.2rem,4.6vw,4.6rem)] leading-none';

function shell({ title, desc, depth, active, solid = false, main, hdrDelay = '.3s', extra = '' }) {
  const L = links(N, depth);
  const rt = L.root;
  const a = (k, label) => `<a class="u-link${active === k ? ' u-link--rest' : ''}" href="${L[k]}"${active === k ? ' aria-current="page"' : ''}>${label}</a>`;
  return `${head({ n: N, title, desc, themeColor: '#ffffff', rt })}<body class="bg-paper">
${skip}

<header data-header${solid ? ' data-solid' : ''} class="group fixed inset-x-0 top-0 z-[70] text-white transition-[background-color,color] duration-700 ease-lux [&.is-scrolled]:bg-paper [&.is-scrolled]:text-ink [&.is-scrolled]:shadow-[0_1px_0_var(--color-line)]${solid ? ' is-scrolled' : ''}">
  <div class="hero-fade mx-auto grid max-w-[1872px] grid-cols-[auto_1fr_auto] items-center gap-8 px-5 py-5 sm:px-10 lg:px-14" style="--d:${hdrDelay}">
    <a href="${L.home}" aria-label="Gregory Jewels — homepage" class="flex items-center gap-3">
      <img class="h-9 w-auto group-[.is-scrolled]:hidden" src="${rt}img/logo-mark-light.png" alt="" width="30" height="44">
      <img class="hidden h-9 w-auto group-[.is-scrolled]:block" src="${rt}img/logo-mark.png" alt="" width="30" height="44">
      <span class="whitespace-nowrap font-display text-[.98rem] tracking-[.2em] sm:text-xl sm:tracking-[.24em]">GREGORY JEWELS</span>
    </a>
    <nav aria-label="Principale" class="hidden justify-center gap-10 ${LABEL} lg:flex">
      ${a('collezioni', 'Collezioni')}
      ${a('maison', 'Maison')}
      ${a('atelier', 'Atelier')}
      ${a('journal', 'Journal')}
    </nav>
    <div class="col-start-3 flex items-center gap-6 ${LABEL}">
      <a href="${L.contatti}" class="hidden border border-current px-5 py-3 transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-ink sm:inline-block"${active === 'contatti' ? ' aria-current="page"' : ''}>Prenota</a>
      <button data-menu-toggle type="button" aria-expanded="false" aria-controls="menu" aria-label="Apri il menu" class="-mr-2 inline-flex min-h-11 items-center px-2 uppercase tracking-[.2em] lg:hidden">Menu</button>
    </div>
  </div>
</header>
<div id="menu" data-menu class="invisible fixed inset-0 z-[60] flex flex-col bg-ink px-6 pb-10 pt-24 text-white opacity-0 transition-[opacity,visibility] duration-700 ease-lux [&.is-open]:visible [&.is-open]:opacity-100 lg:hidden">
  <nav aria-label="Menu" class="flex flex-1 flex-col justify-center divide-y divide-white/15 font-display text-[clamp(2rem,9vw,3rem)]">
    <a class="py-4" href="${L.collezioni}">Collezioni</a><a class="py-4" href="${L.maison}">Maison</a><a class="py-4" href="${L.atelier}">Atelier</a><a class="py-4" href="${L.journal}">Journal</a><a class="py-4 text-gold" href="${L.contatti}">Prenota un appuntamento</a>
  </nav>
</div>

<main id="main">
${main}
</main>

<footer class="bg-ink px-5 pb-24 pt-16 text-white sm:px-10 lg:px-14">
  <div class="mx-auto grid max-w-[1760px] gap-12 md:grid-cols-12">
    <div class="md:col-span-5">
      <a href="${L.home}" aria-label="Gregory Jewels — homepage"><img class="h-12 w-auto" src="${rt}img/logo-mark-light.png" alt="Gregory Jewels" width="30" height="44" loading="lazy"></a>
      <p class="mt-6 max-w-[30ch] font-display text-2xl italic text-white/80">${MAISON.motto}</p>
    </div>
    <nav aria-label="Footer" class="grid grid-cols-2 gap-8 text-[.75rem] uppercase tracking-[.18em] text-white/70 md:col-span-6 md:col-start-7">
      <ul class="space-y-3"><li><a class="u-link" href="${L.collezioni}">Collezioni</a></li><li><a class="u-link" href="${L.maison}">Maison</a></li><li><a class="u-link" href="${L.atelier}">Atelier</a></li><li><a class="u-link" href="${L.journal}">Journal</a></li></ul>
      <ul class="space-y-3"><li><a class="u-link" href="${L.contatti}">Contatti</a></li><li><a class="u-link" href="${SITE.instagram}" target="_blank" rel="noopener">Instagram</a></li><li><a class="u-link" href="mailto:${SITE.email}">Email</a></li></ul>
    </nav>
  </div>
  <p class="mx-auto mt-16 max-w-[1760px] border-t border-white/15 pt-6 text-[.7rem] uppercase tracking-[.2em] text-white/50">© <span data-year>2026</span> Gregory Jewels · P.IVA 00000000000</p>
</footer>

${switcher(N, L)}

${scripts(rt, extra)}</body>
</html>
`;
}

/* inset-to-full-bleed opening, headline bottom-left, thin rule — as the homepage film, with a still */
function hero(rt, { img, cls = 'object-center', alt = '', lines, meta, href, cta }) {
  return `<section class="relative h-[88svh] min-h-[520px] bg-paper" aria-label="Apertura">
  <div class="hero-frame absolute inset-0 overflow-hidden bg-ink">
    ${pic(rt, img, { eager: true, alt, cls: `hero-pic h-full w-full object-cover ${cls}` })}
    <div class="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/35"></div>
  </div>
  <div class="absolute inset-x-0 bottom-0 text-white">
    <div class="mx-auto grid max-w-[1872px] items-end gap-6 px-5 pb-8 sm:px-10 md:grid-cols-12 lg:px-14 lg:pb-12">
      <h1 class="hero-lines font-display text-[clamp(2.8rem,7.2vw,7.6rem)] font-normal leading-[.96] tracking-[-.015em] md:col-span-8">
        <span class="line"><span style="--i:0;--d:1.5s">${lines[0]}</span></span>
        <span class="line"><span style="--i:1;--d:1.5s" class="italic">${lines[1]}</span></span>
      </h1>
      <div class="hero-fade flex items-center justify-between gap-6 ${LABEL} md:col-span-4 md:justify-end" style="--d:2.2s">
        <span class="text-white/70">${meta}</span>
        ${href ? `<a href="${href}" class="u-link">${cta}</a>` : ''}
      </div>
      <div class="hero-rule h-px bg-white/40 md:col-span-12" style="--d:1.9s"></div>
    </div>
  </div>
</section>`;
}

/* a light opening for pages that start on white: label left, headline right */
function lightOpen({ label, lines, text }) {
  return `<section class="${WRAP} pb-20 pt-40 md:pb-32 md:pt-52">
  <div class="grid gap-10 lg:grid-cols-12 lg:gap-8">
    <p class="hero-fade ${LABEL} text-gold-deep lg:col-span-2" style="--d:.3s">${label}</p>
    <h1 class="hero-lines font-display text-[clamp(2.6rem,6.4vw,6.8rem)] font-normal leading-[1.02] tracking-[-.015em] lg:col-span-9 lg:col-start-4">
      <span class="line"><span style="--i:0;--d:.3s">${lines[0]}</span></span>
      <span class="line"><span style="--i:1;--d:.3s" class="italic">${lines[1]}</span></span>
    </h1>
  </div>
  ${text ? `<p class="hero-fade mt-10 max-w-[46ch] ${BODY} lg:ml-[calc(25%+.5rem)]" style="--d:.8s">${text}</p>` : ''}
</section>`;
}

/* hover-fill closing band, as on the homepage */
function band(L, { label = 'Contatti', html = 'Prenota un<br><em>appuntamento privato</em>', href }) {
  return `<section class="border-t border-line" aria-label="${label}">
  <a href="${href || L.contatti}" class="group/cta relative block overflow-hidden px-5 py-20 sm:px-10 md:py-36 lg:px-14">
    <span class="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-700 ease-cine group-hover/cta:scale-y-100 group-focus-visible/cta:scale-y-100" aria-hidden="true"></span>
    <span class="relative mx-auto flex max-w-[1760px] flex-col gap-6 transition-colors duration-700 group-hover/cta:text-white group-focus-visible/cta:text-white md:flex-row md:items-end md:justify-between">
      <span>
        <span class="block ${LABEL} text-gold-deep">${label}</span>
        <span class="mt-5 block font-display text-[clamp(2.6rem,8vw,8.5rem)] leading-[.98] tracking-[-.015em]">${html}</span>
      </span>
      <span class="font-display text-5xl transition-transform duration-700 ease-lux group-hover/cta:translate-x-3 md:text-7xl" aria-hidden="true">→</span>
    </span>
  </a>
</section>`;
}

const swap = `<script>
  (function () {
    var slides = document.querySelectorAll('[data-slide]');
    var links = document.querySelectorAll('#pieces a');
    function show(name) {
      slides.forEach(function (s) { s.style.opacity = s.dataset.slide === name ? '1' : '0'; });
      links.forEach(function (l) { l.classList.toggle('text-gold-deep', l.dataset.target === name); });
    }
    links.forEach(function (l) {
      ['pointerenter', 'focus'].forEach(function (ev) { l.addEventListener(ev, function () { show(l.dataset.target); }); });
    });
    show('${COLLECTIONS[0].slug}');
  })();
</script>
`;

/* ---------------------------------------------------------------- 01 collezioni */
export function collezioni() {
  const L = links(N, 1); const rt = L.root;
  const slides = COLLECTIONS.map((c, i) => pic(rt, c.img, { alt: i === 0 ? c.name : '', cls: `absolute inset-0 ${c.pos} ${i ? 'opacity-0 ' : ''}transition-opacity duration-[900ms] ease-lux`, attrs: `data-slide="${c.slug}"` })).join('\n        ');
  const items = COLLECTIONS.map((c) => `<li><a href="${L.col(c.slug)}" data-target="${c.slug}" class="group/p flex items-baseline justify-between gap-6 border-b border-ink/15 py-5 font-display text-3xl transition-[padding] duration-500 ease-lux hover:pl-3 focus-visible:pl-3 md:text-4xl"><span>${c.name}</span><span class="hidden text-right ${LABEL} font-sans text-mute sm:block">${c.tag}</span><span aria-hidden="true" class="text-gold-deep opacity-0 transition-opacity duration-500 group-hover/p:opacity-100 group-focus-visible/p:opacity-100">→</span></a></li>`).join('\n        ');
  const main = `${lightOpen({ label: 'Collezioni', lines: ['Cinque famiglie', 'di pezzi.'], text: 'Collane, anelli, bracciali, orecchini e i pezzi nati da una commissione. Scorri l\'elenco: l\'immagine cambia con il tuo sguardo.' })}

<section class="bg-bone py-20 md:py-32" aria-label="Elenco delle collezioni">
  <div class="${WRAP} grid gap-12 lg:grid-cols-12 lg:gap-8">
    <div class="lg:col-span-7">
      <div class="frame aspect-[4/5] sm:aspect-[5/4] lg:aspect-[6/5]" data-mask-x>
        ${slides}
      </div>
    </div>
    <div class="flex flex-col justify-between lg:col-span-4 lg:col-start-9">
      <p class="${LABEL} text-gold-deep" data-reveal>Entra in una famiglia</p>
      <ul class="mt-12 border-t border-ink/15 lg:mt-0" id="pieces" data-reveal>
        ${items}
      </ul>
    </div>
  </div>
</section>

<section class="${WRAP} py-24 md:py-40" aria-label="Principi">
  <dl class="grid border-t border-line md:grid-cols-3">
    ${MAISON.principles.map(([k, v], i) => `<div class="border-b border-line py-8 md:border-b-0 md:px-8 ${i === 0 ? 'md:border-r md:pl-0' : i === 1 ? 'md:border-r' : 'md:pr-0'}" data-reveal${i ? ` style="--d:${i * 0.12}s"` : ''}><dt class="${LABEL} text-gold-deep">${k}</dt><dd class="mt-3 font-display text-3xl">${v}</dd></div>`).join('\n    ')}
  </dl>
</section>

${band(L, { label: 'Dal vivo', html: 'Vedi i pezzi<br><em>dal vivo</em>' })}`;
  return shell({ title: 'Collezioni', desc: 'Le collezioni Gregory Jewels: collane, anelli, bracciali, orecchini e pezzi su misura.', depth: 1, active: 'collezioni', solid: true, main, extra: swap });
}

/* ---------------------------------------------------------------- 02 collezione */
export function collezione(c) {
  const L = links(N, 2); const rt = L.root;
  const [r1, r2] = relatedCollections(c.slug);
  const figs = c.pieces.map((p, i) => `<figure data-reveal${i ? ` style="--d:${i * 0.12}s"` : ''}>
        <div class="frame aspect-[3/4] bg-ink-soft">${pic(rt, p.img, { alt: p.alt, cls: p.cls })}</div>
        <figcaption class="mt-4 flex justify-between gap-4 ${LABEL}"><span>${p.t}</span><span class="text-white/55">${p.n}</span></figcaption>
      </figure>`).join('\n      ');
  const main = `${hero(rt, { img: c.img, cls: c.pos, alt: IMGALT[c.img], lines: [c.name, c.tag], meta: 'Collezione', href: '#pezzi', cta: 'Scopri' })}

<section class="${WRAP} py-28 md:py-44">
  <div class="grid gap-14 lg:grid-cols-12 lg:gap-8">
    <p class="${LABEL} text-gold-deep lg:col-span-2" data-reveal>La collezione</p>
    <div class="lg:col-span-8 lg:col-start-4">
      <h2 class="font-display text-[clamp(2rem,4.2vw,4.4rem)] leading-[1.1] tracking-[-.01em]" data-reveal>${c.lead}</h2>
      <p class="mt-10 max-w-[48ch] ${BODY}" data-reveal>${c.intro[0]}</p>
    </div>
  </div>
  <dl class="mt-20 grid border-t border-line md:mt-32 md:grid-cols-${c.details.length}">
    ${c.details.map(([k, v], i) => `<div class="border-b border-line py-8 md:border-b-0 ${i < c.details.length - 1 ? 'md:border-r' : ''} md:px-8 ${i === 0 ? 'md:pl-0' : ''} ${i === c.details.length - 1 ? 'md:pr-0' : ''}" data-reveal${i ? ` style="--d:${i * 0.12}s"` : ''}><dt class="${LABEL} text-gold-deep">${k}</dt><dd class="mt-3 font-display text-3xl">${v}</dd></div>`).join('\n    ')}
  </dl>
</section>

<section id="pezzi" class="bg-ink py-28 text-white md:py-44" aria-labelledby="pz">
  <div class="${WRAP}">
    <div class="mb-14 flex items-end justify-between md:mb-20">
      <h2 id="pz" class="${H2}" data-reveal>Pezzi scelti</h2>
      <p class="hidden ${LABEL} text-white/60 md:block" data-reveal>Da vicino</p>
    </div>
    <div class="grid gap-x-6 gap-y-12 sm:grid-cols-3">
      ${figs}
    </div>
  </div>
</section>

<section class="${WRAP} grid items-center gap-14 py-28 md:py-44 lg:grid-cols-12 lg:gap-8" aria-label="Dal banco">
  <div class="lg:col-span-5">
    <p class="${LABEL} text-gold-deep" data-reveal>Dal banco</p>
    <p class="mt-6 font-display text-[clamp(2.2rem,4vw,4.2rem)] leading-[1.06]" data-reveal>${c.quote}</p>
  </div>
  <div class="lg:col-span-6 lg:col-start-7">
    <div class="frame aspect-[3/2]" data-mask-x>${pic(rt, c.support, { alt: '' })}</div>
  </div>
</section>

<section class="${WRAP} pb-28 md:pb-44" aria-labelledby="altre">
  <div class="mb-10 flex items-end justify-between border-b border-line pb-6">
    <h2 id="altre" class="${LABEL} text-gold-deep">Altre collezioni</h2>
    <a href="${L.collezioni}" class="u-link ${LABEL}">Tutte</a>
  </div>
  <div class="grid gap-6 md:grid-cols-2 md:gap-8">
    ${[r1, r2].map((r, i) => `<a href="${L.col(r.slug)}" class="group/o">
      <div class="frame aspect-[3/2]" data-mask-x${i ? ' style="--d:.2s"' : ''}>${pic(rt, r.img, { alt: '', cls: r.pos })}</div>
      <p class="mt-4 flex justify-between ${LABEL}"><span>${r.name}</span><span class="text-mute transition-transform duration-500 group-hover/o:translate-x-1">${r.tag} →</span></p>
    </a>`).join('\n    ')}
  </div>
</section>

${band(L, { html: 'Vedi i pezzi<br><em>dal vivo</em>' })}`;
  return shell({ title: c.name, desc: `${c.name} — ${c.lead} ${c.tag}.`, depth: 2, active: 'collezioni', main, hdrDelay: '1.6s' });
}
const IMGALT = {
  collana: 'Tre collane in oro con una pietra blu sfaccettata e un ciondolo a mezzaluna',
  anello: 'Anello solitario in oro bianco e rosa con diamante e contorno di brillanti',
  bracciale: 'Bracciale rigido in oro con un motivo a goccia e brillanti',
  pendenti: 'Orecchini pendenti con zaffiro blu e cristalli su una foglia verde',
  collier: 'Collier in oro con smeraldi accanto al suo bozzetto',
};

/* ---------------------------------------------------------------- 03 maison */
export function maison() {
  const L = links(N, 1); const rt = L.root;
  const main = `${hero(rt, { img: 'hero', cls: 'object-[62%_50%] md:object-center', alt: 'Le mani di un orafo, con la lente sul volto, lavorano un anello d\'oro', lines: ['Proporzioni,', 'non marchio.'], meta: 'La maison', href: '#idea', cta: 'Scopri' })}

<section id="idea" class="${WRAP} py-28 md:py-44">
  <div class="grid gap-14 lg:grid-cols-12 lg:gap-8">
    <p class="${LABEL} text-gold-deep lg:col-span-2" data-reveal>La maison</p>
    <h2 class="font-display text-[clamp(2rem,4.2vw,4.4rem)] leading-[1.1] tracking-[-.01em] lg:col-span-8 lg:col-start-4" data-reveal>${MAISON.statement}</h2>
  </div>
  <dl class="mt-20 grid border-t border-line md:mt-32 md:grid-cols-3">
    ${MAISON.principles.map(([k, v], i) => `<div class="border-b border-line py-8 md:border-b-0 md:px-8 ${i === 0 ? 'md:border-r md:pl-0' : i === 1 ? 'md:border-r' : 'md:pr-0'}" data-reveal${i ? ` style="--d:${i * 0.12}s"` : ''}><dt class="${LABEL} text-gold-deep">${k}</dt><dd class="mt-3 font-display text-3xl">${v}</dd></div>`).join('\n    ')}
  </dl>
</section>

<section class="bg-bone ${WRAP.replace('mx-auto max-w-[1872px] ', '')} py-28 md:py-44">
  <div class="mx-auto grid max-w-[1872px] items-center gap-14 lg:grid-cols-12 lg:gap-8">
    <div class="lg:col-span-5">
      <p class="${LABEL} text-gold-deep" data-reveal>Come lavoriamo</p>
      <h2 class="mt-6 font-display text-[clamp(2.2rem,4vw,4.2rem)] leading-[1.06]" data-reveal>Dare forma a ciò che si ricorda.</h2>
      <p class="mt-8 max-w-[44ch] ${BODY}" data-reveal>${MAISON.who}</p>
      <p class="mt-6 max-w-[44ch] ${BODY}" data-reveal>${MAISON.approach}</p>
    </div>
    <div class="lg:col-span-6 lg:col-start-7">
      <div class="frame aspect-[3/2]" data-mask-x>${pic(rt, 'mani')}</div>
    </div>
  </div>
</section>

<section class="${WRAP} grid items-center gap-14 py-28 md:py-44 lg:grid-cols-12 lg:gap-8" aria-labelledby="studio">
  <div class="lg:col-span-4">
    <div class="frame aspect-[4/5]" data-mask-x>${pic(rt, 'banco')}</div>
  </div>
  <div class="lg:col-span-6 lg:col-start-7">
    <p class="${LABEL} text-gold-deep" data-reveal>Lo studio</p>
    <h2 id="studio" class="mt-6 font-display text-[clamp(2.2rem,4vw,4.2rem)] leading-[1.06]" data-reveal>Un banco, una lente, molta luce.</h2>
    <p class="mt-8 max-w-[44ch] ${BODY}" data-reveal>${MAISON.studio}</p>
    <a href="${L.atelier}" class="u-link mt-10 ${LABEL}" data-reveal>Il lavoro, passo per passo</a>
  </div>
</section>

<section class="bg-stone px-5 py-32 text-center sm:px-10 md:py-52 lg:px-14" aria-label="Filosofia">
  <img class="mx-auto mb-12 h-16 w-auto" src="${rt}img/logo-mark.png" alt="" width="30" height="44" loading="lazy" data-reveal>
  <p class="mx-auto max-w-[24ch] font-display text-[clamp(2rem,4.6vw,4.8rem)] italic leading-[1.1]" data-reveal>${MAISON.motto}</p>
  <p class="mt-10 ${LABEL} text-gold-deep" data-reveal>Filosofia</p>
</section>

${band(L, { html: 'Raccontaci<br><em>cosa vuoi custodire</em>' })}`;
  return shell({ title: 'La Maison', desc: 'Gregory Jewels disegna e costruisce pezzi unici e creazioni su misura. La maison, in poche parole.', depth: 1, active: 'maison', main, hdrDelay: '1.6s' });
}

/* ---------------------------------------------------------------- 04 atelier */
export function atelier() {
  const L = links(N, 1); const rt = L.root;
  const steps = CRAFT.steps.map((s, i) => `<li data-reveal${i ? ` style="--d:${i * 0.12}s"` : ''}><div class="draw mb-6 h-px bg-ink"></div><h3 class="font-display text-3xl">${s.t}</h3><p class="mt-3 text-[.9rem] leading-[1.8] text-mute">${s.p}</p></li>`).join('\n    ');
  const close = CRAFT.closeups.map((p, i) => `<figure data-reveal${i ? ` style="--d:${i * 0.12}s"` : ''}>
        <div class="frame aspect-[3/4] bg-ink-soft">${pic(rt, p.img, { alt: p.alt, cls: p.cls })}</div>
        <figcaption class="mt-4 flex justify-between ${LABEL}"><span>${p.t}</span><span class="text-white/55">${p.n}</span></figcaption>
      </figure>`).join('\n      ');
  const main = `${lightOpen({ label: 'Atelier', lines: CRAFT.title, text: CRAFT.lead })}

<section class="${WRAP} pb-28 md:pb-44" aria-label="I quattro gesti">
  <ol class="grid gap-12 md:grid-cols-4 md:gap-8">
    ${steps}
  </ol>
  <div class="mt-20 grid gap-6 md:mt-28 md:grid-cols-12 md:gap-8">
    <div class="frame aspect-[4/3] md:col-span-7" data-mask-x>${pic(rt, 'fusione', { eager: true })}</div>
    <div class="frame aspect-[4/3] md:col-span-5 md:mt-24" data-mask-x style="--d:.2s">${pic(rt, 'saldatura')}</div>
  </div>
</section>

<section class="bg-ink py-28 text-white md:py-44" aria-labelledby="det">
  <div class="${WRAP}">
    <div class="mb-14 flex items-end justify-between md:mb-20">
      <h2 id="det" class="${H2}" data-reveal>Dettagli</h2>
      <p class="hidden ${LABEL} text-white/60 md:block" data-reveal>Da vicino</p>
    </div>
    <div class="grid gap-x-6 gap-y-12 sm:grid-cols-3">
      ${close}
    </div>
  </div>
</section>

<section class="${WRAP} grid items-center gap-14 py-28 md:py-44 lg:grid-cols-12 lg:gap-8" aria-label="Il gesto">
  <div class="lg:col-span-6">
    <div class="frame aspect-[3/2]" data-mask-x>${pic(rt, 'incastona')}</div>
  </div>
  <div class="lg:col-span-5 lg:col-start-8">
    <p class="font-display text-[clamp(2.2rem,4vw,4.2rem)] italic leading-[1.1]" data-reveal>${CRAFT.quote}</p>
  </div>
</section>

<section class="relative h-[72svh] min-h-[420px] bg-ink" aria-label="Il film">
  <video id="film" class="h-full w-full object-cover" src="${rt}video/video_gioiello_gregory.mp4" poster="${rt}img/hero-contatti.jpg" autoplay muted loop playsinline preload="metadata" aria-hidden="true"></video>
  <div class="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"></div>
</section>

${band(L, { label: 'Collezioni', html: 'Guarda i pezzi<br><em>finiti</em>', href: L.collezioni })}`;
  const filmScript = `<script>
  (function () {
    var film = document.getElementById('film');
    if (film && matchMedia('(prefers-reduced-motion: reduce)').matches) { film.removeAttribute('autoplay'); film.pause(); }
  })();
</script>
`;
  return shell({ title: 'Atelier', desc: 'Fusione, saldatura, limatura, incastonatura: il lavoro di Gregory Jewels, da vicino.', depth: 1, active: 'atelier', solid: true, main, extra: filmScript });
}

/* ---------------------------------------------------------------- 05 journal */
export function journal() {
  const L = links(N, 1); const rt = L.root;
  const [f, ...rest] = ARTICLES;
  const rows = rest.map((a) => `<li>
      <a href="${L.art(a.slug)}" class="group/o grid items-center gap-x-8 gap-y-5 border-b border-line py-8 md:grid-cols-12 md:py-10">
        <p class="${LABEL} text-gold-deep md:col-span-2" data-reveal>${a.cat}</p>
        <div class="md:col-span-6">
          <h3 class="font-display text-[clamp(1.9rem,3.2vw,3.2rem)] leading-[1.05] transition-[padding] duration-500 ease-lux md:group-hover/o:pl-3" data-reveal>${a.title}</h3>
          <p class="mt-3 max-w-[44ch] ${BODY}" data-reveal>${a.excerpt}</p>
        </div>
        <div class="frame aspect-[3/2] md:col-span-3 md:col-start-10" data-mask-x>${pic(rt, a.img, { alt: '', cls: a.pos })}</div>
      </a>
    </li>`).join('\n    ');
  const main = `${lightOpen({ label: 'Journal', lines: ['Appunti dal banco,', 'una pietra alla volta.'], text: 'Poche pagine, scritte con calma: il lavoro, le pietre, le commissioni.' })}

<section class="${WRAP} pb-24 md:pb-36" aria-label="In evidenza">
  <a href="${L.art(f.slug)}" class="group/o grid items-end gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:gap-8">
    <div class="frame aspect-[4/3] lg:col-span-8" data-mask-x>${pic(rt, f.img, { eager: true, alt: '', cls: f.pos })}</div>
    <div class="lg:col-span-4">
      <p class="${LABEL} text-gold-deep" data-reveal>In evidenza · ${f.cat}</p>
      <h2 class="mt-5 font-display text-[clamp(2.2rem,3.8vw,4rem)] leading-[1.04]" data-reveal>${f.title}</h2>
      <p class="mt-5 max-w-[36ch] ${BODY}" data-reveal>${f.excerpt}</p>
      <p class="mt-8 ${LABEL}" data-reveal><span class="inline-block transition-transform duration-500 group-hover/o:translate-x-1">Leggi →</span></p>
    </div>
  </a>
</section>

<section class="${WRAP} pb-28 md:pb-44" aria-label="Altri articoli">
  <ul class="border-t border-line">
    ${rows}
  </ul>
</section>

${band(L, { label: 'Contatti', html: 'Scrivici,<br><em>rispondiamo di persona</em>' })}`;
  return shell({ title: 'Journal', desc: 'Il journal di Gregory Jewels: il lavoro al banco, le pietre, le commissioni.', depth: 1, active: 'journal', solid: true, main });
}

/* ---------------------------------------------------------------- 06 articolo */
export function articolo(a) {
  const L = links(N, 2); const rt = L.root;
  const c = col(a.related);
  const next = ARTICLES[(ARTICLES.findIndex((x) => x.slug === a.slug) + 1) % ARTICLES.length];
  const P = 'text-[1.02rem] leading-[1.95] text-ink/85';
  const main = `<article>
  <header class="${WRAP} pb-14 pt-40 md:pb-20 md:pt-52">
    <div class="grid gap-8 lg:grid-cols-12 lg:gap-8">
      <p class="hero-fade ${LABEL} text-gold-deep lg:col-span-2" style="--d:.3s"><a class="u-link" href="${L.journal}">← Journal</a><br><span class="mt-3 inline-block">${a.cat}</span></p>
      <h1 class="hero-lines font-display text-[clamp(2.6rem,6vw,6.2rem)] font-normal leading-[1.02] tracking-[-.015em] lg:col-span-9 lg:col-start-4"><span class="line"><span style="--i:0;--d:.3s">${a.title}</span></span></h1>
    </div>
    <p class="hero-fade mt-10 max-w-[40ch] font-display text-2xl italic leading-snug text-mute lg:ml-[calc(25%+.5rem)]" style="--d:.8s">${a.excerpt}</p>
  </header>

  <div class="${WRAP}">
    <div class="frame aspect-[4/3] sm:aspect-[21/9]" data-mask-x>${pic(rt, a.lead, { eager: true, alt: '', cls: a.pos })}</div>
    <p class="mt-4 ${LABEL} text-mute">${a.cap1}</p>
  </div>

  <div class="${WRAP} grid gap-8 py-20 md:py-32 lg:grid-cols-12">
    <div class="max-w-[62ch] lg:col-span-6 lg:col-start-4">
      ${a.paras.map((p, i) => `<p class="${P}${i ? ' mt-7' : ''}" data-reveal>${p}</p>`).join('\n      ')}
    </div>
  </div>

  <div class="bg-stone px-5 py-24 text-center sm:px-10 md:py-40 lg:px-14">
    <p class="mx-auto max-w-[22ch] font-display text-[clamp(2rem,4.4vw,4.6rem)] italic leading-[1.1]" data-reveal>${a.quote}</p>
  </div>

  <div class="${WRAP} grid items-start gap-10 py-20 md:py-32 lg:grid-cols-12 lg:gap-8">
    <div class="frame aspect-[3/2] lg:col-span-6" data-mask-x>${pic(rt, a.second, { alt: '', cls: 'object-center' })}</div>
    <div class="lg:col-span-5 lg:col-start-8">
      <p class="${LABEL} mb-8 text-mute" data-reveal>${a.cap2}</p>
      ${a.paras2.map((p) => `<p class="max-w-[62ch] ${P}" data-reveal>${p}</p>`).join('\n      ')}
    </div>
  </div>
</article>

<section class="${WRAP} pb-28 md:pb-44" aria-label="Continua">
  <div class="grid border-t border-line md:grid-cols-2">
    <a href="${L.col(c.slug)}" class="group/o border-b border-line py-8 md:border-b-0 md:border-r md:pr-8">
      <p class="${LABEL} text-gold-deep">La collezione</p>
      <p class="mt-3 flex items-baseline justify-between font-display text-4xl">${c.name}<span class="text-gold-deep transition-transform duration-500 group-hover/o:translate-x-1" aria-hidden="true">→</span></p>
    </a>
    <a href="${L.art(next.slug)}" class="group/o py-8 md:pl-8">
      <p class="${LABEL} text-gold-deep">Leggi ancora</p>
      <p class="mt-3 flex items-baseline justify-between gap-4 font-display text-4xl">${next.title}<span class="text-gold-deep transition-transform duration-500 group-hover/o:translate-x-1" aria-hidden="true">→</span></p>
    </a>
  </div>
  <p class="mt-12"><a href="${L.journal}" class="u-link ${LABEL}">Torna al journal</a></p>
</section>`;
  return shell({ title: a.title, desc: a.excerpt, depth: 2, active: 'journal', solid: true, main });
}

/* ---------------------------------------------------------------- 07 contatti */
export function contatti() {
  const L = links(N, 1); const rt = L.root;
  const form = contactForm({
    form: 'grid gap-7', field: 'flex flex-col', actions: 'flex flex-col items-start gap-5 sm:flex-row sm:items-center',
    label: `${LABEL} text-gold-deep`,
    input: 'mt-2 w-full border border-ink/25 bg-transparent px-4 py-3 text-[1rem] text-ink outline-none transition-colors duration-500 focus:border-ink focus-visible:outline-none aria-[invalid=true]:border-[#8a2b1f]',
    err: 'mt-2 text-[.8rem] text-[#8a2b1f]',
    button: `min-h-12 border border-ink px-8 py-4 ${LABEL} transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-ink`,
    status: 'text-[.85rem] leading-[1.7] text-mute sm:max-w-[34ch]',
    note: 'max-w-[46ch] text-[.8rem] leading-[1.8] text-mute',
  });
  const main = `${lightOpen({ label: 'Contatti', lines: ['Prenota un', 'appuntamento privato.'] })}

<section class="${WRAP} pb-28 md:pb-44">
  <div class="grid gap-16 border-t border-line pt-12 lg:grid-cols-12 lg:gap-8">
    <div class="lg:col-span-4">
      <p class="font-display text-[clamp(1.7rem,2.4vw,2.3rem)] leading-[1.2]" data-reveal>${CONTACT.lead}</p>
      <dl class="mt-12 border-t border-line" data-reveal>
        <div class="border-b border-line py-5"><dt class="${LABEL} text-gold-deep">Email</dt><dd class="mt-2"><a class="u-link font-display text-2xl" href="mailto:${SITE.email}">${SITE.email}</a></dd></div>
        <div class="border-b border-line py-5"><dt class="${LABEL} text-gold-deep">Instagram</dt><dd class="mt-2"><a class="u-link font-display text-2xl" href="${SITE.instagram}" target="_blank" rel="noopener">@gregoryjewels</a></dd></div>
        <div class="border-b border-line py-5"><dt class="${LABEL} text-gold-deep">Visite</dt><dd class="mt-2 font-display text-2xl">Su appuntamento</dd></div>
      </dl>
    </div>
    <div class="lg:col-span-6 lg:col-start-7" data-reveal>
      ${form}
    </div>
  </div>
</section>`;
  return shell({ title: 'Contatti', desc: 'Scrivi a Gregory Jewels per una commissione, un restauro o per vedere i pezzi su appuntamento.', depth: 1, active: 'contatti', solid: true, main, extra: contactScript(rt) });
}
