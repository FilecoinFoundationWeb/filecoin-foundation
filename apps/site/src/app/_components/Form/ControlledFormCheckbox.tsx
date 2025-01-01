import {
  useFormContext,
  Controller,
  type FieldValues,
  type FieldPathByValue,
} from 'react-hook-form'

import {
  FormCheckbox,
  type FormCheckboxProps,
} from '@/components/Form/FormCheckbox'

type ExcludedReactHookFormProps =
  | 'checked'
  | 'defaultChecked'
  | 'defaultValue'
  | 'onBlur'
  | 'onChange'
  | 'required'
  | 'value'

type BaseControlledFormCheckboxProps = Omit<
  FormCheckboxProps,
  ExcludedReactHookFormProps
>

interface ControlledFormCheckboxProps<FormValues extends FieldValues>
  extends BaseControlledFormCheckboxProps {
  name: FieldPathByValue<FormValues, boolean>
}

export function ControlledFormCheckbox<FormValues extends FieldValues>({
  name,
  ...rest
}: ControlledFormCheckboxProps<FormValues>) {
  const { control } = useFormContext<FormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => (
        <FormCheckbox
          {...rest}
          checked={Boolean(value)}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  )
}
