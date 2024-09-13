import React, { type ElementType } from 'react'

import { Label, type LabelProps } from '@headlessui/react'
import { clsx } from 'clsx'

export type FormLabelProps<As extends ElementType = 'label'> = {
  label: string
  hideLabel?: boolean
  addOptionalToLabel?: boolean
} & LabelProps<As>

export function FormLabel<As extends ElementType = 'label'>({
  label,
  hideLabel = false,
  addOptionalToLabel = false,
  ...rest
}: FormLabelProps<As>) {
  return (
    <Label
      {...rest}
      className={clsx(
        'inline-block text-base font-bold capitalize text-brand-100',
        hideLabel && 'sr-only',
      )}
    >
      {label}
      {addOptionalToLabel && (
        <span className="ml-2 inline-block font-light lowercase">
          (optional)
        </span>
      )}
    </Label>
  )
}
