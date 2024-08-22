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

import { getTotalCategoryCount } from '@/utils/getCountForResetCategory'

type CategoryListboxProps = {
  selectedCategory: CategoryOption | undefined
  categoryOptions: CategorySetting[]
  categoryCounts?: CategoryCounts
  onCategoryChange: (selectedCategory: CategoryOption) => void
}

export function CategoryListbox({
  selectedCategory,
  categoryOptions,
  categoryCounts,
  onCategoryChange,
}: CategoryListboxProps) {
  const totalCategoryCount = getTotalCategoryCount(categoryCounts)

  return (
    <Listbox value={selectedCategory} onChange={onCategoryChange}>
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
            {categoryOptions.map((option) => (
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
