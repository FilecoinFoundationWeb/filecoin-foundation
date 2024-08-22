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

type ControlledProps =
  | 'checked'
  | 'defaultChecked'
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'onBlur'
  | 'required'
type AvailableCheckboxProps = Omit<FormCheckboxProps, ControlledProps>

type ControlledFormCheckboxProps<FormValues extends FieldValues> = {
  name: FieldPathByValue<FormValues, boolean>
} & AvailableCheckboxProps

export function ControlledFormCheckbox<FormValues extends FieldValues>({
  name,
  ...props
}: ControlledFormCheckboxProps<FormValues>) {
  const { control } = useFormContext<FormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const value = Boolean(field.value)

        return (
          <FormCheckbox
            {...props}
            checked={value}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )
      }}
    />
  )
}
