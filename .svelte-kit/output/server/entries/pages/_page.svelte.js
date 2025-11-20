import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/ssr.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="home" class="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 reveal-on-scroll" data-svelte-h="svelte-vjad18"><div class="grid gap-8 md:grid-cols-2 md:items-center"><div> <h1 class="text-4xl font-semibold leading-tight md:text-5xl">Build fast, functional, and modern digital products.</h1> <p class="mt-4 text-base text-muted-foreground md:mt-6 md:text-base">I create tools, landing pages, web apps, dashboards, bots, and portfolio
        websites across Web2 and Web3. Whether you need a personal brand
        website, a utility dashboard, or a complete web application, I deliver
        clean, reliable systems with attention to detail.</p> <div class="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8 md:gap-4"><a href="/projects" class="rounded-lg border border-primary bg-primary px-6 py-2.5 text-center text-sm font-medium text-primary-foreground hover:opacity-90 transition md:px-8 md:py-3">View My Work</a> <button class="rounded-lg border border-primary px-6 py-2.5 text-sm font-medium hover:bg-secondary transition md:px-8 md:py-3">Get in Touch</button></div></div> <div class="flex justify-center"><div class="relative h-56 w-56 overflow-hidden rounded-2xl border border-border md:h-72 md:w-72"><img src="/images/me.jpg" alt="Dere Boyo" class="h-full w-full object-cover"></div></div></div></section>`;
});
const Project_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { link = "#" } = $$props;
  let { image = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0) $$bindings.link(link);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  return `<a${add_attribute("href", link, 0)} class="group overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary"><div class="aspect-video overflow-hidden bg-secondary"><img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="h-full w-full object-cover transition group-hover:scale-105"></div> <div class="p-4"><h3 class="font-semibold">${escape(title)}</h3> <p class="mt-1 text-sm text-muted-foreground">${escape(description)}</p></div></a>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = [
    {
      title: "Axia",
      description: "Crypto Analysis Platform",
      link: "https://axia-dobby.vercel.app/",
      image: "/images/axia.png"
    },
    {
      title: "Duke The Great",
      description: "Growth Strategist Portfolio",
      link: "https://dukethagreat.netlify.app/",
      image: "/images/duke.png"
    },
    {
      title: "Sentient Content Bot",
      description: "Telegram Automation Bot",
      link: "https://t.me/sentientcontentbot",
      image: "/images/valery.png"
    },
    {
      title: "Boyo.T",
      description: "IT Specialist Portfolio",
      link: "https://boyotoritseju.netlify.app/",
      image: "/images/boyo.png"
    },
    {
      title: "Teaona",
      description: "Web3 Strategist Portfolio",
      link: "https://teaona.lovable.app/",
      image: "/images/teaona.png"
    },
    {
      title: "David's French Class",
      description: "Language Learning Platform",
      link: "https://davidfrenchclass.netlify.app/",
      image: "/images/david-french.png"
    },
    {
      title: "Data Viz",
      description: "Business Analytics Dashboard",
      link: "https://busiiness-analys.lovable.app/",
      image: "/images/dataviz.png"
    },
    {
      title: "LIG",
      description: "Autonomous AI Intelligence",
      link: "https://v0-network-animation.vercel.app/",
      image: "/images/lig.png"
    },
    {
      title: "Web3 Righteous",
      description: "Web3 Marketing Agency",
      link: "https://web3righteous.netlify.app/",
      image: "/images/web3righteous.png"
    },
    {
      title: "422 Brand",
      description: "Creative Streetwear & Branding",
      link: "https://four-twenty-two-brand-launch.lovable.app/",
      image: "/images/422brand.png"
    }
  ];
  return `<section id="projects" class="border-t border-border bg-card py-16 md:py-20 reveal-on-scroll overflow-hidden"><div class="mx-auto max-w-7xl px-4 md:px-6"><div class="flex items-end justify-between mb-8 md:mb-12" data-svelte-h="svelte-130mukc"><div><h2 class="text-3xl font-semibold md:text-4xl">Featured Projects</h2> <p class="mt-2 text-sm text-muted-foreground md:text-base">A selection of recent work.</p></div> <a href="/projects" class="hidden md:inline-flex items-center text-sm font-medium hover:text-primary transition">View all projects <span class="ml-1">→</span></a></div>  <div class="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"><div class="flex gap-6 animate-marquee w-max hover:[animation-play-state:paused]"> ${each(projects, (project) => {
    return `<div class="w-[300px] md:w-[400px] flex-shrink-0">${validate_component(Project_card, "ProjectCard").$$render(
      $$result,
      {
        title: project.title,
        description: project.description,
        link: project.link,
        image: project.image
      },
      {},
      {}
    )} </div>`;
  })}  ${each(projects, (project) => {
    return `<div class="w-[300px] md:w-[400px] flex-shrink-0">${validate_component(Project_card, "ProjectCard").$$render(
      $$result,
      {
        title: project.title,
        description: project.description,
        link: project.link,
        image: project.image
      },
      {},
      {}
    )} </div>`;
  })}</div></div> <div class="mt-8 text-center md:hidden" data-svelte-h="svelte-e4xmoc"><a href="/projects" class="inline-flex items-center text-sm font-medium hover:text-primary transition">View all projects <span class="ml-1">→</span></a></div></div></section>`;
});
const Service_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  return `<div class="rounded-lg border border-border bg-card p-6 transition hover:border-primary"><h3 class="text-lg font-semibold">${escape(title)}</h3> <p class="mt-2 text-sm text-muted-foreground">${escape(description)}</p></div>`;
});
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="services" class="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20 reveal-on-scroll"><h2 class="text-3xl font-semibold md:text-4xl" data-svelte-h="svelte-1svnzsm">Services</h2> <p class="mt-2 text-sm text-muted-foreground md:text-base" data-svelte-h="svelte-dj58pd">What I build for your business</p> <div class="mt-10 grid gap-6 md:grid-cols-2">${validate_component(Service_card, "ServiceCard").$$render(
    $$result,
    {
      title: "Website Design & Development",
      description: "Personal brand websites, portfolio sites, and landing pages built with clean design and modern technology."
    },
    {},
    {}
  )} ${validate_component(Service_card, "ServiceCard").$$render(
    $$result,
    {
      title: "Web Applications",
      description: "Custom web apps, dashboards, and utility tools tailored to your specific needs and workflow."
    },
    {},
    {}
  )} ${validate_component(Service_card, "ServiceCard").$$render(
    $$result,
    {
      title: "Automation & Bots",
      description: "Telegram, X, and Discord automation tools to streamline your operations and engagement."
    },
    {},
    {}
  )} ${validate_component(Service_card, "ServiceCard").$$render(
    $$result,
    {
      title: "Web3 Integration",
      description: "Blockchain-focused digital products across Web3 and DeFi ecosystems."
    },
    {},
    {}
  )}</div></section>`;
});
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { target } = $$props;
  let { duration = 2e3 } = $$props;
  let { suffix = "" } = $$props;
  let count = 0;
  let node;
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0) $$bindings.suffix(suffix);
  return `<span${add_attribute("this", node, 0)}>${escape(count)}${escape(suffix)}</span>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const testimonials = [
    {
      name: "Torestech",
      role: "Tech Services",
      quote: "Dere built our entire landing page from scratch. The attention to detail and speed of delivery was phenomenal."
    },
    {
      name: "Seun David",
      role: "Product Designer",
      quote: "One of the best developers I've worked with. He perfectly translated my designs into a pixel-perfect website."
    },
    {
      name: "Tommy Frank",
      role: "Business Owner",
      quote: "The automation bot he built for us saved us hours of work every day. Highly recommended for any custom tools."
    }
  ];
  return `<section id="about" class="border-t border-border bg-card py-16 md:py-24 reveal-on-scroll"><div class="mx-auto max-w-7xl px-4 md:px-6"> <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"><div class="space-y-6" data-svelte-h="svelte-h94slp"><h2 class="text-3xl font-semibold md:text-4xl">About Me</h2> <div class="space-y-4 text-muted-foreground leading-relaxed"><p>I build fast, functional, and modern digital products. Over the past
            year, I&#39;ve created tools, landing pages, web apps, dashboards, bots,
            and complete portfolio websites across Web2 and Web3.</p> <p>My process is straightforward: understand the problem, design the
            simplest solution, and ship consistently. I work with both no-code
            and code solutions, allowing me to move quickly while delivering
            clean, reliable systems.</p> <p>My focus is on clarity and structure. Whether it&#39;s a personal brand
            website, a utility dashboard, an automated bot, or a full web
            application, I approach every project with transparency and a strong
            attention to detail.</p></div></div>  <div class="grid grid-cols-2 gap-6 md:gap-8"><div class="rounded-2xl border border-border bg-background/50 p-6 text-center hover:border-primary/50 transition duration-300"><div class="text-3xl font-bold md:text-4xl text-primary">${validate_component(Counter, "Counter").$$render($$result, { target: 20, suffix: "+" }, {}, {})}</div> <p class="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wider" data-svelte-h="svelte-1fixaly">Projects Completed</p></div> <div class="rounded-2xl border border-border bg-background/50 p-6 text-center hover:border-primary/50 transition duration-300"><div class="text-3xl font-bold md:text-4xl text-primary">${validate_component(Counter, "Counter").$$render($$result, { target: 1, suffix: "y+" }, {}, {})}</div> <p class="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wider" data-svelte-h="svelte-guemsp">Years Experience</p></div> <div class="rounded-2xl border border-border bg-background/50 p-6 text-center hover:border-primary/50 transition duration-300" data-svelte-h="svelte-bkaqai"><div class="text-3xl font-bold md:text-4xl text-primary">∞</div> <p class="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Growth Mindset</p></div> <div class="rounded-2xl border border-border bg-background/50 p-6 text-center hover:border-primary/50 transition duration-300"><div class="text-3xl font-bold md:text-4xl text-primary">${validate_component(Counter, "Counter").$$render($$result, { target: 100, suffix: "%" }, {}, {})}</div> <p class="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wider" data-svelte-h="svelte-16igixn">Attention to Detail</p></div></div></div>  <div class="mt-24"><h3 class="text-2xl font-semibold text-center mb-10 md:text-3xl" data-svelte-h="svelte-11nbkuk">What People Say</h3> <div class="grid gap-6 md:grid-cols-3">${each(testimonials, (testimonial, i) => {
    return `<div class="${"rounded-xl border p-6 transition duration-300 animate-popup " + escape(
      i === 0 ? "bg-blue-50 border-blue-100 dark:bg-card dark:border-border" : "",
      true
    ) + " " + escape(
      i === 1 ? "bg-green-50 border-green-100 dark:bg-card dark:border-border" : "",
      true
    ) + " " + escape(
      i === 2 ? "bg-purple-50 border-purple-100 dark:bg-card dark:border-border" : "",
      true
    ) + " hover:shadow-lg dark:hover:border-primary/50"}" style="${"animation-delay: " + escape(i * 200, true) + "ms"}"><div class="mb-4 text-primary" data-svelte-h="svelte-1x0eo8s"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="opacity-50"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg></div> <p class="text-sm text-muted-foreground italic mb-6 leading-relaxed">&quot;${escape(testimonial.quote)}&quot;</p> <div class="flex items-center gap-3"><div class="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center text-xs font-bold text-foreground">${escape(testimonial.name.charAt(0))}</div> <div><p class="text-sm font-semibold text-foreground">${escape(testimonial.name)}</p> <p class="text-xs text-muted-foreground">${escape(testimonial.role)}</p> </div></div> </div>`;
  })}</div></div></div></section>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="contact" class="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24 reveal-on-scroll"><h2 class="text-3xl font-semibold text-center md:text-4xl" data-svelte-h="svelte-1je1705">Let&#39;s Work Together</h2> <p class="mt-3 text-center text-sm text-muted-foreground md:mt-4 md:text-base" data-svelte-h="svelte-1x3srdj">Have a project in mind? Let&#39;s build something amazing together.</p> <form class="mt-8 space-y-5 md:mt-12 md:space-y-6"><input type="hidden" name="access_key" value="e24e68f1-fa48-4054-a1d2-88b42834cb90"> <input type="hidden" name="redirect" value="false"> <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio"> <div data-svelte-h="svelte-wq2m7"><label for="name" class="block text-sm font-semibold">Name</label> <input id="name" name="name" type="text" required class="mt-2 w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition md:py-3 md:text-base" placeholder="Your name"></div> <div data-svelte-h="svelte-js2a58"><label for="email" class="block text-sm font-semibold">Email</label> <input id="email" name="email" type="email" required class="mt-2 w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition md:py-3 md:text-base" placeholder="your@email.com"></div> <div data-svelte-h="svelte-8f7yxn"><label for="message" class="block text-sm font-semibold">Message</label> <textarea id="message" name="message" rows="4" required class="mt-2 w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition md:rows-5 md:py-3 md:text-base" placeholder="Tell me about your project..."></textarea></div> <input type="checkbox" name="botcheck" class="hidden" style="display: none;"> <button type="submit" ${""} class="w-full rounded-lg border border-primary bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition md:px-8 md:py-3 md:text-base disabled:opacity-50 disabled:cursor-not-allowed">${escape("Send Message")}</button> ${``} ${``}</form></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1f91848_START -->${$$result.title = `<title>Dere Boyo - Digital Product Builder</title>`, ""}<meta name="description" content="Building fast, functional, and modern digital products. Web2, Web3, no-code, and code solutions."><!-- HEAD_svelte-1f91848_END -->`, ""} <main class="min-h-screen bg-background text-foreground">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})} ${validate_component(Services, "Services").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
