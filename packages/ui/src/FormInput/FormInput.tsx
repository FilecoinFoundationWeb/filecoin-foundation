import { Input, type InputProps as HeadlessInputProps } from '@headlessui/react'

import {
  FormField,
  type FormFieldProps,
} from '@filecoin-foundation/ui/FormField'

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
      <Input {...rest} invalid={Boolean(error)} className="form-text-input" />
    </FormField>
  )
}
