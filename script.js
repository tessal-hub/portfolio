/* ============================================================
   Progressive Reveal — Intersection Observer
   Hero uses pure CSS animations (no JS dependency).
   All other sections reveal on scroll.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ── Scroll-triggered reveals (everything outside .hero)
    const revealEls = document.querySelectorAll(
        'section:not(.hero) .reveal-fade, ' +
        'section:not(.hero) .reveal-up, ' +
        'section:not(.hero) .reveal-line'
    );

    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const el = entry.target;

            // Stagger siblings within the same direct parent
            const siblings = [...(el.parentElement?.querySelectorAll(
                ':scope > .reveal-fade, :scope > .reveal-up, :scope > .reveal-line'
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
