import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, f as renderHead, e as renderSlot } from './astro/server_DhHMTByj.mjs';

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full flex items-center justify-center py-1.5 px-3"> <nav class="max-w-lg w-full"> <ul class="flex items-center justify-center gap-3"> <li class="text-gray-400"> <a href="/" class="block p-3 text-lg hover:text-white">Home</a> </li> <li class="text-gray-400"> <a href="https://github.com/tan911" class="block p-3 text-lg hover:text-white">Github</a> </li> <li class="text-gray-400"> <a href="/projects" class="block p-3 text-lg hover:text-white">Projects</a> </li> </ul> </nav> </header>`;
}, "C:/Users/jolan/OneDrive/Desktop/jovanlanutansite/src/components/Navigation.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { addStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(`flex items-center justify-center py-10 px-5 md:mt-auto ${addStyle}`, "class")}> <div class="text-center container"> <p class="text-[#BABEC5] py-1.5">
jovanlanutansite &copy; 2025 <span class="text-[#BABEC5] mr-2">by</span><a href="https://github.com/tan911" class="px-1.5 py-1 font-regular bg-purple-600 text-sm text-white rounded-md hover:bg-purple-800 transition-all" target="_blank">@bossing</a> </p> <p class="text-[#BABEC5] mt-2">Made with ❤ on Earth</p> </div> </footer>`;
}, "C:/Users/jolan/OneDrive/Desktop/jovanlanutansite/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="min-h-screen antialiased bg-slate-900"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/jolan/OneDrive/Desktop/jovanlanutansite/src/layouts/Layout.astro", void 0);

export { $$Navigation as $, $$Footer as a, $$Layout as b };
