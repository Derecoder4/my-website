<script>
	let { title = '', description = '', link = '#', image = '' } = $props();
</script>

<!-- Added rounded corners, reduced card size, improved hover states -->
<a href={link} target="_blank" class="group block overflow-hidden rounded-xl border border-border bg-card hover:bg-secondary transition">
	<div class="aspect-video overflow-hidden bg-muted">
		<img src={image || "/placeholder.svg"} alt={title} class="h-full w-full object-cover group-hover:opacity-80 transition" />
	</div>
	<div class="p-4">
		<h3 class="text-base font-semibold group-hover:text-muted-foreground transition">{title}</h3>
		<p class="mt-1.5 text-xs text-muted-foreground">{description}</p>
	</div>
</a>
