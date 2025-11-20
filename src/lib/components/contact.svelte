<section id="contact" class="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
  <h2 class="text-3xl font-semibold text-center md:text-4xl">
    Let's Work Together
  </h2>
  <p
    class="mt-3 text-center text-sm text-muted-foreground md:mt-4 md:text-base"
  >
    Have a project in mind? Let's build something amazing together.
  </p>

  <form
    onsubmit={(e) => e.preventDefault()}
    class="mt-8 space-y-5 md:mt-12 md:space-y-6"
  >
    <div>
      <label for="name" class="block text-sm font-semibold">Name</label>
      <input
        id="name"
        type="text"
        class="mt-2 w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition md:py-3 md:text-base"
        placeholder="Your name"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-semibold">Email</label>
      <input
        id="email"
        type="email"
        class="mt-2 w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition md:py-3 md:text-base"
        placeholder="your@email.com"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-semibold">Message</label>
      <textarea
        id="message"
        rows="4"
        class="mt-2 w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition md:rows-5 md:py-3 md:text-base"
        placeholder="Tell me about your project..."
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full rounded-lg border border-primary bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition md:px-8 md:py-3 md:text-base"
    >
      Send Message
    </button>
  </form>
</section>
