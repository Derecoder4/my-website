<script lang="ts">
  export let target: number;
  export let duration: number = 2000;
  export let suffix: string = "";

  let count = 0;
  let node: HTMLElement;

  function startCounting() {
    const start = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      count = Math.floor(ease * target);
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  $: if (node) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startCounting();
        observer.disconnect();
      }
    });
    observer.observe(node);
  }
</script>

<span bind:this={node}>{count}{suffix}</span>
