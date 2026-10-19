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

  // Fade sections in as they scroll into view. Only sections that start below the fold
  // are hidden, so nothing visible on load flickers and nothing stays hidden without JS.
  var reveals = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reveals.length && 'IntersectionObserver' in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('is-pending');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -15% 0px' });

    reveals.forEach(function (section) {
      if (section.getBoundingClientRect().top < window.innerHeight) return;
      section.classList.add('is-pending');
      observer.observe(section);
    });
  }
})();
