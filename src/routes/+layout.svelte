<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { theme } from "$lib/theme.svelte";
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";

  let currentTheme: "light" | "dark" = "dark";

  onMount(() => {
    theme.subscribe((value) => {
      currentTheme = value;
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(value);
    });
  });
</script>

<div class="flex min-h-screen flex-col">
  <Header />
  <main class="flex-1">
    <slot />
  </main>
  <Footer />
</div>
