import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    pubDate: z.string(),
    description: z.string().optional(),
    categories: z.string().array(),
    image: z.string(),
  }),
});

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    link: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog: blogCollection, project: projectCollection };
