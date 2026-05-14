import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    stack: z.array(z.string()),
    date: z.string().regex(/^\d{4}-\d{2}$/, 'Date must be YYYY-MM'),
    featured: z.boolean().default(false),
    order: z.number(),
    relatedSlugs: z.array(z.string()).optional(),
  }),
});

const sideProjects = defineCollection({
  loader: glob({ base: './src/content/side-projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    stack: z.array(z.string()),
    date: z.string().regex(/^\d{4}-\d{2}$/, 'Date must be YYYY-MM'),
    repo: z.url().optional(),
    liveUrl: z.url().optional(),
    status: z.enum(['active', 'maintained', 'archived']).optional(),
    featured: z.boolean().default(false),
    order: z.number(),
    relatedSlugs: z.array(z.string()).optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { work, sideProjects, writing };
