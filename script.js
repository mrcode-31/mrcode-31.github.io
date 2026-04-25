// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    highlightNav();
});

// Mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active nav highlight
function highlightNav() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===== TYPING EFFECT =====
const heroSubtitle = document.getElementById('heroSubtitle');
if (heroSubtitle) {
    const phrases = [
        'Full-Stack Developer @ VIT Vellore',
        'MERN Stack Enthusiast 🚀',
        'AI/ML Integrations Builder ⚡',
        'Competitive Programmer 🧠',
        'Open Source Contributor 🌐'
    ];
    let phraseIdx = 0, charIdx = 0, isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIdx];
        if (isDeleting) {
            heroSubtitle.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
        } else {
            heroSubtitle.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
        }

        let delay = isDeleting ? 40 : 65;

        if (!isDeleting && charIdx === currentPhrase.length) {
            delay = 2500;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            delay = 300;
        }

        setTimeout(typeEffect, delay);
    }

    window.addEventListener('load', () => setTimeout(typeEffect, 800));
}

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, entry.target.dataset.delay || 0);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

// Mark all major cards/sections for reveal
const revealTargets = [
    '.project-card',
    '.skill-category',
    '.achievement-card',
    '.stat',
    '.profile-card',
    '.about-text',
    '.contact-item',
    '.contact-form'
];

revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add('reveal');
        el.dataset.delay = i * 80;
        revealObserver.observe(el);
    });
});

// ===== COUNTER ANIMATION =====
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const countersObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                countersObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    countersObserver.observe(statsSection);
}

function animateCounters() {
    document.querySelectorAll('.stat h3[data-target]').forEach(el => {
        const target = parseFloat(el.dataset.target);
        const decimals = parseInt(el.dataset.decimal) || 0;
        const duration = 1800;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = target * eased;
            el.textContent = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('formName').value;
        const email = document.getElementById('formEmail').value;
        const submitBtn = document.getElementById('submitContactBtn');

        // Visual feedback
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            contactForm.reset();
        }, 3500);
    });
}

// ===== TAG HOVER RIPPLE =====
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => { this.style.transform = ''; }, 150);
    });
});

// ===== HERO CODE CARD SHIMMER =====
const codeCard = document.getElementById('codeCard');
if (codeCard) {
    codeCard.addEventListener('mouseenter', () => {
        codeCard.style.animation = 'none';
        codeCard.style.transform = 'translateY(-20px) rotate(0deg) scale(1.02)';
        codeCard.style.boxShadow = '0 30px 60px rgba(108,99,255,0.4)';
    });
    codeCard.addEventListener('mouseleave', () => {
        codeCard.style.transform = '';
        codeCard.style.boxShadow = '';
        codeCard.style.animation = 'codeFloat 6s ease-in-out infinite';
    });
}

// ===== NAVBAR BRAND - SCROLL TO TOP =====
document.querySelector('.nav-brand')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

console.log('🚀 Portfolio v2.0 — Mohit Gupta | mrcode-31');
