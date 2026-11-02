import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({ pattern: "**/theory/*.mdx", base: "./src/content/modules" }),
  schema: z.object({
    id: z.string(),
    area: z.string(),
    subject: z.string(),
    group: z.string(),
    title: z.string(),
    summary: z.string(),
    icon: z.string().default("◇"),
    source: z.string().default(""),
  }),
});

export const collections = { notes };
