import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    categories: z.array(z.string()).optional(),
    image: z.string().transform((val) => {
      if (val.startsWith("/")) return val;
      return `/${val}`;
    }),
  }),
});

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    image: z.string().transform((val) => {
      if (val.startsWith("/")) return val;
      return `/${val}`;
    }),
    techs: z.array(z.string()).optional(),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
