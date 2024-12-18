import { z } from 'zod'

import { createSchemaForField } from '../utils/createSchemaForField'

export const CategorySchema = createSchemaForField('category')
export const SubcategorySchema = createSchemaForField('subcategory')

const CategoryValue = z.string()
const SubcategoryValue = z.string()

export const CategoryOptionSchema = z.object({
  value: CategoryValue,
  label: z.string(),
  subcategories: z.array(SubcategoryValue),
})

export const SubcategoryOptionSchema = z.object({
  value: SubcategoryValue,
  label: z.string(),
  parent_category: CategoryValue,
})
