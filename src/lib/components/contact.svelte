<script lang="ts">
  import { reveal } from "$lib/actions/reveal";

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
        statusMessage = "Message sent successfully! I'll get back to you soon.";
        form.reset();
      } else {
        submitStatus = "error";
        statusMessage = "Something went wrong. Please try again.";
      }
    } catch (error) {
      submitStatus = "error";
      statusMessage = "Failed to send message. Please try again.";
    } finally {
      isSubmitting = false;
      setTimeout(() => {
        submitStatus = "idle";
        statusMessage = "";
      }, 5000);
    }
  }
</script>

<section
  id="contact"
  class="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24 reveal-on-scroll"
  use:reveal
>
  <h2 class="text-3xl font-semibold text-center md:text-4xl">
    Let's Work Together
  </h2>
  <p
    class="mt-3 text-center text-sm text-muted-foreground md:mt-4 md:text-base"
  >
    Have a project in mind? Let's build something amazing together.
  </p>

  <form onsubmit={handleSubmit} class="mt-8 space-y-5 md:mt-12 md:space-y-6">
    <input
      type="hidden"
      name="access_key"
      value="e24e68f1-fa48-4054-a1d2-88b42834cb90"
    />
    <input type="hidden" name="redirect" value="false" />
    <input
      type="hidden"
      name="subject"
      value="New Contact Form Submission from Portfolio"
    />

    <div>
      <label for="name" class="block text-sm font-semibold">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        required
        class="mt-2 w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition md:py-3 md:text-base"
        placeholder="Your name"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-semibold">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        class="mt-2 w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition md:py-3 md:text-base"
        placeholder="your@email.com"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-semibold">Message</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        required
        class="mt-2 w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition md:rows-5 md:py-3 md:text-base"
        placeholder="Tell me about your project..."
      ></textarea>
    </div>

    <input
      type="checkbox"
      name="botcheck"
      class="hidden"
      style="display: none;"
    />

    <button
      type="submit"
      disabled={isSubmitting}
      class="w-full rounded-lg border border-primary bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition md:px-8 md:py-3 md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isSubmitting ? "Sending..." : "Send Message"}
    </button>

    {#if submitStatus === "success"}
      <div
        class="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 text-sm text-green-800 dark:text-green-200"
      >
        {statusMessage}
      </div>
    {/if}

    {#if submitStatus === "error"}
      <div
        class="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 text-sm text-red-800 dark:text-red-200"
      >
        {statusMessage}
      </div>
    {/if}
  </form>
</section>
