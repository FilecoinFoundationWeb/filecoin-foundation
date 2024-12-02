import { Field } from '@headlessui/react'

import { FormError, type FormErrorProps } from '@/components/Form/FormError'
import { FormLabel, type FormLabelProps } from '@/components/Form/FormLabel'

import {
  FormLabelDescription,
  type FormLabelDescriptionProps,
} from './FormLabelDescription'

export type FormFieldProps = {
  children?: React.ReactNode
  description?: FormLabelDescriptionProps['children']
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
      {description ? (
        <div className="space-y-1">
          <FormLabel
            label={label}
            hideLabel={hideLabel}
            addOptionalToLabel={addOptionalToLabel}
          />

          <FormLabelDescription>{description}</FormLabelDescription>
        </div>
      ) : (
        <FormLabel
          label={label}
          hideLabel={hideLabel}
          addOptionalToLabel={addOptionalToLabel}
        />
      )}

      {children}
      <FormError error={error} />
    </Field>
  )
}
