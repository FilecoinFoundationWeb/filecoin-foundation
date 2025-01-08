import React, { type ElementType } from 'react'

import { Label } from '@headlessui/react'
import { clsx } from 'clsx'

export type FormLabelProps = {
  label: string,
  addOptionalToLabel?: boolean,
  as?: ElementType,
  hideLabel?: boolean
}

export function FormLabel({
  as = 'label',
  label,
  hideLabel = false,
  addOptionalToLabel = false,
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
