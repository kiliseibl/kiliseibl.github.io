// Header appears immediately, stays styled on scroll
const header = document.getElementById('siteHeader');
header.classList.add('show');

// Scroll reveal
const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
revealEls.forEach(el=>io.observe(el));

// Subtle hero parallax
const heroBg = document.querySelector('#heroBg img');
window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  if(y < window.innerHeight){
    heroBg.style.transform = `scale(1.12) translateY(${y*0.25}px)`;
  }
});
