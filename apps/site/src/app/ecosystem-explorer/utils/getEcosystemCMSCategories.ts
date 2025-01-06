import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'

import { splitGroupAndCategoryLabel } from './splitGroupAndCategoryLabel'

export function getEcosystemCMSCategories() {
  const { fields } = getCollectionConfig('ecosystem_projects')
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
