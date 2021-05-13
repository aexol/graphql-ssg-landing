import { Chain, html, md } from "./ssg/index.js";

const configCode = `{
  "url": "https://api.graphql.jobs/",
  "out": "./out",
  "in": "./pages",
  "port": 8080,
  "websocketPort": 1411
}`;

const code = `
import { Chain, html, md } from "./ssg/index.js";
const PrimaryButton = ({ text, href }) => html\`
  <a
    class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
    href="\${href}"
    >\${text}
  </a>
\`;


export default async () => {
  const data = await Chain(ssg.config.host).query({
    jobs: [
      {},
      { company: { name: true }, description: true, title: true, applyUrl: true },
    ],
  });
  return html\`
    <div class="p-4">
      \${data.jobs
        .slice(0, 10)
        .map(
          (j) => html\`<details class="mb-4">
            <summary class="font-bold text-blue-500">
              \${j.company.name + "-" + j.title}
            </summary>
            <article class="py-4 text-gray-400">
              <section class="markdown">\${md\`\${j.description}\`}</section>
            </article>
            \${PrimaryButton({ text: "Apply Now", href: j.applyUrl })}
          </details>\`
        ).join("")}
    </div>
  \`
}`;

const PrimaryButton = ({ text, href }) => html`
  <a
    class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
    href="${href}"
    >${text}</a
  >
`;
const SecondaryButton = ({ text, href }) => html`
  <a class="text-indigo-600 hover:underline" href="${href}">${text}</a>
`;

const Hero = ({
  tagline,
  title,
  description,
  left: { href, text },
  right: { href: rHref, text: rText },
}) => {
  return html`<section class="py-12 px-4 w-full">
    <div class="w-full mx-auto">
      <span class="text-2xl font-semibold py-24">${tagline}</span>
      <h2 class="text-5xl mt-2 mb-6 leading-tight font-semibold font-heading">
        ${title}
      </h2>
      <p class="mb-8 text-gray-400 text-xl leading-relaxed">${description}</p>
      <div>
        ${PrimaryButton({ text, href })}
        ${SecondaryButton({ text: rText, href: rHref })}
      </div>
    </div>
  </section>`;
};

const Feature = ({ title, text }) => html`
  <div class="md:w-1/3 py-4 px-8 mb-4 md:mb-0">
    <h3 class="text-2xl font-semibold font-heading">${title}</h3>
    <p class="my-4 text-gray-400 leading-relaxed">${text}</p>
  </div>
`;

const FeatureList = () => html`
  <section class="p-4">
    <div class="flex flex-wrap -mx-8">
      ${Feature({
        title: "Great Speed",
        text: "Create websites and deploy them instantly. Experience the flow you've never experienced before",
      })}
      ${Feature({
        title: "Instant availability",
        text: "GraphQL SSG websites can be deployed instantly using GraphQL Editor JAMStack.",
      })}
      ${Feature({
        title: "Nothing to learn",
        text: "It is easy to start with basic HTML and CSS knowledge. GraphQL client is autocompleted thanks to GraphQL Zeus.",
      })}
    </div>
  </section>
`;

const Footer = () => html`
  <footer class="p-4">
    <div class="flex flex-col lg:flex-row items-center">
      <div class="w-full lg:w-auto lg:mr-auto text-center lg:text-left">
        © 2021 GraphQL Editor
      </div>
    </div>
  </footer>
`;

const OnLoad = async () => {
  const hljs = await import("https://cdn.skypack.dev/highlight.js");
  const cbl = document.getElementById("code");
  const configBlock = document.getElementById("config");
  cbl.innerText = code;
  configBlock.innerText = configCode;
  setTimeout(() => {
    hljs.default.highlightElement(cbl, { language: "javascript" });
    hljs.default.highlightElement(configBlock, { language: "json" });
  }, 500);
};

window.onload = () => {
  OnLoad();
};

export default async () => {
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
      ${Hero({
        tagline: "GraphQL >_ SSG",
        title: "Create GraphQL data driven static websites in no time.",
        description:
          "What you get is fully autocomplete driven GraphQL Client injected in Static Website Generator. Create landing pages and leverage the power of GraphQL. Connect to powerful headless CMS of choice, create your own backend or play with fake data.",
        left: {
          text: "GitHub",
          href: "https://github.com/graphql-editor/graphql-ssg",
        },
        right: {
          text: "Test Live",
          href: "https://app.graphqleditor.com/explore-projects/feature-mole?visibleMenu=mock",
        },
      })}
      ${FeatureList()}
      <h3 class="text-lg font-semibold text-blue-600 p-4 mt-10">
        Example: Display companies looking for people to work in GraphQL
        industry
      </h3>
      <label class="px-4">graphql-ssg.json</label>
      <pre class="p-4"><code id="config"></code></pre>
      <label class="px-4">index.js</label>
      <pre class="p-4"><code id="code"></code></pre>
      <h3 class="text-lg font-semibold text-blue-600 p-4 mt-10">
        Example: Result
      </h3>
      <div class="p-4">
        ${data.jobs
          .slice(0, 10)
          .map(
            (j) => html`<details class="mb-4">
              <summary class="font-bold text-blue-500">
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
      <div class="markdown">${md`${readme}`}</div>
      ${Footer()}
    </div>
  `;
};
