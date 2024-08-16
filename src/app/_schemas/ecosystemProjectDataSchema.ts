import { z } from 'zod'

import { DynamicBaseDataSchema } from '@/schemas/dynamicDataBaseSchema'

import {
  createCategorySchema,
  getCategoryDataFromDirectory,
  getCategorySettingsFromMap,
} from '@/utils/categoryUtils'

import {
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
} from '@/constants/paths'

const categoryData = getCategoryDataFromDirectory(
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
)
const subcategoryData = getCategoryDataFromDirectory(
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
)

const { validCategoryOptions } = getCategorySettingsFromMap(categoryData)
const { validCategoryOptions: validSubCategoryOptions } =
  getCategorySettingsFromMap(subcategoryData)
const categorySchema = createCategorySchema(validCategoryOptions)
const subcategorySchema = createCategorySchema(validSubCategoryOptions)

export const EcosystemProjectDataSchema = DynamicBaseDataSchema.extend({
  title: z.string(),
  category: categorySchema,
  subcategories: z.array(subcategorySchema).optional(),
  tags: z.array(z.string()).optional(),
  description: z.string(),
  tech: z.array(z.string()),
  website: z.string().optional(),
  featuredContent: z.string().optional(),
  repo: z.string().optional(),
  twitter: z.string().optional(),
  videoUrl: z.string().optional(),
  yearJoined: z.coerce.date().optional(),
  newsUpdate: z.string().optional(),
  content: z.string().optional(),
})
