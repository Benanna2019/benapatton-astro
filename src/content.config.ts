import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/pages/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		_id: z.string().optional(),
		title: z.string(),
		published: z.string(),
		slug: z.string(),
		description: z.string(),
		categories: z.array(z.string()),
		author: z.string(),
		authorImage: z.string(),
		type: z.string(),
		minutesRead: z.string().optional(),
		image: z
			.object({
				src: z.string(),
				alt: z.string()
			})
			.optional(),
		isPinned: z.boolean().optional(),
		url: z.string()
	})
});

export const collections = { blog };
