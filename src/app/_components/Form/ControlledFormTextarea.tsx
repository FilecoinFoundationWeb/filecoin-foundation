import {
  useFormContext,
  Controller,
  RegisterOptions,
  FieldValues,
  Path,
} from 'react-hook-form'

import {
  FormTextarea,
  type FormTextareaProps,
} from '@/components/Form/FormTextarea'

type ControlledFormTextAreaProps<FormType extends FieldValues> = {
  name: Path<FormType>
  rules?: RegisterOptions<FormType>
} & Omit<FormTextareaProps, 'characterCount' | 'error'>

export function ControlledFormTextarea<FormType extends FieldValues>({
  name,
  rules,
  ...props
}: ControlledFormTextAreaProps<FormType>) {
  const { control, formState } = useFormContext<FormType>()

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => {
        const value = field.value ?? ''
        const error = formState.errors[name]

        return (
          <FormTextarea
            {...props}
            value={value}
            error={error && String(error.message)}
            characterCount={value.length}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )
      }}
    />
  )
}
