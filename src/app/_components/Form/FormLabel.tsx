import React from 'react'

import { Label } from '@headlessui/react'
import { clsx } from 'clsx'

export type FormLabelProps = {
  label: string
  isHidden?: boolean
}

export function FormLabel({ label, isHidden = false }: FormLabelProps) {
  return (
    <Label
      className={clsx(
        'text-base font-bold capitalize text-brand-100',
        isHidden && 'sr-only',
      )}
    >
      {label}
    </Label>
  )
}
