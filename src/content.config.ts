import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		author: z.string().default('Marketing Company Edinburgh Team'),
	}),
});

const caseStudies = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/case-studies" }),
	schema: z.object({
		title: z.string(),
		client: z.string(),
		industry: z.string(),
		results: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
	}),
});

const services = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/services" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		icon: z.string(),
		benefits: z.array(z.string()),
	}),
});

const industries = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/industries" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		results: z.string(),
		challenge: z.string(),
		solution: z.string(),
	}),
});

const guides = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/guides" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		category: z.string(),
	}),
});

const team = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/team" }),
	schema: z.object({
		name: z.string(),
		role: z.string(),
		bio: z.string(),
		expertise: z.array(z.string()),
		linkedin: z.string().optional(),
	}),
});

const locations = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/locations" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		neighborhood: z.string(),
		stats: z.array(z.string()),
	}),
});

export const collections = { blog, 'case-studies': caseStudies, services, industries, guides, team, locations };
