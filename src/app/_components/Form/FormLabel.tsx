import React, { type ElementType } from 'react'

import { Label } from '@headlessui/react'
import { clsx } from 'clsx'

import {
  FormLabelDescription,
  type FormLabelDescriptionProps,
} from './FormLabelDescription'

export type FormLabelProps = {
  as?: ElementType
  label: string
  hideLabel?: boolean
  addOptionalToLabel?: boolean
  description?: FormLabelDescriptionProps['children']
}

export function FormLabel({
  as = 'label',
  label,
  hideLabel = false,
  addOptionalToLabel = false,
  description,
  ...rest
}: FormLabelProps) {
  return (
    <span>
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
      {description && (
        <span className="my-1 block">
          <FormLabelDescription>{description}</FormLabelDescription>
        </span>
      )}
    </span>
  )
}
