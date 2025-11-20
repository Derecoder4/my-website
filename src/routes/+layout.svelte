<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { theme } from '$lib/theme.svelte.js';
	import { onMount } from 'svelte';
	
	let { children } = $props();

	onMount(() => {
		theme.subscribe((value) => {
			if (typeof window !== 'undefined') {
				document.documentElement.classList.remove('light', 'dark');
				document.documentElement.classList.add(value);
			}
		})();
	});
</script>

<Header />
{@render children()}
<Footer />
