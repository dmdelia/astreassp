(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language || 'en'];
  const german = langs.some(x => String(x).toLowerCase().startsWith('de'));
  root.lang = german ? 'de' : 'en';

  const translations = {
    de: {
      'Overview':'Übersicht','Projects':'Projekte','About':'Über ASTREA','Explore projects':'Projekte ansehen','Project details':'Projektdetails','About the program':'Über das Programm','Open project':'Projekt öffnen','View all projects':'Alle Projekte ansehen','Why ASTREA exists':'Warum ASTREA existiert','A portfolio with a purpose.':'Ein Portfolio mit einem Zweck.','Follow the project on Discord.':'Verfolge das Projekt auf Discord.','The build is public':'Der Build ist öffentlich'
    }
  };
  if (german) {
    document.querySelectorAll('a, h2, h3, .reason-kicker, .section-label').forEach(el => {
      const raw = el.textContent.trim();
      if (translations.de[raw]) el.textContent = translations.de[raw];
    });
  }

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded','false');
  }));

  const reveal = document.querySelectorAll('.reveal');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) reveal.forEach(x => x.classList.add('is-visible'));
  else {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), {threshold:.12});
    reveal.forEach(x => observer.observe(x));
  }
})();
