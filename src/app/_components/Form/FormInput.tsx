import React from 'react'

import {
  Field,
  Input,
  type InputProps as HeadlessInputProps,
} from '@headlessui/react'
import { clsx } from 'clsx'

import { FormError, type FormErrorProps } from '@/components/Form/FormError'
import { FormLabel, type FormLabelProps } from '@/components/Form/FormLabel'

type HardCodedProps = 'invalid' | 'className'

export type FormInputProps = Omit<HeadlessInputProps, HardCodedProps> &
  FormLabelProps &
  FormErrorProps

export function FormInput({
  label,
  hideLabel,
  error,
  hideError,
  ...rest
}: FormInputProps) {
  return (
    <Field className="w-full">
      <FormLabel label={label} hideLabel={hideLabel} />
      <Input
        {...rest}
        invalid={Boolean(error)}
        className={clsx(
          'form-input block w-full rounded-lg border border-brand-300 bg-brand-800 px-4 py-3 focus:brand-outline placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:text-brand-100 placeholder:focus:text-brand-100 data-[disabled]:cursor-not-allowed [&::-webkit-search-cancel-button]:appearance-none',
          error && 'border-red-400 pr-10',
        )}
      />
      <FormError error={error} hideError={hideError} />
    </Field>
  )
}
