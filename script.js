/* ============================================================
   Progressive Reveal — Intersection Observer
   Hero uses pure CSS animations (no JS dependency).
   All other sections reveal on scroll.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ── Horizontal Scroll / Leaf Turning (Projects)
    const workItems = document.querySelectorAll('.work-item');
    
    // Observer for the leaves (projects)
    const leafObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
            } else {
                entry.target.classList.remove('is-active');
            }
        });
    }, {
        root: null, // viewport
        rootMargin: '0px -15% 0px -15%', // Trigger when item enters middle 70% of screen
        threshold: 0.5 // Require at least 50% visibility
    });

    workItems.forEach(item => leafObserver.observe(item));

    // Map vertical mouse wheel to horizontal scroll for desktop users
    const workCarousel = document.querySelector('.work-carousel');
    if (workCarousel) {
        workCarousel.addEventListener('wheel', (e) => {
            // If the user is scrolling vertically with a mouse wheel
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                // Smoothly map vertical scroll to horizontal scroll
                workCarousel.scrollBy({
                    left: e.deltaY * 1.5,
                    behavior: 'smooth'
                });
            }
        }, { passive: false });
    }

    // ── Scroll-triggered reveals (everything else)
    const revealEls = document.querySelectorAll(
        'section:not(.hero) .reveal-fade:not(.work-tags), ' +
        'section:not(.hero) .reveal-up:not(.work-item), ' +
        'section:not(.hero) .reveal-line:not(.work-divider)'
    );

    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const el = entry.target;

            // Stagger siblings within the same direct parent
            const siblings = [...(el.parentElement?.querySelectorAll(
                ':scope > .reveal-fade:not(.work-tags), :scope > .reveal-up:not(.work-item), :scope > .reveal-line:not(.work-divider)'
            ) || [])];
            const idx = siblings.indexOf(el);
            if (idx > 0) {
                el.style.transitionDelay = `${idx * 0.1}s`;
            }

            el.classList.add('is-visible');
            observer.unobserve(el);
        });
    }, {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.01
    });

    revealEls.forEach(el => io.observe(el));

    // ── Scroll hint: fade out as user scrolls away from hero
    const scrollHint = document.querySelector('.scroll-hint');
    if (scrollHint) {
        window.addEventListener('scroll', () => {
            const opacity = Math.max(0, 1 - window.scrollY / 250);
            scrollHint.style.opacity = opacity;
        }, { passive: true });
    }

});
