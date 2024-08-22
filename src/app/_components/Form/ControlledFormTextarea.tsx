import {
  useFormContext,
  Controller,
  type FieldValues,
  type FieldPathByValue,
} from 'react-hook-form'

import {
  FormTextarea,
  type FormTextareaProps,
} from '@/components/Form/FormTextarea'

type ControlledProps =
  | 'value'
  | 'defaultValue'
  | 'error'
  | 'onChange'
  | 'onBlur'
  | 'required'
  | 'characterCount'
type AvailableTextareaProps = Omit<FormTextareaProps, ControlledProps>

type ControlledFormTextAreaProps<FormValues extends FieldValues> = {
  name: FieldPathByValue<FormValues, string>
} & AvailableTextareaProps

export function ControlledFormTextarea<FormValues extends FieldValues>({
  name,
  ...rest
}: ControlledFormTextAreaProps<FormValues>) {
  const { control, formState } = useFormContext<FormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const value = field.value ?? ''
        const error = formState.errors[name]

        return (
          <FormTextarea
            {...rest}
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
