import React from 'react'

import { ListboxButton as HeadlessUIListboxButton } from '@headlessui/react'

type ListboxButtonProps = {
  children: React.ReactNode
}

export function ListboxButton({ children }: ListboxButtonProps) {
  return (
    <HeadlessUIListboxButton className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-brand-300 p-3 text-brand-300 focus:brand-outline hover:border-current hover:text-brand-400 md:min-w-40">
      {children}
    </HeadlessUIListboxButton>
  )
}
