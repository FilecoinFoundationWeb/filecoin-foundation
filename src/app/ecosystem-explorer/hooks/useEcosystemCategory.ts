import { useMemo } from 'react'

import type { NextServerSearchParams } from '@/types/searchParams'

import { CATEGORY_KEY } from '@/constants/searchParams'

import type { EcosystemProject } from '../types/ecosystemProjectType'
import { getEcosystemCMSCategories } from '../utils/getEcosystemCMSCategories'
import { parseCategoryQueryParam } from '../utils/parseCategoryQueryParam'

type UseEcosystemCategoryProps<Entry extends EcosystemProject> = {
  searchParams: NextServerSearchParams
  categories: ReturnType<typeof getEcosystemCMSCategories>['categories']
  subcategories: ReturnType<typeof getEcosystemCMSCategories>['subcategories']
  entries: Array<Entry>
}
export function useEcosystemCategory<Entry extends EcosystemProject>({
  searchParams,
  entries,
  categories,
  subcategories,
}: UseEcosystemCategoryProps<Entry>) {
  const categoryParams = searchParams[CATEGORY_KEY]
  const categoryIds = parseCategoryQueryParam(categoryParams)

  const filteredEntries = useMemo(() => {
    if (!categoryIds) {
      return entries
    }

    return entries.filter((entry) => categoryIds.includes(entry.subcategory))
  }, [categoryIds, entries])

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

  return {
    filteredEntries,
    categoryTree,
    categoryQueries: categoryIds,
  }
}
