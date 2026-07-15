import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.union([z.string(), z.date()]).optional(),
    lastModified: z.union([z.string(), z.date()]).optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    readingTime: z.number().optional(),
    tags: z.array(z.string()).optional(),
    ratingValue: z.number().optional(),
    ratingCount: z.number().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    images: z.object({
      desktop: z.string(),
      tablet: z.string(),
      mobile: z.string(),
    }),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    client: z.string(),
    sector: z.string(),
    tags: z.array(z.string()),
    gradient: z.tuple([z.string(), z.string()]),
    metrics: z.array(z.tuple([z.string(), z.string()])),
    quote: z.object({ text: z.string(), cite: z.string() }).optional(),
    order: z.number().default(99),
  }),
});

export const collections = { blog, services, work };
