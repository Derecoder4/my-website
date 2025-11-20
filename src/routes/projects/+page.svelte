<script lang="ts">
  let searchQuery = "";
  let selectedCategory = "All";

  const projects = [
    // Portfolio Websites
    {
      title: "De Ronin",
      category: "Portfolio Websites",
      image: "/images/de-ronin.png",
      link: "#",
    },
    {
      title: "Sons Design",
      category: "Portfolio Websites",
      image: "/images/sons-design.png",
      link: "#",
    },
    {
      title: "Torest Tech",
      category: "Portfolio Websites",
      image: "/images/torest-tech.png",
      link: "#",
    },

    // Landing Pages
    {
      title: "Crypto Exchange",
      category: "Landing Pages",
      image: "/images/crypto-exchange.png",
      link: "#",
    },
    {
      title: "SaaS Platform",
      category: "Landing Pages",
      image: "/images/saas-platform.png",
      link: "#",
    },
    {
      title: "E-commerce Store",
      category: "Landing Pages",
      image: "/images/ecommerce-store.png",
      link: "#",
    },

    // Web Apps & Tools
    {
      title: "Task Manager",
      category: "Web Apps & Tools",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      category: "Web Apps & Tools",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Chat Application",
      category: "Web Apps & Tools",
      image: "/placeholder.svg",
      link: "#",
    },

    // Bots & Automations
    {
      title: "Discord Bot",
      category: "Bots & Automations",
      image: "/images/discord-bot.png",
      link: "#",
    },
    {
      title: "Sentient Content Bot",
      category: "Bots & Automations",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "RugGuard",
      category: "Bots & Automations",
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  const categories = [
    "All",
    "Portfolio Websites",
    "Landing Pages",
    "Web Apps & Tools",
    "Bots & Automations",
  ];

  $: filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
</script>

<svelte:head>
  <title>Projects - Dere Boyo</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
  <h1 class="text-4xl font-semibold md:text-5xl">All Projects</h1>
  <p class="mt-3 text-sm text-muted-foreground md:mt-4 md:text-base">
    Browse through my portfolio of web development projects
  </p>

  <!-- Search and Filter -->
  <div
    class="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
  >
    <input
      type="text"
      bind:value={searchQuery}
      placeholder="Search projects..."
      class="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition md:w-64"
    />

    <div class="flex gap-2 overflow-x-auto scrollbar-hide">
      {#each categories as category}
        <button
          onclick={() => (selectedCategory = category)}
          class="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition {selectedCategory ===
          category
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary text-foreground hover:bg-accent'}"
        >
          {category}
        </button>
      {/each}
    </div>
  </div>

  <!-- Projects Grid -->
  <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each filteredProjects as project}
      <a
        href={project.link}
        class="group overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary"
      >
        <div class="aspect-video overflow-hidden bg-secondary">
          <img
            src={project.image}
            alt={project.title}
            class="h-full w-full object-cover transition group-hover:scale-105"
          />
        </div>
        <div class="p-4">
          <h3 class="font-semibold">{project.title}</h3>
          <p class="mt-1 text-sm text-muted-foreground">{project.category}</p>
        </div>
      </a>
    {/each}
  </div>

  {#if filteredProjects.length === 0}
    <div class="mt-12 text-center">
      <p class="text-muted-foreground">
        No projects found matching your criteria.
      </p>
    </div>
  {/if}
</div>
