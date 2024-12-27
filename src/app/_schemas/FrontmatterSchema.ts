import fs from 'fs'

import { z } from 'zod'

import { isValidMarkdownPath } from '@/utils/fileUtils'

import { SeoMetadataSchema } from './SeoMetadataSchema'

const FrontmatterHeaderSchema = z.object({
  title: z.string(),
  description: z.string().or(z.array(z.string())),
})

export const MarkdownPathSchema = z
  .string()
  .refine(isValidMarkdownPath, {
    message: 'Invalid markdown file path format',
  })
  .refine(fs.existsSync, {
    message: 'Markdown file does not exist',
  })

export const BaseFrontmatterSchema = z.object({
  header: FrontmatterHeaderSchema,
  seo: SeoMetadataSchema,
})

export const FeaturedPageFrontmatterSchema = BaseFrontmatterSchema.extend({
  featured_entry: MarkdownPathSchema,
})
