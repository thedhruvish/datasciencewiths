// import { defineCollection } from 'astro:content';
// import { docsLoader } from '@astrojs/starlight/loaders';
// import { docsSchema } from '@astrojs/starlight/schema';

// export const collections = {
// 	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
// };
 import { docsSchema } from '@astrojs/starlight/schema';
 import { defineCollection } from 'astro:content';
 import { pageSiteGraphSchema } from 'starlight-site-graph/schema';

 export const collections = {
   docs: defineCollection({
     schema: docsSchema({
       extend: pageSiteGraphSchema
     })
   })
 };