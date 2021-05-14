import { html } from "../ssg/basic.js";
export const PrimaryButton = ({ text, href }) => html`
  <a
    class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
    href="${href}"
    >${text}</a
  >
`;
