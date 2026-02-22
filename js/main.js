// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form: allow native Formspree POST when configured.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const formAction = contactForm.getAttribute('action') || '';
    const hasPlaceholderFormId = formAction.includes('REPLACE_WITH_REAL_FORM_ID') || formAction.includes('YOUR_FORM_ID');

    if (hasPlaceholderFormId) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Contact form is not configured yet. Replace REPLACE_WITH_REAL_FORM_ID in contact.html.');
        });
    }
}
