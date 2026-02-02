<script lang="ts">
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  // Get package from URL query params
  let selectedPackage = "";

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    selectedPackage = urlParams.get("package") || "";
  });

  const packages = [
    { value: "starter", label: "Starter Package (₦150,000 – ₦250,000)" },
    { value: "business", label: "Business Package (₦300,000 – ₦500,000)" },
    { value: "premium", label: "Premium Package (Custom Quote)" },
    {
      value: "maintenance-basic",
      label: "Basic Care Maintenance (₦30,000 – ₦50,000/mo)",
    },
    {
      value: "maintenance-active",
      label: "Active Management (₦70,000 – ₦120,000/mo)",
    },
  ];

  let isSubmitting = false;
  let submitStatus: "idle" | "success" | "error" = "idle";
  let statusMessage = "";

  async function handleSubmit(event: Event) {
    event.preventDefault();
    isSubmitting = true;
    submitStatus = "idle";

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        submitStatus = "success";
        statusMessage =
          "Your request has been submitted! I'll get back to you within 24 hours.";
        form.reset();
      } else {
        submitStatus = "error";
        statusMessage = "Something went wrong. Please try again.";
      }
    } catch (error) {
      submitStatus = "error";
      statusMessage = "Failed to send request. Please try again.";
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <title>Get Started - Dere Boyo</title>
  <meta
    name="description"
    content="Start your project with Dere Boyo. Fill out the form to get started."
  />
</svelte:head>

<div class="min-h-screen bg-background text-foreground py-12 md:py-20">
  <div class="mx-auto max-w-2xl px-4 md:px-6">
    <!-- Back Link -->
    <a
      href="/"
      class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-8"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back to Home
    </a>

    <!-- Header -->
    <div class="text-center mb-10" in:fly={{ y: 20, duration: 400 }}>
      <span
        class="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary"
      >
        Get Started
      </span>
      <h1 class="text-3xl font-semibold md:text-4xl">
        Let's Build Something Amazing
      </h1>
      <p class="mt-4 text-muted-foreground">
        Fill out the form below and I'll get back to you within 24 hours.
      </p>
    </div>

    <!-- Form Card -->
    <div
      class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8"
      style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);"
      in:fly={{ y: 30, duration: 500, delay: 100 }}
    >
      <form on:submit={handleSubmit} class="space-y-6">
        <input
          type="hidden"
          name="access_key"
          value="e24e68f1-fa48-4054-a1d2-88b42834cb90"
        />
        <input type="hidden" name="redirect" value="false" />
        <input
          type="hidden"
          name="subject"
          value="New Project Inquiry from Portfolio"
        />
        <input
          type="checkbox"
          name="botcheck"
          class="hidden"
          style="display: none;"
        />

        <!-- Name & Email Row -->
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <label for="name" class="block text-sm font-semibold mb-2"
              >Full Name *</label
            >
            <input
              id="name"
              name="name"
              type="text"
              required
              class="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-semibold mb-2"
              >Email Address *</label
            >
            <input
              id="email"
              name="email"
              type="email"
              required
              class="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <!-- Phone -->
        <div>
          <label for="phone" class="block text-sm font-semibold mb-2"
            >Phone Number</label
          >
          <input
            id="phone"
            name="phone"
            type="tel"
            class="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="+234 800 000 0000"
          />
        </div>

        <!-- Package Selection -->
        <div>
          <label for="package" class="block text-sm font-semibold mb-2"
            >Select Package *</label
          >
          <select
            id="package"
            name="package"
            required
            bind:value={selectedPackage}
            class="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none cursor-pointer"
          >
            <option value="" disabled>Choose a package...</option>
            {#each packages as pkg}
              <option value={pkg.value}>{pkg.label}</option>
            {/each}
          </select>
        </div>

        <!-- Project Type -->
        <div>
          <label for="project_type" class="block text-sm font-semibold mb-2"
            >Project Type</label
          >
          <select
            id="project_type"
            name="project_type"
            class="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none cursor-pointer"
          >
            <option value="">Select project type...</option>
            <option value="portfolio">Portfolio Website</option>
            <option value="landing">Landing Page</option>
            <option value="business">Business Website</option>
            <option value="webapp">Web Application</option>
            <option value="ecommerce">E-commerce</option>
            <option value="other">Other</option>
          </select>
        </div>

        <!-- Project Description -->
        <div>
          <label for="message" class="block text-sm font-semibold mb-2"
            >Project Description *</label
          >
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            class="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
            placeholder="Tell me about your project, goals, and any specific requirements..."
          ></textarea>
        </div>

        <!-- Budget & Timeline Row -->
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <label for="budget" class="block text-sm font-semibold mb-2"
              >Budget Range</label
            >
            <select
              id="budget"
              name="budget"
              class="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none cursor-pointer"
            >
              <option value="">Select budget...</option>
              <option value="150k-250k">₦150,000 - ₦250,000</option>
              <option value="250k-400k">₦250,000 - ₦400,000</option>
              <option value="400k-600k">₦400,000 - ₦600,000</option>
              <option value="600k+">₦600,000+</option>
            </select>
          </div>
          <div>
            <label for="timeline" class="block text-sm font-semibold mb-2"
              >Timeline</label
            >
            <select
              id="timeline"
              name="timeline"
              class="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none cursor-pointer"
            >
              <option value="">Select timeline...</option>
              <option value="1-2weeks">1-2 weeks</option>
              <option value="2-4weeks">2-4 weeks</option>
              <option value="1-2months">1-2 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          disabled={isSubmitting}
          class="w-full py-4 px-6 flex items-center justify-center gap-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-150 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {#if isSubmitting}
            <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Submitting...
          {:else}
            Submit Request
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          {/if}
        </button>

        <!-- Status Messages -->
        {#if submitStatus === "success"}
          <div
            class="rounded-xl bg-green-500/10 border border-green-500/20 p-4 text-sm text-green-400 text-center"
          >
            ✓ {statusMessage}
          </div>
        {/if}

        {#if submitStatus === "error"}
          <div
            class="rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-400 text-center"
          >
            ✕ {statusMessage}
          </div>
        {/if}
      </form>
    </div>

    <!-- Trust Indicators -->
    <div
      class="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
      in:fly={{ y: 20, duration: 400, delay: 200 }}
    >
      <div class="flex items-center gap-2">
        <svg
          class="w-4 h-4 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        Secure & Private
      </div>
      <div class="flex items-center gap-2">
        <svg
          class="w-4 h-4 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        24hr Response
      </div>
      <div class="flex items-center gap-2">
        <svg
          class="w-4 h-4 text-primary"
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
        No Commitment Required
      </div>
    </div>
  </div>
</div>

<style>
  /* Custom select arrow */
  select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.25rem;
  }

  select option {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }
</style>
