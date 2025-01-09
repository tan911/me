/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DhHMTByj.mjs';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Layout_CZ-X4dxJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Jovan's projects" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="flex items-center justify-center py-10 px-5 text-gray-400 md:py-20"> <div class="max-w-screen-lg w-full mx-auto"> <div class="text-center"> <h1 class="text-4xl font-bold text-white mb-5 md:text-6xl">
Naghintay kaba!
</h1> <span>wala na. 😢</span> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/jolan/OneDrive/Desktop/jovanlanutansite/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/jolan/OneDrive/Desktop/jovanlanutansite/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
