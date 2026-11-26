// Mobile navigation
const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const menu = document.getElementById('mobile-menu');
toggle?.addEventListener('click', () => {
  const open = menu?.classList.toggle('open') ?? false;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu?.classList.contains('open')) {
    menu.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.focus();
  }
});

// Reveal on scroll
const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  // Stagger siblings (cards in a grid) via --d, which only delays the reveal, never hover.
  els.forEach((el) => {
    const sibs = Array.from(el.parentElement?.children ?? []).filter((c) => c.classList.contains('reveal'));
    (el as HTMLElement).style.setProperty('--d', `${Math.min(sibs.indexOf(el), 5) * 90}ms`);
    io.observe(el);
  });
} else {
  els.forEach((el) => el.classList.add('in'));
}

// Back to top
const toTop = document.querySelector<HTMLButtonElement>('[data-to-top]');
const header = document.querySelector<HTMLElement>('.site-header');
const onScroll = () => {
  toTop?.classList.toggle('show', window.scrollY > 600);
  header?.classList.toggle('is-scrolled', window.scrollY > 8);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


export {};

// Glass cards: teal glow follows the cursor (sets --mx / --my on the hovered card)
document.addEventListener('pointermove', (e) => {
  const card = (e.target as Element | null)?.closest?.('.card') as HTMLElement | null;
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty('--mx', `${e.clientX - r.left}px`);
  card.style.setProperty('--my', `${e.clientY - r.top}px`);
}, { passive: true });
