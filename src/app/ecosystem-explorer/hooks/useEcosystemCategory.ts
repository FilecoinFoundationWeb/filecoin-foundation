import { useCallback, useMemo } from 'react'

import type { NextServerSearchParams } from '@/types/searchParams'

import { CATEGORY_KEY } from '@/constants/searchParams'

import type { EcosystemProject } from '../types/ecosystemProjectType'
import { getCategoriesFromDirectory } from '../utils/getCategoriesFromDirectory'
import { getSubcategoriesFromQueryParam } from '../utils/getSubcategoriesFromQueryParam'

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

  const categoryIds = getSubcategoriesFromQueryParam(categoryParams)

  const getEntrySubcategory = useCallback((entry: Entry) => {
    return entry.subcategories[0]
  }, [])

  const categorizedResults = useMemo(() => {
    if (!categoryIds) {
      return entries
    }

    return entries.filter((entry) => {
      const entrySubcategory = getEntrySubcategory(entry)
      return categoryIds.includes(entrySubcategory)
    })
  }, [categoryIds, entries, getEntrySubcategory])

  const categoriesWithSubcategories = useMemo(() => {
    return categories.map((category) => {
      const nestedSubcategories = subcategories.filter(
        (subcategory) => subcategory.parent_category === category.slug,
      )

      const nestedSubcategoriesWithCount = nestedSubcategories.map(
        (subcategory) => {
          const subcategoryMatches = entries.filter((entry) => {
            return getEntrySubcategory(entry) === subcategory.slug
          })

          return {
            ...subcategory,
            count: subcategoryMatches.length,
          }
        },
      )

      return {
        slug: category.slug,
        name: category.name,
        subcategories: nestedSubcategoriesWithCount,
      }
    })
  }, [categories, entries, getEntrySubcategory, subcategories])

  return {
    categorizedResults,
    categoriesWithSubcategories,
    categoryQueries: categoryIds,
  }
}
