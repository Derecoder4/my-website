import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
function createTheme() {
  const { subscribe, set, update } = writable("dark");
  function setTheme(newTheme) {
    set(newTheme);
  }
  function toggle() {
    update((current) => {
      const newTheme = current === "dark" ? "light" : "dark";
      return newTheme;
    });
  }
  return {
    subscribe,
    setTheme,
    toggle
  };
}
const theme = createTheme();
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mobileMenuOpen = false;
  let currentTheme = "dark";
  theme.subscribe((value) => {
    currentTheme = value;
  });
  function scrollToSection(id) {
    mobileMenuOpen = false;
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }
  function toggleTheme() {
    theme.toggle();
  }
  return `<header class="sticky top-0 z-50 border-b border-border bg-background"><nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 md:py-5"> <a href="/" class="flex-shrink-0" data-svelte-h="svelte-1li76aj"><img src="/images/me.jpg" alt="Dere Boyo" class="h-10 w-10 rounded-full object-cover"></a> <div class="hidden gap-6 md:flex"><a href="/projects" class="text-sm hover:text-muted-foreground transition" data-svelte-h="svelte-kzedaw">Projects</a> <button${add_attribute("onclick", () => scrollToSection("services"), 0)} class="text-sm hover:text-muted-foreground transition">Services</button> <button${add_attribute("onclick", () => scrollToSection("about"), 0)} class="text-sm hover:text-muted-foreground transition">About</button> <button${add_attribute("onclick", () => scrollToSection("contact"), 0)} class="text-sm hover:text-muted-foreground transition">Contact</button> <a href="https://github.com/Derecoder4" target="_blank" class="text-sm hover:text-muted-foreground transition" data-svelte-h="svelte-15kqi5a">GitHub</a>  <button${add_attribute("onclick", toggleTheme, 0)} class="text-sm hover:text-muted-foreground transition pl-4 border-l border-border">${escape(currentTheme === "dark" ? "☀" : "🌙")}</button></div>  <div class="flex items-center gap-4 md:hidden"><button${add_attribute("onclick", toggleTheme, 0)} class="text-xl">${escape(currentTheme === "dark" ? "☀" : "🌙")}</button> <button${add_attribute("onclick", () => mobileMenuOpen = !mobileMenuOpen, 0)} class="flex items-center justify-center">${mobileMenuOpen ? `<span class="text-xl" data-svelte-h="svelte-1onqbeq">✕</span>` : `<img src="/images/menu-icon.png" alt="Menu" class="h-8 w-8 dark:invert">`}</button></div></nav>  ${mobileMenuOpen ? `<div class="border-t border-border bg-accent md:hidden"><div class="flex flex-col gap-4 px-4 py-4"><a href="/projects" class="text-sm hover:text-muted-foreground transition" data-svelte-h="svelte-7tdsyk">Projects</a> <button${add_attribute("onclick", () => scrollToSection("services"), 0)} class="text-sm hover:text-muted-foreground transition text-left">Services</button> <button${add_attribute("onclick", () => scrollToSection("about"), 0)} class="text-sm hover:text-muted-foreground transition text-left">About</button> <button${add_attribute("onclick", () => scrollToSection("contact"), 0)} class="text-sm hover:text-muted-foreground transition text-left">Contact</button> <a href="https://github.com/Derecoder4" target="_blank" class="text-sm hover:text-muted-foreground transition" data-svelte-h="svelte-1amgzj2">GitHub</a></div></div>` : ``}</header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="border-t border-border bg-card" data-svelte-h="svelte-1s0f28s"><div class="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12"><div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3"><div><h3 class="font-semibold text-sm">Dere Boyo</h3> <p class="mt-2 text-xs text-muted-foreground md:text-sm">Building fast, functional, and modern digital products.</p></div> <div><h3 class="font-semibold text-sm">Quick Links</h3> <div class="mt-3 space-y-2"><a href="/projects" class="block text-xs text-muted-foreground hover:text-foreground transition md:text-sm">Projects</a> <a href="#services" class="block text-xs text-muted-foreground hover:text-foreground transition md:text-sm">Services</a> <a href="#about" class="block text-xs text-muted-foreground hover:text-foreground transition md:text-sm">About</a> <a href="#contact" class="block text-xs text-muted-foreground hover:text-foreground transition md:text-sm">Contact</a></div></div> <div><h3 class="font-semibold text-sm">Connect</h3> <div class="mt-3 space-y-2"><a href="https://github.com/Derecoder4" target="_blank" class="block text-xs text-muted-foreground hover:text-foreground transition md:text-sm">GitHub</a> <a href="https://twitter.com" target="_blank" class="block text-xs text-muted-foreground hover:text-foreground transition md:text-sm">Twitter</a> <a href="https://linkedin.com" target="_blank" class="block text-xs text-muted-foreground hover:text-foreground transition md:text-sm">LinkedIn</a></div></div></div> <div class="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground md:mt-12 md:pt-8 md:text-sm"><p>Built with precision. Shipped with care.</p></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex min-h-screen flex-col">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="flex-1">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Footer,
  Header,
  Layout as default
};
