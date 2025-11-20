import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/422brand.png","images/axia.png","images/boyo.png","images/dataviz.png","images/david-french.png","images/deronin.png","images/duke.png","images/lig.png","images/me.jpg","images/menu-icon.png","images/sons-design.png","images/teaona.png","images/torest-tech.png","images/valery.png","images/web3righteous.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.Cf1AVa7b.js",app:"_app/immutable/entry/app.Cvq_U0Vy.js",imports:["_app/immutable/entry/start.Cf1AVa7b.js","_app/immutable/chunks/CiZFBX6S.js","_app/immutable/chunks/CHKQLz2h.js","_app/immutable/chunks/DEa_2gqa.js","_app/immutable/entry/app.Cvq_U0Vy.js","_app/immutable/chunks/CHKQLz2h.js","_app/immutable/chunks/CDkiJmKm.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
