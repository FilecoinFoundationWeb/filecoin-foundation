import { Input, type InputProps as HeadlessInputProps } from '@headlessui/react'
import { clsx } from 'clsx'

import { FormField, type FormFieldProps } from './FormField'

type ExcludedHeadlessUIProps = 'invalid' | 'className'

export type FormInputProps = Omit<HeadlessInputProps, ExcludedHeadlessUIProps> &
  FormFieldProps

export function FormInput({
  label,
  hideLabel,
  addOptionalToLabel,
  error,
  description,
  ...rest
}: FormInputProps) {
  return (
    <FormField
      label={label}
      hideLabel={hideLabel}
      addOptionalToLabel={addOptionalToLabel}
      error={error}
      description={description}
    >
      <Input
        {...rest}
        invalid={Boolean(error)}
        className={clsx('text-input', error && 'text-input--error')}
      />
    </FormField>
  )
}
