// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Data Science',
          description: "This Platform are the learn Data Science",  
          social: {
              github: 'https://github.com/thedhruvish/datasciencewith',
              twitter: "https://x.com/dhruvishlathiya",
          },
          editLink:{
            baseUrl: "https://github.com/thedhruvish/datasciencewith/blob/main/"
          },
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
      }),
	],

  adapter: cloudflare({
      platformProxy: {
          enabled: true
      }
  }),
});