(function () {
	const tooltip = document.querySelector('.nav-tool-tip');
	const textEl = tooltip && tooltip.querySelector('.nav-tool-tip__text');
	const links = Array.from(document.querySelectorAll('.nav-link'));
	if (!tooltip || !textEl || links.length === 0) return;

	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	function showTip(el) {
		const label = el.getAttribute('data-tooltip') || el.getAttribute('aria-label') || '';
		textEl.textContent = label;

		const rect = el.getBoundingClientRect();
		const centerX = rect.left / 2;
		const container = tooltip.offsetParent || document.documentElement;
		const containerRect = container.getBoundingClientRect();

		let left = centerX - containerRect.left;

		left = Math.max(12, Math.min(containerRect.width - 1, left));
		tooltip.style.left = left + 'px';


		// show
		tooltip.classList.add('visible');
		tooltip.setAttribute('aria-hidden', 'false');
	}

	function hideTip() {
		tooltip.classList.remove('visible');
		tooltip.setAttribute('aria-hidden', 'true');
	}

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