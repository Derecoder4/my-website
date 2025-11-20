<script>
	import ProjectCard from '$lib/components/project-card.svelte';
</script>

<svelte:head>
	<title>Projects - Dere Boyo</title>
</svelte:head>

<main class="min-h-screen bg-background text-foreground">
	<section class="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
		<div class="mb-12">
			<a href="/" class="text-sm text-muted-foreground hover:text-foreground transition">← Back</a>
			<h1 class="mt-4 text-4xl font-semibold md:text-5xl">All Projects</h1>
			<p class="mt-3 text-muted-foreground">A comprehensive collection of tools, landing pages, web apps, and bots built across Web2 and Web3.</p>
		</div>

		<!-- Portfolio Websites -->
		<div class="mb-16">
			<h2 class="text-2xl font-semibold mb-6">Portfolio Websites</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<ProjectCard 
					title="Righteous" 
					description="Web3-focused personal brand with minimal layout"
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
				<ProjectCard 
					title="Teaona" 
					description="Modern portfolio with clean content blocks"
					link="https://teaona.lovable.app/"
					image="/placeholder.svg?height=300&width=400"
				/>
				<ProjectCard 
					title="Boy Otoritseju" 
					description="Minimal identity website"
					link="https://boyotoritseju.netlify.app/"
					image="/placeholder.svg?height=300&width=400"
				/>
				<ProjectCard 
					title="David French Class" 
					description="Educational site for language tutors"
					link="https://davidfrenchclass.netlify.app/"
					image="/placeholder.svg?height=300&width=400"
				/>
			</div>
		</div>

		<!-- Landing Pages -->
		<div class="mb-16">
			<h2 class="text-2xl font-semibold mb-6">Landing Pages</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<ProjectCard 
					title="Sons Design" 
					description="Creative studio landing page"
					link="https://sonsdesign.netlify.app/"
					image="/placeholder.svg?height=300&width=400"
				/>
				<ProjectCard 
					title="Torest Tech" 
					description="Technology service landing page"
					link="https://toresttech.space/"
					image="/placeholder.svg?height=300&width=400"
				/>
				<ProjectCard 
					title="V0 Network" 
					description="Minimalist AGI company website"
					link="https://v0-network-animation.vercel.app/"
					image="/placeholder.svg?height=300&width=400"
				/>
			</div>
		</div>

		<!-- Web Apps & Tools -->
		<div class="mb-16">
			<h2 class="text-2xl font-semibold mb-6">Web Apps & Utility Tools</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<ProjectCard 
					title="Axia Dobby" 
					description="Task automation utility"
					link="https://axia-dobby.vercel.app/"
					image="/placeholder.svg?height=300&width=400"
				/>
				<ProjectCard 
					title="Business Performance Dashboard" 
					description="Analytics dashboard with charts"
					link="https://busiiness-analys.lovable.app/"
					image="/placeholder.svg?height=300&width=400"
				/>
				<ProjectCard 
					title="Valery Stays" 
					description="Minimal rental platform"
					link="https://valery-stays-simple.lovable.app/"
					image="/placeholder.svg?height=300&width=400"
				/>
			</div>
		</div>

		<!-- Bots & Automations -->
		<div>
			<h2 class="text-2xl font-semibold mb-6">Bots & Automations</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<ProjectCard 
					title="Sentient Content Bot" 
					description="Telegram automation tool"
					link="https://t.me/sentientcontentbot"
					image="/placeholder.svg?height=300&width=400"
				/>
				<ProjectCard 
					title="RugGuard" 
					description="X automation bot for analysis"
					link="https://github.com/Derecoder4/Rugguard-bot"
					image="/placeholder.svg?height=300&width=400"
				/>
			</div>
		</div>
	</section>
</main>
