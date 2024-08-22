import React from 'react'

import { Label } from '@headlessui/react'
import { clsx } from 'clsx'

export type FormLabelProps = {
  label: string
  hideLabel?: boolean
}

export function FormLabel({ label, hideLabel = false }: FormLabelProps) {
  return (
    <Label
      className={clsx(
        'mb-2 inline-block text-base font-bold capitalize text-brand-100',
        hideLabel && 'sr-only',
      )}
    >
      {label}
    </Label>
  )
}
