import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topic: z.enum(['getting-started', 'editing', 'publishing', 'earning']),
    level: z.enum(['Beginner', 'Intermediate']),
    published: z.string(),
    updated: z.string(),
    answer: z.string(),
    image: z.enum(['hero', 'editing', 'recording']).default('editing'),
    featured: z.boolean().default(false),
    order: z.number(),
    sources: z.array(z.object({ title: z.string(), url: z.url() })).default([]),
  }),
});
export const collections = { guides };
