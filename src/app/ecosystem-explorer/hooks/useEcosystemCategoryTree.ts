import { useMemo } from 'react'

import { groupBy } from 'ramda'

import type { EcosystemProject } from '../types/ecosystemProjectType'
import { getEcosystemCMSCategories } from '../utils/getEcosystemCMSCategories'
import { splitCategoryAndGroup } from '../utils/splitCategoryAndGroup'

type UseEcosystemCategoryProps<Entry extends EcosystemProject> = {
  categories: ReturnType<typeof getEcosystemCMSCategories>
  entries: Array<Entry>
}

export function useEcosystemCategoryTree<Entry extends EcosystemProject>({
  entries,
  categories,
}: UseEcosystemCategoryProps<Entry>) {
  const entriesPerCategory = useMemo(() => {
    const counts = new Map<string, number>()

    entries.forEach(({ category }) => {
      counts.set(category, (counts.get(category) || 0) + 1)
    })

    return counts
  }, [entries])

  const categoriesWithCount = useMemo(
    () =>
      categories.map(({ value, label }) => {
        const { category, group } = splitCategoryAndGroup(label)
        const count = entriesPerCategory.get(value) || 0

        return {
          value,
          label: category,
          group,
          count,
        }
      }),
    [categories, entriesPerCategory],
  )

  const categoryTree = useMemo(() => {
    const groupedCategories = groupBy((item) => item.group, categoriesWithCount)
    return Object.entries(groupedCategories)
  }, [categoriesWithCount])

  return categoryTree
}
