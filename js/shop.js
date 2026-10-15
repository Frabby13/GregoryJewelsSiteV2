/* Gregory Jewels — shop behaviour (cart, add-to-cart, list filter).
   No backend: the cart lives in localStorage and "checkout" opens the visitor's mail client
   with the order request prefilled. Nothing is sent or charged by this page. */
(function () {
  'use strict';
  var KEY = 'gj-cart-v1';
  var MAX = 9;

  var money = function (n) { return '€ ' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); };

  function read() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || '[]');
      return Array.isArray(v) ? v.filter(function (i) { return i && typeof i.id === 'string' && i.qty > 0; }) : [];
    } catch (e) { return []; }
  }
  function write(items) {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) { /* private mode: cart lasts for this page only */ }
    memory = items;
  }
  var memory = null;
  var get = function () { return memory || read(); };

  function count() { return get().reduce(function (n, i) { return n + i.qty; }, 0); }
  function paintCount() {
    var n = count();
    document.querySelectorAll('[data-cart-count]').forEach(function (el) { el.textContent = n; });
  }

  function add(id, opt, qty) {
    var items = get().slice();
    var hit = items.filter(function (i) { return i.id === id && (i.opt || '') === (opt || ''); })[0];
    if (hit) hit.qty = Math.min(MAX, hit.qty + qty); else items.push({ id: id, opt: opt || '', qty: Math.min(MAX, qty) });
    write(items);
    paintCount();
  }

  /* ---- product page: option + quantity + add ---- */
  var form = document.querySelector('[data-add-form]');
  if (form) {
    var err = form.querySelector('[data-add-error]');
    var status = form.querySelector('[data-add-status]');
    var qtyInput = form.querySelector('input[name="qty"]');
    form.addEventListener('click', function (e) {
      var b = e.target.closest('[data-qty]');
      if (!b) return;
      var v = Math.max(1, Math.min(MAX, (parseInt(qtyInput.value, 10) || 1) + parseInt(b.dataset.qty, 10)));
      qtyInput.value = v;
    });
    form.addEventListener('change', function (e) {
      if (e.target.name === 'opt' && err) err.hidden = true;
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = '';
      var radios = form.querySelectorAll('input[name="opt"]');
      var chosen = form.querySelector('input[name="opt"]:checked');
      if (radios.length && !chosen) { err.hidden = false; radios[0].focus(); return; }
      var qty = Math.max(1, Math.min(MAX, parseInt(qtyInput.value, 10) || 1));
      add(form.dataset.id, chosen ? chosen.value : '', qty);
      status.textContent = 'Aggiunto al carrello (' + count() + (count() === 1 ? ' pezzo' : ' pezzi') + ' in totale).';
      form.querySelector('[data-to-cart]').hidden = false;
    });
  }

  /* ---- list page: filter by collection (buttons are hidden until JS runs) ---- */
  var bar = document.querySelector('[data-filter-bar]');
  if (bar) {
    bar.hidden = false;
    var cards = document.querySelectorAll('[data-col]');
    var live = document.querySelector('[data-filter-status]');
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-filter]');
      if (!b) return;
      var f = b.dataset.filter, n = 0;
      bar.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      cards.forEach(function (c) { var show = f === 'all' || c.dataset.col === f; c.hidden = !show; if (show) n++; });
      if (live) live.textContent = n + (n === 1 ? ' pezzo' : ' pezzi');
    });
  }

  /* ---- cart page ---- */
  var root = document.querySelector('[data-cart]');
  if (root) {
    var catalog = JSON.parse(document.getElementById('catalog').textContent);
    var tpl = document.getElementById('cart-row');
    var list = root.querySelector('[data-cart-list]');
    var empty = root.querySelector('[data-cart-empty]');
    var full = root.querySelector('[data-cart-full]');
    var live2 = root.querySelector('[data-cart-live]');

    var render = function (msg) {
      var items = get().filter(function (i) { return catalog[i.id]; });
      list.textContent = '';
      var total = 0;
      items.forEach(function (it, idx) {
        var p = catalog[it.id];
        var row = tpl.content.firstElementChild.cloneNode(true);
        row.dataset.idx = idx;
        var img = row.querySelector('[data-f="img"]');
        img.src = p.img; img.alt = p.alt || '';
        img.className = img.className + ' ' + p.cls;
        var link = row.querySelector('[data-f="name"]');
        link.textContent = p.name; link.href = p.url;
        row.querySelector('[data-f="opt"]').textContent = it.opt ? p.optLabel + ': ' + it.opt : '';
        row.querySelector('[data-f="unit"]').textContent = money(p.price);
        row.querySelector('[data-f="qty"]').textContent = it.qty;
        row.querySelector('[data-f="line"]').textContent = money(p.price * it.qty);
        row.querySelector('[data-action="remove"]').setAttribute('aria-label', 'Rimuovi ' + p.name + ' dal carrello');
        row.querySelector('[data-action="dec"]').setAttribute('aria-label', 'Diminuisci la quantità di ' + p.name);
        row.querySelector('[data-action="inc"]').setAttribute('aria-label', 'Aumenta la quantità di ' + p.name);
        total += p.price * it.qty;
        list.appendChild(row);
      });
      empty.hidden = items.length > 0;
      full.hidden = items.length === 0;
      root.querySelectorAll('[data-total]').forEach(function (el) { el.textContent = money(total); });
      var n = items.reduce(function (s, i) { return s + i.qty; }, 0);
      root.querySelectorAll('[data-items]').forEach(function (el) { el.textContent = n + (n === 1 ? ' pezzo' : ' pezzi'); });
      paintCount();
      if (msg) live2.textContent = msg;
    };

    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-action]');
      if (!b) return;
      var items = get().filter(function (i) { return catalog[i.id]; });
      var row = b.closest('[data-idx]');
      if (b.dataset.action === 'checkout') {
        var lines = items.map(function (i) {
          var p = catalog[i.id];
          return '- ' + i.qty + ' × ' + p.name + (i.opt ? ' (' + p.optLabel + ': ' + i.opt + ')' : '') + ' — ' + money(p.price * i.qty);
        });
        var tot = items.reduce(function (s, i) { return s + catalog[i.id].price * i.qty; }, 0);
        var body = 'Buongiorno,\nvorrei richiedere questi pezzi:\n\n' + lines.join('\n') + '\n\nTotale indicativo: ' + money(tot) + '\n\nNome e indirizzo di spedizione:\n';
        window.location.href = 'mailto:' + root.dataset.mailto + '?subject=' + encodeURIComponent('Richiesta d\'ordine — Gregory Jewels') + '&body=' + encodeURIComponent(body);
        live2.textContent = 'Abbiamo preparato l\'email nel tuo programma di posta. La richiesta parte solo quando premi Invia da lì.';
        return;
      }
      if (!row) return;
      var it = items[parseInt(row.dataset.idx, 10)];
      var name = catalog[it.id].name;
      var all = get().slice();
      var k = all.indexOf(all.filter(function (x) { return x.id === it.id && x.opt === it.opt; })[0]);
      if (b.dataset.action === 'remove') { all.splice(k, 1); write(all); render(name + ' rimosso dal carrello.'); }
      if (b.dataset.action === 'inc') { all[k].qty = Math.min(MAX, all[k].qty + 1); write(all); render(name + ': quantità ' + all[k].qty + '.'); }
      if (b.dataset.action === 'dec') {
        if (all[k].qty > 1) { all[k].qty -= 1; write(all); render(name + ': quantità ' + all[k].qty + '.'); }
      }
      var again = list.querySelector('[data-idx="' + row.dataset.idx + '"] [data-action="' + b.dataset.action + '"]') || list.querySelector('[data-action]');
      if (again) again.focus(); else root.querySelector('[data-cart-empty] a').focus();
    });
    render();
  }

  window.addEventListener('storage', function (e) {
    if (e.key === KEY) { memory = null; paintCount(); }
  });
  paintCount();
})();
