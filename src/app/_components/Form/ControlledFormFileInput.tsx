import {
  useFormContext,
  Controller,
  type FieldValues,
  type FieldPathByValue,
} from 'react-hook-form'

import {
  FormFileInput,
  type FormFileInputProps,
} from '@/components/Form/FormFileInput/FormFileInput'

type ExcludedReactHookFormProps =
  | 'defaultValue'
  | 'error'
  | 'files'
  | 'onBlur'
  | 'onChange'
  | 'required'
  | 'value'

type BaseControlledFormFileInputProps = Omit<
  FormFileInputProps,
  ExcludedReactHookFormProps
>

interface ControlledFormFileInputProps<FormValues extends FieldValues>
  extends BaseControlledFormFileInputProps {
  name: FieldPathByValue<FormValues, FileList>
}

export function ControlledFormFileInput<FormValues extends FieldValues>({
  name,
  ...rest
}: ControlledFormFileInputProps<FormValues>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <FormFileInput
          {...rest}
          files={value}
          error={errors[name]?.message?.toString()}
          onChange={onChange}
        />
      )}
    />
  )
}
