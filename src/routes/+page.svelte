<script>
  import Hero from "$lib/components/hero.svelte";
  import Projects from "$lib/components/projects.svelte";
  import Services from "$lib/components/services.svelte";
  import Pricing from "$lib/components/pricing.svelte";
  import About from "$lib/components/about.svelte";
  import Contact from "$lib/components/contact.svelte";
</script>

<svelte:head>
  <title>Dere Boyo - Digital Product Builder</title>
  <meta
    name="description"
    content="Building fast, functional, and modern digital products. Web2, Web3, no-code, and code solutions."
  />
</svelte:head>

<main class="min-h-screen bg-background text-foreground">
  <Hero />
  <Projects />
  <Services />
  <Pricing />
  <About />
  <Contact />
</main>
