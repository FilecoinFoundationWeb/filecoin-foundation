import { z } from 'zod'

import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'

import {
  CategoryOptionSchema,
  SubcategoryOptionSchema,
} from '../schemas/CategorySchemas'

export function getEcosystemCMSCategories() {
  const rawCategoryOptions = getCMSOptionsForField('category')
  const rawSubcategoryOptions = getCMSOptionsForField('subcategory')

  const parsedCategoryOptions = z
    .array(CategoryOptionSchema)
    .parse(rawCategoryOptions)

  const parsedSubcategoryOptions = z
    .array(SubcategoryOptionSchema)
    .parse(rawSubcategoryOptions)

  return {
    categories: parsedCategoryOptions,
    subcategories: parsedSubcategoryOptions,
  }
}

function getCMSOptionsForField(fieldName: 'category' | 'subcategory') {
  const { fields } = getCollectionConfig('ecosystem_projects')
  return getCMSFieldOptions(fields, fieldName)
}
