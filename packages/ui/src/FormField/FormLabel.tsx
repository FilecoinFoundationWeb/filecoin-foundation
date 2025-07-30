import { type ElementType } from 'react'

import { Label } from '@headlessui/react'
import { clsx } from 'clsx'

export type FormLabelProps = {
  as?: ElementType
  label: string
  hideLabel?: boolean
  addOptionalToLabel?: boolean
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
      className={clsx('form-label', hideLabel && 'sr-only')}
    >
      {label}
      {addOptionalToLabel && (
        <span className="form-label-optional-text">(optional)</span>
      )}
    </Label>
  )
}
