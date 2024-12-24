import fs from 'fs'

import { z } from 'zod'

import { extractSlugFromFilename, isValidMarkdownPath } from '@/utils/fileUtils'

import { getEcosystemProjectsData } from '@/ecosystem-explorer/utils/getEcosystemProjectData'

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
  featured_ecosystem_projects: z
    .array(MarkdownPathSchema)
    .transform((paths) => {
      const ecosystemProjects = getEcosystemProjectsData()
      const slugs = paths.map(extractSlugFromFilename)
      return ecosystemProjects.filter((item) => slugs.includes(item.slug))
    })
    .refine((filtered) => filtered.length > 0, {
      message: 'No matching ecosystem projects found',
    }),
})

export const GrantsPageFrontmatterSchema = BaseFrontmatterSchema.extend({
  featured_grant_graduates: z.array(MarkdownPathSchema),
})
