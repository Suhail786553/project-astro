import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ClKDaje0.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Bh1lk4RK.mjs');
const _page1 = () => import('./chunks/_dog__D9ALG9M7.mjs');
const _page2 = () => import('./chunks/index_BRa2du-n.mjs');
const _page3 = () => import('./chunks/_.._U3aW67hm.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/dog/[dog].astro", _page1],
    ["src/pages/index.astro", _page2],
    ["src/pages/[...all].astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "ffc4ed88-5f7d-404e-b6bb-9a0075936c74"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
