<script lang="ts">
  import { fly } from "svelte/transition";
  import { inview } from "$lib/actions/inview";

  interface PricingTier {
    name: string;
    slug: string;
    description: string;
    price: string;
    priceNote?: string;
    features: string[];
    notIncluded: string[];
    highlighted?: boolean;
    badge?: string;
  }

  interface MaintenancePlan {
    name: string;
    price: string;
    features: string[];
  }

  const tiers: PricingTier[] = [
    {
      name: "Starter",
      slug: "starter",
      description:
        "Best for small businesses and professionals launching an online presence.",
      price: "₦150,000 – ₦250,000",
      features: [
        "3–5 page website",
        "Responsive design (mobile & desktop)",
        "Contact form integration",
        "Basic SEO setup",
        "Deployment & setup",
        "1–3 months post-launch support",
      ],
      notIncluded: [
        "Domain name purchase",
        "Website hosting",
        "Content writing",
      ],
    },
    {
      name: "Business",
      slug: "business",
      description:
        "Best for growing businesses that need a more robust online presence.",
      price: "₦300,000 – ₦500,000",
      highlighted: true,
      badge: "Popular",
      features: [
        "5–8 page website",
        "Custom UI/UX design",
        "Multiple enquiry/contact forms",
        "FAQ or Testimonials section",
        "Performance optimization",
        "Deployment & setup",
        "3 months post-launch support",
      ],
      notIncluded: [
        "Domain name purchase",
        "Website hosting",
        "Content writing",
        "Paid plugins/integrations",
      ],
    },
    {
      name: "Premium",
      slug: "premium",
      description:
        "For businesses requiring advanced features or custom functionality.",
      price: "Custom Quote",
      priceNote: "Based on scope & requirements",
      features: [
        "Custom website design",
        "Advanced layouts & integrations",
        "Extended testing & optimization",
        "Deployment & setup",
        "Custom support period",
      ],
      notIncluded: [
        "Domain name purchase",
        "Website hosting",
        "Third-party services/APIs",
        "Long-term maintenance",
      ],
    },
  ];

  const maintenancePlans: MaintenancePlan[] = [
    {
      name: "Basic Care",
      price: "₦30,000 – ₦50,000/mo",
      features: [
        "Uptime monitoring",
        "Minor content updates",
        "Security checks & backups",
        "Email support",
      ],
    },
    {
      name: "Active Management",
      price: "₦70,000 – ₦120,000/mo",
      features: [
        "Everything in Basic Care",
        "Priority support",
        "Regular content/layout updates",
        "Performance monitoring",
      ],
    },
  ];

  let visible = false;
</script>

