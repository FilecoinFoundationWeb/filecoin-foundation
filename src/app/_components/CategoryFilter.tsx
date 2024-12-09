'use client'

import { DEFAULT_CATEGORY_FILTER_OPTION } from '@/constants/filterConstants'
import { CATEGORY_KEY } from '@/constants/searchParams'

import { useFilterListboxState } from '@/hooks/useFilterListboxState'

import { CategorySidebar } from '@/components/CategorySidebar'
import { FilterListbox } from '@/components/FilterListbox'
import type { OptionType } from '@/components/Listbox/ListboxOption'

type CategoryProps = {
  options: Array<OptionType>
}

export function CategoryFilter({ options }: CategoryProps) {
  const [categoryOption, setCategoryOption] = useFilterListboxState({
    key: CATEGORY_KEY,
    options,
    defaultOption: DEFAULT_CATEGORY_FILTER_OPTION,
  })

  return (
    <>
      <div className="hidden lg:block">
        <CategorySidebar
          selected={categoryOption}
          options={options}
          onChange={setCategoryOption}
        />
      </div>
      <div className="block lg:hidden">
        <FilterListbox
          selected={categoryOption}
          options={options}
          onChange={setCategoryOption}
        />
      </div>
    </>
  )
}
