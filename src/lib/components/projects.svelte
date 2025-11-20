<section id="projects" class="border-t border-border bg-card py-16 md:py-20">
	<div class="mx-auto max-w-7xl px-4 md:px-6">
		<h2 class="text-3xl font-semibold md:text-4xl">Featured Projects</h2>
		<p class="mt-2 text-sm text-muted-foreground md:text-base">A selection of recent work. <a href="/projects" class="hover:text-foreground transition">View all projects →</a></p>

		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<ProjectCard 
				title="Righteous" 
				description="Web3-focused personal brand"
				link="https://web3righteous.netlify.app/"
				image="/placeholder.svg?height=300&width=400"
			/>
			<ProjectCard 
				title="De Ronin" 
				description="Multidisciplinary creator portfolio"
				link="https://deronin.netlify.app/"
				image="/placeholder.svg?height=300&width=400"
			/>
			<ProjectCard 
				title="Duke The Great" 
				description="Professional online profile"
				link="https://dukethagreat.netlify.app/"
				image="/placeholder.svg?height=300&width=400"
			/>
		</div>

		<div class="mt-8 text-center">
			<a href="/projects" class="inline-block rounded-lg border border-primary bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
				Explore All Projects
			</a>
		</div>
	</div>
</section>

<script>
	import ProjectCard from './project-card.svelte';
</script>
