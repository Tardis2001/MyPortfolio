import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    categories: z.string().array().optional(),
    image: z.string(),
  }),
});

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    image: z.string(),
    techs: z.string().array().optional(),
    description: z.string(),
  }),
});

export const collections = { blog: blogCollection, project: projectCollection };
