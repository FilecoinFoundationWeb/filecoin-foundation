'use client'

import { Listbox } from '@headlessui/react'
import { ArrowsDownUp, CaretDown } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

import { SortOption, type SortId } from '@/types/sortTypes'

type SortListboxProps = {
  sortId: SortId
  onChange: (selectedOption: SortId) => void
  options: ReadonlyArray<SortOption>
}

export function SortListbox({ sortId, onChange, options }: SortListboxProps) {
  const selectedOption =
    options.find((option) => option.id === sortId) || options[0]

  return (
    <Listbox value={sortId} onChange={onChange}>
      {({ open }) => (
        <>
          <ListboxButton ariaLabel="Sort options" open={open}>
            <div className="inline-flex items-center gap-2">
              <Icon component={ArrowsDownUp} />
              <span className="hidden text-nowrap md:block">
                {selectedOption.name}
              </span>
            </div>
            <span className="hidden md:block">
              <Icon component={CaretDown} size={16} weight="bold" />
            </span>
          </ListboxButton>
          <ListboxOptions position="right">
            {options.map((option) => (
              <ListboxOption key={option.id} option={option} />
            ))}
          </ListboxOptions>
        </>
      )}
    </Listbox>
  )
}
