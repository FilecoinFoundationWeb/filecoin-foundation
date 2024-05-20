'use client'

import { Listbox } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

import {
  type CategoryOption,
  type CategorySetting,
} from '@/types/categoryTypes'

type CategoryListboxProps = {
  categoryOption: CategoryOption | undefined
  categorySettings: CategorySetting[]
  onCategoryOptionChange: (selectedCategoryOption: CategoryOption) => void
}

export function CategoryListbox({
  categoryOption,
  categorySettings,
  onCategoryOptionChange,
}: CategoryListboxProps) {
  return (
    <Listbox value={categoryOption} onChange={onCategoryOptionChange}>
      {({ open }) => (
        <>
          <ListboxButton ariaLabel="Category options" open={open}>
            <span>Category</span>
            <Icon component={CaretDown} size={16} weight="bold" />
          </ListboxButton>
          <ListboxOptions>
            {categorySettings.map((option) => (
              <ListboxOption key={option.id} option={option} />
            ))}
          </ListboxOptions>
        </>
      )}
    </Listbox>
  )
}
