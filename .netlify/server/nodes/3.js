

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.q2VaA0rM.js","_app/immutable/chunks/CHKQLz2h.js","_app/immutable/chunks/CDkiJmKm.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
