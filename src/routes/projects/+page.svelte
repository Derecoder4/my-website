<script lang="ts">
  import ProjectCard from "$lib/components/project-card.svelte";

  let searchQuery = $state("");
  let selectedCategory = $state("All");

  const categories = [
    "All",
    "Portfolio Websites",
    "Landing Pages",
    "Web Apps & Tools",
    "Bots & Automations",
  ];

  const projects = [
    // Portfolio Websites
    {
      title: "Web3Righteous",
      description: "Web3-focused personal brand with minimal layout",
      link: "https://web3righteous.netlify.app/",
      image: "/images/web3righteous.png",
      category: "Portfolio Websites",
    },
    {
      title: "De Ronin",
      description: "Multidisciplinary creator portfolio",
      link: "https://deronin.netlify.app/",
      image: "/images/deronin.png",
      category: "Portfolio Websites",
    },
    {
      title: "Duke The Great",
      description: "Professional online profile",
      link: "https://dukethagreat.netlify.app/",
      image: "/images/duke.png",
      category: "Portfolio Websites",
    },
    {
      title: "Teaona",
      description: "Modern portfolio with clean content blocks",
      link: "https://teaona.lovable.app/",
      image: "/images/teaona.png",
      category: "Portfolio Websites",
    },
    {
      title: "Boy Otoritseju",
      description: "Minimal identity website",
      link: "https://boyotoritseju.netlify.app/",
      image: "/images/boyo.png",
      category: "Portfolio Websites",
    },
    {
      title: "David French Class",
      description: "Educational site for language tutors",
      link: "https://davidfrenchclass.netlify.app/",
      image: "/images/david-french.png",
      category: "Portfolio Websites",
    },
    // Landing Pages
    {
      title: "Sons Design",
      description: "Creative studio landing page",
      link: "https://sonsdesign.netlify.app/",
      image: "/images/sons-design.png",
      category: "Landing Pages",
    },
    {
      title: "Torest Tech",
      description: "Technology service landing page",
      link: "https://toresttech.space/",
      image: "/images/torest-tech.png",
      category: "Landing Pages",
    },
    {
      title: "LIG",
      description: "Minimalist AGI company website",
      link: "https://v0-network-animation.vercel.app/",
      image: "/images/lig.png",
      category: "Landing Pages",
    },
    {
      title: "422 The Brand",
      description: "Creative Streetwear & Branding",
      link: "#",
      image: "/images/422brand.png",
      category: "Landing Pages",
    },
    // Web Apps & Tools
    {
      title: "Axia",
      description: "Task automation utility",
      link: "https://axia-dobby.vercel.app/",
      image: "/images/axia.png",
      category: "Web Apps & Tools",
    },
    {
      title: "DataViz Pro",
      description: "Analytics dashboard with charts",
      link: "https://busiiness-analys.lovable.app/",
      image: "/images/dataviz.png",
      category: "Web Apps & Tools",
    },
    {
      title: "Valery Rentals",
      description: "Minimal rental platform",
      link: "https://valery-stays-simple.lovable.app/",
      image: "/images/valery.png",
      category: "Web Apps & Tools",
    },
    // Bots & Automations
    {
      title: "Sentient Content Bot",
      description: "Telegram automation tool",
      link: "https://t.me/sentientcontentbot",
      image: "/placeholder.svg?height=300&width=400",
      category: "Bots & Automations",
    },
    {
      title: "RugGuard",
      description: "X automation bot for analysis",
      link: "https://github.com/Derecoder4/Rugguard-bot",
      image: "/placeholder.svg?height=300&width=400",
      category: "Bots & Automations",
    },
  ];

  let filteredProjects = $derived(
    projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
  );
</script>

<svelte:head>
  <title>Projects - Dere Boyo</title>
</svelte:head>

<main class="min-h-screen bg-background text-foreground">
  <section class="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
    <div class="mb-12">
      <a
        href="/"
        class="text-sm text-muted-foreground hover:text-foreground transition"
        >← Back</a
      >
      <h1 class="mt-4 text-4xl font-semibold md:text-5xl">All Projects</h1>
      <p class="mt-3 text-muted-foreground">
        A comprehensive collection of tools, landing pages, web apps, and bots
        built across Web2 and Web3.
      </p>

      <!-- Search and Filter Controls -->
      <div
        class="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <!-- Category Filters -->
        <div class="flex flex-wrap gap-2">
          {#each categories as category}
            <button
              onclick={() => (selectedCategory = category)}
              class="rounded-full px-4 py-1.5 text-sm font-medium transition
                {selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'}"
            >
              {category}
            </button>
          {/each}
        </div>

        <!-- Search Input -->
        <div class="relative w-full md:w-64">
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search projects..."
            class="w-full rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each filteredProjects as project}
        <ProjectCard
          title={project.title}
          description={project.description}
          link={project.link}
          image={project.image}
        />
      {/each}
    </div>

    {#if filteredProjects.length === 0}
      <div class="py-20 text-center">
        <p class="text-muted-foreground">
          No projects found matching your criteria.
        </p>
        <button
          onclick={() => {
            searchQuery = "";
            selectedCategory = "All";
          }}
          class="mt-4 text-sm text-primary hover:underline"
        >
          Clear filters
        </button>
      </div>
    {/if}
  </section>
</main>
