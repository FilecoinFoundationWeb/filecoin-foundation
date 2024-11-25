import { z } from 'zod'

import {
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
} from '@/constants/paths'

import { readAndValidateYamlFiles } from '@/utils/yamlUtils'

import {
  DirectoryCategorySchema,
  DirectorySubcategorySchema,
} from '../schemas/CategorySchemas'

export function getCategoriesFromDirectory() {
  const rawCategories = readAndValidateYamlFiles(
    ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  )

  const categories = z.array(DirectoryCategorySchema).parse(rawCategories)

  const rawSubcategories = readAndValidateYamlFiles(
    ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
  )

  const subcategories = z
    .array(DirectorySubcategorySchema)
    .parse(rawSubcategories)

  return { categories, subcategories }
}
