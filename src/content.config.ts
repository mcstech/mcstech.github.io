import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 4. Define your collection(s)
const templates = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/templates" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    heroScreenshot: z.string(),
    subPreview: z.string().optional(),
    templateType: z.string(),
    purchaseLink: z.string(),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { templates };