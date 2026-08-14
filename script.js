const cursor = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  if (!open) {
    nav.style.position = 'absolute';
    nav.style.top = '78px';
    nav.style.left = '20px';
    nav.style.right = '20px';
    nav.style.padding = '18px';
    nav.style.flexDirection = 'column';
    nav.style.background = '#101216';
    nav.style.border = '1px solid rgba(255,255,255,.1)';
  }
});
