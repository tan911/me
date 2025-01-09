/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DhHMTByj.mjs';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Layout_CZ-X4dxJ.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DulPpE8N.mjs';
export { renderers } from '../renderers.mjs';

const Avatar = new Proxy({"src":"/_astro/avatar.DhqmuJzJ.webp","width":2494,"height":3118,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jolan/OneDrive/Desktop/jovanlanutansite/src/images/avatar.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Jovan Lanutan" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="flex items-center justify-center py-10 px-5 md:py-20"> <div class="max-w-screen-lg w-full mx-auto"> <div class="flex items-center justify-center flex flex-col gap-3 md:flex-row md:gap-0 md:justify-around"> <div class="relative w-52 h-52 rounded-full overflow-hidden border-2"> ${renderComponent($$result2, "Image", $$Image, { "src": Avatar, "alt": "Castring Avatar", "class": "absolute object-contain inset-0 w-full" })} </div> <div class="text-center"> <h1 class="text-4xl font-bold text-white md:text-6xl">
It's Jovan! 👋
</h1> <p class="text-[#BABEC5] pt-2 md:hidden md:pt-0">!/'joh-vuhn/</p> </div> </div> <div class="mt-12 md:mt-20 md:text-lg"> <ul class="text-white text-lg"> <li class="mt-2 tracking-tight">
- Exploring as always! Yes, <span class="font-bold bg-gradient-to-b from-amber-50 to-purple-500 bg-clip-text text-transparent sm:leading-tight">Always.</span> </li> <li class="mt-2 tracking-tight">
- <span class="font-bold">Sometimes</span> I write a few lines of code
            in seconds. <blockquote> <em class="font-medium text-purple-500 text-sm">(…and then spend hours watching as I realize those few lines
                technically do nothing. Tsk, tsk.)</em> </blockquote> </li> <li class="mt-2 tracking-tight">
- If you're here for fancy designs portfolio and polished "About"
            sections, you might be in the wrong place! But feel free to explore
            all the nonsense I've shared <a href="/blog" class="underline underline-offset-2 text-sm text-purple-500 font-medium hover:text-purple-500 transition-all">(here)</a>.
</li> </ul> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/jolan/OneDrive/Desktop/jovanlanutansite/src/pages/index.astro", void 0);

const $$file = "C:/Users/jolan/OneDrive/Desktop/jovanlanutansite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
