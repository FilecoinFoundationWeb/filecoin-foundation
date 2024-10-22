import { ListboxOptions as HeadlessUIListboxOptions } from '@headlessui/react'
import { clsx } from 'clsx'

type ListboxOptionsProps = {
  position?: 'left' | 'right'
  children: React.ReactNode
}

export function ListboxOptions({
  position = 'left',
  children,
}: ListboxOptionsProps) {
  const positionClass = position === 'right' ? 'right-6 md:right-auto' : ''

  return (
    <HeadlessUIListboxOptions
      className={clsx(
        'absolute z-10 mt-2 max-w-sm overflow-hidden rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2',
        positionClass,
      )}
    >
      {children}
    </HeadlessUIListboxOptions>
  )
}
