import { useMemo } from 'react'

import { categoryGroupMap } from '../constants/categoryGroupMap'
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
      categories.map(({ value, label }) => ({
        value,
        label,
        count: entriesPerCategory.get(value) || 0,
      })),
    [categories, entriesPerCategory],
  )

  const categoryTree = useMemo(() => {
    const groupedCategories = Object.groupBy(categoriesWithCount, (item) =>
      getCategoryGroupNameOrThrow(item.value),
    )

    return Object.entries(groupedCategories)
  }, [categoriesWithCount])

  return categoryTree
}

function getCategoryGroupNameOrThrow(category: string) {
  const categoryGroupName = categoryGroupMap.get(category)

  if (!categoryGroupName) {
    throw new Error(`categoryGroupName not found for category: ${category}`)
  }

  return categoryGroupName
}
