
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/projects";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/projects": Record<string, never>
		};
		Pathname(): "/" | "/projects" | "/projects/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | "/images/422brand.png" | "/images/axia.png" | "/images/boyo.png" | "/images/dataviz.png" | "/images/david-french.png" | "/images/duke.png" | "/images/lig.png" | "/images/teaona.png" | "/images/valery.png" | "/images/web3righteous.png" | string & {};
	}
}