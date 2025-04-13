// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Data Science",
      description: "This Platform are the learn Data Science",
      social: {
        github: "https://github.com/thedhruvish/datasciencewith",
        twitter: "https://x.com/dhruvishlathiya",
      },
      editLink: {
        baseUrl: "https://github.com/thedhruvish/datasciencewith/blob/main/",
      },
      plugins: [starlightThemeObsidian()],
      sidebar: [
        {
          label: "Introduction",
          link: "/docs",
        },
        {
          label: "Numpy",
          autogenerate: { directory: "Numpy", collapsed: true },
        },
        {
          label: "Pandas",
          autogenerate: { directory: "Pandas", collapsed: true },
        },
        {
          label: "Statistics",
          autogenerate: { directory: "Statistics", collapsed: true },
        },
      ],
    }),
  ],

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    resolve: {
      alias: {
        "@layouts": "/src/layouts", // make sure this matches your project structure
      },
    },
  },
});
