'use client'

import { Listbox } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'

import {
  type CategoryCounts,
  type CategoryId,
  type CategoryOption,
} from '@/types/categoryTypes'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'

import { getTotalCategoryCount } from '@/utils/getTotalCategoryCount'

import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

type CategoryListboxProps = {
  selected: CategoryId | undefined
  options: Array<CategoryOption>
  counts?: CategoryCounts
  onChange: (selected: CategoryId) => void
}

export function CategoryListbox({
  selected,
  options,
  counts,
  onChange,
}: CategoryListboxProps) {
  const totalCategoryCount = getTotalCategoryCount(counts)

  return (
    <Listbox value={selected} onChange={onChange}>
      <ListboxButton>
        <span>Category</span>
        <Icon component={CaretDown} size={16} weight="bold" />
      </ListboxButton>
      <ListboxOptions>
        {totalCategoryCount && (
          <ListboxOption
            option={{ id: DEFAULT_CATEGORY, name: DEFAULT_CATEGORY }}
            counts={totalCategoryCount}
          />
        )}
        {options.map((option) => (
          <ListboxOption key={option.id} option={option} counts={counts} />
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
