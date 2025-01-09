/* empty css                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, e as renderSlot, u as unescapeHTML } from './astro/server_DhHMTByj.mjs';
import { b as $$Layout, $ as $$Navigation, a as $$Footer } from './Layout_CZ-X4dxJ.mjs';

const $$Astro = createAstro();
const $$MarkdownLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="flex items-center justify-center py-10 px-5 md:py-20"> <div> <div class="text-center mb-10"> <h1 class="text-5xl text-white font-bold mb-10 md:text-6xl"> ${frontmatter.title} </h1> <span class="text-gray-400 text-md italic">Poorly written by ${frontmatter.author} on ${frontmatter.pubDate}</span> </div> <div class="py-5"></div> <div class="container mx-auto prose prose-p:text-white prose-p:text-xl prose-h2:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:md:text-3xl
        prose-em:text-sm prose-em:text-purple-500 prose-a:font-medium prose-a:text-purple-500 prose-a:underline prose-a:underline-offset-4 prose-a:tracking-wide"> ${renderSlot($$result2, $$slots["default"])} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/jolan/OneDrive/Desktop/jovanlanutansite/src/layouts/MarkdownLayout.astro", void 0);

const html = "<p>When I was working as a junior full-stack web developer, I remember one of my tasks was to create a base website with a system that hydrates its content <em>(both written in <a href=\"https://vuejs.org/\"><em>Vue</em></a>)</em>. You can think of this system as a kind of content management. My boss asked me to make the website’s content dynamic based on data from external API services we subscribe to. I managed to achieve this, though initially, it was implemented on the client side in a somewhat inefficient way.</p>\n<h2 id=\"the-problem-rate-limit-nightmare\">The Problem: Rate Limit Nightmare</h2>\n<p>The main problem I encountered was the API rate limits. Like most APIs, each has restrictions on the number of allowed requests. For example, if the provider limits us to 500 requests per month, exceeding this limit results in errors, effectively blocking us from further access. Even on our own server, we implement similar functionality to enhance our system’s security. Now, imagine we have 500 visitors to the website in a single day, and each page refresh counts as a separate request—that limit could easily be reached within a day.</p>\n<h2 id=\"a-first-attempt-moving-to-the-server\">A First Attempt: Moving to the Server</h2>\n<p>My boss wanted a solution to avoid exhausting our requests so quickly, so I decided to move the code to the server side <em>(the system that adds content to the base website)</em>. Unfortunately, the same issue remained: every time a request hit the server, it would immediately make a request to the external API, then send the response back to the client. This setup still led to rapid consumption of our allowed API requests.</p>\n<h2 id=\"discovering-the-magic-of-caching\">Discovering the Magic of Caching</h2>\n<p>After researching potential solutions, I came across the concept of caching. In simple terms, caching is like temporarily saving information so it can be quickly accessed later without having to go back to the original source every time. Imagine a frequently used recipe you keep in your kitchen instead of looking it up in a cookbook each time—caching works the same way. It stores data in a “quick-access” place to speed things up and reduce the need to fetch it repeatedly. I checked our available tools and technologies and eventually found <a href=\"https://redis.io/\">Redis</a>. After discussing it with colleagues and conducting further research, I decided it could be a good fit for my needs.</p>\n<h2 id=\"the-solution-caching-with-redis\">The Solution: Caching with Redis</h2>\n<p>To address the problem, I set up Redis to cache responses from external API services and implemented logic to make a request every six hours. This reduced the number of requests to just four per day, totaling about 124 requests per month, making it feasible to stay within the 500 requests-per-month limit. How does this work? When the client <em>(the base website)</em> makes a request to the server, the server retrieves the data directly from Redis and sends it back to the client without automatically making a request to the external API.</p>";

				const frontmatter = {"layout":"../../../layouts/MarkdownLayout.astro","title":"The Job is to limit the request","pubDate":"2023-08-28T00:00:00.000Z","description":"","author":"Jovan Lanutan","tags":["blogging","Redis","Caching"]};
				const file = "C:/Users/jolan/OneDrive/Desktop/jovanlanutansite/src/pages/blog/posts/post-1.md";
				const url = "/blog/posts/post-1";
				function rawContent() {
					return "\nWhen I was working as a junior full-stack web developer, I remember one of my tasks was to create a base website with a system that hydrates its content _(both written in [*Vue*](https://vuejs.org/))_. You can think of this system as a kind of content management. My boss asked me to make the website’s content dynamic based on data from external API services we subscribe to. I managed to achieve this, though initially, it was implemented on the client side in a somewhat inefficient way.\n\n## The Problem: Rate Limit Nightmare\n\nThe main problem I encountered was the API rate limits. Like most APIs, each has restrictions on the number of allowed requests. For example, if the provider limits us to 500 requests per month, exceeding this limit results in errors, effectively blocking us from further access. Even on our own server, we implement similar functionality to enhance our system's security. Now, imagine we have 500 visitors to the website in a single day, and each page refresh counts as a separate request—that limit could easily be reached within a day.\n\n## A First Attempt: Moving to the Server\n\nMy boss wanted a solution to avoid exhausting our requests so quickly, so I decided to move the code to the server side _(the system that adds content to the base website)_. Unfortunately, the same issue remained: every time a request hit the server, it would immediately make a request to the external API, then send the response back to the client. This setup still led to rapid consumption of our allowed API requests.\n\n## Discovering the Magic of Caching\n\nAfter researching potential solutions, I came across the concept of caching. In simple terms, caching is like temporarily saving information so it can be quickly accessed later without having to go back to the original source every time. Imagine a frequently used recipe you keep in your kitchen instead of looking it up in a cookbook each time—caching works the same way. It stores data in a \"quick-access\" place to speed things up and reduce the need to fetch it repeatedly. I checked our available tools and technologies and eventually found [Redis](https://redis.io/). After discussing it with colleagues and conducting further research, I decided it could be a good fit for my needs.\n\n## The Solution: Caching with Redis\n\nTo address the problem, I set up Redis to cache responses from external API services and implemented logic to make a request every six hours. This reduced the number of requests to just four per day, totaling about 124 requests per month, making it feasible to stay within the 500 requests-per-month limit. How does this work? When the client _(the base website)_ makes a request to the server, the server retrieves the data directly from Redis and sends it back to the client without automatically making a request to the external API.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"the-problem-rate-limit-nightmare","text":"The Problem: Rate Limit Nightmare"},{"depth":2,"slug":"a-first-attempt-moving-to-the-server","text":"A First Attempt: Moving to the Server"},{"depth":2,"slug":"discovering-the-magic-of-caching","text":"Discovering the Magic of Caching"},{"depth":2,"slug":"the-solution-caching-with-redis","text":"The Solution: Caching with Redis"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
