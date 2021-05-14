import { Build } from "./components/Build.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { PrimaryButton } from "./components/PrimaryButton.js";
import { html } from "./ssg/basic.js";
import { md } from "./ssg/md.js";

export const head = () => html`
  <title>GraphQL Static Site Generator</title>
  <link href="./tailwind.css" type="text/css" rel="stylesheet" media="screen" />
`;

export default async () => {
  const { Chain } = await import("./ssg/index.js");
  const data = await Chain(ssg.config.url).query({
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
  const readme = await fetch(
    "https://raw.githubusercontent.com/graphql-editor/graphql-ssg/main/Readme.md"
  ).then((r) => r.text());
  return html`
    <style>
      @import "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/default.min.css";
    </style>
    <div class="container mx-auto">
      ${Header()} ${Build()}
      <h3 class="text-lg font-semibold text-blue-600 p-4 mt-10 text-center">
        Example: Result
      </h3>
      <div class="p-4">
        ${data.jobs
          .slice(0, 10)
          .map(
            (j) => html`<details class="mb-4">
              <summary class="font-bold text-gray-100 text-center">
                ${`${j.title} at ${j.company.name}`}
              </summary>
              <article class="py-4 text-gray-400">
                <section class="markdown">${md`${j.description}`}</section>
              </article>
              ${PrimaryButton({ text: "Apply Now", href: j.applyUrl })}
            </details>`
          )
          .join("")}
      </div>
      ${Footer({
        links: [
          { name: "Docs", href: "/readme.html" },
          { name: "GraphQL Editor", href: "https://graphqleditor.com" },
          {
            name: "GraphQL Zeus",
            href: "https://github.com/graphql-editor/graphql-zeus",
          },
          { name: "Stucco", href: "https://github.com/graphql-editor/stucco" },
        ],
      })}
    </div>
  `;
};
