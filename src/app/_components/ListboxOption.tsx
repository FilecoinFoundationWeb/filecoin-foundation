import { Fragment } from 'react'

import { Listbox } from '@headlessui/react'
import { Check } from '@phosphor-icons/react'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'

import { type CategoryCounts } from '@/types/categoryTypes'

export type Option = {
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
      <span>{option.name}</span>
      {counts && (
        <span className="text-sm font-light">({counts[option.id]})</span>
      )}
    </span>
  )
}

export function ListboxOption({ option, counts }: ListboxOptionProps) {
  return (
    <Listbox.Option value={option.id} as={Fragment}>
      {({ active, selected }) => (
        <li
          className={clsx(
            'flex cursor-default items-center justify-between gap-12 px-5 py-2',
            { 'bg-brand-700': active, 'bg-transparent': !active },
          )}
        >
          <OptionContent option={option} counts={counts} />
          {selected && <Icon component={Check} size={20} />}
        </li>
      )}
    </Listbox.Option>
  )
}
