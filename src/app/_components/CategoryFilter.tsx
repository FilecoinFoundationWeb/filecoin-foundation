'use client'

import { FunnelSimple } from '@phosphor-icons/react'

import { DEFAULT_CATEGORY_FILTER_OPTION } from '@/constants/filterConstants'
import { CATEGORY_KEY } from '@/constants/searchParams'

import { useListboxQueryState } from '@/hooks/useListboxQueryState'

import { CategorySidebar } from '@/components/CategorySidebar'
import { FilterListbox } from '@/components/FilterListbox'
import type { OptionType } from '@/components/Listbox/ListboxOption'

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
          icon={FunnelSimple}
          onChange={setCategoryOption}
        />
      </div>
    </>
  )
}
