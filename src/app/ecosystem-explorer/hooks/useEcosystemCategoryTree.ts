import { useMemo } from 'react'

import type { EcosystemProject } from '../types/ecosystemProjectType'
import { getEcosystemCMSCategories } from '../utils/getEcosystemCMSCategories'

type UseEcosystemCategoryProps<Entry extends EcosystemProject> = {
  categories: ReturnType<typeof getEcosystemCMSCategories>['categories']
  subcategories: ReturnType<typeof getEcosystemCMSCategories>['subcategories']
  entries: Array<Entry>
}
export function useEcosystemCategoryTree<Entry extends EcosystemProject>({
  entries,
  categories,
  subcategories,
}: UseEcosystemCategoryProps<Entry>) {
  const entriesPerSubcategory = useMemo(() => {
    const counts = new Map()

    entries.forEach((entry) => {
      const subcategory = entry.subcategory
      counts.set(subcategory, (counts.get(subcategory) || 0) + 1)
    })

    return counts
  }, [entries])

  const categoryTree = useMemo(
    () =>
      categories.map(({ value, label }) => ({
        value,
        label,
        subcategories: subcategories
          .filter(({ parent_category }) => parent_category === value)
          .map(({ value, label }) => ({
            value,
            label,
            count: entriesPerSubcategory.get(value) || 0,
          })),
      })),
    [categories, subcategories, entriesPerSubcategory],
  )

  return categoryTree
}
