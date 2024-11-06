import React from 'react'

import { ListboxButton as HeadlessUIListboxButton } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'

import { Icon, type IconProps } from '@/components/Icon'

type ListboxButtonWrapperProps = {
  children: React.ReactNode
}

type ListboxButtonProps = {
  text: string
  prefixIcon?: IconProps['component']
  isCompact?: boolean
}

function ListboxButtonWrapper({ children }: ListboxButtonWrapperProps) {
  return (
    <HeadlessUIListboxButton className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-brand-300 bg-brand-800 p-3 text-brand-300 focus:brand-outline hover:border-current hover:text-brand-400">
      {children}
    </HeadlessUIListboxButton>
  )
}

export function ListboxButton({
  text,
  prefixIcon,
  isCompact,
}: ListboxButtonProps) {
  return (
    <ListboxButtonWrapper>
      <div
        className={`${
          isCompact ? 'hidden md:flex' : 'flex'
        } w-full items-center justify-between gap-2 md:inline-flex`}
      >
        {prefixIcon && <Icon component={prefixIcon} />}
        <span className="min-w-0 truncate">{text}</span>
        <Icon component={CaretDown} size={16} weight="bold" />
      </div>

      <div className={`${isCompact ? 'flex md:hidden' : 'hidden'}`}>
        <Icon component={prefixIcon ?? CaretDown} />
      </div>
    </ListboxButtonWrapper>
  )
}
