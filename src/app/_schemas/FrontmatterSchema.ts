import fs from 'fs'

import { z } from 'zod'

import { isValidMarkdownPath } from '@/utils/fileUtils'

import { createFeaturedProjectsSchema } from '@/ecosystem-explorer/utils/createFeaturedProjectsSchema'

const FrontmatterHeaderSchema = z.object({
  title: z.string(),
  description: z.string().or(z.array(z.string())),
})

const FrontmatterSeoSchema = z.object({
  title: z.string(),
  description: z.string(),
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
  seo: FrontmatterSeoSchema,
})

export const FeaturedPageFrontmatterSchema = BaseFrontmatterSchema.extend({
  featured_entry: MarkdownPathSchema,
})

export const HomePageFrontmatterSchema = createFeaturedProjectsSchema(
  'featured_ecosystem_projects',
  'No matching ecosystem projects found',
)

export const GrantsPageFrontmatterSchema = createFeaturedProjectsSchema(
  'featured_grant_graduates',
  'No matching grant graduates found',
)
