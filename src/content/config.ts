import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import type { CollectionEntry } from "astro:content"; 
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    categories: z.array(z.string()).optional(),
    image: z.string().transform((val) => {
      if (val.startsWith("/")) return val;
      return `/${val}`;
    }),
  }),
});

const projectCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{json,md,mdx}', base: "./src/content/projects" }),
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
export type BlogPostType = CollectionEntry<"blog">;
export type ProjectType = CollectionEntry<"projects">;