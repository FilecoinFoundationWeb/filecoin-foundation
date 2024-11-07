import React from 'react'

import { ListboxButton as HeadlessUIListboxButton } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import { Icon, type IconProps } from '@/components/Icon'

type ListboxButtonProps = {
  text: string
  prefixIcon?: IconProps['component']
  isCompact?: boolean
}

export function ListboxButton({
  text,
  prefixIcon,
  isCompact,
}: ListboxButtonProps) {
  return (
    <HeadlessUIListboxButton className="relative inline-flex w-full items-center justify-between gap-2 rounded-lg border border-brand-300 bg-brand-800 p-3 text-brand-300 focus:brand-outline hover:border-current hover:text-brand-400">
      <div
        className={clsx(
          'w-full items-center justify-start gap-2',
          isCompact ? 'hidden' : 'flex',
        )}
      >
        {prefixIcon && <Icon component={prefixIcon} />}
        <span className="block truncate pr-6">{text}</span>

        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <Icon component={CaretDown} size={16} weight="bold" />
        </div>
      </div>
      <div className={`${isCompact ? 'flex' : 'hidden'}`}>
        <Icon component={prefixIcon ?? CaretDown} />
      </div>
    </HeadlessUIListboxButton>
  )
}
