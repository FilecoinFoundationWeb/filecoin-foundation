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

type ExcludedProps =
  | 'characterCount'
  | 'defaultValue'
  | 'error'
  | 'onBlur'
  | 'onChange'
  | 'required'
  | 'value'

type UncontrolledTextareaProps = Omit<FormTextareaProps, ExcludedProps>

interface ControlledFormTextareaProps<FormValues extends FieldValues>
  extends UncontrolledTextareaProps {
  name: FieldPathByValue<FormValues, string>
}

export function ControlledFormTextarea<FormValues extends FieldValues>({
  name,
  ...rest
}: ControlledFormTextareaProps<FormValues>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value = '', onChange, onBlur } }) => (
        <FormTextarea
          {...rest}
          value={value}
          error={errors[name]?.message?.toString()}
          characterCount={value.length}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  )
}
