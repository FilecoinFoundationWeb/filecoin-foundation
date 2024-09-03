import React from 'react'

import { Input, type InputProps as HeadlessInputProps } from '@headlessui/react'
import { clsx } from 'clsx'

import { FormField, type FormFieldProps } from '@/components/Form/FormField'

type ExcludedHeadlessUIProps = 'invalid' | 'className'

export type FormInputProps = Omit<HeadlessInputProps, ExcludedHeadlessUIProps> &
  FormFieldProps

export function FormInput({
  label,
  hideLabel,
  error,
  ...rest
}: FormInputProps) {
  return (
    <FormField label={label} hideLabel={hideLabel} error={error}>
      <Input
        {...rest}
        invalid={Boolean(error)}
        className={clsx(
          'block w-full rounded-lg border border-brand-300 bg-brand-800 px-3.5 py-3 focus:brand-outline placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:text-brand-100 placeholder:focus:text-brand-100 data-[disabled]:cursor-not-allowed',
          error && 'border-red-400',
        )}
      />
    </FormField>
  )
}
