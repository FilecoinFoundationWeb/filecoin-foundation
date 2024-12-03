'use client'

import { useQueryState, parseAsString } from 'nuqs'

import { ALL_CATEGORIES_OPTION } from '@/constants/filterConstants'
import { CATEGORY_KEY } from '@/constants/searchParams'

import { CategorySidebar } from '@/components/CategorySidebar'
import { FilterListbox } from '@/components/FilterListbox'
import type { OptionType } from '@/components/Listbox/ListboxOption'

type CategoryProps = {
  options: Array<OptionType>
}

export function Category({ options }: CategoryProps) {
  const [categoryId, setCategoryId] = useQueryState<OptionType['id']>(
    CATEGORY_KEY,
    parseAsString
      .withDefault(ALL_CATEGORIES_OPTION.id)
      .withOptions({ shallow: false }),
  )

  const selectedCategory =
    options.find((option) => option.id === categoryId) || ALL_CATEGORIES_OPTION

  function handleChange(option: OptionType) {
    setCategoryId(option.id)
  }

  return (
    <>
      <div className="hidden lg:block">
        <CategorySidebar
          selected={selectedCategory}
          options={options}
          onChange={handleChange}
        />
      </div>
      <div className="block lg:hidden">
        <FilterListbox
          selected={selectedCategory}
          options={options}
          onChange={handleChange}
        />
      </div>
    </>
  )
}
