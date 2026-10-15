// Shop pieces shared by the three concepts: money format, add-to-cart form, cart page body, JSON catalogue.
// Each concept passes its own class tokens (`s`), so markup and behaviour (js/shop.js) are the same everywhere.
import { PRODUCTS, SITE, col } from './data.mjs';
import { pic, esc, IMG_FILE } from './lib.mjs';

export const money = (n) => '€ ' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

/* JSON read by js/shop.js on the cart page. Paths are relative to the cart page (depth 1). */
export function catalogJson(L) {
  const out = {};
  for (const p of PRODUCTS) {
    const v = p.views[0];
    out[p.slug] = {
      name: p.name, price: p.price, optLabel: p.opt ? p.opt.label : '',
      url: L.prod(p.slug), img: `${L.root}img/${IMG_FILE(v.img)}`, cls: v.cls, alt: v.alt || '',
    };
  }
  return `<script type="application/json" id="catalog">${JSON.stringify(out).replace(/</g, '\u003c')}</script>`;
}

export function addForm(p, s, L) {
  const opt = p.opt ? `
    <fieldset class="${s.fieldset}">
      <legend class="${s.label}">${p.opt.label}</legend>
      <div class="mt-3 flex flex-wrap gap-2">
        ${p.opt.values.map((v) => `<label class="cursor-pointer"><input class="peer sr-only" type="radio" name="opt" value="${esc(v)}"><span class="${s.chip}">${v}</span></label>`).join('\n        ')}
      </div>
      <p class="${s.err}" data-add-error hidden role="alert">${p.opt.error}</p>
    </fieldset>` : '';
  return `<form data-add-form data-id="${p.slug}" novalidate class="${s.form}">${opt}
    <div class="${s.row}">
      <div>
        <label for="qty" class="${s.label}">Quantità</label>
        <div class="${s.qty}">
          <button type="button" data-qty="-1" class="${s.qtyBtn}" aria-label="Diminuisci la quantità">−</button>
          <input id="qty" name="qty" type="number" inputmode="numeric" min="1" max="9" value="1" class="${s.qtyInput}">
          <button type="button" data-qty="1" class="${s.qtyBtn}" aria-label="Aumenta la quantità">+</button>
        </div>
      </div>
      <button type="submit" class="${s.button}">Aggiungi al carrello</button>
    </div>
    <p class="${s.status}" role="status" aria-live="polite" data-add-status></p>
    <a href="${L.carrello}" data-to-cart hidden class="${s.link}">Vai al carrello</a>
  </form>`;
}

/* Body of carrello.html (below each concept's own opening). */
export function cartBody(L, s) {
  const row = `<template id="cart-row">
    <li class="${s.item}">
      <div class="frame ${s.thumb}"><img data-f="img" src="" alt="" width="120" height="150" loading="lazy" class="h-full w-full object-cover"></div>
      <div class="min-w-0">
        <a data-f="name" href="#" class="${s.name}"></a>
        <p data-f="opt" class="${s.meta}"></p>
        <p class="${s.meta}">Prezzo <span data-f="unit"></span></p>
        <div class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
          <div class="${s.qty}">
            <button type="button" data-action="dec" class="${s.qtyBtn}">−</button>
            <span data-f="qty" class="${s.qtyNum}" aria-live="off"></span>
            <button type="button" data-action="inc" class="${s.qtyBtn}">+</button>
          </div>
          <button type="button" data-action="remove" class="${s.remove}">Rimuovi</button>
        </div>
      </div>
      <p data-f="line" class="${s.line}"></p>
    </li>
  </template>`;
  return `<div data-cart data-mailto="${SITE.email}">
  <p class="sr-only" role="status" aria-live="polite" data-cart-live></p>
  <div data-cart-empty hidden class="${s.empty}">
    <p class="${s.emptyTitle}">Il carrello è vuoto.</p>
    <p class="${s.body} mt-4">Scegli un pezzo dal negozio: lo ritrovi qui.</p>
    <a href="${L.negozio}" class="${s.button} mt-10 inline-flex">Vai al negozio</a>
  </div>
  <div data-cart-full class="${s.grid}">
    <ul data-cart-list class="${s.list}"></ul>
    <aside class="${s.summary}" aria-labelledby="riepilogo">
      <h2 id="riepilogo" class="${s.sumTitle}">Riepilogo</h2>
      <dl class="${s.dl}">
        <div class="${s.dlRow}"><dt>Pezzi</dt><dd data-items>0</dd></div>
        <div class="${s.dlRow}"><dt>Spedizione</dt><dd>Concordata con te</dd></div>
        <div class="${s.dlRow} ${s.totalRow}"><dt>Totale</dt><dd data-total>€ 0</dd></div>
      </dl>
      <button type="button" data-action="checkout" class="${s.button} mt-8 w-full justify-center">Invia la richiesta d'ordine</button>
      <p class="${s.note} mt-5">Nessun pagamento viene preso qui. Il pulsante apre il tuo programma di posta con l'elenco dei pezzi già scritto: ti rispondiamo di persona per confermare disponibilità, spedizione e pagamento.</p>
      <a href="${L.negozio}" class="${s.link} mt-6 inline-block">Continua gli acquisti</a>
    </aside>
  </div>
  ${row}
  ${catalogJson(L)}
</div>`;
}

/* Class tokens shared by the three concepts; each concept passes what makes it itself. */
export function tokens({ label, button, small, body, rule, thumb, nameCls, lineCls, titleCls }) {
  return {
    fieldset: 'm-0 border-0 p-0',
    label,
    chip: 'inline-flex min-h-11 min-w-12 items-center justify-center border border-ink/25 px-4 text-[.8rem] transition-colors duration-500 hover:border-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-gold',
    err: 'mt-3 text-[.8rem] text-[#8a2b1f]',
    form: 'grid gap-8',
    row: 'flex flex-wrap items-end gap-6',
    qty: 'mt-2 inline-flex items-center border border-ink/25',
    qtyBtn: 'grid size-11 place-items-center text-lg transition-colors hover:bg-ink hover:text-white',
    qtyInput: 'h-11 w-12 border-0 bg-transparent p-0 text-center text-[1rem] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none',
    qtyNum: 'grid h-11 min-w-10 place-items-center text-[.95rem]',
    button,
    status: 'min-h-[1.4em] text-[.85rem] leading-[1.7] text-mute',
    link: `u-link ${small}`,
    note: 'max-w-[46ch] text-[.8rem] leading-[1.8] text-mute',
    body,
    item: `grid grid-cols-[88px_1fr] gap-x-5 gap-y-4 border-t ${rule} py-7 first:border-t-0 sm:grid-cols-[132px_1fr_auto] sm:gap-x-8`,
    thumb: thumb || 'aspect-[4/5]',
    name: nameCls,
    meta: 'mt-1 text-[.82rem] text-mute',
    remove: `u-link ${small} text-mute`,
    line: lineCls + ' col-start-2 sm:col-start-3 sm:row-start-1 sm:text-right',
    empty: 'py-12 md:py-24',
    emptyTitle: titleCls,
    grid: 'grid gap-14 lg:grid-cols-12 lg:gap-8',
    list: `lg:col-span-7 border-y ${rule}`,
    summary: `lg:col-span-4 lg:col-start-9 lg:self-start lg:sticky lg:top-28 border ${rule} p-6 sm:p-8`,
    sumTitle: titleCls,
    dl: 'mt-6 text-[.9rem]',
    dlRow: `flex justify-between gap-6 border-t ${rule} py-3`,
    totalRow: 'font-display text-2xl',
  };
}
