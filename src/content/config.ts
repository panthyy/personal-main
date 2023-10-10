import { z, defineCollection } from 'astro:content'


const categoryMap = {
    'saas': 'SaaS',
    'ecommerce': 'eCommerce',
    'blog': 'Blog',
    'portfolio': 'Portfolio',
    'other': 'Other'
}


const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        link: z.string().optional(),
        tags: z.array(z.string()),
        date: z.date(),
        category: z.enum(['saas', 'ecommerce', 'blog', 'portfolio', 'other']).transform((val) => ({
            value: val,
            label: categoryMap[val]
        })),
        featured: z.boolean().default(false),
    })
})

export const collections = {
    'project': projectCollection
}