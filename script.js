// Header border on scroll
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Highlight today; auto "Open now / Closed now"
(function () {
  const hours = {
    0: null,
    1: null,
    2: [9, 17.5],
    3: [9, 17.5],
    4: [9, 19],
    5: [9, 18],
    6: [8.5, 16],
  };
  const now = new Date();
  const day = now.getDay();
  const t = now.getHours() + now.getMinutes() / 60;
  const todayLi = document.querySelector(`.hours-list li[data-day="${day}"]`);
  if (todayLi) todayLi.classList.add('today');
  const badge = document.getElementById('open-now');
  const r = hours[day];
  if (r && t >= r[0] && t < r[1]) {
    badge.textContent = 'Open now';
  } else {
    badge.textContent = 'Closed now';
    badge.classList.add('is-closed');
  }
})();
