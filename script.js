// Fade-in on scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('.section-container, .hero-content').forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
});
