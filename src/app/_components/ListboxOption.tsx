import { Fragment } from 'react'

import { Listbox } from '@headlessui/react'
import { Check } from '@phosphor-icons/react'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'

export type Option = {
  id: string
  name: string
}

type ListboxOptionProps = {
  option: Option
}

export function ListboxOption({ option }: ListboxOptionProps) {
  return (
    <Listbox.Option value={option.id} as={Fragment}>
      {({ active, selected }) => (
        <li
          className={clsx(
            'flex cursor-default items-center justify-between gap-12 px-5 py-2',
            { 'bg-brand-700': active, 'bg-transparent': !active },
          )}
        >
          {option.name}
          {selected && <Icon component={Check} size={20} />}
        </li>
      )}
    </Listbox.Option>
  )
}
