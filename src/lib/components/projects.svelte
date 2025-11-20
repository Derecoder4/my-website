<script>
  import ProjectCard from "./project-card.svelte";
  import { reveal } from "$lib/actions/reveal";

  const projects = [
    {
      title: "Axia",
      description: "Crypto Analysis Platform",
      link: "#",
      image: "/images/axia.png",
    },
    {
      title: "Duke The Great",
      description: "Growth Strategist Portfolio",
      link: "https://dukethagreat.netlify.app/",
      image: "/images/duke.png",
    },
    {
      title: "Valery Rentals",
      description: "Vacation Rental Platform",
      link: "#",
      image: "/images/valery.png",
    },
    {
      title: "Boyo.T",
      description: "IT Specialist Portfolio",
      link: "#",
      image: "/images/boyo.png",
    },
    {
      title: "Teaona",
      description: "Web3 Strategist Portfolio",
      link: "https://web3righteous.netlify.app/",
      image: "/images/teaona.png",
    },
    {
      title: "David's French Class",
      description: "Language Learning Platform",
      link: "#",
      image: "/images/david-french.png",
    },
    {
      title: "DataViz Pro",
      description: "Business Analytics Dashboard",
      link: "#",
      image: "/images/dataviz.png",
    },
    {
      title: "LIG",
      description: "Autonomous AI Intelligence",
      link: "#",
      image: "/images/lig.png",
    },
    {
      title: "Web3Righteous",
      description: "Web3 Marketing Agency",
      link: "#",
      image: "/images/web3righteous.png",
    },
    {
      title: "422 The Brand",
      description: "Creative Streetwear & Branding",
      link: "#",
      image: "/images/422brand.png",
    },
  ];
</script>

<section
  id="projects"
  class="border-t border-border bg-card py-16 md:py-20 reveal-on-scroll overflow-hidden"
  use:reveal
>
  <div class="mx-auto max-w-7xl px-4 md:px-6">
    <div class="flex items-end justify-between mb-8 md:mb-12">
      <div>
        <h2 class="text-3xl font-semibold md:text-4xl">Featured Projects</h2>
        <p class="mt-2 text-sm text-muted-foreground md:text-base">
          A selection of recent work.
        </p>
      </div>
      <a
        href="/projects"
        class="hidden md:inline-flex items-center text-sm font-medium hover:text-primary transition"
      >
        View all projects <span class="ml-1">→</span>
      </a>
    </div>

    <!-- Infinite Marquee Container -->
    <div
      class="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div
        class="flex gap-6 animate-marquee w-max hover:[animation-play-state:paused]"
      >
        <!-- Original Projects -->
        {#each projects as project}
          <div class="w-[300px] md:w-[400px] flex-shrink-0">
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          </div>
        {/each}
        <!-- Duplicated Projects for Seamless Loop -->
        {#each projects as project}
          <div class="w-[300px] md:w-[400px] flex-shrink-0">
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          </div>
        {/each}
      </div>
    </div>

    <div class="mt-8 text-center md:hidden">
      <a
        href="/projects"
        class="inline-flex items-center text-sm font-medium hover:text-primary transition"
      >
        View all projects <span class="ml-1">→</span>
      </a>
    </div>
  </div>
</section>
