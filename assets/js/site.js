// Theme toggle and mobile menu. The saved theme itself is applied inline in <head>.
(function () {
  var root = document.documentElement;
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function currentTheme() {
    return root.getAttribute('data-theme') || (prefersDark.matches ? 'dark' : 'light');
  }

  var themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    var syncToggle = function () {
      themeToggle.setAttribute('aria-pressed', String(currentTheme() === 'dark'));
    };

    themeToggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
      syncToggle();
    });

    // Keep the button state right when the OS theme changes and no choice is saved.
    if (prefersDark.addEventListener) prefersDark.addEventListener('change', syncToggle);
    syncToggle();
  }

  var nav = document.querySelector('.site-nav');
  var menuToggle = document.querySelector('.menu-toggle');
  if (nav && menuToggle) {
    var setMenuOpen = function (open) {
      nav.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
    };

    menuToggle.addEventListener('click', function () {
      setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenuOpen(false);
        menuToggle.focus();
      }
    });

    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target)) setMenuOpen(false);
    });
  }
})();
