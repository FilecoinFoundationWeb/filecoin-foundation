import { useMemo } from 'react'

import type { NextServerSearchParams } from '@/types/searchParams'

import { CATEGORY_KEY } from '@/constants/searchParams'

import type { EcosystemProject } from '../types/ecosystemProjectType'
import { getCategoriesFromDirectory } from '../utils/getCategoriesFromDirectory'
import { parseCategoryQueryParam } from '../utils/parseCategoryQueryParam'

type UseEcosystemCategoryProps<Entry extends EcosystemProject> = {
  searchParams: NextServerSearchParams
  categories: ReturnType<typeof getCategoriesFromDirectory>['categories']
  subcategories: ReturnType<typeof getCategoriesFromDirectory>['subcategories']
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

    return entries.filter((entry) =>
      categoryIds.includes(entry.subcategories[0]),
    )
  }, [categoryIds, entries])

  const entriesPerSubcategory = useMemo(() => {
    const counts = new Map()

    entries.forEach((entry) => {
      const subcategory = entry.subcategories[0]
      counts.set(subcategory, (counts.get(subcategory) || 0) + 1)
    })

    return counts
  }, [entries])

  const categoryTree = useMemo(
    () =>
      categories.map((category) => ({
        slug: category.slug,
        name: category.name,
        subcategories: subcategories
          .filter(
            (subcategory) => subcategory.parent_category === category.slug,
          )
          .map((subcategory) => ({
            ...subcategory,
            count: entriesPerSubcategory.get(subcategory.slug) || 0,
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
