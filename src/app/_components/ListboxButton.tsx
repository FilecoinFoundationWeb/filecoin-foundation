import React from 'react'

import { ListboxButton as HeadlessUIListboxButton } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'

import { Icon, type IconProps } from '@/components/Icon'

type ListboxButtonWrapperProps = {
  children: React.ReactNode
}

type ListboxButtonProps = {
  label: string
  prefixIcon?: IconProps['component']
  truncateLabel?: boolean
}

type CompactListboxButtonProps = {
  prefixIcon: IconProps['component']
}

function ListboxButtonWrapper({ children }: ListboxButtonWrapperProps) {
  return (
    <HeadlessUIListboxButton className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-brand-300 bg-brand-800 p-3 text-brand-300 focus:brand-outline hover:border-current hover:text-brand-400">
      {children}
    </HeadlessUIListboxButton>
  )
}

function ButtonContent({
  label,
  prefixIcon,
  truncateLabel = false,
}: Omit<ListboxButtonProps, 'truncateLabel'> & {
  truncateLabel?: boolean
}) {
  const iconElement = prefixIcon && <Icon component={prefixIcon} />
  const labelElement = (
    <span className={truncateLabel ? 'truncate' : 'text-nowrap'}>{label}</span>
  )

  return truncateLabel ? (
    <>
      {iconElement}
      {labelElement}
    </>
  ) : (
    <div className="inline-flex items-center gap-2">
      {iconElement}
      {labelElement}
    </div>
  )
}

export function ListboxButton({
  label,
  prefixIcon,
  truncateLabel = false,
}: ListboxButtonProps) {
  return (
    <ListboxButtonWrapper>
      <ButtonContent
        label={label}
        prefixIcon={prefixIcon}
        truncateLabel={truncateLabel}
      />
      <Icon component={CaretDown} size={16} weight="bold" />
    </ListboxButtonWrapper>
  )
}

export function CompactListboxButton({
  prefixIcon,
}: CompactListboxButtonProps) {
  return (
    <ListboxButtonWrapper>
      <div className="inline-flex items-center gap-2">
        <Icon component={prefixIcon ?? CaretDown} />
      </div>
    </ListboxButtonWrapper>
  )
}
