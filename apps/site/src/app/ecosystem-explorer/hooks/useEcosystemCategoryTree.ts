import { useMemo } from 'react'

import { groupBy } from 'ramda'

import type { EcosystemProject } from '../types/ecosystemProjectType'
import { getEcosystemCMSCategories } from '../utils/getEcosystemCMSCategories'

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
      categories.map(({ value, label, group }) => ({
        value,
        label,
        group,
        count: entriesPerCategory.get(value) || 0,
      })),
    [categories, entriesPerCategory],
  )

  const categoryTree = useMemo(() => {
    const groupedCategories = groupBy((item) => item.group, categoriesWithCount)
    return Object.entries(groupedCategories)
  }, [categoriesWithCount])

  return categoryTree
}
