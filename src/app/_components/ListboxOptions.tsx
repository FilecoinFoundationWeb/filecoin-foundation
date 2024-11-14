import { ListboxOptions as HeadlessUIListboxOptions } from '@headlessui/react'
import { clsx } from 'clsx'

type ListboxOptionsProps = {
  children: React.ReactNode
  anchor: {
    to: 'bottom' | 'bottom end' | 'bottom start'
    gap: 8 | 12
  }
  matchButtonWidth?: boolean
}

export function ListboxOptions({
  children,
  anchor,
  matchButtonWidth,
}: ListboxOptionsProps) {
  const widthClass = clsx({
    'w-[var(--button-width)]': matchButtonWidth,
  })

  return (
    <HeadlessUIListboxOptions
      as="ul"
      anchor={anchor}
      className={clsx(
        'rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2',
        widthClass,
      )}
    >
      {children}
    </HeadlessUIListboxOptions>
  )
}
