import { groupBy } from 'ramda'

import { mapCMSOptionsToListboxFormat } from '@/utils/mapCMSOptionsToListboxFormat'

import { getEcosystemCMSCategories } from './getEcosystemCMSCategories'

export function getGroupedCategories() {
  const categories = getEcosystemCMSCategories()
  const groupedCategories = groupBy((item) => item.group, categories)
  const entries = Object.entries(groupedCategories)

  return entries.flatMap((entry) => {
    const [group, items] = entry

    return [group, ...(items ? mapCMSOptionsToListboxFormat(items) : [])]
  })
}
