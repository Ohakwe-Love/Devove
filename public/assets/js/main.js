(function () {
    const tooltip = document.querySelector('.nav-tool-tip');
    const textEl = tooltip && tooltip.querySelector('.nav-tool-tip__text');
    const links = Array.from(document.querySelectorAll('.nav-link'));
    if (!tooltip || !textEl || links.length === 0) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function showTip(el) {
        const label = el.getAttribute('data-tooltip') || el.getAttribute('aria-label') || '';
        textEl.textContent = label;
        // wait for layout to settle in case text changed
        requestAnimationFrame(() => {
            const rect = el.getBoundingClientRect();
            // compute the horizontal center of the target element (relative to viewport)
            const centerX = rect.left + rect.width / 2;

            // offsetParent is the element the tooltip is positioned against; fall back to document body
            const container = tooltip.offsetParent || document.body;
            const containerRect = container.getBoundingClientRect();

            // account for container's scrollLeft if it's scrollable
            const scrollLeft = container.scrollLeft || 0;

            // compute left relative to the container's content box
            let left = centerX - containerRect.left + scrollLeft;

            // apply small horizontal offset from CSS variable to nudge tooltip closer/further
            const css = getComputedStyle(document.documentElement);
            const offsetX = parseInt(css.getPropertyValue('--tooltip-offset-x')) || 0;
            left = left + offsetX;

            // clamp tooltip so it doesn't overflow container bounds
            const tooltipWidth = tooltip.offsetWidth || 0;
            const padding = 8;
            const minLeft = padding;
            const maxLeft = Math.max(padding, containerRect.width - tooltipWidth - padding) + scrollLeft;
            left = Math.max(minLeft, Math.min(maxLeft, left));

            tooltip.style.left = left + 'px';
        });


        // show
        tooltip.classList.add('visible');
        tooltip.setAttribute('aria-hidden', 'false');
    }

    function hideTip() {
        tooltip.classList.remove('visible');
        tooltip.setAttribute('aria-hidden', 'true');
    }

    // reposition tooltip when window resizes (only if visible)
    window.addEventListener('resize', () => {
        if (!tooltip.classList.contains('visible')) return;
        // find the currently focused/hovered link (if any)
        const active = document.querySelector('.nav-link:hover') || document.activeElement;
        if (active && active.classList && active.classList.contains('nav-link')) {
            showTip(active);
        }
    });

    links.forEach(link => {
        link.addEventListener('pointerenter', () => showTip(link));
        link.addEventListener('focus', () => showTip(link));
        link.addEventListener('pointerleave', hideTip);
        link.addEventListener('blur', hideTip);
    });

    // hide on scroll or resize for safety
    window.addEventListener('scroll', hideTip, { passive: true });
    window.addEventListener('resize', hideTip);
})();

// Toggle nav visibility when the viewport is near the bottom of the document
(function () {
    const nav = document.querySelector('#nav-container');
    if (!nav) return;

    const THRESHOLD_PX = 120; // how many pixels from the bottom to start hiding

    function checkNav() {
        const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const docHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        const distanceToBottom = docHeight - (scrollTop + viewportHeight);

        if (distanceToBottom <= THRESHOLD_PX) {
            nav.classList.add('nav-hidden');
        } else {
            nav.classList.remove('nav-hidden');
        }
    }

    // run on scroll/resize and on load
    window.addEventListener('scroll', checkNav, { passive: true });
    window.addEventListener('resize', checkNav);
    window.addEventListener('load', checkNav);
    // initial check
    checkNav();
})();


// // Intersection Observer for slide-in effects
// const observerOptions = {
//   threshold: 0.1, // Trigger when 10% of element is visible
//   rootMargin: '0px 0px -50px 0px' // Adjust when effect triggers
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('in-view');
//       // Optional: stop observing after animation completes
//       observer.unobserve(entry.target);
//     }
//   });
// }, observerOptions);

// // Observe all elements with slide-in classes
// document.querySelectorAll('[class*="slide-in"]').forEach(el => {
//   observer.observe(el);
// });

// Continuous scroll-based slide-in effect
// Slide in animation triggered only on scroll
// AOS-like scroll animation library
class AOS {
    constructor(options = {}) {
        this.options = {
            offset: options.offset || 120,
            duration: options.duration || 400,
            easing: options.easing || 'ease',
            once: options.once !== false,
            ...options
        };

        this.elements = [];
        this.init();
    }

    init() {
        // Find all elements with data-aos attribute
        document.querySelectorAll('[data-aos]').forEach(el => {
            this.elements.push({
                element: el,
                animated: false,
                options: this.getElementOptions(el)
            });
        });

        // Set up intersection observer
        this.observeElements();
        window.addEventListener('scroll', () => this.checkElements(), { passive: true });
        window.addEventListener('resize', () => this.checkElements(), { passive: true });

        // Initial check
        this.checkElements();
    }

    getElementOptions(el) {
        return {
            animation: el.getAttribute('data-aos') || 'fade-up',
            duration: parseInt(el.getAttribute('data-aos-duration')) || this.options.duration,
            delay: parseInt(el.getAttribute('data-aos-delay')) || 0,
            offset: parseInt(el.getAttribute('data-aos-offset')) || this.options.offset,
            easing: el.getAttribute('data-aos-easing') || this.options.easing,
            once: el.getAttribute('data-aos-once') !== 'false' && this.options.once
        };
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const item = this.elements.find(el => el.element === entry.target);
                if (item && entry.isIntersecting) {
                    if (!item.animated || !item.options.once) {
                        this.animateElement(item);
                        item.animated = true;
                    }
                }
            });
        }, { threshold: 0.1 });

        this.elements.forEach(item => observer.observe(item.element));
    }

    checkElements() {
        this.elements.forEach(item => {
            if (item.animated && item.options.once) return;

            const rect = item.element.getBoundingClientRect();
            const isVisible = rect.bottom > item.options.offset && rect.top < window.innerHeight;

            if (isVisible && !item.animated) {
                this.animateElement(item);
                item.animated = true;
            }
        });
    }

    animateElement(item) {
        const el = item.element;
        const opts = item.options;

        el.style.animationDuration = opts.duration + 'ms';
        el.style.animationDelay = opts.delay + 'ms';
        el.style.animationTimingFunction = opts.easing;
        el.style.animationFillMode = 'both';
        el.style.animationName = opts.animation;
    }
}

// Initialize AOS
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new AOS({ once: true });
    });
} else {
    new AOS({ once: true });
}