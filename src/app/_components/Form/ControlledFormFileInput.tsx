import {
  useFormContext,
  Controller,
  type FieldValues,
  type FieldPathByValue,
} from 'react-hook-form'

import {
  FormFileInput,
  type FormFileInputProps,
} from '@/components/Form/FormFileInput'

type ControlledProps =
  | 'value'
  | 'defaultValue'
  | 'files'
  | 'onChange'
  | 'onBlur'
  | 'error'
  | 'required'
type AvailableFileInputProps = Omit<FormFileInputProps, ControlledProps>

type ControlledFormFileInputProps<FormValues extends FieldValues> = {
  name: FieldPathByValue<FormValues, FileList>
} & AvailableFileInputProps

export function ControlledFormFileInput<FormValues extends FieldValues>({
  name,
  ...rest
}: ControlledFormFileInputProps<FormValues>) {
  const { control, formState } = useFormContext<FormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const value = field.value
        const error = formState.errors[name]

        return (
          <FormFileInput
            {...rest}
            files={value}
            error={error && String(error.message)}
            onChange={field.onChange}
          />
        )
      }}
    />
  )
}
