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

type ExcludedProps =
  | 'defaultValue'
  | 'error'
  | 'onBlur'
  | 'onChange'
  | 'required'
  | 'value'

type UncontrolledListboxProps = Omit<FormListboxProps, ExcludedProps>

interface ControlledFormListboxProps<FormValues extends FieldValues>
  extends UncontrolledListboxProps {
  name: FieldPathByValue<FormValues, OptionType>
}

export function ControlledFormListbox<FormValues extends FieldValues>({
  name,
  ...rest
}: ControlledFormListboxProps<FormValues>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => (
        <FormListbox
          {...rest}
          value={value}
          error={errors[name]?.message?.toString()}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  )
}
