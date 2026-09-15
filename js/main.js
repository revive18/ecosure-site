/* Eco Sure Testing — lightweight nav + form UX. No dependencies. */
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // Progressive-enhancement form handling.
  // Works with Netlify Forms when deployed; falls back to a friendly message.
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function () {
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      // Native submit proceeds (Netlify handles it). No preventDefault.
    });
  }
})();
