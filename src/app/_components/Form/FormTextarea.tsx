import React from 'react'

import {
  Field,
  Textarea,
  type TextareaProps as HeadlessTextareaProps,
} from '@headlessui/react'
import { clsx } from 'clsx'

import { FormLabel, type FormLabelProps } from '@/components/Form/FormLabel'

export type FormTextareaProps = {
  label: FormLabelProps['label']
  hideLabel?: FormLabelProps['isHidden']
  error?: string
  charcterLimit: number
  characterCount: number
} & HeadlessTextareaProps

export function FormTextarea({
  error,
  label,
  hideLabel,
  characterCount,
  charcterLimit,
  ...rest
}: FormTextareaProps) {
  return (
    <Field className="relative w-full">
      <FormLabel label={label} isHidden={hideLabel} />
      <Textarea
        className={clsx(
          'peer form-input block min-h-32 w-full rounded-lg border border-brand-300 bg-brand-800 px-4 py-3 focus:brand-outline placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:text-brand-100 placeholder:focus:text-brand-100 [&::-webkit-search-cancel-button]:appearance-none',
          error && 'border-red-400',
        )}
        {...rest}
      />
      <div className="mt-2 flex items-center justify-between">
        <p className="text-nowrap text-red-400">{error}</p>

        <p
          className={clsx(
            'mb-1 text-sm',
            characterCount > charcterLimit ? 'text-red-400' : 'text-brand-300',
          )}
        >
          {characterCount} / {charcterLimit}
        </p>
      </div>
    </Field>
  )
}
