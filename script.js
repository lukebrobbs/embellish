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

// Highlight today; auto "Open now / Closed now" on the visit card and hero pill.
// Hours are read from the rendered hours-list so there's a single source of truth.
(function () {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const parseTime = (s) => {
    const [h, m] = s.split(':').map(Number);
    return h + (m || 0) / 60;
  };
  const fmt = (h) => {
    const hh = Math.floor(h);
    const mm = Math.round((h - hh) * 60);
    return `${hh}:${mm.toString().padStart(2, '0')}`;
  };

  const hours = {};
  document.querySelectorAll('.hours-list li').forEach(li => {
    const d = parseInt(li.dataset.day, 10);
    const text = (li.querySelector('.time')?.textContent || '').trim();
    const match = text.match(/(\d{1,2}:\d{2})\s*[–-]\s*(\d{1,2}:\d{2})/);
    if (match) {
      const open = parseTime(match[1]);
      const close = parseTime(match[2]);
      hours[d] = close > open ? [open, close] : null;
    } else {
      hours[d] = null;
    }
  });

  const now = new Date();
  const day = now.getDay();
  const t = now.getHours() + now.getMinutes() / 60;

  const todayLi = document.querySelector(`.hours-list li[data-day="${day}"]`);
  if (todayLi) todayLi.classList.add('today');

  const todayHours = hours[day];
  const isOpenNow = !!(todayHours && t >= todayHours[0] && t < todayHours[1]);

  const badge = document.getElementById('open-now');
  if (badge) {
    if (isOpenNow) {
      badge.textContent = 'Open now';
      badge.classList.remove('is-closed');
    } else {
      badge.textContent = 'Closed now';
      badge.classList.add('is-closed');
    }
  }

  const heroStatus = document.getElementById('hero-open-status');
  const heroPill = document.getElementById('hero-open-pill');
  if (heroStatus) {
    if (isOpenNow) {
      heroPill?.classList.remove('is-closed');
      heroStatus.innerHTML = `<strong>Open today</strong> · ${fmt(todayHours[0])} – ${fmt(todayHours[1])}`;
    } else {
      heroPill?.classList.add('is-closed');
      if (todayHours && t < todayHours[0]) {
        heroStatus.innerHTML = `<strong>Closed</strong> · Opens today at ${fmt(todayHours[0])}`;
      } else {
        let nextDay = null;
        for (let i = 1; i <= 7; i++) {
          const d = (day + i) % 7;
          if (hours[d]) { nextDay = d; break; }
        }
        if (nextDay !== null) {
          const label = nextDay === (day + 1) % 7 ? 'tomorrow' : dayNames[nextDay];
          heroStatus.innerHTML = `<strong>Closed</strong> · Opens ${label} at ${fmt(hours[nextDay][0])}`;
        } else {
          heroStatus.innerHTML = `<strong>Closed</strong>`;
        }
      }
    }
  }
})();

// Hero video: only fetch on small viewports, skip on reduced-data connections.
// Desktop hides the element via CSS (.hero-video { display: none; }), so loading
// the 3.4 MB MP4 there is pure waste.
(function () {
  const video = document.querySelector('.hero-video');
  if (!video) return;
  const isSmall = window.matchMedia('(max-width: 880px)').matches;
  const reducedData = window.matchMedia('(prefers-reduced-data: reduce)').matches;
  if (!isSmall || reducedData) return;
  const source = document.createElement('source');
  source.src = 'media/hero.mp4';
  source.type = 'video/mp4';
  video.appendChild(source);
  video.load();
  video.play().catch(() => { /* autoplay blocked — poster stays visible */ });
})();
