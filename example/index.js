import { html } from "./ssg/basic.js";
import { md } from "./ssg/md.js";

const PrimaryButton = ({ text, href }) => html`
  <a
    class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
    href="${href}"
    >${text}
  </a>
`;

export default async () => {
  const { Chain } = await import("./ssg/index.js");
  const data = await Chain(ssg.config.host).query({
    jobs: [
      {},
      {
        company: { name: true },
        description: true,
        title: true,
        applyUrl: true,
      },
    ],
  });
  return html`
    <div class="p-4">
      ${data.jobs
        .slice(0, 10)
        .map(
          (j) => html`<details class="mb-4">
            <summary class="font-bold text-blue-500">
              ${j.company.name + "-" + j.title}
            </summary>
            <article class="py-4 text-gray-400">
              <section class="markdown">${md`${j.description}`}</section>
            </article>
            ${PrimaryButton({ text: "Apply Now", href: j.applyUrl })}
          </details>`
        )
        .join("")}
    </div>
  `;
};
