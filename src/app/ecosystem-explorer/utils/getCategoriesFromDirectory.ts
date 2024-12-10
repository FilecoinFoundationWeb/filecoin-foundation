import { z } from 'zod'

import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'

import {
  DirectoryCategorySchema,
  DirectorySubcategorySchema,
} from '../schemas/CategorySchemas'

export function getCategoriesFromDirectory() {
  const rawCategories = getCMSOptionsFor('category')
  const rawSubcategories = getCMSOptionsFor('subcategory')

  const categories = z.array(DirectoryCategorySchema).parse(rawCategories)

  const subcategories = z
    .array(DirectorySubcategorySchema)
    .parse(rawSubcategories)

  return { categories, subcategories }
}

function getCMSOptionsFor(fieldName: 'category' | 'subcategory') {
  const { fields } = getCollectionConfig('ecosystem_projects')
  return getCMSFieldOptions(fields, fieldName)
}
