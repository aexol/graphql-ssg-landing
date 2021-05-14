import { html } from "../ssg/basic.js";
import { PrimaryButton } from "./PrimaryButton.js";

export const Build = () => html`
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
        <div class="relative flex">
          <div class="w-full xl:w-4/5 xl:ml-auto">
            <img
              class="md:max-w-xl xl:max-w-4xl mx-auto relative object-cover rounded"
              src="/assets/codessg.png"
              alt=""
            />
            <div
              class="xl:absolute top-0 left-0 mt-12 xl:mt-20 max-w-xl mx-auto xl:mx-0 p-6 xl:py-24 rounded bg-gray-800 border-gray-50 shadow-md text-center"
            >
              <span class="font-bold text-purple-600"
                >Nothing to learn</span
              >
              <h2 class="text-5xl font-bold font-heading text-white mb-10">
                Build &amp; Launch without problems
              </h2>
              <p class="max-w-xs mx-auto text-gray-500 leading-loose mb-10">
              Example: Display companies looking for people to work in GraphQL
        industry
              </p>
              ${PrimaryButton({
                text: "See code",
                href: "https://github.com/graphql-editor/graphql-ssg",
              })}
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
