export function reveal(node: HTMLElement, options: { threshold?: number } = {}) {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				node.classList.add('in-view');
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
