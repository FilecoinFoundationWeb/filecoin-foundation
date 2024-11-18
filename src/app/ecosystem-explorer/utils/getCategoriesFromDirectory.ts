import { z } from 'zod'

import { ECOSYSTEM_CATEGORIES_DIRECTORY_PATH } from '@/constants/paths'

import { readAndValidateYamlFiles } from '@/utils/yamlUtils'

import { DirectoryCategorySchema } from '../schemas/CategorySchemas'

export function getCategoriesFromDirectory() {
  const rawCategories = readAndValidateYamlFiles(
    ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  )

  const categories = z.array(DirectoryCategorySchema).parse(rawCategories)

  return categories
}
