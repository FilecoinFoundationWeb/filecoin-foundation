import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'

import { splitCategoryAndGroup } from './splitCategoryAndGroup'

export function getEcosystemCMSCategories() {
  const { fields } = getCollectionConfig('ecosystem_projects')
  const categories = getCMSFieldOptions(fields, 'category')

  const categoriesWithGroup = categories.map((categoryOption) => {
    const { category, group } = splitCategoryAndGroup(categoryOption.label)

    return {
      value: categoryOption.value,
      label: category,
      group,
    }
  })

  return categoriesWithGroup
}
