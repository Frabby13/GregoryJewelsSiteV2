/* Gregory Jewels — shared behaviour for the three concepts.
   No dependencies. Everything degrades to a fully visible static page. */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) root.classList.add('js');

  /* hero opening: wait for the first image so the curtain never lifts on an empty frame */
  function ready() { root.classList.add('ready'); }
  var hero = document.querySelector('.hero-pic');
  var heroImg = hero && (hero.tagName === 'IMG' ? hero : hero.querySelector('img'));
  if (heroImg && !heroImg.complete) {
    heroImg.addEventListener('load', function () { setTimeout(ready, 150); }, { once: true });
    heroImg.addEventListener('error', ready, { once: true });
    setTimeout(ready, 2500);
  } else { setTimeout(ready, 150); }

  /* reveal on entry — once, never reverses */
  var targets = document.querySelectorAll('[data-reveal],[data-mask],[data-mask-x],[data-lines]');
  if ('IntersectionObserver' in window && !reduce) {
    var masks = [];
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    /* clip-path'd elements have no visible area, so IO never fires on them: check their box on scroll */
    targets.forEach(function (t) {
      if (t.hasAttribute('data-mask') || t.hasAttribute('data-mask-x')) masks.push(t); else io.observe(t);
    });
    if (masks.length) {
      var pending = false;
      var check = function () {
        pending = false;
        var limit = window.innerHeight * 0.88;
        masks = masks.filter(function (m) {
          if (m.getBoundingClientRect().top < limit) { m.classList.add('is-in'); return false; }
          return true;
        });
        if (!masks.length) { window.removeEventListener('scroll', onMask); window.removeEventListener('resize', onMask); }
      };
      var onMask = function () { if (!pending) { pending = true; requestAnimationFrame(check); } };
      window.addEventListener('scroll', onMask, { passive: true });
      window.addEventListener('resize', onMask, { passive: true });
      check();
    }
  } else {
    targets.forEach(function (t) { t.classList.add('is-in'); });
  }

  /* header state on scroll */
  var header = document.querySelector('[data-header]');
  if (header) {
    var last = -1;
    var onScroll = function () {
      var s = window.scrollY > 40;
      if (s !== last) { header.classList.toggle('is-scrolled', s); last = s; }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* mobile menu */
  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-menu]');
  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
      menu.classList.toggle('is-open', open);
      menu.toggleAttribute('inert', !open);
      root.style.overflow = open ? 'hidden' : '';
      if (open) { var f = menu.querySelector('a'); f && f.focus(); } else { toggle.focus({ preventScroll: true }); }
    };
    menu.setAttribute('inert', '');
    toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false);
    });
  }

  /* gentle parallax: [data-speed] moves a layer a few percent against scroll. transform only. */
  var layers = Array.prototype.slice.call(document.querySelectorAll('[data-speed]'));
  if (layers.length && !reduce) {
    var ticking = false;
    var vh = window.innerHeight;
    var update = function () {
      ticking = false;
      layers.forEach(function (el) {
        var r = el.parentElement.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        var p = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.transform = 'translate3d(0,' + (p * parseFloat(el.dataset.speed) * -100).toFixed(1) + 'px,0)';
      });
    };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', function () { vh = window.innerHeight; update(); }, { passive: true });
    update();
  }

  /* cursor label (concept 02) */
  var cur = document.querySelector('.cursor');
  if (cur && window.matchMedia('(hover:hover) and (pointer:fine)').matches && !reduce) {
    var x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    var loop = function () {
      cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
      cur.style.setProperty('--x', cx.toFixed(1) + 'px');
      cur.style.setProperty('--y', cy.toFixed(1) + 'px');
      raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.3 ? requestAnimationFrame(loop) : 0;
    };
    document.addEventListener('pointermove', function (e) {
      x = e.clientX; y = e.clientY; if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });
    document.querySelectorAll('[data-cursor]').forEach(function (el) {
      el.addEventListener('pointerenter', function () { cur.textContent = el.dataset.cursor; cur.classList.add('is-on'); cur.style.transform = 'translate3d(var(--x),var(--y),0) scale(1)'; });
      el.addEventListener('pointerleave', function () { cur.classList.remove('is-on'); cur.style.transform = ''; });
    });
  }

  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
