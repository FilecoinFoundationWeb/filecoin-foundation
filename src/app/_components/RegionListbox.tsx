'use client'

import { Listbox } from '@headlessui/react'
import { FunnelSimple } from '@phosphor-icons/react'

import { type CategoryCounts, type CategoryOption } from '@/types/categoryTypes'

import { DEFAULT_CATEGORY } from '@/constants/categoryConstants'

import { getTotalCategoryCount } from '@/utils/getTotalCategoryCount'

import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

type RegionListboxProps = {
  selected: CategoryOption | undefined
  options: Array<CategoryOption>
  counts?: CategoryCounts
  onChange: (selected: CategoryOption) => void
}

type OptionWithCategoryCount = Pick<RegionListboxProps, 'options' | 'counts'>

export function RegionListbox({
  selected,
  options,
  counts,
  onChange,
}: RegionListboxProps) {
  const totalCategoryCount = getTotalCategoryCount(counts)
  const optionsWithCounts = getOptionsWithCounts({ options, counts })

  const defaultOption = {
    id: DEFAULT_CATEGORY,
    name: DEFAULT_CATEGORY,
    count: totalCategoryCount?.All || 0,
  }

  return (
    <Listbox value={selected || defaultOption} onChange={onChange}>
      <ListboxButton
        text={selected?.name || 'Region'}
        leadingIcon={FunnelSimple}
      />
      <ListboxOptions>
        {totalCategoryCount && <ListboxOption option={defaultOption} />}
        {optionsWithCounts.map((option) => (
          <ListboxOption key={option.id} option={option} />
        ))}
      </ListboxOptions>
    </Listbox>
  )
}

function getOptionsWithCounts({ options, counts }: OptionWithCategoryCount) {
  return options.map((option) => ({
    ...option,
    ...(counts && { count: counts[option.id] || 0 }),
  }))
}
