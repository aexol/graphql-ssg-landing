import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { html } from "./ssg/basic.js";
import { md } from "./ssg/md.js";

export const head = () => html`
  <title>GraphQL Static Site Generator</title>
  <link href="./tailwind.css" type="text/css" rel="stylesheet" media="screen" />
  <link href="./index.css" type="text/css" rel="stylesheet" media="screen" />
`;

export default async () => {
  const readme = await fetch(
    "https://raw.githubusercontent.com/graphql-editor/graphql-ssg/main/Readme.md"
  ).then((r) => r.text());
  return html`
    <style>
      @import "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/default.min.css";
    </style>
    <div class="container mx-auto">
      ${Header()}
      <div class="markdown">${md`${readme}`}</div>
      ${Footer({
        links: [
          { name: "Home", href: "/" },
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
