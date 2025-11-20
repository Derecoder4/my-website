<script lang="ts">
  export let title = "";
  export let description = "";
</script>

<div
  class="rounded-lg border border-border bg-card p-6 transition hover:border-primary"
>
  <h3 class="text-lg font-semibold">{title}</h3>
  <p class="mt-2 text-sm text-muted-foreground">{description}</p>
</div>
