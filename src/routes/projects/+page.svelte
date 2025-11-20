<script lang="ts">
  interface Project {
    title: string;
    category: string;
    image: string;
    link: string;
  }

  let searchQuery = "";
  let selectedCategory = "All";

  const projects: Project[] = [
    // Portfolio Websites
    {
      title: "Web3 Righteous",
      category: "Portfolio Websites",
      image: "/images/web3righteous.png",
      link: "https://web3righteous.netlify.app/",
    },
    {
      title: "De Ronin",
      category: "Portfolio Websites",
      image: "/images/deronin.png",
      link: "https://deronin.netlify.app/",
    },
    {
      title: "Duke The Great",
      category: "Portfolio Websites",
      image: "/images/duke.png",
      link: "https://dukethagreat.netlify.app/",
    },
    {
      title: "Teaona",
      category: "Portfolio Websites",
      image: "/images/teaona.png",
      link: "https://teaona.lovable.app/",
    },
    {
      title: "Boyo.T",
      category: "Portfolio Websites",
      image: "/images/boyo.png",
      link: "https://boyotoritseju.netlify.app/",
    },
    {
      title: "David's French Class",
      category: "Portfolio Websites",
      image: "/images/david-french.png",
      link: "https://davidfrenchclass.netlify.app/",
    },
    {
      title: "The Great Ola",
      category: "Portfolio Websites",
      image: "/images/me.jpg", // Using placeholder as no specific image was provided for this new one
      link: "https://thegreatola.netlify.app/",
    },

    // Landing Pages
    {
      title: "Sons Design",
      category: "Landing Pages",
      image: "/images/sons-design.png",
      link: "https://sonsdesign.netlify.app/",
    },
    {
      title: "Torest Tech",
      category: "Landing Pages",
      image: "/images/torest-tech.png",
      link: "https://toresttech.space/",
    },
    {
      title: "422 Brand",
      category: "Landing Pages",
      image: "/images/422brand.png",
      link: "https://four-twenty-two-brand-launch.lovable.app/",
    },
    {
      title: "LIG",
      category: "Landing Pages",
      image: "/images/lig.png",
      link: "https://v0-network-animation.vercel.app/",
    },

    // Bots & Automations
    {
      title: "Sentient Content Bot",
      category: "Bots & Automations",
      image: "/images/valery.png", // Using placeholder
      link: "https://t.me/sentientcontentbot",
    },
    {
      title: "Rugguard Bot",
      category: "Bots & Automations",
      image: "/images/valery.png", // Using placeholder
      link: "https://github.com/Derecoder4/Rugguard-bot",
    },

    // Web Apps & Tools (Utility apps)
    {
      title: "Axia",
      category: "Web Apps & Tools",
      image: "/images/axia.png",
      link: "https://axia-dobby.vercel.app/",
    },
    {
      title: "Data Viz",
      category: "Web Apps & Tools",
      image: "/images/dataviz.png",
      link: "https://busiiness-analys.lovable.app/",
    },

    // Models
    {
      title: "Early Warning System",
      category: "AI Models",
      image: "/images/dataviz.png", // Using placeholder
      link: "#", // No link provided
    },
  ];

  const categories = [
    "All",
    "Portfolio Websites",
    "Landing Pages",
    "Web Apps & Tools",
    "Bots & Automations",
    "AI Models",
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
  <div class="mb-8">
    <a
      href="/"
      class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back to Home
    </a>
  </div>

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
          on:click={() => (selectedCategory = category)}
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
