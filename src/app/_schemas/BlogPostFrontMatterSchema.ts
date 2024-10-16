import { z } from 'zod'

import {
  createCategorySchema,
  getCategorySettings,
} from '@/utils/categoryUtils'

import { BaseDataSchemaKebabCase } from '@/schemas/DynamicDataBaseSchema'

const { validCategoryIds } = getCategorySettings('blog_posts')

const categorySchema = createCategorySchema(validCategoryIds)

export const BlogPostFrontMatterSchema = BaseDataSchemaKebabCase.extend({
  title: z.string(),
  category: categorySchema,
  description: z.string(),
  content: z.string(),
}).strict()
