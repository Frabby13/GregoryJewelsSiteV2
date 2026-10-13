/* Gregory Jewels — contact form.
   No backend is connected. The form validates on the client, then opens the visitor's own
   mail client with the message prefilled (mailto:). Nothing is sent until they press Send there. */
(function () {
  'use strict';
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('form-status');
  var fields = Array.prototype.slice.call(form.querySelectorAll('input, select, textarea'));

  function check(el) {
    var err = document.getElementById('e-' + el.name);
    var bad = !el.checkValidity();
    el.setAttribute('aria-invalid', bad ? 'true' : 'false');
    if (err) err.hidden = !bad;
    return !bad;
  }

  fields.forEach(function (el) {
    el.addEventListener('blur', function () { if (el.value !== '') check(el); });
    el.addEventListener('input', function () { if (el.getAttribute('aria-invalid') === 'true') check(el); });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = '';
    var firstBad = null;
    fields.forEach(function (el) { if (!check(el) && !firstBad) firstBad = el; });
    if (firstBad) { firstBad.focus(); status.textContent = 'Controlla i campi evidenziati.'; return; }

    var d = new FormData(form);
    var subject = 'Gregory Jewels — ' + d.get('tema');
    var body = d.get('messaggio') + '\n\n— ' + d.get('nome') + '\n' + d.get('email');
    window.location.href = 'mailto:' + form.dataset.mailto + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    status.textContent = 'Abbiamo preparato l\'email nel tuo programma di posta. Il messaggio non è ancora stato inviato: parte quando premi Invia da lì.';
  });
})();
