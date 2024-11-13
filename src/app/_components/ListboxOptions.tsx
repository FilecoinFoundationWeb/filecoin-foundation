import { ListboxOptions as HeadlessUIListboxOptions } from '@headlessui/react'
import { clsx } from 'clsx'

type ListboxOptionsProps = {
  children: React.ReactNode
  position?: 'left' | 'right' | 'bottom'
  inheritWidth?: 'button'
}

//! review gaps in figma

export function ListboxOptions({
  children,
  position = 'left',
  inheritWidth,
}: ListboxOptionsProps) {
  const positionClass = clsx({
    'right-6 md:right-auto': position === 'right',
    'md:bottom-auto': position === 'bottom',
  })

  const widthClass = clsx({
    'w-[var(--button-width)]': inheritWidth === 'button',
  })

  return (
    <HeadlessUIListboxOptions
      className={clsx(
        'absolute z-10 mt-3 overflow-hidden rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2',
        positionClass,
        widthClass,
      )}
    >
      {children}
    </HeadlessUIListboxOptions>
  )
}
