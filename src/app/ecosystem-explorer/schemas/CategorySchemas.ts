import { z } from 'zod'

import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'
import { createEnumSchema } from '@/utils/zodUtils'

export const CategorySchema = createSchemaFor('category')
export const SubcategorySchema = createSchemaFor('subcategory')

const CategoryValue = z.string()
const SubcategoryValue = z.string()

export const DirectoryCategorySchema = z
  .object({
    value: CategoryValue,
    label: z.string(),
    subcategories: z.array(SubcategoryValue),
  })
  .transform((data) => ({
    slug: data.value,
    name: data.label,
    subcategories: data.subcategories,
  }))

export const DirectorySubcategorySchema = z
  .object({
    value: SubcategoryValue,
    label: z.string(),
    parent_category: CategoryValue,
  })
  .transform((data) => ({
    slug: data.value,
    name: data.label,
    parent_category: data.parent_category,
  }))

function createSchemaFor(fieldName: 'category' | 'subcategory') {
  const { fields } = getCollectionConfig('ecosystem_projects')
  const cmsOptions = getCMSFieldOptions(fields, fieldName)

  const values = cmsOptions.map((option) => option.value)

  return createEnumSchema(values)
}
