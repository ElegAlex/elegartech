import { defineCollection, reference, z } from 'astro:content';

const CATEGORIES = [
  'Actualités',
  'IA',
  'Open Source',
  'Développement',
  'Systèmes',
  'Sécurité',
  'Analyses',
] as const;

const DIFFICULTY_LEVELS = ['débutant', 'intermédiaire', 'avancé'] as const;

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      date: z.date(),
      draft: z.boolean().default(false),
      categories: z
        .array(z.enum(CATEGORIES))
        .min(1)
        .max(2),
      tags: z.array(z.string()).min(1).max(5),
      author: reference('authors'),
      cover: z
        .object({
          image: image(),
          alt: z.string(),
        })
        .optional(),
      toc: z.boolean().default(true),
      featured: z.boolean().default(false),
      difficulty: z.enum(DIFFICULTY_LEVELS).optional(),
      series: z.string().optional(),
      seriesOrder: z.number().optional(),
    }),
});

const authorsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
    website: z.string().url().optional(),
    social: z
      .object({
        github: z.string().optional(),
        twitter: z.string().optional(),
        linkedin: z.string().optional(),
        mastodon: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
};
