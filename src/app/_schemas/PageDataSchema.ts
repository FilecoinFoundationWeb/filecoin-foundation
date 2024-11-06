import { z } from 'zod'

import { CONTENT_ROOT } from '@/constants/paths'

const HeaderSchema = z.object({
  title: z.string(),
  description: z.string().or(z.array(z.string())),
})

const SeoSchema = z.object({
  title: z.string(),
  description: z.string(),
})

const MarkdownEntryPathSchema = z
  .string()
  .refine(validateMarkdownEntryPathFormat, {
    message: 'Invalid markdown entry path format',
  })

export const GenericPageDataSchema = z.object({
  header: HeaderSchema,
  seo: SeoSchema,
})

export const PageDataWithFeaturedEntrySchema = GenericPageDataSchema.extend({
  featured_entry: MarkdownEntryPathSchema,
})

export const HomePageDataSchema = GenericPageDataSchema.extend({
  featured_ecosystem_projects: z.array(MarkdownEntryPathSchema),
})

function validateMarkdownEntryPathFormat(value: string) {
  return value.startsWith(CONTENT_ROOT) && value.endsWith('.md')
}
