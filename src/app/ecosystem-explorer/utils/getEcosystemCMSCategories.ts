import { z } from 'zod'

import {
  CategoryOptionSchema,
  SubcategoryOptionSchema,
} from '../schemas/CategorySchemas'

import { getCMSOptionsForField } from './getCMSOptionsForField'

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
