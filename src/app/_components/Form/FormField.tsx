import { Field } from '@headlessui/react'

import { FormError, type FormErrorProps } from '@/components/Form/FormError'
import { FormLabel, type FormLabelProps } from '@/components/Form/FormLabel'

export type FormFieldProps = {
  children?: React.ReactNode
} & FormLabelProps &
  FormErrorProps

export const formFieldStyle = 'flex w-full flex-col gap-2'

export function FormField({
  label,
  hideLabel,
  addOptionalToLabel,
  error,
  description,
  children,
}: FormFieldProps) {
  return (
    <Field className={formFieldStyle}>
      <FormLabel
        label={label}
        hideLabel={hideLabel}
        addOptionalToLabel={addOptionalToLabel}
        description={description}
      />
      {children}
      <FormError error={error} />
    </Field>
  )
}
