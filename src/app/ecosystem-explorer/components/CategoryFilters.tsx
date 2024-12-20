'use client'

import { useQueryState, parseAsString, parseAsArrayOf } from 'nuqs'

import { CATEGORY_KEY } from '@/constants/searchParams'

import { FormCheckbox } from '@/components/Form/FormCheckbox'

import { CATEGORY_QUERY_SEPARATOR_SYMBOL } from '../constants/searchParams'
import type { useEcosystemCategoryTree } from '../hooks/useEcosystemCategoryTree'
import { toggleArraySelection } from '../utils/toggleArraySelection'

export type CategoryFiltersProps = {
  categories: ReturnType<typeof useEcosystemCategoryTree>
}

export function CategoryFilters({ categories }: CategoryFiltersProps) {
  const [selectedFilters, setSelectedFilters] = useQueryState(
    CATEGORY_KEY,
    parseAsArrayOf(parseAsString, CATEGORY_QUERY_SEPARATOR_SYMBOL)
      .withDefault([])
      .withOptions({ shallow: false }),
  )

  return (
    <ul className="w-full space-y-10 lg:max-w-72">
      {categories.map(([categoryGroupName, categories]) => (
        <li key={categoryGroupName}>
          <h3 className="pb-7 text-sm font-bold text-brand-300 lg:pb-4">
            {categoryGroupName}
          </h3>
          <div className="flex flex-col gap-7 pl-3 lg:gap-4">
            {categories?.map(({ value, label, count }) => (
              <FormCheckbox
                key={value}
                label={`${label} (${count})`}
                labelSize="sm"
                checked={selectedFilters.includes(value)}
                onChange={() => handleFilterToggle(value)}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  )

  function handleFilterToggle(slug: string) {
    setSelectedFilters((prevSelected) => {
      return toggleArraySelection(prevSelected, slug)
    })
  }
}
