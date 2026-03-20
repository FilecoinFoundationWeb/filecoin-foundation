import {
  RadioGroup,
  Radio,
  Field,
  Label,
  type RadioGroupProps,
} from '@headlessui/react'

import {
  FormField,
  type FormFieldProps,
} from '@filecoin-foundation/ui/FormField'

type ExcludedHeadlessUIProps = 'className'

type RadioOption = {
  value: string
  label: string
}

export type FormRadioGroupProps = {
  options: Array<RadioOption>
} & Omit<RadioGroupProps<'div', string>, ExcludedHeadlessUIProps> &
  Pick<FormFieldProps, 'label' | 'error'>

export function FormRadioGroup({
  label,
  error,
  options,
  ...rest
}: FormRadioGroupProps) {
  return (
    <FormField label={label} error={error}>
      <RadioGroup {...rest} className="flex flex-col gap-3">
        {options.map((option) => (
          <Field key={option.value} className="flex items-center">
            <Radio value={option.value} className="group form-radio-input">
              <div className="form-radio-input-inner" />
            </Radio>
            <Label className="ml-4 cursor-pointer text-zinc-600">
              {option.label}
            </Label>
          </Field>
        ))}
      </RadioGroup>
    </FormField>
  )
}
