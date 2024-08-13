'use client'

import { Listbox } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'

import { DEFAULT_CATEGORY } from '@/components/Category'
import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

import {
  type CategoryCounts,
  type CategoryOption,
  type CategorySetting,
} from '@/types/categoryTypes'

import { getCountForResetCategory } from '@/utils/getTotalCategoryCount'

type CategoryListboxProps = {
  categoryOption: CategoryOption | undefined
  categorySettings: CategorySetting[]
  categoryCounts?: CategoryCounts
  onCategoryOptionChange: (selectedCategoryOption: CategoryOption) => void
}

export function CategoryListbox({
  categoryOption,
  categorySettings,
  categoryCounts,
  onCategoryOptionChange,
}: CategoryListboxProps) {
  const totalCount = getCountForResetCategory(categoryCounts || {})

  return (
    <Listbox value={categoryOption} onChange={onCategoryOptionChange}>
      {({ open }) => (
        <>
          <ListboxButton ariaLabel="Category options" open={open}>
            <span>Category</span>
            <Icon component={CaretDown} size={16} weight="bold" />
          </ListboxButton>
          <ListboxOptions>
            {totalCount && (
              <ListboxOption
                option={{ id: DEFAULT_CATEGORY, name: DEFAULT_CATEGORY }}
                counts={totalCount}
              />
            )}
            {categorySettings.map((option) => (
              <ListboxOption
                key={option.id}
                option={option}
                counts={categoryCounts}
              />
            ))}
          </ListboxOptions>
        </>
      )}
    </Listbox>
  )
}
