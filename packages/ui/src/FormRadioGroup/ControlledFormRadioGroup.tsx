import {
  useFormContext,
  Controller,
  type FieldValues,
  type FieldPathByValue,
} from 'react-hook-form'

import { FormRadioGroup, type FormRadioGroupProps } from './FormRadioGroup'

type ExcludedReactHookFormProps =
  | 'defaultValue'
  | 'error'
  | 'onBlur'
  | 'onChange'
  | 'value'

type BaseControlledFormRadioGroupProps = Omit<
  FormRadioGroupProps,
  ExcludedReactHookFormProps
>

interface ControlledFormRadioGroupProps<FormValues extends FieldValues>
  extends BaseControlledFormRadioGroupProps {
  name: FieldPathByValue<FormValues, string>
}

export function ControlledFormRadioGroup<FormValues extends FieldValues>({
  name,
  ...rest
}: ControlledFormRadioGroupProps<FormValues>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => (
        <FormRadioGroup
          {...rest}
          value={value ?? ''}
          onChange={onChange}
          onBlur={onBlur}
          error={errors[name]?.message?.toString()}
        />
      )}
    />
  )
}
