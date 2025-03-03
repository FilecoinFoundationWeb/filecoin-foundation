import {
  getCMSFieldOptions,
  getCollectionConfig,
} from '@filecoin-foundation/utils/cmsConfigUtils'

import configData from '@/data/cmsConfigSchema.json'

import { splitGroupAndCategoryLabel } from './splitGroupAndCategoryLabel'


export function getEcosystemCMSCategories() {
  const { fields } = getCollectionConfig('ecosystem_projects', configData)
  const categoryOptions = getCMSFieldOptions(fields, 'category')

  const categoriesWithGroup = categoryOptions.map(({ value, label }) => {
    const { groupLabel, categoryLabel } = splitGroupAndCategoryLabel(label)

    return {
      value,
      label: categoryLabel,
      group: groupLabel,
    }
  })

  return categoriesWithGroup
}
