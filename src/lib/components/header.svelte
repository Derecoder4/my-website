<script lang="ts">
  import { theme } from "$lib/theme.svelte";

  let mobileMenuOpen = false;
  let currentTheme: "light" | "dark" = "dark";

  theme.subscribe((value) => {
    currentTheme = value;
  });

  function scrollToSection(id: string) {
    mobileMenuOpen = false;
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  function toggleTheme() {
    theme.toggle();
  }

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<header class="sticky top-0 z-50 border-b border-border bg-background">
  <nav
    class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 md:py-5"
  >
    <a href="/" class="flex-shrink-0">
      <img
        src="/images/me.jpg"
        alt="Dere Boyo"
        class="h-10 w-10 rounded-full object-cover"
      />
    </a>

    <div class="hidden gap-6 md:flex">
      <a href="/projects" class="text-sm hover:text-muted-foreground transition"
        >Projects</a
      >
      <button
        on:click={() => scrollToSection("services")}
        class="text-sm hover:text-muted-foreground transition">Services</button
      >
      <button
        on:click={() => scrollToSection("about")}
        class="text-sm hover:text-muted-foreground transition">About</button
      >
      <button
        on:click={() => scrollToSection("contact")}
        class="text-sm hover:text-muted-foreground transition">Contact</button
      >
      <a
        href="https://github.com/Derecoder4"
        target="_blank"
        class="text-sm hover:text-muted-foreground transition">GitHub</a
      >
      <button
        on:click={toggleTheme}
        class="text-sm hover:text-muted-foreground transition pl-4 border-l border-border"
      >
        {currentTheme === "dark" ? "☀" : "🌙"}
      </button>
    </div>

    <!-- Mobile menu button and theme toggle -->
    <div class="flex items-center gap-4 md:hidden">
      <button on:click={toggleTheme} class="text-xl">
        {currentTheme === "dark" ? "☀" : "🌙"}
      </button>
      <button on:click={toggleMenu} class="flex items-center justify-center">
        {#if mobileMenuOpen}
          <span class="text-xl">✕</span>
        {:else}
          <img
            src="/images/menu-icon.png"
            alt="Menu"
            class="h-8 w-8 dark:invert"
          />
        {/if}
      </button>
    </div>
  </nav>

  <!-- Mobile menu -->
  {#if mobileMenuOpen}
    <div class="border-t border-border bg-accent md:hidden">
      <div class="flex flex-col gap-4 px-4 py-4">
        <a
          href="/projects"
          class="text-sm hover:text-muted-foreground transition">Projects</a
        >
        <button
          on:click={() => scrollToSection("services")}
          class="text-sm hover:text-muted-foreground transition text-left"
          >Services</button
        >
        <button
          on:click={() => scrollToSection("about")}
          class="text-sm hover:text-muted-foreground transition text-left"
          >About</button
        >
        <button
          on:click={() => scrollToSection("contact")}
          class="text-sm hover:text-muted-foreground transition text-left"
          >Contact</button
        >
        <a
          href="https://github.com/Derecoder4"
          target="_blank"
          class="text-sm hover:text-muted-foreground transition">GitHub</a
        >
      </div>
    </div>
  {/if}
</header>
