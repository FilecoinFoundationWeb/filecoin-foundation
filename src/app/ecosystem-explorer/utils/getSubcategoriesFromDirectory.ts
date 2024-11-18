import { z } from 'zod'

import { ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH } from '@/constants/paths'

import { readAndValidateYamlFiles } from '@/utils/yamlUtils'

import { DirectorySubcategorySchema } from '../schemas/CategorySchemas'

export function getSubcategoriesFromDirectory() {
  const rawSubcategories = readAndValidateYamlFiles(
    ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
  )

  const subcategories = z
    .array(DirectorySubcategorySchema)
    .parse(rawSubcategories)

  return subcategories
}
