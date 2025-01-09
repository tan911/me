/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DhHMTByj.mjs';
import { $ as $$Navigation, a as $$Footer, b as $$Layout } from '../chunks/Layout_CZ-X4dxJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('../chunks/post-1_u3glsKpn.mjs').then(n => n._)}), () => "./posts/*.md");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "All my thought's here are personal" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="flex items-center justify-center py-10 px-5 text-gray-400 md:py-20"> <div class="max-w-screen-lg w-full mx-auto"> <div class="text-center"> <h1 class="text-4xl font-bold text-white md:text-6xl">Blog post</h1> </div> <div class="mt-12 md:mt-20 md:text-lg"> <ul class="list-disc"> ${allPosts.map((post) => renderTemplate`<li> <a${addAttribute(post.url, "href")} class="underline underline-offset-4 text-white text-xl transition-all hover:text-purple-500"> ${post.frontmatter.pubDate} - ${post.frontmatter.title} </a> </li>`)} </ul> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "addStyle": "absolute right-0 left-0 bottom-0" })} ` })}`;
}, "C:/Users/jolan/OneDrive/Desktop/jovanlanutansite/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/jolan/OneDrive/Desktop/jovanlanutansite/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
