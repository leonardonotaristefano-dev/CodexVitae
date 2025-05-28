document.addEventListener('DOMContentLoaded', () => {
  // 1) Avatar slide-in
  const avatar = document.querySelector('.hero-left img');
  if (avatar) {
    avatar.style.opacity = 0;
    avatar.style.transform = 'translateX(-100px)';
    setTimeout(() => {
      avatar.style.transition = 'opacity 0.8s, transform 0.8s';
      avatar.style.opacity = 1;
      avatar.style.transform = 'translateX(0)';
    }, 200);
  }

  // 2) Animate progress-bars in cascade
  document.querySelectorAll('.progress-bar').forEach((bar, i) => {
    const target = bar.dataset.progress; // es. "75%"
    setTimeout(() => {
      bar.style.width = target;
    }, i * 150);
  });

  // 3) Fade-in-up delle cards quando entrano in viewport
  const cards = document.querySelectorAll('.weapon-card, .skill-card');
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        e.target.style.opacity = 1;
        e.target.style.transform = 'translateY(0)';
        o.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(c => {
    c.style.opacity = 0;
    c.style.transform = 'translateY(20px)';
    obs.observe(c);
  });
});