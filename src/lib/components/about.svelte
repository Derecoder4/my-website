<script>
  import { reveal } from "$lib/actions/reveal";
  import Counter from "./counter.svelte";

  const testimonials = [
    {
      name: "Torestech",
      role: "Tech Services",
      quote:
        "Dere built our entire landing page from scratch. The attention to detail and speed of delivery was phenomenal.",
    },
    {
      name: "Seun David",
      role: "Product Designer",
      quote:
        "One of the best developers I've worked with. He perfectly translated my designs into a pixel-perfect website.",
    },
    {
      name: "Tommy Frank",
      role: "Business Owner",
      quote:
        "The automation bot he built for us saved us hours of work every day. Highly recommended for any custom tools.",
    },
  ];
</script>

<section
  id="about"
  class="border-t border-border bg-card py-16 md:py-24 reveal-on-scroll"
  use:reveal
>
  <div class="mx-auto max-w-7xl px-4 md:px-6">
    <!-- About Content & Stats -->
    <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold md:text-4xl">About Me</h2>
        <div class="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I build fast, functional, and modern digital products. Over the past
            year, I've created tools, landing pages, web apps, dashboards, bots,
            and complete portfolio websites across Web2 and Web3.
          </p>
          <p>
            My process is straightforward: understand the problem, design the
            simplest solution, and ship consistently. I work with both no-code
            and code solutions, allowing me to move quickly while delivering
            clean, reliable systems.
          </p>
          <p>
            My focus is on clarity and structure. Whether it's a personal brand
            website, a utility dashboard, an automated bot, or a full web
            application, I approach every project with transparency and a strong
            attention to detail.
          </p>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 gap-6 md:gap-8">
        <div
          class="rounded-2xl border border-border bg-background/50 p-6 text-center hover:border-primary/50 transition duration-300"
        >
          <div class="text-3xl font-bold md:text-4xl text-primary">
            <Counter target={20} suffix="+" />
          </div>
          <p
            class="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wider"
          >
            Projects Completed
          </p>
        </div>
        <div
          class="rounded-2xl border border-border bg-background/50 p-6 text-center hover:border-primary/50 transition duration-300"
        >
          <div class="text-3xl font-bold md:text-4xl text-primary">
            <Counter target={1} suffix="y+" />
          </div>
          <p
            class="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wider"
          >
            Years Experience
          </p>
        </div>
        <div
          class="rounded-2xl border border-border bg-background/50 p-6 text-center hover:border-primary/50 transition duration-300"
        >
          <div class="text-3xl font-bold md:text-4xl text-primary">∞</div>
          <p
            class="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wider"
          >
            Growth Mindset
          </p>
        </div>
        <div
          class="rounded-2xl border border-border bg-background/50 p-6 text-center hover:border-primary/50 transition duration-300"
        >
          <div class="text-3xl font-bold md:text-4xl text-primary">
            <Counter target={100} suffix="%" />
          </div>
          <p
            class="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wider"
          >
            Attention to Detail
          </p>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="mt-24">
      <h3 class="text-2xl font-semibold text-center mb-10 md:text-3xl">
        What People Say
      </h3>
      <div class="grid gap-6 md:grid-cols-3">
        {#each testimonials as testimonial, i}
          <div
            class="rounded-xl border p-6 transition duration-300 animate-popup
						{i === 0 ? 'bg-blue-50 border-blue-100 dark:bg-card dark:border-border' : ''}
						{i === 1 ? 'bg-green-50 border-green-100 dark:bg-card dark:border-border' : ''}
						{i === 2
              ? 'bg-purple-50 border-purple-100 dark:bg-card dark:border-border'
              : ''}
						hover:shadow-lg dark:hover:border-primary/50"
            style="animation-delay: {i * 200}ms"
          >
            <div class="mb-4 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="opacity-50"
              >
                <path
                  d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"
                ></path>
              </svg>
            </div>
            <p
              class="text-sm text-muted-foreground italic mb-6 leading-relaxed"
            >
              "{testimonial.quote}"
            </p>
            <div class="flex items-center gap-3">
              <div
                class="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center text-xs font-bold text-foreground"
              >
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p class="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p class="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
