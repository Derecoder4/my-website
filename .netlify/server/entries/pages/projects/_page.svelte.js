import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredProjects;
  let searchQuery = "";
  let selectedCategory = "All";
  const projects = [
    // Portfolio Websites
    {
      title: "De Ronin",
      category: "Portfolio Websites",
      image: "/images/deronin.png",
      link: "#"
    },
    {
      title: "Sons Design",
      category: "Portfolio Websites",
      image: "/images/sons-design.png",
      link: "#"
    },
    {
      title: "Torest Tech",
      category: "Portfolio Websites",
      image: "/images/torest-tech.png",
      link: "#"
    },
    // Landing Pages
    {
      title: "422 Brand",
      category: "Landing Pages",
      image: "/images/422brand.png",
      link: "#"
    },
    {
      title: "Axia",
      category: "Landing Pages",
      image: "/images/axia.png",
      link: "#"
    },
    {
      title: "Web3 Righteous",
      category: "Landing Pages",
      image: "/images/web3righteous.png",
      link: "#"
    },
    // Web Apps & Tools
    {
      title: "Data Viz",
      category: "Web Apps & Tools",
      image: "/images/dataviz.png",
      link: "#"
    },
    {
      title: "Duke",
      category: "Web Apps & Tools",
      image: "/images/duke.png",
      link: "#"
    },
    {
      title: "LIG",
      category: "Web Apps & Tools",
      image: "/images/lig.png",
      link: "#"
    },
    // Bots & Automations
    {
      title: "David French",
      category: "Bots & Automations",
      image: "/images/david-french.png",
      link: "#"
    },
    {
      title: "Teaona",
      category: "Bots & Automations",
      image: "/images/teaona.png",
      link: "#"
    },
    {
      title: "Valery",
      category: "Bots & Automations",
      image: "/images/valery.png",
      link: "#"
    }
  ];
  const categories = [
    "All",
    "Portfolio Websites",
    "Landing Pages",
    "Web Apps & Tools",
    "Bots & Automations"
  ];
  filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All";
    return matchesSearch && matchesCategory;
  });
  return `${$$result.head += `<!-- HEAD_svelte-s4vbc9_START -->${$$result.title = `<title>Projects - Dere Boyo</title>`, ""}<!-- HEAD_svelte-s4vbc9_END -->`, ""} <div class="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24"><div class="mb-8" data-svelte-h="svelte-30p4v2"><a href="/" class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      Back to Home</a></div> <h1 class="text-4xl font-semibold md:text-5xl" data-svelte-h="svelte-tyhrmx">All Projects</h1> <p class="mt-3 text-sm text-muted-foreground md:mt-4 md:text-base" data-svelte-h="svelte-1c8ovtb">Browse through my portfolio of web development projects</p>  <div class="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><input type="text" placeholder="Search projects..." class="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition md:w-64"${add_attribute("value", searchQuery, 0)}> <div class="flex gap-2 overflow-x-auto scrollbar-hide">${each(categories, (category) => {
    return `<button class="${"whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition " + escape(
      selectedCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent",
      true
    )}">${escape(category)} </button>`;
  })}</div></div>  <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">${each(filteredProjects, (project) => {
    return `<a${add_attribute("href", project.link, 0)} class="group overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary"><div class="aspect-video overflow-hidden bg-secondary"><img${add_attribute("src", project.image, 0)}${add_attribute("alt", project.title, 0)} class="h-full w-full object-cover transition group-hover:scale-105"></div> <div class="p-4"><h3 class="font-semibold">${escape(project.title)}</h3> <p class="mt-1 text-sm text-muted-foreground">${escape(project.category)}</p></div> </a>`;
  })}</div> ${filteredProjects.length === 0 ? `<div class="mt-12 text-center" data-svelte-h="svelte-wcrqgq"><p class="text-muted-foreground">No projects found matching your criteria.</p></div>` : ``}</div>`;
});
export {
  Page as default
};
