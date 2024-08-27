import {
  useFormContext,
  Controller,
  type FieldValues,
  type FieldPathByValue,
} from 'react-hook-form'

import {
  FormListbox,
  type OptionType,
  type FormListboxProps,
} from '@/components/Form/FormListbox'

type ControlledProps =
  | 'value'
  | 'defaultValue'
  | 'error'
  | 'onChange'
  | 'onBlur'
  | 'required'
type AvailableListboxProps = Omit<FormListboxProps, ControlledProps>

type ControlledFormListboxProps<FormValues extends FieldValues> = {
  name: FieldPathByValue<FormValues, OptionType>
} & AvailableListboxProps

export function ControlledFormListbox<FormValues extends FieldValues>({
  name,
  ...rest
}: ControlledFormListboxProps<FormValues>) {
  const { control, formState } = useFormContext<FormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const value = field.value
        const error = formState.errors[name]

        return (
          <FormListbox
            {...rest}
            value={value}
            error={error && String(error.message)}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )
      }}
    />
  )
}
