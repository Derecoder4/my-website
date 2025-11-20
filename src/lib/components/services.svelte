<script>
  import ServiceCard from "./service-card.svelte";
  import { reveal } from "$lib/actions/reveal";
</script>

<section
  id="services"
  class="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20 reveal-on-scroll"
  use:reveal
>
  <h2 class="text-3xl font-semibold md:text-4xl">Services</h2>
  <p class="mt-2 text-sm text-muted-foreground md:text-base">
    What I build for your business
  </p>

  <div class="mt-10 grid gap-6 md:grid-cols-2">
    <ServiceCard
      title="Website Design & Development"
      description="Personal brand websites, portfolio sites, and landing pages built with clean design and modern technology."
    />
    <ServiceCard
      title="Web Applications"
      description="Custom web apps, dashboards, and utility tools tailored to your specific needs and workflow."
    />
    <ServiceCard
      title="Automation & Bots"
      description="Telegram, X, and Discord automation tools to streamline your operations and engagement."
    />
    <ServiceCard
      title="Web3 Integration"
      description="Blockchain-focused digital products across Web3 and DeFi ecosystems."
    />
  </div>
</section>
