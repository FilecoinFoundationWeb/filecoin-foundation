import {
  useFormContext,
  Controller,
  type FieldValues,
  type FieldPathByValue,
} from 'react-hook-form'

import {
  FormTextarea,
  type FormTextareaProps,
} from '@/components/Form/FormTextarea/FormTextarea'

type ExcludedReactHookFormProps =
  | 'characterCount'
  | 'defaultValue'
  | 'error'
  | 'onBlur'
  | 'onChange'
  | 'required'
  | 'value'

type BaseControlledFormTextareaProps = Omit<
  FormTextareaProps,
  ExcludedReactHookFormProps
>

interface ControlledFormTextareaProps<FormValues extends FieldValues>
  extends BaseControlledFormTextareaProps {
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
