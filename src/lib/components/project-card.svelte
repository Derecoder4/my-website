<script lang="ts">
  export let title = "";
  export let description = "";
  export let link = "#";
  export let image = "";
</script>

<a
  href={link}
  class="group overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary"
>
  <div class="aspect-video overflow-hidden bg-secondary">
    <img
      src={image}
      alt={title}
      class="h-full w-full object-cover transition group-hover:scale-105"
    />
  </div>
  <div class="p-4">
    <h3 class="font-semibold">{title}</h3>
    <p class="mt-1 text-sm text-muted-foreground">{description}</p>
  </div>
</a>
