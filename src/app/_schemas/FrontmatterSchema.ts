import fs from 'fs'

import { z } from 'zod'

import { isValidMarkdownPath } from '@/utils/fileUtils'

const FrontmatterHeaderSchema = z.object({
  title: z.string(),
  description: z.string().or(z.array(z.string())),
})

const FrontmatterSeoSchema = z.object({
  title: z.string(),
  description: z.string(),
})

const MarkdownPathSchema = z
  .string()
  .refine(isValidMarkdownPath, {
    message: 'Invalid markdown file path format',
  })
  .refine(fs.existsSync, {
    message: 'Markdown file does not exist',
  })

export const BaseFrontmatterSchema = z.object({
  header: FrontmatterHeaderSchema,
  seo: FrontmatterSeoSchema,
})

export const FeaturedPageFrontmatterSchema = BaseFrontmatterSchema.extend({
  featured_entry: MarkdownPathSchema,
})

export const HomePageFrontmatterSchema = BaseFrontmatterSchema.extend({
  featured_ecosystem_projects: z.array(MarkdownPathSchema),
})

export const GrantsPageFrontmatterSchema = BaseFrontmatterSchema.extend({
  featured_grant_graduates: z.array(MarkdownPathSchema),
})

export type FrontmatterHeaderSchemaType = z.infer<
  typeof FrontmatterHeaderSchema
>
