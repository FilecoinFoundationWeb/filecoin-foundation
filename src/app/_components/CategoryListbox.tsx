'use client'

import { Listbox } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

import {
  type CategoryCounts,
  type CategoryId,
  type CategoryOption,
} from '@/types/categoryTypes'

import { getTotalCategoryCount } from '@/utils/categoryUtils'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'

type CategoryListboxProps = {
  selected: CategoryId | undefined
  options: CategoryOption[]
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
      {({ open }) => (
        <>
          <ListboxButton ariaLabel="Category options" open={open}>
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
        </>
      )}
    </Listbox>
  )
}
