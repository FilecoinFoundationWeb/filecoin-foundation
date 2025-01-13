import { z } from 'zod'

import { SeoMetadataSchema } from './SeoMetadataSchema'

const FrontmatterHeaderSchema = z.object({
  title: z.string(),
  description: z.string().or(z.array(z.string())),
})

export const BaseFrontmatterSchema = z.object({
  header: FrontmatterHeaderSchema,
  seo: SeoMetadataSchema,
})

export const FeaturedPageFrontmatterSchema = BaseFrontmatterSchema.extend({
  featured_entry: z.string(),
})
