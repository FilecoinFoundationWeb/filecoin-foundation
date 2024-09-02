import React from 'react'

import {
  Field,
  Input,
  type InputProps as HeadlessInputProps,
} from '@headlessui/react'
import { clsx } from 'clsx'

import { FormError, type FormErrorProps } from '@/components/Form/FormError'
import { FormLabel, type FormLabelProps } from '@/components/Form/FormLabel'

type ExcludedProps = 'invalid' | 'className'

export type FormInputProps = Omit<HeadlessInputProps, ExcludedProps> &
  FormLabelProps &
  FormErrorProps

export function FormInput({
  label,
  hideLabel,
  error,
  hideError = false,
  ...rest
}: FormInputProps) {
  return (
    // We need to talk about how to handle spacing - FormLabel has mb-2, Input has py-3, FormError has mt-2 - Maybe we should move the spacing to a FormField component?

    // export function FormField({
    //   label,
    //   hideLabel,
    //   error,
    //   hideError,
    //   children,
    // }: FormInputProps & { children: React.ReactNode }) {
    //   return (
    //     <Field className="w-full">
    //       <FormLabel label={label} hideLabel={hideLabel} />
    //       {children}
    //       <FormError error={error} hideError={hideError} />
    //     </Field>
    //   )
    // }

    <Field className="w-full">
      <FormLabel label={label} hideLabel={hideLabel} />
      <Input
        {...rest}
        invalid={Boolean(error)}
        className={clsx(
          'block w-full rounded-lg border border-brand-300 bg-brand-800 px-3.5 py-3 focus:brand-outline placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:text-brand-100 placeholder:focus:text-brand-100 data-[disabled]:cursor-not-allowed',
          error && 'border-red-400',
        )}
      />
      <FormError error={error} hideError={hideError} />
    </Field>
  )
}
