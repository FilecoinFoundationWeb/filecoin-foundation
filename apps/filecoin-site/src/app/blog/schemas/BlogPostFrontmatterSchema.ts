import { z } from 'zod'

import { SeoMetadataWithOptionalTitleSchema } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'

export const BLOG_CATEGORY_VALUES = [
  'updates',
  'events',
  'interviews',
  'awards',
  'Filecoin-Features',
] as const

export const AllowedCategoriesSchema = z.enum(BLOG_CATEGORY_VALUES)

export type AllowedCategory = z.infer<typeof AllowedCategoriesSchema>

export const BlogPostFrontmatterSchema = z.strictObject({
  title: z.string(),
  author: z.string().optional(),
  draft: z.boolean().optional(),
  excerpt: z.string(),
  share_image: z.string().optional(),
  image: z
    .object({
      url: z.string(),
      alt: z.string().optional(),
    })
    .optional(),
  date: z
    .union([z.string().transform(transformDate), z.date()])
    .pipe(z.coerce.date()),
  categories: z
    .array(z.string())
    .transform(transformCategories)
    .pipe(z.array(AllowedCategoriesSchema)),
  dim_image: z.boolean().optional(),
  content: z.string(),
  seo: SeoMetadataWithOptionalTitleSchema.optional(),
  aliases: z.array(z.string()).optional(),
  double_column_inverted: z.boolean().optional(),
  double_column_mode: z.boolean().optional(),
  main_feature_inverted: z.boolean().optional(),
  related_article_1: z.string().optional(),
  related_article_2: z.string().optional(),
  related_article_3: z.string().optional(),
  cover_feature: z.boolean().optional(),
  main_feature: z.boolean().optional(),
  _template: z.string().optional(),
})

function transformDate(date: string | Date | undefined) {
  if (!date) {
    return new Date()
  }
  return date
}

function transformCategories(categories: Array<string>) {
  return categories.map((category) => category.trim())
}
