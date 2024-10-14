import { Fragment } from 'react'

import { ListboxOption as HeadlessUIListboxOption } from '@headlessui/react'
import { Check } from '@phosphor-icons/react'

import { type CategoryCounts } from '@/types/categoryTypes'

import { Icon } from '@/components/Icon'

type Option = {
  id: string
  name: string
}

type ListboxOptionProps = {
  option: Option
  counts?: CategoryCounts
}

function OptionContent({ option, counts }: ListboxOptionProps) {
  return (
    <span className="inline-flex items-baseline gap-2">
      <span className="text-nowrap">{option.name}</span>
      {counts && (
        <span className="text-sm font-light">({counts[option.id]})</span>
      )}
    </span>
  )
}

export function ListboxOption({ option, counts }: ListboxOptionProps) {
  return (
    <HeadlessUIListboxOption value={option.id} as={Fragment}>
      <li className="group flex cursor-default items-center justify-between gap-12 bg-transparent px-5 py-2 data-[focus]:bg-brand-500">
        <OptionContent option={option} counts={counts} />
        <span className="mb-px group-data-[selected]:visible">
          <Icon component={Check} size={20} />
        </span>
      </li>
    </HeadlessUIListboxOption>
  )
}
