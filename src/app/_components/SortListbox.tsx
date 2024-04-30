'use client'
import { Fragment, useState } from 'react'

import { Listbox } from '@headlessui/react'
import { ArrowsDownUp, CaretDown, Check } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'

export enum SortType {
  Newest = 'newest',
  Oldest = 'oldest',
}

type SortSetting = {
  id: SortType
  name: string
}

type SortListboxProps = {
  onSortTypeChange: (selectedOption: SortType) => void
}

const sortSettings: SortSetting[] = [
  { id: SortType.Newest, name: 'Newest' },
  { id: SortType.Oldest, name: 'Oldest' },
]

export function SortListbox({ onSortTypeChange }: SortListboxProps) {
  const [selectedSortType, setSelectedSortType] = useState(sortSettings[0])

  function handleChange(newSortType: SortSetting) {
    setSelectedSortType(newSortType)
    onSortTypeChange(newSortType.id)
  }

  return (
    <Listbox value={selectedSortType} onChange={handleChange}>
      {() => (
        <>
          <Listbox.Button className="border-1 inline-flex items-center justify-between gap-2 rounded-lg border border-brand-300 p-3 text-brand-300 hover:border-current hover:text-brand-400 focus:outline-2 focus:outline-brand-100 sm:min-w-40">
            <div className="inline-flex items-center gap-2">
              <Icon component={ArrowsDownUp} color="inherit" size={24} />
              <span className="hidden sm:block">{selectedSortType.name}</span>
            </div>
            <span className="hidden sm:block">
              <Icon
                component={CaretDown}
                color="inherit"
                size={16}
                weight="bold"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-14 min-w-40 overflow-hidden rounded-lg border border-brand-100 bg-brand-800 py-1 text-brand-100 focus-within:outline-2 focus:outline-2 focus:outline-brand-100">
            {sortSettings.map((option) => (
              <Listbox.Option key={option.id} value={option} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={clsx(
                      'flex cursor-default items-center justify-between gap-12 px-5 py-2',
                      { 'bg-brand-700': active, 'bg-transparent': !active },
                    )}
                  >
                    {option.name}
                    {selected && (
                      <Icon component={Check} color="inherit" size={20} />
                    )}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  )
}
