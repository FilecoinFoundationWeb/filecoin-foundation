import React from 'react'

import { Label } from '@headlessui/react'
import { clsx } from 'clsx'

export type FormLabelProps = {
  label: string
  hideLabel?: boolean
  optionalLabel?: boolean
}

export function FormLabel({
  label,
  hideLabel = false,
  optionalLabel = false,
}: FormLabelProps) {
  return (
    <Label
      className={clsx(
        'inline-block text-base font-bold capitalize text-brand-100',
        hideLabel && 'sr-only',
      )}
    >
      {label}
      {optionalLabel && (
        <span className="ml-2 inline-block font-light lowercase">
          (optional)
        </span>
      )}
    </Label>
  )
}
