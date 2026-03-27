  // ── COUNTDOWN ──
  function updateCountdown() {
    const target = new Date('2026-05-08T09:00:00Z');
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      document.querySelector('.countdown-wrapper').innerHTML =
        '<p style="font-family:\'Playfair Display\',serif;font-size:1.5rem;color:var(--gold)">The conference is live!</p>';
      return;
    }

    const days  = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins  = Math.floor((diff % 3600000)  / 60000);
    const secs  = Math.floor((diff % 60000)    / 1000);

    document.getElementById('cd-days').textContent  = String(days).padStart(2,'0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
    document.getElementById('cd-mins').textContent  = String(mins).padStart(2,'0');
    document.getElementById('cd-secs').textContent  = String(secs).padStart(2,'0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ── SCROLL REVEAL ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));