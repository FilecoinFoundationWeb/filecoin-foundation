'use client'

import { Listbox } from '@headlessui/react'
import { ArrowsDownUp, CaretDown } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

import { type SortOption } from '@/types/sortTypes'

import { sortSettings } from '@/constants/sortConstants'

type SortListboxProps = {
  sortOption: SortOption
  onSortOptionChange: (selectedSortOption: SortOption) => void
}

export function SortListbox({
  sortOption,
  onSortOptionChange,
}: SortListboxProps) {
  const selectedSortSetting =
    sortSettings.find((option) => option.id === sortOption) || sortSettings[0]

  return (
    <Listbox value={sortOption} onChange={onSortOptionChange}>
      {({ open }) => (
        <>
          <ListboxButton ariaLabel="Sort options" open={open}>
            <div className="inline-flex items-center gap-2">
              <Icon component={ArrowsDownUp} />
              <span className="hidden md:block">
                {selectedSortSetting.name}
              </span>
            </div>
            <span className="hidden md:block">
              <Icon component={CaretDown} size={16} weight="bold" />
            </span>
          </ListboxButton>
          <ListboxOptions position="right">
            {sortSettings.map((option) => (
              <ListboxOption key={option.id} option={option} />
            ))}
          </ListboxOptions>
        </>
      )}
    </Listbox>
  )
}
