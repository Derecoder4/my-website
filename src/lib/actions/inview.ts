export function inview(node: HTMLElement, options: { threshold?: number; onEnter?: () => void } = {}) {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (options.onEnter) {
					options.onEnter();
				}
				observer.unobserve(node);
			}
		});
	}, {
		threshold: options.threshold || 0.1,
		rootMargin: '0px 0px -50px 0px'
	});

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
