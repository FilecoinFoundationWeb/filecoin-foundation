import { groupBy } from 'ramda'

import { mapCMSOptionsToListboxFormat } from '@/utils/mapCMSOptionsToListboxFormat'

import { getEcosystemCMSCategories } from './getEcosystemCMSCategories'

export function getGroupedCategories() {
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
