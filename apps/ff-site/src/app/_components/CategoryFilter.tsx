'use client'

import { DEFAULT_CATEGORY_FILTER_OPTION } from '@filecoin-foundation/hooks/useFilter/constants'
import { FilterListbox } from '@filecoin-foundation/ui/FilterListbox'
import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import { CATEGORY_KEY } from '@filecoin-foundation/utils/constants/urlParamsConstants'

import { useListboxQueryState } from '@/hooks/useListboxQueryState'

import { CategorySidebar } from '@/components/CategorySidebar'

type CategoryProps = {
  options: Array<OptionType>
}

export function CategoryFilter({ options }: CategoryProps) {
  const [categoryOption, setCategoryOption] = useListboxQueryState({
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
