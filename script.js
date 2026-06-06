/* ══════════════════════════════════════════
   NAVBAR — active link on scroll
══════════════════════════════════════════ */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

function setActiveLink() {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', setActiveLink);

/* ══════════════════════════════════════════
   BURGER MENU (mobile)
══════════════════════════════════════════ */
const burger   = document.getElementById('burger');
const navMenu  = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */
const revealEls = document.querySelectorAll(
  '.project-card, .skills-card, .about-grid, .about-text, .about-photo, .contact-form, .social-row'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObs = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger delay for grid children
      entry.target.style.transitionDelay = (i % 3) * 0.1 + 's';
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObs.observe(el));

/* ══════════════════════════════════════════
   SKILL BARS — animate on scroll
══════════════════════════════════════════ */
const skillCards = document.querySelectorAll('.skills-card');

const skillObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      skillObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillCards.forEach(card => skillObs.observe(card));

/* ══════════════════════════════════════════
   CONTACT FORM — feedback
══════════════════════════════════════════ */
function handleSubmit(event) {
  event.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = '✓ Message envoyé !';
  btn.style.background = '#00a898';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Envoyer';
    btn.style.background = '';
    btn.disabled = false;
    event.target.reset();
  }, 3500);
}

/* ══════════════════════════════════════════
   NAVBAR — shrink on scroll
══════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
  } else {
    navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.2)';
  }
});
