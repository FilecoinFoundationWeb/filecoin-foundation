import { z } from 'zod'

import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'
import { createEnumSchema } from '@/utils/zodUtils'

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

function createSchemaForField(fieldName: 'category' | 'subcategory') {
  const { fields } = getCollectionConfig('ecosystem_projects')
  const cmsOptions = getCMSFieldOptions(fields, fieldName)

  const values = cmsOptions.map((option) => option.value)

  return createEnumSchema(values)
}
