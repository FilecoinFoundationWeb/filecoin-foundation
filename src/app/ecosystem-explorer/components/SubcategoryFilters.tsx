'use client'

import { useQueryState, parseAsArrayOf, parseAsString } from 'nuqs'

import { CATEGORY_KEY } from '@/constants/searchParams'

import { FormCheckbox } from '@/components/Form/FormCheckbox'

import { CATEGORY_QUERY_SEPARATOR_SYMBOL } from '../constants/searchParams'
import type { SubcategoriesWithCount } from '../types/ecosystemCategoryType'

type Props = {
  categoryName: string
  subcategories: SubcategoriesWithCount
}

export function SubcategoryFilters({ categoryName, subcategories }: Props) {
  const [subcategory, setSubcategory] = useQueryState(
    CATEGORY_KEY,
    parseAsArrayOf(parseAsString, CATEGORY_QUERY_SEPARATOR_SYMBOL)
      .withDefault([])
      .withOptions({ shallow: false }),
  )

  return (
    <div>
      <h3 className="pb-7 text-sm font-bold text-brand-300 lg:pb-4">
        {categoryName}
      </h3>
      <div className="flex flex-col gap-7 pl-3 lg:gap-4">
        {subcategories.map(({ slug, name, count }) => {
          return (
            <FormCheckbox
              key={slug}
              label={`${name} (${count})`}
              labelSize="sm"
              checked={subcategory.includes(slug)}
              onChange={() => toggleCategorySlug(slug)}
            />
          )
        })}
      </div>
    </div>
  )

  function toggleCategorySlug(slug: string) {
    setSubcategory((prevCategories) => {
      if (prevCategories.includes(slug)) {
        return prevCategories.filter((categorySlug) => categorySlug !== slug)
      }
      return [...prevCategories, slug]
    })
  }
}
