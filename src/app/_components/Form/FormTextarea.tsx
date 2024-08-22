import React from 'react'

import {
  Field,
  Textarea,
  type TextareaProps as HeadlessTextareaProps,
} from '@headlessui/react'
import { clsx } from 'clsx'

import { FormError, type FormErrorProps } from '@/components/Form/FormError'
import { FormLabel, type FormLabelProps } from '@/components/Form/FormLabel'

type HardCodedProps = 'invalid' | 'className'

export type FormTextareaProps = {
  error?: FormErrorProps['error']
  charcterLimit: number
  characterCount: number
} & Omit<HeadlessTextareaProps, HardCodedProps> &
  FormLabelProps

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
      <FormLabel label={label} hideLabel={hideLabel} />
      <Textarea
        {...rest}
        invalid={Boolean(error)}
        className={clsx(
          'peer form-input block min-h-32 w-full rounded-lg border border-brand-300 bg-brand-800 px-4 py-3 focus:brand-outline placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:text-brand-100 placeholder:focus:text-brand-100 data-[disabled]:cursor-not-allowed [&::-webkit-search-cancel-button]:appearance-none',
          error && 'border-red-400',
        )}
      />
      <div className="mt-2 flex h-6 items-center justify-between">
        <FormError.Message error={error} />
        <CharacterCounter count={characterCount} limit={charcterLimit} />
      </div>
    </Field>
  )
}

type CharacterCounterProps = {
  count: FormTextareaProps['characterCount']
  limit: FormTextareaProps['charcterLimit']
}

function CharacterCounter({ count, limit }: CharacterCounterProps) {
  return (
    <p
      className={clsx(
        'mb-1 text-sm',
        count > limit ? 'text-red-400' : 'text-brand-300',
      )}
    >
      {count} / {limit}
    </p>
  )
}
