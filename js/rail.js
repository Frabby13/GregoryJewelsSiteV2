/* Gregory Jewels — horizontal rails (concept 02): arrow buttons scroll one card at a time. */
(function () {
  'use strict';
  document.querySelectorAll('[data-rail]').forEach(function (rail) {
    var group = rail.parentElement;
    group.querySelectorAll('[data-scroll]').forEach(function (b) {
      b.addEventListener('click', function () {
        var fig = rail.querySelector('figure');
        var step = fig.getBoundingClientRect().width + 32;
        rail.scrollBy({ left: step * Number(b.dataset.scroll), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      });
    });
  });
})();