<section id="pricing" class="relative py-16 md:py-24 overflow-hidden">
  <!-- Background gradient -->
  <div
    class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
  ></div>

  <!-- Floating Paper Decorations -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden">
    <div
      class="paper-float paper-1 absolute w-8 h-10 bg-primary/10 rounded-sm rotate-12 top-20 left-[10%]"
    ></div>
    <div
      class="paper-float paper-2 absolute w-6 h-8 bg-primary/5 rounded-sm -rotate-6 top-32 right-[15%]"
    ></div>
    <div
      class="paper-float paper-3 absolute w-10 h-12 bg-primary/10 rounded-sm rotate-45 bottom-40 left-[5%]"
    ></div>
    <div
      class="paper-float paper-4 absolute w-5 h-6 bg-primary/5 rounded-sm -rotate-12 bottom-60 right-[8%]"
    ></div>
    <div
      class="paper-float paper-5 absolute w-7 h-9 bg-primary/10 rounded-sm rotate-[20deg] top-1/2 left-[2%]"
    ></div>
    <div
      class="paper-float paper-6 absolute w-4 h-5 bg-primary/5 rounded-sm -rotate-[30deg] top-1/3 right-[3%]"
    ></div>
  </div>

  <div
    class="mx-auto max-w-7xl px-4 md:px-6"
    use:inview={{ threshold: 0.1, onEnter: () => (visible = true) }}
  >
    <!-- Header -->
    {#if visible}
      <div class="text-center mb-12 md:mb-16" in:fly={{ y: 30, duration: 600 }}>
        <span
          class="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary"
        >
          Pricing
        </span>
        <h2 class="text-3xl font-semibold md:text-4xl lg:text-5xl">
          Transparent Pricing
        </h2>
        <p class="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Choose the package that fits your needs. All prices cover design and
          development only — domain and hosting are paid directly by you for
          full ownership.
        </p>
      </div>
    {/if}

    <!-- Pricing Cards - Stacked on mobile -->
    <div
      class="relative flex flex-col items-center gap-0 md:gap-6 lg:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3"
    >
      {#if visible}
        {#each tiers as tier, i}
          <div
            class="pricing-card group relative flex flex-col w-full max-w-sm md:max-w-none rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:z-30 {tier.highlighted
              ? 'border-primary/50 bg-primary/5 shadow-lg shadow-primary/20 z-20 md:scale-105'
              : 'border-white/10 bg-white/5 dark:bg-white/5 hover:border-primary/30 hover:bg-white/10'}
            {i === 0
              ? 'z-10'
              : i === 1
                ? 'z-20 -mt-4 md:mt-0'
                : 'z-10 -mt-4 md:mt-0'}"
            style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);"
            in:fly={{ y: 40, duration: 600, delay: 100 + i * 100 }}
          >
            <!-- Badge -->
            {#if tier.badge}
              <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                <span
                  class="inline-block px-4 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground shadow-lg"
                >
                  {tier.badge}
                </span>
              </div>
            {/if}

            <div class="p-6 md:p-8 flex-1 flex flex-col">
              <!-- Title -->
              <h3 class="text-xl font-semibold">{tier.name}</h3>
              <p class="mt-2 text-sm text-muted-foreground">
                {tier.description}
              </p>

              <!-- Price -->
              <div class="mt-6 mb-6">
                <p class="text-2xl md:text-3xl font-bold text-foreground">
                  {tier.price}
                </p>
                {#if tier.priceNote}
                  <p class="mt-1 text-xs text-muted-foreground">
                    {tier.priceNote}
                  </p>
                {/if}
              </div>

              <!-- Features -->
              <div class="flex-1">
                <p
                  class="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3"
                >
                  What's included
                </p>
                <ul class="space-y-3">
                  {#each tier.features as feature}
                    <li class="flex items-start gap-3 text-sm">
                      <svg
                        class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  {/each}
                </ul>

                <!-- Not Included -->
                <p
                  class="text-xs font-medium uppercase tracking-wider text-muted-foreground mt-6 mb-3"
                >
                  Client responsibility
                </p>
                <ul class="space-y-2">
                  {#each tier.notIncluded as item}
                    <li
                      class="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <svg
                        class="w-4 h-4 flex-shrink-0 mt-0.5 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 12H4"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  {/each}
                </ul>
              </div>

              <!-- CTA Button with Arrow -->
              <a
                href="/contact?package={tier.slug}"
                class="cta-button mt-8 w-full py-3 px-6 flex items-center justify-center gap-3 text-sm font-medium rounded-xl transition-all duration-150 active:scale-95 active:shadow-inner {tier.highlighted
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 active:bg-primary/80'
                  : 'bg-white/10 text-foreground hover:bg-white/20 border border-white/20 active:bg-white/30'}"
              >
                <span>Get Started</span>
                <div
                  class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                >
                  <svg
                    class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        {/each}
      {/if}
    </div>

    <!-- Maintenance Plans -->
    {#if visible}
      <div class="mt-16 md:mt-20" in:fly={{ y: 40, duration: 600, delay: 500 }}>
        <div class="text-center mb-8">
          <h3 class="text-xl md:text-2xl font-semibold">
            Optional Maintenance & Management
          </h3>
          <p class="mt-2 text-sm text-muted-foreground">
            Post-launch website management, billed separately after your
            included support period.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {#each maintenancePlans as plan, i}
            <div
              class="rounded-xl border border-border bg-card/50 p-6 hover:border-primary/50 transition-all duration-300"
              in:fly={{ y: 30, duration: 600, delay: 600 + i * 100 }}
            >
              <div class="flex items-center justify-between mb-4">
                <h4 class="font-semibold">{plan.name}</h4>
                <span class="text-sm font-medium text-primary"
                  >{plan.price}</span
                >
              </div>
              <ul class="space-y-2">
                {#each plan.features as feature}
                  <li
                    class="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <svg
                      class="w-4 h-4 text-primary flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>

        <!-- Note -->
        <p
          class="mt-8 text-center text-xs text-muted-foreground max-w-xl mx-auto"
        >
          <strong>Note:</strong> Hosting and domain costs are always paid directly
          by the client to ensure full ownership and control.
        </p>
      </div>
    {/if}
  </div>
</section>

<style>
  /* Floating paper animations */
  .paper-float {
    animation:
      paperFloat 6s ease-in-out infinite,
      paperShake 3s ease-in-out infinite;
  }

  .paper-1 {
    animation-delay: 0s, 0.5s;
  }
  .paper-2 {
    animation-delay: 1s, 0s;
  }
  .paper-3 {
    animation-delay: 2s, 1.5s;
  }
  .paper-4 {
    animation-delay: 0.5s, 1s;
  }
  .paper-5 {
    animation-delay: 1.5s, 0.3s;
  }
  .paper-6 {
    animation-delay: 2.5s, 2s;
  }

  @keyframes paperFloat {
    0%,
    100% {
      transform: translateY(0) rotate(var(--tw-rotate, 0deg));
    }
    50% {
      transform: translateY(-20px) rotate(var(--tw-rotate, 0deg));
    }
  }

  @keyframes paperShake {
    0%,
    100% {
      transform: translateX(0) rotate(var(--tw-rotate, 0deg));
    }
    25% {
      transform: translateX(5px) rotate(calc(var(--tw-rotate, 0deg) + 3deg));
    }
    75% {
      transform: translateX(-5px) rotate(calc(var(--tw-rotate, 0deg) - 3deg));
    }
  }

  /* Stacked cards on mobile */
  @media (max-width: 767px) {
    .pricing-card {
      box-shadow: 0 -10px 30px -10px rgba(0, 0, 0, 0.2);
    }
  }

  /* Button click ripple effect */
  .cta-button {
    position: relative;
    overflow: hidden;
  }

  .cta-button:active::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 70%
    );
    animation: ripple 0.4s ease-out;
  }

  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
</style>
