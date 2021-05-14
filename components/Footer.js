import { html } from "../ssg/basic.js";

export const Footer = ({ links }) => html`
  <section>
    <div class="skew skew-top ml-for-radius">
      <svg
        class="h-8 md:h-12 lg:h-20 w-full text-gray-900"
        viewBox="0 0 10 10"
        preserveAspectRatio="none"
      >
        <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
      </svg>
    </div>
    <div class="py-20 bg-gray-900 radius-for-skewed">
      <div class="container mx-auto px-4">
        <div class="mb-20 lg:mb-40 max-w-2xl mx-auto text-center">
          <a
            class="inline-block mb-6 mx-auto text-white text-3xl font-bold leading-none"
            href="#"
            ><img
              class="h-12"
              src="atis-assets/logo/atis/atis-mono-sign.svg"
              alt=""
              width="auto"
          /></a>
          <h2 class="mb-4 text-white text-4xl lg:text-5xl font-bold">
            ES Modules are the future of web
          </h2>
          <p class="mb-6 max-w-md mx-auto text-gray-400 leading-loose">
            Dynamic and dynamically imported.
          </p>
          <a
            class="inline-block py-2 px-6 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-l-xl rounded-t-xl"
            href="https://github.com/graphql-editor/graphql-ssg"
            >Get from GitHub</a
          >
        </div>
        <div class="relative flex flex-wrap justify-between">
          <div class="w-full lg:w-1/3 mb-6">
            <ul class="flex flex-wrap justify-center">
              ${links.map(
                ({ name, href }) => html`<li class="mr-6">
                  <a class="text-gray-400 hover:text-gray-300" href="${href}"
                    >${name}</a
                  >
                </li>`
              )}
            </ul>
          </div>
          <div
            class="mb-6 w-full lg:w-auto lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 flex justify-center lg:space-x-4"
          ></div>
          <div class="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <span class="text-gray-400">GraphQL Editor sp. z o. o.</span>
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
