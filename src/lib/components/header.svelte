<script>
	import { theme } from '$lib/theme.svelte.js';
	
	let mobileMenuOpen = $state(false);
	let currentTheme = $state('dark');

	$effect(() => {
		theme.subscribe((value) => {
			currentTheme = value;
		})();
	});

	function scrollToSection(id) {
		mobileMenuOpen = false;
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: 'smooth' });
	}

	function toggleTheme() {
		theme.toggle();
	}
</script>

<header class="sticky top-0 z-50 border-b border-border bg-background">
	<nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
		<!-- Replace text with profile image -->
		<a href="/" class="flex-shrink-0">
			<img src="/images/me.jpg" alt="Dere Boyo" class="h-10 w-10 rounded-full object-cover" />
		</a>
		
		<div class="hidden gap-6 md:flex">
			<a href="/projects" class="text-sm hover:text-muted-foreground transition">Projects</a>
			<button onclick={() => scrollToSection('services')} class="text-sm hover:text-muted-foreground transition">Services</button>
			<button onclick={() => scrollToSection('about')} class="text-sm hover:text-muted-foreground transition">About</button>
			<button onclick={() => scrollToSection('contact')} class="text-sm hover:text-muted-foreground transition">Contact</button>
			<a href="https://github.com/Derecoder4" target="_blank" class="text-sm hover:text-muted-foreground transition">GitHub</a>
			<!-- Added theme toggle button -->
			<button onclick={toggleTheme} class="text-sm hover:text-muted-foreground transition pl-4 border-l border-border">
				{currentTheme === 'dark' ? '☀' : '🌙'}
			</button>
		</div>

		<!-- Mobile menu button and theme toggle -->
		<div class="flex items-center gap-4 md:hidden">
			<button onclick={toggleTheme} class="text-xl">
				{currentTheme === 'dark' ? '☀' : '🌙'}
			</button>
			<button onclick={() => mobileMenuOpen = !mobileMenuOpen} class="text-xl">
				{mobileMenuOpen ? '✕' : '☰'}
			</button>
		</div>
	</nav>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-border bg-accent md:hidden">
			<div class="flex flex-col gap-4 px-4 py-4">
				<a href="/projects" class="text-sm hover:text-muted-foreground transition">Projects</a>
				<button onclick={() => scrollToSection('services')} class="text-sm hover:text-muted-foreground transition text-left">Services</button>
				<button onclick={() => scrollToSection('about')} class="text-sm hover:text-muted-foreground transition text-left">About</button>
				<button onclick={() => scrollToSection('contact')} class="text-sm hover:text-muted-foreground transition text-left">Contact</button>
				<a href="https://github.com/Derecoder4" target="_blank" class="text-sm hover:text-muted-foreground transition">GitHub</a>
			</div>
		</div>
	{/if}
</header>
