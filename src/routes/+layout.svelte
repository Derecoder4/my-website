<script context="module" lang="ts">
  export { default as Header } from "$lib/components/header.svelte";
  export { default as Footer } from "$lib/components/footer.svelte";
</script>

<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";
</script>

<div class="flex min-h-screen flex-col">
  <Header />
  <main class="flex-1">
    <slot />
  </main>
  <Footer />
</div>
