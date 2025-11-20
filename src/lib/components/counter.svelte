<script lang="ts">
  let {
    target,
    duration = 2000,
    suffix = "",
  }: { target: number; duration?: number; suffix?: string } = $props();
  let count = $state(0);
  let node: HTMLElement | undefined = $state();

  $effect(() => {
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const frame = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // Ease out quart
          const ease = 1 - Math.pow(1 - progress, 4);
          count = Math.floor(ease * target);
          if (progress < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
        observer.disconnect();
      }
    });

    observer.observe(node);
    return () => observer.disconnect();
  });
</script>

<span bind:this={node}>{count}{suffix}</span>
