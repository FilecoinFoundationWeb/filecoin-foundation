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
      categories.map((category) => ({
        value: category.value,
        label: category.label,
        subcategories: subcategories
          .filter(
            (subcategory) => subcategory.parent_category === category.value,
          )
          .map((subcategory) => ({
            ...subcategory,
            count: entriesPerSubcategory.get(subcategory.value) || 0,
          })),
      })),
    [categories, subcategories, entriesPerSubcategory],
  )

  return categoryTree
}
