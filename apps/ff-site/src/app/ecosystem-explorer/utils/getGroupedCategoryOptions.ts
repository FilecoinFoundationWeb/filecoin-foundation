import { mapCMSOptionsToListboxFormat } from '@filecoin-foundation/utils/mapCMSOptionsToListboxFormat'
import { groupBy } from 'ramda'


import { getEcosystemCMSCategories } from './getEcosystemCMSCategories'

export function getGroupedCategoryOptions() {
  const categories = getEcosystemCMSCategories()
  const groupedCategories = groupBy((item) => item.group, categories)
  const entries = Object.entries(groupedCategories)

  return entries.map((entry) => {
    const [group, items] = entry

    return {
      label: group,
      options: mapCMSOptionsToListboxFormat(items || []),
    }
  })
}
