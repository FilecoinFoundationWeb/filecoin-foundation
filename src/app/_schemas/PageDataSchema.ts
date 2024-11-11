import fs from 'fs'

import { z } from 'zod'

import { CONTENT_ROOT, MARKDOWN_EXTENSION } from '@/constants/paths'

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

function isValidMarkdownPath(path: string): boolean {
  return path.startsWith(CONTENT_ROOT) && path.endsWith(MARKDOWN_EXTENSION)
}
