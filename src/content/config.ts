import { z, defineCollection } from 'astro:content';

export const categoryMap = {
  saas: 'SaaS',
  ecommerce: 'eCommerce',
  blog: 'Blog',
  portfolio: 'Portfolio',
  other: 'Other',
};

const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().refine((img) => img.width === 1000 && img.height === 450, {
        message: 'Cover image must be at least 1080 pixels wide!',
      }),
      imageSmall: image().refine((img) => img.width === 488 && img.height === 300, {
        message: 'Small image must be at least 500 pixels wide!',
      }),
      alt: z.string(),
      link: z.string().optional(),
      tags: z.array(z.string()),
      date: z.date(),
      category: z.enum(['saas', 'ecommerce', 'blog', 'portfolio', 'other']).transform((val) => ({
        value: val,
        label: categoryMap[val],
      })),
      featured: z.boolean().default(false),
    }),
});

export const collections = {
  project: projectCollection,
};
