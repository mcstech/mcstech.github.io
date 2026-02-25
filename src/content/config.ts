import { defineCollection, z } from 'astro:content';

const templates = defineCollection({
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		heroScreenshot: z.string().url().optional(),
		templateKey: z.string().default('template'),
		badge: z.string().optional(),
		stack: z.string().optional(),
		styles: z.string().optional(),
		license: z.string().optional(),
		featureList: z.array(z.string()).default([]),
		faqs: z
			.array(
				z.object({
					question: z.string(),
					answer: z.string()
				})
			)
			.default([]),
		highlights: z.array(z.string()).optional(),
		previewMain: z.string().optional(),
		previewSecondary: z.string().optional()
	})
});

export const collections = { templates };
