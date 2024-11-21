import React from 'react'

import {
  Field,
  Textarea,
  type TextareaProps as HeadlessTextareaProps,
} from '@headlessui/react'
import { clsx } from 'clsx'

import { FormError, type FormErrorProps } from '@/components/Form/FormError'
import { formFieldStyle } from '@/components/Form/FormField'
import { FormLabel, type FormLabelProps } from '@/components/Form/FormLabel'

import { CharacterCounter } from './CharacterCounter'

type ExcludedHeadlessUIProps = 'invalid' | 'className'

export type FormTextareaProps = {
  characterLimit: number
  characterCount: number
} & Omit<HeadlessTextareaProps, ExcludedHeadlessUIProps> &
  FormLabelProps &
  FormErrorProps

export function FormTextarea({
  error,
  label,
  hideLabel,
  characterCount,
  characterLimit,
  description,
  ...rest
}: FormTextareaProps) {
  return (
    <Field className={formFieldStyle}>
      <FormLabel
        label={label}
        hideLabel={hideLabel}
        description={description}
      />

      <Textarea
        {...rest}
        invalid={Boolean(error)}
        className={clsx(
          'block min-h-44 w-full rounded-lg border border-brand-300 bg-brand-800 px-3.5 py-3 focus:brand-outline placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:text-brand-100 placeholder:focus:text-brand-100 data-[disabled]:cursor-not-allowed',
          error && 'border-red-400',
        )}
      />
      <FormError.Container>
        <div className="flex items-center justify-between gap-1">
          <FormError.Message error={error} />
          <CharacterCounter count={characterCount} limit={characterLimit} />
        </div>
      </FormError.Container>
    </Field>
  )
}
