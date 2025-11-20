<script>
	let { title = '', description = '' } = $props();
</script>

<!-- Added rounded corners, updated font weights, improved responsive styling -->
<div class="rounded-lg border border-border p-4 md:p-6 hover:bg-secondary transition">
	<h3 class="text-base font-semibold md:text-lg">{title}</h3>
	<p class="mt-2 text-sm text-muted-foreground md:text-base">{description}</p>
</div>
