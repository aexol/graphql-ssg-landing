import { html } from "../ssg/basic.js";

export const Header = () => html`
  <section>
    <div class="py-20 bg-gray-900 radius-for-skewed">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center">
          <div class="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div class="max-w-md">
              <span class="text-yellow-500 font-bold"
                >by graphqleditor.com</span
              >
              <h2
                class="mb-2 text-4xl lg:text-5xl font-bold font-heading text-white"
              >
                GraphQL Static Site Generator
              </h2>
              <div class="max-w-xs">
                <p class="text-gray-500 leading-loose">
                  Simple bundler for GraphQL based website using esmodules. What
                  makes it unique? It uses browser for ssg (not node).
                </p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="mb-12 lg:mb-8 flex flex-wrap items-start">
              <span
                class="mb-4 lg:mb-0 lg:mr-6 inline-flex items-center justify-center w-16 h-16 bg-blue-800 rounded text-blue-400 text-2xl font-bold"
                >1</span
              >
              <div class="w-full lg:w-3/4">
                <h3 class="mb-4 text-2xl font-bold font-heading text-white">
                  ES Modules
                </h3>
                <p class="text-gray-500 leading-loose">
                  Use ES Modules in your both static and dynamic code.
                </p>
              </div>
            </div>
            <div class="mb-12 lg:mb-8 flex flex-wrap items-start">
              <span
                class="mb-4 lg:mb-0 lg:mr-6 inline-flex items-center justify-center w-16 h-16 bg-pink-800 rounded text-pink-400 text-2xl font-bold"
                >2</span
              >
              <div class="w-full lg:w-3/4">
                <h3 class="mb-4 text-2xl font-bold font-heading text-white">
                  URL Imports
                </h3>
                <p class="text-gray-500 leading-loose">
                  import { html } from
                  'https://unpkg.com/htm/preact/index.mjs?module'; Is a way to
                  import now!
                </p>
              </div>
            </div>
            <div class="flex flex-wrap items-start">
              <span
                class="mb-4 lg:mb-0 lg:mr-6 inline-flex items-center justify-center w-16 h-16 bg-purple-800 rounded text-purple-400 text-2xl font-bold"
                >3</span
              >
              <div class="w-full lg:w-3/4">
                <h3 class="mb-4 text-2xl font-bold font-heading text-white">
                  Uses browser engine
                </h3>
                <p class="text-gray-500 leading-loose">
                  If your code is intended to run in browser why generate it
                  with node?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="skew skew-bottom mr-for-radius">
      <svg
        class="h-8 md:h-12 lg:h-20 w-full text-gray-900"
        viewBox="0 0 10 10"
        preserveAspectRatio="none"
      >
        <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
      </svg>
    </div>
  </section>
`;
