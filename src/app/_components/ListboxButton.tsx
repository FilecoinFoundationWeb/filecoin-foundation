import React from 'react'

import { ListboxButton as HeadlessUIListboxButton } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'

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
    <HeadlessUIListboxButton className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-brand-300 bg-brand-800 p-3 text-brand-300 focus:brand-outline hover:border-current hover:text-brand-400">
      <div
        className={`${
          isCompact ? 'hidden' : 'flex'
        } w-full items-center justify-between gap-2`}
      >
        <div className="flex w-3/4 gap-2">
          {prefixIcon && <Icon component={prefixIcon} />}
          <span className="min-w-0 truncate">{text}</span>
        </div>
        <Icon component={CaretDown} size={16} weight="bold" />
      </div>
      <div className={`${isCompact ? 'flex' : 'hidden'}`}>
        <Icon component={prefixIcon ?? CaretDown} />
      </div>
    </HeadlessUIListboxButton>
  )
}
