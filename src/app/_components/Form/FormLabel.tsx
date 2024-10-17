import React, { type ElementType } from 'react'

import { Label } from '@headlessui/react'
import { clsx } from 'clsx'

export type FormLabelProps = {
  label: string
  hideLabel?: boolean
  addOptionalToLabel?: boolean
  as?: ElementType
}

export function FormLabel({
  label,
  hideLabel = false,
  addOptionalToLabel = false,
  as = 'label',
  ...rest
}: FormLabelProps) {
  return (
    <Label
      {...rest}
      as={as}
      className={clsx(
        'inline-block text-base font-bold text-brand-100',
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
