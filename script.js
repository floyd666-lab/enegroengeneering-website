document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle
    const toggle = document.getElementById('dark-mode-toggle');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    // Carousel pause on hover
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('mouseover', () => carousel.style.animationPlayState = 'paused');
        carousel.addEventListener('mouseout', () => carousel.style.animationPlayState = 'running');
    }

    // Immersive scroll trigger
    const scrollTrigger = document.querySelector('.scroll-trigger');
    if (scrollTrigger) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollTrigger.style.opacity = 0;
                scrollTrigger.style.transform = 'translateY(-20px)';
            } else {
                scrollTrigger.style.opacity = 1;
                scrollTrigger.style.transform = 'translateY(0)';
            }
        });
    }

    // Prevent download on certs
    const certs = document.querySelectorAll('.cert-viewer');
    certs.forEach(cert => {
        cert.addEventListener('contextmenu', e => e.preventDefault());
    });

    // PWA Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
    }
});
