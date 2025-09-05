// Basic site behaviors
(() => {
  const navLinks = document.querySelectorAll('.nav a');
  const current = location.pathname.replace(/\/index\.html$/, '/');
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    // treat / and /index.html as same
    const normalized = href.replace(/\/index\.html$/, '/');
    if (normalized === current) {
      a.setAttribute('aria-current', 'page');
      a.style.color = '#2563eb';
    }
  });
})();
