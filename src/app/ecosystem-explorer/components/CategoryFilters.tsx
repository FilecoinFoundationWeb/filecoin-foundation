'use client'

import { useQueryState, parseAsString, parseAsArrayOf } from 'nuqs'

import { CATEGORY_KEY } from '@/constants/searchParams'

import { FormCheckbox } from '@/components/Form/FormCheckbox'

import { CATEGORY_QUERY_SEPARATOR_SYMBOL } from '../constants/searchParams'
import type { CategoriesAndSubcategoriesWithCount } from '../types/ecosystemCategoryType'
import { toggleArrayElement } from '../utils/toggleArrayElement'

type CategoryFiltersProps = {
  categories: CategoriesAndSubcategoriesWithCount
}

export function CategoryFilters({ categories }: CategoryFiltersProps) {
  const [subcategory, setSubcategory] = useQueryState(
    CATEGORY_KEY,
    parseAsArrayOf(parseAsString, CATEGORY_QUERY_SEPARATOR_SYMBOL)
      .withDefault([])
      .withOptions({ shallow: false }),
  )

  return (
    <div className="w-full space-y-10 lg:max-w-72">
      {categories.map(({ slug, name, subcategories }) => (
        <div key={slug}>
          <h3 className="pb-7 text-sm font-bold text-brand-300 lg:pb-4">
            {name}
          </h3>
          <div className="flex flex-col gap-7 pl-3 lg:gap-4">
            {subcategories.map(({ slug, name, count }) => {
              return (
                <FormCheckbox
                  key={slug}
                  label={`${name} (${count})`}
                  labelSize="sm"
                  checked={subcategory.includes(slug)}
                  onChange={() => toggleSubcategoryFilter(slug)}
                />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )

  function toggleSubcategoryFilter(slug: string) {
    setSubcategory((prevCategories) => {
      return toggleArrayElement(prevCategories, slug)
    })
  }
}
