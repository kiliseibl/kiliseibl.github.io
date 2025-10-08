/* Reveal Animation */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  })
},{threshold:0.12})

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

function openExternal(url){ window.open(url, '_blank'); }

/* Button actions (delegation) */
document.addEventListener('click', (ev) => {
  const btn = ev.target.closest && ev.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.getAttribute('data-action');

  switch(action){
    case 'to-music':
      location.href = '#music';
      break;
    case 'open-instagram':
      openExternal('https://www.instagram.com/skilimusic/');
      break;
    case 'open-spotify':
      openExternal('https://open.spotify.com/artist/04rFSfbOzAuoaDSikfpkeM?si=_ZvKkfINTIqgKBhtQzHR9w');
      break;
    case 'open-soundcloud':
      openExternal('https://soundcloud.com/skili-music/popular-tracks');
      break;
  }
});

/* Hero Background Mouse Move */
const hero = document.querySelector('.hero');
const body = document.body;

if (hero) {
  hero.addEventListener('mousemove', e => {
    if(window.innerWidth > 600){
      const relX = (e.clientX / window.innerWidth - 0.5);
      const relY = (e.clientY / window.innerHeight - 0.5);

      // Begrenzung: max ±10px horizontal, ±5px vertikal
      const x = relX * 0;
      const y = relY * 15;

      body.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
    } else {
      // Mobile fixiert und zentriert
      body.style.backgroundPosition = 'center center';
    }
  });
}

/* Reduced motion */
if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.querySelectorAll('.reveal').forEach(r=>{ r.style.transition='none'; r.classList.add('visible'); })
}

/* Scroll beim Laden auf den Anfang */
// window.scrollTo(0, 0);
if (window.location.hash) { history.replaceState(null, null, ' '); }

